'use client';

import React from 'react';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

export default function DonationEngine({ 
  content = defaultSiteContent,
  isDedicatedPage = false 
}: { 
  content?: SiteContent;
  isDedicatedPage?: boolean;
}) {
  const zeffyUrl = content.zeffy_embed_url || 'https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true';

  return (
    <section className="donation-section" id="donate" style={isDedicatedPage ? { paddingTop: '60px' } : undefined}>
      <div className="container">
        {isDedicatedPage ? (
          <div className="section-header text-center" style={{ marginBottom: '36px' }}>
            <span className="section-tag">501(c)(3) Public Charity &bull; EIN: {content.ein_number || '922822778'}</span>
            <h1 className="section-title" style={{ fontSize: '2.8rem', marginTop: '12px' }}>
              {content.donate_page_title || 'Fuel the Next Generation of Innovators'}
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {content.donate_page_subtitle || 'When you give, you remove financial barriers for students from under-resourced schools to experience hands-on STEM learning in New York City.'}
            </p>
          </div>
        ) : (
          <div className="section-header text-center" style={{ marginBottom: '36px' }}>
            <span className="section-tag">Philanthropic Support</span>
            <h2 className="section-title">{content.donate_page_title || 'Fuel the Next Generation of Innovators'}</h2>
            <p className="section-subtitle">
              {content.donate_page_subtitle || 'Every dollar directly provides free museum admissions, bus transportation, and hands-on lab kits for under-resourced schools.'}
            </p>
          </div>
        )}

        {/* Embedded Official Zeffy Secure Donation Form */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: '18px',
          padding: '16px',
        }}>
          <div style={{ position: 'relative', width: '100%', minHeight: '650px', borderRadius: '18px', overflow: 'hidden' }}>
            <iframe 
              title="Donation form powered by Zeffy" 
              src={zeffyUrl} 
              style={{
                width: '100%',
                minHeight: '650px',
                border: 'none',
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
              }} 
              allow="payment"
              allowTransparency={true}
            />
          </div>

          <p className="donation-legal-note" style={{ marginTop: '16px', textAlign: 'center' }}>
            Federal Tax EIN: <strong>{content.ein_number || '922822778'}</strong>. The New York Auto Experience Inc. is recognized by the IRS as an exempt public charity under Section 501(c)(3). 100% of your donation is tax-deductible.
          </p>
        </div>

        {/* Allocation Transparency Breakdown */}
        <div id="transparency" style={{ maxWidth: '840px', margin: '60px auto 0', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', textAlign: 'center', color: '#FFF' }}>
            How Your Donation Is Allocated
          </h3>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>
            Because our commercial Experience Center subsidizes core facility operating overhead, 92 cents of every donated dollar goes directly into youth educational initiatives.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>{content.alloc1_percent || '75%'}</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>{content.alloc1_title || 'Direct Student Admissions'}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>{content.alloc1_desc || 'Free tickets & hands-on workshop materials for Title 1 public schools'}</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '6px' }}>{content.alloc2_percent || '17%'}</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>{content.alloc2_title || 'School Bus Transportation'}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>{content.alloc2_desc || 'Subsidizing transit costs for underserved districts across New York'}</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-amber)', marginBottom: '6px' }}>{content.alloc3_percent || '8%'}</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>{content.alloc3_title || 'Curriculum & Safety'}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>{content.alloc3_desc || 'NGSS-aligned lesson packs, physics experiment gear, and laboratory safety equipment'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
