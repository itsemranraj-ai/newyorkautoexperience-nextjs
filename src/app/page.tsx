import React from 'react';
import Hero from '@/components/Hero';
import AnimatedCounters from '@/components/AnimatedCounters';
import ExhibitShowcase from '@/components/ExhibitShowcase';
import DualCharterSection from '@/components/DualCharterSection';
import StemPortal from '@/components/StemPortal';
import DonationEngine from '@/components/DonationEngine';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedCounters />
      <ExhibitShowcase />
      <DualCharterSection />
      <StemPortal />
      <DonationEngine />
    </>
  );
}
