'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { site, type Locale } from '@/lib/i18n';
import { legalCopy } from '@/lib/legal';

type Labels = { name: string; emailLabel: string; phoneLabel: string; subject: string; message: string; send: string };

export function ContactForm({ labels, locale }: { labels: Labels; locale: Locale }) {
  const legal = legalCopy[locale];
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');
    const body = `${message}\n\n${name}\n${labels.emailLabel}: ${email}\n${labels.phoneLabel}: ${phone}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formGrid">
        <label className="field"><span>{labels.name}</span><input name="name" autoComplete="name" required /></label>
        <label className="field"><span>{labels.emailLabel}</span><input type="email" name="email" autoComplete="email" inputMode="email" required /></label>
        <label className="field"><span>{labels.phoneLabel}</span><input type="tel" name="phone" autoComplete="tel" inputMode="tel" minLength={6} maxLength={25} required /></label>
        <label className="field"><span>{labels.subject}</span><input name="subject" required /></label>
      </div>
      <label className="field"><span>{labels.message}</span><textarea name="message" rows={6} required /></label>
      <label className="privacyAcknowledgement">
        <input type="checkbox" required aria-describedby="privacy-ack-text" />
        <span id="privacy-ack-text">{legal.formRead} <Link href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer">{legal.formPrivacyLink}</Link>.</span>
      </label>
      <button className="button buttonPrimary" type="submit"><Icon name="mail" size={18} />{labels.send}</button>
    </form>
  );
}
