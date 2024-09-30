import { Home } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Home,
    title: 'Home',
    description: 'A simple website made with Next.js and Tailwind CSS.',
    url: '/',
  },
  {
    Logo: Home,
    title: 'Portfolio',
    description: 'My personal portfolio website.',
    url: '/',
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
