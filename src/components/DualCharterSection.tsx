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
          {/* Nonprofit Foundation */}
          <div className="charter-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="charter-card-tag">Nonprofit Mission</span>
              <h3>The New York Auto Experience Inc. (501c3)</h3>
              <p>
                The dedicated educational public charity chartered to turn automotive technology into accredited STEM curricula. Dedicated to ensuring financial barriers never prevent curious students from hands-on science learning.
              </p>
            </div>
            <p style={{ color: '#38BDF8', fontSize: '0.88rem', fontWeight: 600, marginTop: 'auto', paddingTop: '16px' }}>
              Targeting 500,000+ a year sponsored admissions for Title 1 public school students upon grand opening.
            </p>
          </div>

          {/* Educational Impact Card */}
          <div className="charter-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="charter-card-tag">Educational Impact</span>
              <h3>Why This Model Revolutionizes Educational Nonprofits</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                As an emerging cultural foundation in our active developmental stage, our strategic partnership with the Experience Center eliminates future redundant facility overhead. Philanthropic gifts at this vital juncture directly accelerate site planning, interactive exhibition buildout, and the creation of accredited STEM curricula that will welcome students on opening day.
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <Link href="/mission" className="btn btn-secondary btn-sm">
                Read Complete Charter &amp; Governance Details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
