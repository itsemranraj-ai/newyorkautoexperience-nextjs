import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounters from '@/components/AnimatedCounters';

export const metadata: Metadata = {
  title: 'Our Mission of Impact & Dual Charter | The New York Auto Experience Inc.',
  description: 'Learn about our 501(c)(3) mission to educate, enlighten, and entertain 2 million students through automotive STEM education in partnership with the New York Auto Museum.',
};

export default function MissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                501(c)(3) Public Charity &bull; EIN: 922822778
              </div>
              <h1 className="hero-title">
                Our Mission of <span className="highlight">Impact</span> &amp; Inspiration.
              </h1>
              <p className="hero-description">
                "The mission of the New York Auto Experience Inc. Nonprofit is to create a world-class STEM based education experience for millions of students across America. These automotive based experiences are designed to <strong>educate, enlighten and entertain</strong>."
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
                <span>&bull;</span>
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
      <AnimatedCounters />

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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {/* Pillar 1 */}
            <div className="exhibit-card" style={{ padding: '35px 30px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🔬</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>1. Educate</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                Providing structured, hands-on STEM curriculum aligned with state physics and engineering standards. Students explore aerodynamics, regenerative electric powertrains, sensor fusion, and crash-test physics firsthand.
              </p>
              <ul style={{ color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                <li>Hands-on physics and mechanics labs</li>
                <li>Clean energy &amp; battery technology</li>
                <li>Applied robotics and automotive software</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="exhibit-card" style={{ padding: '35px 30px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>💡</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>2. Enlighten</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                Opening doors to modern high-paying technological and engineering careers for youth who have never been exposed to the automotive innovation ecosystem. Mentorship programs with automotive engineers and curators.
              </p>
              <ul style={{ color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.8, paddingLeft: '20px' }}>
                <li>Direct pathways to STEM engineering careers</li>
                <li>Mentorship from mobility industry leaders</li>
                <li>Equitable access for Title 1 public school students</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="exhibit-card" style={{ padding: '35px 30px' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '15px' }}>🏎️</div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>3. Entertain</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '15px' }}>
                Making education unforgettable through immersive multi-sensory experiences, historical racing showcases, tactile simulator benches, and theatrical demonstrations that ignite lifelong passion.
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
            <h2 className="section-title">The Dual Charter Synergy</h2>
            <p className="section-subtitle">
              How our commercial Experience Center and 501(c)(3) nonprofit work together to fuel everlasting educational impact.
            </p>
          </div>

          <div className="dual-charter-grid">
            <div className="charter-card commercial">
              <div className="charter-badge">Commercial Entity</div>
              <h3 className="charter-title">Metropolitan New York Auto Experience Center</h3>
              <p className="charter-text">
                A world-class commercial automotive destination in the greater New York metropolitan area. Drives self-sustaining revenue through public admissions, dynamic simulators, motorsport showcases, and corporate hospitality.
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
              <h3 className="charter-title">The New York Auto Experience Inc.</h3>
              <p className="charter-text">
                The dedicated educational foundation chartered to transform automotive science into accessible STEM curricula. Dedicated to ensuring that lack of personal financial means never prevents a curious child from learning.
              </p>
              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>Primary Role:</strong>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                  Targeting 500,000+ annual sponsored admissions and accredited STEM field trip experiences upon grand opening.
                </p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '35px',
            marginTop: '40px',
            textAlign: 'center'
          }}>
            <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '10px' }}>Why the Dual Charter Matters</h4>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
              As an agile cultural foundation in our active developmental stage, our strategic partnership with the commercial Experience Center is designed to eliminate future redundant facility overhead. Philanthropic contributions directly accelerate site planning, interactive exhibition buildout, and the creation of accredited STEM curricula that will welcome public school students upon grand opening.
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}>
            <div style={{ background: 'var(--color-bg-main)', padding: '25px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '8px' }}>LEGAL STATUS</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>501(c)(3) Public Charity</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                Organized exclusively for educational and charitable purposes under the US Internal Revenue Code.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '25px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '8px' }}>FEDERAL TAX ID</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>EIN: 922822778</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                All contributions are tax-deductible to the full extent of the law for individuals and corporations.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '25px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent-amber)', fontWeight: 700, marginBottom: '8px' }}>FINANCIAL AUDIT</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>Public Form 990</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                Annual independent financial audits and public IRS Form 990 disclosures published for total donor trust.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg-main)', padding: '25px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-success)', fontWeight: 700, marginBottom: '8px' }}>FIDUCIARY OVERSIGHT</div>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>Independent Board</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                Governed by an independent Board of Trustees representing automotive pioneers, educators, and civic leaders.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/donate" className="btn btn-primary btn-lg" style={{ marginRight: '16px' }}>
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
