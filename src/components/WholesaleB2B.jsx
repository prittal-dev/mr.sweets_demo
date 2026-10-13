import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  ShieldCheck,
  Truck,
  Sparkles,
  Layers,
  Box,
  CheckCircle2,
  Cpu,
  Flame,
  ThermometerSun,
  Warehouse,
  Play,
  Download,
  Mail
} from 'lucide-react';

export default function WholesaleB2B({ onDownloadCatalog, onRequestB2BQuote }) {
  const manufacturingSteps = [
    {
      step: '01',
      title: 'Automated Conching & Swiss-Grade Refining',
      tag: 'MODERN MACHINERY & TECHNOLOGY',
      badge: 'Zero-Touch Conching',
      icon: Cpu,
      desc: 'Our state-of-the-art continuous thermal conching tanks refine raw cocoa butter and milk solids for 24+ hours at controlled temperatures, achieving silky melt-in-mouth micro-fineness.',
      highlights: ['Swiss-Grade Refiners', 'Precision Thermal Sensors', 'Automated Flow Rate Control'],
      mediaType: 'video',
      videoSrc: '/chocolate_factory.mp4',
      fallbackImage: '/romeo choco cone.webp'
    },
    {
      step: '02',
      title: 'Multi-Layer Wafer Baking & Precision Cream Injection',
      tag: 'PRODUCTION PROCESS & MOULDING',
      badge: 'Continuous High-Speed Line',
      icon: Flame,
      desc: 'High-capacity automated baking plates produce golden, ultra-crispy wafer sheets. Liquid hazelnut and rich chocolate creams are injected in micro-dosed layers under strict humidity locks.',
      highlights: ['Gas-Fired Baking Plates', 'Micro-Dose Cream Injection', 'Real-Time Sheet Crispness Check'],
      mediaType: 'image',
      image: '/brawo.webp'
    },
    {
      step: '03',
      title: 'Class 100,000 Cleanroom Packaging & Hermetic Barriers',
      tag: 'HYGIENE & STERILE PACKAGING',
      badge: '100% Moisture Lock',
      icon: Box,
      desc: 'All wrappers, snap-lid tubs, and foil pouches are sealed in dust-free HEPA-filtered cleanrooms. Touchless automated wrappers seal out humidity, locking in freshness and crunch for 12+ months.',
      highlights: ['HEPA Air Filtration (Class 100k)', 'Multi-Barrier Aluminum Foils', 'Tamper-Evident Snap-Lid Tubs'],
      mediaType: 'image',
      image: '/swiss choclate.webp'
    },
    {
      step: '04',
      title: '18°C Climate-Controlled Storage & Cold-Chain Logistics',
      tag: 'STORAGE & LOGISTICS HUB',
      badge: 'Cold-Chain Dispatch',
      icon: Warehouse,
      desc: 'Finished master boxes are stored in an 18°C temperature and 50% relative humidity controlled warehouse before being dispatched via temperature-regulated logistics across 50,000+ retail partners.',
      highlights: ['18°C / 50% RH Controlled Hub', 'Automated Robot Palletizing', 'Real-Time QR Batch Tracking'],
      mediaType: 'image',
      image: '/super heros box.webp'
    }
  ];

  const plantStats = [
    { label: 'Cleanroom Facility', value: '100,000+ Sq. Ft.', sub: 'HEPA Air Filtered' },
    { label: 'Daily Output Capacity', value: '50+ Tons', sub: 'High-Capacity Lines' },
    { label: 'Automated Efficiency', value: '100%', sub: 'Zero-Touch Conching' },
    { label: 'Retail Outlets Supplied', value: '50,000+', sub: 'Pan-India Distribution' }
  ];

  return (
    <section id="infrastructure" className="w-full bg-[#FAF9F6] text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION 1 HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Factory className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>EDITORIAL MANUFACTURING & QUALITY</span>
          </div>

          <h2 className="text-section-display font-extrabold text-[#111827] tracking-tight mb-5">
            Behind Every Sweet{' '}
            <span className="font-serif italic text-[#C8102E] font-normal block sm:inline">
              Is a Standard We Don&apos;t Compromise.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            From automated Swiss-grade thermal conching to sterile HEPA-filtered cleanrooms, our manufacturing plant combines modern technology, strict hygiene standards, and climate-controlled storage to supply over 50,000+ retail partners.
          </p>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24">
          {plantStats.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-red-100 p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center shadow-sm hover:border-red-300 transition-colors"
            >
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#C8102E] tracking-tight mb-1">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#111827] mb-0.5">{st.label}</div>
              <div className="text-[10px] sm:text-xs text-gray-500">{st.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* 4 ALTERNATING MANUFACTURING PROCESS CARDS */}
        <div className="space-y-8 sm:space-y-14 mb-16 sm:mb-24">
          {manufacturingSteps.map((step, idx) => {
            const IconComp = step.icon;
            const isReverse = idx % 2 !== 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`bg-white border border-red-100 p-5 sm:p-10 rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center ${
                  isReverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Container (Image or Video) */}
                <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 group shadow-md">
                    {step.mediaType === 'video' ? (
                      <div className="relative w-full h-full">
                        <video
                          src={step.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                        <div className="absolute bottom-3 left-3 bg-[#C8102E] text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full border border-red-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>LIVE FACTORY FEED</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-md"
                        />
                        <div className="absolute top-3 left-3 bg-[#C8102E] text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full border border-red-400">
                          {step.badge}
                        </div>
                      </>
                    )}

                    <div className="absolute top-3 right-3 bg-[#7A0819] text-white text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border border-red-800">
                      PHASE {step.step}
                    </div>
                  </div>
                </div>

                {/* Text Description & Highlights */}
                <div className={`lg:col-span-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start text-left`}>
                  <div className="inline-flex items-center gap-2 text-[#C8102E] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
                    <IconComp className="w-4 h-4 text-[#C8102E]" />
                    <span>{step.tag}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-[#111827] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="w-full space-y-2.5 pt-4 border-t border-red-100">
                    {step.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ACTION BAR FOR BROCHURE & B2B QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#7A0819] via-[#9B0B21] to-[#7A0819] border border-red-500/40 p-6 sm:p-10 rounded-3xl text-center max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white"
        >
          <div className="text-left max-w-2xl">
            <div className="text-[10px] sm:text-xs font-bold text-amber-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>DIRECT MANUFACTURER SUPPLIER & TRADE TERMS</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
              Interested in Bulk Supply, Super Stockist or Export Enquiries?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 font-normal">
              Download our complete 2026 Commercial Confectionery Infrastructure Brochure or talk directly with our B2B trade desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onDownloadCatalog}
              className="w-full sm:w-auto bg-white text-[#C8102E] hover:bg-red-50 transition-all duration-300 px-6 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4 text-[#C8102E]" />
              <span>Brochure (PDF)</span>
            </button>

            <button
              onClick={onRequestB2BQuote}
              className="w-full sm:w-auto bg-[#C8102E] text-white hover:bg-[#7A0819] transition-all duration-300 px-6 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-glow active:scale-95 border border-red-400/40"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Request B2B Quote</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


