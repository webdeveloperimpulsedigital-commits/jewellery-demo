import React, { useState } from 'react';
import { STORES, CLOCK_PIECES, FESTIVE_CARDS } from '../data/jewelleryData';
import { MayuriHaarSVG } from './JewelleryArtwork';

const formatINR = (num) => '₹' + Number(num).toLocaleString('en-IN');

export function BagDrawer({ isOpen, onClose, items, onRemoveItem, onClearBag }) {
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <aside
        className="bag-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Shopping Bag"
      >
        <div className="modal-header">
          <div>
            <span className="section-eyebrow">YOUR SELECTION</span>
            <h3 className="modal-title">Hallmarked Bag ({items.reduce((a, b) => a + b.qty, 0)})</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {checkedOut ? (
          <div className="bag-empty-state">
            <div className="booking-success-seal">916</div>
            <h4>Insured Reservation Confirmed</h4>
            <p>
              Our Jaipur concierge has reserved your hallmarked pieces and locked today’s
              gold rate (₹7,240/g for 22K).
            </p>
            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => {
                setCheckedOut(false);
                onClearBag();
                onClose();
              }}
            >
              Continue exploring
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="bag-empty-state">
            <p>Your bag is currently empty.</p>
            <span className="bag-empty-sub">
              Every Fulchand Gulabchand piece ships with a BIS 916/750 hallmark &amp; weight certificate.
            </span>
          </div>
        ) : (
          <>
            <div className="bag-items-list">
              {items.map((item) => (
                <div key={item.id} className="bag-item-row">
                  <div className="bag-item-info">
                    <div className="bag-item-name">{item.name}</div>
                    <div className="bag-item-meta">
                      {item.purity} · {item.weight} · Qty {item.qty}
                    </div>
                  </div>
                  <div className="bag-item-right">
                    <div className="bag-item-price">{formatINR(item.price * item.qty)}</div>
                    <button
                      type="button"
                      className="bag-remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bag-footer">
              <div className="bag-subtotal-row">
                <span>Itemised Total (incl. 3% GST)</span>
                <strong>{formatINR(total)}</strong>
              </div>
              <p className="bag-note">
                Insured armoured doorstep delivery · Lifetime 100% gold value exchange
              </p>
              <button
                type="button"
                className="btn-primary-dark bag-checkout-btn"
                onClick={() => setCheckedOut(true)}
              >
                Reserve &amp; lock gold rate →
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export function BookingModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('store'); // 'store' | 'home'
  const [city, setCity] = useState('Jaipur');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="luxury-modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Book a viewing"
      >
        <div className="modal-header">
          <div>
            <span className="section-eyebrow">PRIVATE APPOINTMENT</span>
            <h3 className="modal-title">Try it in the store, or at home</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="booking-confirmation">
            <div className="booking-success-seal">916</div>
            <h4>Viewing Request Received</h4>
            <p>
              Our {city} senior goldsmith concierge will call you shortly to confirm your{' '}
              {mode === 'store' ? 'private showroom viewing' : 'insured home trial'}.
            </p>
            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="purity-toggle-group booking-mode-toggle">
              <button
                type="button"
                className={`purity-pill-btn ${mode === 'store' ? 'active' : ''}`}
                onClick={() => setMode('store')}
              >
                Flagship Store Visit
              </button>
              <button
                type="button"
                className={`purity-pill-btn ${mode === 'home' ? 'active' : ''}`}
                onClick={() => setMode('home')}
              >
                Insured Home Trial
              </button>
            </div>

            <div className="booking-cities-grid">
              {STORES.map((s) => (
                <button
                  key={s.city}
                  type="button"
                  className={`store-select-card ${city === s.city ? 'active' : ''}`}
                  onClick={() => setCity(s.city)}
                >
                  <strong>{s.city}</strong>
                  <span>{s.address}</span>
                </button>
              ))}
            </div>

            <div className="form-row-2">
              <label className="form-field">
                <span>Your Name</span>
                <input
                  type="text"
                  required
                  placeholder="Ananya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="form-field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>

            <button type="submit" className="btn-primary-dark booking-submit-btn">
              Confirm {mode === 'store' ? 'store appointment' : 'home viewing'} →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function TryOnModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="luxury-modal-box tryon-modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Neckline scale view"
      >
        <div className="modal-header">
          <div>
            <span className="section-eyebrow">TRUE SCALE REFERENCE</span>
            <h3 className="modal-title">Mayuri Haar · Neckline Drape</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="tryon-silhouette-stage">
          <svg viewBox="0 0 400 320" className="tryon-bust-svg">
            {/* Minimalist architectural bust & collarbone silhouette */}
            <path
              d="M145 30 C145 75, 130 110, 55 145 L35 290 L365 290 L345 145 C270 110, 255 75, 255 30"
              stroke="#C8B493"
              strokeWidth="1.5"
              fill="#EFE6D5"
              fillOpacity="0.55"
            />
            <path
              d="M120 135 C165 152, 235 152, 280 135"
              stroke="#B89B67"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />
          </svg>
          <div className="tryon-necklace-overlay">
            <MayuriHaarSVG className="tryon-haar-svg" idPrefix="modal-tryon" />
          </div>
          <div className="tryon-scale-caption">
            Collar width: 16.5 cm · Ruby drop length: 4.8 cm · Weight: 62.4 g (22K)
          </div>
        </div>

        <div className="tryon-modal-footer">
          <button
            type="button"
            className="btn-primary-dark"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
          >
            Book a home trial with this piece →
          </button>
        </div>
      </div>
    </div>
  );
}

export function SearchModal({ isOpen, onClose, onAddToBag }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const catalog = [
    {
      id: 'mayuri-22k',
      name: 'Mayuri Haar Bridal Necklace',
      purity: '22K · 916',
      weight: '62.4 g',
      price: 521169
    },
    ...CLOCK_PIECES.map((p) => ({
      id: `clock-${p.hour}`,
      name: p.name,
      purity: `${p.purity} · 916`,
      weight: p.weight,
      price: p.price
    })),
    ...FESTIVE_CARDS.map((f) => ({
      id: f.id,
      name: f.title.replace('\n', ' '),
      purity: f.purity,
      weight: f.weight,
      price: f.price
    }))
  ];

  const filtered = catalog.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="luxury-modal-box search-modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search pieces"
      >
        <div className="modal-header">
          <input
            type="search"
            autoFocus
            className="search-input-field"
            placeholder="Search Mayuri Haar, Bindu studs, Nitya band, Kasu mala..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="search-results-list">
          {filtered.slice(0, 7).map((item) => (
            <div key={item.id} className="search-result-row">
              <div>
                <div className="bag-item-name">{item.name}</div>
                <div className="bag-item-meta">
                  {item.purity} · {item.weight}
                </div>
              </div>
              <div className="search-result-right">
                <span className="bag-item-price">{formatINR(item.price)}</span>
                <button
                  type="button"
                  className="btn-primary-dark btn-sm"
                  onClick={() => {
                    onAddToBag(item);
                    onClose();
                  }}
                >
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

