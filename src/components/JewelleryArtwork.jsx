import React from 'react';

/* Shared SVG Defs for Photorealistic 22K Gold, Rose Gold, Rubies, Emeralds & Pearls */
export const SharedJewelleryDefs = ({ idPrefix = 'kj' }) => (
  <defs>
    {/* Rich 22K Yellow Gold Metallic Linear Gradient */}
    <linearGradient id={`${idPrefix}-gold22k`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FCE79C" />
      <stop offset="22%" stopColor="#E5BD54" />
      <stop offset="48%" stopColor="#C9972C" />
      <stop offset="72%" stopColor="#F5D77F" />
      <stop offset="100%" stopColor="#8F6314" />
    </linearGradient>

    {/* Antique Temple Gold Gradient */}
    <linearGradient id={`${idPrefix}-goldAntique`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F0CF7B" />
      <stop offset="35%" stopColor="#C89638" />
      <stop offset="70%" stopColor="#94671D" />
      <stop offset="100%" stopColor="#6B470E" />
    </linearGradient>

    {/* Radial 3D Sculpted Gold Boss Gradient */}
    <radialGradient id={`${idPrefix}-goldRadial`} cx="35%" cy="30%" r="70%">
      <stop offset="0%" stopColor="#FFF2B8" />
      <stop offset="35%" stopColor="#E6BE5A" />
      <stop offset="75%" stopColor="#B88422" />
      <stop offset="100%" stopColor="#7D540E" />
    </radialGradient>

    {/* 18K Rose Gold Gradient */}
    <linearGradient id={`${idPrefix}-roseGold`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FADCD0" />
      <stop offset="35%" stopColor="#E5AE98" />
      <stop offset="70%" stopColor="#C4836A" />
      <stop offset="100%" stopColor="#8F5640" />
    </linearGradient>

    {/* Deep Cabochon Burmese Ruby Gradient */}
    <radialGradient id={`${idPrefix}-ruby`} cx="38%" cy="32%" r="68%">
      <stop offset="0%" stopColor="#FF6B84" />
      <stop offset="22%" stopColor="#D4173C" />
      <stop offset="65%" stopColor="#8C0822" />
      <stop offset="100%" stopColor="#4A0210" />
    </radialGradient>

    {/* Deep Cabochon Emerald Gradient */}
    <radialGradient id={`${idPrefix}-emerald`} cx="36%" cy="32%" r="68%">
      <stop offset="0%" stopColor="#6EE79E" />
      <stop offset="28%" stopColor="#1B8A4B" />
      <stop offset="72%" stopColor="#0B542B" />
      <stop offset="100%" stopColor="#042B15" />
    </radialGradient>

    {/* South Sea / Basra Pearl Lustre Gradient */}
    <radialGradient id={`${idPrefix}-pearl`} cx="34%" cy="30%" r="68%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="45%" stopColor="#FBF6EA" />
      <stop offset="82%" stopColor="#E4D7C0" />
      <stop offset="100%" stopColor="#C4B396" />
    </radialGradient>

    {/* Uncut Polki Diamond Gradient */}
    <radialGradient id={`${idPrefix}-polki`} cx="35%" cy="30%" r="68%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="55%" stopColor="#F2EFE9" />
      <stop offset="85%" stopColor="#D6CEBE" />
      <stop offset="100%" stopColor="#A69B86" />
    </radialGradient>

    {/* Soft Jewellery Drop Shadow */}
    <filter id={`${idPrefix}-shadow`} x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#4A3516" floodOpacity="0.22" />
    </filter>
    <filter id={`${idPrefix}-softShadow`} x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3D2B12" floodOpacity="0.18" />
    </filter>
  </defs>
);

/* Official Fulchand Gulabchand Calligraphic FG Monogram Path (600x600 coordinate space) */
export const FG_MONOGRAM_PATH =
  "M 360.056 178.137 C 353.423 179.237, 345.250 181.721, 334.045 186.043 C 326.622 188.905, 325.876 189.410, 327.934 190.171 C 329.581 190.780, 331.861 190.447, 335.585 189.054 C 349.322 183.914, 369.446 182.330, 380.429 185.522 C 386.819 187.380, 391.699 191.879, 392.614 196.754 C 393.956 203.909, 390.073 205.480, 373 204.688 C 359.159 204.046, 353.190 202.806, 324 194.504 C 278.378 181.530, 264.883 178.847, 244.500 178.703 C 233.933 178.629, 228.920 179.040, 224.058 180.379 C 209.592 184.365, 196.858 191.971, 185.470 203.428 C 167.105 221.902, 164.019 246.379, 178.045 262.313 C 187.398 272.940, 200.374 274.418, 215.779 266.612 C 223.286 262.808, 223.051 262.075, 214.530 262.719 C 208.754 263.156, 205.986 262.885, 202.453 261.535 C 196.382 259.216, 187.583 250.515, 184.499 243.779 C 178.115 229.835, 181.341 211.213, 192.036 200.275 C 200.078 192.049, 222.484 189.362, 248 193.562 C 266 196.526, 296.329 204.105, 297.451 205.920 C 297.719 206.355, 295.475 208.407, 292.463 210.481 C 285.293 215.419, 271.493 229.986, 265.632 238.802 C 260.032 247.225, 253.916 259.104, 250.019 269.124 L 247.152 276.500 235.194 276.780 L 223.236 277.060 220.514 283.280 C 219.017 286.701, 217.566 290.063, 217.289 290.750 C 216.892 291.737, 224.718 292, 254.455 292 L 292.125 292 295.485 284.750 L 298.845 277.500 283.173 277 C 265.134 276.425, 266.267 277.470, 270.714 265.500 C 278.772 243.815, 288.790 225.836, 298.939 214.851 L 305.502 207.746 314.001 209.815 C 340.665 216.307, 361.521 217.946, 374.267 214.552 C 389.776 210.422, 404.200 198.832, 404.200 190.497 C 404.200 186.115, 402.903 184.491, 397.023 181.511 C 388.682 177.285, 373.533 175.902, 360.056 178.137 M 388 230.629 C 380.441 232.114, 351.490 245.224, 343.061 250.979 C 336.721 255.308, 324.842 267.331, 320.317 274 C 316.342 279.858, 310.773 291.064, 308.390 298 C 306.855 302.468, 306.500 306.408, 306.500 319 C 306.500 336.468, 307.897 342.440, 314.601 353.625 C 328.577 376.944, 357.443 386.997, 384.542 377.985 C 392.109 375.468, 404.012 368.536, 410.293 362.988 C 412.930 360.659, 415.352 359.019, 415.677 359.343 C 416.710 360.377, 409.003 381.150, 403.887 391.118 C 398.209 402.180, 393.076 409.172, 388.604 411.936 C 378.877 417.948, 357.061 414.112, 335.377 402.577 C 325.623 397.388, 317.687 391.826, 296 374.982 C 287.475 368.361, 273.573 357.988, 265.106 351.932 L 249.712 340.920 245.289 349.060 C 242.857 353.537, 241.009 357.286, 241.183 357.390 C 244.232 359.222, 256.959 369.215, 270 380.015 C 290.788 397.231, 299.181 403.397, 310.545 409.800 C 322.219 416.378, 332.744 420.555, 341.456 422.069 C 363.748 425.941, 392.103 417.126, 409.401 400.943 C 423.836 387.441, 435.829 363.962, 439.509 342 C 440.705 334.864, 445.900 317.576, 449.500 308.750 C 450.171 307.106, 448.369 307, 419.755 307 L 389.296 307 386.148 313.830 C 384.417 317.586, 383 320.961, 383 321.330 C 383 321.698, 393.350 322, 406 322 C 418.650 322, 428.995 322.113, 428.989 322.250 C 428.983 322.387, 428.355 324.525, 427.593 327 C 421.571 346.565, 411.558 360.155, 398.432 366.577 C 391.086 370.171, 379.270 371.707, 369.998 370.271 C 343.986 366.245, 326.063 341.860, 326.015 310.429 C 325.973 282.542, 338.711 255.261, 355.823 246.590 C 370.996 238.901, 393.628 238.184, 408.487 244.922 C 416.848 248.712, 425.099 256.509, 428.989 264.295 C 430.645 267.608, 432 270.923, 432 271.660 C 432 274.062, 433.341 273.117, 441.623 264.878 L 449.788 256.755 447.722 253.253 C 444.813 248.323, 437.070 240.817, 431.566 237.592 C 422.731 232.414, 416.499 230.864, 403 230.487 C 396.125 230.295, 389.375 230.359, 388 230.629 M 237.929 304.250 C 231.654 325.347, 219.117 354.037, 210.524 366.964 C 208.058 370.673, 204.017 375.574, 201.543 377.854 C 197.439 381.636, 196.576 382, 191.704 382 C 184.469 382, 177.277 379.700, 172.716 375.928 C 164.873 369.441, 160.965 355.618, 164.417 346.577 C 166.544 341.008, 172.683 335.338, 177.580 334.419 C 186.336 332.776, 203.549 336.095, 213.821 341.407 C 216.946 343.024, 217.046 343.008, 217.894 340.782 C 218.371 339.527, 219.491 336.758, 220.381 334.628 C 221.272 332.498, 222 330.454, 222 330.085 C 222 328.517, 212.186 327, 202.037 327 C 188.143 327, 178.882 329.712, 167.704 337.054 C 154.805 345.527, 149.106 354.757, 150.337 365.182 C 153.570 392.568, 194.885 394.324, 223.025 368.271 C 231.149 360.749, 239.200 349.114, 244.984 336.535 C 248.583 328.707, 257.577 305.546, 259.461 299.250 C 260.128 297.022, 260.039 297, 250.110 297 L 240.085 297 237.929 304.250";

/* 1. Preloader Embossed Gold Coin Medallion */
export const GoldCoinSealSVG = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <SharedJewelleryDefs idPrefix="coin" />
    <g filter="url(#coin-shadow)">
      <circle cx="60" cy="60" r="48" fill="url(#coin-goldRadial)" />
      <circle cx="60" cy="60" r="45" stroke="#FFF3C4" strokeWidth="1" strokeOpacity="0.7" />
      <circle cx="60" cy="60" r="41" stroke="#7A5210" strokeWidth="1.2" strokeDasharray="2 2.5" strokeOpacity="0.65" />
      <circle cx="60" cy="60" r="35" fill="url(#coin-gold22k)" stroke="#8F6314" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="32" stroke="#FFF4C9" strokeWidth="0.7" strokeOpacity="0.6" />
      <g transform="translate(60, 60) scale(0.165) translate(-300, -301)">
        <path
          d={FG_MONOGRAM_PATH}
          fill="#5A1010"
          fillRule="evenodd"
          stroke="#FFF3C4"
          strokeWidth="2.2"
          strokeOpacity="0.55"
        />
      </g>
    </g>
  </svg>
);

/* 2. Three-Tiered Cream Alabaster Museum Pedestal (Hero) */
export const PedestalSVG = ({ className = '' }) => (
  <svg viewBox="0 0 760 220" className={className} fill="none">
    <defs>
      <linearGradient id="ped-side-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#DFD5C5" />
        <stop offset="30%" stopColor="#F6F0E6" />
        <stop offset="65%" stopColor="#EDE4D5" />
        <stop offset="100%" stopColor="#CBBFA9" />
      </linearGradient>
      <linearGradient id="ped-top-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCF9F4" />
        <stop offset="100%" stopColor="#E9DFCF" />
      </linearGradient>
      <filter id="ped-drop" x="-15%" y="-20%" width="130%" height="150%">
        <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#5C482C" floodOpacity="0.18" />
      </filter>
    </defs>

    <ellipse cx="380" cy="182" rx="330" ry="26" fill="#B5A48B" fillOpacity="0.28" />

    <g filter="url(#ped-drop)" transform="translate(0, 6) rotate(-4 380 140)">
      <path
        d="M110 138 C110 156, 650 156, 650 138 L650 166 C650 184, 110 184, 110 166 Z"
        fill="url(#ped-side-1)"
      />
      <ellipse cx="380" cy="138" rx="270" ry="20" fill="url(#ped-top-1)" stroke="#E2D8C7" strokeWidth="1" />
    </g>

    <g filter="url(#ped-drop)" transform="translate(0, 2) rotate(-4 380 115)">
      <path
        d="M155 110 C155 126, 605 126, 605 110 L605 136 C605 152, 155 152, 155 136 Z"
        fill="url(#ped-side-1)"
      />
      <ellipse cx="380" cy="110" rx="225" ry="17" fill="url(#ped-top-1)" stroke="#E5DBCB" strokeWidth="1" />
    </g>

    <g filter="url(#ped-drop)" transform="rotate(-4 380 86)">
      <path
        d="M200 82 C200 96, 560 96, 560 82 L560 107 C560 121, 200 121, 200 107 Z"
        fill="url(#ped-side-1)"
      />
      <ellipse cx="380" cy="82" rx="180" ry="14" fill="url(#ped-top-1)" stroke="#EAE0D0" strokeWidth="1" />
      <ellipse cx="382" cy="84" rx="85" ry="7" fill="#9E8762" fillOpacity="0.22" />
    </g>
  </svg>
);

/* 3. Signature "Mayuri Haar" 22K Gold Peacock & Burmese Ruby Necklace */
export const MayuriHaarSVG = ({ className = '', idPrefix = 'mh' }) => {
  const leftPeacocks = [
    { x: 175, y: 120, r: 22, rot: -65, scale: 0.78 },
    { x: 182, y: 158, r: 25, rot: -52, scale: 0.85 },
    { x: 196, y: 198, r: 28, rot: -38, scale: 0.92 },
    { x: 218, y: 237, r: 30, rot: -25, scale: 0.98 },
    { x: 248, y: 270, r: 32, rot: -14, scale: 1.04 },
    { x: 285, y: 294, r: 34, rot: -5, scale: 1.08 }
  ];

  const rightPeacocks = leftPeacocks.map((p) => ({
    x: 640 - p.x,
    y: p.y,
    r: p.r,
    rot: -p.rot,
    scale: p.scale,
    flip: true
  }));

  const renderPeacockMedallion = (p, idx, side) => {
    const dir = side === 'left' ? 1 : -1;
    return (
      <g
        key={`${side}-${idx}`}
        transform={`translate(${p.x}, ${p.y}) rotate(${p.rot}) scale(${p.scale})`}
        filter={`url(#${idPrefix}-softShadow)`}
      >
        {[-26, -15, -4, 7, 18, 28].map((ang, i) => {
          const rad = ((ang + (side === 'left' ? 145 : 35)) * Math.PI) / 180;
          const px = Math.cos(rad) * 38;
          const py = Math.sin(rad) * 38;
          const px2 = Math.cos(rad) * 48;
          const py2 = Math.sin(rad) * 48;
          return (
            <g key={i}>
              <line x1={px * 0.75} y1={py * 0.75} x2={px2} y2={py2} stroke="#B88928" strokeWidth="1.3" />
              <circle cx={px} cy={py} r="2.3" fill={`url(#${idPrefix}-goldRadial)`} />
              <ellipse
                cx={px2}
                cy={py2}
                rx="5.2"
                ry="6.8"
                transform={`rotate(${ang}, ${px2}, ${py2})`}
                fill={`url(#${idPrefix}-pearl)`}
              />
              <circle cx={px2 - 1.5} cy={py2 - 2} r="1.4" fill="#FFFFFF" fillOpacity="0.9" />
            </g>
          );
        })}

        {Array.from({ length: 16 }).map((_, b) => {
          const a = (b * Math.PI * 2) / 16;
          return (
            <circle
              key={b}
              cx={Math.cos(a) * 29}
              cy={Math.sin(a) * 29}
              r="3.2"
              fill={`url(#${idPrefix}-goldRadial)`}
            />
          );
        })}

        <circle cx="0" cy="0" r="27" fill={`url(#${idPrefix}-goldRadial)`} stroke="#8D6014" strokeWidth="1.1" />
        <circle cx="0" cy="0" r="23" fill={`url(#${idPrefix}-gold22k)`} stroke="#FBE59B" strokeWidth="0.8" />

        {[-48, -32, -16, 0, 16, 32, 48].map((fAng, fIdx) => (
          <g key={fIdx} transform={`rotate(${fAng})`}>
            <path
              d="M0 4 C-4 -6, -5 -18, 0 -22 C5 -18, 4 -6, 0 4 Z"
              fill={`url(#${idPrefix}-goldRadial)`}
              stroke="#7A500D"
              strokeWidth="0.75"
            />
            <ellipse cx="0" cy="-16" rx="2" ry="3" fill="#9E6E1A" />
            <circle cx="0" cy="-16.5" r="1" fill="#FFF2B8" />
          </g>
        ))}

        <path
          d={
            dir === 1
              ? 'M-6 14 C-14 10, -12 -2, -3 -5 C4 -8, 10 -18, 6 -25 C4 -28, 9 -30, 12 -26 C16 -18, 12 -4, 6 6 C2 14, -2 16, -6 14 Z'
              : 'M6 14 C14 10, 12 -2, 3 -5 C-4 -8, -10 -18, -6 -25 C-4 -28, -9 -30, -12 -26 C-16 -18, -12 -4, -6 6 C-2 14, 2 16, 6 14 Z'
          }
          fill={`url(#${idPrefix}-goldRadial)`}
          stroke="#754C0B"
          strokeWidth="0.9"
        />

        <ellipse cx={dir * -2} cy="8" rx="9" ry="6" fill={`url(#${idPrefix}-goldRadial)`} stroke="#855810" strokeWidth="0.8" />
        <circle cx={dir * 8} cy="-25" r="1.8" fill="#6E091B" />
        <circle cx="0" cy="9" r="2.5" fill={`url(#${idPrefix}-polki)`} stroke="#8D6014" strokeWidth="0.7" />
      </g>
    );
  };

  return (
    <svg viewBox="0 0 640 490" className={className} fill="none">
      <SharedJewelleryDefs idPrefix={idPrefix} />

      <g filter={`url(#${idPrefix}-softShadow)`}>
        <path
          d="M192 52 C184 74, 178 96, 175 120"
          stroke={`url(#${idPrefix}-gold22k)`}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M192 52 C184 74, 178 96, 175 120"
          stroke="#7A5210"
          strokeWidth="6"
          strokeDasharray="2 3"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
        <circle cx="179" cy="96" r="5" fill={`url(#${idPrefix}-goldRadial)`} stroke="#855810" strokeWidth="0.8" />

        <path
          d="M448 52 C456 74, 462 96, 465 120"
          stroke={`url(#${idPrefix}-gold22k)`}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M448 52 C456 74, 462 96, 465 120"
          stroke="#7A5210"
          strokeWidth="6"
          strokeDasharray="2 3"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
        <circle cx="461" cy="96" r="5" fill={`url(#${idPrefix}-goldRadial)`} stroke="#855810" strokeWidth="0.8" />
      </g>

      <path
        d="M182 115 C190 225, 245 288, 320 298 C395 288, 450 225, 458 115"
        stroke={`url(#${idPrefix}-gold22k)`}
        strokeWidth="5"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {leftPeacocks.map((p, idx) => renderPeacockMedallion(p, idx, 'left'))}
      {rightPeacocks.map((p, idx) => renderPeacockMedallion(p, idx, 'right'))}

      <g transform="translate(320, 304)" filter={`url(#${idPrefix}-softShadow)`}>
        <circle cx="0" cy="0" r="13" fill={`url(#${idPrefix}-goldRadial)`} stroke="#7A500D" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="7.5" ry="9.5" fill={`url(#${idPrefix}-ruby)`} stroke="#F9DF8D" strokeWidth="1.2" />
        <ellipse cx="-2.2" cy="-3" rx="2" ry="3.2" fill="#FFFFFF" fillOpacity="0.45" />
      </g>

      <g transform="translate(320, 382)" filter={`url(#${idPrefix}-shadow)`}>
        {[-62, -50, -38, -26, -13, 0, 13, 26, 38, 50, 62].map((ang, i) => {
          const rad = ((ang + 90) * Math.PI) / 180;
          const rStart = 54;
          const rEnd = 70 + (5 - Math.abs(i - 5)) * 2.2;
          const x1 = Math.cos(rad) * (rStart * 0.86);
          const y1 = Math.sin(rad) * rStart - 4;
          const x2 = Math.cos(rad) * (rEnd * 0.86);
          const y2 = Math.sin(rad) * rEnd - 2;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B88928" strokeWidth="1.5" />
              <circle cx={x1 + (x2 - x1) * 0.45} cy={y1 + (y2 - y1) * 0.45} r="2.8" fill={`url(#${idPrefix}-goldRadial)`} />
              <ellipse
                cx={x2}
                cy={y2 + 3}
                rx="6.4"
                ry="8.8"
                transform={`rotate(${ang * 0.45}, ${x2}, ${y2 + 3})`}
                fill={`url(#${idPrefix}-pearl)`}
              />
              <circle cx={x2 - 2} cy={y2} r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
              <circle cx={x2} cy={y2 + 11.5} r="1.8" fill={`url(#${idPrefix}-goldRadial)`} />
            </g>
          );
        })}

        <path
          d="M0 -64 C28 -52, 52 -12, 50 22 C48 50, 26 66, 0 66 C-26 66, -48 50, -50 22 C-52 -12, -28 -52, 0 -64 Z"
          fill={`url(#${idPrefix}-goldRadial)`}
          stroke="#7A500D"
          strokeWidth="1.4"
        />

        {Array.from({ length: 22 }).map((_, i) => {
          const t = (i / 22) * Math.PI * 2;
          const tx = Math.sin(t) * (43 - 8 * Math.cos(t));
          const ty = -Math.cos(t) * 53 + 4;
          return (
            <circle
              key={i}
              cx={tx}
              cy={ty}
              r="4.2"
              fill={`url(#${idPrefix}-goldRadial)`}
              stroke="#8A5C12"
              strokeWidth="0.7"
            />
          );
        })}

        <path
          d="M0 -52 C22 -40, 41 -8, 39 20 C37 42, 20 54, 0 54 C-20 54, -37 42, -39 20 C-41 -8, -22 -40, 0 -52 Z"
          fill="#8E6012"
          stroke="#FCE699"
          strokeWidth="1.2"
        />

        {Array.from({ length: 18 }).map((_, i) => {
          const t = (i / 18) * Math.PI * 2;
          const px = Math.sin(t) * (31 - 5.5 * Math.cos(t));
          const py = -Math.cos(t) * 39 + 5;
          return (
            <g key={i}>
              <circle cx={px} cy={py} r="4.6" fill={`url(#${idPrefix}-pearl)`} stroke="#C7A65C" strokeWidth="0.6" />
              <circle cx={px - 1.3} cy={py - 1.3} r="1.3" fill="#FFFFFF" />
            </g>
          );
        })}

        <path
          d="M0 -36 C15 -26, 27 -3, 26 16 C25 32, 13 41, 0 41 C-13 41, -25 32, -26 16 C-27 -3, -15 -26, 0 -36 Z"
          fill={`url(#${idPrefix}-gold22k)`}
          stroke="#FFF1B5"
          strokeWidth="1.3"
        />

        <path
          d="M0 -31 C13 -22, 23 -2, 22 15 C21 29, 11 36, 0 36 C-11 36, -21 29, -22 15 C-23 -2, -13 -22, 0 -31 Z"
          fill={`url(#${idPrefix}-ruby)`}
        />

        <path
          d="M-6 -18 C-12 -8, -14 6, -11 18 C-8 14, -7 0, -3 -14 Z"
          fill="#FFFFFF"
          fillOpacity="0.38"
        />
        <ellipse cx="6" cy="20" rx="6" ry="3.5" transform="rotate(-25 6 20)" fill="#FF5C77" fillOpacity="0.3" />
      </g>
    </svg>
  );
};

/* 4. Collections Slide 01/04: BRIDAL Set */
export const BridalSetSVG = ({ className = '' }) => (
  <svg viewBox="0 0 900 540" className={className} fill="none">
    <SharedJewelleryDefs idPrefix="br" />

    <g transform="translate(135, 455) rotate(-8)" filter="url(#br-softShadow)" className="floating-piece-slow">
      <ellipse cx="0" cy="0" rx="64" ry="20" stroke="url(#br-gold22k)" strokeWidth="7" />
      <ellipse cx="0" cy="0" rx="64" ry="20" stroke="#FFF2B8" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="-48" cy="12" r="4" fill="url(#br-ruby)" stroke="url(#br-gold22k)" strokeWidth="1.2" />
      <circle cx="48" cy="12" r="4" fill="url(#br-emerald)" stroke="url(#br-gold22k)" strokeWidth="1.2" />
    </g>

    <g transform="translate(765, 115) rotate(12)" filter="url(#br-softShadow)" className="floating-piece-med">
      <ellipse cx="0" cy="6" rx="22" ry="12" stroke="url(#br-gold22k)" strokeWidth="6" />
      <rect x="-12" y="-10" width="24" height="14" rx="5" fill="url(#br-goldRadial)" stroke="#7D540E" strokeWidth="0.9" />
      <ellipse cx="0" cy="-3" rx="7" ry="4.5" fill="url(#br-ruby)" />
      <circle cx="-8" cy="-3" r="2.2" fill="url(#br-polki)" />
      <circle cx="8" cy="-3" r="2.2" fill="url(#br-polki)" />
    </g>

    <g transform="translate(755, 315)" filter="url(#br-softShadow)" className="floating-piece-slow">
      <circle cx="0" cy="0" r="14" fill="url(#br-goldRadial)" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <circle
          key={i}
          cx={Math.cos((a * Math.PI) / 180) * 9}
          cy={Math.sin((a * Math.PI) / 180) * 9}
          r="4"
          fill="url(#br-gold22k)"
          stroke="#8A5D12"
          strokeWidth="0.6"
        />
      ))}
      <circle cx="0" cy="0" r="4" fill="url(#br-ruby)" />
      <path d="M35 -35 L52 38" stroke="url(#br-gold22k)" strokeWidth="1.8" strokeOpacity="0.6" />
      <circle cx="52" cy="40" r="3.5" fill="url(#br-goldRadial)" />
    </g>

    <g transform="translate(328, 310) rotate(5)" filter="url(#br-shadow)">
      <circle cx="0" cy="-58" r="14" fill="url(#br-goldRadial)" stroke="#8A5D12" strokeWidth="0.9" />
      <ellipse cx="0" cy="-58" rx="6.5" ry="8.5" fill="url(#br-emerald)" />
      <path
        d="M-26 -24 C-26 -44, 26 -44, 26 -24 C26 2, -26 2, -26 -24 Z"
        fill="url(#br-goldRadial)"
        stroke="#8A5D12"
        strokeWidth="1"
      />
      <circle cx="0" cy="-26" r="11" fill="url(#br-polki)" stroke="url(#br-gold22k)" strokeWidth="2" />
      <circle cx="0" cy="-26" r="4.5" fill="url(#br-ruby)" />
      {[-22, -14, -6, 2, 10, 18, 24].map((x, i) => (
        <ellipse key={i} cx={x} cy="-4" rx="2.8" ry="4" fill="url(#br-ruby)" />
      ))}
      <path
        d="M-24 26 C-24 4, 24 4, 24 26 L26 34 L-26 34 Z"
        fill="url(#br-goldRadial)"
        stroke="#8A5D12"
        strokeWidth="1"
      />
      {[-22, -15, -8, 0, 8, 15, 22].map((x, i) => (
        <circle key={i} cx={x} cy="40" r="3.5" fill="url(#br-pearl)" />
      ))}
    </g>

    <g transform="translate(592, 260) rotate(-4)" filter="url(#br-shadow)">
      <circle cx="0" cy="-58" r="14" fill="url(#br-goldRadial)" stroke="#8A5D12" strokeWidth="0.9" />
      <ellipse cx="0" cy="-58" rx="6.5" ry="8.5" fill="url(#br-emerald)" />
      <path
        d="M-26 -24 C-26 -44, 26 -44, 26 -24 C26 2, -26 2, -26 -24 Z"
        fill="url(#br-goldRadial)"
        stroke="#8A5D12"
        strokeWidth="1"
      />
      <circle cx="0" cy="-26" r="11" fill="url(#br-polki)" stroke="url(#br-gold22k)" strokeWidth="2" />
      <circle cx="0" cy="-26" r="4.5" fill="url(#br-ruby)" />
      {[-22, -14, -6, 2, 10, 18, 24].map((x, i) => (
        <ellipse key={i} cx={x} cy="-4" rx="2.8" ry="4" fill="url(#br-ruby)" />
      ))}
      <path
        d="M-24 26 C-24 4, 24 4, 24 26 L26 34 L-26 34 Z"
        fill="url(#br-goldRadial)"
        stroke="#8A5D12"
        strokeWidth="1"
      />
      {[-22, -15, -8, 0, 8, 15, 22].map((x, i) => (
        <circle key={i} cx={x} cy="40" r="3.5" fill="url(#br-pearl)" />
      ))}
    </g>

    <g transform="translate(465, 210)" filter="url(#br-shadow)">
      <path
        d="M-58 18 C-48 110, -28 185, 0 215 C28 185, 48 110, 58 18"
        stroke="url(#br-gold22k)"
        strokeWidth="14"
        strokeDasharray="6 4"
      />
      <path
        d="M-66 22 C-55 120, -32 195, 0 226 C32 195, 55 120, 66 22"
        stroke="url(#br-pearl)"
        strokeWidth="6"
        strokeDasharray="4 5"
      />
      <circle cx="-42" cy="115" r="6" fill="url(#br-ruby)" stroke="url(#br-gold22k)" strokeWidth="2" />
      <circle cx="42" cy="115" r="6" fill="url(#br-ruby)" stroke="url(#br-gold22k)" strokeWidth="2" />
      <circle cx="-25" cy="175" r="6" fill="url(#br-emerald)" stroke="url(#br-gold22k)" strokeWidth="2" />
      <circle cx="25" cy="175" r="6" fill="url(#br-emerald)" stroke="url(#br-gold22k)" strokeWidth="2" />

      <g transform="translate(0, 242)">
        <circle cx="0" cy="-34" r="9" fill="url(#br-goldRadial)" />
        <circle cx="0" cy="-34" r="4" fill="url(#br-ruby)" />
        <circle cx="0" cy="0" r="32" fill="url(#br-goldRadial)" stroke="#7D540E" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="24" fill="url(#br-polki)" stroke="url(#br-gold22k)" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="8" ry="11" fill="url(#br-emerald)" stroke="url(#br-gold22k)" strokeWidth="1.5" />
        {[-55, -36, -18, 0, 18, 36, 55].map((a, i) => {
          const rad = ((a + 90) * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={Math.cos(rad) * 38}
              cy={Math.sin(rad) * 38}
              rx="3.8"
              ry="5.5"
              fill={i % 2 === 0 ? 'url(#br-ruby)' : 'url(#br-emerald)'}
            />
          );
        })}
      </g>

      <path
        d="M-82 -82 C-55 -48, 55 -48, 82 -82 L106 -16 C55 42, -55 42, -106 -16 Z"
        fill="url(#br-goldRadial)"
        stroke="#7D540E"
        strokeWidth="1.5"
      />
      <path
        d="M-76 -66 C-48 -36, 48 -36, 76 -66"
        stroke="url(#br-polki)"
        strokeWidth="7"
        strokeDasharray="7 4"
      />
      <path
        d="M-92 -26 C-48 18, 48 18, 92 -26"
        stroke="url(#br-polki)"
        strokeWidth="8"
        strokeDasharray="8 4"
      />
      <rect x="-54" y="-58" width="14" height="18" rx="4" transform="rotate(14 -47 -49)" fill="url(#br-ruby)" stroke="#FCE79C" strokeWidth="1.5" />
      <rect x="-7" y="-48" width="14" height="18" rx="4" fill="url(#br-emerald)" stroke="#FCE79C" strokeWidth="1.5" />
      <rect x="40" y="-58" width="14" height="18" rx="4" transform="rotate(-14 47 -49)" fill="url(#br-ruby)" stroke="#FCE79C" strokeWidth="1.5" />

      <ellipse cx="0" cy="6" rx="9" ry="12" fill="url(#br-ruby)" stroke="#FCE79C" strokeWidth="1.8" />
      {[-78, -62, -46, -30, -15, 0, 15, 30, 46, 62, 78].map((x, i) => {
        const yOff = 24 - (x * x) / 220;
        return (
          <g key={i} transform={`translate(${x}, ${yOff})`}>
            <circle cx="0" cy="0" r="3.5" fill="url(#br-pearl)" />
            <ellipse
              cx="0"
              cy="9"
              rx="3.8"
              ry="5.8"
              fill={i % 2 === 0 ? 'url(#br-ruby)' : 'url(#br-emerald)'}
            />
          </g>
        );
      })}
    </g>
  </svg>
);

