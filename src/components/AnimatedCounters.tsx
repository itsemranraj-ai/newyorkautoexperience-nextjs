'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SiteContent, defaultSiteContent } from '@/lib/wordpress';

export default function AnimatedCounters({ content = defaultSiteContent }: { content?: SiteContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metrics = [
    { target: Number(content.kpi1_target) || 2000000, label: content.kpi1_label, subtext: content.kpi1_subtext, suffix: '+', accentClass: 'accent-red' },
    { target: Number(content.kpi2_target) || 500000, label: content.kpi2_label, subtext: content.kpi2_subtext, suffix: '+' },
    { target: Number(content.kpi3_target) || 15000000, label: content.kpi3_label, subtext: content.kpi3_subtext, prefix: '$', accentClass: 'accent-blue' },
    { target: Number(content.kpi4_target) || 12, label: content.kpi4_label, subtext: content.kpi4_subtext, suffix: '+', accentClass: 'accent-amber' }
  ];

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
