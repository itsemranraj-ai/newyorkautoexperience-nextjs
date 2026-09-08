'use client';

import React, { useState } from 'react';

interface SubRole {
  id: string;
  title: string;
  description: string;
  applySubject: string;
}

interface Department {
  id: string;
  name: string;
  roles: SubRole[];
}

const careerSections: Department[] = [
  {
    id: 'leadership',
    name: 'Leadership',
    roles: [
      {
        id: 'cto',
        title: 'Chief Technology Officer (CTO)',
        description: 'Oversee all technology strategy, IT systems, and digital innovation.',
        applySubject: 'Application: CTO'
      },
      {
        id: 'cmo',
        title: 'Chief Marketing Officer (CMO)',
        description: 'Lead marketing, branding, and communications strategy.',
        applySubject: 'Application: CMO'
      },
      {
        id: 'fundraising',
        title: 'Director of Fundraising & Development',
        description: 'Drive fundraising, grant acquisition, and donor relations.',
        applySubject: 'Application: Director of Fundraising'
      },
      {
        id: 'programs',
        title: 'Director of Programs & Exhibitions',
        description: 'Oversee design, development, and delivery of all museum exhibitions.',
        applySubject: 'Application: Director of Programs'
      }
    ]
  },
  {
    id: 'operations',
    name: 'Operations & Administration',
    roles: [
      {
        id: 'hr',
        title: 'Human Resources Manager',
        description: 'Manage staffing, volunteer coordination, and organizational culture.',
        applySubject: 'Application: HR Manager'
      },
      {
        id: 'finance',
        title: 'Finance Manager',
        description: 'Oversee budgeting, financial reporting, and grant compliance.',
        applySubject: 'Application: Finance Manager'
      },
      {
        id: 'legal',
        title: 'Legal & Compliance Officer',
        description: 'Ensure adherence to laws, regulations, contracts, and grant requirements.',
        applySubject: 'Application: Legal & Compliance'
      },
      {
        id: 'facilities',
        title: 'Facilities & Operations Manager',
        description: 'Oversee building management, maintenance, safety, and vendor contracts.',
        applySubject: 'Application: Facilities Manager'
      },
      {
        id: 'grant',
        title: 'Grant Writer',
        description: 'Research and write grant proposals to secure funding.',
        applySubject: 'Application: Grant Writer'
      }
    ]
  },
  {
    id: 'curatorial',
    name: 'Curatorial',
    roles: [
      {
        id: 'curator-innovation',
        title: 'Curator - Innovation & Technology Wing',
        description: 'Research, design, and curate exhibits for the Innovation & Technology wing.',
        applySubject: 'Application: Curator Innovation'
      },
      {
        id: 'curator-motorsport',
        title: 'Curator - Motorsport & Racing Wing',
        description: 'Research, design, and curate exhibits for the Motorsport & Racing wing.',
        applySubject: 'Application: Curator Motorsport'
      },
      {
        id: 'curator-history',
        title: 'Curator - History of Automotive Wing',
        description: 'Research, design, and curate exhibits for the History of Automotive wing.',
        applySubject: 'Application: Curator History'
      },
      {
        id: 'curator-ev',
        title: 'Curator - EV & Alternative Fuels Wing',
        description: 'Research, design, and curate exhibits for the EV & Alternative Fuels wing.',
        applySubject: 'Application: Curator EV'
      },
      {
        id: 'curator-restoration',
        title: 'Curator - Restoration Wing',
        description: 'Research, design, and curate exhibits for the Restoration wing.',
        applySubject: 'Application: Curator Restoration'
      },
      {
        id: 'curator-autonomous',
        title: 'Curator - Autonomous Driving Wing',
        description: 'Research, design, and curate exhibits for the Autonomous Driving wing.',
        applySubject: 'Application: Curator Autonomous'
      },
      {
        id: 'curator-theatre',
        title: 'Curator - Theatre/Stage Wing',
        description: 'Research, design, and curate exhibits for the Theatre/Stage wing.',
        applySubject: 'Application: Curator Theatre'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Communications',
    roles: [
      {
        id: 'pr',
        title: 'Public Relations Manager',
        description: 'Manage media relations, press releases, and public image.',
        applySubject: 'Application: PR Manager'
      },
      {
        id: 'social',
        title: 'Social Media Manager',
        description: 'Plan, create, and manage content across all social media platforms.',
        applySubject: 'Application: Social Media Manager'
      },
      {
        id: 'graphic',
        title: 'Graphic Designer',
        description: 'Create visual content for exhibitions, marketing, and digital platforms.',
        applySubject: 'Application: Graphic Designer'
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology & Data',
    roles: [
      {
        id: 'webdev',
        title: 'Web Developer',
        description: 'Develop and maintain the museum\'s web properties and digital experiences.',
        applySubject: 'Application: Web Developer'
      },
      {
        id: 'ai-data',
        title: 'AI & Data Analyst',
        description: 'Collect, analyze, and report data to measure program effectiveness.',
        applySubject: 'Application: AI & Data Analyst'
      }
    ]
  },
  {
    id: 'community',
    name: 'Community & Programs',
    roles: [
      {
        id: 'outreach',
        title: 'Community Outreach Coordinator',
        description: 'Build relationships with Brooklyn, Bronx, Queens, Manhattan, and Long Island communities.',
        applySubject: 'Application: Community Outreach'
      },
      {
        id: 'volunteer',
        title: 'Volunteer Coordinator',
        description: 'Recruit, train, and manage volunteers across all museum programs.',
        applySubject: 'Application: Volunteer Coordinator'
      },
      {
        id: 'education',
        title: 'Education & Training Coordinator',
        description: 'Develop and deliver educational programs for visitors, staff, and partners.',
        applySubject: 'Application: Education Coordinator'
      },
      {
        id: 'partnerships',
        title: 'Partnerships Manager',
        description: 'Develop strategic alliances with organizations, institutions, and businesses.',
        applySubject: 'Application: Partnerships Manager'
      },
      {
        id: 'membership',
        title: 'Membership Coordinator',
        description: 'Recruit, engage, and retain museum members through benefits and outreach.',
        applySubject: 'Application: Membership Coordinator'
      },
      {
        id: 'event',
        title: 'Event Coordinator',
        description: 'Plan and execute museum events, openings, and special programs.',
        applySubject: 'Application: Event Coordinator'
      },
      {
        id: 'research',
        title: 'Research Analyst',
        description: 'Conduct studies and evaluations to inform program design and strategy.',
        applySubject: 'Application: Research Analyst'
      },
      {
        id: 'sustainability',
        title: 'Sustainability Coordinator',
        description: 'Promote environmental responsibility and resource efficiency.',
        applySubject: 'Application: Sustainability Coordinator'
      }
    ]
  }
];

export default function CareersPage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [openRoles, setOpenRoles] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleRole = (id: string) => {
    setOpenRoles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="careers" className="wrapper style2" style={{ padding: '80px 20px 120px', minHeight: '80vh' }}>
      <style jsx>{`
        .inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .major {
          text-align: center;
          margin-bottom: 50px;
        }

        .major h2 {
          font-size: 2.4rem;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .major p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #d3d4e4;
        }

        .major p a {
          color: #4acaa8;
          text-decoration: underline;
          font-weight: 600;
        }

        .collapsible-toggle {
          cursor: pointer;
          padding: 0.75em 1em;
          margin: 0.4em 0;
          background: rgba(255, 255, 255, 0.05);
          border-left: 3px solid rgba(255, 255, 255, 0.3);
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          user-select: none;
          transition: background 0.2s, border-color 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .collapsible-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .collapsible-toggle.open {
          border-left-color: #4acaa8;
          background: rgba(255, 255, 255, 0.08);
        }

        .collapsible-content {
          padding: 0.4em 0 0.6em 1.5em;
        }

        .sub-toggle {
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.6em 0.9em;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid rgba(255, 255, 255, 0.2);
        }

        .sub-toggle:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .sub-toggle.open {
          border-left-color: #4acaa8;
        }

        .sub-content {
          padding: 0.5em 0 0.8em 1.5em;
        }

        .sub-content p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #d3d4e4;
          margin: 0 0 6px 0;
        }

        .sub-content a {
          color: #4acaa8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .sub-content a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="inner">
        <header className="major">
          <h2>Careers</h2>
          <p>
            Join the team building one of the world&apos;s leading museum attractions.<br />
            Apply: <a href="mailto:hr@newyorkautomuseum.com">hr@newyorkautomuseum.com</a>
          </p>
        </header>

        {careerSections.map(dept => {
          const isDeptOpen = !!openCategories[dept.id];

          return (
            <div key={dept.id}>
              {/* Category Toggle */}
              <div
                className={`collapsible-toggle ${isDeptOpen ? 'open' : ''}`}
                onClick={() => toggleCategory(dept.id)}
              >
                <span>{isDeptOpen ? '▼' : '▶'}</span>
                <span>{dept.name}</span>
              </div>

              {/* Category Content */}
              {isDeptOpen && (
                <div className="collapsible-content">
                  {dept.roles.map(role => {
                    const isRoleOpen = !!openRoles[role.id];

                    return (
                      <div key={role.id}>
                        {/* Sub Role Toggle */}
                        <div
                          className={`collapsible-toggle sub-toggle ${isRoleOpen ? 'open' : ''}`}
                          onClick={() => toggleRole(role.id)}
                        >
                          <span>{isRoleOpen ? '▼' : '▶'}</span>
                          <span>{role.title}</span>
                        </div>

                        {/* Sub Role Content */}
                        {isRoleOpen && (
                          <div className="sub-content">
                            <p>
                              {role.description}
                              <br />
                              <a href={`mailto:hr@newyorkautomuseum.com?subject=${encodeURIComponent(role.applySubject)}`}>
                                Apply &rarr;
                              </a>
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
