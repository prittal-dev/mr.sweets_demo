import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export default function CustomerReviewsSection() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: '“Romeo Cones stole the birthday show!”',
      quote: '“Ordered 4 boxes for my son’s classroom party. The chocolate swirl was rich, and every single cone remained incredibly crispy until the last bite.”',
      author: 'Pooja R.',
      location: 'Mumbai • Verified Purchase'
    },
    {
      id: 2,
      rating: 5,
      title: '“NutyMax is an unbelievable snack treat!”',
      quote: '“The roasted peanut topping with stretchy caramel on top of crisp wafer is delicious. We keep a wholesale carton at our workspace cafeteria.”',
      author: 'Arjun K.',
      location: 'Bengaluru • Pantry Manager'
    },
    {
      id: 3,
      rating: 5,
      title: '“Gold Coins jar looks like true royal treasure”',
      quote: '“The detailed embossing on the foil and reusable clear jar made it our Diwali gift hamper centerpiece. Loved by elders and kids alike.”',
      author: 'Sunita M.',
      location: 'New Delhi • Event Stylist'
    }
  ];

  return (
    <section id="reviews" className="w-full bg-[#FDFBF7] py-6 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-amber-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-12 gap-2 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-1">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>AUTHENTIC SWEET MOMENTS</span>
            </div>
            <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
              Loved Across Generations
            </h2>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white border border-amber-900/15 px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-xs text-[10px] sm:text-xs font-bold text-[#8B7355] self-start md:self-auto">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
              ))}
            </div>
            <span>Over 25,000+ verified reviews</span>
          </div>
        </div>

        {/* Review Cards: Horizontal swipe on mobile (-mx-3 px-3), 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-3 px-3 pb-2 md:pb-0 md:mx-0 md:px-0">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[82vw] md:w-auto bg-white border border-amber-900/15 p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-2 sm:mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="text-xs sm:text-base font-extrabold text-[#231815] mb-1.5 sm:mb-3 leading-snug group-hover:text-[#C8102E] transition-colors">
                  {item.title}
                </h3>

                {/* Review Quote */}
                <p className="text-[11px] sm:text-sm text-[#4F3A34] font-normal leading-relaxed mb-3 sm:mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-2.5 sm:pt-4 border-t border-amber-900/10">
                <div className="font-extrabold text-[11px] sm:text-xs text-[#231815]">{item.author}</div>
                <div className="text-[10px] sm:text-[11px] text-[#8B7355] font-medium mt-0.5">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

