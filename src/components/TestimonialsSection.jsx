import React from 'react';
import { Star, Quote, MapPin, Building2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Romeo Choco Cones and Dairy Roll are top sellers in our wholesale network. Retailers in Rohtak reorder every single week because the crunch and chocolate quality beat every competitor.',
      name: 'Ansh Budhiraja',
      designation: 'FMCG Distributor',
      location: 'Rohtak (Haryana)',
      rating: 5
    },
    {
      id: 2,
      quote:
        'Mr. Sweet’s packaging stands out instantly on shop shelves in Varanasi. The moisture-proof sealing keeps every wafer crisp and fresh, and repeat customer demand is exceptional.',
      name: 'Sunil Lalwani',
      designation: 'Wholesale Stockist',
      location: 'Varanasi (Uttar Pradesh)',
      rating: 5
    },
    {
      id: 3,
      quote:
        'Distributing across Assam and the North-East requires reliable shelf life and sturdy cartons. Mr. Sweet delivers authentic Swiss-grade taste that our retail network trusts wholeheartedly.',
      name: 'Sarthak Kaala',
      designation: 'North-East Super Stockist',
      location: 'Guwahati (Assam)',
      rating: 5
    },
    {
      id: 4,
      quote:
        'Consistent supply, fair wholesale margins, and prompt dispatch make Mr. Sweet our number one confectionery brand in Siwan. The Fun Pops and Swiss Wafers sell out as soon as cartons arrive.',
      name: 'Sanjay Ji',
      designation: 'Wholesale Partner',
      location: 'Siwan (Bihar)',
      rating: 5
    },
    {
      id: 5,
      quote:
        'In the fast-moving Mumbai & Thane retail markets, product quality speaks for itself. The chocolate cream filling is rich, 100% vegetarian, and retail store owners enjoy excellent margins.',
      name: 'Vinod Gupta',
      designation: 'Wholesale Distributor',
      location: 'Ulhasnagar (Maharashtra)',
      rating: 5
    },
    {
      id: 6,
      quote:
        'Mr. Sweet products have become a household name across Srinagar. Even in freezing winter temperatures, the chocolate cones and wafer sticks retain their rich texture and perfect crunch.',
      name: 'Asif Meer',
      designation: 'Kashmir Trade Partner',
      location: 'Srinagar, Kashmir (J&K)',
      rating: 5
    }
  ];

  // Duplicated twice for seamless, glitch-free 0% to -50% infinite marquee loop
  const marqueeCards = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#FAF6EE] text-[#18110F] py-12 sm:py-20 md:py-24 border-t border-[#EFE8DA] relative overflow-hidden select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,199,44,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF4EB] border border-[#F6D5DA] text-[#8B001D] px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-outfit font-black uppercase tracking-wider mb-2.5 sm:mb-3 shadow-2xs">
            <span>AUTHENTIC PARTNER EXPERIENCES • PAN-INDIA NETWORK</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-outfit font-black text-[#18110F] tracking-tight leading-tight mb-2.5 sm:mb-3">
            Trusted by Wholesalers &amp;{' '}
            <span className="font-serif-italic text-[#8B001D] font-normal block sm:inline">
              Retailers Across India.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto px-2">
            From Haryana to Maharashtra, and Assam to Kashmir — hear how leading distributors grow their confectionery business with Mr. Sweet.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scroll Track Container with Gradient Edge Fade */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Soft Fade Masks (Desktop only for graceful edge fade) */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent z-20 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent z-20 pointer-events-none" />

        {/* The Continuous Infinite Scrolling Track */}
        <div
          className="animate-marquee flex items-stretch gap-4 sm:gap-6 py-3 cursor-grab active:cursor-grabbing"
          style={{
            animationDuration: '38s'
          }}
        >
          {marqueeCards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[84vw] max-w-[320px] sm:w-[380px] md:w-[410px] shrink-0 bg-white border border-[#EADBCE] hover:border-[#8B001D]/40 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background Decorative Quote Watermark */}
              <Quote className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-12 sm:h-12 text-[#C8102E]/10 pointer-events-none" />

              <div>
                {/* 5 Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-2.5 sm:mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-[12.5px] sm:text-base font-serif italic text-[#1F2937] leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client & Location Footer */}
              <div className="pt-3.5 sm:pt-4 border-t border-red-50 flex items-center justify-between gap-2 mt-4 sm:mt-6">
                <div className="min-w-0 pr-1">
                  <h3 className="text-xs sm:text-sm font-outfit font-black text-[#111827] truncate">
                    {item.name}
                  </h3>
                  <div className="text-[10px] sm:text-xs text-[#8B001D] font-bold flex items-center gap-1 mt-0.5 truncate">
                    <Building2 className="w-3 h-3 text-[#8B001D] shrink-0" />
                    <span className="truncate">{item.designation}</span>
                  </div>
                </div>

                <div className="text-[9.5px] sm:text-xs font-medium text-gray-500 bg-[#FAF4EB] border border-[#F0DFD3] px-2 py-1 rounded-full flex items-center gap-1 shrink-0">
                  <MapPin className="w-3 h-3 text-[#8B001D] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
