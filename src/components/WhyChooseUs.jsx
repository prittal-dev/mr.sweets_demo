import React from 'react';
import { Award, ArrowRight, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenInquire }) {
  const pills = [
    {
      id: 0,
      deg: -3.5,
      bg: 'bg-[#FFBC00]',
      shadow: 'shadow-[0_10px_25px_rgba(255,188,0,0.35)]',
      hoverShadow: 'hover:shadow-[0_16px_35px_rgba(255,188,0,0.5)]',
      textBold: 'Formats?',
      boldColor: 'text-[#0F172A]',
      textItalic: "We make 'em.",
      italicColor: 'text-[#C8102E]'
    },
    {
      id: 1,
      deg: 2.5,
      bg: 'bg-[#C8102E]',
      shadow: 'shadow-[0_10px_25px_rgba(200,16,46,0.35)]',
      hoverShadow: 'hover:shadow-[0_16px_35px_rgba(200,16,46,0.5)]',
      textBold: 'Great treats',
      boldColor: 'text-white',
      textItalic: 'for everyone.',
      italicColor: 'text-[#FFBC00]'
    },
    {
      id: 2,
      deg: -2,
      bg: 'bg-[#38BFA7]',
      shadow: 'shadow-[0_10px_25px_rgba(56,191,167,0.35)]',
      hoverShadow: 'hover:shadow-[0_16px_35px_rgba(56,191,167,0.5)]',
      textBold: 'Zero',
      boldColor: 'text-[#0F172A]',
      textItalic: 'shortcuts.',
      italicColor: 'text-[#0F172A]'
    },
    {
      id: 3,
      deg: 3,
      bg: 'bg-[#2563EB]',
      shadow: 'shadow-[0_10px_25px_rgba(37,99,235,0.35)]',
      hoverShadow: 'hover:shadow-[0_16px_35px_rgba(37,99,235,0.5)]',
      textBold: 'Never hard',
      boldColor: 'text-white',
      textItalic: 'to find.',
      italicColor: 'text-[#FFBC00]'
    },
    {
      id: 4,
      deg: 1.5,
      bg: 'bg-[#FFA7BF]',
      shadow: 'shadow-[0_10px_25px_rgba(255,167,191,0.4)]',
      hoverShadow: 'hover:shadow-[0_16px_35px_rgba(255,167,191,0.55)]',
      textBold: 'Solve for India.',
      boldColor: 'text-[#0F172A]',
      textItalic: 'Win anywhere.',
      italicColor: 'text-[#C8102E]'
    }
  ];

  return (
    <section
      id="why-choose"
      className="w-full bg-[#FAF7EE] text-[#111827] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EFE9DA] relative overflow-hidden"
    >
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,188,0,0.08)_0%,rgba(250,247,238,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>THE MR. SWEET ADVANTAGE</span>
          </div>

          <h2 className="text-section-display font-outfit font-black text-[#111827] tracking-tight mb-4">
            Why Retailers & Confectionery Lovers{' '}
            <span className="font-serif-italic text-[#C8102E] font-normal block sm:inline">
              Choose Mr. Sweet.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Combining 30+ years of confectionery heritage with automated continuous conching, certified food safety standards, and nationwide distribution power.
          </p>
        </div>

        {/* PLAYFUL STICKER COLLAGE CLUSTER */}
        <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-5 md:gap-y-6 my-6 sm:my-8 px-2 max-w-5xl mx-auto select-none">
          {/* Row 1: Yellow Pill + Red Pill */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 md:gap-x-6 gap-y-3.5 sm:gap-y-4.5 w-full">
            {/* Pill 1: Formats? We make 'em. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ '--rot': `${pills[0].deg}deg` }}
              className={`pill-sticker ${pills[0].bg} ${pills[0].shadow} ${pills[0].hoverShadow} my-1 sm:my-1.5 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5`}
            >
              <span className={`font-outfit font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[0].boldColor} tracking-tight leading-none`}>
                {pills[0].textBold}
              </span>
              <span className={`font-playfair italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[0].italicColor} ml-2.5 sm:ml-3.5 leading-none`}>
                {pills[0].textItalic}
              </span>
            </button>

            {/* Red Plus 1 */}
            <span className="text-[#C8102E] font-black text-2xl sm:text-3xl md:text-4xl select-none leading-none px-1">
              +
            </span>

            {/* Pill 2: Great treats for everyone. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ '--rot': `${pills[1].deg}deg` }}
              className={`pill-sticker ${pills[1].bg} ${pills[1].shadow} ${pills[1].hoverShadow} my-1 sm:my-1.5 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full cursor-pointer flex items-center shrink-0 border border-white/10`}
            >
              <span className={`font-outfit font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[1].boldColor} tracking-tight leading-none`}>
                {pills[1].textBold}
              </span>
              <span className={`font-playfair italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[1].italicColor} ml-2.5 sm:ml-3.5 leading-none`}>
                {pills[1].textItalic}
              </span>
            </button>

            {/* Red Plus 2 */}
            <span className="text-[#C8102E] font-black text-2xl sm:text-3xl md:text-4xl select-none leading-none px-1 hidden lg:inline">
              +
            </span>
          </div>

          {/* Row 2: Mint Pill + Blue Pill */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 md:gap-x-6 gap-y-3.5 sm:gap-y-4.5 w-full">
            {/* Pill 3: Zero shortcuts. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ '--rot': `${pills[2].deg}deg` }}
              className={`pill-sticker ${pills[2].bg} ${pills[2].shadow} ${pills[2].hoverShadow} my-1 sm:my-1.5 px-6 sm:px-8 md:px-9 py-3 sm:py-4 md:py-5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5`}
            >
              <span className={`font-outfit font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[2].boldColor} tracking-tight leading-none`}>
                {pills[2].textBold}
              </span>
              <span className={`font-playfair italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[2].italicColor} ml-2.5 sm:ml-3.5 leading-none`}>
                {pills[2].textItalic}
              </span>
            </button>

            {/* Red Plus 3 */}
            <span className="text-[#C8102E] font-black text-2xl sm:text-3xl md:text-4xl select-none leading-none px-1">
              +
            </span>

            {/* Pill 4: Never hard to find. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ '--rot': `${pills[3].deg}deg` }}
              className={`pill-sticker ${pills[3].bg} ${pills[3].shadow} ${pills[3].hoverShadow} my-1 sm:my-1.5 px-6 sm:px-8 md:px-9 py-3 sm:py-4 md:py-5 rounded-full cursor-pointer flex items-center shrink-0 border border-white/10`}
            >
              <span className={`font-outfit font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[3].boldColor} tracking-tight leading-none`}>
                {pills[3].textBold}
              </span>
              <span className={`font-playfair italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[3].italicColor} ml-2.5 sm:ml-3.5 leading-none`}>
                {pills[3].textItalic}
              </span>
            </button>

            {/* Red Plus 4 */}
            <span className="text-[#C8102E] font-black text-2xl sm:text-3xl md:text-4xl select-none leading-none px-1 hidden lg:inline">
              +
            </span>
          </div>

          {/* Row 3: Pink Pill: Solve for India. Win anywhere. */}
          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ '--rot': `${pills[4].deg}deg` }}
              className={`pill-sticker ${pills[4].bg} ${pills[4].shadow} ${pills[4].hoverShadow} my-1 sm:my-1.5 px-7 sm:px-10 md:px-12 py-3.5 sm:py-4.5 md:py-5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5`}
            >
              <span className={`font-outfit font-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[4].boldColor} tracking-tight leading-none`}>
                {pills[4].textBold}
              </span>
              <span className={`font-playfair italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] ${pills[4].italicColor} ml-2.5 sm:ml-3.5 leading-none`}>
                {pills[4].textItalic}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenInquire}
            className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#9B0B21] text-white font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-glow transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Partner with Mr. Sweet Wholesale</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
