import React from 'react';
import { Flame, Sparkles, Sun, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function CraftBanner() {
  const ingredients = [
    {
      icon: '🧈',
      title: 'A2 Organic Desi Ghee',
      desc: 'Slow-clarified from Gir cows for rich aroma and digestive warmth.'
    },
    {
      icon: '🌸',
      title: 'Kashmiri Mogra Saffron',
      desc: 'Grade-A hand-picked threads from Pampore valleys.'
    },
    {
      icon: '🌰',
      title: 'Mamra & Marcona Nuts',
      desc: 'Hand-selected Iranian pistachios and Kashmiri almonds.'
    },
    {
      icon: '✨',
      title: '24K Edible Gold & Silver',
      desc: 'Certified pure food-grade precious metal vark leafing.'
    },
    {
      icon: '🍫',
      title: 'Valrhona Cocoa Butter',
      desc: 'Single-origin conched chocolate for ultra-silky fusion pedas.'
    }
  ];

  return (
    <section className="w-full bg-[#18110F] text-[#EFE8DA] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#362823] relative overflow-hidden">
      {/* Background Subtle Shimmer Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING PURITY & CRAFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Single-Origin Ingredients.{' '}
            <span className="font-serif-italic text-[#D4AF37] font-normal">
              Pure Traditional Alchemy.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Every Mr. Sweet creation is slow-churned without artificial preservatives, high-fructose syrups, or synthetic dyes. Made fresh daily in our ISO-certified confectionery atelier.
          </p>
        </div>

        {/* 5 Ingredient Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ingredients.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#231815] border border-[#362823] p-5 rounded-2xl sm:rounded-3xl hover:border-[#D4AF37]/50 hover:bg-[#2A1D1A] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#110C0A] border border-[#362823] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#362823] flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                <span>100% Traceable</span>
                <span>Atelier Grade</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
