import React, { useState } from 'react';
import { Mail, Sparkles, Instagram, Facebook, ShieldCheck, CheckCircle2, Phone, MapPin, X, Lock, FileText } from 'lucide-react';

export default function Footer({ onOpenInquire, onNavigate }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | 'fssai' | null

  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer className="w-full bg-[#18110F] text-white border-t border-[#362823] relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Logo, Description & Trust Badges */}
        <div className="col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center mb-3 sm:mb-4 text-left group">
              <img
                src="/mr_sweet_logo.svg"
                alt="Mr. Sweet Haute Confectionery"
                className="h-12 sm:h-20 md:h-24 w-auto object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </button>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-amber-100/80 font-normal leading-relaxed max-w-sm mb-4 sm:mb-6">
              Crafting India’s favorite crispy wafer cones, slow-conched chocolates, and joyful confections with modern food engineering, dust-free cleanrooms, and uncompromised purity.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="bg-[#231815] border border-[#362823] text-emerald-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                <span>100% Pure Veg</span>
              </span>

              <span className="bg-[#231815] border border-[#362823] text-amber-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <ShieldCheck className="w-3 h-3 text-amber-300" />
                <span>FSSAI Lic: 12720052000625</span>
              </span>

              <span className="bg-[#231815] border border-[#362823] text-amber-200 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>ISO 22000 Certified</span>
              </span>

              <span className="bg-[#231815] border border-[#362823] text-orange-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span>🇮🇳 Make in India</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2 sm:mb-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#231815] border border-[#362823] text-pink-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#231815] border border-[#362823] text-blue-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity active:scale-95"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@mr.sweets_official</span>
            </a>
          </div>
        </div>

        {/* Column 2: QUICK LINKS */}
        <div className="col-span-1 lg:col-span-2">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-amber-300 uppercase tracking-widest mb-3 sm:mb-4">
            QUICK NAVIGATION
          </h4>
          <ul className="space-y-2 text-[11px] sm:text-xs text-amber-100/80 font-medium">
            <li><button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors text-left">Home</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors text-left">About Us</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Products Catalog</button></li>
            <li><button onClick={() => handleNav('blogs')} className="hover:text-amber-300 transition-colors text-left">Blogs & Insights</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors text-left">Contact Us</button></li>
          </ul>
        </div>

        {/* Column 3: PRODUCT CATEGORIES */}
        <div className="col-span-1 lg:col-span-3">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-amber-300 uppercase tracking-widest mb-3 sm:mb-4">
            PRODUCT CATEGORIES
          </h4>
          <ul className="space-y-2 text-[11px] sm:text-xs text-amber-100/80 font-medium">
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Romeo Choco Cones</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Swiss Cocoa Wafers</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">NutyMax Caramel Bars</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Gold Coin 999.9 Jars</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Jellies & Gummies</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Surprise Novelty Toys</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors text-left">Festive Gift & Snack Tubs</button></li>
          </ul>
        </div>

        {/* Column 4: CONTACT INFORMATION */}
        <div className="col-span-2 lg:col-span-3">
          <h4 className="text-[10px] sm:text-xs font-extrabold text-amber-300 uppercase tracking-widest mb-3 sm:mb-4">
            CORPORATE DESK
          </h4>
          <ul className="space-y-2.5 text-[11px] sm:text-xs text-amber-100/80 font-medium">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
              <span>Industrial Confectionery Park, Sector 4, Food Hub, India.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <a href="tel:+919350060606" className="hover:text-amber-300 font-bold transition-colors">+91 93500 60606</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <a href="mailto:info@mrsweets.in" className="hover:text-amber-300 transition-colors">info@mrsweets.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-[#362823]" />

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-xs text-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © 2026 Mr. Sweet Foods Industry Ltd. All rights reserved.
        </div>

        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium flex-wrap justify-center">
          <button onClick={() => setLegalModal('privacy')} className="hover:text-amber-300 transition-colors">Privacy Policy</button>
          <span className="text-[#362823]">•</span>
          <button onClick={() => setLegalModal('terms')} className="hover:text-amber-300 transition-colors">Terms of Service</button>
          <span className="text-[#362823]">•</span>
          <button onClick={() => setLegalModal('fssai')} className="hover:text-amber-300 transition-colors">FSSAI Compliance</button>
        </div>
      </div>

      {/* LEGAL POPUP MODAL */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#231815] border border-[#362823] text-white p-6 sm:p-8 rounded-3xl max-w-xl w-full shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 rounded-full bg-[#18110F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Lock className="w-4 h-4" />
              <span>COMMERCIAL & LEGAL POLICIES</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
              {legalModal === 'privacy' && 'Privacy Policy'}
              {legalModal === 'terms' && 'Terms of Service'}
              {legalModal === 'fssai' && 'FSSAI & Food Safety Standards'}
            </h3>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2 border-t border-slate-800 pt-4">
              {legalModal === 'privacy' && (
                <>
                  <p>Mr. Sweet Foods Industry Ltd. respects customer privacy. All personal and commercial information collected via enquiry forms is strictly confidential.</p>
                  <p>We do not sell, rent, or trade business contacts with third-party advertising networks.</p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>All wholesale trade quotes and product catalog pricing are subject to direct manufacturer confirmation.</p>
                  <p>B2B deliveries follow certified cold-chain shipment terms across nationwide distribution channels.</p>
                </>
              )}
              {legalModal === 'fssai' && (
                <>
                  <p>Manufacturing facility operated under FSSAI License No. <strong>12720052000625</strong>.</p>
                  <p>100% compliant with Food Safety and Standards Authority of India (FSSAI) guidelines, ISO 22000:2018 food safety standards, and Class 100,000 cleanroom packaging.</p>
                </>
              )}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-[#C8102E] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white hover:text-[#C8102E] transition-colors"
              >
                Close Policy Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
