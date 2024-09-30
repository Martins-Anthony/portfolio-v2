import Link from 'next/link';
import { Section } from './_components/layouts/Section';
import { Spacing } from './_components/layouts/Spacing';

export default function NotFound() {
  return (
    <main>
      <Spacing size="2xl" />
      <Section className="flex flex-col place-items-center gap-4">
        <h1 className="font-caption font-bold text-9xl text-primary">404</h1>
        <p className="text-base sm:text-3xl font-caption">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          href="/"
        >
          Retourner sur la page d’accueil
        </Link>
      </Section>
    </main>
  );
}
