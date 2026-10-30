import React from 'react';
import DualTickerBanner from './DualTickerBanner';

export default function CollectionsGrid({ onSelectCategory }) {
  const categories = [
    {
      id: 'wafers',
      title: 'Baked Treats',
      bgColor: 'bg-[#FFC709]',
      textColor: 'text-[#111827]',
      btnColor: 'text-[#111827]',
      image: '/romeo choco cone.png',
      alt: 'Baked treats & wafer cones'
    },
    {
      id: 'chocolates',
      title: 'Chocolates',
      bgColor: 'bg-[#FF85B3]',
      textColor: 'text-[#111827]',
      btnColor: 'text-[#111827]',
      image: '/swiss choclate.png',
      alt: 'Artisanal chocolates'
    },
    {
      id: 'jellies',
      title: 'Jellies',
      bgColor: 'bg-[#2F65FF]',
      textColor: 'text-white',
      btnColor: 'text-white',
      image: '/morning jelly.png',
      alt: 'Fruit jellies & gummies'
    },
    {
      id: 'candies',
      title: 'Candies',
      bgColor: 'bg-[#20D09B]',
      textColor: 'text-[#111827]',
      btnColor: 'text-[#111827]',
      image: '/chingum.png',
      alt: 'Sweet candies & bubble gums'
    }
  ];

  return (
    <section id="products" className="w-full bg-[#FAF9F6] pt-12 sm:pt-24 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-8 border-t border-red-100/60">
      <div className="max-w-7xl mx-auto">
        {/* Top Catalogue Pill Badge */}
        <div className="mb-4">
          <span className="bg-[#FFC709] text-[#111827] font-fredoka text-xs font-bold px-4 py-1.5 rounded-full inline-block shadow-xs uppercase tracking-wider">
            The Mr. Sweets catalogue
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black text-[#111827] tracking-tight leading-[1.05]">
              Every treat,{' '}
              <span className="font-serif-italic font-normal text-[#C8102E] block sm:inline">
                in one place.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 max-w-xs font-medium leading-relaxed">
            Chocolates, baked treats, jellies and candies from Mr. Sweets. Pick a lane or browse it all.
          </p>
        </div>

        {/* 4 Pastel Color Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className={`${cat.bgColor} ${cat.textColor} rounded-3xl p-5 sm:p-7 relative overflow-hidden flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group`}
            >
              {/* Top Left Explore Link */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[11px] sm:text-xs font-fredoka font-bold uppercase tracking-wider flex items-center gap-1 ${cat.btnColor}`}>
                  EXPLORE →
                </span>
              </div>

              {/* Top Right White Circle Pod holding Product Image */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-3.5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-0">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Bottom Left Category Title */}
              <div className="relative z-10 mt-auto pt-20 sm:pt-24">
                <h3 className="text-2xl sm:text-3xl font-outfit font-black tracking-tight leading-none">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlapping Dual Ticker Banner below the 4 cards leading into Product Showcase Portfolio */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <DualTickerBanner variant="catalogue" />
      </div>
    </section>
  );
}
