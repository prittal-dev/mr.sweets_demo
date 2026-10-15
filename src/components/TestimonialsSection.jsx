import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building2 } from 'lucide-react';

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

  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const firstCard = scrollRef.current.children[0];
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 14;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveSlide(Math.min(Math.max(0, index), testimonials.length - 1));
      }
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (activeSlide + 1) % testimonials.length;
    scrollToSlide(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeSlide - 1 + testimonials.length) % testimonials.length;
    scrollToSlide(prevIdx);
  };

  // Auto advance smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIdx = (activeSlide + 1) % testimonials.length;
        scrollToSlide(nextIdx);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide, testimonials.length]);

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

        {/* HORIZONTAL SWIPEABLE TESTIMONIALS TRACK */}
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-3 pt-1 px-3 sm:px-4 scroll-smooth"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[84vw] max-w-[325px] sm:w-[380px] md:w-[400px] shrink-0 snap-center bg-white border border-red-100 p-4 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
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
            ))}
          </div>

          {/* Navigation Controls: Dots + Auto status + Arrows */}
          <div className="flex items-center justify-between mt-3 sm:mt-6 px-3">
            {/* Slider Indicator Dots + Auto Status */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      lastInteractionTime.current = Date.now();
                      scrollToSlide(idx);
                    }}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === idx ? 'bg-[#C8102E] w-5 sm:w-7' : 'bg-gray-200 w-1.5 sm:w-2 hover:bg-red-200'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Subtle Auto-playing Pill */}
              <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10.5px] font-medium text-gray-400 bg-red-50/60 border border-red-100/80 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                <span>Auto-changing</span>
              </div>
            </div>

            {/* Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-red-100 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] transition-all flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={handleNext}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-red-100 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] transition-all flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
