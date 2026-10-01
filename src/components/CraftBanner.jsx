import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CraftBanner() {
  const ingredients = [
    {
      icon: '🍫',
      title: 'Rich Dutch Cocoa',
      desc: 'Velvety cocoa solids blended for smooth Dairy Cones, Brawo rice bars, and gold coins.',
      badge1: '100% Veg',
      badge2: 'Pure Cocoa'
    },
    {
      icon: '🍦',
      title: 'Crispy Wafer Cones',
      desc: 'Golden-baked multi-layer wafers foil-wrapped to preserve signature crunch.',
      badge1: 'Airtight Sealed',
      badge2: 'Fresh Baked'
    },
    {
      icon: '🍓',
      title: 'Real Fruit Flavors',
      desc: 'Authentic fruit pectin formulations power Bunny Pops & Sundae Jellies.',
      badge1: 'Natural Taste',
      badge2: 'Gelatin-Free'
    },
    {
      icon: '🎁',
      title: 'Safe Surprise Toys',
      desc: 'Non-toxic, child-safe collectible toys packaged inside Krispy Toy & Mr. Joe boxes.',
      badge1: 'Child Safe',
      badge2: 'BIS Certified'
    },
    {
      icon: '🪙',
      title: 'Hygiene Sealed Tubs',
      desc: 'Airtight food-grade containers protect Gold Coins & Morning Jelly Tubs.',
      badge1: 'Food Grade',
      badge2: 'ISO 22000'
    }
  ];

  return (
    <section className="w-full bg-[#18110F] text-[#EFE8DA] py-8 sm:py-16 px-3 sm:px-6 lg:px-8 border-y border-[#362823] relative overflow-hidden">
      {/* Background Subtle Shimmer Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[#D4AF37] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1.5 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>SIGNATURE QUALITY & INGREDIENT MASTERY</span>
          </div>
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Real Cocoa. Crispy Wafers.{' '}
            <span className="font-serif-italic text-[#D4AF37] font-normal">
              Made with Pure Joy.
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-4 font-normal leading-relaxed hidden sm:block">
            Every Mr. Sweet delight is crafted using premium cocoa extracts, multi-layer crispy wafer cones, real fruit jellies, and zero animal gelatin in our ISO 22000 certified facility.
          </p>
        </div>

        {/* 5 Ingredient Highlight Cards - Compact Grid on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {ingredients.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#231815] border border-[#362823] p-3 sm:p-5 rounded-2xl hover:border-[#D4AF37]/50 hover:bg-[#2A1D1A] transition-all duration-300 group flex flex-col justify-between ${
                idx === ingredients.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#110C0A] border border-[#362823] flex items-center justify-center text-base sm:text-2xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 font-normal leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {item.desc}
                </p>
              </div>
              <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-[#362823] flex items-center justify-between text-[9px] sm:text-[11px] text-[#D4AF37] font-semibold">
                <span>{item.badge1}</span>
                <span>{item.badge2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
