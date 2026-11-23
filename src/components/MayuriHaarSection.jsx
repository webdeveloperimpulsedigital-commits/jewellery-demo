import React, { useState, useRef } from 'react';
import { GOLD_RATES } from '../data/jewelleryData';
import { MayuriHaarSVG } from './JewelleryArtwork';

const formatINR = (num) => '₹' + Number(num).toLocaleString('en-IN');

export default function MayuriHaarSection({ onAddToBag, onOpenTryOn }) {
  const [selectedKarat, setSelectedKarat] = useState('22K');
  const [activeView, setActiveView] = useState(0); // 0: Full, 1: Pendant close-up, 2: Craft macro, 3: Side angle
  const [wishlisted, setWishlisted] = useState(false);

  // Loupe magnifier state
  const stageRef = useRef(null);
  const [loupe, setLoupe] = useState({
    visible: false,
    xPercent: 44,
    yPercent: 58,
    px: 220,
    py: 240
  });

  const rateData = GOLD_RATES[selectedKarat];
  const displayTotal =
    selectedKarat === '18K'
      ? `₹${rateData.displayTotal}`
      : formatINR(rateData.totalPrice);

  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const xPercent = Math.max(8, Math.min(92, (px / rect.width) * 100));
    const yPercent = Math.max(8, Math.min(92, (py / rect.height) * 100));
    setLoupe({
      visible: true,
      xPercent,
      yPercent,
      px,
      py
    });
  };

  const handleStageMouseLeave = () => {
    setLoupe((prev) => ({ ...prev, visible: false }));
  };

  const thumbnails = [
    { id: 0, label: 'Full silhouette', className: 'thumb-view-full' },
    { id: 1, label: 'Ruby pendant close-up', className: 'thumb-view-pendant' },
    { id: 2, label: 'Peacock craft macro', className: 'thumb-view-macro' },
    { id: 3, label: 'Profile perspective', className: 'thumb-view-angle' }
  ];

  return (
    <section id="mayuri-haar" className="mayuri-section">
      <div className="mayuri-container">
        {/* Top Header Row: Title on Left, Indicative Total on Right */}
        <div className="mayuri-header-row">
          <div className="mayuri-title-group">
            <div className="section-eyebrow">BRIDAL EDIT · 01</div>
            <h2 className="mayuri-main-title">Mayuri Haar</h2>
            <p className="mayuri-sub-italic">Bridal necklace</p>
          </div>

          <div className="mayuri-indicative-price">
            <span className="indicative-label">Indicative total</span>
            <span className="indicative-amount">{displayTotal}</span>
          </div>
        </div>

        {/* Main 3-Column Interactive Showcase */}
        <div className="mayuri-showcase-grid">
          {/* Left Column: 4 Vertical View Thumbnails */}
          <div className="mayuri-thumbs-col" role="tablist" aria-label="Necklace views">
            {thumbnails.map((thumb) => (
              <button
                key={thumb.id}
                type="button"
                role="tab"
                aria-selected={activeView === thumb.id}
                aria-label={thumb.label}
                className={`mayuri-thumb-btn ${activeView === thumb.id ? 'active' : ''}`}
                onClick={() => setActiveView(thumb.id)}
              >
                <div className={`mayuri-thumb-inner ${thumb.className}`}>
                  <MayuriHaarSVG
                    className="mayuri-thumb-svg"
                    idPrefix={`thumb-${thumb.id}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Center Column: Interactive Necklace Stage + 2.5x Loupe + Bottom Spec Strip */}
          <div className="mayuri-center-col">
            <div
              ref={stageRef}
              data-cursor="zoom"
              className={`mayuri-stage-box view-mode-${activeView}`}
              onMouseMove={handleStageMouseMove}
              onMouseLeave={handleStageMouseLeave}
            >
              <div className="mayuri-stage-card-backdrop" />
              <div className="mayuri-stage-artwork-wrap">
                <MayuriHaarSVG className="mayuri-stage-svg" idPrefix="stage-mh" />
              </div>

              {/* Interactive 2.5x Jeweller's Loupe Magnifier */}
              <div
                className={`mayuri-loupe-lens ${loupe.visible ? 'is-active' : 'is-idle'}`}
                style={{
                  left: loupe.visible ? `${loupe.px}px` : '44%',
                  top: loupe.visible ? `${loupe.py}px` : '58%'
                }}
                aria-hidden="true"
              >
                <div
                  className="mayuri-loupe-zoomed-inner"
                  style={{
                    transform: `translate(${(50 - loupe.xPercent) * 2.1}%, ${(50 - loupe.yPercent) * 2.1}%) scale(2.45)`
                  }}
                >
                  <MayuriHaarSVG className="mayuri-loupe-svg" idPrefix="loupe-mh" />
                </div>
                <div className="mayuri-loupe-glare" />
              </div>
            </div>

            {/* Bottom 4-Column Specification Strip */}
            <div className="mayuri-bottom-specs">
              <div className="mayuri-spec-item">
                <span className="spec-label">Purity</span>
                <span className="spec-value">{rateData.label}</span>
              </div>
              <div className="mayuri-spec-item">
                <span className="spec-label">Weight</span>
                <span className="spec-value">{rateData.weightGrams} g</span>
              </div>
              <div className="mayuri-spec-item">
                <span className="spec-label">Making</span>
                <span className="spec-value">{formatINR(rateData.makingCharges)}</span>
              </div>
              <button
                type="button"
                className="mayuri-spec-item spec-action"
                onClick={() => setActiveView((prev) => (prev + 1) % 4)}
              >
                <span className="spec-label">Inspection</span>
                <span className="spec-value">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Itemised Price Breakdown & Configuration Card */}
          <aside className="mayuri-price-card">
            <div className="price-card-top-bar">
              <div className="purity-toggle-group" role="radiogroup" aria-label="Gold purity">
                {['22K', '18K'].map((k) => (
                  <button
                    key={k}
                    type="button"
                    role="radio"
                    aria-checked={selectedKarat === k}
                    className={`purity-pill-btn ${selectedKarat === k ? 'active' : ''}`}
                    onClick={() => setSelectedKarat(k)}
                  >
                    {GOLD_RATES[k].label}
                  </button>
                ))}
              </div>
              <span className="price-card-bis-tag">BIS {rateData.hallmark}</span>
            </div>

            {/* Itemised Breakdown Rows */}
            <div className="price-breakdown-rows">
              <div className="breakdown-row">
                <span className="row-label">Weight</span>
                <span className="row-val">{rateData.weightGrams} g</span>
              </div>
              <div className="breakdown-row">
                <span className="row-label">
                  Gold rate ({rateData.karat} · today)
                </span>
                <span className="row-val">{formatINR(rateData.ratePerGram)} / g</span>
              </div>
              <div className="breakdown-row">
                <span className="row-label">Gold value</span>
                <span className="row-val">{formatINR(rateData.goldValue)}</span>
              </div>
              <div className="breakdown-row">
                <span className="row-label">Making ({rateData.makingPercent}%)</span>
                <span className="row-val">{formatINR(rateData.makingCharges)}</span>
              </div>
              <div className="breakdown-row">
                <span className="row-label">GST ({rateData.gstPercent}%)</span>
                <span className="row-val">{formatINR(rateData.gstAmount)}</span>
              </div>
            </div>

            <div className="price-total-row">
              <span className="total-label">Total</span>
              <span className="total-val">{displayTotal}</span>
            </div>

            {/* Try-On View Mini Card */}
            <button
              type="button"
              className="try-on-mini-card"
              onClick={onOpenTryOn}
            >
              <div className="try-on-thumb">
                <MayuriHaarSVG className="try-on-thumb-svg" idPrefix="tryon-mh" />
              </div>
              <div className="try-on-copy">
                <div className="try-on-title">Try on view</div>
                <div className="try-on-desc">
                  See scale on neckline or book a home trial
                </div>
              </div>
            </button>

            {/* Bottom Action Buttons */}
            <div className="price-card-actions">
              <button
                type="button"
                className="btn-primary-dark mayuri-add-bag-btn"
                onClick={() =>
                  onAddToBag({
                    id: `mayuri-haar-${selectedKarat}`,
                    name: 'Mayuri Haar Bridal Necklace',
                    purity: rateData.label,
                    weight: `${rateData.weightGrams} g`,
                    price: selectedKarat === '18K' ? 435924 : rateData.totalPrice
                  })
                }
              >
                Add to bag
              </button>
              <button
                type="button"
                className={`mayuri-wishlist-btn ${wishlisted ? 'active' : ''}`}
                onClick={() => setWishlisted(!wishlisted)}
                aria-label="Save to wishlist"
              >
                {wishlisted ? '♥' : '♡'}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

