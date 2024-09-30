import { Header } from './_components/layouts/Header';
import { Hero } from './_components/Hero';
import { Spacing } from './_components/layouts/Spacing';
import { Status } from './_components/Status';
import { Skills } from './_components/Skills';
import { Contact } from './_components/Contact';
import { Footer } from './_components/layouts/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
