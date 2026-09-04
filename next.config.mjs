/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newyorkautoexperience.org',
      },
    ],
  },
};

export default nextConfig;
