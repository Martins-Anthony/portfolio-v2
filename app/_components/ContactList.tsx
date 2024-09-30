import React from 'react';
import { ContactCard } from './ContactCard';
import { MaltIcon } from './icons/maltIcon';
import { GmailIcon } from './icons/gmailIcon';
import { LinkedinIcon } from './icons/linkedinIcon';

export const ContactList = () => {
  return (
    <>
      <ContactCard
        className="flex-1"
        name="contact@webcraft-anthony.com"
        icon={<GmailIcon size={32} />}
        description="Contactez-moi directement par email."
        url="mailto:contact@webcraft-anthony.com"
      />
      <ContactCard
        className="flex-1"
        name="Anthony M."
        icon={<LinkedinIcon size={32} fill="#0c66c3" />}
        description="Découvrez mon profil sur LinkedIn."
        url="https://www.linkedin.com/in/martins-anthony/"
      />
      <ContactCard
        className="flex-1"
        name="Anthony M."
        icon={<MaltIcon size={32} fill="#FC5757" />}
        description="Découvrez mon profil freelance sur Malt."
        url="https://www.malt.fr/profile/anthonymartins"
      />
    </>
  );
};
