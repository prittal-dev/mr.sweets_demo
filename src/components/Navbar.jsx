import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({
  activePage = 'home',
  activeSection = 'home',
  onNavigate,
  onNavigateSection,
  onOpenInquire,
  onOpenCart,
  cartItemCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home', action: 'page' },
    { name: 'About', id: 'about', action: 'page' },
    { name: 'Product', id: 'products', action: 'page' },
    { name: 'Contact', id: 'contact', action: 'page' },
  ];

  const handleLinkClick = (e, item) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  // Determine which navigation item is currently active
  const isItemActive = (item) => {
    return activePage === item.id;
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-soft bg-[#FFFDF9]/95 backdrop-blur-md transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#7B0D1E] text-white py-2 sm:py-2.5 px-3 sm:px-6 text-[10px] sm:text-[11.5px] md:text-xs font-bold tracking-wider uppercase border-b border-[#5A0614] relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2.5 text-center leading-tight flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-white/95 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] border border-emerald-400 bg-white/10 flex items-center justify-center shrink-0" title="100% Vegetarian Confectionery">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-wide">100% VEGETARIAN</span>
          </span>

          <span className="text-amber-300 font-bold">•</span>

          <span className="tracking-wide text-amber-300 font-extrabold">★ 100% PREMIUM QUALITY PRODUCTS</span>

          <span className="text-amber-300 font-bold">•</span>

          <span className="tracking-wide text-white/95">PAN-INDIA DISTRIBUTION</span>

          <span className="text-amber-300 font-bold">•</span>

          <span className="tracking-wide text-white/95">SWISS-GRADE CONCHED QUALITY</span>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="w-full border-b border-[#EFE8DA] bg-[#FFFDF9]/98">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4.5 md:py-5 flex items-center justify-between gap-3 lg:gap-5">
          {/* LEFT: Logo */}
          <button
            onClick={(e) => handleLinkClick(e, { id: 'home', action: 'page' })}
            className="flex items-center group focus:outline-none shrink-0 cursor-pointer select-none"
            aria-label="Mr. Sweet Home"
          >
            <img
              src="/mr_sweet_logo.svg"
              alt="Mr. Sweet Logo"
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xs"
            />
          </button>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`text-sm xl:text-[15px] font-bold tracking-tight transition-all duration-200 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full whitespace-nowrap cursor-pointer select-none ${
                    active
                      ? 'bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] shadow-pill-active'
                      : 'text-[#18110F] hover:text-[#8B001D] hover:bg-[#FAF6EE] border border-transparent'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: Hotline, Enquire Now Button, User/Account Icon */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Phone: +91 93500 60606 */}
            <a
              href="tel:+919350060606"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-[#FAF6EE] transition-colors group cursor-pointer border border-transparent hover:border-amber-900/10"
              title="Call Mr. Prince Ghai: +91 93500 60606"
            >
              <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#FAF4EA] text-[#8B001D] flex items-center justify-center border border-amber-200/80 group-hover:scale-105 transition-transform shadow-2xs">
                <Phone className="w-4 h-4 text-[#8B001D]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-wider leading-none">
                  PHONE
                </span>
                <span className="text-xs xl:text-[13.5px] font-bold text-[#18110F] group-hover:text-[#8B001D] transition-colors leading-tight">
                  +91 93500 60606
                </span>
              </div>
            </a>

            {/* Enquire Now Button */}
            <button
              onClick={onOpenInquire}
              className="bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white text-xs xl:text-[13px] font-bold px-5 xl:px-6 py-2.5 xl:py-3 rounded-full shadow-md shadow-red-950/15 hover:shadow-lg hover:shadow-red-950/20 transition-all flex items-center gap-2 border border-red-400/30 cursor-pointer uppercase tracking-wider"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* MOBILE CONTROLS (Right side on mobile) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Mobile Phone Icon */}
            <a
              href="tel:+919350060606"
              className="p-1.5 sm:p-2 rounded-full bg-[#FAF6EE] text-[#8B001D] border border-amber-900/10 flex items-center justify-center active:scale-95 transition-transform"
              title="Call +91 93500 60606"
              aria-label="Call +91 93500 60606"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B001D]" />
            </a>

            {/* Mobile Enquire CTA (Kept Accessible) */}
            <button
              onClick={onOpenInquire}
              className="bg-[#8B001D] hover:bg-[#720617] text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-xs text-[10px] sm:text-xs font-outfit font-extrabold flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95 transition-transform uppercase tracking-wider"
              aria-label="Enquire Now"
            >
              <Mail className="w-3 h-3 text-amber-300" />
              <span>Enquire</span>
            </button>


            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-full bg-[#FAF6EE] hover:bg-[#F3EAD8] border border-amber-900/15 text-[#18110F] focus:outline-none active:scale-95 transition-transform cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B001D]" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#18110F]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE ANIMATED DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FFFDF9] border-b border-[#EFE8DA] px-4 pt-3 pb-6 shadow-2xl overflow-hidden text-[#18110F]"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-amber-900/10 max-w-lg mx-auto">
              <div className="flex items-center">
                <img
                  src="/mr_sweet_logo.svg"
                  alt="Mr. Sweet"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full text-[9px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                100% Veg
              </span>
            </div>

            {/* Navigation Links with Subtle Cream/Red Active Pill */}
            <div className="flex flex-col gap-1.5 mb-4 max-w-lg mx-auto">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-full text-left text-xs sm:text-sm font-outfit font-extrabold tracking-tight transition-all cursor-pointer group ${
                      active
                        ? 'bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] shadow-xs'
                        : 'text-[#18110F] hover:text-[#8B001D] hover:bg-[#FAF6EE]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          active ? 'bg-[#8B001D]' : 'bg-transparent'
                        }`}
                      />
                      <span>{item.name}</span>
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                        active ? 'text-[#8B001D]' : 'text-gray-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick Hotline & Contact Strip */}
            <div className="max-w-lg mx-auto pt-3 pb-3 border-t border-amber-900/10 flex items-center justify-between text-xs font-outfit font-bold">
              <a
                href="tel:+919350060606"
                className="hover:text-[#8B001D] text-[#18110F] flex items-center gap-2 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF4EA] text-[#8B001D] flex items-center justify-center border border-amber-200/80">
                  <Phone className="w-3 h-3 text-[#8B001D]" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 uppercase block font-semibold leading-none">PHONE</span>
                  <span className="text-xs font-bold">+91 93500 60606</span>
                </div>
              </a>
            </div>

            {/* Primary Mobile CTA Button */}
            <div className="pt-1 max-w-lg mx-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white py-3 rounded-full text-xs font-outfit font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-950/15 transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>Enquire Now (Wholesale &amp; Retail)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
