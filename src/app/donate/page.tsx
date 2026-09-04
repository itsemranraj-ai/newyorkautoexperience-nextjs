import React from 'react';
import type { Metadata } from 'next';
import DonationEngine from '@/components/DonationEngine';

export const metadata: Metadata = {
  title: 'Donate & Support STEM Education | The New York Auto Experience Inc.',
  description: 'Support hands-on STEM education and free museum admissions for over 2 million New York and American students. 100% tax deductible 501(c)(3) EIN: 922822778.',
};

export default function DonatePage() {
  const zeffyUrl = "https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true";

  return (
    <>
      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)', padding: '60px 0 40px' }}>
        <div className="container text-center">
          <span className="section-tag">Empower Youth In Innovation</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Fuel the Next Generation of Innovators</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Contributions power our foundation's active development, future exhibit buildout, and sponsored STEM admissions for New York students upon opening.
          </p>
        </div>
      </section>

      {/* Main Interactive Donation Engine */}
      <DonationEngine />

      {/* Embedded Live Zeffy Form Section */}
      <section style={{ backgroundColor: 'var(--color-bg-main)', borderTop: '1px solid var(--color-border)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Direct 100% Fee-Free Platform</span>
            <h2 className="section-title">Give Directly via Zeffy</h2>
            <p className="section-subtitle">
              Zeffy is the only zero-fee donation platform for nonprofits, ensuring 100% of your gift supports our capital development and student STEM initiatives without platform deductions.
            </p>
          </div>

          <div style={{
            maxWidth: '850px',
            margin: '0 auto',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <iframe 
              title="Donation Form - The New York Auto Experience"
              src={zeffyUrl}
              style={{
                width: '100%',
                minHeight: '650px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF'
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Major Gifts & Wire Transfer FAQ */}
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
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Please make checks payable to:<br />
                <strong style={{ color: '#FFFFFF' }}>The New York Auto Experience Inc.</strong><br />
                767 Broadway #1671<br />
                New York, NY 10003, USA<br />
                Memo: <em>STEM Youth Fund</em>
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '28px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Wire / ACH Transfer</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                For bank wire instructions, routing numbers, or DAF (Donor Advised Fund) direct distribution, contact our finance desk directly:
              </p>
              <div style={{ marginTop: '12px' }}>
                <a href="mailto:info@newyorkautoexperience.org" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>
                  info@newyorkautoexperience.org &rarr;
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--color-bg-main)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '28px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Employer Matching Gifts</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Many companies double or triple employee charitable contributions. Search your company portal for <strong>The New York Auto Experience Inc.</strong> (EIN: 922822778).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
