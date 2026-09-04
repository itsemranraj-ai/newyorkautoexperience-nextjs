import React from 'react';
import Hero from '@/components/Hero';
import AnimatedCounters from '@/components/AnimatedCounters';
import ExhibitShowcase from '@/components/ExhibitShowcase';
import DualCharterSection from '@/components/DualCharterSection';
import StemPortal from '@/components/StemPortal';
import DonationEngine from '@/components/DonationEngine';
import { getSiteContent } from '@/lib/wordpress';

export default async function HomePage() {
  const content = await getSiteContent();

  return (
    <>
      <Hero content={content} />
      <AnimatedCounters content={content} />
      <ExhibitShowcase />
      <DualCharterSection content={content} />
      <StemPortal content={content} />
      <DonationEngine content={content} />
    </>
  );
}
