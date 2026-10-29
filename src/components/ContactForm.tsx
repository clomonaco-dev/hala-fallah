'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { site, type Locale } from '@/lib/i18n';
import { legalCopy } from '@/lib/legal';

export function ContactForm({ labels, locale }: { labels: { name: string; emailLabel: string; subject: string; message: string; send: string }; locale: Locale }) {
  const legal = legalCopy[locale];
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formGrid">
        <label><span>{labels.name}</span><input name="name" required /></label>
        <label><span>{labels.emailLabel}</span><input type="email" name="email" required /></label>
      </div>
      <label><span>{labels.subject}</span><input name="subject" required /></label>
      <label><span>{labels.message}</span><textarea name="message" rows={6} required /></label>
      <label className="privacyAcknowledgement"><input type="checkbox" required aria-label={legal.formRequired} /><span>{legal.formRead} <Link href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer">{legal.formPrivacyLink}</Link>.</span></label>
      <button className="button buttonPrimary" type="submit">{labels.send}</button>
    </form>
  );
}
