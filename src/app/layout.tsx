import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteContent } from '@/lib/wordpress';

export const metadata: Metadata = {
  metadataBase: new URL('https://newyorkautoexperience.org'),
  title: 'The New York Auto Experience | 501(c)(3) Automotive STEM Nonprofit',
  description: 'Empowering 2 million students through automotive STEM education, hands-on exhibits, robotics labs, and sponsored admissions for Title 1 public schools.',
  keywords: ['New York Auto Experience', 'Automotive STEM', '501(c)(3) Nonprofit', 'NYC Museum', 'Title 1 Field Trips', 'Robotics and EV Education'],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'The New York Auto Experience | 501(c)(3) Automotive STEM Nonprofit',
    description: 'Empowering 2 million students through hands-on automotive science, technology, and engineering exhibits in New York.',
    images: ['/future.jpg'],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getSiteContent();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header content={content} />
        <main>{children}</main>
        <Footer content={content} />
      </body>
    </html>
  );
}
