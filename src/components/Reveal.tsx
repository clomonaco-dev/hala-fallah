'use client';

import { useEffect } from 'react';

/**
 * Animazione d'ingresso discreta per gli elementi `.reveal`.
 * Progressive enhancement: senza JavaScript (o con "riduci movimento") il contenuto è sempre visibile.
 * Un MutationObserver intercetta anche i contenuti che arrivano in streaming o con la navigazione client.
 */
export function Reveal() {
  useEffect(() => {
    const showAll = () => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('isVisible'));
    if (!('IntersectionObserver' in window)) {
      showAll();
      return;
    }
    const observed = new WeakSet<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isVisible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

    const scan = () => {
      document.querySelectorAll('.reveal:not(.isVisible)').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
