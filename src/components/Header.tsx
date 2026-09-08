'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Exhibits', href: '/exhibits' },
    { name: 'STEM Education', href: '/#stem-portal' },
    { name: 'Careers', href: '/careers' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <>
      {/* 1. Flashing / Pulsing Coming Soon Banner */}
      <div className="announcement-bar">
        <span className="flashing-badge">
          <span className="pulse-dot"></span>
          COMING SOON
        </span>
        <span className="announcement-text">
          <strong>Physical Experience Center In Active Development</strong> &bull; Opening in New York City &bull; Priority School Pre-Registration Open
        </span>
        <Link href="/#stem-portal" className="announcement-link">
          Pre-Register Your School &rarr;
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
                width={160} 
                height={54} 
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
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
                Plan School Visit
              </Link>
              <Link href="/donate" className="btn btn-primary btn-sm" onClick={() => setMobileOpen(false)}>
                Donate Now
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
