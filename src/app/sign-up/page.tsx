import React from 'react';
import type { Metadata } from 'next';
import SignUpFunnel from '@/components/SignUpFunnel';
import './signup.css';

export const metadata: Metadata = {
  title: 'Join Committee Board | The New York Auto Experience Inc.',
  description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
};

export default function SignUpPage() {
  return (
    <main className="signup-page-wrapper">
      <div className="container">
        {/* Hero Header */}
        <div className="signup-hero-header">
          <div className="signup-badge-tag">
            <span>🏛️</span> 501(c)(3) Board Leadership Opportunity
          </div>
          <h1 className="signup-main-title">
            Help Build The <span>New York Auto Museum Experience Center</span>
          </h1>
          <p className="signup-main-subtitle">
            We are assembling forward-thinking automotive enthusiasts, STEM educators, philanthropists, and civic leaders 
            to join our Committee Board in New York City. Please pre-qualify through the 4 institutional criteria below to apply.
          </p>

          {/* Trust Highlights */}
          <div className="signup-trust-bar">
            <div className="signup-trust-item">
              <span>🏛️</span>
              <span><strong>501(c)(3) Nonprofit:</strong> <span className="trust-highlight">EIN 922822778</span></span>
            </div>
            <div className="signup-trust-item">
              <span>📜</span>
              <span><strong>100% Tax Deductible</strong> <span className="trust-dim">Receipts Provided</span></span>
            </div>
            <div className="signup-trust-item">
              <span>📍</span>
              <span><strong>Manhattan, NYC</strong> <span className="trust-dim">Headquarters</span></span>
            </div>
          </div>
        </div>

        {/* Interactive 2-Step Funnel */}
        <SignUpFunnel />
      </div>
    </main>
  );
}
