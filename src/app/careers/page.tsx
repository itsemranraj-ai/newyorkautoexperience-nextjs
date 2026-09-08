'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface JobPosition {
  title: string;
  type: string;
  location: string;
  description: string;
  applyUrl: string;
}

interface CareerCategory {
  id: string;
  category: string;
  description: string;
  icon: string;
  jobs: JobPosition[];
}

const careerData: CareerCategory[] = [
  {
    id: 'leadership',
    category: 'Leadership',
    description: 'Executive leadership steering the vision, capital campaigns, and strategic trajectory of the museum and experience center.',
    icon: '⚡',
    jobs: [
      {
        title: 'Chief Technology Officer (CTO)',
        type: 'Executive',
        location: 'New York, NY / Hybrid',
        description: 'Oversee all technology strategy, IT systems, digital infrastructure, simulation tech, and interactive educational software innovation.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: CTO'
      },
      {
        title: 'Chief Marketing Officer (CMO)',
        type: 'Executive',
        location: 'New York, NY / Hybrid',
        description: 'Lead global marketing, public branding, audience acquisition, media partnerships, and institutional communications strategy.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: CMO'
      },
      {
        title: 'Director of Fundraising & Development',
        type: 'Director',
        location: 'New York, NY / Hybrid',
        description: 'Drive philanthropic fundraising, major gift endowments, capital campaign acquisition, and high-impact donor relations.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Director of Fundraising'
      },
      {
        title: 'Director of Programs & Exhibitions',
        type: 'Director',
        location: 'New York, NY / Hybrid',
        description: 'Oversee the end-to-end design, curation, architectural buildout, and educational delivery of all museum exhibitions and interactive zones.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Director of Programs'
      }
    ]
  },
  {
    id: 'operations',
    category: 'Operations & Administration',
    description: 'The operational backbone ensuring flawless organizational governance, finance, facilities, and grant execution.',
    icon: '⚙️',
    jobs: [
      {
        title: 'Human Resources Manager',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Manage talent acquisition, organizational staffing, volunteer coordination, employee benefits, and inclusive institutional culture.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: HR Manager'
      },
      {
        title: 'Finance Manager',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Oversee nonprofit budgeting, financial reporting, endowment accounting, 501(c)(3) tax compliance, and grant audit tracking.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Finance Manager'
      },
      {
        title: 'Legal & Compliance Officer',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Ensure strict adherence to non-profit regulatory laws, municipal guidelines, intellectual property, contracts, and grant covenants.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Legal & Compliance'
      },
      {
        title: 'Facilities & Operations Manager',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Oversee building engineering, gallery maintenance, HVAC systems, public safety standards, and facilities vendor management.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Facilities Manager'
      },
      {
        title: 'Grant Writer',
        type: 'Full-time / Contract',
        location: 'Remote / Hybrid',
        description: 'Research, prepare, and submit high-probability federal, state, and foundation grant proposals to fund educational STEM programs.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Grant Writer'
      }
    ]
  },
  {
    id: 'curatorial',
    category: 'Curatorial',
    description: 'World-class curators who breathe life, academic depth, and tactile immersion into our permanent museum wings.',
    icon: '🏛️',
    jobs: [
      {
        title: 'Curator - Innovation & Technology Wing',
        type: 'Curatorial',
        location: 'New York, NY / Hybrid',
        description: 'Research, acquire, design, and curate permanent and traveling exhibits spotlighting next-gen automotive engineering and smart transit.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator Innovation'
      },
      {
        title: 'Curator - Motorsport & Racing Wing',
        type: 'Curatorial',
        location: 'New York, NY / Hybrid',
        description: 'Curate historic and modern racing machinery, wind-tunnel aerodynamics, race telemetries, and competitive motorsport heritage.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator Motorsport'
      },
      {
        title: 'Curator - History of Automotive Wing',
        type: 'Curatorial',
        location: 'New York, NY / Hybrid',
        description: 'Research, catalog, and present 140+ years of automotive evolution, manufacturing history, and iconic transportation milestones.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator History'
      },
      {
        title: 'Curator - EV & Alternative Fuels Wing',
        type: 'Curatorial',
        location: 'New York, NY / Hybrid',
        description: 'Design interactive STEM stations examining lithium-ion, solid-state battery chemistry, hydrogen fuel cells, and clean energy.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator EV'
      },
      {
        title: 'Curator - Restoration Wing',
        type: 'Curatorial',
        location: 'New York, NY',
        description: 'Direct live conservation workshops, historical component preservation, coachbuilding craft, and master engine restoration demonstrations.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator Restoration'
      },
      {
        title: 'Curator - Autonomous Driving Wing',
        type: 'Curatorial',
        location: 'New York, NY / Hybrid',
        description: 'Lead interactive AI demonstrations exploring neural network vision, LiDAR sensors, radar telemetry, and driverless safety protocols.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator Autonomous'
      },
      {
        title: 'Curator - Theatre / Stage Wing',
        type: 'Curatorial',
        location: 'New York, NY',
        description: 'Curate dramatic multimedia programming, documentary premieres, keynote guest lectures, and live automotive theatre presentations.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Curator Theatre'
      }
    ]
  },
  {
    id: 'marketing',
    category: 'Marketing & Communications',
    description: 'Amplifying our voice and inspiring millions of students, families, and automotive enthusiasts worldwide.',
    icon: '📣',
    jobs: [
      {
        title: 'Public Relations Manager',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Manage institutional media relations, press releases, editorial coverage, VIP exhibition reveals, and public brand storytelling.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: PR Manager'
      },
      {
        title: 'Social Media Manager',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Create high-energy short-form video, technical explainers, and educational campaigns across YouTube, TikTok, Instagram, and LinkedIn.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Social Media Manager'
      },
      {
        title: 'Graphic Designer',
        type: 'Full-time / Hybrid',
        location: 'New York, NY / Hybrid',
        description: 'Design striking exhibition wayfinding, digital displays, educational workbooks, and marketing assets maintaining our visual identity.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Graphic Designer'
      }
    ]
  },
  {
    id: 'technology',
    category: 'Technology & Data',
    description: 'Engineering digital platforms, interactive touchscreen kiosks, simulation software, and analytics infrastructure.',
    icon: '💻',
    jobs: [
      {
        title: 'Web Developer',
        type: 'Full-time',
        location: 'Remote / Hybrid',
        description: 'Architect and maintain the organization\'s high-speed web platforms, online learning portals, booking engines, and digital archives.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Web Developer'
      },
      {
        title: 'AI & Data Analyst',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Collect, model, and analyze visitor engagement metrics, STEM educational outcomes, and operational data to optimize programs.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: AI & Data Analyst'
      }
    ]
  },
  {
    id: 'community',
    category: 'Community & Programs',
    description: 'Connecting our mission directly with New York schools, local neighborhoods, educators, and volunteers.',
    icon: '🤝',
    jobs: [
      {
        title: 'Community Outreach Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Build deep, grassroots relationships with schools and community leaders across Brooklyn, Queens, Bronx, Manhattan, and Long Island.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Community Outreach'
      },
      {
        title: 'Volunteer Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Recruit, onboard, train, and manage an active community of museum docents, student ambassadors, and event volunteers.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Volunteer Coordinator'
      },
      {
        title: 'Education & Training Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Develop and facilitate accredited NGSS-aligned K-12 STEM lesson plans, hands-on lab experiments, and educator training sessions.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Education Coordinator'
      },
      {
        title: 'Partnerships Manager',
        type: 'Full-time',
        location: 'New York, NY / Hybrid',
        description: 'Cultivate high-impact strategic alliances with automotive manufacturers, STEM universities, technology sponsors, and civic agencies.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Partnerships Manager'
      },
      {
        title: 'Membership Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Grow and steward the museum\'s annual membership program, coordinating exclusive previews, benefits, and patron community engagement.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Membership Coordinator'
      },
      {
        title: 'Event Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Plan and manage world-class charity galas, academic conferences, student robotics competitions, and private corporate events.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Event Coordinator'
      },
      {
        title: 'Research Analyst',
        type: 'Full-time / Hybrid',
        location: 'New York, NY / Hybrid',
        description: 'Conduct deep academic evaluations and visitor impact studies to continuously refine educational and curatorial programming.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Research Analyst'
      },
      {
        title: 'Sustainability Coordinator',
        type: 'Full-time',
        location: 'New York, NY',
        description: 'Spearhead environmental stewardship across all facilities, championing LEED green standards, zero-waste exhibits, and renewable energy.',
        applyUrl: 'mailto:hr@newyorkautomuseum.com?subject=Application: Sustainability Coordinator'
      }
    ]
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const totalPositions = useMemo(() => {
    return careerData.reduce((acc, cat) => acc + cat.jobs.length, 0);
  }, []);

  const filteredCategories = useMemo(() => {
    return careerData
      .map(cat => {
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        const matchingJobs = cat.jobs.filter(job => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            job.title.toLowerCase().includes(q) ||
            job.description.toLowerCase().includes(q) ||
            job.location.toLowerCase().includes(q)
          );
        });

        if (matchingJobs.length === 0) return null;

        return {
          ...cat,
          jobs: matchingJobs
        };
      })
      .filter((cat): cat is CareerCategory => cat !== null);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section style={{
        padding: '80px 0 50px',
        backgroundColor: 'var(--color-bg-subtle)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}>
        <div className="container text-center">
          <span className="section-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Join Our Growing Mission
          </span>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '20px' }}>
            Build the Future of <span className="highlight">Automotive STEM</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto 32px', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Join the pioneering leadership, curatorial, operational, and engineering team developing one of the world's most innovative automotive museum attractions and educational public charities in New York.
          </p>

          {/* Quick Stat Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '0.9rem',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{totalPositions}</span> Open Positions
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '0.9rem',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>6</span> Specialized Departments
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '0.9rem',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📍 New York, NY / Hybrid
            </div>
          </div>

          {/* Direct Application Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(225, 29, 72, 0.08)',
            border: '1px solid rgba(225, 29, 72, 0.25)',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '0.92rem',
            color: '#FFF'
          }}>
            <span>Direct resume submissions:</span>
            <a 
              href="mailto:hr@newyorkautomuseum.com?subject=General Career Inquiry - The New York Auto Experience"
              style={{ color: 'var(--color-primary)', fontWeight: '700', textDecoration: 'underline' }}
            >
              hr@newyorkautomuseum.com
            </a>
          </div>
        </div>
      </section>

      {/* Main Career Listings Section */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          {/* Controls: Search & Category Filter */}
          <div style={{
            maxWidth: '920px',
            margin: '0 auto 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search open positions by role, department, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px 16px 48px',
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '14px',
                  color: '#FFF',
                  fontSize: '1rem',
                  outline: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              />
              <span style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.2rem',
                opacity: 0.5
              }}>
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-dim)',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Department Filter Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                All Departments ({totalPositions})
              </button>
              {careerData.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  {cat.icon} {cat.category} ({cat.jobs.length})
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings by Category */}
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            {filteredCategories.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'var(--color-bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--color-border)'
              }}>
                <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '10px' }}>No matching positions found</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                  Try adjusting your search terms or view all departments.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="btn btn-secondary btn-sm"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredCategories.map(cat => (
                <div key={cat.id} style={{ marginBottom: '48px' }}>
                  {/* Category Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '14px',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                    <h2 style={{ fontSize: '1.6rem', color: '#FFF', margin: 0 }}>
                      {cat.category}
                    </h2>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-dim)',
                      marginLeft: 'auto'
                    }}>
                      {cat.jobs.length} {cat.jobs.length === 1 ? 'opening' : 'openings'}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                    {cat.description}
                  </p>

                  {/* Category Jobs Grid */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {cat.jobs.map((job) => {
                      return (
                        <div
                          key={job.title}
                          style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '14px',
                            padding: '24px 28px',
                            transition: 'border-color 0.2s ease, transform 0.2s ease',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '16px',
                            flexWrap: 'wrap'
                          }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                                <h3 style={{ fontSize: '1.25rem', color: '#FFF', margin: 0, fontWeight: '700' }}>
                                  {job.title}
                                </h3>
                                <span style={{
                                  fontSize: '0.75rem',
                                  padding: '3px 10px',
                                  borderRadius: '999px',
                                  backgroundColor: 'rgba(225, 29, 72, 0.12)',
                                  color: 'var(--color-primary)',
                                  fontWeight: '600',
                                  border: '1px solid rgba(225, 29, 72, 0.25)'
                                }}>
                                  {job.type}
                                </span>
                              </div>
                              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)', marginBottom: '12px' }}>
                                📍 {job.location} &bull; The New York Auto Experience &amp; Museum
                              </div>
                            </div>

                            <a
                              href={job.applyUrl}
                              className="btn btn-primary btn-sm"
                              style={{
                                whiteSpace: 'nowrap',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                            >
                              Apply Now &rarr;
                            </a>
                          </div>

                          <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.94rem',
                            lineHeight: 1.65,
                            margin: '0 0 16px'
                          }}>
                            {job.description}
                          </p>

                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.82rem',
                            color: 'var(--color-text-dim)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            paddingTop: '12px'
                          }}>
                            <span>Status: Actively Recruiting</span>
                            <a
                              href={job.applyUrl}
                              style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: '600'
                              }}
                            >
                              Send CV to hr@newyorkautomuseum.com
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* General Application & Culture Card */}
          <div style={{
            maxWidth: '920px',
            margin: '60px auto 0',
            backgroundColor: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: '18px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <span className="section-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>
              General Inquiries &amp; Talent Community
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '14px' }}>
              Don't See Your Exact Role?
            </h3>
            <p style={{
              color: 'var(--color-text-muted)',
              maxWidth: '680px',
              margin: '0 auto 24px',
              lineHeight: 1.7,
              fontSize: '0.98rem'
            }}>
              As we aggressively scale our physical experience center and educational initiatives across New York, we are always eager to connect with visionary docents, educators, engineers, and cultural leaders.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="mailto:hr@newyorkautomuseum.com?subject=General Talent Inquiry: The New York Auto Experience"
                className="btn btn-primary"
              >
                Submit General Application &rarr;
              </a>
              <Link href="/mission" className="btn btn-secondary">
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