/* 5. Collections Slide 02/04: TEMPLE Set */
export const TempleSetSVG = ({ className = '' }) => {
  const coins = [];
  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    coins.push({
      x: 505 - t * 68 - Math.sin(t * Math.PI) * 18,
      y: 48 + t * 295,
      rot: 15 - t * 25
    });
    coins.push({
      x: 645 - t * 175 + Math.sin(t * Math.PI) * 14,
      y: 38 + t * 305,
      rot: -18 + t * 30
    });
  }

  return (
    <svg viewBox="0 0 900 540" className={className} fill="none">
      <SharedJewelleryDefs idPrefix="tm" />

      <g transform="translate(88, 225) rotate(-6)" filter="url(#tm-softShadow)" className="floating-piece-med">
        <ellipse cx="0" cy="4" rx="28" ry="11" stroke="url(#tm-goldAntique)" strokeWidth="7" />
        <circle cx="0" cy="-4" r="6" fill="url(#tm-ruby)" stroke="#F5D77F" strokeWidth="1.3" />
        <circle cx="-11" cy="-2" r="3" fill="url(#tm-polki)" />
        <circle cx="11" cy="-2" r="3" fill="url(#tm-polki)" />
      </g>

      <g transform="translate(148, 350)" filter="url(#tm-softShadow)" className="floating-piece-slow">
        <path d="M0 0 C2 22, -6 40, -10 56" stroke="url(#tm-goldAntique)" strokeWidth="2" />
        <circle cx="-10" cy="58" r="3.5" fill="url(#tm-pearl)" />
        <circle cx="0" cy="0" r="18" fill="url(#tm-goldRadial)" stroke="#7A5210" strokeWidth="1" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <circle
            key={i}
            cx={Math.cos((a * Math.PI) / 180) * 11}
            cy={Math.sin((a * Math.PI) / 180) * 11}
            r="5"
            fill="url(#tm-goldAntique)"
          />
        ))}
        <circle cx="0" cy="0" r="5" fill="url(#tm-ruby)" />
      </g>

      <g transform="translate(765, 118)" filter="url(#tm-softShadow)">
        <circle cx="0" cy="0" r="18" stroke="url(#tm-goldAntique)" strokeWidth="2.5" strokeOpacity="0.65" />
      </g>
      <g transform="translate(790, 320)" filter="url(#tm-softShadow)">
        <circle cx="0" cy="0" r="20" stroke="url(#tm-goldAntique)" strokeWidth="2.5" strokeOpacity="0.65" />
      </g>

      <g filter="url(#tm-shadow)">
        <line x1="408" y1="88" x2="480" y2="150" stroke="url(#tm-goldAntique)" strokeWidth="2.5" />
        <line x1="498" y1="45" x2="480" y2="150" stroke="url(#tm-goldAntique)" strokeWidth="2.5" />

        {coins.map((c, idx) => (
          <g key={idx} transform={`translate(${c.x}, ${c.y}) rotate(${c.rot})`}>
            <ellipse
              cx="0"
              cy="0"
              rx="15"
              ry="13"
              fill="url(#tm-goldAntique)"
              stroke="#6B470E"
              strokeWidth="0.9"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="11.5"
              ry="9.5"
              stroke="#FCE79C"
              strokeWidth="0.6"
              strokeDasharray="1.5 1.5"
            />
            <circle cx="0" cy="-3" r="2.5" fill="#7D540E" />
            <path d="M-4 4 C-2 -1, 2 -1, 4 4 Z" fill="#7D540E" />
          </g>
        ))}

        <g transform="translate(442, 368)">
          <circle cx="0" cy="0" r="26" fill="url(#tm-goldAntique)" stroke="#5E3D0A" strokeWidth="1.2" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
            <circle
              key={i}
              cx={Math.cos((a * Math.PI) / 180) * 19}
              cy={Math.sin((a * Math.PI) / 180) * 19}
              r="3.2"
              fill="url(#tm-ruby)"
            />
          ))}
          <circle cx="0" cy="0" r="12" fill="url(#tm-goldRadial)" stroke="#6B470E" strokeWidth="1" />
          <circle cx="0" cy="0" r="5.5" fill="url(#tm-ruby)" />
        </g>
      </g>
    </svg>
  );
};

