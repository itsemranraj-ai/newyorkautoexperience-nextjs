import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ExhibitShowcase from '@/components/ExhibitShowcase';
import { getSiteContent } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Exhibits & STEM Demonstrations | The New York Auto Experience Inc.',
  description: 'Explore 12 interactive zones covering autonomous AI, EV battery chemistries, aerodynamics wind tunnels, engine cutaways, and automotive heritage.',
};

export default async function ExhibitsPage() {
  const content = await getSiteContent();

  return (
    <>
      {/* Exhibits Hero Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)', padding: '60px 0' }}>
        <div className="container text-center">
          <span className="section-tag">Interactive Catalog</span>
          <h1 className="section-title page-hero-title">{content.exhibits_page_title}</h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {content.exhibits_page_subtitle}
          </p>
        </div>
      </section>

      {/* Interactive Exhibits Grid */}
      <ExhibitShowcase hideHeader={true} />

      {/* Educational Outreach Callout Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-card)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '60px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', marginBottom: '14px', color: '#FFF' }}>{content.exhibits_cta_title}</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            {content.exhibits_cta_subtitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/#stem-portal" className="btn btn-primary">
              Submit Class Trip Request
            </Link>
            <Link href="/donate" className="btn btn-secondary">
              Sponsor an Exhibit Station
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
