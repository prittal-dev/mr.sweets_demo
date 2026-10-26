import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Users, Globe2, ShieldCheck, CheckCircle2, 
  Sparkles, Handshake, ArrowRight, Building2, Truck 
} from 'lucide-react';

export default function StatCardsSection({ onOpenInquire }) {
  // Available styles: 'royal' (Royal Crimson & Gold) | 'bento' (Modern Cream Bento) | 'heritage' (Cocoa & Amber Heritage)
  const [activeStyle, setActiveStyle] = useState('royal');

  return (
    <section className="w-full relative overflow-hidden select-none">
      
      {/* Mini Style Selector Bar for Client Preview */}
      <div className="bg-[#1A0E0C] text-white/80 py-2 px-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-amber-300 font-bold font-mono text-[10px] sm:text-xs uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Select Display Style:</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveStyle('royal')}
            className={`px-3 py-1 rounded-full font-bold text-[10px] sm:text-xs transition-all cursor-pointer ${
              activeStyle === 'royal'
                ? 'bg-[#C8102E] text-white shadow-sm ring-1 ring-white/40'
                : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            👑 Royal Crimson &amp; Gold
          </button>
          <button
            onClick={() => setActiveStyle('bento')}
            className={`px-3 py-1 rounded-full font-bold text-[10px] sm:text-xs transition-all cursor-pointer ${
              activeStyle === 'bento'
                ? 'bg-amber-400 text-[#111827] shadow-sm ring-1 ring-white/40'
                : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            ✨ Modern Cream Bento
          </button>
          <button
            onClick={() => setActiveStyle('heritage')}
            className={`px-3 py-1 rounded-full font-bold text-[10px] sm:text-xs transition-all cursor-pointer ${
              activeStyle === 'heritage'
                ? 'bg-[#FFC709] text-black shadow-sm ring-1 ring-white/40'
                : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            🍫 Cocoa &amp; Amber
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        
        {/* ========================================================
            STYLE 1: ROYAL CRIMSON & GOLD (HAUTE CONFECTIONERY)
            ======================================================== */}
        {activeStyle === 'royal' && (
          <motion.div
            key="royal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-gradient-to-br from-[#7A0819] via-[#9B0B21] to-[#5C0410] text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8 border-y-2 border-amber-300/40 relative overflow-hidden"
          >
            {/* Ambient Confectionery Glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
              {/* Header Title */}
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-1.5 bg-black/30 border border-amber-300/40 text-amber-200 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-0.5 rounded-full mb-2 shadow-inner">
                  <Globe2 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Commercial Distribution Scale</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-black text-white tracking-tight leading-tight">
                  Pan-India Reach.{' '}
                  <span className="font-serif italic font-normal text-amber-300">
                    Trusted Partnerships.
                  </span>
                </h2>
              </div>

              {/* 2 Main Elevated Luxury Glass Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
                
                {/* Stat Card 1: 20+ States in India */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-xl hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="bg-black/30 border border-amber-300/40 text-amber-200 text-[10px] sm:text-xs font-bold font-mono uppercase px-2.5 py-0.5 rounded-full">
                        TERRITORY COVERAGE
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-outfit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 tracking-tight leading-none drop-shadow-sm">
                        20+
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-outfit font-black text-white mb-1.5">
                      States in India
                    </h3>

                    <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-normal">
                      Deep distribution footprint supplying regional supermarkets, general trade counters, and wholesale mandis.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-bold text-amber-200">
                    <Truck className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Express Dispatch from Northern Manufacturing Hub</span>
                  </div>
                </div>

                {/* Stat Card 2: 500+ Happy Super Stockists / Distributors */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-xl hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/15 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-500 to-[#9B0B21] text-white flex items-center justify-center shadow-lg border border-red-400 group-hover:scale-105 transition-transform">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="bg-black/30 border border-amber-300/40 text-amber-200 text-[10px] sm:text-xs font-bold font-mono uppercase px-2.5 py-0.5 rounded-full">
                        VERIFIED ALLIANCES
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-outfit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 tracking-tight leading-none drop-shadow-sm">
                        500+
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-outfit font-black text-white mb-1.5">
                      Happy Super Stockists &amp; Distributors
                    </h3>

                    <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed font-normal">
                      Distributor alliances founded on bill-to-bill transparency, protected regional territories, and consistent ROI.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-bold text-amber-200">
                    <Handshake className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Factory Tier Pricing &amp; High ROI</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STYLE 2: MODERN CREAM BENTO (FRESH, CRISP & CLEAN)
            ======================================================== */}
        {activeStyle === 'bento' && (
          <motion.div
            key="bento"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-[#FAF7EE] text-[#111827] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 border-y border-[#EFE9DA] relative"
          >
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full mb-2 shadow-xs">
                  <span>OFFICIAL COMMERCIAL FOOTPRINT</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-outfit font-black text-[#111827] tracking-tight">
                  Pan-India Strength, Built on Trust
                </h2>
              </div>

              {/* Bento Dual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Bento Card 1 */}
                <div className="bg-white border-2 border-amber-300/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-100 text-amber-900 text-[11px] font-black font-mono px-2.5 py-0.5 rounded-full uppercase">
                        COVERAGE
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-5xl sm:text-6xl font-outfit font-black text-[#C8102E] tracking-tight leading-none mb-1.5">
                      20+
                    </div>
                    <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#111827] mb-1.5">
                      States in India
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      From major metropolitan modern trade hubs to regional FMCG wholesale mandis nationwide.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Nationwide Wholesale Network</span>
                  </div>
                </div>

                {/* Bento Card 2 */}
                <div className="bg-white border-2 border-red-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-red-100 text-[#C8102E] text-[11px] font-black font-mono px-2.5 py-0.5 rounded-full uppercase">
                        TRADE COMMUNITY
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C8102E] flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-5xl sm:text-6xl font-outfit font-black text-[#C8102E] tracking-tight leading-none mb-1.5">
                      500+
                    </div>
                    <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#111827] mb-1.5">
                      Happy Super Stockists / Distributors
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      Protected area distribution, prompt bill-to-bill trading, and dedicated desk support.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>High Margin FMCG Confectionery</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STYLE 3: COCOA & AMBER (SOPHISTICATED DARK HERITAGE)
            ======================================================== */}
        {activeStyle === 'heritage' && (
          <motion.div
            key="heritage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full relative overflow-hidden"
          >
            {/* Top Bright Yellow Accent Bar */}
            <div className="w-full h-3 sm:h-4 bg-[#FFC709] border-y border-amber-400" />

            {/* Dark Chocolate Body */}
            <div className="w-full bg-[#2A1612] text-white py-6 sm:py-10 px-4 sm:px-8 relative overflow-hidden">
              <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center divide-y md:divide-y-0 md:divide-x-2 divide-dotted divide-white/20 gap-4 md:gap-0">
                  
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center justify-center p-3 sm:p-5">
                    <div className="w-full max-w-[300px] bg-black/25 border-2 border-[#C8102E]/60 rounded-2xl p-5 text-center shadow-lg hover:border-[#E02438] transition-all">
                      <div className="text-4xl sm:text-6xl font-outfit font-black text-white tracking-tight leading-none mb-2">
                        20+
                      </div>
                      <div className="text-base sm:text-xl font-fredoka font-bold text-[#FFC709] leading-tight">
                        States in India
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex flex-col items-center justify-center p-3 sm:p-5">
                    <div className="w-full max-w-[300px] bg-black/25 border-2 border-[#C8102E]/60 rounded-2xl p-5 text-center shadow-lg hover:border-[#E02438] transition-all">
                      <div className="text-4xl sm:text-6xl font-outfit font-black text-white tracking-tight leading-none mb-2">
                        500+
                      </div>
                      <div className="text-base sm:text-xl font-fredoka font-bold text-[#FFC709] leading-tight">
                        Happy Super Stockists / Distributors
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}
