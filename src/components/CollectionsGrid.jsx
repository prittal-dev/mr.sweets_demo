import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CollectionsGrid({ onSelectCategory }) {
  const collections = [
    {
      id: 'wafers',
      title: 'Wafer Cones & Crisp Bars',
      subtitle: 'Dairy Cones, Swiss Wafer Rolls, NutyMax & Crisp Bars',
      image: '/dairy cone.png',
      badge: 'Crispy Crunch Range',
      count: '9 Formats',
      tagline: 'Dairy Cones • Swiss Wafer Rolls • NutyMax'
    },
    {
      id: 'toys',
      title: 'Surprise Toys & Novelties',
      subtitle: 'Krispy Toy, Super Heroes, Mr. Joe & Junglor Joe',
      image: '/morning jelly.png',
      badge: 'Toy Inside Edition',
      count: '5 Creations',
      tagline: 'Krispy Toy • Super Heroes • Mr. Joe'
    },
    {
      id: 'gummies',
      title: 'Fruit Jellies & Gummies',
      subtitle: 'Hunny Bunny Pops, Ice Cream Jellies, Sour Belts & Aam Papad',
      image: '/hunny bunny pops.png',
      badge: 'Real Fruit Flavor',
      count: '6 Varieties',
      tagline: 'Bunny Pops • Sundae Jellies • Sour Belts'
    },
    {
      id: 'tins',
      title: 'Snack & Festive Tubs',
      subtitle: 'Brawo Choco Bars, 999.9 Gold Coins & Morning Jelly Tubs',
      image: '/brawo.png',
      badge: 'Keepsake Tubs',
      count: 'Bulk Jars',
      tagline: 'Brawo Choco • Gold Coins • Morning Jelly'
    }
  ];

  return (
    <section id="iconic-range" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED CONFECTIONERY COLLECTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
              Masterpiece{' '}
              <span className="font-serif-italic text-[#C8102E] font-normal">
                Categories.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4F3A34] max-w-md font-normal">
            Explore our curated collections of artisanal sweets, signature choco cones, and luxury gifting boxes.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="group relative bg-white border border-cream-300 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[380px] sm:min-h-[420px]"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 overflow-hidden bg-[#18110F]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110C0A] via-[#110C0A]/65 to-black/20 pointer-events-none" />
              </div>

              {/* Top Card Badge */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-white/90 backdrop-blur-md text-[#231815] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                  {item.badge}
                </span>
                <span className="bg-[#110C0A]/80 backdrop-blur-md text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                  {item.count}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-6 sm:p-8 text-white">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">
                  {item.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 font-normal">
                  {item.subtitle}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C8102E] transition-colors">
                  <span>EXPLORE COLLECTION</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#C8102E] flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white" />
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
