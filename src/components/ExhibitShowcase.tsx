'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface Exhibit {
  id: string;
  title: string;
  category: 'future-tech' | 'engineering' | 'racing';
  categoryLabel: string;
  badge: string;
  stemPill: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  curriculumPills: string[];
}

export const exhibitsData: Exhibit[] = [
  {
    id: 'autonomous-ai',
    title: 'Autonomous Driving & AI',
    category: 'future-tech',
    categoryLabel: 'Future Tech & AI',
    badge: 'Simulated AI',
    stemPill: 'Computer Science & AI',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2025/10/11c12bb889217de71ee327c5e666502c.png',
    shortDesc: 'Demonstrates real-time object detection using optical cameras, ultrasonic depth sensors, and LiDAR point clouds.',
    fullDesc: 'Students interact with real-time neural network visualizations, experiencing firsthand how autonomous vehicles process environmental point clouds, execute pathfinding, and trigger emergency obstacle avoidance.',
    curriculumPills: ['Computer Vision', 'LiDAR Sensors', 'Neural Networks', 'Pathfinding Algorithms']
  },
  {
    id: 'ev-alternative-fuel',
    title: 'EV & Alternative Fuel',
    category: 'future-tech',
    categoryLabel: 'Clean Tech',
    badge: 'Clean Energy',
    stemPill: 'Renewable Physics',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2025/11/IMG_3092.jpg',
    shortDesc: 'Explore battery cell chemistries (NMC, LFP, Solid State) and regenerative braking dynos where visitors generate electrical current.',
    fullDesc: 'Hands-on dynamometers demonstrate how kinetic energy is recaptured during deceleration, turning student-applied brake torque back into stored battery kilowatt-hours.',
    curriculumPills: ['Electrochemistry', 'Regenerative Braking', 'Thermal Management', 'Efficiency Metrics']
  },
  {
    id: 'engine-transmission',
    title: 'Engine & Transmission Cutaway',
    category: 'engineering',
    categoryLabel: 'Mechanical Engineering',
    badge: 'Mechanical Core',
    stemPill: 'Kinematics & Energy',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/Engine-Transmission-1024x768.jpg',
    shortDesc: 'A transparent motorized cutaway of multi-cylinder internal combustion engines and planetary gearboxes.',
    fullDesc: 'Step inside the internal combustion process: synchronized overhead cams, fuel injection timing, planetary gear reduction, and multi-clutch dual-clutch transmission telemetry.',
    curriculumPills: ['Thermodynamics', 'Planetary Gearsets', 'Torque Ratios', 'Mechanical Kinematics']
  },
  {
    id: 'chassis-engineering',
    title: 'Body & Chassis Engineering',
    category: 'engineering',
    categoryLabel: 'Materials Science',
    badge: 'Structures',
    stemPill: 'Materials Science',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2025/10/de06d0e1406091a9237c2589be1cf586.png',
    shortDesc: 'Examines hydroformed steel, high-strength aluminum, and woven carbon-fiber tubs with crumple-zone simulations.',
    fullDesc: 'Discover how modern crash-test engineering redirects kinetic impact forces around safety cells using high-tensile boron steels and precision crumple zones.',
    curriculumPills: ['Stress & Strain Analysis', 'Tensile Strength', 'Torsional Rigidity', 'Impact Redistribution']
  },
  {
    id: 'suspension-geometry',
    title: 'Suspension & Dynamics',
    category: 'engineering',
    categoryLabel: 'Vehicle Dynamics',
    badge: 'Dynamics',
    stemPill: 'Physics of Motion',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/Wheels-Rims-684x1024.jpg',
    shortDesc: 'Interactive test bench allowing students to adjust spring rates, damper valving, and roll-center heights.',
    fullDesc: 'Explore how double-wishbone and multi-link suspensions keep tires perpendicular to road surfaces during high lateral G loads, manipulating dampening curves and spring frequencies.',
    curriculumPills: ['Harmonic Resonance', 'Camber & Caster', 'Anti-Roll Geometry', 'Tire Contact Mechanics']
  },
  {
    id: 'motorsport-racing',
    title: 'Motorsport & Telemetry',
    category: 'racing',
    categoryLabel: 'Racing & Performance',
    badge: 'Performance',
    stemPill: 'Aerodynamics & Data',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/Motorsport-Racing-1024x683.jpg',
    shortDesc: 'Miniature smoke-stream wind tunnel showing inverted wing downforce versus induced drag, alongside live telemetry data.',
    fullDesc: 'Calculate downforce coefficients using Bernoulli principle smoke tunnels and analyze real-time CAN bus telemetry captured from historic race cars at speed.',
    curriculumPills: ['Bernoulli Principle', 'Induced Drag vs Downforce', 'Telemetry Dashboards', 'Pit Strategy Math']
  },
  {
    id: 'history-automotive',
    title: 'History of Automotive Evolution',
    category: 'racing',
    categoryLabel: 'Heritage & History',
    badge: 'Historical Archive',
    stemPill: 'History of Tech',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/History-of-Automotive-1024x683.jpg',
    shortDesc: 'From the 1886 Benz Patent Motorwagen through assembly lines to modern robotics. Explore 140 years of innovation.',
    fullDesc: 'Trace the technological leap from single-cylinder carriage conversions to automated industrial manufacturing, interchangeable precision parts, and global supply chains.',
    curriculumPills: ['Industrial History', 'Interchangeable Parts', 'Safety Regulation History', 'Socioeconomics']
  },
  {
    id: 'future-concepts',
    title: 'Future Concepts & Smart Cities',
    category: 'future-tech',
    categoryLabel: 'Future Tech',
    badge: 'Concept Lab',
    stemPill: 'Systems Engineering',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/Future-of-Automotive-1024x576.jpg',
    shortDesc: 'How vehicles communicate with traffic infrastructure and power grid networks to eliminate collisions.',
    fullDesc: 'Examine V2X (Vehicle-to-Everything) telemetry protocols where smart grid load balancing and synchronized traffic signals turn metropolitan transit into a fluid, zero-emission ecosystem.',
    curriculumPills: ['V2X Communication', 'Autonomous Fleets', 'Urban Aerodynamics', 'Smart Power Grids']
  },
  {
    id: 'restoration-craft',
    title: 'Restoration & Heritage Craft',
    category: 'engineering',
    categoryLabel: 'Engineering & Craft',
    badge: 'Live Workshop',
    stemPill: 'Vocational STEM',
    image: 'https://newyorkautoexperience.org/wp-content/uploads/2026/02/Restoration-1024x683.jpg',
    shortDesc: 'Watch master technicians restore vintage automobiles using English wheels, TIG welding, and mechanical rebuilds.',
    fullDesc: 'Celebrating the hands-on vocational trades that keep history alive: precision metal shaping, mechanical engine machining, and historical component preservation.',
    curriculumPills: ['Metallurgy', 'Metal Shaping', 'Mechanical Rebuilding', 'Preservation Chemistry']
  }
];

