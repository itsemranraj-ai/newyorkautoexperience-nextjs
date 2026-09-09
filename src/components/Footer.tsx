'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribing(true);
    setNewsletterStatus(null);

    try {
      const formPayload = new URLSearchParams({
        email: newsletterEmail.trim(),
      });

      const postBody = new URLSearchParams({
        action: 'fluentform_submit',
        form_id: '2',
        data: formPayload.toString(),
      });

      const res = await fetch('https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: postBody.toString(),
      });

      const data = await res.json();
      if (data.success) {
        setNewsletterStatus({ success: true, message: 'Subscribed successfully!' });
        setNewsletterEmail('');
      } else {
        setNewsletterStatus({ success: false, message: 'Subscription could not be completed.' });
      }
    } catch (err) {
      try {
        const fb = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: newsletterEmail }),
        });
        const fbData = await fb.json();
        if (fb.ok && fbData.success) {
          setNewsletterStatus({ success: true, message: 'Subscribed successfully!' });
          setNewsletterEmail('');
          return;
        }
      } catch (_) {}
      setNewsletterStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Headquarters */}
          <div className="footer-brand">
            <Link href="/" className="brand-link" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Image 
                src="/logo.png" 
                alt="The New York Auto Experience Inc." 
                width={180} 
                height={60} 
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p>
              The New York Auto Experience Inc. is a registered 501(c)(3) public charity uniting automotive science, clean technology, and STEM education to ignite curiosity in the next generation.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
              <strong style={{ color: '#FFFFFF' }}>Headquarters:</strong><br />
              767 Broadway #1671, New York, NY 10003, USA<br />
              Email: <a href="mailto:info@newyorkautoexperience.org" style={{ color: 'var(--color-primary)' }}>info@newyorkautoexperience.org</a>
            </div>
          </div>

          {/* Col 2: Exhibitions */}
          <div className="footer-col">
            <h5>Exhibitions</h5>
            <ul className="footer-links-list">
              <li><Link href="/exhibits">Autonomous Driving &amp; AI</Link></li>
              <li><Link href="/exhibits">EV &amp; Clean Tech</Link></li>
              <li><Link href="/exhibits">Engine &amp; Powertrain</Link></li>
              <li><Link href="/exhibits">Motorsport &amp; Telemetry</Link></li>
              <li><Link href="/exhibits">Chassis &amp; Safety Tech</Link></li>
            </ul>
          </div>

          {/* Col 3: Organization */}
          <div className="footer-col">
            <h5>Organization</h5>
            <ul className="footer-links-list">
              <li><Link href="/mission">Our Mission</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/#stem-portal">For Educators</Link></li>
              <li><Link href="/donate">Donate &amp; Support</Link></li>
              <li><a href="https://newyorkautomuseum.com/" target="_blank" rel="noopener noreferrer">New York Auto Museum</a></li>
              <li><Link href="/donate#transparency">Annual Impact Report</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="footer-col">
            <h5>Stay Connected</h5>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '14px', lineHeight: 1.5 }}>
              Receive updates on student workshops, free admission days, and exhibit expansions.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer-newsletter-input" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required 
                disabled={subscribing}
              />
              <button 
                type="submit" 
                className="btn btn-primary btn-sm"
                disabled={subscribing}
                style={{ opacity: subscribing ? 0.7 : 1 }}
              >
                {subscribing ? '...' : 'Join'}
              </button>
            </form>
            {newsletterStatus && (
              <p style={{
                marginTop: '10px',
                fontSize: '0.82rem',
                color: newsletterStatus.success ? '#34D399' : '#F87171',
                lineHeight: 1.4
              }}>
                {newsletterStatus.success ? '✓ ' : '⚠️ '}
                {newsletterStatus.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-badge">
            <span>&copy; 2026 The New York Auto Experience Inc. All rights reserved.</span>
            <span>&bull;</span>
            <span>501(c)(3) Nonprofit EIN: <strong style={{ color: '#FFF' }}>922822778</strong></span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/mission" style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>Our Mission</Link>
            <Link href="/careers" style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>Careers</Link>
            <Link href="/exhibits" style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>Exhibits</Link>
            <Link href="/donate" style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>Donate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
