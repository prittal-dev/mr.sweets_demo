import React from 'react';
import { ShieldCheck, Sparkles, Gift, Award, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const trustFeatures = [
    {
      id: 1,
      title: '100% Pure Vegetarian',
      desc: 'Certified Green Dot treats. Crafted exclusively with rich cocoa, milk solids, and zero animal gelatin across all our jellies and wafers.',
      icon: ShieldCheck,
      badge: 'Green Dot Certified'
    },
    {
      id: 2,
      title: 'Signature Wafer & Crunch',
      desc: 'Multi-barrier foil wraps and airtight snap-lid tubs keep our Dairy Cones, Brawo Bars, and Swiss Rolls irresistibly crisp in every weather.',
      icon: Sparkles,
      badge: 'Airtight Fresh Sealed'
    },
    {
      id: 3,
      title: 'Surprise Toys & Joy',
      desc: 'Exciting novelty collections like Krispy Toy Box, Super Heroes, and Mr. Joe combine delicious choco treats with fun collectible toys.',
      icon: Gift,
      badge: 'Interactive Fun Inside'
    },
    {
      id: 4,
      title: 'ISO & FSSAI Grade',
      desc: 'FSSAI approved, ISO 22000 certified manufacturing facility equipped with computerized continuous conching, molding, and packaging.',
      icon: Award,
      badge: 'ISO 22000 & FSSAI'
    }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STANDARD OF EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
            Why Confectionery Lovers Trust Mr. Sweet
          </h2>

          <p className="text-sm sm:text-base text-[#4F3A34] mt-4 font-normal leading-relaxed max-w-2xl mx-auto">
            Every product is developed in state-of-the-art production rooms combining modern hygiene engineering with beloved heritage flavors.
          </p>
        </div>

        {/* 4 Premium White Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-cream-300 p-6 sm:p-8 rounded-3xl shadow-soft hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-cream-100 border border-cream-300 text-[#C8102E] flex items-center justify-center mb-6 group-hover:bg-[#110C0A] group-hover:text-[#D4AF37] group-hover:border-[#362823] transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#231815] mb-3 group-hover:text-[#C8102E] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4F3A34] font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Badge Tag */}
                <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#8B7355] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{item.badge}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
