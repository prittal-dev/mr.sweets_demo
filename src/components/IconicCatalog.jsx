import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag, Mail, Search, X } from 'lucide-react';
import { showcaseProducts, pdfMeta } from '../data/products';
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
  const [catalogSearch, setCatalogSearch] = useState('');

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
      p.category?.toLowerCase().includes('cone') ||
      p.section?.toLowerCase().includes('cone'),
    wafers: (p) =>
      p.categorySlug === 'wafers' ||
      p.category?.toLowerCase().includes('wafer') ||
      p.category?.toLowerCase().includes('roll') ||
      p.section?.toLowerCase().includes('waffer') ||
      p.section?.toLowerCase().includes('wafer'),
    chocolates: (p) =>
      p.categorySlug === 'chocolates' ||
      p.category?.toLowerCase().includes('chocolate') ||
      p.section?.toLowerCase().includes('chocolate'),
    candies: (p) =>
      p.categorySlug === 'candies' ||
      p.category?.toLowerCase().includes('candy') ||
      p.category?.toLowerCase().includes('coin') ||
      p.category?.toLowerCase().includes('petta') ||
      p.category?.toLowerCase().includes('jelly') ||
      p.category?.toLowerCase().includes('toy') ||
      p.section?.toLowerCase().includes('blister') ||
      p.section?.toLowerCase().includes('candy') ||
      p.section?.toLowerCase().includes('jelly') ||
      p.section?.toLowerCase().includes('aampapad'),
    toys: (p) =>
      p.section === 'BLISTER' ||
      p.category?.toLowerCase().includes('toy'),
    tiffin: (p) =>
      p.section === 'TIFFIN AVAILABLE WITH SHRINK PACK' ||
      p.category === 'Tiffin Packs'
  };

  const filterFn = categoryFilterMap[selectedCategory] || categoryFilterMap.all;

  const filteredProducts = showcaseProducts.filter((p) => {
    const matchesCategory = filterFn(p);
    const matchesSearch =
      !catalogSearch.trim() ||
      p.name.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      p.section?.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      p.packing?.toLowerCase().includes(catalogSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryTitles = {
    all: 'All Confectionery Range',
    cones: 'Wafer Cones',
    wafers: 'Wafer Sticks & Rolls',
    chocolates: 'Pure Chocolates',
    candies: 'Candies, Jellies & Toys',
    toys: 'Surprise Toys & Blister',
    tiffin: 'Shrink Pack Tiffins'
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
        {/* Top Badges & Trade Callout */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center bg-[#2EC4B6] text-[#0F172A] font-fredoka font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-xs uppercase tracking-wider">
              Official 2026 Price List
            </span>
            <span className="inline-flex items-center bg-[#C8102E] text-white font-fredoka font-bold text-xs px-3 py-1.5 rounded-full tracking-wider animate-pulse">
              {pdfMeta.activeOffer}
            </span>
          </div>

          <div className="text-xs font-bold text-gray-700 bg-white/80 px-3.5 py-1.5 rounded-full border border-gray-200">
            Effective: {pdfMeta.effectiveDate} • Desk: {pdfMeta.contactPerson} ({pdfMeta.phone})
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {isFullView ? (
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black text-[#0F172A] tracking-tight leading-[1.05]">
                Complete Price List Range
              </h2>
            ) : (
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black text-[#0F172A] tracking-tight leading-[1.05]">
                A world of treats,{' '}
                <span className="font-serif-italic font-normal text-[#C8102E] block sm:inline">
                  made to delight.
                </span>
              </h2>
            )}
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
              Browse all 76 commercial confectionery SKUs with exact packaging, box MRP, and wholesale terms from the official PDF.
            </p>
          </div>

          {/* Action Button: Toggle Highlights / Full View */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsFullView(!isFullView)}
              className="bg-[#C8102E] hover:bg-[#9B0B21] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>{isFullView ? '← Highlights Scroll' : 'See Every Product (76) →'}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar: Search + Quick Category Tabs */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 76 products (e.g. Romeo, Daily Rolls, Kick, Nutymax)..."
              value={catalogSearch}
              onChange={(e) => setCatalogSearch(e.target.value)}
              className="w-full pl-10 pr-8 py-2 bg-gray-50 rounded-full border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
            />
            {catalogSearch && (
              <button
                onClick={() => setCatalogSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            {[
              { id: 'all', label: 'All (76)' },
              { id: 'cones', label: 'Cones' },
              { id: 'wafers', label: 'Wafer Sticks' },
              { id: 'chocolates', label: 'Chocolates' },
              { id: 'candies', label: 'Candies & Jellies' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat.id);
                  if (!isFullView) setIsFullView(true);
                }}
                className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer text-[11px] sm:text-xs ${
                  selectedCategory === cat.id
                    ? 'bg-[#C8102E] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-gray-600 shrink-0 text-right">
            <span className="text-[#C8102E] font-black">{filteredProducts.length}</span> of {showcaseProducts.length} items
          </div>
        </div>

        {/* Carousel Arrow Controls (when in scroll mode) */}
        {!isFullView && (
          <div className="flex items-center justify-end gap-1.5 mb-4">
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

        {/* Product Cards Container: Horizontal Scrollable Track (Default) OR Full Grid View */}
        <div id="iconic-range">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center my-6 border border-gray-200">
              <p className="text-gray-500 font-bold mb-4">No treats match "{catalogSearch}".</p>
              <button
                onClick={() => {
                  setCatalogSearch('');
                  if (onSelectCategory) onSelectCategory('all');
                }}
                className="bg-[#0F172A] text-white text-xs font-bold px-5 py-2 rounded-full cursor-pointer"
              >
                Reset Search Filters
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

        {/* Custom Horizontal Scroll Indicator Track */}
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

// Clean White Card with PDF specifications (Packing, Box MRP, Unit MRP, Rate/KC)
function renderGridCard(product, onQuickView, onAddToCart, onEnquire) {
  return (
    <div
      key={product.id}
      onClick={() => (onQuickView ? onQuickView(product) : onEnquire && onEnquire(product))}
      className="bg-white rounded-3xl p-3 sm:p-4.5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col justify-between group cursor-pointer relative"
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

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Info Underneath */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Section */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold mb-1">
            <span className="text-[#C8102E] font-extrabold">{product.brand}</span>
            <span className="text-gray-300 font-normal">·</span>
            <span className="text-gray-500 font-semibold truncate">{product.section || product.category}</span>
          </div>

          {/* Product Title */}
          <h4 className="font-outfit font-black text-xs sm:text-sm text-[#0F172A] tracking-tight leading-snug line-clamp-2 mt-0.5 mb-1.5 group-hover:text-[#C8102E] transition-colors">
            {product.name}
          </h4>

          {/* Packaging specifications from PDF */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-xl px-2.5 py-1.5 mb-2 font-mono text-[10px] sm:text-[11px] text-gray-700 flex items-center justify-between">
            <span className="text-gray-500 font-bold uppercase text-[9px]">PACKING</span>
            <span className="font-bold">{product.packing}</span>
          </div>
        </div>

        {/* Pricing Strip: Box MRP & Unit MRP / KC Price */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase leading-none">BOX MRP</div>
            <div className="text-sm sm:text-base font-black text-[#C8102E]">
              ₹{product.boxMrp || product.priceINR} RS
            </div>
          </div>

          <div className="text-right">
            {product.rates ? (
              <span className="bg-amber-100 text-amber-900 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded">
                RATE {product.rates}
              </span>
            ) : product.kcPrice ? (
              <span className="bg-emerald-50 text-emerald-800 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded border border-emerald-200">
                KC: ₹{product.kcPrice}
              </span>
            ) : (
              <span className="text-[11px] font-bold text-gray-500">
                {product.unitMrp}/pc
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Arch Card Component for Highlights Carousel
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

      {/* Pill Tag: Brand */}
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-white/95 text-[#111827] text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
          {product.brand}
        </span>
      </div>

      {/* Product Title */}
      <h3 className="text-xl sm:text-2xl font-outfit font-black text-[#111827] tracking-tight leading-snug mb-1 group-hover:text-black">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#111827]/85 font-medium leading-relaxed line-clamp-2 mb-3">
        {product.description}
      </p>

      {/* Price & Specs */}
      <div className="bg-white/40 backdrop-blur-xs p-2.5 rounded-xl mb-3 flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-gray-800 font-bold uppercase block">BOX MRP</span>
          <span className="font-outfit font-black text-[#111827] text-base">₹{product.boxMrp || product.priceINR} RS</span>
        </div>
        <div className="text-right">
          {product.rates && (
            <span className="bg-black text-amber-300 font-mono font-bold px-2 py-0.5 rounded text-[11px] block">
              RATE {product.rates}
            </span>
          )}
          {product.kcPrice && (
            <span className="bg-emerald-900 text-white font-mono font-bold px-2 py-0.5 rounded text-[10px] block mt-0.5">
              KC ₹{product.kcPrice}/-
            </span>
          )}
          {!product.rates && !product.kcPrice && (
            <span className="font-bold text-gray-800 text-xs">
              Retail: {product.unitMrp}/pc
            </span>
          )}
        </div>
      </div>

      {/* Card Action Controls */}
      <div className="pt-3 border-t border-black/10 flex items-center justify-between mt-auto">
        <span className="text-[11px] font-bold text-[#111827]/80 uppercase tracking-wider truncate mr-2">
          {product.section || 'Wholesale Range'}
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
