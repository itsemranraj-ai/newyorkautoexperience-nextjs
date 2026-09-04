import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounters from '@/components/AnimatedCounters';
import { getSiteContent } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Our Mission of Impact & Dual Charter | The New York Auto Experience Inc.',
  description: 'Learn about our 501(c)(3) mission to educate, enlighten, and entertain 2 million students through automotive STEM education in partnership with the New York Auto Museum.',
};

export default async function MissionPage() {
  const content = await getSiteContent();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                {content.mission_hero_tag}
              </div>
              <h1 className="hero-title">
                {content.mission_hero_title}
              </h1>
              <p className="hero-description" style={{ whiteSpace: 'pre-line' }}>
                {content.mission_hero_quote}
              </p>
              <div className="hero-cta-group">
                <a href="#three-pillars" className="btn btn-primary btn-lg">
                  Explore Our 3 Pillars
                </a>
                <a href="#dual-charter" className="btn btn-secondary btn-lg">
                  Dual Charter Model
                </a>
              </div>
              <div className="hero-trust-row">
                <span>In Partnership with <strong>New York Auto Museum</strong></span>
                <span className="separator">&bull;</span>
                <span>Headquartered in <strong>New York, NY 10003</strong></span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-card">
                <Image 
                  src="/racing.jpg" 
                  alt="Automotive Innovation & Technology Exhibit"
                  width={1024}
                  height={683}
                  priority
                />
                <div className="hero-visual-overlay">
                  <span className="hero-visual-caption">Metropolitan New York Experience Center &bull; STEM Education Wing</span>
                  <span className="hero-visual-badge">Mission in Action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Impact Metrics */}
      <AnimatedCounters content={content} />

      {/* The Three Core Pillars */}
      <section className="section-padding" id="three-pillars" style={{ backgroundColor: 'var(--color-bg-card)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Core Tenets</span>
            <h2 className="section-title">Designed to Educate, Enlighten &amp; Entertain</h2>
            <p className="section-subtitle">
              How we leverage the science, technology, and cultural legacy of automobiles to unlock human potential.
            </p>
          </div>

          <div className="pillars-grid">
            {/* Pillar 1 */}
            <div className="exhibit-card" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🔬</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>{content.pillar1_title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                {content.pillar1_desc}
              </p>
              <ul style={{ color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                <li>Hands-on physics and mechanics labs</li>
                <li>Clean energy &amp; battery technology</li>
                <li>Applied robotics and automotive software</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="exhibit-card" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>💡</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>{content.pillar2_title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                {content.pillar2_desc}
              </p>
              <ul style={{ color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                <li>Direct pathways to STEM engineering careers</li>
                <li>Mentorship from mobility industry leaders</li>
                <li>Equitable access for Title 1 public school students</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="exhibit-card" style={{ padding: '28px 24px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🏎️</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>{content.pillar3_title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                {content.pillar3_desc}
              </p>
              <ul style={{ color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                <li>Dynamic motion simulators &amp; VR stations</li>
                <li>Motorsport heritage &amp; historic restoration</li>
                <li>Interactive live demonstration theater</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Charter Synergy */}
      <section className="dual-charter-section" id="dual-charter">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Innovative Sustainability Model</span>
            <h2 className="section-title">{content.dual_charter_title}</h2>
            <p className="section-subtitle">
              {content.dual_charter_subtitle}
            </p>
          </div>

          <div className="dual-charter-grid">
            <div className="charter-card commercial">
              <div className="charter-badge">Commercial Entity</div>
              <h3 className="charter-title">{content.comm_card_title}</h3>
              <p className="charter-text">
                {content.comm_card_desc}
              </p>
              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Primary Role:</strong>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                  Generates sustainable enterprise revenue to underwrite, fuel, and amplify the educational foundation.
                </p>
              </div>
            </div>

            <div className="charter-card nonprofit">
              <div className="charter-badge nonprofit">501(c)(3) Nonprofit Public Charity</div>
              <h3 className="charter-title">{content.nonprofit_card_title}</h3>
              <p className="charter-text">
                {content.nonprofit_card_desc}
              </p>
              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Primary Role:</strong>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                  Grants 500,000+ free admissions annually and delivers accredited STEM field trip experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="charter-callout-card">
            <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>Why the Dual Charter Matters</h4>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
              {content.why_dual_charter}
            </p>
          </div>
        </div>
      </section>

      {/* Governance & Transparency */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-card)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Public Charity Accountability</span>
            <h2 className="section-title">Institutional Governance &amp; Transparency</h2>
            <p className="section-subtitle">
              Operating with the highest fiduciary standards of federal 501(c)(3) compliance.
            </p>
          </div>

          <div className="governance-grid">
            <div style={{ background: 'var(--color-bg-main)', padding: '24px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '8px' }}>LEGAL STATUS</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{content.gov_card1_title}</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                {content.gov_card1_desc}
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '24px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '8px' }}>FEDERAL TAX ID</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{content.gov_card2_title}</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                {content.gov_card2_desc}
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '24px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent-amber)', fontWeight: 700, marginBottom: '8px' }}>FINANCIAL AUDIT</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{content.gov_card3_title}</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                {content.gov_card3_desc}
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '24px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-success)', fontWeight: 700, marginBottom: '8px' }}>FIDUCIARY OVERSIGHT</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{content.gov_card4_title}</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                {content.gov_card4_desc}
              </p>
            </div>
          </div>

          <div className="mission-cta-group" style={{ marginTop: '48px' }}>
            <Link href="/donate" className="btn btn-primary btn-lg">
              Support Our Educational Mission
            </Link>
            <Link href="/#stem-portal" className="btn btn-secondary btn-lg">
              Book School Field Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
