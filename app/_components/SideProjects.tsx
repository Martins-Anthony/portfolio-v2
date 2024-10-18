'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Portal } from '@radix-ui/react-tooltip';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

type SideProjectProps = {
  title: string;
  description: string;
  url: string;
  refForPortal: number;
};

const checkMultipleImages = async (
  urls: string[]
): Promise<{ [key: string]: boolean }> => {
  const cachedResults: { [key: string]: boolean } = {};
  const urlsToFetch: string[] = [];

  urls.forEach((url) => {
    const cache = localStorage.getItem(`image-exists-${url}`);
    if (cache !== null) {
      cachedResults[url] = JSON.parse(cache);
    } else {
      urlsToFetch.push(url);
    }
  });

  if (urlsToFetch.length === 0) {
    return cachedResults;
  }

  try {
    const response = await fetch('/api/checkImages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls: urlsToFetch }),
    });

    const data = await response.json();

    urlsToFetch.forEach((url) => {
      localStorage.setItem(`image-exists-${url}`, JSON.stringify(data[url]));
      cachedResults[url] = data[url];
    });

    return cachedResults;
  } catch (error) {
    console.error('Erreur lors de la vérification des images:', error);
    return cachedResults;
  }
};

const checkIconExists = async (baseUrl: string): Promise<string | null> => {
  const iconPaths = ['', 'assets'];
  const iconNames = ['favicon.ico', 'logo98.png', 'logo192.png'];

  const urlsToCheck = iconPaths.flatMap((path) =>
    iconNames.map(
      (iconName) =>
        `${baseUrl.replace(/\/$/, '')}/${path ? `${path}/` : ''}${iconName}`
    )
  );

  const results = await checkMultipleImages(urlsToCheck);

  for (const url of urlsToCheck) {
    if (results[url]) {
      return url;
    }
  }
  return null;
};

export const SideProject = (props: SideProjectProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  const generateImageUrl = useCallback(
    (folder: string) =>
      `https://raw.githubusercontent.com/martins-Anthony/${props.title}/master/${folder}/screenshot.png`,
    [props.title]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const findValidImageUrl = async () => {
      const folders = ['assets', 'images'];

      const urlsToCheck = folders.map((folder) => generateImageUrl(folder));

      const results = await checkMultipleImages(urlsToCheck);

      for (const url of urlsToCheck) {
        if (results[url]) {
          setImageUrl(url);
          return;
        }
      }

      setImageUrl(null);
    };

    findValidImageUrl();
  }, [props.title, generateImageUrl]);

  useEffect(() => {
    const findValidIcon = async () => {
      const baseUrl = props.url;
      const iconUrl = await checkIconExists(baseUrl);

      if (iconUrl) {
        setIconUrl(iconUrl);
      } else {
        setIconUrl(null);
      }
    };

    findValidIcon();
  }, [props.url]);

  const IconToShow = iconUrl ? (
    <Image src={iconUrl} alt={`${props.title} icon`} width={40} height={40} />
  ) : (
    <Globe size={16} />
  );
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
          >
            <span
              className="bg-accent text-accent-foreground p-3 rounded-sm max-w-[40px] max-h-[40px] "
              title={`Logo de ${props.title}`}
            >
              {IconToShow}
            </span>
            <div>
              <p className="text-lg font-semibold">{props.title}</p>
              <p className="text-sm text-muted-foreground">
                {props.description}
              </p>
            </div>
          </Link>
        </TooltipTrigger>
        {imageUrl && (
          <Portal>
            <TooltipContent
              className="p-2 rounded-md bg-accent text-accent-foreground z-10 ml-4"
              side={isMobile ? 'top' : 'right'}
              align="center"
            >
              <Image
                src={imageUrl}
                alt={`${props.title} preview`}
                className="rounded-md shadow-md"
                width={isMobile ? props.refForPortal - 150 : props.refForPortal}
                height={200}
                priority={true}
              />
            </TooltipContent>
          </Portal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
