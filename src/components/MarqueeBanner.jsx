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
      className={`w-full py-4 sm:py-5 overflow-hidden border-y shadow-inner ${
        isDark
          ? 'bg-[#7A0819] text-amber-300 border-[#5C0613]'
          : 'bg-[#9B0B21] text-amber-200 border-[#7A0819]'
      }`}
    >
      <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.22em] font-sans text-amber-300 drop-shadow-xs">
              {text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
