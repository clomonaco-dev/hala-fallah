import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);

  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
      <section className="section sectionSoft">
        <div className="shell serviceList">
          {t.services.cards.map((service, index) => (
            <article className="serviceCard serviceCardHorizontal" key={service.slug}>
              <div className="serviceImage serviceImageHorizontal">
                <img
                  src={`/images/services/${service.slug}.png`}
                  alt={service.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="serviceContent serviceContentHorizontal">
                <div className="serviceHeadingRow">
                  <span className="serviceIndex">{String(index + 1).padStart(2, '0')}</span>
                  <span className="serviceCategory">{locale === 'it' ? 'Servizio specialistico' : 'Specialist service'}</span>
                </div>
                <h2>{service.title}</h2>
                <p className="serviceDescription">{service.text}</p>

                <div className="serviceAreas">
                  <h3>{locale === 'it' ? 'Aree di intervento' : 'Areas of care'}</h3>
                  <ul className="serviceAreaList">
                    {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>

                <p className="serviceNote">
                  {locale === 'it'
                    ? 'La valutazione e gli eventuali approfondimenti vengono definiti in base alle esigenze cliniche emerse durante la visita.'
                    : 'Assessment and any further investigations are tailored to the clinical needs identified during the examination.'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section"><div className="shell ctaPanel"><div><span className="eyebrow">{t.common.bookVisit}</span><h2>{locale === 'it' ? 'Hai dubbi sulla prestazione più adatta?' : 'Not sure which service is right for you?'}</h2><p>{locale === 'it' ? 'Contatta lo studio per informazioni sulla visita e sulla sede più appropriata.' : 'Contact the practice for information about the visit and the most appropriate location.'}</p></div><Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.contactStudio}</Link></div></section>
    </>
  );
}
