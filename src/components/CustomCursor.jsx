import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'shop' | 'zoom' | 'pointer'

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;
      if (!target) return;
      const modeEl = target.closest('[data-cursor]');
      if (modeEl) {
        setCursorMode(modeEl.getAttribute('data-cursor') || 'default');
      } else if (target.closest('button, a, [role="button"]')) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring mode-${cursorMode}`}
        aria-hidden="true"
      >
        {cursorMode === 'shop' && <span className="cursor-badge-text">SHOP</span>}
        {cursorMode === 'zoom' && <span className="cursor-badge-text">ZOOM</span>}
      </div>
      <div
        ref={dotRef}
        className={`custom-cursor-dot mode-${cursorMode}`}
        aria-hidden="true"
      />
    </>
  );
}

