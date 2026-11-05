import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  Mail,
  Clock,
  X,
  FileText,
  Lock,
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

export default function Footer({ onOpenInquire, onNavigate, onSelectCategory }) {
  const [legalModal, setLegalModal] = useState(null); // 'food-safety' | 'distributor-terms' | 'privacy' | null

  const handleNav = (pageId, sectionId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handleCategoryClick = (categorySlug) => {
    if (onSelectCategory) {
      onSelectCategory(categorySlug);
    }
    handleNav('products', 'products');
  };

  return (
    <footer className="w-full bg-[#140D0B] text-white border-t border-[#2F1F1A] relative overflow-hidden select-none">
      {/* Decorative Subtle Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(255,199,44,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[radial-gradient(circle,rgba(139,0,29,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          
          {/* =======================================================
              LEFT COLUMN: Brand, Description & Certifications (5 cols)
              ======================================================= */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <button
                onClick={() => handleNav('home', 'atelier-hero')}
                className="flex items-center mb-4 text-left group focus:outline-none cursor-pointer"
                aria-label="Mr. Sweet Home"
              >
                <img
                  src="/mr_sweet_logo.svg"
                  alt="Mr. Sweet Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* Short Brand Description */}
              <p className="text-xs sm:text-[13px] text-amber-100/75 font-normal leading-relaxed max-w-sm mb-5">
                Crafting India's favorite premium quality crispy wafer cones, slow-conched chocolates, and joyful confections with modern food engineering, dust-free cleanrooms, and uncompromised purity.
              </p>

              {/* Certification Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-white/10 border border-white/15 text-amber-300 text-[10.5px] sm:text-xs font-outfit font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                  <span>★</span>
                  <span>Premium Quality Product</span>
                </span>

                <span className="bg-white/10 border border-white/15 text-emerald-300 text-[10.5px] sm:text-xs font-outfit font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Pure Veg</span>
                </span>
              </div>
            </div>

            {/* Social & WhatsApp Connect */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://wa.me/919350060606"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
                title="Connect on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-pink-300 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-blue-300 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* =======================================================
              COLUMN 2: QUICK NAVIGATION (2.5 cols)
              ======================================================= */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-outfit font-black text-amber-300 uppercase tracking-widest mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-amber-100/80 font-medium">
              <li>
                <button
                  onClick={() => handleNav('home', 'atelier-hero')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about', 'about')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Our Heritage &amp; Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'products')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Confectionery Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onOpenInquire) onOpenInquire('wholesale');
                  }}
                  className="text-amber-300 font-bold hover:text-white hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  B2B Trade &amp; Dealership →
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', 'why-choose')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Quality &amp; Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact', 'contact')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Corporate Contact
                </button>
              </li>
            </ul>
          </div>

          {/* =======================================================
              COLUMN 3: SWEET CATEGORIES (2.5 cols)
              ======================================================= */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-outfit font-black text-amber-300 uppercase tracking-widest mb-4">
              SWEET CATEGORIES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-amber-100/80 font-medium">
              <li>
                <button
                  onClick={() => handleCategoryClick('cones')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Wafer Cones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('wafers')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Wafer Rolls
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('chocolates')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Chocolates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('candies')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Candies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('candies')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Lollipops
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('all')}
                  className="hover:text-amber-300 hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  Festive Gift Tins
                </button>
              </li>
            </ul>
          </div>

          {/* =======================================================
              COLUMN 4: CENTRAL WORKS (3 cols)
              ======================================================= */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-outfit font-black text-amber-300 uppercase tracking-widest mb-4">
              CENTRAL WORKS
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-amber-100/85 font-medium">
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8B001D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  130, Library Road, Azad Market,<br />
                  Delhi – 110006, India.
                </span>
              </li>

              {/* Phone / Contact */}
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-amber-200/90 font-bold">Mr. Prince Ghai</div>
                  <a
                    href="tel:+919350060606"
                    className="hover:text-amber-300 font-bold transition-colors block leading-tight text-xs sm:text-sm"
                  >
                    +91 93500 60606
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:aadyaconfactioners@gmail.com"
                  className="hover:text-amber-300 transition-colors break-all font-medium leading-snug"
                >
                  aadyaconfactioners@gmail.com
                </a>
              </li>

              {/* Dispatch Hours */}
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <span className="text-[11px] text-amber-100/70 leading-snug">
                  Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                  (Sunday Dispatch Desk Open)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2F1F1A] my-8 sm:my-10" />

        {/* =======================================================
            BOTTOM COPYRIGHT & LEGAL LINKS
            ======================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-amber-100/60">
          <div>
            © 2025 Mr. Sweet Confectionery &amp; Sweet Goods Pvt Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center font-medium">
            <button
              onClick={() => setLegalModal('food-safety')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Food Safety Policy
            </button>
            <span className="text-[#3A2621]">•</span>
            <button
              onClick={() => setLegalModal('distributor-terms')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Distributor Terms
            </button>
            <span className="text-[#3A2621]">•</span>
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Privacy Notice
            </button>
          </div>
        </div>
      </div>

      {/* =======================================================
          LEGAL / COMPLIANCE MODAL
          ======================================================= */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1C1412] border border-amber-900/30 text-white p-6 sm:p-8 rounded-3xl max-w-xl w-full shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-full bg-white/10 cursor-pointer transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            {legalModal === 'food-safety' && (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Food Safety &amp; Quality Policy</span>
                </div>
                <h3 className="text-xl font-outfit font-black mb-3">FSSAI &amp; ISO 22000 Standards</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-2">
                  Mr. Sweet operates under FSSAI License No. 12720052000625. Our facilities follow strict HACCP guidelines, zero animal gelatin principles, continuous thermal conching, and HEPA-filtered Class 100,000 cleanroom packaging to guarantee 100% pure vegetarian compliance.
                </p>
              </div>
            )}

            {legalModal === 'distributor-terms' && (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Distributor &amp; Trade Terms</span>
                </div>
                <h3 className="text-xl font-outfit font-black mb-3">Commercial Wholesale Guidelines</h3>
                <ul className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-1.5 list-disc pl-5">
                  <li>All wholesale billing is conducted on a transparent Bill-to-Bill basis.</li>
                  <li>All rates published on official rate sheets include applicable GST.</li>
                  <li>Territorial exclusivity is maintained for verified Super Stockists.</li>
                  <li>Cold-chain and temperature-controlled dispatch for chocolate confections.</li>
                </ul>
              </div>
            )}

            {legalModal === 'privacy' && (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Privacy Notice</span>
                </div>
                <h3 className="text-xl font-outfit font-black mb-3">Commercial Privacy Policy</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Mr. Sweet Confectionery &amp; Sweet Goods Pvt Ltd respects trade confidentiality. Commercial inquiry data submitted via WhatsApp, phone, or online forms is solely utilized to process dealership inquiries, price list distribution, and order fulfillment.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-[#8B001D] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
