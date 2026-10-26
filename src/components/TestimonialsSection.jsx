import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building2 } from 'lucide-react';

const AUTO_SCROLL_MS = 3800;
const TRANSITION_MS = 500;

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: 'Ordered 4 boxes for my son’s classroom party. The chocolate swirl was rich, and every single cone remained incredibly crispy until the last bite.',
      name: 'Pooja R.',
      designation: 'Classroom Party Host',
      location: 'Mumbai',
      rating: 5
    },
    {
      id: 2,
      quote: 'The roasted peanut topping with stretchy caramel on top of crisp wafer is delicious. We keep a wholesale carton at our workspace cafeteria.',
      name: 'Arjun K.',
      designation: 'Pantry & Operations Manager',
      location: 'Bengaluru',
      rating: 5
    },
    {
      id: 3,
      quote: 'The detailed embossing on the foil and reusable clear jar made it our Diwali gift hamper centerpiece. Loved by elders and kids alike.',
      name: 'Sunita M.',
      designation: 'Event Stylist',
      location: 'New Delhi',
      rating: 5
    },
    {
      id: 4,
      quote: 'We ordered 350 custom gold foil velvet boxes for our daughter’s wedding in Udaipur. Our international guests were absolutely stunned by the Romeo Choco Cones!',
      name: 'Sunita & Vikram Kapoor',
      designation: 'Destination Wedding Hosts',
      location: 'Udaipur / Mumbai',
      rating: 5
    },
    {
      id: 5,
      quote: 'The B2B corporate hamper service is unmatched. Temperature sealed express shipping to Dubai ensured our clients received fresh, melt-in-the-mouth treats.',
      name: 'Rajesh Mehta',
      designation: 'CEO, Horizon Capital',
      location: 'Dubai',
      rating: 5
    },
    {
      id: 6,
      quote: 'The quality of ingredients and chocolate conching is authentic. You can taste the purity in every bite. The Custom Box Builder tool on their website was so fun to use!',
      name: 'Dr. Meera Iyer',
      designation: 'Healthcare Professional',
      location: 'New Delhi',
      rating: 5
    }
  ];

  const N = testimonials.length;

  // Triplicate testimonials (set 0 = clone buffer before, set 1 = main set, set 2 = clone buffer after)
  // Enables completely seamless forward and backward wrap-around without glitches or rewinding.
  const extendedTestimonials = [
    ...testimonials.map((t) => ({ ...t, keyId: `set0-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, keyId: `set1-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, keyId: `set2-${t.id}` }))
  ];

  // Start at index N (first review of main set)
  const [trackIndex, setTrackIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Responsive dimensions for precise track translation and centering
  const [dimensions, setDimensions] = useState(() => {
    const isClient = typeof window !== 'undefined';
    const winWidth = isClient ? window.innerWidth : 1024;
    const isMobile = winWidth < 640;
    const cardWidth = isMobile ? Math.min(winWidth * 0.84, 325) : (winWidth < 768 ? 380 : 400);
    const gap = isMobile ? 12 : 24;
    return {
      containerWidth: Math.min(winWidth, 1152),
      cardWidth,
      gap
    };
  });

  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const firstCard = containerRef.current.querySelector('[data-testimonial-card]');
    const isMobile = window.innerWidth < 640;
    const cardWidth = firstCard ? firstCard.offsetWidth : (isMobile ? Math.min(window.innerWidth * 0.84, 325) : 380);
    let gap = isMobile ? 12 : 24;
    if (trackRef.current) {
      const computedGap = parseFloat(window.getComputedStyle(trackRef.current).gap);
      if (!isNaN(computedGap) && computedGap > 0) {
        gap = computedGap;
      }
    }
    setDimensions({ containerWidth, cardWidth, gap });
  }, []);

  useEffect(() => {
    updateDimensions();
    const handleResize = () => {
      setIsTransitioning(false);
      updateDimensions();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions]);

  const temporarilyPause = useCallback(() => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  // Seamless clone reset helper (instant silent position jump)
  const resetClonePositionIfNeeded = useCallback((index) => {
    if (index >= N * 2) {
      setIsTransitioning(false);
      setTrackIndex(index - N);
    } else if (index < N) {
      setIsTransitioning(false);
      setTrackIndex(index + N);
    }
  }, [N]);

  const handleTransitionEnd = useCallback(() => {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    resetClonePositionIfNeeded(trackIndex);
  }, [trackIndex, resetClonePositionIfNeeded]);

  // Re-enable CSS transition smoothly after an instant teleport
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

  // Safety timer in case browser tab switching delays transitionend
  useEffect(() => {
    if (isTransitioning) {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = setTimeout(() => {
        resetClonePositionIfNeeded(trackIndex);
      }, TRANSITION_MS + 60);
    }
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [trackIndex, isTransitioning, resetClonePositionIfNeeded]);

  // Handle visibility change so backgrounded tabs don't desync
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsTransitioning(false);
        setTrackIndex((prev) => {
          if (prev >= N * 2) return prev - N;
          if (prev < N) return prev + N;
          return prev;
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [N]);

  const handleNext = useCallback(() => {
    temporarilyPause();
    setIsTransitioning(true);
    setTrackIndex((prev) => prev + 1);
  }, [temporarilyPause]);

  const handlePrev = useCallback(() => {
    temporarilyPause();
    setIsTransitioning(true);
    setTrackIndex((prev) => prev - 1);
  }, [temporarilyPause]);

  // Jump to specific slide using the shortest path (e.g. from 5 to 0 slides forward naturally)
  const scrollToSlide = useCallback((targetIdx) => {
    temporarilyPause();
    setIsTransitioning(true);
    const currentActive = ((trackIndex - N) % N + N) % N;
    const diff = targetIdx - currentActive;
    let shortestDiff = diff;
    if (diff > N / 2) {
      shortestDiff = diff - N;
    } else if (diff < -N / 2) {
      shortestDiff = diff + N;
    }
    setTrackIndex((prev) => prev + shortestDiff);
  }, [trackIndex, N, temporarilyPause]);

  // Touch Swipe Handling on mobile
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, isHorizontal: null });

  const handleTouchStart = (e) => {
    temporarilyPause();
    dragStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      isHorizontal: null
    };
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - dragStartRef.current.x;
    const deltaY = currentY - dragStartRef.current.y;

    if (dragStartRef.current.isHorizontal === null) {
      if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
        dragStartRef.current.isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (dragStartRef.current.isHorizontal) {
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 40;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Continuous auto-scroll interval (pauses cleanly on hover / touch)
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTrackIndex((prev) => prev + 1);
    }, AUTO_SCROLL_MS);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // Mathematical center alignment calculation
  const step = dimensions.cardWidth + dimensions.gap;
  const centerOffset = (dimensions.containerWidth - dimensions.cardWidth) / 2;
  const currentTranslateX = centerOffset - trackIndex * step + dragOffset;
  const activeSlide = ((trackIndex - N) % N + N) % N;

  return (
    <section id="testimonials" className="w-full bg-[#FAF9F6] text-[#111827] py-8 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-[#C8102E] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3 shadow-xs">
            <span>AUTHENTIC SWEET MOMENTS</span>
          </div>

          <h2 className="text-xl sm:text-4xl md:text-5xl font-outfit font-black text-[#111827] tracking-tight leading-tight mb-1.5 sm:mb-3">
            Loved Across Generations &{' '}
            <span className="font-serif italic text-[#C8102E] font-normal block sm:inline">
              Retail Counters.
            </span>
          </h2>

          <p className="text-[11px] sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            From classroom birthday celebrations to international corporate hampers, discover why partners and sweettooths trust Mr. Sweet.
          </p>
        </div>

        {/* HORIZONTAL INFINITE CAROUSEL TRACK */}
        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto overflow-hidden select-none py-2 touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTransitionEnd={handleTransitionEnd}
            className="flex items-stretch gap-3 sm:gap-6 will-change-transform"
            style={{
              transform: `translate3d(${currentTranslateX}px, 0, 0)`,
              transition: isTransitioning && !isDragging
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
                : 'none'
            }}
          >
            {extendedTestimonials.map((item, index) => {
              const isCardActive = index === trackIndex;
              return (
                <div
                  key={`${item.keyId}-${index}`}
                  data-testimonial-card
                  className={`w-[84vw] max-w-[325px] sm:w-[380px] md:w-[400px] shrink-0 bg-white border p-4 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                    isCardActive
                      ? 'border-red-200 shadow-md ring-1 ring-red-100/70 opacity-100'
                      : 'border-red-100/80 opacity-75 sm:opacity-90 hover:opacity-100'
                  }`}
                >
                  <Quote className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-12 sm:h-12 text-[#C8102E]/10 pointer-events-none" />

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-2 sm:mb-3">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-[12px] sm:text-base font-serif italic text-[#111827] leading-relaxed font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Person / Company Details */}
                  <div className="pt-3 sm:pt-4 border-t border-red-100 flex items-center justify-between gap-1.5 mt-3 sm:mt-5">
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#111827] truncate">
                        {item.name}
                      </h3>
                      <div className="text-[9.5px] sm:text-xs text-[#C8102E] font-medium flex items-center gap-1 mt-0.5 truncate">
                        <Building2 className="w-3 h-3 text-[#C8102E] shrink-0" />
                        <span className="truncate">{item.designation}</span>
                      </div>
                    </div>

                    <div className="text-[9.5px] sm:text-xs text-gray-500 flex items-center gap-1 shrink-0">
                      <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Dots + Arrows */}
          <div className="flex items-center justify-between mt-3 sm:mt-6 px-3">
            {/* Slider Indicator Dots + Infinite badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToSlide(idx)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === idx ? 'bg-[#C8102E] w-5 sm:w-7' : 'bg-gray-200 w-1.5 sm:w-2 hover:bg-red-200'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-gray-400 bg-red-50/50 border border-red-100/70 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                <span>Infinite Stream</span>
              </div>
            </div>

            {/* Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-red-200 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] hover:bg-red-50/50 transition-all flex items-center justify-center shadow-xs active:scale-90 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-red-200 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] hover:bg-red-50/50 transition-all flex items-center justify-center shadow-xs active:scale-90 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
