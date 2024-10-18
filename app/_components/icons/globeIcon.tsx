import { ComponentPropsWithoutRef } from 'react';

export const GithubIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      role="icon"
      aria-label="icon Globe"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
};