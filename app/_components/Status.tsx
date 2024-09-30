import { Card } from '@/components/ui/card';
import { Section } from './layouts/Section';
import { ContactCard } from './ContactCard';
import { Work, WORKS } from './Work';
import { Projects } from './Projects';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full h-full">
        <Card className="w-full p-4 flex flex-col gap-2 h-full">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="gap-4 mt-5 mb-12 w-full h-full">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="relative w-full h-full"
            >
              <CarouselContent className="w-full h-[275px] p-1 mt-1 flex gap-2">
                <Projects />
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4 h-full">
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
          <ContactCard
            name="contact@webcraft-anthony.com"
            image="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
            mediumImage="https://webcraft-anthony.com/logo98.png"
            description="Contactez-moi directement par email."
            url="mailto:contact@webcraft-anthony.com"
          />
          <ContactCard
            name="Anthony M."
            image="https://dam.malt.com/navbar/logos/malt-logo-red.svg?vh=9690b2?w=250&h=70"
            mediumImage="https://webcraft-anthony.com/logo98.png"
            description="Découvrez mon profil freelance sur Malt."
            url="https://www.malt.fr/profile/anthonymartins"
          />
        </Card>
      </div>
    </Section>
  );
};
