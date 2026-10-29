'use client';
import { openCookieSettings } from '@/lib/consent';
export function CookieSettingsButton({ label }: { label: string }) {
  return <button type="button" className="footerLinkButton" onClick={openCookieSettings}>{label}</button>;
}
