import React from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  ArrowRight,
  Download,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  Globe2,
  Store,
  Boxes,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function BusinessExportCTA({ onOpenInquire, onDownloadCatalog }) {
  const partnerTypes = [
    { title: 'Super Stockists & Distributors', icon: Boxes, sub: 'Pan-India Territory Rights' },
    { title: 'Modern Retail & Supermarkets', icon: Store, sub: 'High-Barcoded Shelf Units' },
    { title: 'Wholesale Merchants', icon: Building2, sub: 'Direct Master Box Tiers' },
    { title: 'Global Confectionery Exporters', icon: Globe2, sub: 'Export-Grade Sealed Tubs' }
  ];

  const tradeBenefits = [
    'Direct Factory Tier Pricing & High Margin Structure',
    'Class 100,000 Cleanroom Packaging & 12-Month Shelf Life',
    'Dedicated B2B Desk & Guaranteed 48-Hour Dispatch'
  ];

  return (
    <section id="business-cta" className="w-full bg-[#7A0819] text-white py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-[#7A0819] relative overflow-hidden">
      {/* Dynamic Background Gradient & Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,rgba(200,16,46,0.2)_40%,rgba(122,8,25,1)_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#7A0819] via-[#9B0B21] to-[#7A0819] border border-red-500/40 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top Decorative Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-white/15 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#9B0B21] border border-white/30 text-amber-300 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-md">
              <Handshake className="w-4 h-4 text-amber-300" />
              <span>B2B, WHOLESALE & GLOBAL EXPORT PARTNERSHIPS</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-red-100 font-bold">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Direct Trade Line: <a href="tel:+919999997877" className="text-white hover:text-amber-300 underline">+91 99999 97877</a></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Let’s Build Something{' '}
                <span className="font-serif italic text-amber-300 font-normal block sm:inline">
                  Sweet Together.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-red-100 font-normal leading-relaxed max-w-2xl">
                Partner with one of India’s premier confectionery manufacturers. We supply high-margin chocolates, wafer cones, jellies, and novelty surprise treats to distributors, supermarkets, and international trade channels.
              </p>

              {/* Trade Benefits Checklist */}
              <div className="space-y-3 pt-2">
                {tradeBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-xs sm:text-sm text-red-50 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
                <button
                  onClick={() => onOpenInquire('wholesale')}
                  className="bg-[#C8102E] hover:bg-white hover:text-[#C8102E] text-white px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:shadow-glow transition-all duration-300 active:scale-95 border border-red-400/40"
                >
                  <Handshake className="w-4 h-4 text-white hover:text-[#C8102E]" />
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenInquire('wholesale')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Send Business Enquiry</span>
                </button>

                <button
                  onClick={onDownloadCatalog}
                  className="bg-transparent hover:bg-white/10 text-amber-300 border border-amber-300/40 px-5 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Catalog (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Column: 4 Target Partner Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partnerTypes.map((p) => {
                const IconComp = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-[#9B0B21]/90 border border-red-500/40 hover:border-amber-300/60 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7A0819] text-amber-300 flex items-center justify-center mb-3 group-hover:bg-amber-300 group-hover:text-[#7A0819] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-extrabold text-white mb-1 leading-snug">{p.title}</div>
                    <div className="text-[11px] text-red-200 font-normal">{p.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
