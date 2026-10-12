import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MapPin, Building2 } from 'lucide-react';

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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="w-full bg-[#FAF9F6] text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>AUTHENTIC SWEET MOMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            Loved Across Generations &{' '}
            <span className="font-serif italic text-[#C8102E] font-normal block sm:inline">
              Retail Counters.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From classroom birthday celebrations to international corporate hampers, discover why partners and sweettooths trust Mr. Sweet.
          </p>
        </div>

        {/* CAROUSEL / SLIDER CONTAINER */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-12">
          {/* Main Slide Box */}
          <div className="bg-white border border-red-100 p-6 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#C8102E]/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-2xl font-serif italic text-[#111827] leading-relaxed font-normal">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Person / Company Details */}
                <div className="pt-6 border-t border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#111827]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="text-xs text-[#C8102E] font-medium flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                      <span>{testimonials[currentIndex].designation}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{testimonials[currentIndex].location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Slider Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-[#C8102E] w-8' : 'bg-gray-200 w-2.5 hover:bg-red-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-red-100 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] transition-all flex items-center justify-center shadow-md active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-red-100 text-[#111827] hover:border-[#C8102E] hover:text-[#C8102E] transition-all flex items-center justify-center shadow-md active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
