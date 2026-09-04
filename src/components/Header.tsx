'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

export default function Header({ content = defaultSiteContent }: { content?: SiteContent }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Exhibits', href: '/exhibits' },
    { name: 'STEM Education', href: '/#stem-portal' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <>
      {/* 1. Top Announcement Bar */}
      <div className="announcement-bar">
        <span className="badge-pill">{content.announcement_badge}</span>
        <span>{content.announcement_text}</span>
        <Link href={content.announcement_link || '/#stem-portal'} style={{ color: '#38BDF8', fontWeight: 600, marginLeft: '8px' }}>
          Learn More &rarr;
        </Link>
      </div>

      {/* 2. Sticky Header */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-logo-wrap">
            <Link href="/" className="brand-link">
              <Image 
                src="/logo.png" 
                alt="The New York Auto Experience Inc. Logo" 
                width={140} 
                height={52} 
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>
            <span className="brand-badge">501(c)(3) Nonprofit</span>
          </div>

          <nav className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={isActive ? 'active' : ''}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header-actions">
              <Link href="/#stem-portal" className="btn btn-secondary btn-sm" onClick={() => setMobileOpen(false)}>
                {content.header_btn_visit || 'Plan School Visit'}
              </Link>
              <Link href="/donate" className="btn btn-primary btn-sm" onClick={() => setMobileOpen(false)}>
                {content.header_btn_donate || 'Donate Now'}
              </Link>
            </div>
          </nav>

          <button 
            className="mobile-nav-toggle" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
