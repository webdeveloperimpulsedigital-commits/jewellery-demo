import React from 'react';
import { FG_MONOGRAM_PATH } from './JewelleryArtwork';

export default function FooterSection({
  onOpenBooking,
  onNavigateCollection,
  onScrollToSection
}) {
  return (
    <footer id="footer-stores" className="footer-section">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Left Column: Private Appointments & Store/Home Trial CTA */}
          <div className="footer-cta-col">
            <a
              href="#hero"
              className="footer-brand-logo-link"
              aria-label="Fulchand Gulabchand Jewellers — Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/brand/fgj-horiz.png`}
                alt="Fulchand Gulabchand Jewellers"
                className="footer-brand-logo-img"
              />
            </a>
            <div className="section-eyebrow">PRIVATE APPOINTMENTS</div>
            <h2 className="footer-main-heading">
              Try it in the
              <br />
              store, or at home
            </h2>
            <button
              type="button"
              className="btn-primary-dark footer-book-btn"
              onClick={onOpenBooking}
            >
              Book a viewing
            </button>

            <div className="footer-credit-line">
              Fulchand Gulabchand Jewellers · Estd. 1948 · Certified 916 Hallmarked Pure Gold
            </div>
          </div>

          {/* Right Column: 3 Navigation & Store Columns */}
          <div className="footer-links-grid">
            <div className="footer-link-col">
              <h3 className="footer-col-title">Collections</h3>
              <ul>
                <li>
                  <button type="button" onClick={() => onNavigateCollection(0)}>
                    Bridal
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigateCollection(1)}>
                    Temple
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigateCollection(2)}>
                    Daily wear
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigateCollection(3)}>
                    Gifting
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h3 className="footer-col-title">The House</h3>
              <ul>
                <li>
                  <button type="button" onClick={() => onScrollToSection('craftsmanship')}>
                    Our craft
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onScrollToSection('hallmark')}>
                    916 Hallmark
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onScrollToSection('hallmark')}>
                    Lifetime exchange
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onOpenBooking}>
                    Home trial
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h3 className="footer-col-title">Flagship Stores</h3>
              <ul>
                <li>
                  <button type="button" onClick={onOpenBooking}>
                    Jaipur — MI Road
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onOpenBooking}>
                    New Delhi — Mehrauli
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onOpenBooking}>
                    Mumbai — Kala Ghoda
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onOpenBooking}>
                    Bengaluru — Indiranagar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Architectural Outlined Fulchand Gulabchand Watermark at Bottom */}
        <div className="footer-watermark-wrap" aria-hidden="true">
          <svg viewBox="0 0 1200 220" className="footer-watermark-svg">
            {/* Outlined Fulchand Gulabchand Emblem Ring + Calligraphic FG Monogram */}
            <g transform="translate(115, 112)">
              <circle
                cx="0"
                cy="0"
                r="82"
                fill="none"
                stroke="rgba(168, 134, 72, 0.28)"
                strokeWidth="1.4"
              />
              <circle
                cx="0"
                cy="0"
                r="76"
                fill="none"
                stroke="rgba(168, 134, 72, 0.18)"
                strokeWidth="0.9"
              />
              <g transform="scale(0.32) translate(-300, -301)">
                <path
                  d={FG_MONOGRAM_PATH}
                  fill="rgba(168, 134, 72, 0.06)"
                  stroke="rgba(168, 134, 72, 0.34)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>

            {/* Architectural Outlined FULCHAND GULABCHAND Wordmark */}
            <text
              x="230"
              y="102"
              textAnchor="start"
              className="footer-watermark-text-fg"
            >
              FULCHAND
            </text>
            <text
              x="230"
              y="182"
              textAnchor="start"
              className="footer-watermark-text-fg"
            >
              GULABCHAND
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}

