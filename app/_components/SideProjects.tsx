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

const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

const checkIconExists = async (baseUrl: string): Promise<string | null> => {
  const iconPaths = ['', 'assets'];

  const iconNames = ['favicon.ico', 'logo98.png', 'logo192.png'];

  for (const path of iconPaths) {
    for (const iconName of iconNames) {
      const iconUrl = `${baseUrl}/${path ? `${path}/` : ''}${iconName}`;
      const exists = await checkImageExists(iconUrl);
      if (exists) {
        return iconUrl;
      }
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
      for (const folder of folders) {
        const url = generateImageUrl(folder);
        const exists = await checkImageExists(url);
        if (exists) {
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
                width={isMobile ? props.refForPortal - 150 : 442}
                height={isMobile ? props.refForPortal - 150 : 442}
              />
            </TooltipContent>
          </Portal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
