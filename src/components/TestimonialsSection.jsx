import React from 'react';
import { TESTIMONIALS } from '../data/jewelleryData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section-eyebrow">FAMILIES &amp; BRIDES</div>
          <h2 className="testimonials-heading">Worn on the biggest days</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <blockquote key={idx} className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★ ★ ★ ★ ★
              </div>
              <p className="testimonial-quote">{item.quote}</p>
              <footer className="testimonial-author">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

