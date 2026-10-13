import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductImage, handleImageError } from '../utils/imageUrl';

const AUTO_SCROLL_MS = 2800;
const TRANSITION_MS = 600;

const banners = [
  {
    id: 1,
    image: '/hero-banner-1.webp',
    title: 'Aam Papad Masala Pop',
    alt: 'Mr. Sweet Aam Papad Masala Pop - Tasty Masaledaar Fruit Treat'
  },
  {
    id: 2,
    image: '/hero-banner-2.webp',
    title: 'NUTYMAX Chocolate Wafer',
    alt: 'NUTYMAX Chocolate Wafer with Caramel Bar and Nuts'
  },
  {
    id: 3,
    image: '/hero-banner-3.webp',
    title: 'DAILY ROLLS Wafer Sticks',
    alt: 'DAILY ROLLS Chocolate Flavoured Crispy Wafer Roll'
  },
  {
    id: 4,
    image: '/hero-banner-4.webp',
    title: 'DAIRY CONE Milky Choco',
    alt: 'DAIRY CONE Milky Choco Wafer Cones Filled with Velvet Cream'
  },
  {
    id: 5,
    image: '/hero-banner-5.webp',
    title: 'SWISS Chocolate Wafer',
    alt: 'SWISS Chocolate Cream Filled Wafer Rolls'
  }
];

// Clone last slide at index 0 and first slide at index N+1 for seamless infinite scrolling
const extendedBanners = [
  banners[banners.length - 1],
  ...banners,
  banners[0]
];

export default function HeroBannerSlider() {
  // Start at index 1 (first real banner)
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);
  const totalReal = banners.length;

  // Advance to the next slide infinitely
  const tick = useCallback(() => {
    setTrackIndex((prev) => {
      if (prev >= totalReal + 1) return 1;
      if (prev <= 0) return totalReal;
      return prev + 1;
    });
  }, [totalReal]);

  // Start or reset the continuous auto-scroll interval
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(tick, AUTO_SCROLL_MS);
  }, [tick]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Seamless infinite wrap-around when reaching cloned slides at either end
  useEffect(() => {
    if (trackIndex === totalReal + 1) {
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(1);
      }, TRANSITION_MS);
      return () => clearTimeout(id);
    }

    if (trackIndex === 0) {
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(totalReal);
      }, TRANSITION_MS);
      return () => clearTimeout(id);
    }
  }, [trackIndex, totalReal]);

  // Re-enable smooth CSS transition right after an instant clone snap
  useEffect(() => {
    if (!isTransitioning) {
      let raf1;
      let raf2;
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }
  }, [isTransitioning]);

  // Ensure smooth scrolling resumes cleanly when returning to a backgrounded browser tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsTransitioning(false);
        setTrackIndex((prev) => {
          if (prev > totalReal) return 1;
          if (prev < 1) return totalReal;
          return prev;
        });
        startTimer();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [totalReal, startTimer]);

  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    setTrackIndex((prev) => {
      if (prev <= 0) return prev;
      setIsTransitioning(true);
      return prev - 1;
    });
    startTimer();
  }, [startTimer]);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    setTrackIndex((prev) => {
      if (prev >= totalReal + 1) return prev;
      setIsTransitioning(true);
      return prev + 1;
    });
    startTimer();
  }, [totalReal, startTimer]);

  const handleDotClick = useCallback((idx) => {
    setIsTransitioning(true);
    setTrackIndex(idx + 1);
    startTimer();
  }, [startTimer]);

  const activeDotIndex = ((trackIndex - 1) % totalReal + totalReal) % totalReal;

  return (
    <section
      id="hero-banner-slider"
      className="w-full relative overflow-hidden select-none"
      aria-label="Mr. Sweet Featured Confectionery Banners"
    >
      <div className="w-full relative aspect-[2023/787] overflow-hidden">
        {/* Infinite Horizontal Sliding Track */}
        <div
          className="flex w-full h-full will-change-transform"
          style={{
            transform: `translate3d(-${trackIndex * 100}%, 0, 0)`,
            transition: isTransitioning
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
              : 'none'
          }}
        >
          {extendedBanners.map((banner, index) => (
            <div
              key={`${banner.id}-${index}`}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={getProductImage(banner.image)}
                alt={banner.alt}
                className="w-full h-full object-contain object-center block"
                loading="eager"
                decoding="async"
                draggable={false}
                onError={(e) => handleImageError(e, banner.image)}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-[#C8102E] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Banner"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-[#C8102E] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Banner"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-1.5 sm:bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-md">
          {banners.map((banner, idx) => {
            const isActive = idx === activeDotIndex;
            return (
              <button
                key={banner.id}
                onClick={() => handleDotClick(idx)}
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
