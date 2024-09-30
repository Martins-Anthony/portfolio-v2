'use client'

import { buttonVariants } from '@/components/ui/button';
import { Section } from './Section';
import { GithubIcon } from '../icons/githubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LinkedinIcon } from '../icons/linkedinIcon';
import { MaltIcon } from '../icons/maltIcon';
import { scrollToSection } from '../../_utils/scrollToSection';

export const Header = () => {
  const handleClick = () => {
    setTimeout(() => {
      scrollToSection('header');
    }, 100);
  };

  return (
    <header className="sticky top-0 py-4 z-10" id="header">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary hover:text-secondary-foreground hover:cursor-pointer" onClick={handleClick}>
          webcraft-anthony
        </h1>
        <div className="flex-1" />
        <ul className="flex item-center gap-2">
          <li>
            <Link
              href="https://github.com/martins-Anthony"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'size-6 p-0'
              )}
            >
              <GithubIcon size={24} className="text" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/martins-anthony/"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'size-6 p-0'
              )}
            >
              <LinkedinIcon size={24} className="text" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.malt.fr/profile/anthonymartins"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'size-6 p-0'
              )}
            >
              <MaltIcon size={24} className="text" />
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
