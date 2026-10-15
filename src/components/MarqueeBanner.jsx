import React from 'react';

export default function MarqueeBanner({ theme = 'dark' }) {
  const items = [
    'SWISS-GRADE CONCHING',
    'PURE DELIGHT',
    'AIRTIGHT CRISP SEALED',
    '50,000+ OUTLETS',
    'ISO 22000 CERTIFIED',
    '100% PURE VEGETARIAN',
    'ZERO ANIMAL GELATIN',
    'CRAFTED IN INDIA'
  ];

  const isDark = theme === 'dark';

  return (
    <div
      className={`w-full py-1.5 sm:py-3 md:py-3.5 overflow-hidden border-y shadow-xs ${
        isDark
          ? 'bg-[#7A0819] text-amber-300 border-[#5C0613]'
          : 'bg-[#9B0B21] text-amber-200 border-[#7A0819]'
      }`}
    >
      <div className="animate-marquee flex items-center gap-4 sm:gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-6 shrink-0">
            <span className="text-[9.5px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.22em] font-sans text-amber-300 drop-shadow-xs">
              {text}
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 shrink-0 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
