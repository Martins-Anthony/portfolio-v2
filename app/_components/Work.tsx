import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const WORKS: WorkProps[] = [
  {
    image: 'https://anti-corruption-enquete-investigation.org/logo98',
    title: 'Association ACEI',
    role: 'Développeur web',
    date: '2024 - 2024',
    url: 'https://anti-corruption-enquete-investigation.org/',
  },
  {
    image:
      'https://media.licdn.com/dms/image/v2/D4E0BAQGGjlGUHa2png/company-logo_100_100/company-logo_100_100/0/1665412802239/openclassrooms_logo?e=1735171200&v=beta&t=elE8nBspC_5Fd-SUVPP_lilBIilo3GZCtdtiDMx8XNQ',
    title: 'OpenClassrooms',
    role: 'formation intégrateur web',
    date: '2023 - 2024',
    url: 'https://openclassrooms.com/fr/',
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