export default function ExhibitShowcase({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'future-tech' | 'engineering' | 'racing'>('all');
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);

  const filteredExhibits = activeFilter === 'all' 
    ? exhibitsData 
    : exhibitsData.filter(e => e.category === activeFilter);

  return (
    <section className="exhibits-section" id="exhibits">
      <div className="container">
        {!hideHeader && (
          <div className="section-header text-center">
            <span className="section-tag">Hands-On Learning Stations</span>
            <h2 className="section-title">Discover Our World-Class Exhibits</h2>
            <p className="section-subtitle">
              12 immersive zones bringing physics, software, clean energy, and motorsport heritage to life.
            </p>
          </div>
        )}

        {/* Filter Bar */}
        <div className="exhibits-filter-bar">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Stations ({exhibitsData.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'future-tech' ? 'active' : ''}`}
            onClick={() => setActiveFilter('future-tech')}
          >
            EV &amp; Future Tech
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'engineering' ? 'active' : ''}`}
            onClick={() => setActiveFilter('engineering')}
          >
            Engineering &amp; Mechanics
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'racing' ? 'active' : ''}`}
            onClick={() => setActiveFilter('racing')}
          >
            Racing &amp; Heritage
          </button>
        </div>

        {/* Grid */}
        <div className="exhibits-grid">
          {filteredExhibits.map((exhibit) => (
            <article className="exhibit-card" key={exhibit.id}>
              <div className="exhibit-card-media">
                <img src={exhibit.image} alt={exhibit.title} loading="lazy" />
                <span className="exhibit-badge">{exhibit.badge}</span>
              </div>
              <div className="exhibit-card-body">
                <span className="exhibit-category">{exhibit.categoryLabel}</span>
                <h3 className="exhibit-title">{exhibit.title}</h3>
                <p className="exhibit-text">{exhibit.shortDesc}</p>
                <div className="exhibit-footer">
                  <span className="exhibit-stem-tag">{exhibit.stemPill}</span>
                  <button 
                    className="exhibit-link-btn"
                    onClick={() => setSelectedExhibit(exhibit)}
                  >
                    View Lab Guide &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/exhibits" className="btn btn-secondary">
            View All Interactive Zones in Detail &rarr;
          </Link>
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedExhibit && (
        <div className="modal-backdrop open" onClick={() => setSelectedExhibit(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              aria-label="Close dialog"
              onClick={() => setSelectedExhibit(null)}
            >
              &times;
            </button>
            <div className="modal-media">
              <img src={selectedExhibit.image} alt={selectedExhibit.title} />
            </div>
            <div className="modal-body">
              <span className="section-tag">{selectedExhibit.categoryLabel}</span>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF', margin: '8px 0 12px' }}>{selectedExhibit.title}</h3>
              <div className="modal-stem-pills">
                {selectedExhibit.curriculumPills.map((pill) => (
                  <span className="stem-pill" key={pill}>{pill}</span>
                ))}
              </div>
              <p className="modal-text" style={{ margin: '16px 0 24px', lineHeight: 1.7 }}>
                {selectedExhibit.fullDesc}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href="/#stem-portal" className="btn btn-primary btn-sm" onClick={() => setSelectedExhibit(null)}>
                  Book Class Field Trip
                </Link>
                <button className="btn btn-secondary btn-sm" onClick={() => setSelectedExhibit(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
