'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { site, type Locale } from '@/lib/i18n';
import { legalCopy } from '@/lib/legal';

type Labels = {
  name: string; emailLabel: string; phoneLabel: string; subject: string; message: string; send: string;
  sending: string; sentTitle: string; sentText: string; sendAnother: string; errorText: string;
};

/**
 * Modulo gestito da Netlify Forms. Netlify riconosce il modulo "contatti" dal file statico public/__forms.html:
 * nomi del modulo e dei campi devono restare uguali in entrambi i file.
 */
const FORM_NAME = 'contatti';
const FORM_ENDPOINT = '/__forms.html';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm({ labels, locale }: { labels: Labels; locale: Locale }) {
  const legal = legalCopy[locale];
  const [status, setStatus] = useState<Status>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  // Il messaggio di conferma è più corto del modulo: lo porta in vista (e gli dà il focus) dopo l'invio.
  useEffect(() => {
    if (status !== 'sent' || !successRef.current) return;
    successRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    successRef.current.focus({ preventScroll: true });
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="formResult formResultSuccess" role="status" ref={successRef} tabIndex={-1}>
        <span className="formResultIcon"><Icon name="check" size={22} /></span>
        <div>
          <h3>{labels.sentTitle}</h3>
          <p>{labels.sentText}</p>
          <button type="button" className="textLink" onClick={() => setStatus('idle')}>{labels.sendAnother}</button>
        </div>
      </div>
    );
  }

  const sending = status === 'sending';
  return (
    // method/action servono solo se JavaScript non è attivo: i dati vanno comunque a Netlify e mai nell'indirizzo della pagina.
    <form className="contactForm" name={FORM_NAME} method="post" action={FORM_ENDPOINT} onSubmit={submit}>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="lingua" value={locale} />
      <p className="srOnly" aria-hidden="true">
        <label>Non compilare questo campo: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="formGrid">
        <label className="field"><span>{labels.name}</span><input name="nome" autoComplete="name" required /></label>
        <label className="field"><span>{labels.emailLabel}</span><input type="email" name="email" autoComplete="email" inputMode="email" required /></label>
        <label className="field"><span>{labels.phoneLabel}</span><input type="tel" name="telefono" autoComplete="tel" inputMode="tel" minLength={6} maxLength={25} required /></label>
        <label className="field"><span>{labels.subject}</span><input name="oggetto" required /></label>
      </div>
      <label className="field"><span>{labels.message}</span><textarea name="messaggio" rows={6} required /></label>
      <label className="privacyAcknowledgement">
        <input type="checkbox" name="privacy" value="letta" required aria-describedby="privacy-ack-text" />
        <span id="privacy-ack-text">{legal.formRead} <Link href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer">{legal.formPrivacyLink}</Link>.</span>
      </label>
      {status === 'error' && (
        <p className="formResult formResultError" role="alert">
          <Icon name="info" size={18} />
          <span>{labels.errorText} <a href={`mailto:${site.email}`}>{site.email}</a>.</span>
        </p>
      )}
      <button className="button buttonPrimary" type="submit" disabled={sending} aria-busy={sending}>
        <Icon name="mail" size={18} />{sending ? labels.sending : labels.send}
      </button>
    </form>
  );
}
