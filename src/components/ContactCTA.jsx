import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle2, Truck, Clock } from 'lucide-react';

export default function ContactCTA({ onOpenInquire }) {
  return (
    <section className="w-full bg-[#FAF9F6] py-6 sm:py-10 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#8A081C] via-[#B50E29] to-[#6B0515] border border-amber-300/30 px-5 py-6 sm:px-10 sm:py-8 md:px-12 md:py-9 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(155,11,33,0.28)] relative overflow-hidden"
        >
          {/* Decorative Ambient Golden & Ruby Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[radial-gradient(circle,rgba(255,188,0,0.28)_0%,rgba(255,188,0,0)_70%)] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFBC00 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
            {/* Left Side: Badge, Heading, Copy & Mini Trust Pills */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-sm border border-amber-300/40 text-amber-300 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-3 shadow-sm">
                <span>PARTNERSHIP & CAMPAIGN DESK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                Let’s Make{' '}
                <span className="font-serif italic text-[#FFBC00] font-normal drop-shadow-sm">
                  Something Sweet.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-red-100/90 font-normal leading-relaxed mb-4">
                For retail supply, distributor partnerships, corporate gift hampers, or export enquiries — connect directly with our commercial team.
              </p>

              {/* Compact Trust Highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs font-semibold text-amber-100/95">
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-[#FFBC00]" />
                  2-Hr Response
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
                  <Truck className="w-3 h-3 text-[#FFBC00]" />
                  Pan-India Supply
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-[#FFBC00]" />
                  Bulk & Export Ready
                </span>
              </div>
            </div>

            {/* Right Side: High-Contrast Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => onOpenInquire && onOpenInquire('wholesale')}
                className="w-full sm:w-auto bg-[#FFBC00] hover:bg-amber-300 text-[#111827] px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(255,188,0,0.4)] hover:shadow-[0_12px_30px_rgba(255,188,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#111827] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+919350060606"
                className="w-full sm:w-auto bg-white hover:bg-red-50 text-[#9B0B21] px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>+91 93500 60606</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

