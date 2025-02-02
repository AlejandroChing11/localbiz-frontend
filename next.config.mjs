/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'www.tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'www.tailus.io',
      },
    ]
  }
};

export default nextConfig;
