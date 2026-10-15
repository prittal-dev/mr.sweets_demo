import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Factory, Heart } from 'lucide-react';
import { getProductImage, handleImageError } from '../utils/imageUrl';

export default function Hero({ onExploreCatalog, onRequestQuote }) {
  return (
    <section
      id="atelier-hero"
      className="w-full relative bg-[#FAF7EE] text-[#191938] py-7 sm:py-14 md:py-16 border-b border-[#EFE9DA] overflow-hidden"
    >
      {/* Decorative Subtle Corner Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Brand Purpose Badge, Chunky Headline, Paragraph & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Pill Badge (Premium Confectionery Glaze Style) */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#FFF0F4] via-[#FFE2E9] to-[#FFF0F4] border border-[#FFB8C8] text-[#9B0B21] px-3.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-[0_4px_16px_rgba(255,167,191,0.35)] mb-3 sm:mb-5 hover:scale-105 transition-transform duration-300 select-none">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E02438] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#C8102E]" />
              </span>
              <span className="font-outfit font-extrabold text-[11px] sm:text-sm tracking-wide">
                Crafting sweet moments
              </span>
            </div>

            {/* Display Headline - Compact & balanced on mobile, bold & large on desktop */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] font-black tracking-[-0.03em] sm:tracking-[-0.035em] leading-[1.12] sm:leading-[1.05] text-[#191938] mb-3 sm:mb-5">
              Made to delight.{' '}
              <span className="font-serif italic font-normal text-[#C8102E] block sm:inline">
                Loved at every bite.
              </span>
            </h1>

            {/* Short Supporting Paragraph */}
            <p className="text-xs sm:text-base md:text-lg text-[#4A4E69] font-normal leading-relaxed max-w-xl mb-5 sm:mb-8 text-center lg:text-left">
              From our signature crispy Romeo Choco Cones and slow-conched Swiss cream wafers to royal gold coin jars, experience India's premier confectionery manufacturer committed to uncompromised purity and taste.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => {
                  if (onExploreCatalog) onExploreCatalog();
                }}
                className="w-full sm:w-auto bg-[#C8102E] hover:bg-[#9B0B21] text-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  if (onRequestQuote) onRequestQuote();
                }}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#191938] border border-gray-300 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>ABOUT MR SWEETS →</span>
              </button>
            </div>
          </motion.div>

          {/* Desktop Right Column: Playful Circular Collage with Products & Tooltips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="hidden lg:block lg:col-span-6 w-full"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] mx-auto h-[380px] sm:h-[440px] md:h-[470px] flex items-center justify-center select-none">
              
              {/* 1. Large Royal Blue Circle (Upper Right) */}
              <div className="absolute top-2 right-2 sm:right-6 w-56 h-56 sm:w-72 sm:h-72 md:w-76 md:h-76 rounded-full bg-[#2563EB] shadow-xl flex items-center justify-center z-10">
                {/* 4-point Red Sparkle Accent */}
                <div className="absolute -top-3 left-6 sm:left-8 text-[#E63946] z-30">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>

                {/* Standing Romeo Choco Cone bursting out of the blue circle (Transparent Cutout) */}
                <img
                  src={getProductImage('/romeo-cone-cutout.webp')}
                  alt="Mr. Sweet Romeo Choco Cone"
                  className="w-48 sm:w-60 md:w-68 max-h-[300px] sm:max-h-[340px] object-contain filter drop-shadow-2xl -mt-6 sm:-mt-10 z-20 transition-transform duration-500 hover:scale-[1.15] pointer-events-auto"
                  decoding="async"
                  onError={(e) => handleImageError(e, '/romeo-cone-cutout.webp')}
                />
              </div>

              {/* 2. Overlapping Warm Golden-Yellow Circle (Bottom Left) */}
              <div className="absolute bottom-2 left-2 sm:left-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#FFBC00] shadow-lg flex items-center justify-center z-15">
                {/* Brawo Rice Crunch Tub/Pack inside Yellow Circle (Transparent Cutout) */}
                <img
                  src={getProductImage('/brawo-box-cutout.webp')}
                  alt="Mr. Sweet Brawo Rice Crunch"
                  className="w-40 sm:w-48 md:w-52 max-h-[220px] sm:max-h-[240px] object-contain filter drop-shadow-xl z-25 transition-transform duration-500 hover:scale-[1.15] pointer-events-auto"
                  decoding="async"
                  onError={(e) => handleImageError(e, '/brawo-box-cutout.webp')}
                />
              </div>

              {/* 3. Horizontal Wafer Bar spanning across lower section (Transparent Cutout) */}
              <div className="absolute top-[48%] right-0 sm:right-2 z-25 w-52 sm:w-64 md:w-72">
                <img
                  src={getProductImage('/nutymax-cutout.webp')}
                  alt="Mr. Sweet NUTYMAX Wafer Bar"
                  className="w-full max-h-[210px] object-contain filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.15] pointer-events-auto"
                  decoding="async"
                  onError={(e) => handleImageError(e, '/nutymax-cutout.webp')}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Split Section: Left 50% Product Collage, Right 50% Value Cards */}
        <div className="lg:hidden mt-5 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-4 items-center w-full">
          {/* Left 50%: Compact Product Collage */}
          <div className="relative w-full h-[200px] sm:h-[280px] flex items-center justify-center select-none overflow-visible">
            {/* 1. Large Royal Blue Circle */}
            <div className="absolute top-1 right-1 sm:top-2 sm:right-3 w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-[#2563EB] shadow-md sm:shadow-xl flex items-center justify-center z-10">
              <div className="absolute -top-2 left-2 sm:left-4 text-[#E63946] z-30">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs" viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
              <img
                src={getProductImage('/romeo-cone-cutout.webp')}
                alt="Mr. Sweet Romeo Choco Cone"
                className="w-24 sm:w-36 max-h-[140px] sm:max-h-[220px] object-contain filter drop-shadow-lg -mt-4 sm:-mt-6 z-20"
                decoding="async"
                onError={(e) => handleImageError(e, '/romeo-cone-cutout.webp')}
              />
            </div>

            {/* 2. Overlapping Warm Golden-Yellow Circle */}
            <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-3 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-[#FFBC00] shadow-sm sm:shadow-lg flex items-center justify-center z-15">
              <img
                src={getProductImage('/brawo-box-cutout.webp')}
                alt="Mr. Sweet Brawo Rice Crunch"
                className="w-20 sm:w-30 max-h-[100px] sm:max-h-[150px] object-contain filter drop-shadow-md z-25"
                decoding="async"
                onError={(e) => handleImageError(e, '/brawo-box-cutout.webp')}
              />
            </div>

            {/* 3. Horizontal Wafer Bar */}
            <div className="absolute top-[48%] right-0 sm:right-1 z-25 w-24 sm:w-38">
              <img
                src={getProductImage('/nutymax-cutout.webp')}
                alt="Mr. Sweet NUTYMAX Wafer Bar"
                className="w-full max-h-[90px] sm:max-h-[140px] object-contain filter drop-shadow-lg"
                decoding="async"
                onError={(e) => handleImageError(e, '/nutymax-cutout.webp')}
              />
            </div>
          </div>

          {/* Right 50%: 4 Compact Value Cards Stacked Vertically */}
          <div className="w-full flex flex-col gap-1.5 sm:gap-2.5">
            {/* 1. Quality */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-[#EFE5D3] shadow-xs flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[6.5px] sm:text-[8px] font-fredoka font-bold text-amber-600 uppercase tracking-wider block leading-none">
                  100% PURE VEG
                </span>
                <h4 className="text-[9.5px] sm:text-xs font-outfit font-black text-[#191938] leading-tight truncate mt-0.5">
                  Signature Quality
                </h4>
                <p className="text-[7.5px] sm:text-[9px] text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                  Finest cocoa & purity
                </p>
              </div>
            </div>

            {/* 2. Taste */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-[#EFE5D3] shadow-xs flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#E61E2A] to-[#A80B1E] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Heart className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[6.5px] sm:text-[8px] font-fredoka font-bold text-[#E61E2A] uppercase tracking-wider block leading-none">
                  DELIGHTFUL TASTE
                </span>
                <h4 className="text-[9.5px] sm:text-xs font-outfit font-black text-[#191938] leading-tight truncate mt-0.5">
                  Slow-Conched Cocoa
                </h4>
                <p className="text-[7.5px] sm:text-[9px] text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                  Velvet chocolate layers
                </p>
              </div>
            </div>

            {/* 3. Manufacturing */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-[#EFE5D3] shadow-xs flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Factory className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[6.5px] sm:text-[8px] font-fredoka font-bold text-blue-600 uppercase tracking-wider block leading-none">
                  ISO 22000 PLANT
                </span>
                <h4 className="text-[9.5px] sm:text-xs font-outfit font-black text-[#191938] leading-tight truncate mt-0.5">
                  Automated Plant
                </h4>
                <p className="text-[7.5px] sm:text-[9px] text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                  Zero-touch hygiene
                </p>
              </div>
            </div>

            {/* 4. Trust */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-[#EFE5D3] shadow-xs flex items-center gap-1.5 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[6.5px] sm:text-[8px] font-fredoka font-bold text-emerald-600 uppercase tracking-wider block leading-none">
                  PAN-INDIA TRUST
                </span>
                <h4 className="text-[9.5px] sm:text-xs font-outfit font-black text-[#191938] leading-tight truncate mt-0.5">
                  50,000+ Counters
                </h4>
                <p className="text-[7.5px] sm:text-[9px] text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                  Trusted by families
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Corporate Trust & Credibility Value Cards (Full Width 4-Col Row) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:grid w-full lg:grid-cols-4 gap-5 mt-14"
        >
          {/* 1. Quality */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4.5 border border-[#EFE5D3] hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-400/30 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-fredoka font-bold text-amber-600 uppercase tracking-wider block">
                100% PURE VEG
              </span>
              <h4 className="text-sm font-outfit font-black text-[#191938] group-hover:text-[#C8102E] transition-colors leading-tight truncate">
                Signature Quality
              </h4>
              <p className="text-xs text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                Finest cocoa & purity
              </p>
            </div>
          </div>

          {/* 2. Taste */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4.5 border border-[#EFE5D3] hover:border-red-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E61E2A] to-[#A80B1E] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/30 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-fredoka font-bold text-[#E61E2A] uppercase tracking-wider block">
                DELIGHTFUL TASTE
              </span>
              <h4 className="text-sm font-outfit font-black text-[#191938] group-hover:text-[#C8102E] transition-colors leading-tight truncate">
                Slow-Conched Cocoa
              </h4>
              <p className="text-xs text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                Velvet chocolate layers
              </p>
            </div>
          </div>

          {/* 3. Manufacturing */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4.5 border border-[#EFE5D3] hover:border-blue-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <Factory className="w-6 h-6" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-fredoka font-bold text-blue-600 uppercase tracking-wider block">
                ISO 22000 PLANT
              </span>
              <h4 className="text-sm font-outfit font-black text-[#191938] group-hover:text-[#C8102E] transition-colors leading-tight truncate">
                Automated Plant
              </h4>
              <p className="text-xs text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                Zero-touch hygiene
              </p>
            </div>
          </div>

          {/* 4. Trust */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4.5 border border-[#EFE5D3] hover:border-emerald-400/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-fredoka font-bold text-emerald-600 uppercase tracking-wider block">
                PAN-INDIA TRUST
              </span>
              <h4 className="text-sm font-outfit font-black text-[#191938] group-hover:text-[#C8102E] transition-colors leading-tight truncate">
                50,000+ Counters
              </h4>
              <p className="text-xs text-[#5C6180] font-medium leading-tight mt-0.5 truncate">
                Trusted by families
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



