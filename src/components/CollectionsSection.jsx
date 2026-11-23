import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COLLECTIONS_DATA } from '../data/jewelleryData';
import {
  BridalSetSVG,
  TempleSetSVG,
  DailyWearSetSVG,
  GiftingSetSVG
} from './JewelleryArtwork';

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsSection({
  activeCollectionIndex,
  setActiveCollectionIndex,
  onAddToBag,
  onScrollToSection
}) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const stRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync external navigation request
  useEffect(() => {
    if (typeof activeCollectionIndex === 'number' && activeCollectionIndex !== currentIndex) {
      goToSlide(activeCollectionIndex);
    }
  }, [activeCollectionIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = COLLECTIONS_DATA.length;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=280%',
        pin: pinRef.current,
        scrub: 0.75,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1
          const exactSlide = progress * (totalSlides - 1);
          const idx = Math.min(totalSlides - 1, Math.max(0, Math.round(exactSlide)));
          setCurrentIndex(idx);
          if (trackRef.current) {
            gsap.set(trackRef.current, {
              xPercent: -exactSlide * 25
            });
          }
        }
      });

      stRef.current = st;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToSlide = (index) => {
    const clamped = Math.max(0, Math.min(COLLECTIONS_DATA.length - 1, index));
    setCurrentIndex(clamped);
    if (setActiveCollectionIndex) setActiveCollectionIndex(clamped);

    if (stRef.current) {
      const st = stRef.current;
      const targetScroll =
        st.start + (clamped / (COLLECTIONS_DATA.length - 1)) * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    } else if (trackRef.current) {
      gsap.to(trackRef.current, {
        xPercent: -clamped * 25,
        duration: 0.85,
        ease: 'power3.inOut'
      });
    }
  };

  const activeItem = COLLECTIONS_DATA[currentIndex] || COLLECTIONS_DATA[0];

  const renderSlideArtwork = (id) => {
    switch (id) {
      case 'bridal':
        return <BridalSetSVG className="collection-artwork-svg" />;
      case 'temple':
        return <TempleSetSVG className="collection-artwork-svg" />;
      case 'daily':
        return <DailyWearSetSVG className="collection-artwork-svg" />;
      case 'gifting':
      default:
        return <GiftingSetSVG className="collection-artwork-svg" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="collections-section"
      style={{ backgroundColor: activeItem.bgColor }}
    >
      <div ref={pinRef} className="collections-pin-wrap">
        {/* Top-Left Collection Counter, Animated Title & Subtitle */}
        <div className="collections-top-left">
          <div className="collections-eyebrow">
            <span>COLLECTIONS</span>
            <span className="collections-counter">{activeItem.number}</span>
          </div>

          {/* Character-split vertical reveal title */}
          <h2 key={activeItem.id} className="collections-title-animated">
            {activeItem.title.split('').map((ch, i) => (
              <span
                key={i}
                className="char-mask"
                style={{ animationDelay: `${i * 28}ms` }}
              >
                <span className="char-inner">{ch === ' ' ? '\u00A0' : ch}</span>
              </span>
            ))}
          </h2>

          <p key={`${activeItem.id}-sub`} className="collections-subtitle">
            {activeItem.subtitle}
          </p>
        </div>

        {/* Horizontal 4-Slide Stage Track */}
        <div className="collections-stage-viewport">
          <div ref={trackRef} className="collections-horizontal-track">
            {COLLECTIONS_DATA.map((col) => (
              <div key={col.id} className="collection-slide-panel">
                {/* Giant Background Editorial Display Word */}
                <div
                  className="collection-giant-word"
                  style={{ color: col.wordColor }}
                  aria-hidden="true"
                >
                  {col.displayWord}
                </div>

                {/* Layered Floating Jewellery Artwork */}
                <div
                  className="collection-jewellery-layer"
                  data-cursor="shop"
                  onClick={() => {
                    if (col.id === 'bridal') onScrollToSection('mayuri-haar');
                    else if (col.id === 'daily') onScrollToSection('daily-clock');
                    else onAddToBag(col.featuredItem);
                  }}
                >
                  {renderSlideArtwork(col.id)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Bar: 4 Category Cards + Prev/Next Arrows + Dynamic CTA */}
        <div className="collections-bottom-bar">
          <div className="collections-tabs-group" role="tablist" aria-label="Collections">
            {COLLECTIONS_DATA.map((col, idx) => (
              <button
                key={col.id}
                type="button"
                role="tab"
                aria-selected={currentIndex === idx}
                className={`collection-tab-pill ${currentIndex === idx ? 'active' : ''}`}
                style={{ backgroundColor: col.tabBg }}
                onClick={() => goToSlide(idx)}
              >
                <span className="collection-tab-label">{col.title}</span>
              </button>
            ))}

            {/* Prev / Next Circular Arrow Buttons */}
            <div className="collections-arrows-group">
              <button
                type="button"
                className="collection-arrow-btn prev"
                onClick={() => goToSlide(currentIndex - 1)}
                disabled={currentIndex === 0}
                aria-label="Previous collection"
              >
                ←
              </button>
              <button
                type="button"
                className="collection-arrow-btn next"
                onClick={() => goToSlide(currentIndex + 1)}
                disabled={currentIndex === COLLECTIONS_DATA.length - 1}
                aria-label="Next collection"
              >
                →
              </button>
            </div>
          </div>

          {/* Bottom-Right Dynamic Shop CTA */}
          <button
            type="button"
            className="btn-primary-dark collections-shop-cta"
            onClick={() => {
              if (activeItem.id === 'bridal') onScrollToSection('mayuri-haar');
              else if (activeItem.id === 'daily') onScrollToSection('daily-clock');
              else onAddToBag(activeItem.featuredItem);
            }}
          >
            <span>{activeItem.ctaText}</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

