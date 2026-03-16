import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // FORZA FORMATI MODERNI: Questo risolve l'errore "Serve images in next-gen formats"
    formats: ['image/avif', 'image/webp'],
    
    // OTTIMIZZAZIONE QUALITÀ: Riduce il peso senza perdite visibili
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
  // COMPRESSIONE: Riduce la dimensione dei file JS/CSS inviati al browser
  compress: true,
};

export default nextConfig;