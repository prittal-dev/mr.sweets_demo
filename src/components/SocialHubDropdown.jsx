import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Instagram } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

// Brand-authentic SVG Icons for exact visual match with the reference
function InstagramBrandIcon({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} stroke-white fill-none stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.6" />
    </svg>
  );
}

function YouTubeBrandIcon({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-white`}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookBrandIcon({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-white`}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInBrandIcon({ className = 'w-5 h-5 sm:w-5.5 sm:h-5.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-white`}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66z" />
    </svg>
  );
}

const defaultSocials = siteConfig.socialChannels && siteConfig.socialChannels.length > 0
  ? siteConfig.socialChannels
  : [
      {
        id: 'instagram',
        name: 'Instagram Hub',
        subtitle: '@mr.___sweet • Story Highlights',
        href: 'https://www.instagram.com/mr.___sweet?cplk=bGIyMGdkODU5cnA1',
        type: 'instagram'
      },
      {
        id: 'facebook',
        name: 'Facebook Page',
        subtitle: 'Mr. Sweet • Community & Posts',
        href: 'https://www.facebook.com/share/1Z7Z5CyP4V/',
        type: 'facebook'
      }
    ];

export default function SocialHubDropdown({
  align = 'left', // 'left' | 'right' | 'center'
  variant = 'navbar', // 'navbar' | 'mobile-inline' | 'compact'
  onItemClick
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getChannelIcon = (type) => {
    switch (type) {
      case 'instagram':
        return {
          wrapperClass: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]',
          icon: <InstagramBrandIcon />
        };
      case 'youtube':
        return {
          wrapperClass: 'bg-[#FF0000]',
          icon: <YouTubeBrandIcon />
        };
      case 'facebook':
        return {
          wrapperClass: 'bg-[#1877F2]',
          icon: <FacebookBrandIcon />
        };
      case 'linkedin':
        return {
          wrapperClass: 'bg-[#0A66C2]',
          icon: <LinkedInBrandIcon />
        };
      default:
        return {
          wrapperClass: 'bg-[#8B001D]',
          icon: <InstagramBrandIcon />
        };
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  const alignmentClasses = {
    left: 'left-0 origin-top-left',
    right: 'right-0 origin-top-right',
    center: 'left-1/2 -translate-x-1/2 origin-top'
  }[align] || 'left-0 origin-top-left';

  // Inline mode for mobile drawer
  if (variant === 'mobile-inline') {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-full transition-all text-xs sm:text-sm font-outfit font-extrabold cursor-pointer select-none border ${
            isOpen
              ? 'bg-[#FDF2F4] text-[#E11D48] border-[#FCE2E6] shadow-xs'
              : 'text-[#18110F] hover:bg-[#FDF2F4] hover:text-[#E11D48] border-transparent'
          }`}
        >
          <div className="flex items-center gap-2">
            <Instagram className={`w-4 h-4 stroke-[2.2] transition-colors ${isOpen ? 'text-[#E11D48]' : 'text-[#18110F]'}`} />
            <span className="tracking-tight">Social Hub</span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-[#E11D48]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#18110F]" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden mt-2"
            >
              <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-[#FDE68A] shadow-xl text-[#18110F]">
                <div className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#8292A6] mb-3">
                  OFFICIAL SOCIAL CHANNELS
                </div>
                <div className="flex flex-col gap-2">
                  {defaultSocials.map((item) => {
                    const { wrapperClass, icon } = getChannelIcon(item.type);
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#FAF6EE] transition-all group"
                      >
                        <div
                          className={`w-11 h-11 rounded-[14px] ${wrapperClass} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          {icon}
                        </div>
                        <div className="flex flex-col text-left min-w-0">
                          <span className="text-[14px] font-bold text-[#1E293B] group-hover:text-[#8B001D] transition-colors leading-tight">
                            {item.name}
                          </span>
                          <span className="text-[11.5px] text-[#64748B] font-medium leading-tight truncate">
                            {item.subtitle}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="relative inline-block text-left"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button: Looks same like other nav boxes normally; turns red on hover/open */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-sm xl:text-[15px] font-bold tracking-tight transition-all duration-200 cursor-pointer select-none border group ${
          isOpen
            ? 'bg-[#FDF2F4] text-[#E11D48] border-[#FCE2E6] shadow-xs'
            : 'text-[#18110F] hover:text-[#E11D48] hover:bg-[#FDF2F4] border-transparent hover:border-[#FCE2E6]'
        }`}
        title="Explore official social channels"
      >
        <Instagram
          className={`w-4 h-4 stroke-[2.2] shrink-0 transition-colors ${
            isOpen ? 'text-[#E11D48]' : 'text-[#18110F] group-hover:text-[#E11D48]'
          }`}
        />
        <span className="whitespace-nowrap font-bold">Social Hub</span>
        {isOpen ? (
          <ChevronUp className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#E11D48] shrink-0 transition-transform" />
        ) : (
          <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 transition-transform ${isOpen ? 'text-[#E11D48]' : 'text-[#18110F] group-hover:text-[#E11D48]'}`} />
        )}
      </button>

      {/* Invisible bridge over gap between button and dropdown to guarantee seamless mouse hover */}
      <div className="absolute top-full left-0 right-0 h-3 pointer-events-auto" />

      {/* Dropdown Card: Exactly matches the reference image */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute top-full mt-2.5 z-50 ${alignmentClasses} w-[310px] sm:w-[340px] xl:w-[350px] bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#FDE68A] shadow-2xl shadow-black/15 text-[#18110F]`}
          >
            {/* Header: OFFICIAL SOCIAL CHANNELS */}
            <div className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#8292A6] mb-3.5 sm:mb-4 select-none">
              OFFICIAL SOCIAL CHANNELS
            </div>

            {/* List of Channels */}
            <div className="flex flex-col gap-2.5">
              {defaultSocials.map((item) => {
                const { wrapperClass, icon } = getChannelIcon(item.type);
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3.5 p-2 sm:p-2.5 -mx-2 rounded-2xl hover:bg-[#FAF6EE] transition-all group cursor-pointer"
                  >
                    {/* Brand Icon Box */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-2xl ${wrapperClass} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      {icon}
                    </div>

                    {/* Text block: Title + Subtitle */}
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[14.5px] sm:text-[15px] font-bold text-[#1E293B] group-hover:text-[#8B001D] transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[11.5px] sm:text-[12px] text-[#64748B] font-medium leading-tight truncate mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
