import React from 'react';
import { Home, ShoppingBag, Phone } from 'lucide-react';
import PenguinIllustration from './PenguinIllustration';

export default function NotFoundPage({ onNavigate, onOpenInquire }) {
  const quickCategories = [
    { name: 'Romeo Choco Cones', filter: 'cone' },
    { name: 'Swiss Cocoa Wafers', filter: 'wafer' },
    { name: 'NutyMax Bars', filter: 'nuty' },
    { name: 'Gold Coin 999.9', filter: 'coin' },
    { name: 'Jellies & Lollipops', filter: 'jelly' },
    { name: 'Toys & Surprises', filter: 'toy' },
  ];

  return (
    <div className="min-h-[75vh] bg-[#D6F1EE] flex flex-col items-center justify-center px-4 py-6 sm:py-10 select-none relative overflow-hidden">
      {/* Subtle ice vignette glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#C4ECE8]/50 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative z-10">
        {/* Top Headings: Exactly like user's reference image but nicely scaled down */}
        <div className="text-center mb-1 sm:mb-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2A575F] tracking-tight leading-none uppercase font-outfit drop-shadow-2xs">
            SORRY
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#F15A24] tracking-wide uppercase mt-1 sm:mt-1.5 font-outfit">
            PAGE NOT FOUND
          </h2>
        </div>

        {/* Penguin Fishing on Ice Vector Illustration (Scaled to comfortable size) */}
        <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] my-1 sm:my-2">
          <PenguinIllustration />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#254A51]/80 max-w-md mx-auto text-center font-medium mt-1 mb-4 leading-relaxed px-4">
          The page you are looking for may have been moved, removed, or is temporarily unavailable. Let&apos;s get you back to the sweets!
        </p>

        {/* Action Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="inline-flex items-center gap-1.5 bg-[#F15A24] hover:bg-[#D94814] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go Back Home</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('products')}
            className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-white text-[#2A575F] border border-[#2A575F]/20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#F15A24]" />
            <span>Browse Products</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="inline-flex items-center gap-1.5 bg-[#2A575F] hover:bg-[#1E4147] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Trade Desk</span>
          </button>
        </div>

        {/* Popular Categories Shortcut */}
        <div className="pt-3 border-t border-[#2A575F]/15 w-full max-w-md text-center">
          <div className="text-[10px] uppercase font-extrabold tracking-widest text-[#2A575F]/75 mb-2 flex items-center justify-center gap-1">
            <span>Or explore our confectionery catalog</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {quickCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onNavigate && onNavigate('products')}
                className="text-[10px] sm:text-[11px] font-bold bg-white/80 hover:bg-white text-[#2A575F] hover:text-[#F15A24] px-2.5 py-1 rounded-full border border-[#2A575F]/15 shadow-2xs transition-all cursor-pointer"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
