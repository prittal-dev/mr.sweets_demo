import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Award,
  CheckCircle2,
  FileCheck,
  Leaf,
  Layers,
  Box,
  Eye,
  Check
} from 'lucide-react';

export default function TrustSection() {
  const validCertifications = [
    {
      id: 'iso',
      name: 'ISO 22000:2018 Certified',
      badge: 'Food Safety System Standard',
      icon: Award,
      desc: 'Internationally recognized food safety management system covering hazard analysis, critical control points, and rigorous facility audits.'
    },
    {
      id: 'fssai',
      name: 'FSSAI Approved & Licensed',
      badge: 'Govt. Food Safety Compliance',
      icon: FileCheck,
      desc: 'Central Government licensed food business operation guaranteeing raw material purity, sanitary processing, and honest labeling.'
    },
    {
      id: 'veg',
      name: '100% Pure Vegetarian',
      badge: 'Green Dot Guaranteed',
      icon: Leaf,
      desc: 'Formulated exclusively with premium cocoa butter, wholesome milk solids, and zero animal gelatin or non-veg derivatives.'
    },
    {
      id: 'gmp',
      name: 'GMP Certified Facility',
      badge: 'Good Manufacturing Practices',
      icon: Layers,
      desc: 'Strict operational protocols for airborne dust control, operator hygiene, stainless steel machinery sanitation, and batch logs.'
    },
    {
      id: 'qc',
      name: 'Zero-Defect Quality Assurance',
      badge: 'Inline Optical & Metal Scan',
      icon: Eye,
      desc: 'Every single confectionery unit passes multi-frequency inline metal detectors and automated optical vision sorters prior to dispatch.'
    },
    {
      id: 'packaging',
      name: 'Food-Safe Barrier Packaging',
      badge: 'Child-Safe & Non-Toxic',
      icon: Box,
      desc: 'Non-reactive, food-contact grade polymers and multi-barrier foils engineered to protect confectionery from moisture, UV, and oxidation.'
    }
  ];

  const hygienePillars = [
    { title: 'Dust-Free Cleanrooms', desc: 'Positive air-pressure cleanrooms with HEPA filtration prevent airborne micro-particles.' },
    { title: 'Sensory Lab Testing', desc: 'Every production batch is organoleptically tested for texture, snap, and aroma.' },
    { title: 'Full QR Traceability', desc: 'Complete raw-material to retail-shelf batch code tracking for 100% accountability.' }
  ];

  return (
    <section id="quality" className="w-full bg-white text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION 2 HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>QUALITY & CERTIFICATIONS</span>
          </div>

          {/* STRONG STATEMENT QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-black text-[#111827] tracking-tight leading-tight">
              &ldquo;Quality is not a step in our process.{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal block sm:inline">
                It is our foundational promise.&rdquo;
              </span>
            </h2>
          </motion.div>

          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            We adhere strictly to certified international food safety frameworks, government regulatory standards, and zero-defect quality controls to ensure every bite is safe, pure, and delicious.
          </p>
        </div>

        {/* 6 ELEGANT CERTIFICATION CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {validCertifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            const certThemes = [
              { bg: 'bg-[#EFF6FF]', border: 'border-blue-200', text: 'text-[#1D4ED8]', iconBg: 'bg-white border-blue-200 text-[#2563EB]', badge: 'bg-blue-100/80 text-blue-900 border-blue-200' },
              { bg: 'bg-[#ECFDF5]', border: 'border-emerald-200', text: 'text-[#047857]', iconBg: 'bg-white border-emerald-200 text-[#059669]', badge: 'bg-emerald-100/80 text-emerald-900 border-emerald-200' },
              { bg: 'bg-[#FFF0F2]', border: 'border-rose-200', text: 'text-[#BE185D]', iconBg: 'bg-white border-rose-200 text-[#E11D48]', badge: 'bg-rose-100/80 text-rose-900 border-rose-200' },
              { bg: 'bg-[#FEFCE8]', border: 'border-amber-200', text: 'text-[#B45309]', iconBg: 'bg-white border-amber-200 text-[#D97706]', badge: 'bg-amber-100/80 text-amber-900 border-amber-200' },
              { bg: 'bg-[#FAF5FF]', border: 'border-purple-200', text: 'text-[#6D28D9]', iconBg: 'bg-white border-purple-200 text-[#7C3AED]', badge: 'bg-purple-100/80 text-purple-900 border-purple-200' },
              { bg: 'bg-[#FFF7ED]', border: 'border-orange-200', text: 'text-[#C2410C]', iconBg: 'bg-white border-orange-200 text-[#EA580C]', badge: 'bg-orange-100/80 text-orange-900 border-orange-200' }
            ];
            const theme = certThemes[idx % certThemes.length];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${theme.bg} border ${theme.border} p-6 sm:p-8 rounded-3xl shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-xs ${theme.iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] sm:text-xs font-fredoka font-bold border px-3 py-1 rounded-full flex items-center gap-1 shadow-xs ${theme.badge}`}>
                      <Check className="w-3 h-3" />
                      <span>{cert.badge}</span>
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 className={`text-base sm:text-xl font-outfit font-black ${theme.text} mb-3 leading-snug`}>
                    {cert.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Bottom Verified Seal Tag */}
                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified Audit Status: ACTIVE</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 HYGIENE & QUALITY PILLARS */}
        <div className="bg-[#9B0B21] text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-[#7A0819]">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="text-[10px] sm:text-xs font-fredoka font-bold text-amber-300 uppercase tracking-widest mb-1">
              HYGIENE + TECHNOLOGY + TRUST
            </div>
            <h3 className="text-xl sm:text-3xl font-outfit font-black text-white">
              Uncompromising Standards in Every Batch
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {hygienePillars.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-2xl bg-[#7A0819] border border-red-500/30">
                <div className="w-10 h-10 rounded-full bg-amber-300/20 text-amber-300 flex items-center justify-center mx-auto mb-3 font-bold">
                  ✓
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-red-100 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

