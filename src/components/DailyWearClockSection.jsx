import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLOCK_PIECES } from '../data/jewelleryData';
import { ClockPieceSVG } from './JewelleryArtwork';

gsap.registerPlugin(ScrollTrigger);

export default function DailyWearClockSection({ onAddToBag }) {
  const sectionRef = useRef(null);
  const dialRef = useRef(null);
  // Default to index 1 (01:00 Bindu studs) or index 3 (03:00 Nitya band)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Scroll-driven progression from 12 o'clock -> 1 o'clock -> 2 o'clock -> 3 o'clock when scrolling
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        onUpdate: (self) => {
          if (isUserHovering) return;
          // Sweep from 1 o'clock (idx 1) to 3 o'clock (idx 3) as shown in the video (00:10 -> 00:13)
          const idx = Math.min(3, Math.max(1, Math.floor(1 + self.progress * 2.8)));
          setActiveIndex(idx);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isUserHovering]);

  const activePiece = CLOCK_PIECES[activeIndex] || CLOCK_PIECES[1];

  // Handle mouse move over the clock dial to point the hand smoothly at the nearest hour
  const handleDialMouseMove = (e) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 40) return;

    // Angle in degrees where 12 o'clock (up) is 0 deg, clockwise
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (deg < 0) deg += 360;
    const nearestIdx = Math.round(deg / 30) % 12;
    setActiveIndex(nearestIdx);
  };

  return (
    <section ref={sectionRef} id="daily-clock" className="daily-clock-section">
      <div className="daily-clock-container">
        {/* Left Column Editorial Copy */}
        <div className="daily-clock-left">
          <div className="section-eyebrow">DAILY WEAR</div>
          <h2 className="daily-clock-heading">
            A piece for
            <br />
            every hour
          </h2>
          <p className="daily-clock-desc">
            Twelve light pieces under 10 g, made to be worn from morning tea to late
            dinners.
          </p>
        </div>

        {/* Center 12-Hour Interactive Jewellery Dial */}
        <div className="daily-clock-center">
          <div
            ref={dialRef}
            className="clock-dial-face"
            onMouseEnter={() => setIsUserHovering(true)}
            onMouseLeave={() => setIsUserHovering(false)}
            onMouseMove={handleDialMouseMove}
          >
            {/* Subtle 60 Minute/Hour Tick Marks around the Perimeter */}
            <svg viewBox="0 0 560 560" className="clock-ticks-svg" aria-hidden="true">
              <circle
                cx="280"
                cy="280"
                r="268"
                stroke="#DFD3BE"
                strokeWidth="0.8"
                fill="none"
                opacity="0.65"
              />
              {Array.from({ length: 60 }).map((_, i) => {
                const isHour = i % 5 === 0;
                const rad = ((i * 6 - 90) * Math.PI) / 180;
                const rOuter = 264;
                const rInner = isHour ? 252 : 258;
                return (
                  <line
                    key={i}
                    x1={280 + Math.cos(rad) * rInner}
                    y1={280 + Math.sin(rad) * rInner}
                    x2={280 + Math.cos(rad) * rOuter}
                    y2={280 + Math.sin(rad) * rOuter}
                    stroke={isHour ? '#B89B67' : '#D8CBB4'}
                    strokeWidth={isHour ? '1.4' : '0.8'}
                  />
                );
              })}
            </svg>

            {/* 12 Jewellery Pieces Positioned Around the Clock */}
            {CLOCK_PIECES.map((piece, idx) => {
              const rad = ((piece.angle - 90) * Math.PI) / 180;
              const radiusPercent = 39.5; // % from center
              const left = 50 + Math.cos(rad) * radiusPercent;
              const top = 50 + Math.sin(rad) * radiusPercent;
              const isSelected = idx === activeIndex;

              return (
                <button
                  key={piece.hour}
                  type="button"
                  data-cursor="shop"
                  className={`clock-piece-node ${isSelected ? 'active' : ''}`}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  onMouseEnter={() => {
                    setIsUserHovering(true);
                    setActiveIndex(idx);
                  }}
                  onClick={() =>
                    onAddToBag({
                      id: `clock-${piece.hour}`,
                      name: piece.name,
                      purity: `${piece.purity} · 916`,
                      weight: piece.weight,
                      price: piece.price
                    })
                  }
                  aria-label={`${piece.name} - ${piece.priceFormatted}`}
                >
                  <div className="clock-piece-glow" />
                  <ClockPieceSVG type={piece.type} className="clock-piece-svg" />
                </button>
              );
            })}

            {/* Center Metallic Gold Clock Hands */}
            <div className="clock-hands-pivot" aria-hidden="true">
              {/* Shorter tapered gold hour hand fixed at ~10 o'clock (-58deg) */}
              <div
                className="clock-hand-hour"
                style={{ transform: 'rotate(-58deg)' }}
              />
              {/* Long needle-thin gold pointer hand tracking the active jewellery piece */}
              <div
                className="clock-hand-minute"
                style={{ transform: `rotate(${activePiece.angle}deg)` }}
              />
              <div className="clock-center-cap" />
            </div>
          </div>
        </div>

        {/* Right Floating Dynamic Product Detail Card */}
        <div className="daily-clock-right">
          <div key={activePiece.hour} className="clock-detail-card">
            <div className="clock-card-time">{activePiece.timeLabel}</div>
            <h3 className="clock-card-title">{activePiece.name}</h3>
            <div className="clock-card-specs">
              <span>{activePiece.purity}</span>
              <span className="dot-sep">·</span>
              <span>{activePiece.weight}</span>
              <span className="dot-sep">·</span>
              <span className="clock-card-price">{activePiece.priceFormatted}</span>
            </div>
            <button
              type="button"
              className="btn-primary-dark btn-sm clock-add-btn"
              onClick={() =>
                onAddToBag({
                  id: `clock-${activePiece.hour}`,
                  name: activePiece.name,
                  purity: `${activePiece.purity} · 916`,
                  weight: activePiece.weight,
                  price: activePiece.price
                })
              }
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