/* 6. Collections Slide 03/04: DAILY WEAR Set */
export const DailyWearSetSVG = ({ className = '' }) => (
  <svg viewBox="0 0 900 540" className={className} fill="none">
    <SharedJewelleryDefs idPrefix="dw" />

    <g transform="translate(88, 250)" filter="url(#dw-softShadow)" className="floating-piece-slow">
      <circle cx="0" cy="0" r="28" stroke="url(#dw-gold22k)" strokeWidth="2.8" />
    </g>

    <g transform="translate(135, 420)" filter="url(#dw-softShadow)" className="floating-piece-med">
      <circle cx="-12" cy="-34" r="5.5" fill="url(#dw-goldRadial)" />
      <circle cx="10" cy="-38" r="5.5" fill="url(#dw-goldRadial)" />
      <circle cx="0" cy="0" r="25" stroke="url(#dw-gold22k)" strokeWidth="3" />
    </g>

    <g transform="translate(425, 200)" filter="url(#dw-softShadow)" className="floating-piece-slow">
      <ellipse cx="-14" cy="8" rx="13" ry="16" transform="rotate(18 -14 8)" stroke="url(#dw-gold22k)" strokeWidth="3.2" />
      <ellipse cx="18" cy="-8" rx="13" ry="16" transform="rotate(18 18 -8)" stroke="url(#dw-gold22k)" strokeWidth="3.2" />
    </g>

    <g transform="translate(760, 108)" filter="url(#dw-softShadow)">
      <circle cx="-8" cy="0" r="4" fill="url(#dw-goldRadial)" />
      <circle cx="8" cy="4" r="4" fill="url(#dw-goldRadial)" />
    </g>

    <g transform="translate(765, 275)" filter="url(#dw-softShadow)" className="floating-piece-med">
      <circle cx="0" cy="0" r="38" stroke="url(#dw-gold22k)" strokeWidth="1.8" strokeOpacity="0.7" />
      <circle cx="28" cy="24" r="10" stroke="url(#dw-gold22k)" strokeWidth="2.4" />
      <circle cx="48" cy="20" r="10" stroke="url(#dw-gold22k)" strokeWidth="2.4" />
    </g>

    <g filter="url(#dw-shadow)">
      <path
        d="M395 140 L488 455 L655 125"
        stroke="url(#dw-gold22k)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(488, 468)">
        <circle cx="0" cy="-12" r="3" stroke="url(#dw-gold22k)" strokeWidth="2" />
        <path
          d="M0 -8 C6 0, 8 12, 0 18 C-8 12, -6 0, 0 -8 Z"
          fill="url(#dw-goldRadial)"
          stroke="#8F6314"
          strokeWidth="0.8"
        />
      </g>

      <g transform="translate(515, 298)">
        <ellipse
          cx="-24"
          cy="4"
          rx="16"
          ry="42"
          transform="rotate(8 -24 4)"
          stroke="url(#dw-gold22k)"
          strokeWidth="8.5"
        />
        <ellipse
          cx="-24"
          cy="4"
          rx="16"
          ry="42"
          transform="rotate(8 -24 4)"
          stroke="#FFF5C8"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
        <ellipse
          cx="24"
          cy="0"
          rx="16"
          ry="42"
          transform="rotate(8 24 0)"
          stroke="url(#dw-gold22k)"
          strokeWidth="8.5"
        />
        <ellipse
          cx="24"
          cy="0"
          rx="16"
          ry="42"
          transform="rotate(8 24 0)"
          stroke="#FFF5C8"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />

        <circle cx="-16" cy="76" r="8.5" fill="url(#dw-goldRadial)" stroke="#9E6E1A" strokeWidth="0.8" />
        <circle cx="-18" cy="73" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />
        <circle cx="14" cy="74" r="8.5" fill="url(#dw-goldRadial)" stroke="#9E6E1A" strokeWidth="0.8" />
        <circle cx="12" cy="71" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />
      </g>
    </g>
  </svg>
);

