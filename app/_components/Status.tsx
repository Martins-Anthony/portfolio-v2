'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Section } from './layouts/Section';
import { Work, WORKS } from './Work';
import { Projects } from './Projects';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ContactList } from './ContactList';

export const Status = () => {
  const [carouselMaxHeight, setCarouselMaxHeight] = useState<number>(352);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const updateCarouselHeight = () => {
    if (rightColumnRef.current) {
      const rightColumnHeight = rightColumnRef.current.offsetHeight;
      setCarouselMaxHeight(rightColumnHeight - 142);
    }
  };

  useEffect(() => {
    updateCarouselHeight();
    window.addEventListener('resize', updateCarouselHeight);
    return () => {
      window.removeEventListener('resize', updateCarouselHeight);
    };
  }, []);

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full h-full">
        <Card className="w-full p-4 flex flex-col gap-2 min-h-full">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="gap-4 mt-5 mb-12 w-full h-full">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="relative w-full h-full"
            >
              <CarouselContent
                className="w-full p-1 mt-1 flex gap-2 h-full"
                style={{ maxHeight: `${carouselMaxHeight}px` }}
              >
                <Projects />
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Card>
      </div>
      <div
        className="flex-[2] w-full flex flex-col gap-4 h-full"
        ref={rightColumnRef}
      >
        <Card className="p-4 flex-1 h-full">
          <p className="text-lg text-muted-foreground">Travail</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work) => (
              <Work key={work.title} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2 h-full">
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactList />
        </Card>
      </div>
    </Section>
  );
};
