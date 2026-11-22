import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const FacebookIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
    <path d="M20.45 2H3.55C2.69 2 2 2.69 2 3.55v16.9c0 .86.69 1.55 1.55 1.55h16.9c.86 0 1.55-.69 1.55-1.55V3.55c0-.86-.69-1.55-1.55-1.55zM8.06 18.67H5.06V9.28h3v9.39zM6.56 8a1.74 1.74 0 110-3.48 1.74 1.74 0 010 3.48zm12.11 10.67h-3v-4.57c0-1.09-.02-2.5-1.52-2.5s-1.75 1.19-1.75 2.42v4.65h-3V9.28h2.88v1.28h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.07z" />
  </svg>
);

export const TiktokIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
    <path d="M16.6 5.82A4.28 4.28 0 0015.55 3h-3.1v12.2a2.55 2.55 0 11-1.83-2.45V9.55a5.65 5.65 0 104.93 5.6V8.9a7.3 7.3 0 004.3 1.38V7.16a4.28 4.28 0 01-3.25-1.34z" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 002.4 7.2 26.2 26.2 0 002 12a26.2 26.2 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 001.76-1.77A26.2 26.2 0 0022 12a26.2 26.2 0 00-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.73 1.69 4.88 4.92.06 1.26.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.64 4.77-4.88 4.92-1.26.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.73-1.7-4.88-4.92-.06-1.26-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.42 3.96 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 7.43a4.57 4.57 0 100 9.14 4.57 4.57 0 000-9.14zm0 7.54a2.97 2.97 0 110-5.94 2.97 2.97 0 010 5.94zm5.84-7.72a1.07 1.07 0 11-2.14 0 1.07 1.07 0 012.14 0z" />
  </svg>
);