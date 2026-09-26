import React, { useState } from 'react';
import { Mail, Sparkles, Instagram, Facebook, Twitter, ArrowRight, ShieldCheck, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenInquire }) {
  return (
    <footer className="w-full bg-[#110C0A] text-[#EFE8DA] border-t border-[#231815]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Left Column: Logo, Description & Trust Badges */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img
                src="/mr_sweet_logo.svg"
                alt="Mr. Sweet Haute Confectionery"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Description */}
            <p className="text-xs text-gray-300 font-normal leading-relaxed max-w-sm mb-6">
              Crafting India’s favorite crispy wafer cones, slow-conched chocolates, and joyful confections with modern food engineering and uncompromised food purity.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="bg-[#18110F] border border-[#362823] text-emerald-400 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Pure Veg</span>
              </span>

              <span className="bg-[#18110F] border border-[#362823] text-[#D4AF37] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>FSSAI Approved</span>
              </span>

              <span className="bg-[#18110F] border border-[#362823] text-gray-300 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>ISO 22000 Certified</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full bg-[#18110F] border border-[#362823] text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Social Link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: SWEET RANGES */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
            SWEET RANGES
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Romeo Choco Cones</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Swiss Cream Wafers</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">NutyMax Caramel Bars</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Gold Coin 999.9 Jars</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Fun Pops Jelly Bears</a></li>
            <li><a href="#iconic-range" className="hover:text-white transition-colors">Novelty Lipstick Candies</a></li>
          </ul>
        </div>

        {/* Column 3: TRADE & SERVICE */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
            TRADE & SERVICE
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Bulk Order Booking</button></li>
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Distributor Partnerships</button></li>
            <li><button onClick={onOpenInquire} className="hover:text-white transition-colors text-left">Custom Birthday Packs</button></li>
            <li><a href="#wholesale" className="hover:text-white transition-colors">Track Order Dispatch</a></li>
            <li><a href="#atelier-craft" className="hover:text-white transition-colors">Freshness Guarantee</a></li>
            <li><a href="#atelier-craft" className="hover:text-white transition-colors">Quality Control Lab</a></li>
          </ul>
        </div>

        {/* Column 4: ATELIER CONTACT */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
            ATELIER CONTACT
          </h4>
          <ul className="space-y-3 text-xs text-gray-400 font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
              <span>Industrial Confectionery Park, Sector 4, Food Hub, India.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="tel:+911800MRSWEET" className="hover:text-white transition-colors">+91 1800-MR-SWEET</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="mailto:concierge@mrsweetfoods.com" className="hover:text-white transition-colors">concierge@mrsweetfoods.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-[#231815]" />

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © 2026 Mr. Sweet Confectionery & Snacks Ltd. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-[11px] font-medium flex-wrap justify-center">
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
