import { Badge } from '@/components/ui/badge';
import { Section } from './layouts/Section';
import { ContactList } from './ContactList';

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={'outline'}>Contactez-moi</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight ">
        Hâte de collaborer avec vous
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactList />
      </div>
    </Section>
  );
};
