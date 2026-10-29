/** The only first-party preference stored by this frontend is the user's map choice. */
export const CONSENT_STORAGE_KEY = 'fallah_cookie_preferences_v1';
export const CONSENT_EVENT = 'fallah:consent-updated';
export const CONSENT_SETTINGS_EVENT = 'fallah:open-cookie-settings';
const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;

export type ConsentChoice = { version: 1; maps: boolean; updatedAt: number };

export function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!value) return null;
    const data: unknown = JSON.parse(value);
    if (!data || typeof data !== 'object') return null;
    const choice = data as Partial<ConsentChoice>;
    if (choice.version !== 1 || typeof choice.maps !== 'boolean' ||
        typeof choice.updatedAt !== 'number' || Date.now() - choice.updatedAt > CONSENT_LIFETIME_MS ||
        choice.updatedAt > Date.now()) {
      return null;
    }
    return choice as ConsentChoice;
  } catch { return null; }
}

export function saveConsent(maps: boolean): void {
  if (typeof window === 'undefined') return;
  const choice: ConsentChoice = { version: 1, maps, updatedAt: Date.now() };
  try { window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice)); } catch { /* storage disabled */ }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openCookieSettings(): void {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}
