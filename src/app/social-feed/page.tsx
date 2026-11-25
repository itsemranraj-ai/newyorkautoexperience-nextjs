import React from 'react';
import type { Metadata } from 'next';
import SocialFeedClient from '@/components/SocialFeedClient';

export const metadata: Metadata = {
  title: 'Social Feed Notice | The New York Auto Experience Inc.',
  description: 'Curator free tier monthly visitor limit notice and direct social media channel links for The New York Auto Experience Inc.',
  openGraph: {
    title: 'Social Feed Notice | The New York Auto Experience Inc.',
    description: 'Curator free tier monthly visitor limit notice and official social channel links for The New York Auto Experience Inc.',
    url: 'https://www.newyorkautoexperience.org/social-feed',
    siteName: 'The New York Auto Experience Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Feed Notice | The New York Auto Experience Inc.',
    description: 'Official social media channel links for The New York Auto Experience Inc.',
  },
};

export default function SocialFeedPage() {
  return <SocialFeedClient />;
}
