import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Le vecchie pagine di dettaglio dei servizi sono state unite nella pagina Prestazioni:
  // redirect permanente per non perdere link e posizionamento su Google.
  async redirects() {
    return [
      { source: '/:locale(it|en|fr|es)/servizi/:slug', destination: '/:locale/servizi', permanent: true },
    ];
  },
};

export default nextConfig;
