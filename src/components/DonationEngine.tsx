'use client';

import React from 'react';

export default function DonationEngine() {
  const zeffyUrl = "https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true";

  return (
    <section className="donation-section" id="donate" style={{ paddingTop: '56px' }}>
      <div className="container">
        {/* Prominent Donor Tip Guidance Note */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto 32px auto',
            padding: '28px 32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(18, 24, 36, 0.94)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderTop: '3px solid var(--color-primary)',
            boxShadow: '0 20px 44px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '18px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '2.1rem', lineHeight: 1, flexShrink: 0, marginTop: '2px' }} aria-hidden="true">💡</span>
          <div style={{ fontSize: '1.12rem', lineHeight: 1.65, color: '#E2E8F0' }}>
            <strong
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#FFFFFF',
                display: 'block',
                marginBottom: '10px',
                letterSpacing: '-0.015em',
              }}
            >
              Donor Note Regarding Platform Tip:
            </strong>
            Zeffy is a 100% free platform for our charity that charges $0 processing fees. The platform tip prompt at checkout is completely optional—you can easily set it to{' '}
            <span style={{ color: '#38BDF8', fontWeight: 700 }}>$0.00</span> by selecting{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>&ldquo;Other&rdquo;</span> from the contribution dropdown.
          </div>
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
          Federal Tax EIN: <strong style={{ color: '#FFF' }}>922822778</strong> &bull; The New York Auto Experience Inc. is recognized by the IRS as an exempt public charity under Section 501(c)(3). Contributions are tax-deductible to the fullest extent permitted by law.
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
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38BDF8', marginBottom: '8px' }}>Center Development</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>Physical Site &amp; Architecture</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Accelerating site acquisition, planning, and immersive experience center design</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38BDF8', marginBottom: '8px' }}>Exhibits &amp; Labs</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>STEM Stations &amp; Robotics</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Engineering interactive kinetic dynos, EV technology labs, and STEM modules</div>
            </div>

            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38BDF8', marginBottom: '8px' }}>Student Equity</div>
              <div style={{ fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>Title 1 School Endowments</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-dim)' }}>Establishing pre-opening district partnerships and sponsored ticket funds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
