import React from 'react';
import { motion } from 'framer-motion';
import { getProductImage, handleImageError } from '../utils/imageUrl';

export default function Hero({ onExploreCatalog, onAboutClick, onRequestQuote }) {
  return (
    <section
      id="atelier-hero"
      className="w-full relative bg-[#FAF6EE] text-[#18110F] py-8 sm:py-12 md:py-16 lg:py-20 border-b border-[#EFE8DA] overflow-hidden"
    >
      {/* Subtle Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,199,44,0.14)_0%,rgba(250,246,238,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(139,0,29,0.06)_0%,rgba(250,246,238,0)_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* =========================================================
              LEFT COLUMN: Header, Copy, Badges, Action Buttons
              ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Yellow Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#FFC72C] text-[#18110F] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-[12.5px] font-outfit font-black uppercase tracking-wider shadow-2xs mb-3 sm:mb-4 md:mb-5">
              <span>✦</span>
              <span>CRAFTING SWEET MOMENTS SINCE 2000</span>
            </div>

            {/* Main Heading (Editorial Style) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] font-outfit font-black tracking-[-0.035em] leading-[1.08] text-[#18110F] mb-3 sm:mb-4 md:mb-5">
              <span className="block text-[#18110F]">Made to delight.</span>
              <span className="block font-serif-italic font-normal text-[#8B001D] mt-0.5 sm:mt-1">
                Loved at every bite.
              </span>
            </h1>

            {/* Authentic Introductory Copy with Premium Quality emphasis */}
            <p className="text-xs sm:text-base md:text-[17px] text-[#4F3A34] font-normal leading-relaxed max-w-xl mb-4 sm:mb-6 md:mb-7">
              From our signature crispy Romeo Choco Cones and slow-conched Swiss cream wafers to royal gold coin jars, experience India's premier confectionery atelier committed to <strong className="font-bold text-[#18110F]">premium quality products</strong>, uncompromised purity, crispness, and irresistible taste.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-7 md:mb-8 w-full">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFFDF9] border border-amber-900/15 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-[13px] font-outfit font-black text-[#8B001D] shadow-2xs">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] sm:text-[11px] font-black">
                  ★
                </span>
                <span>Premium Quality Product</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFFDF9] border border-amber-900/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-[13px] font-outfit font-bold text-[#18110F] shadow-2xs">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] sm:text-[10px] font-black">
                  ✓
                </span>
                <span>100% Vegetarian Delight</span>
              </div>
            </div>

            {/* Action Buttons: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              {/* PRIMARY: Explore Products → */}
              <button
                onClick={() => {
                  if (onExploreCatalog) onExploreCatalog();
                }}
                className="w-full sm:w-auto bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-xs sm:text-sm font-outfit font-black uppercase tracking-wider shadow-md shadow-red-950/20 hover:shadow-lg hover:shadow-red-950/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Products</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              {/* SECONDARY: About Mr. Sweet */}
              <button
                onClick={() => {
                  if (onAboutClick) {
                    onAboutClick();
                  } else if (onRequestQuote) {
                    onRequestQuote();
                  }
                }}
                className="w-full sm:w-auto bg-[#FFFDF9] hover:bg-[#FAF4EA] active:scale-95 text-[#18110F] hover:text-[#8B001D] border border-amber-900/15 hover:border-amber-900/30 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-xs sm:text-sm font-outfit font-black uppercase tracking-wider shadow-xs hover:shadow-md transition-all flex items-center justify-center cursor-pointer"
              >
                <span>About Mr. Sweet</span>
              </button>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: Compact on Mobile, Large on Desktop Featured-Product Card
              ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex items-center justify-center mt-3 sm:mt-5 lg:mt-0"
          >
            <div className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[#FFFDF9] border border-amber-900/15 shadow-floating p-3.5 sm:p-6 md:p-7 flex flex-col justify-between relative overflow-hidden transition-all">
              {/* Card Top: Flagship Selection Badge & Green Vegetarian Icon */}
              <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-4">
                <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                  {/* ★ FLAGSHIP SELECTION */}
                  <div className="inline-flex items-center gap-1 bg-[#FAF4EB] border border-[#F6D5DA] text-[#8B001D] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-xs font-outfit font-black tracking-wider uppercase shadow-2xs">
                    <span>★ FLAGSHIP SELECTION</span>
                  </div>
                  {/* PREMIUM QUALITY */}
                  <div className="inline-flex items-center gap-1 bg-[#FFFDF9] border border-amber-900/15 text-amber-900 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-outfit font-extrabold tracking-wider uppercase shadow-2xs">
                    <span>★ PREMIUM QUALITY</span>
                  </div>
                </div>

                {/* Upper Right: FSSAI Green Vegetarian Icon */}
                <div
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-[3px] border-2 border-emerald-600 bg-white flex items-center justify-center shrink-0 shadow-2xs"
                  title="100% Vegetarian Confectionery"
                  aria-label="100% Pure Vegetarian"
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-600" />
                </div>
              </div>

              {/* Center: Product Image on Cream Pedestal - Compact on Mobile */}
              <div className="relative w-full h-[120px] sm:h-[190px] md:h-[240px] flex items-center justify-center my-1 sm:my-2">
                {/* Subtle Ambient Sunburst Glow */}
                <div className="absolute w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-[radial-gradient(circle,rgba(255,199,44,0.22)_0%,rgba(255,253,249,0)_70%)] blur-lg sm:blur-xl pointer-events-none" />

                {/* Product Image with Gentle Hover Animation */}
                <motion.img
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  src={getProductImage('/daily-rolls-box-cutout.png')}
                  alt="Double Cocoa Delight - Daily Rolls & Cones"
                  className="max-h-[105px] sm:max-h-[175px] md:max-h-[220px] w-auto max-w-[90%] object-contain drop-shadow-[0_10px_20px_rgba(24,17,15,0.14)] select-none hover:scale-105 transition-transform duration-300"
                  decoding="async"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.triedBackup) {
                      e.currentTarget.dataset.triedBackup = 'true';
                      e.currentTarget.src = getProductImage('/daily-rolls-blue.png');
                    } else {
                      handleImageError(e, '/daily-rolls-box-cutout.png');
                    }
                  }}
                />
              </div>

              {/* Bottom Information Panel - Compact on Mobile */}
              <div className="pt-2.5 sm:pt-4 border-t border-amber-900/10 flex items-center justify-between gap-2">
                <div>
                  <span className="block text-[9px] sm:text-[10px] md:text-[11px] font-outfit font-black tracking-[0.18em] text-[#8B001D] uppercase leading-none mb-0.5 sm:mb-1">
                    WAFFER STICKS
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl font-outfit font-black text-[#18110F] tracking-tight leading-tight">
                    Dairy Roll (Blue, Red, Dark)
                  </h3>
                </div>

                <div className="shrink-0">
                  <span className="inline-block bg-[#FAF4EB] border border-[#F6D5DA] text-[#8B001D] text-[10px] sm:text-xs md:text-[12.5px] font-outfit font-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-2xs">
                    Wholesale Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
