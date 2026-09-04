'use client';

import React, { useState } from 'react';

export default function StemPortal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    email: '',
    gradeLevel: 'middle-school',
    studentCount: '50',
    titleOne: 'yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="stem-portal-section" id="stem-portal">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Educators &amp; Classrooms</span>
          <h2 className="section-title">Bringing Science to Life for K–12 Students</h2>
          <p className="section-subtitle">
            Connecting classroom physics, chemistry, and engineering standards with dynamic real-world automotive machines.
          </p>
        </div>

        <div className="stem-grid">
          {/* Information & Features Column */}
          <div className="stem-info">
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '16px' }}>
              Sponsored Access For New York &amp; Tri-State Schools
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '28px', fontSize: '0.95rem' }}>
              We partner with local school districts, charter networks, and youth organizations to provide structured, curriculum-aligned museum excursions. Every visit is designed to stimulate analytical thinking and inspire STEM career pursuits.
            </p>

            <ul className="stem-features-list">
              <li className="stem-feature-item">
                <div className="stem-feature-icon">1</div>
                <div className="stem-feature-content">
                  <h4>100% Free Title 1 Admissions</h4>
                  <p>Schools where 40%+ of students qualify for free/reduced lunch receive fully sponsored entrance badges and activity workbooks.</p>
                </div>
              </li>

              <li className="stem-feature-item">
                <div className="stem-feature-icon">2</div>
                <div className="stem-feature-content">
                  <h4>NGSS Standards Aligned</h4>
                  <p>Hands-on modules reinforce Next Generation Science Standards covering kinetics, thermodynamic efficiency, electric circuits, and software logic.</p>
                </div>
              </li>

              <li className="stem-feature-item">
                <div className="stem-feature-icon">3</div>
                <div className="stem-feature-content">
                  <h4>Transportation Subsidies Available</h4>
                  <p>Need-based transportation grants help underwrite yellow bus transit costs so schools never miss out due to travel expense.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Booking Inquiry Form Card */}
          <div className="stem-action-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '12px' }}>Pre-Registration Received!</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you for pre-registering <strong>{formData.schoolName}</strong>. Our STEM Education Coordinator will reach out to <strong>{formData.email}</strong> with developmental updates and priority scheduling access prior to our public grand opening.
                </p>
                <button 
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another School Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '8px' }}>
                  Pre-Register School Field Trip
                </h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.88rem', marginBottom: '24px' }}>
                  Join our priority educator waitlist for advance bookings and sponsored Title 1 admissions upon opening.
                </p>

                <div className="form-group">
                  <label className="form-label">School / Institution Name</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    placeholder="e.g. Brooklyn High School of Science"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Contact Educator Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input"
                      placeholder="Jane Doe"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Educator Email</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input"
                      placeholder="jdoe@schools.nyc.gov"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Grade Level</label>
                    <select 
                      className="form-select"
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
                    >
                      <option value="elementary">Elementary (Grades 3–5)</option>
                      <option value="middle-school">Middle School (Grades 6–8)</option>
                      <option value="high-school">High School (Grades 9–12)</option>
                      <option value="college">Vocational / College</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Estimated Students</label>
                    <input 
                      type="number" 
                      min="10" 
                      max="500" 
                      className="form-input"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Title 1 Public School Status?</label>
                  <select 
                    className="form-select"
                    value={formData.titleOne}
                    onChange={(e) => setFormData({...formData, titleOne: e.target.value})}
                  >
                    <option value="yes">Yes (Qualifies for 100% Free Sponsored Tickets)</option>
                    <option value="no">No (Standard Educational Group Rate)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Submit Field Trip Booking Request &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
