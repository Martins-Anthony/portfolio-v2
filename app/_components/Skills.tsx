import { Badge } from '@/components/ui/badge';
import { Section } from './layouts/Section';
import { ReactIcon } from './icons/reactIcon';
import { Code } from './Code';
import { TailwindIcon } from './icons/tailwindIcon';
import { NodejsIcon } from './icons/nodejsIcon';

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={'outline'}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight ">
        Ce que je fais
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: '10s' }}
          />
          <h3 className="text-2xl font-semibold tracking-tight dark:text-white">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            Mon framework principal est <Code>React</Code>.<br /> J&apos;utilise
            également <Code>Next.js</Code> comme framework backend & frontend.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight dark:text-white">
            Tailwind
          </h3>
          <p className="text-sm text-muted-foreground">
            Je peux créer de <u>belles</u> applications{' '}
            <i>en quelques secondes</i> en utilisant <Code>TailwindCSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <NodejsIcon size={42} />

          <h3 className="text-2xl font-semibold tracking-tight dark:text-white">
            Node.js
          </h3>
          <p className="text-sm text-muted-foreground">
            J&apos;utilise <Code>Node.js</Code> pour construire des APIs
            performantes et évoluer sur des projets full-stack.
          </p>
        </div>
      </div>
    </Section>
  );
};
