import React from 'react';
import { HALLMARK_PILLARS } from '../data/jewelleryData';

export default function HallmarkSection() {
  return (
    <section id="hallmark" className="hallmark-section">
      <div className="hallmark-container">
        {/* Top Centered Circular Rotating 916 Stamp Medallion */}
        <div className="hallmark-seal-wrapper">
          <div className="hallmark-seal-circle">
            <svg viewBox="0 0 200 200" className="hallmark-rotating-svg" aria-hidden="true">
              <defs>
                <path
                  id="hallmarkTextCircle"
                  d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="92"
                stroke="#DBCBA8"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="60"
                stroke="#E4D6B8"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                fill="none"
              />
              <text className="hallmark-circle-text">
                <textPath href="#hallmarkTextCircle" startOffset="0%">
                  • BIS HALLMARK • 22K 916 PURITY • FULCHAND GULABCHAND
                </textPath>
              </text>
            </svg>

            <div className="hallmark-seal-center">
              <span className="hallmark-numeral">916</span>
              <span className="hallmark-karat-sub">22 KARAT</span>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Pillars Grid */}
        <div className="hallmark-pillars-grid">
          {HALLMARK_PILLARS.map((pillar) => (
            <div key={pillar.title} className="hallmark-pillar-card">
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-subtitle">{pillar.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Live Jaipur Gold Rate Bar */}
        <div className="hallmark-rate-bar">
          <div className="rate-prices-text">
            <span>
              22K <strong>₹7,240 / g</strong>
            </span>
            <span className="rate-dot">·</span>
            <span>
              18K <strong>₹5,930 / g</strong>
            </span>
          </div>
          <span className="rate-updated-pill">Jaipur rate · updated today</span>
        </div>
      </div>
    </section>
  );
}

