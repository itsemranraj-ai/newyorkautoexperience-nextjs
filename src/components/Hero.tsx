import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

export default function Hero({ content = defaultSiteContent }: { content?: SiteContent }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              {content.home_hero_tag}
            </div>
            <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>
              {content.home_hero_title}
            </h1>
            <p className="hero-description">
              {content.home_hero_desc}
            </p>
            <div className="hero-cta-group">
              <Link href="/exhibits" className="btn btn-primary btn-lg">
                {content.home_hero_btn_primary || 'Explore 12+ Exhibits'}
              </Link>
              <Link href="/#stem-portal" className="btn btn-secondary btn-lg">
                {content.home_hero_btn_secondary || 'Request School Field Trip'}
              </Link>
            </div>
            <div className="hero-trust-row">
              <span>Brought to you in partnership with <strong>New York Auto Museum</strong></span>
              <span>&bull;</span>
              <span>EIN: <strong>{content.ein_number}</strong></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-card">
              <Image 
                src={content.home_hero_image || '/future.jpg'} 
                alt="Future of Automotive & STEM Aerodynamics Showcase"
                width={1024}
                height={576}
                priority
              />
              <div className="hero-visual-overlay">
                <span className="hero-visual-caption">Future of Mobility &amp; Aerodynamics Lab</span>
                <span className="hero-visual-badge">Interactive STEM Exhibit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
