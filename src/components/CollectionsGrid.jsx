import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CollectionsGrid({ onSelectCategory }) {
  const collections = [
    {
      id: 'wafers',
      title: 'Wafer Cones & Crisp Bars',
      subtitle: 'Dairy Cones, Swiss Wafer Rolls & NutyMax',
      image: '/dairy cone.png',
      badge: 'Crispy Crunch',
      count: '9 Formats',
      tagline: 'Dairy Cones • Wafers'
    },
    {
      id: 'toys',
      title: 'Surprise Toys & Novelties',
      subtitle: 'Krispy Toy, Super Heroes & Mr. Joe',
      image: '/morning jelly.png',
      badge: 'Toy Edition',
      count: '5 Creations',
      tagline: 'Surprise Toys'
    },
    {
      id: 'gummies',
      title: 'Fruit Jellies & Gummies',
      subtitle: 'Bunny Pops, Sundae Jellies & Sour Belts',
      image: '/hunny bunny pops.png',
      badge: 'Real Fruit',
      count: '6 Varieties',
      tagline: 'Fruity Jellies'
    },
    {
      id: 'tins',
      title: 'Snack & Festive Tubs',
      subtitle: 'Brawo Choco Bars & Gold Coins Tubs',
      image: '/brawo.png',
      badge: 'Keepsake Tubs',
      count: 'Bulk Jars',
      tagline: 'Snack Tubs'
    }
  ];

  return (
    <section id="iconic-range" className="w-full bg-[#FDFBF7] py-8 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-2 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1 sm:mb-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>CURATED CONFECTIONERY COLLECTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
              Masterpiece{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal">
                Categories.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-base text-[#4F3A34] max-w-md font-normal hidden sm:block">
            Explore our curated collections of artisanal sweets, signature choco cones, and luxury gifting boxes.
          </p>
        </div>

        {/* Collections Grid - 2 columns on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="group relative bg-white border border-cream-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[210px] sm:min-h-[420px]"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 overflow-hidden bg-[#18110F]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110C0A] via-[#110C0A]/60 to-black/30 pointer-events-none" />
              </div>

              {/* Top Card Badge */}
              <div className="relative z-10 p-3 sm:p-6 flex items-center justify-between gap-1">
                <span className="bg-white/90 backdrop-blur-md text-[#231815] text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-sm truncate">
                  {item.badge}
                </span>
                <span className="bg-[#110C0A]/80 backdrop-blur-md text-[#D4AF37] text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-[#D4AF37]/30 shrink-0">
                  {item.count}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-3 sm:p-8 text-white">
                <div className="text-[9px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                  {item.tagline}
                </div>
                <h3 className="text-sm sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-2 group-hover:text-amber-200 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-300 mb-2 sm:mb-4 font-normal line-clamp-1 hidden sm:block">
                  {item.subtitle}
                </p>

                <div className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C8102E] transition-colors">
                  <span>EXPLORE</span>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-[#C8102E] flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
