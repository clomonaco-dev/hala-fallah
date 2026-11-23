/**
 * Set di icone a tratto (stroke) coerente in tutto il sito, al posto dei
 * caratteri Unicode (↗ ✉ ⌖) che cambiano aspetto da un sistema all'altro.
 */
const paths = {
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M19 12H5m6 6-6-6 6-6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  phone: <path d="M5.5 3.5h3l1.6 4-2 1.3a11 11 0 0 0 5.1 5.1l1.3-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  pin: <><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M7.5 3v4m9-4v4M3 10h18M8 14.5h3" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="M12 3 5 6v5.5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  building: <><path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21M14 10h4.5a1.5 1.5 0 0 1 1.5 1.5V21M3 21h18" /><path d="M7.5 8h3m-3 4h3m-3 4h3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5M12 7.5v.01" /></>,
  chat: <><path d="M20 12.5a7.5 7.5 0 0 1-11 6.6L4 20.5l1.4-4.6A7.5 7.5 0 1 1 20 12.5Z" /><path d="M12 9.5v5m-2.5-2.5h5" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" /></>,
  stethoscope: <><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2.5a4.5 4.5 0 0 0 9 0V14" /><circle cx="20" cy="12" r="2" /></>,
  sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  glasses: <><circle cx="6.5" cy="14.5" r="3.5" /><circle cx="17.5" cy="14.5" r="3.5" /><path d="M10 14.5h4M3 14.5 4.8 7.5M21 14.5l-1.8-7" /></>,
  child: <><circle cx="12" cy="12" r="9" /><path d="M9 14.5a4 4 0 0 0 6 0M9.2 10h.01M14.8 10h.01M10 3.4c0 1.4.9 2.4 2 2.4s2-.7 2-1.6" /></>,
  leaf: <><path d="M5 19.5C5 11 10 5 20 4.5c0 10-5.5 15-14 15" /><path d="M5 19.5 13 11.5" /></>,
  scan: <><path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" /><path d="M7 12s2-3.2 5-3.2 5 3.2 5 3.2-2 3.2-5 3.2S7 12 7 12Z" /><circle cx="12" cy="12" r="1.2" /></>,
  laser: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  cornea: <><path d="M4 15a8 8 0 0 1 16 0" /><path d="M4 15c2.6 2.2 13.4 2.2 16 0" /><path d="M8.5 9.5a5 5 0 0 1 3.5-1.4" /></>,
  gauge: <><path d="M4.5 18a8.5 8.5 0 1 1 15 0" /><path d="m12 13.5 3.5-4" /><circle cx="12" cy="13.5" r="1.4" /></>,
  retina: <><circle cx="12" cy="12" r="9" /><circle cx="15" cy="12" r="1.8" /><path d="M13.3 11.3C10.8 9 8 8.4 5 9.2M13.3 12.7C10.8 15 8 15.6 5 14.8M13.5 11.8H5.5" /></>,
  eyelid: <><path d="M3 10.5c2.5 3.4 5.5 5 9 5s6.5-1.6 9-5" /><path d="M12 15.5v3M7.2 14.2l-1.6 2.5M16.8 14.2l1.6 2.5" /></>,
  microscope: <><path d="M5 21h14M8 21c0-1.5.5-2.5 1.5-3.2M13 18a5.5 5.5 0 0 0 5-5.5 5.5 5.5 0 0 0-2.2-4.4" /><path d="m9.5 3 3.5 2-3.5 6-3.5-2 3.5-6Z" /><path d="m8.2 13.5 1.6.9" /></>,
  scalpel: <><path d="M3 21 14.5 9.5l3 3L6 21H3Z" /><path d="m14.5 9.5 4-4a2.1 2.1 0 0 1 3 3l-4 4" /></>,
  lens: <><circle cx="12" cy="12" r="5" /><path d="M8 9C5.5 7.5 4.5 5.5 5.5 3.5M16 15c2.5 1.5 3.5 3.5 2.5 5.5" /></>,
  stent: <><path d="M3.5 9h17M3.5 15h17" /><path d="m5.5 9 2.5 6 2.5-6 2.5 6 2.5-6 2.5 6" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 13.8-1.5 7.2 5-2.5 5 2.5-1.5-7.2" /></>,
  graduation: <><path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" /><path d="M6.5 11v5c3 2.5 8 2.5 11 0v-5M21.5 9v5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20, className, strokeWidth = 1.75 }: { name: IconName; size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
