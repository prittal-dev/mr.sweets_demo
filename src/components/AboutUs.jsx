import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Factory } from 'lucide-react';

export default function AboutUs({ onOpenInquire }) {
  return (
    <section id="about" className="w-full bg-[#FAF9F6] text-[#111827] py-8 sm:py-20 md:py-24 px-3.5 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split Layout: LEFT Image & RIGHT Brand Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Large Premium Image & Badge Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-red-100 bg-white shadow-xl group">
              <img
                src="/romeo choco cone.webp"
                alt="Mr. Sweet Confectionery Manufacturing"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter drop-shadow-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />


              {/* Bottom Image Overlay Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-red-100/80 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-between gap-2 shadow-lg">
                <div className="min-w-0 pr-1">
                  <div className="text-[11.5px] sm:text-sm font-extrabold text-[#111827] leading-tight truncate">Automated Confectionery Atelier</div>
                  <div className="text-[9.5px] sm:text-xs text-[#C8102E] font-bold leading-tight truncate">Continuous Conching & Moisture-Lock Sealing</div>
                </div>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
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
            <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-[#C8102E] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-fredoka font-bold uppercase tracking-widest mb-2.5 sm:mb-4 shadow-xs">
              <span>EDITORIAL BRAND STORY</span>
            </div>

            {/* Strong Fluid Heading */}
            <h2 className="text-xl sm:text-4xl md:text-5xl font-outfit font-black text-[#111827] tracking-tight leading-tight mb-2 sm:mb-4">
              More Than Sweets.{' '}
              <span className="font-serif italic text-[#C8102E] font-normal block sm:inline">
                A Little Moment of Joy.
              </span>
            </h2>

            {/* Short Company Story */}
            <p className="text-[11.5px] sm:text-base text-gray-700 font-medium leading-relaxed mb-2 sm:mb-3">
              Founded with a commitment to elevate India's FMCG confectionery landscape, <strong className="text-[#111827]">Mr. Sweet</strong> combines multi-decade artisan recipes with state-of-the-art automated manufacturing.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-[11px] sm:text-sm text-gray-600 font-normal leading-relaxed">
              From signature crispy Romeo Choco Cones and slow-conched Swiss cream wafers to fruit jellies, gold coin jars, and surprise toy novelty boxes, every treat is crafted under strict ISO 22000 food safety protocols with 100% vegetarian purity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


