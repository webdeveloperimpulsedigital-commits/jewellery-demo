import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FESTIVE_CARDS } from '../data/jewelleryData';
import { FestiveCardVisual } from './JewelleryArtwork';

gsap.registerPlugin(ScrollTrigger);

export default function FestiveEditSection({ onAddToBag }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards fanning out from a stacked center deck into a 5-card arched fan (matching 00:28 -> 00:30)
      cardsRef.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const offsetFromCenter = idx - 2; // -2, -1, 0, 1, 2
        const targetRotate = FESTIVE_CARDS[idx].rotate;
        const targetY = FESTIVE_CARDS[idx].translateY;

        gsap.fromTo(
          cardEl,
          {
            x: -offsetFromCenter * 155,
            y: 80,
            rotation: offsetFromCenter * 2,
            scale: 0.88,
            opacity: 0.35
          },
          {
            x: 0,
            y: targetY,
            rotation: targetRotate,
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'center 52%',
              scrub: 0.85
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Deterministic golden dust particles for background atmosphere
  const particles = Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: `${(i * 37) % 96 + 2}%`,
    top: `${(i * 53) % 88 + 6}%`,
    size: 2 + (i % 3) * 1.5,
    delay: `${(i % 7) * 0.45}s`
  }));

  return (
    <section ref={sectionRef} id="festive-edit" className="festive-section">
      {/* Golden bokeh & twinkling dust particles */}
      <div className="festive-particles-layer" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="gold-dust-dot"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>

      <div className="festive-container">
        {/* Centered Header */}
        <div className="festive-header">
          <div className="festive-script-eyebrow">Dhanteras &amp; wedding season</div>
          <h2 className="festive-main-title">The Festive Edit</h2>
          <p className="festive-subtitle">
            Making charges from 8% on sets · gift cards from ₹5,000
          </p>
        </div>

        {/* 5 Fanned Dark Velvet Jewellery Cards */}
        <div className="festive-fan-stage">
          {FESTIVE_CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              data-cursor="shop"
              className={`festive-velvet-card card-idx-${idx}`}
              onClick={() =>
                onAddToBag({
                  id: card.id,
                  name: card.title.replace('\n', ' '),
                  purity: card.purity,
                  weight: card.weight,
                  price: card.price
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onAddToBag({
                    id: card.id,
                    name: card.title.replace('\n', ' '),
                    purity: card.purity,
                    weight: card.weight,
                    price: card.price
                  });
                }
              }}
            >
              {/* Top Golden Bokeh Light Streaks */}
              <div className="festive-card-bokeh" aria-hidden="true">
                <span className="bokeh-streak s1" />
                <span className="bokeh-streak s2" />
              </div>

              {/* Card Artwork */}
              <div className="festive-card-visual-wrap">
                <FestiveCardVisual type={card.type} className="festive-card-svg" />
              </div>

              {/* Bottom Title & Price */}
              <div className="festive-card-caption">
                <h3 className="festive-card-title">
                  {card.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && card.title.includes('\n') && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <div className="festive-card-price">{card.priceLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

