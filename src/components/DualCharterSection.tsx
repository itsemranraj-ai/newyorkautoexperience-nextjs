import React from 'react';
import Link from 'next/link';

export default function DualCharterSection() {
  return (
    <section className="dual-charter-section" id="dual-charter">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Sustainable Social Enterprise</span>
          <h2 className="section-title">The Dual Charter Innovation Model</h2>
          <p className="section-subtitle">
            How commercial automotive excitement fuels lasting educational equity for American youth.
          </p>
        </div>

        <div className="charter-cards-grid">
          {/* Commercial Charter */}
          <div className="charter-card">
            <span className="charter-card-tag blue">Commercial Engine</span>
            <h3>Metropolitan NY Experience Center</h3>
            <p>
              A flagship world-class automotive attraction in the greater New York metropolitan area. Drives revenue through public ticket admissions, high-fidelity driving simulators, racing showcases, corporate events, and brand sponsorships.
            </p>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.88rem' }}>
              Revenue generated directly offsets overhead, facility costs, and exhibition acquisitions.
            </p>
          </div>

          {/* Nonprofit Foundation */}
          <div className="charter-card highlight-card">
            <span className="charter-card-tag red">Nonprofit Mission</span>
            <h3>The New York Auto Experience Inc. (501c3)</h3>
            <p>
              The dedicated educational public charity chartered to turn automotive technology into accredited STEM curricula. Dedicated to ensuring financial barriers never prevent curious students from hands-on science learning.
            </p>
            <p style={{ color: 'var(--color-primary)', fontSize: '0.88rem', fontWeight: 600 }}>
              Targeting 500,000+ annual sponsored admissions for Title 1 public school students upon grand opening.
            </p>
          </div>
        </div>

        {/* Why it matters callout */}
        <div style={{
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '35px',
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>
            Why This Model Revolutionizes Educational Nonprofits
          </h4>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
            As an emerging cultural foundation in our active developmental stage, our strategic partnership with the Experience Center eliminates future redundant facility overhead. Philanthropic gifts at this vital juncture directly accelerate site planning, interactive exhibition buildout, and the creation of accredited STEM curricula that will welcome students on opening day.
          </p>
          <div style={{ marginTop: '20px' }}>
            <Link href="/mission" className="btn btn-secondary btn-sm">
              Read Complete Charter &amp; Governance Details &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
