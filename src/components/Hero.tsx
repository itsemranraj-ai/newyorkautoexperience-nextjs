import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dot pulse-red"></span>
              <strong>COMING SOON TO NEW YORK</strong> &bull; Physical Location In Active Development
            </div>
            <h1 className="hero-title">
              Empowering <span className="highlight">2 Million Students</span><br />
              Through Automotive STEM.
            </h1>
            <p className="hero-description">
              Rooted in the spirit of innovation, our 501(c)(3) educational foundation is actively developing an immersive physical center in New York to provide high-impact hands-on learning in robotics, clean energy, aerodynamics, and mechanics for American youth.
            </p>
            <div className="hero-cta-group">
              <Link href="/exhibits" className="btn btn-primary btn-lg">
                Preview 12+ Planned Exhibits
              </Link>
              <Link href="/#stem-portal" className="btn btn-secondary btn-lg">
                Pre-Register School Field Trip
              </Link>
            </div>
            <div className="hero-trust-row">
              <span>Brought to you in partnership with <strong>New York Auto Museum</strong></span>
              <span>&bull;</span>
              <span>EIN: <strong>922822778</strong></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-card">
              <Image 
                src="/future.jpg" 
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
