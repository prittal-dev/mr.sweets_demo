import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight, ShoppingBag } from 'lucide-react';

export default function Navbar({ activePage = 'home', onNavigate, onOpenInquire, onOpenCart, cartItemCount = 0 }) {
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
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About Us', id: 'about', href: '/about' },
    { name: 'Products', id: 'products', href: '/products' },
    { name: 'Blogs', id: 'blogs', href: '/blogs' },
    { name: 'Contact Us', id: 'contact', href: '/contact' },
  ];

  const handleLinkClick = (e, linkId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(linkId);
    }
  };

  const isDarkBg = activePage !== 'home' || scrolled;

  return (
    <header
      className={`${
        activePage !== 'home' ? 'sticky top-0 z-50 bg-[#110C0A] border-b border-[#231815] shadow-xl' : 'absolute top-0 left-0 right-0 z-50'
      } w-full transition-all duration-300`}
    >
      {/* Main Navigation Bar */}
      <nav className={`w-full py-3 sm:py-4 ${scrolled && activePage === 'home' ? 'bg-[#110C0A]/95 backdrop-blur-md shadow-lg border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Logo Container */}
          <button
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center group focus:outline-none py-1 text-left"
          >
            <img
              src="/mr_sweet_logo.svg"
              alt="Mr. Sweet Haute Confectionery"
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-xl"
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-base font-bold transition-colors relative py-1 drop-shadow-sm ${
                    isActive ? 'text-[#D4AF37] font-extrabold' : 'text-white/90 hover:text-white'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FF4D6D] ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } after:transition-all after:duration-300`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Tools */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Inquire Now CTA */}
            <button
              onClick={onOpenInquire}
              className="bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all duration-300 rounded-full px-6 py-2.5 text-xs font-extrabold tracking-wide flex items-center gap-2 border border-red-500/30 shadow-md hover:shadow-glow transform active:scale-95 uppercase"
            >
              <Mail className="w-3.5 h-3.5 text-amber-200" />
              <span>Inquire Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenInquire}
              className="bg-[#C8102E] text-white p-2.5 rounded-full shadow-md text-xs font-bold"
              aria-label="Inquire Now"
            >
              <Mail className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn text-white">
            {/* Mobile Links */}
            <div className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link.id);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                      isActive ? 'bg-[#C8102E]/20 text-[#D4AF37] border border-[#C8102E]/40' : 'hover:bg-white/10 text-white/90'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquire();
                }}
                className="w-full bg-[#C8102E] text-white hover:bg-[#9B0B21] py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
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
