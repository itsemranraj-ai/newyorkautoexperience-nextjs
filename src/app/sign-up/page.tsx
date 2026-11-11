import React from 'react';
import type { Metadata } from 'next';
import SignUpPageContent from '@/components/SignUpPageContent';
import { SIGNUP_CHANNELS } from '@/lib/signupChannels';
import './signup.css';

export const metadata: Metadata = {
  title: 'Join Committee Board | The New York Auto Experience Inc.',
  description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
  openGraph: {
    title: 'Join Committee Board | The New York Auto Experience Inc.',
    description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
    url: 'https://www.newyorkautoexperience.org/sign-up',
    siteName: 'The New York Auto Experience',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautoexperience.org/nyae-header-preview.jpg',
        secureUrl: 'https://www.newyorkautoexperience.org/nyae-header-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Experience Committee Board',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.newyorkautoexperience.org/nyae-header-preview.png',
        secureUrl: 'https://www.newyorkautoexperience.org/nyae-header-preview.png',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Experience Committee Board',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Committee Board | The New York Auto Experience Inc.',
    description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
    images: ['https://www.newyorkautoexperience.org/nyae-header-preview.jpg'],
  },
};

export default function SignUpPage() {
  return (
    <main className="signup-page-wrapper">
      <SignUpPageContent channelConfig={SIGNUP_CHANNELS.website} />
    </main>
  );
}
