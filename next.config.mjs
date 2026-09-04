/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newyorkautoexperience.org',
      },
      {
        protocol: 'https',
        hostname: 'itsemranraj.com',
      },
    ],
  },
};

export default nextConfig;
