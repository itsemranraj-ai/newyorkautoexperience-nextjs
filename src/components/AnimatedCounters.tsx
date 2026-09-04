'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MetricItem {
  target: number;
  label: string;
  subtext: string;
  prefix?: string;
  suffix?: string;
  accentClass?: string;
}

const metrics: MetricItem[] = [
  { target: 2000000, label: 'Students Targeted', subtext: 'Comprehensive STEM outreach planned across America', suffix: '+', accentClass: 'accent-red' },
  { target: 500000, label: 'Projected Free Admissions', subtext: 'Annual sponsored access targeted for Title 1 schools', suffix: '+' },
  { target: 15000000, label: 'Projected Annual Impact', subtext: 'Underwritten educational value upon full operations', prefix: '$', accentClass: 'accent-blue' },
  { target: 12, label: 'Interactive Stations Planned', subtext: 'From autonomous AI navigation to EV powertrains', suffix: '+', accentClass: 'accent-amber' }
];

export default function AnimatedCounters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasAnimated(true);
        const startTime = performance.now();
        const duration = 2000;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          setCounts(metrics.map(m => Math.floor(easeOut * m.target)));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(metrics.map(m => m.target));
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="impact-metrics-section" ref={sectionRef}>
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div className="metric-card" key={m.label}>
              <div className={`metric-number ${m.accentClass || ''}`}>
                {m.prefix || ''}{counts[i].toLocaleString('en-US')}{m.suffix || ''}
              </div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-subtext">{m.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
