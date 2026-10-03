import React from 'react';
import { Sparkles, ShieldCheck, Award, CheckCircle2, Factory } from 'lucide-react';

export default function AboutUs({ onOpenInquire }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian',
      desc: 'Formulated with zero animal gelatin or preservatives, using pure cocoa, real fruit pectin, and food-grade ingredients.',
      tag: 'Purity First'
    },
    {
      icon: Factory,
      title: 'ISO 22000 Certified',
      desc: 'Crafted in state-of-the-art automated confectionery ateliers under strict food safety and hygiene protocols.',
      tag: 'Quality Control'
    },
    {
      icon: Award,
      title: 'Loved Across Generations',
      desc: 'From crispy Romeo Waffle Cones to iconic Gold Coins and surprise toy boxes, bringing smiles to kids & adults alike.',
      tag: 'Heritage Brand'
    }
  ];

  return (
    <section id="atelier-craft" className="w-full bg-[#110C0A] text-[#EFE8DA] py-10 sm:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#231815] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,rgba(17,12,10,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#18110F] border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ABOUT MR. SWEET CONFECTIONERY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-6">
            Crafting Pure Joy &{' '}
            <span className="font-serif italic text-[#D4AF37] font-normal">
              Uncompromising Sweetness.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            At Mr. Sweet, we combine modern food engineering with timeless confectionery recipes. From multi-layer crispy waffle cones to foil-embossed gold coins and surprise toy treats, every product is crafted to deliver unmatched freshness and joyful moments.
          </p>
        </div>

        {/* 2-Column Grid: Image & Heritage Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-8 sm:mb-16">
          {/* Left Column: Image Stack with Gold Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#362823] bg-[#18110F] p-2 shadow-2xl group">
              <img
                src="/romeo choco cone.png"
                alt="Mr. Sweet Romeo Choco Cones"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110C0A]/90 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Image Caption */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#18110F]/90 backdrop-blur-md border border-[#362823] p-2.5 sm:p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Signature Romeo Waffle Cones</div>
                  <div className="text-[10px] sm:text-xs text-amber-400 font-semibold">100% Pure Cocoa & Crispy Baked Wafer</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Floating Gold Heritage Badge */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:right-4 bg-[#18110F] border border-[#D4AF37]/50 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl hidden xs:flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#D4AF37] text-[#110C0A] font-extrabold flex items-center justify-center text-sm sm:text-base">
                100%
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-white uppercase">Pure Vegetarian</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">Zero Animal Gelatin</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Philosophy Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-5 leading-snug">
              Why Confectionery Retailers & Bulk Buyers Choose Mr. Sweet
            </h3>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-gray-300 font-normal leading-relaxed mb-5 sm:mb-8">
              <p>
                Founded with a mission to bring delight to every sweet craving, Mr. Sweet Confectionery manufactures a wide range of impulse treats, festive gift hampers, display jars, and surprise novelty items.
              </p>
              <p>
                Our production facilities strictly follow ISO 22000 food safety standards, guaranteeing moisture-sealed protective packaging, long shelf-life, and consistent taste in every single carton.
              </p>
            </div>

            {/* 4 Quick Stat Counters */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-4 sm:pt-6 border-t border-[#362823]">
              <div className="bg-[#18110F] border border-[#362823] p-2.5 sm:p-4 rounded-xl">
                <div className="text-base sm:text-2xl font-extrabold text-[#D4AF37]">25,000+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Verified Reviews</div>
              </div>

              <div className="bg-[#18110F] border border-[#362823] p-2.5 sm:p-4 rounded-xl">
                <div className="text-base sm:text-2xl font-extrabold text-[#D4AF37]">15,000+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Pincodes Serviced</div>
              </div>

              <div className="bg-[#18110F] border border-[#362823] p-2.5 sm:p-4 rounded-xl">
                <div className="text-base sm:text-2xl font-extrabold text-[#D4AF37]">ISO 22000</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Food Safety Certified</div>
              </div>

              <div className="bg-[#18110F] border border-[#362823] p-2.5 sm:p-4 rounded-xl">
                <div className="text-base sm:text-2xl font-extrabold text-[#D4AF37]">100%</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Veg Purity Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-4 sm:p-6 rounded-2xl transition-all duration-300 group shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="bg-[#231815] text-[#D4AF37] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#362823]">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-sm sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-[11px] sm:text-xs text-gray-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
