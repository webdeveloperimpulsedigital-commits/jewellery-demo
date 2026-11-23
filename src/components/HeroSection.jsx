import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MayuriHaarSVG, PedestalSVG } from './JewelleryArtwork';

gsap.registerPlugin(ScrollTrigger);

/* Razor-sharp vector + image Circular FG Monogram Mark for infinite-resolution scroll zoom */
const FGBrandMarkZoom = () => (
  <div className="hero-zoom-logo-inner">
    <img
      src={`${import.meta.env.BASE_URL}images/brand/fgj-mark.png`}
      alt="Fulchand Gulabchand Jewellers FG Monogram"
      className="hero-zoom-logo-img"
    />
  </div>
);

export default function HeroSection({
  bagCount,
  onOpenBag,
  onOpenBooking,
  onOpenSearch,
  onNavigateCollection,
  onScrollToSection
}) {
  const sectionRef = useRef(null);
  const pinWrapRef = useRef(null);
  const necklaceWrapRef = useRef(null);
  const pedestalWrapRef = useRef(null);
  const eternalTextRef = useRef(null);
  const goldTextRef = useRef(null);
  const uiChromeRef = useRef(null);
  const haloRef = useRef(null);
  const brandZoomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=145%',
          pin: pinWrapRef.current,
          scrub: 0.85,
          anticipatePin: 1
        }
      });

      // Phase 1 (0 -> 0.42): Fade out header/footer chrome, ETERNAL GOLD, pedestal, and necklace
      tl.to(
        uiChromeRef.current,
        {
          opacity: 0,
          y: -18,
          duration: 0.32,
          ease: 'power2.out'
        },
        0
      )
        .to(
          eternalTextRef.current,
          {
            opacity: 0,
            scale: 1.14,
            y: -40,
            duration: 0.38,
            ease: 'power2.inOut'
          },
          0
        )
        .to(
          goldTextRef.current,
          {
            opacity: 0,
            x: 55,
            scale: 1.12,
            duration: 0.38,
            ease: 'power2.inOut'
          },
          0
        )
        .to(
          pedestalWrapRef.current,
          {
            opacity: 0,
            y: 90,
            scale: 0.94,
            duration: 0.38,
            ease: 'power2.inOut'
          },
          0
        )
        .to(
          necklaceWrapRef.current,
          {
            opacity: 0,
            scale: 0.86,
            y: 35,
            duration: 0.38,
            ease: 'power2.inOut'
          },
          0
        )
        .to(
          haloRef.current,
          {
            scale: 1.35,
            opacity: 0.85,
            duration: 0.65,
            ease: 'power2.inOut'
          },
          0
        )
        // Phase 2 (0.06 -> 0.76): Reveal & zoom the circular FG brand logo mark from the top/center to fill the stage
        .fromTo(
          brandZoomRef.current,
          {
            opacity: 0,
            scale: 0.32,
            y: -180
          },
          {
            opacity: 1,
            scale: 1.85,
            y: 0,
            duration: 0.44,
            ease: 'power2.out'
          },
          0.05
        )
        .to(
          brandZoomRef.current,
          {
            scale: 4.2,
            duration: 0.32,
            ease: 'power2.inOut'
          },
          0.49
        )
        // Phase 3 (0.81 -> 1.0): Zoom past camera & soften into Collections section
        .to(
          brandZoomRef.current,
          {
            scale: 6.4,
            opacity: 0.12,
            duration: 0.22,
            ease: 'power1.in'
          },
          0.81
        )
        .to(
          haloRef.current,
          {
            opacity: 0.2,
            duration: 0.22,
            ease: 'power1.in'
          },
          0.81
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle mouse parallax on the hero stage before scrolling
  const handleMouseMove = (e) => {
    if (!necklaceWrapRef.current || window.scrollY > 80) return;
    const { innerWidth, innerHeight } = window;
    const nx = (e.clientX / innerWidth - 0.5) * 12;
    const ny = (e.clientY / innerHeight - 0.5) * 8;
    gsap.to(necklaceWrapRef.current, {
      x: nx,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    });
    gsap.to(pedestalWrapRef.current, {
      x: nx * 0.45,
      y: ny * 0.3,
      duration: 0.9,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section"
      onMouseMove={handleMouseMove}
    >
      <div ref={pinWrapRef} className="hero-pin-wrapper">
        {/* Top Navigation & Bottom Chrome Wrapper */}
        <div ref={uiChromeRef} className="hero-chrome-layer">
          <header className="hero-header">
            {/* Top-Left 2-Column Editorial Navigation */}
            <nav className="hero-nav-grid hero-nav-left" aria-label="Jewellery Categories">
              <div className="hero-nav-col">
                <button type="button" onClick={() => onScrollToSection('mayuri-haar')}>
                  Necklaces
                </button>
                <button type="button" onClick={() => onScrollToSection('daily-clock')}>
                  Earrings
                </button>
                <button type="button" onClick={() => onScrollToSection('festive-edit')}>
                  Bangles
                </button>
              </div>
              <div className="hero-nav-col">
                <button type="button" onClick={() => onNavigateCollection(0)}>
                  Bridal
                </button>
                <button type="button" onClick={() => onNavigateCollection(1)}>
                  Temple
                </button>
                <button type="button" onClick={() => onNavigateCollection(3)}>
                  Gifting
                </button>
              </div>
            </nav>

            {/* Center Brand Logo */}
            <div className="hero-brand-center">
              <a
                href="#hero"
                className="hero-brand-logo-link"
                aria-label="Fulchand Gulabchand Jewellers — Home"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/brand/fgj-horiz.png`}
                  alt="Fulchand Gulabchand Jewellers"
                  className="hero-brand-logo-img"
                />
              </a>
            </div>

            {/* Top-Right 2-Column Utility Navigation */}
            <nav className="hero-nav-grid hero-nav-right" aria-label="Atelier & Utility">
              <div className="hero-nav-col">
                <button type="button" onClick={() => onScrollToSection('craftsmanship')}>
                  Our craft
                </button>
                <button type="button" onClick={() => onScrollToSection('hallmark')}>
                  Gold rate
                </button>
                <button type="button" onClick={() => onScrollToSection('footer-stores')}>
                  Stores
                </button>
              </div>
              <div className="hero-nav-col">
                <button type="button" onClick={onOpenSearch}>
                  Search
                </button>
                <button type="button" onClick={onOpenBooking}>
                  Book visit
                </button>
                <button type="button" onClick={onOpenBag}>
                  Bag ({bagCount})
                </button>
              </div>
            </nav>
          </header>

          {/* Bottom-Left Editorial Caption & Primary CTA */}
          <div className="hero-bottom-left">
            <div className="hero-eyebrow">THE BRIDAL EDIT · 2025</div>
            <p className="hero-lead-copy">
              Heirloom necklaces in 22K gold, hallmarked
              <br />
              and handcrafted in Jaipur.
            </p>
            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => onNavigateCollection(0)}
            >
              <span>Explore bridal</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Bottom-Right Price & BIS 916 Hallmark Indicator */}
          <div className="hero-bottom-right">
            <div className="hero-piece-meta">Mayuri Haar · 22K · 62.4 g</div>
            <div className="hero-piece-price">₹5,21,169</div>
            <div className="hero-hallmark-mini">
              <span className="hallmark-triangle">▲</span>
              <span>916 BIS HALLMARK</span>
            </div>
          </div>
        </div>

        {/* Center Stage: Halo + ETERNAL GOLD Display Text + Pedestal + Mayuri Haar + Scroll-Zoom Brand Mark */}
        <div className="hero-center-stage">
          <div ref={haloRef} className="hero-radial-halo" />

          {/* Oversized Metallic Serif Display Words */}
          <div ref={eternalTextRef} className="hero-display-eternal" aria-hidden="true">
            ETERNAL
          </div>
          <div ref={goldTextRef} className="hero-display-gold" aria-hidden="true">
            GOLD
          </div>

          {/* 3-Tiered Museum Plinth */}
          <div ref={pedestalWrapRef} className="hero-pedestal-wrap">
            <PedestalSVG className="hero-pedestal-svg" />
          </div>

          {/* Signature Mayuri Haar Necklace (stays on pedestal initially, fades as logo zooms) */}
          <div ref={necklaceWrapRef} className="hero-necklace-wrap">
            <MayuriHaarSVG className="hero-necklace-svg" idPrefix="hero-mh" />
          </div>

          {/* Circular FG Monogram Brand Logo that zooms in on scroll */}
          <div ref={brandZoomRef} className="hero-brand-zoom-wrap" aria-hidden="true">
            <FGBrandMarkZoom />
          </div>
        </div>
      </div>
    </section>
  );
}
