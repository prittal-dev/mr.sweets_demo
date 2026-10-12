import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Factory,
  Sparkles,
  Truck,
  Layers,
  TrendingUp,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function WhyChooseUs({ onOpenInquire }) {
  const whyFeatures = [
    {
      number: '01',
      title: 'QUALITY & PURITY',
      tagline: '100% Pure Vegetarian',
      desc: 'Every product is crafted with a commitment to consistent taste, pure cocoa butter, milk solids, and zero animal gelatin.',
      highlight: 'Green Dot Certified'
    },
    {
      number: '02',
      title: 'MODERN MANUFACTURING',
      tagline: '100,000+ Sq. Ft. Plant',
      desc: 'State-of-the-art continuous thermal conching tanks and automated wafer baking lines engineered for velvet smoothness.',
      highlight: 'Swiss-Grade Refiners'
    },
    {
      number: '03',
      title: 'PRODUCT INNOVATION',
      tagline: '35+ Iconic SKUs',
      desc: 'Creating iconic confectionery treats from velvet choco cones and wafer rolls to interactive surprise toy tubs that bring something fresh to the shelf.',
      highlight: '35+ Original SKUs'
    },
    {
      number: '04',
      title: 'RELIABLE DISTRIBUTION',
      tagline: '50,000+ Outlets Served',
      desc: 'Nationwide distribution network supplying over 15,000+ pincodes through climate-controlled express logistics.',
      highlight: '15,000+ Pincodes Served'
    },
    {
      number: '05',
      title: 'HYGIENE & CLEANROOMS',
      tagline: 'Class 100k Cleanroom',
      desc: 'Positive air-pressure HEPA air filtration and multi-barrier foil wrapping locking in freshness and crunch for 12+ months.',
      highlight: 'Airtight Moisture Lock'
    },
    {
      number: '06',
      title: 'HIGH B2B MARGINS',
      tagline: 'Direct Factory Terms',
      desc: 'Direct manufacturer pricing structures and flexible MOQ tiers designed to maximize profitability for trade partners.',
      highlight: 'High Merchant ROI'
    }
  ];

  return (
    <section id="why-choose" className="w-full bg-[#FAF9F6] text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-gray-200 relative overflow-hidden">
      {/* Background Subtle Warm Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>THE MR. SWEET ADVANTAGE</span>
          </div>

          <h2 className="text-section-display font-outfit font-black text-[#111827] tracking-tight mb-5">
            Why Retailers & Confectionery Lovers{' '}
            <span className="font-serif-italic text-[#C8102E] font-normal block sm:inline">
              Choose Mr. Sweet.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Combining 30+ years of confectionery heritage with automated continuous conching, certified food safety standards, and nationwide distribution power.
          </p>
        </div>

        {/* 6 EDITORIAL NUMBERED FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {whyFeatures.map((item, idx) => {
            const gradients = [
              'bg-gradient-to-br from-[#9B0B21] to-[#C8102E] border-red-400/40',
              'bg-gradient-to-br from-[#B45309] to-[#D97706] border-amber-300/40',
              'bg-gradient-to-br from-[#BE185D] to-[#EC4899] border-pink-300/40',
              'bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] border-blue-300/40',
              'bg-gradient-to-br from-[#047857] to-[#10B981] border-emerald-300/40',
              'bg-gradient-to-br from-[#6D28D9] to-[#A855F7] border-purple-300/40'
            ];
            const cardGradient = gradients[idx % gradients.length];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${cardGradient} border p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-white`}
              >
                {/* Large Visual Background Number */}
                <div className="text-5xl sm:text-7xl font-outfit font-black text-white/20 group-hover:text-white/35 transition-colors tracking-tight mb-4 leading-none">
                  {item.number}
                </div>

                <div>
                  {/* Tagline Pill */}
                  <div className="text-[10px] sm:text-xs font-fredoka font-bold text-amber-300 uppercase tracking-widest mb-2">
                    {item.tagline}
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-2xl font-outfit font-black text-white mb-3 group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

