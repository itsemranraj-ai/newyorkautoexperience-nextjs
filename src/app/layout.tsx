import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3TBCZ5C');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3TBCZ5C"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="site-backdrop" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
