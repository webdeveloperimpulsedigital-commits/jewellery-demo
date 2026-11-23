import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CRAFT_STEPS } from '../data/jewelleryData';
import { CraftStepSVG } from './JewelleryArtwork';

gsap.registerPlugin(ScrollTrigger);

export default function CraftsmanshipSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 44,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="craftsmanship" className="craft-section">
      <div className="craft-container">
        <div className="craft-header">
          <div className="section-eyebrow">HANDCRAFTED IN JAIPUR</div>
          <h2 className="craft-main-heading">
            Five steps of work,
            <br />
            none of them rushed
          </h2>
        </div>

        <div className="craft-cards-grid">
          {CRAFT_STEPS.map((step, idx) => (
            <article
              key={step.num}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="craft-step-card"
            >
              <div className="craft-step-num">{step.num}</div>
              <div className="craft-illustration-box">
                <CraftStepSVG type={step.type} className="craft-step-svg" />
              </div>
              <div className="craft-step-footer">
                <h3 className="craft-step-title">{step.title}</h3>
                <p className="craft-step-sub">{step.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

