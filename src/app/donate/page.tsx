import React from 'react';
import type { Metadata } from 'next';
import DonationEngine from '@/components/DonationEngine';
import { getSiteContent } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Donate & Support STEM Education | The New York Auto Experience Inc.',
  description: 'Support hands-on STEM education and free museum admissions for over 2 million New York and American students. 100% tax deductible 501(c)(3) EIN: 922822778.',
};

export default async function DonatePage() {
  const content = await getSiteContent();

  return (
    <>
      {/* 1. Main Interactive Donation Experience Powered by Zeffy */}
      <DonationEngine content={content} isDedicatedPage={true} />

      {/* 2. Major Gifts & Wire Transfer FAQ */}
      <section style={{ backgroundColor: 'var(--color-bg-card)', borderTop: '1px solid var(--color-border)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Institutional Giving</span>
            <h2 className="section-title">Major Gifts, Wire &amp; Check Donations</h2>
            <p className="section-subtitle">
              For grants, foundation giving, corporate matching, or contributions exceeding $1,000.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '40px auto 0' }}>
            <div style={{ background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '28px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Check by Mail</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {content.check_mail_text}
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '28px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Wire / ACH Transfer</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {content.wire_transfer_text}
              </p>
              <div style={{ marginTop: '12px' }}>
                <a href={`mailto:${content.official_email}`} style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>
                  {content.official_email} &rarr;
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '28px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Employer Matching Gifts</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {content.matching_gifts_text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
