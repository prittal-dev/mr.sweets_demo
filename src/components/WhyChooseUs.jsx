import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  PackageCheck,
  TrendingUp,
  Truck,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs({ onOpenInquire }) {
  // 5 Organic Colorful Pill / Bubble Statements
  const bubbleStatements = [
    {
      id: 'formats',
      deg: -2.5,
      bg: 'bg-[#FFC72C]',
      textBold: 'Formats?',
      boldColor: 'text-[#18110F]',
      textItalic: "We make 'em.",
      italicColor: 'text-[#8B001D]',
      shadow: 'shadow-[0_10px_25px_rgba(255,199,44,0.35)]'
    },
    {
      id: 'treats',
      deg: 2,
      bg: 'bg-[#8B001D]',
      textBold: 'Great treats',
      boldColor: 'text-white',
      textItalic: 'for everyone.',
      italicColor: 'text-[#FFC72C]',
      shadow: 'shadow-[0_10px_25px_rgba(139,0,29,0.3)]'
    },
    {
      id: 'shortcuts',
      deg: -2,
      bg: 'bg-[#34D399]',
      textBold: 'Zero',
      boldColor: 'text-[#18110F]',
      textItalic: 'shortcuts.',
      italicColor: 'text-[#18110F]',
      shadow: 'shadow-[0_10px_25px_rgba(52,211,153,0.35)]'
    },
    {
      id: 'find',
      deg: 2.5,
      bg: 'bg-[#2563EB]',
      textBold: 'Never hard',
      boldColor: 'text-white',
      textItalic: 'to find.',
      italicColor: 'text-[#FFC72C]',
      shadow: 'shadow-[0_10px_25px_rgba(37,99,235,0.35)]'
    },
    {
      id: 'india',
      deg: 1,
      bg: 'bg-[#FDA4AF]',
      textBold: 'Solve for India.',
      boldColor: 'text-[#18110F]',
      textItalic: 'Win anywhere.',
      italicColor: 'text-[#8B001D]',
      shadow: 'shadow-[0_10px_25px_rgba(253,164,175,0.4)]'
    }
  ];

  // 4 Benefit Cards
  const benefitCards = [
    {
      id: 1,
      title: 'Premium Quality & Pure Veg',
      description:
        'Strict zero-gelatin formulation using natural plant pectin and certified Swiss-grade cocoa, ensuring premium quality product standards and authentic pure vegetarian integrity across all confections.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      tag: 'PREMIUM QUALITY CERTIFIED'
    },
    {
      id: 2,
      title: 'Crunch-Shield Packaging',
      description:
        'Multi-barrier moisture-lock foil wrapping and airtight snap-lid tubs keep wafer cones and rolls exceptionally crispy for up to 12 months under Indian weather.',
      icon: PackageCheck,
      iconColor: 'text-amber-700 bg-amber-50 border-amber-200',
      tag: 'MOISTURE BARRIER'
    },
    {
      id: 3,
      title: 'Consistent Retail Margins',
      description:
        'Clear ₹5, ₹10, and ₹15 impulse price points engineered for rapid counter turnover with protected margins for stockists, distributors, and retailers.',
      icon: TrendingUp,
      iconColor: 'text-[#8B001D] bg-red-50 border-red-200',
      tag: 'HIGH VELOCITY'
    },
    {
      id: 4,
      title: 'Reliable Depot Logistics',
      description:
        'Dedicated regional hubs across Northern, Western, and Central FMCG corridors ensuring rapid dispatch, minimal lead times, and steady wholesale inventory.',
      icon: Truck,
      iconColor: 'text-blue-700 bg-blue-50 border-blue-200',
      tag: 'NATIONWIDE FLEET'
    }
  ];

  return (
    <section
      id="why-choose"
      className="w-full bg-[#FAF6EE] text-[#18110F] py-8 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#EFE8DA] relative overflow-hidden"
    >
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,199,44,0.12)_0%,rgba(250,246,238,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            1. HEADER
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12"
        >
          {/* Small Yellow Pill */}
          <div className="inline-flex items-center bg-[#FFC72C] text-[#18110F] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-outfit font-black uppercase tracking-wider shadow-2xs mb-3 sm:mb-4">
            <span>THE MR. SWEET ADVANTAGE</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-[#18110F] tracking-tight leading-[1.08] mb-2.5 sm:mb-4">
            Why Retailers &amp; Confectionery Lovers{' '}
            <span className="font-serif-italic font-normal text-[#8B001D] block sm:inline">
              Choose Mr. Sweet
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto px-1 sm:px-2">
            Combining over 25 years of confectionery heritage with automated Swiss-grade continuous conching, strict pure vegetarian standards, and reliable nationwide distribution across 20+ states.
          </p>
        </motion.div>

        {/* =========================================================
            2. FEATURE STATEMENTS: 5 ORGANIC COLORFUL PILLS
            ========================================================= */}
        <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4 my-4 sm:my-8 px-1 max-w-5xl mx-auto select-none">
          {/* Row 1: Yellow Pill + Red Pill */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-2 w-full">
            {/* Pill 1: Formats? We make 'em. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ transform: `rotate(${bubbleStatements[0].deg}deg)` }}
              className={`${bubbleStatements[0].bg} ${bubbleStatements[0].shadow} px-3.5 sm:px-7 md:px-9 py-1.5 sm:py-3.5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5 hover:scale-105 active:scale-95 transition-transform duration-200`}
            >
              <span className={`font-outfit font-black text-xs sm:text-xl md:text-2xl ${bubbleStatements[0].boldColor} tracking-tight leading-none`}>
                {bubbleStatements[0].textBold}
              </span>
              <span className={`font-serif-italic font-normal text-xs sm:text-xl md:text-2xl ${bubbleStatements[0].italicColor} ml-1.5 sm:ml-2.5 leading-none`}>
                {bubbleStatements[0].textItalic}
              </span>
            </button>

            {/* Red Connector Plus */}
            <span className="text-[#8B001D] font-black text-sm sm:text-2xl select-none leading-none px-0.5 sm:px-1">
              +
            </span>

            {/* Pill 2: Great treats for everyone. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ transform: `rotate(${bubbleStatements[1].deg}deg)` }}
              className={`${bubbleStatements[1].bg} ${bubbleStatements[1].shadow} px-3.5 sm:px-7 md:px-9 py-1.5 sm:py-3.5 rounded-full cursor-pointer flex items-center shrink-0 border border-white/10 hover:scale-105 active:scale-95 transition-transform duration-200`}
            >
              <span className={`font-outfit font-black text-xs sm:text-xl md:text-2xl ${bubbleStatements[1].boldColor} tracking-tight leading-none`}>
                {bubbleStatements[1].textBold}
              </span>
              <span className={`font-serif-italic font-normal text-xs sm:text-xl md:text-2xl ${bubbleStatements[1].italicColor} ml-1.5 sm:ml-2.5 leading-none`}>
                {bubbleStatements[1].textItalic}
              </span>
            </button>
          </div>

          {/* Row 2: Mint Pill + Blue Pill */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-2 w-full">
            {/* Pill 3: Zero shortcuts. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ transform: `rotate(${bubbleStatements[2].deg}deg)` }}
              className={`${bubbleStatements[2].bg} ${bubbleStatements[2].shadow} px-3.5 sm:px-7 md:px-8 py-1.5 sm:py-3.5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5 hover:scale-105 active:scale-95 transition-transform duration-200`}
            >
              <span className={`font-outfit font-black text-xs sm:text-xl md:text-2xl ${bubbleStatements[2].boldColor} tracking-tight leading-none`}>
                {bubbleStatements[2].textBold}
              </span>
              <span className={`font-serif-italic font-normal text-xs sm:text-xl md:text-2xl ${bubbleStatements[2].italicColor} ml-1.5 sm:ml-2.5 leading-none`}>
                {bubbleStatements[2].textItalic}
              </span>
            </button>

            {/* Red Connector Plus */}
            <span className="text-[#8B001D] font-black text-sm sm:text-2xl select-none leading-none px-0.5 sm:px-1">
              +
            </span>

            {/* Pill 4: Never hard to find. */}
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ transform: `rotate(${bubbleStatements[3].deg}deg)` }}
              className={`${bubbleStatements[3].bg} ${bubbleStatements[3].shadow} px-3.5 sm:px-7 md:px-8 py-1.5 sm:py-3.5 rounded-full cursor-pointer flex items-center shrink-0 border border-white/10 hover:scale-105 active:scale-95 transition-transform duration-200`}
            >
              <span className={`font-outfit font-black text-xs sm:text-xl md:text-2xl ${bubbleStatements[3].boldColor} tracking-tight leading-none`}>
                {bubbleStatements[3].textBold}
              </span>
              <span className={`font-serif-italic font-normal text-xs sm:text-xl md:text-2xl ${bubbleStatements[3].italicColor} ml-1.5 sm:ml-2.5 leading-none`}>
                {bubbleStatements[3].textItalic}
              </span>
            </button>
          </div>

          {/* Row 3: Pink Pill: Solve for India. Win anywhere. */}
          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              onClick={onOpenInquire}
              style={{ transform: `rotate(${bubbleStatements[4].deg}deg)` }}
              className={`${bubbleStatements[4].bg} ${bubbleStatements[4].shadow} px-4 sm:px-8 md:px-10 py-1.5 sm:py-3.5 rounded-full cursor-pointer flex items-center shrink-0 border border-black/5 hover:scale-105 active:scale-95 transition-transform duration-200`}
            >
              <span className={`font-outfit font-black text-xs sm:text-xl md:text-2xl ${bubbleStatements[4].boldColor} tracking-tight leading-none`}>
                {bubbleStatements[4].textBold}
              </span>
              <span className={`font-serif-italic font-normal text-xs sm:text-xl md:text-2xl ${bubbleStatements[4].italicColor} ml-1.5 sm:ml-2.5 leading-none`}>
                {bubbleStatements[4].textItalic}
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            3. FOUR BENEFIT CARDS: 2x2 on Mobile, 4 Cols on Desktop
            ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto mt-6 sm:mt-10 md:mt-14">
          {benefitCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-amber-900/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-xs sm:shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform ${card.iconColor}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>

                    <span className="text-[7.5px] xs:text-[8px] sm:text-[9.5px] md:text-[10px] font-outfit font-black uppercase tracking-wider text-gray-500 bg-[#FAF6EE] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-900/10 truncate max-w-[80px] xs:max-w-[95px] sm:max-w-none">
                      {card.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xs sm:text-base md:text-xl font-outfit font-black text-[#18110F] tracking-tight leading-snug mb-1 sm:mb-2 group-hover:text-[#8B001D] transition-colors line-clamp-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] xs:text-[10.5px] sm:text-xs md:text-[13px] text-gray-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {card.description}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-4 pt-1.5 sm:pt-3 border-t border-amber-900/5 flex items-center gap-1 sm:gap-1.5 text-[9.5px] sm:text-xs font-outfit font-bold text-[#8B001D]">
                  <span>Quality Assured</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            4. BOTTOM CTA
            ========================================================= */}
        <div className="mt-7 sm:mt-12 text-center">
          <button
            onClick={onOpenInquire}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white font-outfit font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-9 py-3 sm:py-4 rounded-full shadow-md shadow-red-950/20 hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Partner with Mr. Sweet Wholesale</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
