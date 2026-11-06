import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Search, X, Eye, ArrowRight } from 'lucide-react';
import { showcaseProducts } from '../data/products';
import { getProductImage, handleImageError } from '../utils/imageUrl';

// Exact 9 Categories from Handwritten Notebooks & Master Price List
const FILTER_TABS = [
  { id: 'all', label: 'ALL PRODUCTS' },
  { id: 'cream-waffer', label: 'CREAM WAFFER' },
  { id: 'waffer-sticks', label: 'WAFFER STICKS' },
  { id: 'cones', label: 'CONES' },
  { id: 'surprise-eggs', label: 'SURPRISE EGGS' },
  { id: 'chocolate-waffer', label: 'CHOCOLATE WAFFERS' },
  { id: 'caramel-waffers', label: 'CARAMEL WAFFERS' },
  { id: 'chewing-gum', label: 'CHEWING GUM' },
  { id: 'candies-toffee', label: 'CANDIES & TOFFEE' },
  { id: 'jellies', label: 'JELLIES' },
];

export default function IconicCatalog({
  onEnquire,
  onQuickView,
  selectedCategory = 'all',
  onSelectCategory,
  forceFullView = false
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedFlavors, setSelectedFlavors] = useState({});

  // Sync external category changes (e.g. from banner pills or navigation)
  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory === 'cones') setActiveFilter('cones');
      else if (selectedCategory === 'all') setActiveFilter('all');
      else if (selectedCategory === 'chocolates') setActiveFilter('chocolate-waffer');
      else if (selectedCategory === 'candies') setActiveFilter('candies-toffee');
      else if (selectedCategory === 'wafers') setActiveFilter('waffer-sticks');
      else setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  // Helper for dynamic product image based on selected flavor (e.g. for Swiss Waffer)
  const getCardImage = (product) => {
    if (product.flavorImages) {
      const activeFlavor = selectedFlavors[product.id] || 'Mango';
      return product.flavorImages[activeFlavor] || product.image;
    }
    return product.image;
  };

  // Helper for subtle product-specific background tint
  const getProductCardBg = (product) => {
    const slug = product.categorySlug || '';
    if (slug === 'cones') return 'bg-[#FFF8EE]';
    if (slug === 'waffer-sticks' || slug === 'cream-waffer') return 'bg-[#F2F7FC]';
    if (slug === 'chocolate-waffer' || slug === 'caramel-waffers') return 'bg-[#FDF4EE]';
    if (slug === 'jellies') return 'bg-[#F2FAF4]';
    if (slug === 'chewing-gum') return 'bg-[#F8F4FD]';
    return 'bg-[#FAF6EE]';
  };

  // Filter products by selected category and search query
  const filteredProducts = showcaseProducts.filter((product) => {
    // 1. Category Filter
    let matchesCategory = true;
    if (activeFilter !== 'all') {
      matchesCategory = product.categorySlug === activeFilter;
    }

    // 2. Search Filter
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.packing || '').toLowerCase().includes(q) ||
        (product.flavors && product.flavors.some((f) => f.toLowerCase().includes(q)));
    }

    return matchesCategory && matchesSearch;
  });

  const displayedProducts = forceFullView
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  return (
    <section
      id="products"
      className="w-full bg-[#FAF7EE] text-[#18110F] py-10 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 border-t border-[#EFE8DA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================
            HEADER: Heading & Supporting Text
            ========================================================= */}
        <div className="mb-6 sm:mb-10 text-left">
          {/* Small Eyebrow Badge */}
          <div className="inline-flex items-center bg-white border border-amber-900/10 text-[#8B001D] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9.5px] sm:text-xs font-outfit font-black uppercase tracking-wider mb-2 sm:mb-2.5 shadow-2xs">
            <span className="sm:hidden">{showcaseProducts.length} PREMIUM QUALITY PRODUCTS</span>
            <span className="hidden sm:inline">OFFICIAL PRODUCT PORTFOLIO • {showcaseProducts.length} PREMIUM QUALITY PRODUCTS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-outfit font-black text-[#18110F] tracking-tight leading-[1.08]">
            A world of treats,{' '}
            <span className="font-serif-italic font-normal text-[#8B001D] block sm:inline">
              made to delight.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-normal leading-relaxed mt-2 max-w-2xl">
            Click any confection to view complete packaging, master carton units, and wholesale rates.
          </p>
        </div>

        {/* =========================================================
            FILTERS: Pill-Shaped Category Filters & Search
            ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 mb-6 sm:mb-8 pb-4 border-b border-amber-900/10">
          {/* Pill Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setVisibleCount(16);
                    if (onSelectCategory) {
                      onSelectCategory(tab.id);
                    }
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-outfit font-black uppercase tracking-wider transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#8B001D] text-white border border-[#700516] shadow-sm scale-102'
                      : 'bg-white hover:bg-[#FAF6EE] text-[#18110F] hover:text-[#8B001D] border border-amber-900/15 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search SKU Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product or flavour..."
              className="w-full bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-full pl-8 pr-7 py-1.5 text-xs font-outfit text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* =========================================================
            PRODUCT CARDS GRID: Exactly 4 cards in 1 line
            ========================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-amber-900/10 p-8 max-w-lg mx-auto">
            <p className="text-base font-outfit font-black text-[#18110F] mb-1.5">No matching confections found</p>
            <p className="text-xs text-gray-500 mb-4">Try adjusting your search terms or filter category.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="bg-[#8B001D] text-white px-5 py-2 rounded-full text-xs font-outfit font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 min-[540px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
            {displayedProducts.map((p) => {
              const bgTint = getProductCardBg(p);
              const cardImage = getCardImage(p);
              const activeFlavor = selectedFlavors[p.id] || (p.flavorImages ? 'Mango' : '');

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => {
                    if (onQuickView) onQuickView({ ...p, activeFlavor, displayImage: cardImage });
                  }}
                  className="group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-amber-900/10 bg-white shadow-xs sm:shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Image Container with responsive mobile height */}
                  <div className={`relative ${bgTint} w-full h-[120px] xs:h-[135px] sm:h-[165px] md:h-[190px] p-2 sm:p-3 flex flex-col justify-between border-b border-amber-900/5 transition-colors overflow-hidden`}>
                    {/* Top Row: Category Badge & Green Vegetarian Icon */}
                    <div className="flex items-center justify-between gap-1 z-10">
                      {/* Product Category Badge */}
                      <span className="bg-white/95 backdrop-blur-xs text-[#18110F] text-[8px] xs:text-[9px] sm:text-[10px] font-outfit font-extrabold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-2xs border border-black/5 truncate max-w-[95px] xs:max-w-[120px] sm:max-w-[140px]">
                        {p.category}
                      </span>

                      {/* 100% Vegetarian Icon */}
                      <div
                        className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-[2px] border border-emerald-600 bg-white flex items-center justify-center shrink-0 shadow-2xs"
                        title="100% Pure Vegetarian Confectionery"
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-600" />
                      </div>
                    </div>

                    {/* Centered Product Image (or Blank if none) */}
                    <div className="relative w-full h-full flex items-center justify-center my-auto">
                      {cardImage ? (
                        <img
                          key={cardImage}
                          src={getProductImage(cardImage)}
                          alt={p.name}
                          className="max-h-[85px] xs:max-h-[100px] sm:max-h-[125px] md:max-h-[145px] max-w-[85%] object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300 select-none animate-fadeIn"
                          onError={(e) => handleImageError(e, cardImage)}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>

                    {/* Quick View Hover Indicator */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-white/95 backdrop-blur-md text-[#18110F] text-[9.5px] sm:text-[10.5px] font-outfit font-black px-2.5 sm:px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B001D]" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Area: Name, Flavours, and Inquire Button */}
                  <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between bg-white text-left">
                    <div>
                      {/* Category Label */}
                      <span className="block text-[8px] sm:text-[9.5px] font-outfit font-extrabold tracking-[0.14em] text-gray-400 uppercase mb-0.5 sm:mb-1 truncate">
                        {p.category}
                      </span>

                      {/* Product Name */}
                      <h3 className="text-xs sm:text-sm md:text-base font-outfit font-black text-[#18110F] tracking-tight leading-snug group-hover:text-[#8B001D] transition-colors line-clamp-2 min-h-[2rem] sm:min-h-[2.6rem]">
                        {p.name}
                      </h3>

                      {/* Flavours Pills (if product has flavours) */}
                      {p.flavors && p.flavors.length > 0 && (
                        <div className="mt-1.5 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-amber-900/10">
                          <span className="block text-[8px] sm:text-[9.5px] font-outfit font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                            4 Flavours:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {p.flavors.map((flavor) => {
                              const isSelected = activeFlavor === flavor;
                              return (
                                <button
                                  key={flavor}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedFlavors((prev) => ({
                                      ...prev,
                                      [p.id]: flavor
                                    }));
                                  }}
                                  className={`text-[8px] sm:text-[9.5px] font-outfit font-bold px-1.5 sm:px-2 py-0.5 rounded transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#8B001D] text-white shadow-xs'
                                      : 'bg-[#FAF4EB] hover:bg-[#F2E6D5] text-[#8B001D] border border-amber-900/10'
                                  }`}
                                >
                                  {flavor}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Inquire Wholesale Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const chosenFlavor = selectedFlavors[p.id];
                        const productToInquire = chosenFlavor
                          ? { ...p, selectedFlavor: chosenFlavor, name: `${p.name} (${chosenFlavor})` }
                          : p;
                        if (onEnquire) onEnquire(productToInquire);
                      }}
                      className="w-full bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-full text-[9px] sm:text-xs font-outfit font-black uppercase tracking-wider shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer mt-2.5 sm:mt-3.5"
                    >
                      <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
                      <span className="truncate">INQUIRE WHOLESALE</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Load More SKUs */}
        {!forceFullView && visibleCount < filteredProducts.length && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredProducts.length))}
              className="bg-white hover:bg-[#FAF4EA] text-[#18110F] hover:text-[#8B001D] border border-amber-900/20 px-7 py-3 rounded-full text-xs sm:text-sm font-outfit font-black uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>View More Products ({filteredProducts.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4 text-[#8B001D]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
