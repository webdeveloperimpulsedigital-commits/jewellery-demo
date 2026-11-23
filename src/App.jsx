import React, { useState, useCallback } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import CollectionsSection from './components/CollectionsSection';
import DailyWearClockSection from './components/DailyWearClockSection';
import MayuriHaarSection from './components/MayuriHaarSection';
import HallmarkSection from './components/HallmarkSection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import FestiveEditSection from './components/FestiveEditSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';
import {
  BagDrawer,
  BookingModal,
  TryOnModal,
  SearchModal
} from './components/Modals';

export default function App() {
  const [bagItems, setBagItems] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [tryOnOpen, setTryOnOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const bagCount = bagItems.reduce((sum, item) => sum + item.qty, 0);

  const handleAddToBag = useCallback((newItem) => {
    setBagItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...newItem, qty: 1 }];
    });

    setToastMessage(`${newItem.name} added to bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  const handleRemoveFromBag = useCallback((id) => {
    setBagItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleClearBag = useCallback(() => {
    setBagItems([]);
  }, []);

  const handleScrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavigateCollection = useCallback((colIdx) => {
    setActiveCollectionIndex(colIdx);
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="kanak-app">
      {/* Preloader Curtain */}
      <Preloader />

      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Fixed Top-Right Floating Bag Pill (visible across all sections as in video) */}
      <button
        type="button"
        className="floating-bag-pill"
        onClick={() => setBagOpen(true)}
        aria-label={`Shopping bag with ${bagCount} items`}
      >
        <span className="bag-pill-label">Bag</span>
        <span className="bag-pill-badge">{bagCount}</span>
      </button>

      {/* Subtle Toast Notification on Add to Bag */}
      {toastMessage && (
        <div className="kanak-toast" role="status">
          <span className="toast-seal">916</span>
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setBagOpen(true)}>
            View bag →
          </button>
        </div>
      )}

      {/* Main Page Content */}
      <main>
        <HeroSection
          bagCount={bagCount}
          onOpenBag={() => setBagOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
          onNavigateCollection={handleNavigateCollection}
          onScrollToSection={handleScrollToSection}
        />

        <CollectionsSection
          activeCollectionIndex={activeCollectionIndex}
          setActiveCollectionIndex={setActiveCollectionIndex}
          onAddToBag={handleAddToBag}
          onScrollToSection={handleScrollToSection}
        />

        <DailyWearClockSection onAddToBag={handleAddToBag} />

        <MayuriHaarSection
          onAddToBag={handleAddToBag}
          onOpenTryOn={() => setTryOnOpen(true)}
        />

        <HallmarkSection />

        <CraftsmanshipSection />

        <FestiveEditSection onAddToBag={handleAddToBag} />

        <TestimonialsSection />
      </main>

      <FooterSection
        onOpenBooking={() => setBookingOpen(true)}
        onNavigateCollection={handleNavigateCollection}
        onScrollToSection={handleScrollToSection}
      />

      {/* Interactive Drawers & Modals */}
      <BagDrawer
        isOpen={bagOpen}
        onClose={() => setBagOpen(false)}
        items={bagItems}
        onRemoveItem={handleRemoveFromBag}
        onClearBag={handleClearBag}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <TryOnModal
        isOpen={tryOnOpen}
        onClose={() => setTryOnOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToBag={handleAddToBag}
      />
    </div>
  );
}

