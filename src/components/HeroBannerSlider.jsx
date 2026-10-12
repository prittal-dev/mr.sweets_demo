import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductImage, handleImageError } from '../utils/imageUrl';

const banners = [
  {
    id: 1,
    image: '/hero-banner-1.png',
    title: 'Aam Papad Masala Pop',
    alt: 'Mr. Sweet Aam Papad Masala Pop - Tasty Masaledaar Fruit Treat'
  },
  {
    id: 2,
    image: '/hero-banner-2.png',
    title: 'NUTYMAX Chocolate Wafer',
    alt: 'NUTYMAX Chocolate Wafer with Caramel Bar and Nuts'
  },
  {
    id: 3,
    image: '/hero-banner-3.png',
    title: 'DAILY ROLLS Wafer Sticks',
    alt: 'DAILY ROLLS Chocolate Flavoured Crispy Wafer Roll'
  },
  {
    id: 4,
    image: '/hero-banner-4.png',
    title: 'DAIRY CONE Milky Choco',
    alt: 'DAIRY CONE Milky Choco Wafer Cones Filled with Velvet Cream'
  },
  {
    id: 5,
    image: '/hero-banner-5.png',
    title: 'SWISS Chocolate Wafer',
    alt: 'SWISS Chocolate Cream Filled Wafer Rolls'
  }
];

export default function HeroBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto-scroll every 3 seconds (3000ms)
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      id="hero-banner-slider"
      className="w-full bg-[#110D09] relative overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Mr. Sweet Featured Confectionery Banners"
    >
      {/* 
        Strictly Uncropped Banner Container:
        Aspect ratio matches the exact 2023:787 (578.25:225.0) vector banners extracted from Mr sweets banner.pdf.
        Guarantees 100% full view with zero cropped edges, text, or products on any device.
      */}
      <div className="w-full relative aspect-[2023/787] flex items-center justify-center bg-[#110D09]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={getProductImage(banners[currentIndex].image)}
              alt={banners[currentIndex].alt}
              className="w-full h-full object-contain object-center block"
              decoding="async"
              onError={(e) => handleImageError(e, banners[currentIndex].image)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Banner Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-[#C8102E] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Banner"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Next Banner Button */}
        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-[#C8102E] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Banner"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* 5 Bottom Indicator Dots (Interactive & Non-obtrusive) */}
        <div className="absolute bottom-1.5 sm:bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-md">
          {banners.map((banner, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={banner.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-5 sm:w-7 bg-[#FFBC00] shadow-sm shadow-amber-400'
                    : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Jump to ${banner.title}`}
                title={banner.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

