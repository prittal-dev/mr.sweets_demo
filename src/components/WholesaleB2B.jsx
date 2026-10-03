import React from 'react';
import { Download, Mail, Percent, Gift, Truck } from 'lucide-react';

export default function WholesaleB2B({ onDownloadCatalog, onRequestB2BQuote }) {
  return (
    <section id="wholesale" className="w-full bg-[#110C0A] text-[#EFE8DA] py-5 sm:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#231815] relative overflow-hidden">
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(79,58,52,0.25)_0%,rgba(17,12,10,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & 2 Information Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-1 bg-[#18110F] border border-[#D4AF37]/30 text-[#D4AF37] px-2.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-5 shadow-sm">
              <span className="text-amber-400 text-[10px]">▣</span>
              <span>MR. SWEET WHOLESALE & BULK SUPPLY</span>
            </div>

            {/* Heading */}
            <h2 className="text-lg sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-4">
              Bulk Supply for Distributors, Retail Stores & Party Packs?
            </h2>

            {/* Description */}
            <p className="text-[11px] sm:text-base text-gray-300 font-normal leading-tight sm:leading-relaxed mb-3 sm:mb-6 max-w-2xl">
              Partner directly with Mr. Sweet Confectionery for bulk counter dispenser jars, display cartons of Dairy Cones, Krispy Toys, and festive gift hampers.
            </p>

            {/* Two Information Cards - 2 columns grid on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full mb-3 sm:mb-8">
              {/* Info Card 1 */}
              <div className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-2.5 sm:p-6 rounded-xl sm:rounded-3xl transition-all duration-300 group shadow-soft">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-2xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Percent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-[11px] sm:text-base font-bold text-white mb-0.5 sm:mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  Wholesale Merchant Margins
                </h3>
                <p className="text-[9.5px] sm:text-xs text-gray-400 leading-tight sm:leading-relaxed">
                  High-margin trade terms for distributors, retail shops & bulk buyers.
                </p>
              </div>

              {/* Info Card 2 */}
              <div className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-2.5 sm:p-6 rounded-xl sm:rounded-3xl transition-all duration-300 group shadow-soft">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-2xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-[11px] sm:text-base font-bold text-white mb-0.5 sm:mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  Party & Return Gifts
                </h3>
                <p className="text-[9.5px] sm:text-xs text-gray-400 leading-tight sm:leading-relaxed">
                  Branded return gift packs and surprise toy boxes for festive events.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Dispatch Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-3 sm:p-8 rounded-xl sm:rounded-4xl shadow-xl relative overflow-hidden group">
              {/* Top Dispatch Badge */}
              <div className="flex items-center justify-between mb-2.5 sm:mb-6 pb-2 sm:pb-4 border-b border-[#362823]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    MR. SWEET DISPATCH HUB
                  </span>
                </div>
                <span className="bg-[#231815] text-gray-300 text-[8.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#362823]">
                  Ready Stock
                </span>
              </div>

              {/* Two Product Images Preview */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2.5 sm:mb-6">
                <div className="relative aspect-square rounded-lg sm:rounded-2xl overflow-hidden border border-[#362823] bg-gradient-to-b from-[#231815] to-[#18110F] p-1 sm:p-2 flex items-center justify-center">
                  <img
                    src="/gold coin.png"
                    alt="999.9 Gold Coin Jar"
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-black/85 backdrop-blur-md text-amber-300 text-[8.5px] sm:text-[10px] font-bold px-1 py-0.5 rounded text-center truncate border border-amber-500/20">
                    Gold Coin Jar
                  </div>
                </div>

                <div className="relative aspect-square rounded-lg sm:rounded-2xl overflow-hidden border border-[#362823] bg-gradient-to-b from-[#231815] to-[#18110F] p-1 sm:p-2 flex items-center justify-center">
                  <img
                    src="/krispy toy box.jpeg"
                    alt="Krispy Toy Surprise Box"
                    className="w-full h-full object-cover rounded-md sm:rounded-xl group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-black/85 backdrop-blur-md text-amber-300 text-[8.5px] sm:text-[10px] font-bold px-1 py-0.5 rounded text-center truncate border border-amber-500/20">
                    Krispy Toy Box
                  </div>
                </div>
              </div>

              {/* Dispatch Text */}
              <div className="bg-[#110C0A] border border-[#362823] p-2 sm:p-4 rounded-lg sm:rounded-2xl flex items-center justify-between text-[10px] sm:text-xs font-bold text-white mb-1.5">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0" />
                  <span>Bulk Cartons Dispatched Same-Day</span>
                </div>
                <span className="text-emerald-400 text-[9px] sm:text-[11px] shrink-0">Express</span>
              </div>
              <p className="text-[9.5px] sm:text-[11px] text-gray-400 text-center font-normal hidden sm:block">
                Moisture-sealed protective freight across 15,000+ pincodes in India & Export Shipping.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Responsive CTAs */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-12 pt-3 sm:pt-8 border-t border-[#231815]">
          <button
            onClick={onDownloadCatalog}
            className="flex-1 sm:flex-initial bg-white text-[#110C0A] hover:bg-amber-100 transition-all duration-300 px-3 py-2.5 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#110C0A]" />
            <span>BROCHURE (PDF)</span>
          </button>

          <button
            onClick={onRequestB2BQuote}
            className="flex-1 sm:flex-initial bg-[#C8102E] text-white hover:bg-red-700 transition-all duration-300 px-3 py-2.5 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg hover:shadow-glow active:scale-95"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span>B2B QUOTE</span>
          </button>
        </div>
      </div>
    </section>
  );
}

