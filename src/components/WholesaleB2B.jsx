import React from 'react';
import { Package, Download, Mail, Percent, Gift, Truck, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export default function WholesaleB2B({ onDownloadCatalog, onRequestB2BQuote }) {
  return (
    <section id="wholesale" className="w-full bg-[#110C0A] text-[#EFE8DA] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#231815] relative overflow-hidden">
      {/* Subtle Warm Brown Lighting Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(79,58,52,0.25)_0%,rgba(17,12,10,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & 2 Information Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#18110F] border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <span className="text-amber-400">▣</span>
              <span>MR. SWEET WHOLESALE & BULK SUPPLY</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Bulk Supply for Distributors, Retail Stores & Party Packs?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Partner directly with Mr. Sweet Confectionery for bulk counter dispenser jars, display cartons of Dairy Cones, Krispy Toys, and customized festive gift hampers.
            </p>

            {/* Two Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {/* Info Card 1 */}
              <div className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-5 sm:p-6 rounded-3xl transition-all duration-300 group shadow-soft">
                <div className="w-10 h-10 rounded-2xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Percent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Wholesale Merchant Margins
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  High-margin trade terms for distributors, retail shops, school canteens & bulk buyers.
                </p>
              </div>

              {/* Info Card 2 */}
              <div className="bg-[#18110F] border border-[#362823] hover:border-[#D4AF37]/40 p-5 sm:p-6 rounded-3xl transition-all duration-300 group shadow-soft">
                <div className="w-10 h-10 rounded-2xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Custom Party & Return Gifts
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Branded Mr. Sweet return gift packs and surprise toy boxes for birthdays & festive occasions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Dispatch Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#18110F] border-2 border-[#362823] hover:border-[#D4AF37]/40 p-6 sm:p-8 rounded-3xl md:rounded-4xl shadow-2xl relative overflow-hidden group">
              {/* Top Dispatch Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#362823]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    MR. SWEET DISPATCH HUB
                  </span>
                </div>
                <span className="bg-[#231815] text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full border border-[#362823]">
                  Ready Bulk Stock
                </span>
              </div>

              {/* Two Product Images Preview */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#362823] group-hover:border-[#D4AF37]/40 transition-colors bg-gradient-to-b from-[#231815] to-[#18110F] p-2 flex items-center justify-center">
                  <img
                    src="/gold coin.png"
                    alt="999.9 Gold Coin Jar"
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2 py-1 rounded-lg text-center truncate border border-amber-500/20">
                    999.9 Gold Coin Jar
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#362823] group-hover:border-[#D4AF37]/40 transition-colors bg-gradient-to-b from-[#231815] to-[#18110F] p-2 flex items-center justify-center">
                  <img
                    src="/krispy toy box.jpeg"
                    alt="Krispy Toy Surprise Box"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2 py-1 rounded-lg text-center truncate border border-amber-500/20">
                    Krispy Toy Box
                  </div>
                </div>
              </div>

              {/* Dispatch Text */}
              <div className="bg-[#110C0A] border border-[#362823] p-4 rounded-2xl flex items-center justify-between text-xs font-bold text-white mb-2">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Bulk Cartons Dispatched Same-Day</span>
                </div>
                <span className="text-emerald-400 text-[11px]">Express</span>
              </div>
              <p className="text-[11px] text-gray-400 text-center font-normal">
                Moisture-sealed protective freight across 15,000+ pincodes in India & Export Shipping.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Responsive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-[#231815]">
          <button
            onClick={onDownloadCatalog}
            className="w-full sm:w-auto bg-white text-[#110C0A] hover:bg-amber-100 transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <Download className="w-4 h-4 text-[#110C0A]" />
            <span>DOWNLOAD WHOLESALE CATALOG (PDF)</span>
          </button>

          <button
            onClick={onRequestB2BQuote}
            className="w-full sm:w-auto bg-[#C8102E] text-white hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-glow active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>REQUEST B2B TRADE QUOTE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
