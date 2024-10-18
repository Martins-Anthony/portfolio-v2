/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anti-corruption-enquete-investigation.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**', // Autoriser toutes les images hébergées sur GitHub
      },
      {
        protocol: 'https',
        hostname: 'martins-anthony.github.io',
        port: '',
        pathname: '/**', // Autoriser toutes les images hébergées sur GitHub
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'webcraft-anthony.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
