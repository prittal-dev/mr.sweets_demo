import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage = 'home', activeSection = 'home', onNavigate, onOpenInquire }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About Us', id: 'about', href: '#about' },
    { name: 'Products', id: 'products', href: '#products' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (e, linkId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(linkId);
    }
  };

  const currentActive = activePage === 'home' ? (activeSection || 'home') : activePage;

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-xs sm:shadow-sm py-1.5 sm:py-3 text-[#111827] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Brand Logo */}
        <button
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center group focus:outline-none py-0.5 text-left shrink-0 cursor-pointer"
        >
          <img
            src="/mr_sweet_logo.svg"
            alt="Mr. Sweet Haute Confectionery"
            className="h-7 sm:h-11 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
          />
        </button>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = currentActive === link.id;
            return (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-base xl:text-lg font-outfit font-extrabold tracking-tight transition-all duration-300 relative py-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#C8102E]'
                    : 'text-gray-800 hover:text-[#C8102E]'
                }`}
              >
                <span>{link.name}</span>
                {/* Active & Hover Underline Pill */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-300 bg-[#C8102E] ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquire}
            className="bg-[#C8102E] text-white hover:bg-[#7A0819] transition-all duration-300 rounded-full px-5 py-2.5 xl:px-6 xl:py-2.5 text-xs font-extrabold tracking-wider flex items-center gap-2 border border-red-400/40 shadow-md hover:shadow-glow transform active:scale-95 uppercase cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-amber-200" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <button
            onClick={onOpenInquire}
            className="bg-[#C8102E] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full shadow-xs text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95 transition-transform"
            aria-label="Enquire Now"
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide">Enquire</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 focus:outline-none active:scale-95 transition-transform cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8102E]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-red-100 px-4 pt-3 pb-5 shadow-2xl overflow-hidden text-[#111827]"
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-1 mb-3.5 max-w-lg mx-auto">
              {navLinks.map((link) => {
                const isActive = currentActive === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link.id);
                    }}
                    className={`flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-left text-xs sm:text-sm font-outfit font-extrabold tracking-tight transition-all cursor-pointer group ${
                      isActive
                        ? 'bg-red-50 text-[#C8102E] border-l-4 border-[#C8102E] shadow-2xs'
                        : 'text-[#111827] hover:text-[#C8102E] hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#C8102E]' : 'bg-transparent'}`} />
                      <span>{link.name}</span>
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isActive ? 'text-[#C8102E]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact & Trust Details */}
            <div className="max-w-lg mx-auto pt-2.5 pb-3 border-t border-gray-100 flex items-center justify-between text-[10.5px] text-gray-500 font-medium">
              <a
                href="tel:+919350060606"
                className="hover:text-[#C8102E] font-bold text-[#111827] flex items-center gap-1.5 transition-colors"
              >
                <span>📞 +91 93500 60606</span>
              </a>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[9.5px] font-bold border border-emerald-200">
                100% Pure Veg
              </span>
            </div>

            {/* Primary Action Button */}
            <div className="pt-1 flex flex-col gap-2 max-w-lg mx-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#C8102E] hover:bg-[#9B0B21] text-white py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-900/15 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-amber-200" />
                <span>Enquire Now for B2B & Wholesale</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
