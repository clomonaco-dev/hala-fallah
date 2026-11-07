import Link from 'next/link';
import { siteUrl } from '@/lib/seo';

export type Crumb = { label: string; href?: string };

/** Breadcrumb visibile + dati strutturati BreadcrumbList. */
export function Breadcrumb({ items, label = 'Breadcrumb' }: { items: Crumb[]; label?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };
  return (
    <nav aria-label={label}>
      <ol className="breadcrumb">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
