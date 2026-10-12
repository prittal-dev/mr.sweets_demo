import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag, Mail } from 'lucide-react';
import { showcaseProducts } from '../data/products';
import { getProductImage, handleImageError } from '../utils/imageUrl';

export default function IconicCatalog({
  onEnquire,
  onAddToCart,
  onQuickView,
  selectedCategory = 'all',
  onSelectCategory,
  forceFullView = false
}) {
  const [isFullView, setIsFullView] = useState(forceFullView || selectedCategory !== 'all');

  // Auto-expand full view when forceFullView is enabled or category is filtered
  useEffect(() => {
    if (forceFullView || selectedCategory !== 'all') {
      setIsFullView(true);
    }
  }, [forceFullView, selectedCategory]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const categoryFilterMap = {
    all: () => true,
    cones: (p) =>
      p.categorySlug === 'cones' ||
      p.categorySlug === 'baked-treats' ||
      p.category?.toLowerCase().includes('cone') ||
      p.category?.toLowerCase().includes('wafer') ||
      p.category?.toLowerCase().includes('baked'),
    chocolates: (p) =>
      p.categorySlug === 'chocolates' ||
      p.category?.toLowerCase().includes('chocolate'),
    candies: (p) =>
      p.categorySlug === 'candies' ||
      p.categorySlug === 'jellies' ||
      p.category?.toLowerCase().includes('cand') ||
      p.category?.toLowerCase().includes('jell') ||
      p.category?.toLowerCase().includes('pop') ||
      p.category?.toLowerCase().includes('gum')
  };

  const filterFn = categoryFilterMap[selectedCategory] || categoryFilterMap.all;
  const filteredProducts = showcaseProducts.filter(filterFn);

  const categoryTitles = {
    all: 'All Confectionery',
    cones: 'Wafer Cones & Treats',
    chocolates: 'Chocolates & Bars',
    candies: 'Candies & Jellies'
  };
  const activeCategoryTitle = categoryTitles[selectedCategory] || 'All Confectionery';

  // Reset horizontal carousel scroll when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  // Calculate horizontal scroll progress for the indicator bar at the bottom
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [isFullView, selectedCategory]);

  const scrollCarousel = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="w-full bg-[#FAF7EE] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#F0EBE0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Turquoise / Mint Pill Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center bg-[#2EC4B6] text-[#0F172A] font-fredoka font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-xs uppercase tracking-wider">
            Product portfolio
          </span>
        </div>

        {/* Section Headline */}
        {isFullView ? (
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black text-[#0F172A] tracking-tight leading-[1.05] mb-6 sm:mb-8">
            The Full Range
          </h2>
        ) : (
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black text-[#0F172A] tracking-tight leading-[1.05] mb-8 sm:mb-12">
            A world of treats,{' '}
            <span className="font-serif-italic font-normal text-[#C8102E] block sm:inline">
              made to delight.
            </span>
          </h2>
        )}

        {/* Subheader and Action Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm font-bold text-gray-800">
              A taste of the range ·{' '}
              <span className="font-black text-[#0F172A]">
                {filteredProducts.length}{' '}
                {selectedCategory !== 'all' ? activeCategoryTitle : 'products'}{' '}
                shown
              </span>
            </p>

            {/* Clear Filter / View All Pill */}
            {selectedCategory !== 'all' && (
              <button
                onClick={() => onSelectCategory && onSelectCategory('all')}
                className="inline-flex items-center gap-1.5 bg-[#C8102E]/10 hover:bg-[#C8102E]/20 text-[#C8102E] text-[11px] font-bold px-3 py-1 rounded-full border border-[#C8102E]/30 transition-all cursor-pointer"
                title="View All Products"
              >
                <span>✕ View All ({showcaseProducts.length})</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Carousel navigation controls (when not in full grid view) */}
            {!isFullView && (
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Red Action Button */}
            <button
              onClick={() => setIsFullView(!isFullView)}
              className="bg-[#C8102E] hover:bg-[#9B0B21] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>{isFullView ? '← Show Highlights Scroll' : 'See every product →'}</span>
            </button>
          </div>
        </div>

        {/* Product Cards Container: Horizontal Scrollable Track (Default) OR Full Grid View */}
        <div id="iconic-range">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center my-6 border border-gray-200">
              <p className="text-gray-500 font-bold mb-4">No treats match your selected brand and category filters.</p>
              <button
                onClick={() => {
                  setIsFullView(false);
                }}
                className="bg-[#0F172A] text-white text-xs font-bold px-5 py-2 rounded-full"
              >
                Reset View
              </button>
            </div>
          ) : isFullView ? (
            /* Full Grid Mode (4-column grid of white cards with colored squircles) */
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 pt-2 pb-6">
              {filteredProducts.map((product) => renderGridCard(product, onQuickView, onAddToCart, onEnquire))}
            </div>
          ) : (
            /* Horizontal Scrollable Arch Cards Track */
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory px-1 scroll-smooth"
            >
              {filteredProducts.map((product) => renderArchCard(product, onQuickView, onAddToCart, onEnquire))}
            </div>
          )}
        </div>

        {/* Custom Horizontal Scroll Indicator Track (matches reference image) */}
        {!isFullView && filteredProducts.length > 0 && (
          <div className="w-56 sm:w-72 h-1.5 bg-[#111827]/10 rounded-full mx-auto mt-6 sm:mt-8 overflow-hidden relative">
            <div
              className="h-full bg-[#111827]/40 rounded-full transition-all duration-150"
              style={{
                width: '35%',
                transform: `translateX(${scrollProgress * 1.85}%)`
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Clean White Card matching user's exact mockup for "The Full Range" grid
function renderGridCard(product, onQuickView, onAddToCart, onEnquire) {
  return (
    <div
      key={product.id}
      onClick={() => (onQuickView ? onQuickView(product) : onEnquire && onEnquire(product))}
      className="bg-white rounded-3xl p-3 sm:p-4.5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Rounded Colored Squircle Pod holding the White Circle & Product Image */}
      <div
        className={`${product.bgColor} w-full aspect-square rounded-2xl sm:rounded-3xl flex items-center justify-center p-2.5 sm:p-3.5 mb-3 sm:mb-3.5 relative overflow-hidden`}
      >
        {/* Inner Pure White Circle */}
        <div className="w-[80%] h-[80%] rounded-full bg-white flex items-center justify-center p-2 sm:p-2.5 shadow-xs group-hover:scale-108 transition-transform duration-300">
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="w-full h-full max-h-[85%] max-w-[85%] object-contain filter drop-shadow-sm"
            decoding="async"
            onError={(e) => handleImageError(e, product.image)}
          />
        </div>
      </div>

      {/* Info Underneath */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Brand in Red · Category in Gray */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold mb-1">
            <span className="text-[#C8102E] font-extrabold">{product.brand}</span>
            <span className="text-gray-300 font-normal">·</span>
            <span className="text-gray-500 font-semibold">{product.category}</span>
          </div>

          {/* Product Title */}
          <h4 className="font-outfit font-black text-sm sm:text-base text-[#0F172A] tracking-tight leading-snug line-clamp-2 mt-0.5 mb-1 group-hover:text-[#C8102E] transition-colors">
            {product.name}
          </h4>
        </div>

        {/* Packaging info */}
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">
          {product.pack || product.tag || 'Standard Pack'}
        </p>
      </div>
    </div>
  );
}

// Reusable Arch Card Component rendering exact design for the Highlights carousel
function renderArchCard(product, onQuickView, onAddToCart, onEnquire) {
  return (
    <div
      key={product.id}
      onClick={() => (onQuickView ? onQuickView(product) : onEnquire && onEnquire(product))}
      className={`${product.bgColor} w-[280px] sm:w-[325px] shrink-0 rounded-t-[130px] rounded-b-[24px] p-6 flex flex-col justify-between select-none snap-start shadow-md hover:shadow-xl transition-all duration-300 relative group cursor-pointer`}
    >
      {/* Top Pure White Circle Cutout holding the crisp product image */}
      <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white flex items-center justify-center p-4 sm:p-5 shadow-sm mx-auto mt-2 sm:mt-3 mb-5 group-hover:scale-105 transition-transform duration-300">
        <img
          src={getProductImage(product.image)}
          alt={product.name}
          className="h-32 sm:h-38 w-auto max-w-[85%] max-h-[85%] object-contain filter drop-shadow-md"
          decoding="async"
          onError={(e) => handleImageError(e, product.image)}
        />
      </div>

      {/* Pill Tags: Brand & Category */}
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-white/95 text-[#111827] text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
          {product.brand}
        </span>
        <span className="bg-white/95 text-[#111827] text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
          {product.category}
        </span>
      </div>

      {/* Display Typography Product Title */}
      <h3 className="text-2xl sm:text-[26px] font-outfit font-black text-[#111827] tracking-tight leading-snug mb-2 group-hover:text-black">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#111827]/85 font-medium leading-relaxed line-clamp-2 mb-4">
        {product.description}
      </p>

      {/* Card Action Controls & Trade Details */}
      <div className="pt-3 border-t border-black/10 flex items-center justify-between mt-auto">
        <span className="text-xs font-bold text-[#111827]/70 uppercase tracking-wider truncate mr-2">
          {product.pack || product.tag || product.moq || 'Wholesale Range'}
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
            className="bg-white hover:bg-black hover:text-white text-[#111827] text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
            title="Add to Shopping Bag"
          >
            <span>+ Bag</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onEnquire) onEnquire(product);
            }}
            className="bg-[#C8102E] hover:bg-[#7A0819] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-xs transition-colors cursor-pointer"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
