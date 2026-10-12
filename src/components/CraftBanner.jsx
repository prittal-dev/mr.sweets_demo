import React from 'react';

export default function CraftBanner({ onSelectCategory, selectedCategory = 'all' }) {
  const categories = [
    {
      id: 'all',
      label: 'COMPLETE RANGE',
      icon: (
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-none stroke-white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left: Mini Wafer Cone */}
          <g transform="translate(12, 30) rotate(-14)">
            <path d="M12 28 L24 62 L36 28 Z" />
            <line x1="16" y1="38" x2="31" y2="34" strokeWidth="1.8" />
            <line x1="19" y1="48" x2="28" y2="44" strokeWidth="1.8" />
            <line x1="18" y1="32" x2="27" y2="52" strokeWidth="1.8" />
            <line x1="30" y1="32" x2="21" y2="52" strokeWidth="1.8" />
            <path d="M11 28 C11 21, 17 19, 24 19 C31 19, 37 21, 37 28 C37 32, 11 32, 11 28 Z" />
            <path d="M17 19 C19 13, 24 11, 28 13 C32 15, 31 19, 31 19" />
            <path d="M18 28 C18 33, 21 33, 21 28" />
          </g>

          {/* Center-Right: Chocolate Bar */}
          <g transform="translate(46, 24) rotate(10)">
            <rect x="0" y="0" width="32" height="42" rx="4" />
            <rect x="4" y="4" width="10" height="15" rx="1.5" strokeWidth="2" />
            <rect x="18" y="4" width="10" height="15" rx="1.5" strokeWidth="2" />
            <rect x="4" y="23" width="10" height="15" rx="1.5" strokeWidth="2" />
            <rect x="18" y="23" width="10" height="15" rx="1.5" strokeWidth="2" />
          </g>

          {/* Top: Fun Pops Lollipop Stick & Swirl */}
          <g transform="translate(48, 4) rotate(18)">
            <line x1="20" y1="22" x2="20" y2="44" strokeWidth="2.5" />
            <circle cx="20" cy="12" r="10" />
            <path d="M20 12 A 3 3 0 0 1 22 10 A 6 6 0 0 1 26 14" strokeWidth="1.8" />
          </g>

          {/* Sparkle stars */}
          <path d="M16 16 L18 11 L20 16 L25 18 L20 20 L18 25 L16 20 L11 18 Z" fill="white" stroke="none" />
          <circle cx="85" cy="20" r="1.5" fill="white" />
          <circle cx="12" cy="74" r="1.5" fill="white" />
        </svg>
      )
    },
    {
      id: 'cones',
      label: 'WAFER CONES',
      icon: (
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-none stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Wafer Cone triangle body */}
          <path d="M27 45 L50 93 L73 45 Z" />

          {/* Diamond waffle-grid texture lines */}
          <line x1="34" y1="57" x2="66" y2="57" strokeWidth="1.8" />
          <line x1="41" y1="71" x2="59" y2="71" strokeWidth="1.8" />
          <line x1="46" y1="83" x2="54" y2="83" strokeWidth="1.8" />

          <line x1="33" y1="48" x2="62" y2="76" strokeWidth="1.8" />
          <line x1="42" y1="47" x2="56" y2="83" strokeWidth="1.8" />
          <line x1="67" y1="48" x2="38" y2="76" strokeWidth="1.8" />
          <line x1="58" y1="47" x2="44" y2="83" strokeWidth="1.8" />

          {/* Rolled rim & chocolate crown */}
          <path d="M22 45 C22 37, 32 37, 50 37 C68 37, 78 37, 78 45 C78 49, 22 49, 22 45 Z" />

          {/* Luscious soft-serve cream swirls */}
          <path d="M26 37 C28 27, 40 25, 50 25 C60 25, 72 27, 74 37" />
          <path d="M36 25 C40 15, 48 11, 54 11 C58 11, 62 17, 62 25" />
          <path d="M54 11 C58 8, 63 10, 62 15" />

          {/* Decadent chocolate drip curves */}
          <path d="M38 45 C38 53, 42 53, 42 45" />
          <path d="M58 45 C58 51, 62 51, 62 45" />

          {/* Crunchy Swiss wafer stick */}
          <line x1="64" y1="28" x2="80" y2="12" strokeWidth="3" />
          <line x1="66" y1="26" x2="82" y2="10" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'chocolates',
      label: 'CHOCOLATES',
      icon: (
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-none stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Chocolate Bar in background (tilted) */}
          <g transform="translate(16, 12) rotate(-8)">
            <rect x="0" y="0" width="46" height="58" rx="5" />
            
            {/* Foil wrapper peel */}
            <path d="M0 38 L14 34 L28 40 L46 36" strokeDasharray="3 2" strokeWidth="1.5" />

            {/* 4 Snap blocks with beveled border */}
            <rect x="6" y="6" width="14" height="12" rx="2" strokeWidth="2" />
            <rect x="26" y="6" width="14" height="12" rx="2" strokeWidth="2" />
            <rect x="6" y="21" width="14" height="12" rx="2" strokeWidth="2" />
            <rect x="26" y="21" width="14" height="12" rx="2" strokeWidth="2" />
            
            {/* Inner debossed squares */}
            <rect x="9" y="9" width="8" height="6" rx="1" strokeWidth="1.2" />
            <rect x="29" y="9" width="8" height="6" rx="1" strokeWidth="1.2" />
          </g>

          {/* Gold Coin 999.9 in foreground */}
          <g transform="translate(48, 44)">
            {/* Outer coin rim */}
            <circle cx="22" cy="22" r="22" strokeWidth="2.5" />
            {/* Inner milled border */}
            <circle cx="22" cy="22" r="18" strokeDasharray="3.5 2" strokeWidth="1.5" />
            {/* 999.9 Hallmark text */}
            <text
              x="22"
              y="22"
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              stroke="none"
              fontSize="9.5"
              fontWeight="900"
              fontFamily="Outfit, sans-serif"
              letterSpacing="-0.5px"
            >
              999.9
            </text>
            {/* Crown emblem above hallmark */}
            <path d="M19 12 L22 9 L25 12 L23.5 13 L20.5 13 Z" fill="white" stroke="none" />
          </g>
        </svg>
      )
    },
    {
      id: 'candies',
      label: 'CANDIES',
      icon: (
        <svg
          viewBox="0 0 100 100"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-none stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Main Fun Pops Swirl Lollipop */}
          <g transform="translate(28, 8)">
            {/* Lollipop Stick */}
            <line x1="22" y1="42" x2="22" y2="82" strokeWidth="3" />

            {/* Round Candy Disc Head */}
            <circle cx="22" cy="22" r="20" strokeWidth="2.5" />

            {/* Elegant concentric candy swirl pattern */}
            <path
              d="M22 22 
                 A 4 4 0 0 1 26 22 
                 A 8 8 0 0 1 18 27 
                 A 13 13 0 0 1 33 17 
                 A 17 17 0 0 1 9 29"
              strokeWidth="2.2"
            />

            {/* Wrapper twist / decorative bow */}
            <path d="M16 42 L10 47 L17 49 Z" />
            <path d="M28 42 L34 47 L27 49 Z" />
          </g>

          {/* Chewy wrapped candy on left */}
          <g transform="translate(8, 48) rotate(-22) scale(0.65)">
            <rect x="14" y="8" width="30" height="20" rx="10" strokeWidth="2.5" />
            <line x1="22" y1="10" x2="26" y2="26" strokeWidth="2" />
            <line x1="30" y1="10" x2="34" y2="26" strokeWidth="2" />
            <path d="M14 18 L2 10 L6 18 L2 26 Z" strokeWidth="2.5" />
            <path d="M44 18 L56 10 L52 18 L56 26 Z" strokeWidth="2.5" />
          </g>

          {/* Sparkles */}
          <path d="M82 22 L84 17 L86 22 L91 24 L86 26 L84 31 L82 26 L77 24 Z" fill="white" stroke="none" />
          <circle cx="16" cy="26" r="1.5" fill="white" />
        </svg>
      )
    }
  ];

  const handleClick = (id) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#C8102E] text-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleClick(cat.id)}
                className="flex flex-col items-center justify-center group focus:outline-none cursor-pointer perspective-1000 select-none"
              >
                {/* 3D Flipping Card Container */}
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-3 sm:mb-4 transition-transform duration-500 ease-out preserve-3d group-hover-flip shadow-lg ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  {/* FRONT FACE (White Outline Icon on Brand Red Pod) */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-full border-2 sm:border-[2.5px] border-white flex items-center justify-center backface-hidden bg-[#C8102E] transition-all duration-300 ${
                      isSelected
                        ? 'ring-4 ring-amber-300 ring-offset-2 ring-offset-[#C8102E] bg-white/10'
                        : ''
                    }`}
                  >
                    {cat.icon}
                  </div>

                  {/* BACK FACE (Flipped 3D: White Circle, Crimson "EXPLORE" Button) */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-full border-2 sm:border-[2.5px] border-white flex flex-col items-center justify-center backface-hidden rotate-y-180 bg-white text-[#C8102E] shadow-2xl p-2"
                  >
                    <span className="font-outfit font-black text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#C8102E] leading-none mb-1.5">
                      EXPLORE
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C8102E] text-white shadow-xs">
                      <span className="text-xs sm:text-sm leading-none font-bold">→</span>
                    </span>
                  </div>
                </div>

                {/* Category Label Below */}
                <span
                  className={`font-outfit font-black tracking-wider text-xs sm:text-sm md:text-base uppercase transition-colors text-center ${
                    isSelected
                      ? 'text-amber-300 underline underline-offset-4 decoration-amber-300'
                      : 'text-white group-hover:text-amber-200'
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
