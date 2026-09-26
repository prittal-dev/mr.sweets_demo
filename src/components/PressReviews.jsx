import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export default function PressReviews() {
  const [activeReview, setActiveReview] = useState(0);

  const pressQuotes = [
    {
      publication: 'VOGUE INDIA',
      quote: 'Mr. Sweet has successfully elevated Indian mithai into the realm of haute luxury patisserie. Their Romeo Choco Cones are a revelation.',
      tag: 'Luxury Gourmet Guide 2026'
    },
    {
      publication: 'ARCHITECTURAL DIGEST',
      quote: 'The packaging alone belongs in an art gallery. Velvet-lined gift vaults stamped with 24K gold foil setting a new benchmark for wedding favors.',
      tag: 'Design & Living Issue'
    },
    {
      publication: 'HARPER’S BAZAAR',
      quote: 'Handcrafted with unyielding purity. Pure A2 Ghee and Kashmiri Saffron make Mr. Sweet the undisputed jewel of Indian confectionery.',
      tag: 'The Haute List'
    }
  ];

  const customerReviews = [
    {
      name: 'Sunita & Vikram Kapoor',
      location: 'Mumbai High Society Wedding',
      review: 'We ordered 350 custom gold foil velvet boxes for our daughter’s wedding in Udaipur. Our international guests were absolutely stunned by the Kaju Katli and Romeo Choco Cones!',
      rating: 5,
      date: 'September 2026'
    },
    {
      name: 'Rajesh Mehta',
      location: 'CEO, Horizon Capital (Dubai)',
      review: 'The B2B corporate hamper service is unmatched. Temperature sealed express shipping to Dubai ensured our clients received fresh, melt-in-the-mouth pedas.',
      rating: 5,
      date: 'August 2026'
    },
    {
      name: 'Dr. Meera Iyer',
      location: 'New Delhi',
      review: 'The quality of ghee and saffron is authentic. You can taste the purity in every bite. The Custom Box Builder tool on their website was so fun to use!',
      rating: 5,
      date: 'September 2026'
    }
  ];

  return (
    <section id="reviews" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Press Accolades Banner */}
        <div className="bg-[#18110F] text-[#EFE8DA] p-8 sm:p-12 rounded-3xl md:rounded-4xl border border-[#362823] shadow-floating mb-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-[0.25em] mb-4">
              <Award className="w-4 h-4" />
              <span>ACCLAIM & PRESS RECOGNITION</span>
            </div>

            <Quote className="w-10 h-10 text-[#C8102E] mx-auto mb-4 opacity-80" />

            <p className="text-xl sm:text-2xl md:text-3xl font-serif-italic text-white mb-6 leading-relaxed">
              "{pressQuotes[activeReview].quote}"
            </p>

            <div className="flex flex-col items-center">
              <span className="text-sm font-extrabold text-[#D4AF37] tracking-widest uppercase">
                — {pressQuotes[activeReview].publication}
              </span>
              <span className="text-xs text-gray-400 mt-1 font-medium">
                {pressQuotes[activeReview].tag}
              </span>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {pressQuotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReview(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeReview === idx ? 'bg-[#C8102E] w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231815] tracking-tight">
              Loved by Sweettooths{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal">
                Worldwide.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-cream-300 p-6 rounded-3xl shadow-soft flex flex-col justify-between hover:border-[#C8102E]/30 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4F3A34] mb-6 leading-relaxed font-normal">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#231815]">{item.name}</div>
                    <div className="text-gray-400 text-[11px]">{item.location}</div>
                  </div>
                  <span className="text-gray-400 text-[11px] font-medium">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
