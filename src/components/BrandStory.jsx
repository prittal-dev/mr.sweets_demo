import React from 'react';
import { Flame, Sparkles, Award } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="atelier-craft" className="w-full bg-[#110C0A] text-[#EFE8DA] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#231815] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-[#362823] shadow-2xl">
              <img
                src="/atelier_conching_stream.jpg"
                alt="Conching kettle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110C0A] via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#18110F] border border-[#D4AF37]/40 p-5 rounded-2xl shadow-floating max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-black font-extrabold flex items-center justify-center font-serif text-lg">
                  75+
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  YEARS OF ATELIER HERITAGE
                </div>
              </div>
              <p className="text-[11px] text-gray-400">
                Preserving royal sweetmaking recipes passed down through three generations of master confectioners.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MR. SWEET PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Slow Conching.{' '}
              <span className="font-serif-italic text-[#D4AF37] font-normal">
                Time-Honored Alchemy.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-8">
              <p>
                In an era of automated mass production, Mr. Sweet remains devoted to the slow, deliberate art of haute sweetmaking. Our master confectioners still utilize heavy hammered copper kettles and slow conching wheels to achieve unparalleled velvet textures.
              </p>
              <p>
                Whether it is our signature Kaju Katli rolled with certified 24K gold vark or our Swiss cream-injected Romeo wafer cones, every single piece is handcrafted with 100% pure A2 Desi Ghee and natural botanical aromas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#362823]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">100%</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Pure A2 Desi Ghee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">0%</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Preservatives</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">24K</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Certified Gold Vark</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
