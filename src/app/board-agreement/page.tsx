import React from 'react';
import type { Metadata } from 'next';
import BoardAgreementClient from '@/components/BoardAgreementClient';
import './board-agreement.css';

export const metadata: Metadata = {
  title: 'Board Member & Committee Service Agreement | The New York Auto Experience Inc.',
  description: 'Official Welcome Package, 34 Governance Standards, and Electronic Signature execution for Board Directors, Committee Members, and Executives.',
  openGraph: {
    title: 'Board Member Service Agreement & Welcome Package | The New York Auto Experience Inc.',
    description: 'Execute official onboarding, review 34 governance standards, and digitally sign the Board Agreement online.',
    url: 'https://www.newyorkautoexperience.org/board-agreement',
    siteName: 'The New York Auto Experience',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Board Member Service Agreement | The New York Auto Experience',
    description: 'Official online onboarding and electronic signature portal for leadership candidates.',
  },
};

export default function BoardAgreementPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'transparent' }}>
      <BoardAgreementClient />
    </main>
  );
}
