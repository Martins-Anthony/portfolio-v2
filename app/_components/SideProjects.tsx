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
import { useEffect, useState } from 'react';

type SideProjectProps = {
  title: string;
  description: string;
  url: string;
  refForPortal: number;
};

const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
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

  const generateImageUrl = (folder: string) =>
    `https://raw.githubusercontent.com/martins-Anthony/${props.title}/master/${folder}/screenshot.png`;

  const checkImageExists = (url: string): Promise<boolean> => {
    return new Promise(async (resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

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
  }, [props.title]);

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
    <img
      src={iconUrl ?? undefined}
      alt={`${props.title} icon`}
      className="w-16"
    />
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
              <img
                src={imageUrl}
                alt={`${props.title} preview`}
                className="rounded-md shadow-md"
                style={{
                  width: isMobile
                    ? `${props.refForPortal - 150}px`
                    : `${props.refForPortal}px`,
                }}
              />
            </TooltipContent>
          </Portal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
