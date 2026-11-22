import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | The New York Auto Experience Inc.',
  description: 'The requested page on The New York Auto Experience Inc. portal could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

const QUICK_LINKS = [
  {
    href: '/mission',
    title: 'Our Mission & Impact',
    description: '501(c)(3) STEM education charter for 2M+ students',
  },
  {
    href: '/exhibits',
    title: 'Interactive Exhibits',
    description: 'Autonomous AI, EV clean tech, and physics labs',
  },
  {
    href: '/governance',
    title: 'Governance & Filings',
    description: 'IRS 501(c)(3) status and institutional transparency',
  },
  {
    href: '/donate',
    title: 'Donate & Support',
    description: 'Sponsor Title 1 public school field trips',
  },
];

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-card">
        <span className="not-found-badge">
          <span className="not-found-badge-dot" aria-hidden="true" />
          Off Route &bull; Error 404
        </span>

        <div className="not-found-dial-wrap">
          <div className="not-found-emblem" aria-hidden="true">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M4.93 17.5A9 9 0 1 1 19.07 17.5"
                stroke="rgba(255, 255, 255, 0.25)"
              />
              <path
                d="M16.5 5.3a9 9 0 0 1 2.57 12.2"
                stroke="#E11D48"
              />
              <path d="M12 13l4.2-4.2" stroke="#E11D48" />
              <circle cx="12" cy="13" r="1.6" fill="#FFFFFF" stroke="#FFFFFF" />
              <path d="M12 4v1.5" stroke="#38BDF8" />
              <path d="M5.6 12H7.1" stroke="#94A3B8" />
            </svg>
          </div>
          <div className="not-found-code" aria-label="404">
            4<span className="not-found-code-accent">0</span>4
          </div>
        </div>

        <h1 className="not-found-title">We Couldn&apos;t Find That Page</h1>
        <p className="not-found-subtitle">
          The STEM education resource, exhibit page, or filing you&apos;re looking for may have been
          moved, updated, or does not exist at this address. Return to our homepage or choose a
          destination below.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary">
            <span>Back to Homepage</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/exhibits" className="btn btn-secondary">
            Explore Exhibits
          </Link>
        </div>

        <div className="not-found-directory">
          <div className="not-found-directory-label">Organization Directory</div>
          <div className="not-found-links-grid">
            {QUICK_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="not-found-link-card">
                <div>
                  <span className="not-found-link-title">{item.title}</span>
                  <span className="not-found-link-desc">{item.description}</span>
                </div>
                <span className="not-found-link-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>

        <p className="not-found-help">
          Need assistance with school visits or donations? Email{' '}
          <a href="mailto:info@newyorkautoexperience.org">info@newyorkautoexperience.org</a> or call{' '}
          <a href="tel:18774116926">1-877-411-NYAM (6926)</a>.
        </p>
      </div>
    </section>
  );
}
