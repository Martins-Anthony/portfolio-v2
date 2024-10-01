import Image from 'next/image';
import { Section } from './layouts/Section';
import profilePicture from '../_components/images/profil_Anthony_martins_500_500.jpg';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold max-md:text-4xl text-5xl text-primary">
          Anthony Martins
        </h2>
        <h3 className="max-md:text-xl text-3xl font-caption">
          Développeur web React.js{' '}
        </h3>
        <p className="max-md:text-sm text-base">
          Passionné par la création d&apos;expériences web modernes et
          performantes,
          <br />
          j&apos;allie créativité et expertise technique pour développer des
          solutions sur mesure.
        </p>
      </div>
      <div className="flex-[2] m-auto flex justify-center ">
        <Image
          src={profilePicture}
          alt="Anthony's picture"
          className="h-auto max-md:w-44 max-md:mt-10 w-56 rounded-full ml-0"
          priority={true}
        />
      </div>
    </Section>
  );
};
