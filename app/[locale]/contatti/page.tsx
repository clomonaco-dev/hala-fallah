import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, site } from '@/lib/i18n';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.studioAddress)}`;

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
      <section className="section sectionSoft">
        <div className="shell contactGrid">
          <div className="contactPanel">
            <a className="contactAction" href={site.phoneHref} aria-label={`${t.common.call} ${site.phoneDisplay}`}>
              <span className="contactActionIcon"><PhoneIcon /></span>
              <span className="contactActionText">
                <span className="contactActionLabel">{t.common.call}</span>
                <strong>{site.phoneDisplay}</strong>
              </span>
            </a>

            <a className="contactAction" href={`mailto:${site.email}`} aria-label={`${t.common.email} ${site.email}`}>
              <span className="contactActionIcon"><MailIcon /></span>
              <span className="contactActionText">
                <span className="contactActionLabel">{t.common.email}</span>
                <strong>{site.email}</strong>
              </span>
            </a>

            <a
              className="contactAction"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${locale === 'it' ? 'Apri lo studio su Google Maps' : 'Open the practice in Google Maps'}: ${site.studioAddress}`}
            >
              <span className="contactActionIcon"><PinIcon /></span>
              <span className="contactActionText">
                <span className="contactActionLabel">{locale === 'it' ? 'Studio' : 'Practice'}</span>
                <strong>{site.studioAddress}</strong>
                <small>{locale === 'it' ? 'Apri in Google Maps' : 'Open in Google Maps'}</small>
              </span>
            </a>
          </div>

          <div className="formPanel">
            <ContactForm labels={t.contact} />
            <p className="formNote">{t.contact.formNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
