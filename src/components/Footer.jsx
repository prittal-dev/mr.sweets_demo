import React, { useState } from 'react';
import { Mail, Instagram, Facebook, ShieldCheck, CheckCircle2, Phone, MapPin, X, Lock, Clock } from 'lucide-react';

export default function Footer({ onOpenInquire, onNavigate }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | 'fssai' | null

  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer className="w-full bg-[#18110F] text-white border-t border-[#2F1F1A] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(200,16,46,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[radial-gradient(circle,rgba(255,188,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-7 sm:py-14 px-3.5 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 relative z-10">
        
        {/* Column 1: Brand Identity, About & Trust Badges (4 cols) */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center mb-3 sm:mb-4 text-left group focus:outline-none cursor-pointer"
              aria-label="Mr. Sweet Home"
            >
              <img
                src="/mr_sweet_logo.svg"
                alt="Mr. Sweet Haute Confectionery"
                className="h-10 sm:h-16 md:h-18 w-auto object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </button>

            {/* Description */}
            <p className="text-[11px] sm:text-[13px] text-amber-100/75 font-normal leading-relaxed max-w-sm mb-3.5 sm:mb-5">
              Crafting India&apos;s favorite crispy wafer cones, slow-conched chocolates, and joyful confections with modern food engineering, dust-free cleanrooms, and uncompromised purity.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="bg-[#241714] border border-[#3A2621] text-emerald-300 text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                <span>100% Pure Veg</span>
              </span>

              <span className="bg-[#241714] border border-[#3A2621] text-amber-300 text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-2xs">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
                <span>FSSAI Lic: 12720052000625</span>
              </span>

              <span className="bg-[#241714] border border-[#3A2621] text-amber-200 text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-2xs">
                <span>ISO 22000 Certified</span>
              </span>

              <span className="bg-[#241714] border border-[#3A2621] text-orange-300 text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow-2xs">
                <span>Make in India</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#241714] border border-[#3A2621] text-pink-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#241714] border border-[#3A2621] text-blue-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-[9.5px] sm:text-[11px] font-bold px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1 shadow-md hover:opacity-90 transition-opacity active:scale-95"
            >
              <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>@mr.sweet_official</span>
            </a>
          </div>
        </div>

        {/* Grouped 2-Column Section for Navigation & Categories on Mobile */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-6 pt-1 sm:pt-0 border-t border-[#2F1F1A]/80 sm:border-t-0">
          {/* Column 2: QUICK NAVIGATION */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-amber-300 uppercase tracking-widest mb-2.5 sm:mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[10.5px] sm:text-xs text-amber-100/80 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Products Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={onOpenInquire} className="text-amber-300 font-bold hover:text-white hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Wholesale Inquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: PRODUCT CATEGORIES */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-amber-300 uppercase tracking-widest mb-2.5 sm:mb-4">
              PRODUCT CATEGORIES
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[10.5px] sm:text-xs text-amber-100/80 font-medium">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Romeo Choco Cones
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Swiss Cocoa Wafers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  NutyMax Caramel Bars
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Gold Coin 999.9 Jars
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Jellies, Gummies & Candies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Surprise Novelty LED Toys
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-300 hover:translate-x-0.5 transition-all text-left cursor-pointer">
                  Festive Gift & Snack Tubs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: CORPORATE TRADE DESK (3 cols) */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 pt-1 sm:pt-0 border-t border-[#2F1F1A]/80 sm:border-t-0">
          <h4 className="text-[10px] sm:text-xs font-black text-amber-300 uppercase tracking-widest mb-2.5 sm:mb-4">
            CORPORATE DESK
          </h4>
          <ul className="space-y-2.5 sm:space-y-3.5 text-[10.5px] sm:text-xs text-amber-100/85 font-medium">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E02438] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                130, Library Road, Azad Market,<br />
                Delhi – 110006, India.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <div>
                <div className="text-[10px] text-amber-200/90 font-bold">Mr. Prince Ghai</div>
                <a href="tel:+919350060606" className="hover:text-amber-300 font-bold transition-colors block">
                  +91 93500 60606
                </a>
                <span className="text-[9.5px] text-emerald-400 font-semibold">Direct Trade & WhatsApp Line</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <a href="mailto:aadyaconfactioners@gmail.com" className="hover:text-amber-300 transition-colors truncate block">
                aadyaconfactioners@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-300/80 shrink-0" />
              <span className="text-[10px] sm:text-[11px] text-amber-100/70">
                Mon – Sat: 9:00 AM – 7:00 PM IST
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-[#2F1F1A]" />

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto py-3.5 sm:py-5 px-3.5 sm:px-6 lg:px-8 text-[9.5px] sm:text-[11px] text-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left">
        <div>
          © 2026 Mr. Sweet Foods Industry Ltd. All rights reserved.
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-[9.5px] sm:text-[11px] font-medium flex-wrap justify-center">
          <button onClick={() => setLegalModal('privacy')} className="hover:text-amber-300 transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <span className="text-[#3A2621]">•</span>
          <button onClick={() => setLegalModal('terms')} className="hover:text-amber-300 transition-colors cursor-pointer">
            Terms of Service
          </button>
          <span className="text-[#3A2621]">•</span>
          <button onClick={() => setLegalModal('fssai')} className="hover:text-amber-300 transition-colors cursor-pointer">
            FSSAI Compliance
          </button>
        </div>
      </div>

      {/* LEGAL POPUP MODAL */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#231815] border border-[#3A2621] text-white p-6 sm:p-8 rounded-3xl max-w-xl w-full shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 rounded-full bg-[#18110F] cursor-pointer"
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

            <div className="text-xs sm:text-sm text-amber-100/80 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' && (
                <>
                  <p>Mr. Sweet Foods Industry Ltd. respects your privacy and is committed to protecting confidential commercial trade, B2B procurement records, and personal customer data.</p>
                  <p>We do not sell, rent, or trade trade customer information to any third parties.</p>
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
                className="bg-[#C8102E] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white hover:text-[#C8102E] transition-colors cursor-pointer"
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