/* 7. Collections Slide 04/04: GIFTING Set */
export const GiftingSetSVG = ({ className = '' }) => {
  const links = Array.from({ length: 15 }).map((_, i) => {
    const t = i / 14;
    return {
      x: 350 + t * 320,
      y: 445 - t * 325
    };
  });

  return (
    <svg viewBox="0 0 900 540" className={className} fill="none">
      <SharedJewelleryDefs idPrefix="gf" />

      <g transform="translate(135, 365)" filter="url(#gf-softShadow)" className="floating-piece-slow">
        <circle cx="-62" cy="-78" r="4.5" fill="url(#gf-goldRadial)" />
        <circle cx="-46" cy="-74" r="4.5" fill="url(#gf-goldRadial)" />
        <circle cx="0" cy="0" r="54" stroke="url(#gf-gold22k)" strokeWidth="3.5" />
        <path d="M-12 -54 C0 -64, 18 -62, 34 -56" stroke="url(#gf-gold22k)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-16" cy="24" r="14" stroke="url(#gf-gold22k)" strokeWidth="2.8" />
        <circle cx="16" cy="26" r="14" stroke="url(#gf-gold22k)" strokeWidth="2.8" />
      </g>

      <g transform="translate(432, 196)" filter="url(#gf-softShadow)" className="floating-piece-med">
        <circle cx="0" cy="0" r="34" stroke="url(#gf-gold22k)" strokeWidth="2.4" strokeOpacity="0.75" />
        <path d="M-10 -34 C-4 -42, 8 -42, 18 -38" stroke="url(#gf-gold22k)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      <g transform="translate(760, 92)" filter="url(#gf-softShadow)">
        <ellipse cx="-8" cy="0" rx="4" ry="8" transform="rotate(20 -8 0)" stroke="url(#gf-gold22k)" strokeWidth="2.2" />
        <ellipse cx="8" cy="4" rx="4" ry="8" transform="rotate(20 8 4)" stroke="url(#gf-gold22k)" strokeWidth="2.2" />
      </g>
      <g transform="translate(772, 265)" filter="url(#gf-shadow)" className="floating-piece-slow">
        <path d="M-55 -65 L0 42 L55 -75" stroke="url(#gf-gold22k)" strokeWidth="2.4" />
        <circle cx="0" cy="58" r="18" fill="url(#gf-goldRadial)" stroke="#8F6314" strokeWidth="1" />
        <circle cx="0" cy="58" r="13" stroke="#FFF2B8" strokeWidth="0.7" strokeDasharray="2 2" />
      </g>

      <g filter="url(#gf-shadow)">
        {links.map((pt, i) => (
          <g key={i} transform={`translate(${pt.x}, ${pt.y}) rotate(-45)`}>
            <rect
              x="-18"
              y="-10"
              width="36"
              height="20"
              rx="10"
              stroke="url(#gf-roseGold)"
              strokeWidth="6.5"
              fill="none"
            />
            <rect
              x="-18"
              y="-10"
              width="36"
              height="20"
              rx="10"
              stroke="#FFF0E8"
              strokeWidth="1.2"
              strokeOpacity="0.7"
              fill="none"
            />
          </g>
        ))}

        <g transform="translate(520, 298) rotate(-8)">
          <circle cx="0" cy="-18" r="5" stroke="url(#gf-roseGold)" strokeWidth="3" />
          <path
            d="M0 22 C-22 8, -28 -12, -14 -20 C-5 -25, 0 -16, 0 -12 C0 -16, 5 -25, 14 -20 C28 -12, 22 8, 0 22 Z"
            fill="url(#gf-roseGold)"
            stroke="#8F5640"
            strokeWidth="1"
          />
          <ellipse cx="-7" cy="-9" rx="5" ry="3.5" transform="rotate(-30 -7 -9)" fill="#FFF5F0" fillOpacity="0.65" />
        </g>
      </g>
    </svg>
  );
};

/* 8. Individual Pieces for the 12-Hour Daily Wear Clock Dial */
export const ClockPieceSVG = ({ type, className = '' }) => {
  switch (type) {
    case 'pendant-coin':
      return (
        <svg viewBox="0 0 80 90" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp12" />
          <path d="M18 8 L40 58 L62 8" stroke="url(#cp12-gold22k)" strokeWidth="2.2" />
          <circle cx="40" cy="68" r="12" fill="url(#cp12-goldRadial)" stroke="#8F6314" strokeWidth="1" />
          <circle cx="40" cy="68" r="8.5" stroke="#FFF2B8" strokeWidth="0.7" strokeDasharray="2 2" />
        </svg>
      );
    case 'studs-gold':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp1" />
          <circle cx="28" cy="42" r="7.5" fill="url(#cp1-goldRadial)" stroke="#8F6314" strokeWidth="0.8" />
          <circle cx="26" cy="39.5" r="2.2" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="52" cy="40" r="7.5" fill="url(#cp1-goldRadial)" stroke="#8F6314" strokeWidth="0.8" />
          <circle cx="50" cy="37.5" r="2.2" fill="#FFFFFF" fillOpacity="0.85" />
        </svg>
      );
    case 'hoops-small':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp2" />
          <circle cx="26" cy="42" r="12" stroke="url(#cp2-gold22k)" strokeWidth="3.5" />
          <circle cx="54" cy="40" r="12" stroke="url(#cp2-gold22k)" strokeWidth="3.5" />
        </svg>
      );
    case 'ring-band':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp3" />
          <circle cx="40" cy="40" r="19" stroke="url(#cp3-gold22k)" strokeWidth="3.5" />
          <circle cx="40" cy="21" r="3" fill="url(#cp3-polki)" stroke="#8F6314" strokeWidth="0.8" />
        </svg>
      );
    case 'chain-drop':
      return (
        <svg viewBox="0 0 80 90" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp4" />
          <path d="M16 14 L40 60 L64 14" stroke="url(#cp4-gold22k)" strokeWidth="2" />
          <line x1="40" y1="60" x2="40" y2="74" stroke="url(#cp4-gold22k)" strokeWidth="2" />
          <ellipse cx="40" cy="78" rx="4" ry="6" fill="url(#cp4-goldRadial)" />
        </svg>
      );
    case 'bangle-oval':
      return (
        <svg viewBox="0 0 90 70" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp5" />
          <ellipse cx="45" cy="36" rx="30" ry="12" transform="rotate(-10 45 36)" stroke="url(#cp5-gold22k)" strokeWidth="4.5" />
        </svg>
      );
    case 'ring-floral':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp6" />
          <circle cx="40" cy="40" r="11" fill="url(#cp6-goldRadial)" />
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <circle
              key={i}
              cx={40 + Math.cos((a * Math.PI) / 180) * 8}
              cy={40 + Math.sin((a * Math.PI) / 180) * 8}
              r="3.8"
              fill="url(#cp6-gold22k)"
              stroke="#7D540E"
              strokeWidth="0.6"
            />
          ))}
          <circle cx="40" cy="40" r="3.5" fill="url(#cp6-ruby)" />
        </svg>
      );
    case 'bracelet-charm':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp7" />
          <circle cx="40" cy="38" r="21" stroke="url(#cp7-gold22k)" strokeWidth="2.2" />
          <path d="M35 17 C40 11, 47 11, 52 15" stroke="url(#cp7-gold22k)" strokeWidth="2" />
          <circle cx="25" cy="56" r="2.8" fill="url(#cp7-goldRadial)" />
          <circle cx="40" cy="63" r="2.8" fill="url(#cp7-goldRadial)" />
          <circle cx="55" cy="56" r="2.8" fill="url(#cp7-goldRadial)" />
        </svg>
      );
    case 'earrings-drop':
      return (
        <svg viewBox="0 0 80 80" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp8" />
          <g transform="translate(28, 22)">
            <circle cx="0" cy="0" r="3.5" fill="url(#cp8-goldRadial)" />
            <line x1="0" y1="3" x2="0" y2="24" stroke="url(#cp8-gold22k)" strokeWidth="2" />
            <circle cx="0" cy="28" r="5" fill="url(#cp8-pearl)" stroke="#C9972C" strokeWidth="0.7" />
          </g>
          <g transform="translate(50, 20)">
            <circle cx="0" cy="0" r="3.5" fill="url(#cp8-goldRadial)" />
            <line x1="0" y1="3" x2="0" y2="24" stroke="url(#cp8-gold22k)" strokeWidth="2" />
            <circle cx="0" cy="28" r="5" fill="url(#cp8-pearl)" stroke="#C9972C" strokeWidth="0.7" />
          </g>
        </svg>
      );
    case 'ring-ruby':
      return (
        <svg viewBox="0 0 80 70" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp9" />
          <ellipse cx="40" cy="38" rx="22" ry="9" stroke="url(#cp9-goldAntique)" strokeWidth="6" />
          <circle cx="40" cy="31" r="4.5" fill="url(#cp9-ruby)" stroke="#FCE79C" strokeWidth="1.2" />
          <circle cx="30" cy="33" r="2.5" fill="url(#cp9-polki)" />
          <circle cx="50" cy="33" r="2.5" fill="url(#cp9-polki)" />
        </svg>
      );
    case 'bracelet-chain':
      return (
        <svg viewBox="0 0 90 90" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp10" />
          <circle cx="45" cy="46" r="27" stroke="url(#cp10-gold22k)" strokeWidth="2.4" />
          <path d="M36 19 C44 12, 54 12, 62 18" stroke="url(#cp10-gold22k)" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'chain-beaded':
    default:
      return (
        <svg viewBox="0 0 90 100" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="cp11" />
          <path d="M18 10 C22 52, 30 82, 45 84 C60 82, 68 52, 72 10" stroke="url(#cp11-gold22k)" strokeWidth="2" />
          <path
            d="M22 40 C27 68, 34 82, 45 84 C56 82, 63 68, 68 40"
            stroke="#2B2118"
            strokeWidth="3.5"
            strokeDasharray="2.5 4"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

/* 9. Five Craftsmanship Architectural Line-Art Illustrations */
export const CraftStepSVG = ({ type, className = '' }) => {
  switch (type) {
    case 'sketch':
      return (
        <svg viewBox="0 0 180 130" className={className} fill="none">
          <rect x="28" y="20" width="96" height="80" rx="2" stroke="#5A4B38" strokeWidth="1.2" fill="#FBF7EE" fillOpacity="0.5" />
          <path d="M46 66 C48 38, 104 38, 106 66" stroke="#8C734B" strokeWidth="1.2" strokeDasharray="3 3" />
          {[-50, -30, -10, 10, 30, 50].map((a, i) => {
            const rad = ((a - 90) * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={76 + Math.cos(rad) * 28}
                cy={66 + Math.sin(rad) * 24}
                r="2.2"
                stroke="#7A623E"
                strokeWidth="1"
              />
            );
          })}
          <ellipse cx="76" cy="70" rx="5" ry="7.5" stroke="#6E5634" strokeWidth="1.2" />
          <line x1="71" y1="70" x2="81" y2="70" stroke="#8C734B" strokeWidth="0.8" />
          <g transform="translate(126, 86) rotate(-42)">
            <rect x="-28" y="-4" width="48" height="8" stroke="#4A3C2C" strokeWidth="1.2" fill="#F6EFE2" />
            <polygon points="-28,-4 -38,0 -28,4" stroke="#4A3C2C" strokeWidth="1.2" fill="#D4AF53" />
            <line x1="12" y1="-4" x2="12" y2="4" stroke="#4A3C2C" strokeWidth="1" />
          </g>
        </svg>
      );
    case 'wax':
      return (
        <svg viewBox="0 0 180 130" className={className} fill="none">
          <polygon points="35,54 85,36 125,52 75,70" stroke="#4A3C2C" strokeWidth="1.2" fill="#FBF7EE" fillOpacity="0.45" />
          <polygon points="35,54 75,70 75,102 35,86" stroke="#4A3C2C" strokeWidth="1.2" fill="#EFE6D5" fillOpacity="0.45" />
          <polygon points="75,70 125,52 125,84 75,102" stroke="#4A3C2C" strokeWidth="1.2" fill="#E5D9C3" fillOpacity="0.45" />
          <ellipse cx="80" cy="53" rx="22" ry="9" stroke="#9C7A3C" strokeWidth="1.3" strokeDasharray="3 2" />
          <circle cx="80" cy="59" r="3" stroke="#9C7A3C" strokeWidth="1.2" />
          <line x1="118" y1="48" x2="148" y2="20" stroke="#4A3C2C" strokeWidth="1.5" />
          <polygon points="112,53 120,45 123,48 115,56" fill="#C59B43" stroke="#4A3C2C" strokeWidth="1" />
        </svg>
      );
    case 'cast':
      return (
        <svg viewBox="0 0 180 130" className={className} fill="none">
          <g transform="translate(68, 36) rotate(24)">
            <path d="M-18 -14 L18 -14 L13 14 L-13 14 Z" stroke="#4A3C2C" strokeWidth="1.2" fill="#FBF7EE" fillOpacity="0.5" />
            <line x1="-36" y1="-6" x2="-16" y2="-6" stroke="#4A3C2C" strokeWidth="1.3" />
            <line x1="-36" y1="2" x2="-15" y2="2" stroke="#4A3C2C" strokeWidth="1.3" />
          </g>
          <path d="M86 44 C94 52, 96 64, 96 76" stroke="#C59B43" strokeWidth="2.2" strokeDasharray="4 2" />
          <circle cx="72" cy="84" r="2.2" fill="#C59B43" />
          <circle cx="80" cy="82" r="2.2" fill="#C59B43" />
          <rect x="82" y="74" width="44" height="24" rx="2" stroke="#4A3C2C" strokeWidth="1.2" fill="#FBF7EE" fillOpacity="0.5" />
          <ellipse cx="104" cy="86" rx="4.5" ry="6.5" stroke="#9C7A3C" strokeWidth="1.3" fill="#E5BD54" fillOpacity="0.4" />
        </svg>
      );
    case 'set':
      return (
        <svg viewBox="0 0 180 130" className={className} fill="none">
          <circle cx="72" cy="58" r="24" stroke="#4A3C2C" strokeWidth="1.3" fill="#FBF7EE" fillOpacity="0.5" />
          <circle cx="72" cy="58" r="20" stroke="#9C7A3C" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="89" y1="75" x2="105" y2="91" stroke="#302418" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="72" cy="58" rx="6" ry="8.5" stroke="#9C7A3C" strokeWidth="1.4" fill="#E5BD54" fillOpacity="0.35" />
          <circle cx="72" cy="44" r="1.5" fill="#9C7A3C" />
          <circle cx="72" cy="72" r="1.5" fill="#9C7A3C" />
          <circle cx="58" cy="58" r="1.5" fill="#9C7A3C" />
          <circle cx="86" cy="58" r="1.5" fill="#9C7A3C" />
          <line x1="118" y1="54" x2="152" y2="24" stroke="#4A3C2C" strokeWidth="1.4" />
          <line x1="121" y1="57" x2="155" y2="27" stroke="#4A3C2C" strokeWidth="1.4" />
        </svg>
      );
    case 'polish':
    default:
      return (
        <svg viewBox="0 0 180 130" className={className} fill="none">
          <ellipse cx="78" cy="64" rx="34" ry="20" stroke="#9C7A3C" strokeWidth="1.6" />
          <ellipse cx="78" cy="64" rx="28" ry="15" stroke="#C59B43" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="110" y1="42" x2="144" y2="14" stroke="#4A3C2C" strokeWidth="1.5" />
          <circle cx="106" cy="46" r="6" stroke="#9C7A3C" strokeWidth="1.2" fill="#FBF7EE" />
          <path d="M54 44 L54 50 M51 47 L57 47" stroke="#C59B43" strokeWidth="1.2" />
          <path d="M104 72 L104 78 M101 75 L107 75" stroke="#C59B43" strokeWidth="1.2" />
        </svg>
      );
  }
};

/* 10. Five Festive Edit Dark Velvet Luxury Card Visuals */
export const FestiveCardVisual = ({ type, className = '' }) => {
  switch (type) {
    case 'coins':
      return (
        <svg viewBox="0 0 260 320" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="fc1" />
          <g opacity="0.35" stroke="#6E5228" strokeWidth="1">
            <line x1="0" y1="70" x2="260" y2="15" />
            <line x1="0" y1="135" x2="260" y2="80" />
            <line x1="0" y1="200" x2="260" y2="145" />
            <line x1="0" y1="265" x2="260" y2="210" />
          </g>
          {[
            { x: 52, y: 78, bar: false },
            { x: 118, y: 64, bar: false },
            { x: 185, y: 50, bar: false },
            { x: 40, y: 136, bar: false },
            { x: 96, y: 125, bar: false },
            { x: 148, y: 112, bar: true },
            { x: 215, y: 98, bar: false },
            { x: 64, y: 192, bar: false },
            { x: 122, y: 178, bar: false },
            { x: 182, y: 165, bar: false },
            { x: 102, y: 235, bar: true },
            { x: 162, y: 222, bar: false }
          ].map((item, i) =>
            item.bar ? (
              <g key={i} transform={`translate(${item.x}, ${item.y}) rotate(-28)`} filter="url(#fc1-softShadow)">
                <rect x="-12" y="-18" width="24" height="36" rx="4" fill="url(#fc1-gold22k)" stroke="#FFF3C4" strokeWidth="0.8" />
                <rect x="-8" y="-13" width="16" height="26" rx="2" stroke="#8F6314" strokeWidth="0.6" />
              </g>
            ) : (
              <g key={i} transform={`translate(${item.x}, ${item.y})`} filter="url(#fc1-softShadow)">
                <circle cx="0" cy="0" r="14" fill="url(#fc1-goldRadial)" stroke="#FFF2B8" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="10" stroke="#8F6314" strokeWidth="0.6" strokeDasharray="2 2" />
              </g>
            )
          )}
        </svg>
      );

    case 'bridal':
      return (
        <svg viewBox="0 0 260 320" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="fc2" />
          <g transform="translate(130, 130)" filter="url(#fc2-shadow)">
            <path d="M-65 -30 C-95 -55, -75 -75, -45 -50" stroke="url(#fc2-gold22k)" strokeWidth="2.5" />
            <path
              d="M-68 -24 C-38 8, 38 8, 68 -24 L82 14 C42 52, -42 52, -82 14 Z"
              fill="url(#fc2-goldRadial)"
              stroke="#FFF2B8"
              strokeWidth="1"
            />
            <path d="M-62 -8 C-32 22, 32 22, 62 -8" stroke="url(#fc2-polki)" strokeWidth="6" strokeDasharray="6 3" />
            <path d="M-72 8 C-36 38, 36 38, 72 8" stroke="url(#fc2-polki)" strokeWidth="6" strokeDasharray="6 3" />
            {[-64, -48, -32, -16, 0, 16, 32, 48, 64].map((x, i) => (
              <g key={i} transform={`translate(${x}, ${32 - (x * x) / 180})`}>
                <circle cx="0" cy="0" r="3" fill="url(#fc2-pearl)" />
                <ellipse cx="0" cy="7" rx="3.2" ry="5" fill={i % 2 === 0 ? 'url(#fc2-emerald)' : 'url(#fc2-ruby)'} />
              </g>
            ))}
            <g transform="translate(-32, 85)">
              <circle cx="0" cy="-14" r="6" fill="url(#fc2-goldRadial)" />
              <circle cx="0" cy="4" r="14" fill="url(#fc2-polki)" stroke="url(#fc2-gold22k)" strokeWidth="3" />
              <circle cx="0" cy="4" r="5" fill="url(#fc2-ruby)" />
            </g>
            <g transform="translate(36, 48)">
              <circle cx="0" cy="-14" r="6" fill="url(#fc2-goldRadial)" />
              <circle cx="0" cy="4" r="14" fill="url(#fc2-polki)" stroke="url(#fc2-gold22k)" strokeWidth="3" />
              <circle cx="0" cy="4" r="5" fill="url(#fc2-emerald)" />
            </g>
          </g>
        </svg>
      );

    case 'temple':
      return (
        <svg viewBox="0 0 260 320" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="fc3" />
          <g transform="translate(130, 125)" filter="url(#fc3-shadow)">
            {Array.from({ length: 19 }).map((_, i) => {
              const ang = ((i - 9) * 11 * Math.PI) / 180;
              const x = Math.sin(ang) * 74;
              const y = Math.cos(ang) * 66 - 24;
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="8"
                  ry="12"
                  transform={`rotate(${(i - 9) * -9}, ${x}, ${y})`}
                  fill="url(#fc3-goldRadial)"
                  stroke="#7D540E"
                  strokeWidth="0.8"
                />
              );
            })}
            <g transform="translate(16, 68)">
              <circle cx="0" cy="0" r="28" fill="url(#fc3-goldRadial)" stroke="#7D540E" strokeWidth="1" />
              <circle cx="0" cy="0" r="20" stroke="url(#fc3-ruby)" strokeWidth="3.5" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="8" fill="url(#fc3-ruby)" />
            </g>
            <g transform="translate(-14, 0)">
              <circle cx="0" cy="-10" r="6" fill="url(#fc3-goldRadial)" />
              <circle cx="0" cy="4" r="10" fill="url(#fc3-goldRadial)" stroke="url(#fc3-ruby)" strokeWidth="2" />
            </g>
            <g transform="translate(18, -8)">
              <circle cx="0" cy="-10" r="6" fill="url(#fc3-goldRadial)" />
              <circle cx="0" cy="4" r="10" fill="url(#fc3-goldRadial)" stroke="url(#fc3-ruby)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      );

    case 'bangles':
      return (
        <svg viewBox="0 0 260 320" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="fc4" />
          <g transform="translate(130, 145)" filter="url(#fc4-shadow)">
            {[-45, -27, -9, 9, 27, 45].map((x, i) => (
              <g key={i} transform={`translate(${x}, 0)`}>
                <rect
                  x="-8"
                  y="-52"
                  width="16"
                  height="104"
                  rx="8"
                  fill="url(#fc4-gold22k)"
                  stroke="#7D540E"
                  strokeWidth="0.9"
                />
                {[-36, -18, 0, 18, 36].map((y, j) => (
                  <circle key={j} cx="0" cy={y} r="3.5" fill="url(#fc4-goldRadial)" />
                ))}
              </g>
            ))}
          </g>
        </svg>
      );

    case 'giftbox':
    default:
      return (
        <svg viewBox="0 0 260 320" className={className} fill="none">
          <SharedJewelleryDefs idPrefix="fc5" />
          <g transform="translate(130, 145)" filter="url(#fc5-shadow)">
            <rect
              x="-62"
              y="-58"
              width="124"
              height="116"
              rx="14"
              transform="rotate(-8)"
              fill="#1E140E"
              stroke="url(#fc5-gold22k)"
              strokeWidth="1.2"
              strokeOpacity="0.55"
            />
            <path d="M-24 -52 L-6 14 L28 -50" stroke="url(#fc5-gold22k)" strokeWidth="2.2" />
            <circle cx="-6" cy="26" r="14" fill="url(#fc5-goldRadial)" stroke="#FFF2B8" strokeWidth="0.8" />
            <circle cx="-26" cy="2" r="6.5" fill="url(#fc5-goldRadial)" />
            <circle cx="20" cy="6" r="6.5" fill="url(#fc5-goldRadial)" />
          </g>
        </svg>
      );
  }
};
