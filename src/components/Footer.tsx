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

            {/* Social Media Channels */}
            <div className="footer-socials">
              <span className="footer-socials-title">Follow Us</span>
              <div className="footer-social-icons">
                <a 
                  href="https://www.linkedin.com/company/new-york-auto-museum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="LinkedIn" 
                  aria-label="LinkedIn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/newyorkautomuseum/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Instagram" 
                  aria-label="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/NYAutoMuseum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="X (Twitter)" 
                  aria-label="X (Twitter)"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61585348961563" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Facebook" 
                  aria-label="Facebook"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@newyorkautomuseumexp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="YouTube" 
                  aria-label="YouTube"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@newyorkautomuseum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="TikTok" 
                  aria-label="TikTok"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.29 1.76-.29 1.1.1 2.31.95 3.03.88.75 2.14.88 3.16.43.76-.32 1.34-1 1.49-1.81.12-.9.08-1.81.08-2.71V.02z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.threads.com/@dsenater1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Threads" 
                  aria-label="Threads"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 3.076 0 5.823-1.385 7.666-3.565a.8.8 0 0 0-.174-1.162.796.796 0 0 0-1.16.175C16.69 21.365 14.47 20.4 12 20.4c-4.632 0-8.4-3.768-8.4-8.4S7.368 3.6 12 3.6c4.632 0 8.4 3.768 8.4 8.4 0 1.258-.29 2.457-.803 3.513-.424.873-1.096 1.487-1.944 1.487-.768 0-1.32-.435-1.554-1.226.792-.44 1.378-1.18 1.575-2.074.24-.96.08-2.024-.456-2.922-.84-1.41-2.42-2.178-4.12-2.003-2.052.21-3.698 1.932-3.698 4.225 0 2.26 1.614 3.96 3.864 3.96 1.18 0 2.228-.48 2.87-1.32.39.73 1.05 1.16 1.863 1.16 1.392 0 2.46-.948 3.072-2.208.64-1.31.99-2.79.99-4.366C22 6.477 17.523 2 12 2zm-.23 13.4c-1.368 0-2.316-.984-2.316-2.4 0-1.415.948-2.4 2.316-2.4 1.28 0 2.148.84 2.148 2.064 0 .28-.06.576-.17.84-.25.59-.79.9-1.98.9z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.snapchat.com/@NYAutoMuseum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Snapchat" 
                  aria-label="Snapchat"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.002 2C7.309 2 4.966 5.08 4.966 7.425c0 1.056.465 2.148 1.099 3.013.279.379.372.635.155 1.054-.248.479-.806.96-1.426 1.054-.341.051-.558.263-.589.604-.031.341.155.651.527.775 1.085.357 2.077.062 2.604-.372.31-.256.62-.124.775.093.589.822 1.953 2.511 3.89 2.511 1.938 0 3.301-1.689 3.89-2.511.155-.217.465-.349.775-.093.527.434 1.519.729 2.604.372.372-.124.558-.434.527-.775-.031-.341-.248-.553-.589-.604-.62-.094-1.178-.575-1.426-1.054-.217-.419-.124-.675.155-1.054.634-.865 1.099-1.957 1.099-3.013C20.038 5.08 17.695 2 12.002 2z"/>
                  </svg>
                </a>
                <a 
                  href="https://in.pinterest.com/newyorkautomuseum/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Pinterest" 
                  aria-label="Pinterest"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.378 12.004-12.002C24.019 5.367 18.644 0 12.017 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tumblr.com/blog/newyorkautomuseum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Tumblr" 
                  aria-label="Tumblr"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.563 24c-5.093 0-7.031-2.756-7.031-6.415V10.66H4.787V7.127c2.812-.86 3.98-3.08 4.25-5.127H12.3v4.66h4.31v3.999h-4.31v6.333c0 1.942.84 2.667 2.375 2.667h2.083V24h-2.195z"/>
                  </svg>
                </a>
                <a 
                  href="https://mastodon.social/@NewYorkAutoMuseum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn" 
                  title="Mastodon" 
                  aria-label="Mastodon"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.688 1.496 2.518.915 5.105.353 7.625.26 10.88.26 12.05c0 1.168.093 4.425.655 6.945.58 2.587 2.966 4.417 5.58 4.796 2.062.298 4.166.363 6.228.188.38-.032.755-.078 1.127-.14 1.704-.287 3.336-1.12 4.095-2.338.423-.678.718-1.503.718-2.45v-.444a.42.42 0 0 0-.42-.42h-1.637a.42.42 0 0 0-.42.42v.328c0 1.25-.838 2.222-2.38 2.392-1.488.164-3.031.182-4.526.046-1.396-.128-2.307-.84-2.434-2.147-.024-.25-.035-.5-.035-.747V15.7c0-.232.188-.42.42-.42h1.637c.232 0 .42.188.42.42v.333c.068.745.585 1.173 1.547 1.23 1.272.077 2.56.048 3.828-.088 1.764-.19 3.01-1.378 3.2-3.14.283-2.618.232-5.462.232-5.462a.42.42 0 0 0-.42-.42H16.27a.42.42 0 0 0-.42.42v3.743a.42.42 0 0 1-.42.42h-1.637a.42.42 0 0 1-.42-.42V7.808a.42.42 0 0 0-.42-.42h-2.348a.42.42 0 0 0-.42.42v4.298a.42.42 0 0 1-.42.42H8.15a.42.42 0 0 1-.42-.42V7.808a.42.42 0 0 0-.42-.42H5.38a.42.42 0 0 0-.42.42v4.88c0 1.517-.11 4.544 1.196 6.58-1.52-.394-2.656-1.542-3.033-3.19C2.65 14.29 2.59 12.05 2.59 12.05s.06-2.24.533-4.048c.377-1.648 1.513-2.796 3.033-3.19.453-.117 1.734-.236 5.626-.236h.031c3.892 0 5.173.119 5.626.236 1.52.394 2.656 1.542 3.033 3.19.473 1.808.533 4.048.533 4.048s-.06 2.24-.533 4.048c-.067.29-.153.57-.257.838a.42.42 0 0 0 .39.571h1.637a.42.42 0 0 0 .41-.334c.15-.49.263-.99.338-1.498.563-2.52.655-5.777.655-6.946 0-1.168-.092-4.424-.655-6.944z"/>
                  </svg>
                </a>
              </div>
            </div>
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
