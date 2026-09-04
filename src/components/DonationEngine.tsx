'use client';

import React, { useState } from 'react';

const presetAmounts = [25, 50, 100, 250];

const impactDescriptions: Record<number, string> = {
  25: 'Underwrites curriculum design and student activity workbooks for future opening.',
  50: 'Supports interactive engineering exhibit development and student lab pilot sessions.',
  100: 'Powers hands-on robotics equipment and sponsored Title 1 admission endowments.',
  250: 'Sponsors classroom outreach, educator curriculum guides, and pre-opening student pilots.',
};

export default function DonationEngine() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const getImpactStatement = (amt: number) => {
    if (amt >= 250) return impactDescriptions[250];
    if (amt >= 100) return impactDescriptions[100];
    if (amt >= 50) return impactDescriptions[50];
    if (amt >= 25) return impactDescriptions[25];
    return `Powers our active development and future youth STEM mission in New York.`;
  };

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const zeffyUrl = "https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true";

  return (
    <section className="donation-section" id="donate">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Philanthropic Support</span>
          <h2 className="section-title">Fuel the Next Generation of Innovators</h2>
          <p className="section-subtitle">
            Philanthropic gifts power our foundation's active development, future exhibit engineering, and sponsored STEM admissions for public schools.
          </p>
        </div>

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
            Federal Tax EIN: <strong>922822778</strong>. The New York Auto Experience Inc. is recognized by the IRS as an exempt public charity under Section 501(c)(3). 100% of your donation is tax-deductible.
          </p>
        </div>

        {/* Allocation Transparency Breakdown */}
        <div id="transparency" style={{ maxWidth: '840px', margin: '60px auto 0', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', textAlign: 'center', color: '#FFF' }}>
            How Your Development-Stage Gift Is Deployed
          </h3>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>
            In our active developmental phase, every contributed dollar is responsibly stewarded toward building an iconic permanent institution and expanding future STEM opportunities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>Center Development</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>Physical Site &amp; Architecture</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Accelerating site acquisition, planning, and immersive experience center design</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '8px' }}>Exhibits &amp; Labs</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>STEM Stations &amp; Robotics</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Engineering interactive kinetic dynos, EV technology labs, and STEM modules</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-amber)', marginBottom: '8px' }}>Student Equity</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>Title 1 School Endowments</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Establishing pre-opening district partnerships and sponsored ticket funds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
