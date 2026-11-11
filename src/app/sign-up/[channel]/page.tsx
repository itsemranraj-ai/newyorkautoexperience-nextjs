import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SignUpPageContent from '@/components/SignUpPageContent';
import { SIGNUP_CHANNEL_SLUGS, getSignupChannel } from '@/lib/signupChannels';
import '../signup.css';

interface ChannelPageProps {
  params: Promise<{ channel: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SIGNUP_CHANNEL_SLUGS.map((channel) => ({ channel }));
}

export async function generateMetadata({ params }: ChannelPageProps): Promise<Metadata> {
  const { channel } = await params;
  const config = getSignupChannel(channel);
  if (!config) {
    return { title: 'Join Committee Board | The New York Auto Experience Inc.' };
  }
  const suffix = config.leadSource === 'Website' ? '' : ` (${config.leadSource})`;
  const url = `https://www.newyorkautoexperience.org/sign-up/${config.slug}`;
  return {
    title: `Join Committee Board${suffix} | The New York Auto Experience Inc.`,
    description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
    openGraph: {
      title: `Join Committee Board${suffix} | The New York Auto Experience Inc.`,
      description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
      url,
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
      title: `Join Committee Board${suffix} | The New York Auto Experience Inc.`,
      description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
      images: ['https://www.newyorkautoexperience.org/nyae-header-preview.jpg'],
    },
  };
}

export default async function ChannelSignUpPage({ params }: ChannelPageProps) {
  const { channel } = await params;
  const config = getSignupChannel(channel);
  if (!config) {
    notFound();
  }

  return (
    <main className="signup-page-wrapper">
      <SignUpPageContent channelConfig={config} />
    </main>
  );
}
