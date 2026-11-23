import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { publicPaths, siteUrl } from '@/lib/seo';

const priority: Record<string, number> = { '': 1, servizi: 0.9, strutture: 0.9, profilo: 0.8, contatti: 0.7, faq: 0.6, privacy: 0.2, cookie: 0.2 };

/** sitemap.xml con tutte le pagine nelle quattro lingue e i relativi hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.flatMap((path) => {
    const suffix = path ? `/${path}` : '';
    const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${suffix}`]));
    return locales.map((locale) => ({
      url: `${siteUrl}/${locale}${suffix}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priority[path] ?? 0.5,
      alternates: { languages },
    }));
  });
}
