import React from 'react';
import { Mail, Sparkles, Instagram, Facebook, Twitter, ShieldCheck, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenInquire }) {
  return (
    <footer className="w-full bg-[#110C0A] text-[#EFE8DA] border-t border-[#231815]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10">
        {/* Left Column: Logo, Description & Trust Badges */}
        <div className="col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="/mr_sweet_logo.svg"
                alt="Mr. Sweet Haute Confectionery"
                className="h-10 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-gray-300 font-normal leading-relaxed max-w-sm mb-4 sm:mb-6">
              Crafting India’s favorite crispy wafer cones, slow-conched chocolates, and joyful confections with modern food engineering and uncompromised purity.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="bg-[#18110F] border border-[#362823] text-emerald-400 text-[9.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>100% Pure Veg</span>
              </span>

              <span className="bg-[#18110F] border border-[#362823] text-[#D4AF37] text-[9.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                <span>FSSAI Approved</span>
              </span>

              <span className="bg-[#18110F] border border-[#362823] text-gray-300 text-[9.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>ISO 22000</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2 sm:mb-0">
            <a
              href="https://www.instagram.com/mr.___sweet/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18110F] border border-[#362823] text-pink-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Follow Mr. Sweet on Instagram"
              title="Follow @mr.___sweet on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18110F] border border-[#362823] text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18110F] border border-[#362823] text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Official Instagram Handle Badge */}
            <a
              href="https://www.instagram.com/mr.___sweet/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity active:scale-95"
            >
              <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>@mr.___sweet</span>
            </a>
          </div>
        </div>

        {/* Column 2: SWEET RANGES */}
        <div className="col-span-1 lg:col-span-3">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-2 sm:mb-4">
            SWEET RANGES
          </h4>
          <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs text-gray-400 font-medium">
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Romeo Choco Cones</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Swiss Cream Wafers</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">NutyMax Caramel Bars</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Gold Coin 999.9 Jars</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Fun Pops Jelly Bears</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Novelty Lipstick Candies</a></li>
          </ul>
        </div>

        {/* Column 3: TRADE & SERVICE */}
        <div className="col-span-1 lg:col-span-2">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-2 sm:mb-4">
            TRADE & SERVICE
          </h4>
          <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs text-gray-400 font-medium">
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Bulk Order Booking</button></li>
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Distributor Partnerships</button></li>
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Custom Birthday Packs</button></li>
            <li><a href="#wholesale" className="hover:text-white transition-colors">Track Order Dispatch</a></li>
            <li><a href="#atelier-craft" className="hover:text-white transition-colors">Freshness Guarantee</a></li>
            <li><a href="#atelier-craft" className="hover:text-white transition-colors">Quality Control Lab</a></li>
          </ul>
        </div>

        {/* Column 4: ATELIER CONTACT */}
        <div className="col-span-2 lg:col-span-3">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-2 sm:mb-4">
            ATELIER CONTACT
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-[11px] sm:text-xs text-gray-400 font-medium">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
              <span>Industrial Confectionery Park, Sector 4, Food Hub, India.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a href="tel:+911800MRSWEET" className="hover:text-white transition-colors">+91 1800-MR-SWEET</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a href="mailto:concierge@mrsweetfoods.com" className="hover:text-white transition-colors">concierge@mrsweetfoods.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-[#231815]" />

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div>
          © 2026 Mr. Sweet Confectionery & Snacks Ltd. All rights reserved.
        </div>

        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium flex-wrap justify-center">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <span className="text-gray-700">•</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          <span className="text-gray-700">•</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">FSSAI Compliance</a>
          <span className="text-gray-700">•</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

