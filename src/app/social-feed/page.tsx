import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialFeedClient from '@/components/SocialFeedClient';

export const metadata: Metadata = {
  title: 'Official Social Feed & Live Media | New York Auto Experience',
  description: 'Live multi-channel social feed streaming the latest photography, video documentaries, exhibits, and community updates from Instagram, YouTube, and Facebook.',
  openGraph: {
    title: 'Social Feed & Live Media Hub | New York Auto Experience',
    description: 'Explore live automotive moments and stories from the New York Auto Experience across Instagram, YouTube, and Facebook.',
    url: 'https://www.newyorkautoexperience.org/social-feed',
    siteName: 'New York Auto Experience',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Feed | New York Auto Experience',
    description: 'Live stream of automotive exhibits, heritage features, and community announcements.',
  },
};

export default function SocialFeedPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Header />
      <main style={{ flex: 1, background: 'transparent' }}>
        <SocialFeedClient />
      </main>
      <Footer />
    </div>
  );
}
