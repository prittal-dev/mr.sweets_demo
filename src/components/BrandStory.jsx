import React from 'react';
import { Flame, Sparkles, Award } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="atelier-craft" className="w-full bg-[#9B0B21] text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-[#7A0819] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-red-500/40 shadow-2xl">
              <img
                src="/romeo choco cone.webp"
                alt="Confectionery manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A0819] via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#7A0819] border border-amber-300/40 p-5 rounded-2xl shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-300 text-[#7A0819] font-extrabold flex items-center justify-center font-serif text-lg">
                  30+
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  YEARS OF ATELIER HERITAGE
                </div>
              </div>
              <p className="text-[11px] text-red-100">
                Preserving royal sweetmaking recipes passed down through generations of master confectioners.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-extrabold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MR. SWEET PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Slow Conching.{' '}
              <span className="font-serif-italic text-amber-300 font-normal">
                Time-Honored Alchemy.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-red-100 font-normal leading-relaxed mb-8">
              <p>
                In an era of automated mass production, Mr. Sweet remains devoted to the slow, deliberate art of haute sweetmaking. Our master confectioners still utilize heavy kettle refiners and slow conching wheels to achieve unparalleled velvet textures.
              </p>
              <p>
                Whether it is our signature gold coin tubs or our Swiss cream-injected Romeo wafer cones, every single piece is handcrafted with 100% pure vegetarian ingredients and natural botanical aromas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">100%</div>
                <div className="text-xs text-red-200 font-medium mt-1">Pure Vegetarian</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">0%</div>
                <div className="text-xs text-red-200 font-medium mt-1">Animal Gelatin</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">ISO</div>
                <div className="text-xs text-red-200 font-medium mt-1">22000 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
