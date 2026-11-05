import React from 'react';
import { motion } from 'framer-motion';
import {
  Map,
  Users,
  ArrowRight
} from 'lucide-react';

export default function StatCardsSection({ onOpenInquire }) {

  return (
    <section
      id="distribution"
      className="w-full relative bg-[#9B0B21] text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-y border-red-950/20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-amber-300 px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-outfit font-extrabold uppercase tracking-widest mb-2.5 sm:mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC72C] animate-pulse" />
            <span>COMMERCIAL B2B DISTRIBUTION</span>
          </div>

          {/* Heading with Highlight */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-black text-white tracking-tight leading-tight mb-2 sm:mb-2.5">
            Pan-India Reach.{' '}
            <span className="font-serif-italic font-normal text-[#FFC72C] block sm:inline">
              Trusted Partnerships.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed max-w-xl mx-auto mb-4 sm:mb-5 px-2">
            Supplying direct factory-fresh confections with competitive margins, guaranteed freshness, and prompt nationwide logistics.
          </p>

          {/* Yellow CTA: Become a Super Stockist */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                if (onOpenInquire) onOpenInquire();
              }}
              className="w-full sm:w-auto bg-[#FFC72C] hover:bg-[#E5B220] active:scale-95 text-[#18110F] text-xs sm:text-sm font-outfit font-black uppercase tracking-wider px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md shadow-black/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300 group"
            >
              <span>Become a Super Stockist</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18110F] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* =========================================================
            TWO COMPACT STAT CARDS
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl mx-auto my-4 sm:my-6">
          {/* CARD 1: 20+ States */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-[#7B0716] border border-white/15 p-3.5 sm:p-4 md:p-5 shadow-lg shadow-black/20 flex flex-col justify-between hover:border-amber-400/40 transition-all group"
          >
            <div>
              {/* Top Row: Map Icon & TERRITORY ASSIGNED Badge */}
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#FFC72C] shadow-inner group-hover:scale-105 transition-transform">
                  <Map className="w-4 h-4 text-[#FFC72C]" />
                </div>

                <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[9px] sm:text-[10px] font-outfit font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                  TERRITORY ASSIGNED
                </span>
              </div>

              {/* Heading: Numbers */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-outfit font-black text-white tracking-tight mb-1">
                20+ States
              </h3>

              {/* Description */}
              <p className="text-[11.5px] sm:text-xs text-white/85 leading-relaxed font-normal mb-2.5 sm:mb-3">
                Seamless delivery across Northern, Western, and Central FMCG distribution corridors with dedicated regional depots.
              </p>
            </div>

            {/* Small Supporting Line */}
            <div className="pt-2.5 border-t border-white/10 flex items-center gap-2 text-[10.5px] sm:text-[11.5px] text-amber-200/90 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Express dispatch from North Industrial Mega Hub</span>
            </div>
          </motion.div>

          {/* CARD 2: 500+ Distributors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl bg-[#7B0716] border border-white/15 p-3.5 sm:p-4 md:p-5 shadow-lg shadow-black/20 flex flex-col justify-between hover:border-amber-400/40 transition-all group"
          >
            <div>
              {/* Top Row: Distribution/People Icon & HIGH ROI ASSURED Badge */}
              <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#FFC72C] shadow-inner group-hover:scale-105 transition-transform">
                  <Users className="w-4 h-4 text-[#FFC72C]" />
                </div>

                <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[9px] sm:text-[10px] font-outfit font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                  HIGH ROI ASSURED
                </span>
              </div>

              {/* Heading: Numbers */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-outfit font-black text-white tracking-tight mb-1">
                500+ Distributors
              </h3>

              {/* Description */}
              <p className="text-[11.5px] sm:text-xs text-white/85 leading-relaxed font-normal mb-2.5 sm:mb-3">
                Rewarding business models for wholesalers, semi-wholesalers, school canteen contractors, and modern trade chains.
              </p>
            </div>

            {/* Small Supporting Line */}
            <div className="pt-2.5 border-t border-white/10 flex items-center gap-2 text-[10.5px] sm:text-[11.5px] text-amber-200/90 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Direct factory pricing with protected regional exclusivity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
