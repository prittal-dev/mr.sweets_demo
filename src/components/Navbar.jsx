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
      className={`${
        activePage !== 'home'
          ? 'relative bg-white border-b border-gray-200 shadow-sm py-2.5 sm:py-3.5 text-[#111827]'
          : 'absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent border-none py-3.5 sm:py-5 text-white'
      } z-50 w-full transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <button
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center group focus:outline-none py-1 text-left shrink-0"
        >
          <img
            src="/mr_sweet_logo.svg"
            alt="Mr. Sweet Haute Confectionery"
            className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
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
                className={`text-xs xl:text-sm font-outfit font-extrabold transition-all duration-300 relative py-1.5 whitespace-nowrap ${
                  activePage !== 'home'
                    ? isActive
                      ? 'text-[#C8102E]'
                      : 'text-gray-800 hover:text-[#C8102E]'
                    : isActive
                      ? 'text-amber-300'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {/* Active & Hover Underline Pill */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                    activePage !== 'home' ? 'bg-[#C8102E]' : 'bg-amber-300'
                  } ${isActive ? 'w-full' : 'w-0 hover:w-full'}`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquire}
            className="bg-[#C8102E] text-white hover:bg-[#7A0819] transition-all duration-300 rounded-full px-5 py-2.5 xl:px-6 xl:py-2.5 text-xs font-extrabold tracking-wider flex items-center gap-2 border border-red-400/40 shadow-md hover:shadow-glow transform active:scale-95 uppercase"
          >
            <Mail className="w-3.5 h-3.5 text-amber-200" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenInquire}
            className="bg-[#C8102E] text-white px-3 py-2 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5"
            aria-label="Enquire Now"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] font-extrabold uppercase">Enquire</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white focus:outline-none active:scale-95 transition-transform"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-300" /> : <Menu className="w-5 h-5 text-white" />}
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#9B0B21]/98 backdrop-blur-2xl border-b border-[#7A0819] px-4 pt-3 pb-6 shadow-2xl overflow-hidden text-white"
          >
            <div className="flex flex-col gap-1.5 mb-4 max-w-lg mx-auto">
              {navLinks.map((link) => {
                const isActive = currentActive === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link.id);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-black/30 text-amber-300 border border-amber-300/40 font-bold'
                        : 'hover:bg-white/10 text-white/90'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3 max-w-lg mx-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#C8102E] text-white hover:bg-[#9B0B21] py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-amber-200" />
                <span>Enquire Now for B2B & Wholesale</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
