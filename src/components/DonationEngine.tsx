'use client';

import React from 'react';

export default function DonationEngine() {
  const zeffyUrl = "https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true";

  return (
    <section className="donation-section" id="donate">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">100% Fee-Free Platform</span>
          <h2 className="section-title">Fuel the Next Generation of Innovators</h2>
          <p className="section-subtitle">
            100% of your tax-deductible contribution directly supports our foundation's active development, future exhibit buildout, and sponsored Title 1 STEM admissions in New York.
          </p>
        </div>

        {/* Embedded Official Zeffy Form (Direct Zero-Fee Giving) */}
        <div style={{
          maxWidth: '580px',
          margin: '0 auto',
          position: 'relative',
          width: '100%',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF'
        }}>
          <iframe 
            title="Donation form powered by Zeffy" 
            src={zeffyUrl} 
            style={{
              width: '100%',
              height: '590px',
              border: 'none',
              borderRadius: '18px',
              background: 'transparent',
              display: 'block'
            }} 
            allow="payment"
          />
        </div>

        <p className="donation-legal-note" style={{ textAlign: 'center', marginTop: '24px', color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
          Federal Tax EIN: <strong style={{ color: '#FFF' }}>922822778</strong> &bull; The New York Auto Experience Inc. is recognized by the IRS as an exempt public charity under Section 501(c)(3). 100% of your donation is tax-deductible.
        </p>

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
