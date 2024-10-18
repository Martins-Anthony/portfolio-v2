'use client';
import React, { useEffect, useState } from 'react';
import { SideProject } from './SideProjects';
import { CarouselItem } from '@/components/ui/carousel';
import { SkeletonProject } from './Skeletons';

interface Repo {
  id: number;
  name: string;
  homepage?: string;
  html_url: string;
  description: string;
  updated_at: string;
}

export const Projects: React.FC<{ refForPortal: number }> = ({
  refForPortal,
}) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/martins-Anthony/repos'
        );
        const data = await response.json();

        data.sort((a: Repo, b: Repo) => {
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        });

        setRepos(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonProject key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      {repos.map((repo) => (
        <CarouselItem
          className="pt-0 basis-1/6 w-full overflow-visible relative"
          key={repo.id}
        >
          <SideProject
            title={repo.name}
            description={repo.description}
            url={repo.homepage || repo.html_url}
            refForPortal={refForPortal}
          />
        </CarouselItem>
      ))}
    </>
  );
};
