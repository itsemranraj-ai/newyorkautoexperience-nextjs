import React from 'react';
import type { Metadata } from 'next';
import GovernanceClient from '@/components/GovernanceClient';

export const metadata: Metadata = {
  title: 'Governance, Legal Filings & 501(c)(3) Transparency | The New York Auto Experience Inc.',
  description: 'Official corporate registration documents, New York State Certificate of Status, Filing Receipt, and IRS 501(c)(3) tax exemption determination letter (EIN: 92-2822778).',
  openGraph: {
    title: 'Governance & Public Legal Filings | The New York Auto Experience Inc.',
    description: 'Direct access to official State of New York corporate documents and IRS 501(c)(3) accreditation.',
    url: 'https://www.newyorkautoexperience.org/governance',
    siteName: 'The New York Auto Experience Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance & Legal Filings | The New York Auto Experience Inc.',
    description: 'Public legal disclosures, NYS DOS ID: 6741276, IRS 501(c)(3) Letter 947.',
  },
};

export default function GovernancePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'transparent' }}>
      <GovernanceClient />
    </main>
  );
}
