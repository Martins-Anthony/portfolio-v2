'use client';

import { Home } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Portal } from '@radix-ui/react-tooltip';
import { useEffect, useState } from 'react';

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Home,
    title: 'Home',
    description: 'A simple website made with Next.js and Tailwind CSS.',
    url: '/',
    refForPortal: 0,
  },
  {
    Logo: Home,
    title: 'Portfolio',
    description: 'My personal portfolio website.',
    url: '/',
    refForPortal: 1,
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  refForPortal: number;
};

export const SideProject = (props: SideProjectProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
          >
            <span
              className="bg-accent text-accent-foreground p-3 rounded-sm"
              title={`Logo de ${props.title}`}
            >
              <props.Logo size={16} />
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
