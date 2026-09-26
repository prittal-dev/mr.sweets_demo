import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function GiftingConcierge({ onOpenInquire }) {
  const [embossedText, setEmbossedText] = useState('Ananya & Rohan');
  const [foilColor, setFoilColor] = useState('24K Yellow Gold');

  return (
    <section id="wholesale" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information & Form Preview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BESPOKE WEDDING & CORPORATE CONCIERGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight leading-tight mb-6">
              Grand Celebrations.{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal">
                Bespoke Luxury Hampers.
              </span>
            </h2>

            <p className="text-base text-[#4F3A34] mb-8 leading-relaxed">
              Elevate your weddings, corporate milestones, and royal galas with personalized velvet gift vaults embossed in 24K gold foil stamp. Dedicated concierge & worldwide temperature-controlled delivery.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Custom Monogram & Gold Foil Box Stamping',
                'Curated Tasting Boxes Delivered to Your Doorstep',
                'Dietary Customizations (No-Sugar, Vegan & Keto Sweets)',
                'Dedicated Wedding Concierge Manager'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#231815]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8102E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenInquire}
                className="bg-[#110C0A] text-white hover:bg-[#C8102E] transition-all px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>CONNECT WITH WEDDING CONCIERGE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Embossing Interactive Box */}
          <div className="lg:col-span-6 bg-[#18110F] p-6 sm:p-10 rounded-3xl md:rounded-4xl border border-[#362823] shadow-floating text-white">
            <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              LIVE EMBOSSING SIMULATOR
            </div>

            {/* Embossed Box Mockup */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 mb-6 flex flex-col items-center justify-center p-6 text-center shadow-inner group">
              <img
                src="/foil_sealing.jpg"
                alt="Gold foil box"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Dynamic Embossed Text */}
              <div className="relative z-10 p-6 border-2 border-[#D4AF37]/50 rounded-xl bg-black/40 backdrop-blur-sm max-w-md">
                <div className="text-[10px] text-amber-300 tracking-[0.3em] uppercase mb-1 font-bold">
                  HAUTE CONFECTIONERY • MR. SWEET
                </div>
                <div className="font-serif-italic text-2xl sm:text-3xl text-[#D4AF37] font-extrabold tracking-wide drop-shadow-md">
                  "{embossedText || 'Your Custom Names'}"
                </div>
                <div className="text-[9px] text-gray-300 tracking-[0.25em] uppercase mt-2">
                  EST. 2026 • ROYAL WEDDING EDITION
                </div>
              </div>
            </div>

            {/* Embossing Input Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Type Custom Monogram / Couple Names:
                </label>
                <input
                  type="text"
                  value={embossedText}
                  onChange={(e) => setEmbossedText(e.target.value)}
                  placeholder="e.g. Ananya & Rohan"
                  className="w-full bg-[#110C0A] border border-[#362823] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Foil Stamping Color:
                </label>
                <div className="flex gap-2">
                  {['24K Yellow Gold', 'Rose Gold', 'Metallic Silver'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setFoilColor(color)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                        foilColor === color
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                          : 'bg-[#110C0A] text-gray-400 border-[#362823]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
