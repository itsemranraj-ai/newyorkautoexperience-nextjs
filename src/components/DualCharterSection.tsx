import React from 'react';
import Link from 'next/link';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

export default function DualCharterSection({ content = defaultSiteContent }: { content?: SiteContent }) {
  return (
    <section className="dual-charter-section" id="dual-charter">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Sustainable Social Enterprise</span>
          <h2 className="section-title">{content.dual_charter_title}</h2>
          <p className="section-subtitle">
            {content.dual_charter_subtitle}
          </p>
        </div>

        <div className="charter-cards-grid">
          {/* Commercial Charter */}
          <div className="charter-card">
            <span className="charter-card-tag blue">Commercial Engine</span>
            <h3>{content.comm_card_title}</h3>
            <p>
              {content.comm_card_desc}
            </p>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.88rem' }}>
              Revenue generated directly offsets overhead, facility costs, and exhibition acquisitions.
            </p>
          </div>

          {/* Nonprofit Foundation */}
          <div className="charter-card highlight-card">
            <span className="charter-card-tag red">Nonprofit Mission</span>
            <h3>{content.nonprofit_card_title}</h3>
            <p>
              {content.nonprofit_card_desc}
            </p>
            <p style={{ color: 'var(--color-primary)', fontSize: '0.88rem', fontWeight: 600 }}>
              Grants 500,000+ free admissions annually to Title 1 public school students with certified STEM lab guides.
            </p>
          </div>
        </div>

        {/* Why it matters callout */}
        <div className="charter-callout-card">
          <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>
            Why This Model Revolutionizes Educational Nonprofits
          </h4>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
            {content.why_dual_charter}
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
