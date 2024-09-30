import { Badge } from '@/components/ui/badge';
import { Section } from './layouts/Section';
import { ContactCard } from './ContactCard';
import { LinkedinIcon } from './icons/linkedinIcon';

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={'outline'}>Contactez-moi</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight ">
        Hâte de collaborer avec vous
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          name="Anthony M."
          image="https://dam.malt.com/navbar/logos/malt-logo-red.svg?vh=9690b2?w=250&h=70"
          mediumImage="https://webcraft-anthony.com/logo98.png"
          description="Découvrez mon profil freelance sur Malt."
          url="https://www.malt.fr/profile/anthonymartins"
        />
        <ContactCard
          className="flex-1"
          name="contact@webcraft-anthony.com"
          image="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
          mediumImage="https://webcraft-anthony.com/logo98.png"
          description="Contactez-moi directement par email."
          url="mailto:contact@webcraft-anthony.com"
        />
        <ContactCard
          className="flex-1"
          name="Anthony M."
          icon={<LinkedinIcon size={32} fill="#0c66c3" />}
          mediumImage="https://webcraft-anthony.com/logo98.png"
          description="Découvrez mon profil sur LinkedIn."
          url="https://www.linkedin.com/in/martins-anthony/"
        />
      </div>
    </Section>
  );
};
