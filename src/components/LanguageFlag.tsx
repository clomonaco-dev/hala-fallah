import type { Locale } from '@/lib/i18n';

/**
 * Bandiere SVG al posto delle emoji Unicode: su alcuni browser Windows le
 * emoji di bandiera appaiono come le lettere del paese (es. "IT").
 */
export function LanguageFlag({ locale }: { locale: Locale }) {
  return (
    <svg
      className="localeFlag"
      viewBox="0 0 24 16"
      width="24"
      height="16"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {locale === 'it' && (
        <>
          <rect width="24" height="16" fill="#fff" />
          <rect width="8" height="16" fill="#009246" />
          <rect x="16" width="8" height="16" fill="#CE2B37" />
        </>
      )}
      {locale === 'en' && (
        <>
          <rect width="24" height="16" fill="#012169" />
          <path d="M-2 -2 L26 18 M26 -2 L-2 18" stroke="#fff" strokeWidth="5.2" />
          <path d="M-2 -2 L26 18 M26 -2 L-2 18" stroke="#C8102E" strokeWidth="2" />
          <path d="M0 6 H24 M12 0 V16" stroke="#fff" strokeWidth="6" />
          <path d="M0 6 H24 M12 0 V16" stroke="#C8102E" strokeWidth="2.8" />
        </>
      )}
      {locale === 'fr' && (
        <>
          <rect width="24" height="16" fill="#fff" />
          <rect width="8" height="16" fill="#0055A4" />
          <rect x="16" width="8" height="16" fill="#EF4135" />
        </>
      )}
      {locale === 'es' && (
        <>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
          <rect x="7" y="5.5" width="2.7" height="5" rx=".5" fill="#AA151B" />
          <rect x="7.5" y="5" width="1.7" height=".8" fill="#AA151B" />
        </>
      )}
    </svg>
  );
}
