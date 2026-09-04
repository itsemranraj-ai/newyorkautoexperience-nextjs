'use client';

import React, { useState } from 'react';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

const presetAmounts = [25, 50, 100, 250];

export default function DonationEngine({ 
  content = defaultSiteContent,
  isDedicatedPage = false 
}: { 
  content?: SiteContent;
  isDedicatedPage?: boolean;
}) {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const impactDescriptions: Record<number, string> = {
    25: content.impact_tier_25 || 'Underwrites 1 Title 1 student admission and hands-on STEM lab notebook.',
    50: content.impact_tier_50 || 'Sponsors 2 students complete immersive STEM lab experience and guided engineering session.',
    100: content.impact_tier_100 || 'Funds full interactive workshop materials and robotics kit for an entire student group.',
    250: content.impact_tier_250 || 'Sponsors an entire classroom bus transit grant and provides teacher follow-up curriculum.',
  };

  const getImpactStatement = (amt: number) => {
    if (amt >= 250) return impactDescriptions[250];
    if (amt >= 100) return impactDescriptions[100];
    if (amt >= 50) return impactDescriptions[50];
    if (amt >= 25) return impactDescriptions[25];
    return 'Provides direct support to our youth STEM education mission in New York.';
  };

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const zeffyUrl = content.zeffy_embed_url || 'https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true';

  return (
    <section className="donation-section" id="donate" style={isDedicatedPage ? { paddingTop: '60px' } : undefined}>
      <div className="container">
        {isDedicatedPage ? (
          <div className="section-header text-center" style={{ marginBottom: '40px' }}>
            <span className="section-tag">501(c)(3) Public Charity &bull; EIN: {content.ein_number || '922822778'}</span>
            <h1 className="section-title" style={{ fontSize: '2.8rem', marginTop: '12px' }}>
              {content.donate_page_title || 'Fuel the Next Generation of Innovators'}
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {content.donate_page_subtitle || 'When you give, you remove financial barriers for students from under-resourced schools to experience hands-on STEM learning in New York City.'}
            </p>
          </div>
        ) : (
          <div className="section-header text-center">
            <span className="section-tag">Philanthropic Support</span>
            <h2 className="section-title">{content.donate_page_title || 'Fuel the Next Generation of Innovators'}</h2>
            <p className="section-subtitle">
              Every dollar directly provides free museum admissions, bus transportation, and hands-on lab kits for under-resourced schools.
            </p>
          </div>
        )}

        <div className="donation-wrapper">
          {/* Donation Frequency Toggle */}
          <div className="donation-type-tabs">
            <button 
              className={`donation-type-tab ${!isMonthly ? 'active' : ''}`}
              onClick={() => setIsMonthly(false)}
            >
              One-Time Contribution
            </button>
            <button 
              className={`donation-type-tab ${isMonthly ? 'active' : ''}`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly Sustainer
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="donation-presets-grid">
            {presetAmounts.map((amt) => (
              <button 
                key={amt}
                className={`donation-preset-btn ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                onClick={() => handlePresetClick(amt)}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="custom-donation-input-wrap">
            <span className="custom-donation-currency">$</span>
            <input 
              type="number" 
              className="custom-donation-input" 
              placeholder="Or enter custom amount in USD"
              min="5"
              step="1"
              value={customAmount}
              onChange={handleCustomChange}
            />
          </div>

          {/* Real-time Dynamic Impact Box */}
          <div className="donation-impact-box">
            <p>
              <strong>Your Impact in Action:</strong><br />
              <span className="impact-highlight">{getImpactStatement(currentAmount)}</span>
            </p>
          </div>

          {/* Direct Live Zeffy Checkout CTA */}
          <div style={{ marginTop: '24px' }}>
            <a 
              href={zeffyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary donation-submit-btn"
              style={{ display: 'block', textAlign: 'center', fontSize: '1.1rem', padding: '16px' }}
            >
              Complete {isMonthly ? 'Monthly' : 'One-Time'} Donation of ${currentAmount > 0 ? currentAmount : '50'} via Zeffy &rarr;
            </a>
          </div>

          <p className="donation-legal-note">
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
