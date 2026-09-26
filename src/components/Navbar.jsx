import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenInquire, onOpenCart, cartItemCount = 3 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#iconic-range' },
    { name: 'About Us', href: '#atelier-craft' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav className="w-full bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Logo Container */}
          <a
            href="#"
            className="flex items-center group focus:outline-none py-1"
          >
            <img
              src="/mr_sweet_logo.svg"
              alt="Mr. Sweet Haute Confectionery"
              className="h-12 sm:h-15 md:h-18 lg:h-22 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xl"
            />
          </a>

          {/* 3 Nav Links (Products, About Us, Reviews) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold text-white/90 hover:text-white transition-colors relative py-1 drop-shadow-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF4D6D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Tools */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Inquire Now CTA */}
            <button
              onClick={onOpenInquire}
              className="bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all duration-300 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide flex items-center gap-2 border border-red-500/30 shadow-md hover:shadow-glow transform active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-amber-200" />
              <span>Inquire Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn text-white">
            {/* Mobile Links */}
            <div className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-semibold text-white/90"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#C8102E] text-white hover:bg-[#9B0B21] py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4 text-amber-200" />
                <span>Inquire Now for Wholesale & Events</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
