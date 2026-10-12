import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, Factory, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenInquire }) {
  return (
    <section id="about" className="w-full bg-[#FAF9F6] text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split Layout: LEFT Image & RIGHT Brand Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Large Premium Image & Badge Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-red-100 bg-white p-4 shadow-xl group">
              <img
                src="/romeo choco cone.png"
                alt="Mr. Sweet Confectionery Manufacturing"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Image Overlay Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-red-100 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827]">Automated Confectionery Atelier</div>
                  <div className="text-[10px] sm:text-xs text-[#C8102E] font-bold">Continuous Conching & Moisture-Lock Sealing</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>

            {/* Floating Gold/Red Purity Badge */}
            <div className="absolute -top-4 -right-2 sm:-top-5 sm:right-4 bg-[#C8102E] text-white border border-red-400 p-3.5 sm:p-5 rounded-2xl shadow-2xl hidden xs:flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-[#C8102E] font-extrabold flex items-center justify-center text-sm sm:text-base shrink-0 shadow-md">
                100%
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">Pure Vegetarian</div>
                <div className="text-[10px] sm:text-xs text-red-100">Zero Gelatin • FSSAI Approved</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Company Story, Eyebrow & Know More CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-widest mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>EDITORIAL BRAND STORY</span>
            </div>

            {/* Strong Fluid Heading */}
            <h2 className="text-section-display font-outfit font-black text-[#111827] tracking-tight mb-4 sm:mb-6">
              More Than Sweets.{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal block sm:inline">
                A Little Moment of Joy.
              </span>
            </h2>

            {/* Short Company Story */}
            <p className="text-xs sm:text-base text-gray-700 font-medium leading-relaxed mb-4">
              Founded with a commitment to elevate India's FMCG confectionery landscape, <strong className="text-[#111827]">Mr. Sweet</strong> combines multi-decade artisan recipes with state-of-the-art automated manufacturing.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6 sm:mb-8">
              From signature crispy Romeo Choco Cones and slow-conched Swiss cream wafers to fruit jellies, gold coin jars, and surprise toy novelty boxes, every treat is crafted under strict ISO 22000 food safety protocols with 100% vegetarian purity.
            </p>

            {/* Know More CTA Button */}
            <button
              onClick={onOpenInquire}
              className="bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all duration-300 px-8 py-4 rounded-full text-xs sm:text-sm font-fredoka font-bold uppercase tracking-wider shadow-lg hover:shadow-glow transform active:scale-95 border border-red-500/40 flex items-center gap-2.5 group"
            >
              <span>KNOW OUR STORY</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


