import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

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
      title: '“NutyMax is unbelievable value at ₹10”',
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    // Form Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section id="reviews" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC SWEET MOMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
              Loved Across Generations
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white border border-cream-300 px-4 py-2 rounded-full shadow-soft text-xs font-bold text-[#8B7355] self-start md:self-auto">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span>Over 25,000+ verified customer reviews</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-cream-300 p-6 sm:p-8 rounded-3xl shadow-soft hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="text-base font-extrabold text-[#231815] mb-3 leading-snug group-hover:text-[#C8102E] transition-colors">
                  {item.title}
                </h3>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#4F3A34] font-normal leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-cream-200">
                <div className="font-extrabold text-xs text-[#231815]">{item.author}</div>
                <div className="text-[11px] text-[#8B7355] font-medium mt-0.5">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
