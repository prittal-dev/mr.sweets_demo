import React from 'react';

export default function DualTickerBanner({ variant = 'default' }) {
  const isCatalogue = variant === 'catalogue';

  const defaultRedItems = [
    { text: 'Revolutionising snacking', italic: false },
    { text: 'made with love in India', italic: true },
    { text: 'Big smiles, tiny treats', italic: false },
    { text: 'from our kitchen to your corner store', italic: true },
    { text: 'crafted with pure passion', italic: false },
    { text: '100% vegetarian delight', italic: true }
  ];

  const catalogueRedItems = [
    { text: 'Every treat, in one place', italic: false },
    { text: 'find your favourite', italic: true },
    { text: 'Chocolates • Wafers • Jellies • Candies', italic: true },
    { text: 'Big smiles, tiny treats', italic: false },
    { text: 'from our kitchen to your corner store', italic: true }
  ];

  const defaultYellowItems = [
    { text: 'For the first bite after school', italic: false },
    { text: 'for the Diwali box on the table', italic: true },
    { text: 'For the 4 pm chai break', italic: false },
    { text: 'for the kid in all of us', italic: true },
    { text: 'for late night cravings', italic: true },
    { text: 'For birthday celebration hampers', italic: false }
  ];

  const catalogueYellowItems = [
    { text: 'Pouches for sharing', italic: false },
    { text: 'trays for the party', italic: true },
    { text: 'Packs for the counter', italic: false },
    { text: 'boxes for gifting', italic: true },
    { text: 'For the 4 pm chai break', italic: false },
    { text: 'for the kid in all of us', italic: true }
  ];

  const redBannerItems = isCatalogue ? catalogueRedItems : defaultRedItems;
  const yellowBannerItems = isCatalogue ? catalogueYellowItems : defaultYellowItems;

  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-5 md:py-6 bg-[#FAF9F6] border-y border-red-100/60 flex flex-col gap-1.5 sm:gap-3.5">
      {/* 1. Top Red Ticker Banner */}
      <div className="w-full bg-[#C8102E] text-white py-1.5 sm:py-3.5 md:py-4.5 shadow-xs sm:shadow-md overflow-hidden relative z-10">
        <div className="animate-marquee flex items-center gap-5 sm:gap-10 md:gap-12 whitespace-nowrap">
          {[...redBannerItems, ...redBannerItems, ...redBannerItems, ...redBannerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 sm:gap-7 md:gap-9 shrink-0">
              <span
                className={`text-[11px] sm:text-lg md:text-xl lg:text-2xl tracking-tight ${
                  item.italic
                    ? 'font-serif-italic text-white font-normal'
                    : 'font-outfit font-black text-white'
                }`}
              >
                {item.text}
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-300 shrink-0 opacity-80" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Bottom Angled Yellow Ticker Banner with Visible Gap */}
      <div className="w-full bg-[#FFC709] text-[#111827] py-1.5 sm:py-3.5 md:py-4.5 shadow-xs sm:shadow-md overflow-hidden relative z-20 -rotate-1 scale-[1.02] origin-center mt-0.5 sm:mt-1.5">
        <div className="animate-marquee flex items-center gap-5 sm:gap-10 md:gap-12 whitespace-nowrap">
          {[...yellowBannerItems, ...yellowBannerItems, ...yellowBannerItems, ...yellowBannerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 sm:gap-7 md:gap-9 shrink-0">
              <span
                className={`text-[11px] sm:text-lg md:text-xl lg:text-2xl tracking-tight ${
                  item.italic
                    ? 'font-serif-italic text-red-950 font-normal'
                    : 'font-outfit font-black text-[#111827]'
                }`}
              >
                {item.text}
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#E51920] shrink-0 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
