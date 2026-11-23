import React, { useEffect, useState } from 'react';
import { GoldCoinSealSVG } from './JewelleryArtwork';

export default function Preloader({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setExiting(true);
    }, 1350);
    const t2 = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 2050);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`preloader-overlay ${exiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-inner">
        <div className="preloader-coin-wrap">
          <GoldCoinSealSVG className="preloader-coin-svg" />
        </div>
        <div className="preloader-hallmark-dot">916 · ESTD 1948</div>
        <div className="preloader-brand-logo-wrap" aria-label="Fulchand Gulabchand Jewellers">
          <img
            src={`${import.meta.env.BASE_URL}images/brand/fgj-horiz.png`}
            alt="Fulchand Gulabchand Jewellers"
            className="preloader-brand-logo"
          />
        </div>
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

