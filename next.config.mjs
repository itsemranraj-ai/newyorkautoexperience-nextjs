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
  async redirects() {
    return [
      {
        source: '/signup',
        destination: '/sign-up',
        permanent: true,
      },
      {
        source: '/social',
        destination: 'https://www.newyorkautomuseum.com/social',
        permanent: true,
      },
      {
        source: '/socials',
        destination: 'https://www.newyorkautomuseum.com/social',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
