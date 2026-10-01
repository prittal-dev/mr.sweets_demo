import React, { useState } from 'react';
import { Star, Sparkles, Mail, Check, Eye, ShoppingBag } from 'lucide-react';
import { iconicProducts } from '../data/products';

export default function IconicCatalog({ onEnquire, onAddToCart, onQuickView }) {
  const [activeTab, setActiveTab] = useState('all');
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'wafers', label: 'Wafer Cones & Bars' },
    { id: 'toys', label: 'Surprise Toys & Novelties' },
    { id: 'gummies', label: 'Fruit Jellies & Gummies' },
    { id: 'tins', label: 'Snack & Festive Tubs' },
  ];

  const products = iconicProducts;

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  const handleAddToCartAction = (product) => {
    if (onAddToCart) {
      onAddToCart({
        id: product.id,
        name: product.name,
        tagline: product.tag,
        priceINR: parseInt(product.priceINR) || 99,
        priceUSD: parseFloat(product.priceUSD) || 9.99,
        weight: product.tag,
        image: product.image,
        quantity: 1
      });
    }
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="iconic-range" className="w-full bg-[#FDFBF7] py-8 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[#C8102E] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1 sm:mb-2">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>AUTHENTIC PACKAGED RANGE</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
            Iconic Confectionery Catalog
          </h2>

          <p className="text-xs sm:text-base text-[#4F3A34] mt-1.5 sm:mt-3 font-normal leading-relaxed max-w-2xl mx-auto hidden sm:block">
            Freshly sealed confectionery created for memorable celebrations, daily lunchboxes, and retail counters.
          </p>
        </div>

        {/* Category Filter Tabs - Horizontally scrollable on mobile */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-none gap-2 sm:gap-3 mb-6 sm:mb-12 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 shadow-sm shrink-0 ${
                activeTab === cat.id
                  ? 'bg-[#110C0A] text-white border border-[#362823] shadow-md scale-105'
                  : 'bg-white text-[#362823] border border-cream-300 hover:border-[#C8102E] hover:text-[#C8102E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid - 3 columns per line */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-cream-300 rounded-xl sm:rounded-3xl p-1.5 sm:p-4 shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div
                  onClick={() => onQuickView && onQuickView(product)}
                  className="relative aspect-square rounded-lg sm:rounded-2xl overflow-hidden bg-[#F7F5F0] mb-1.5 sm:mb-3 border border-cream-200 cursor-pointer group/img"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Quick View Hover Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView && onQuickView(product);
                    }}
                    className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 bg-white/90 backdrop-blur-md text-[#231815] p-1 sm:p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C8102E] hover:text-white hover:scale-110"
                    aria-label="Quick View Image"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  
                  {/* Left Badge */}
                  <div className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5">
                    <span className="bg-[#110C0A]/90 backdrop-blur-md text-[#D4AF37] text-[6.5px] sm:text-[9.5px] font-extrabold px-1 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#D4AF37]/30 tracking-tight sm:tracking-wider truncate max-w-[55px] sm:max-w-none block">
                      {product.badge}
                    </span>
                  </div>

                  {/* Right Tag */}
                  <div className="absolute top-1 right-1 sm:top-2.5 sm:right-2.5">
                    <span className="bg-white/95 backdrop-blur-md text-[#231815] text-[6.5px] sm:text-[9.5px] font-bold px-1 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm border border-cream-200 truncate max-w-[55px] sm:max-w-none block">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 text-[8px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1.5">
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 mr-0.5" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3
                  onClick={() => onQuickView && onQuickView(product)}
                  className="text-[9.5px] sm:text-base font-bold text-[#231815] group-hover:text-[#C8102E] transition-colors leading-tight sm:leading-snug mb-1 sm:mb-2 cursor-pointer line-clamp-2"
                >
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-[10px] sm:text-xs text-[#4F3A34] font-normal leading-relaxed mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
              </div>

              {/* Divider & Bottom Section */}
              <div>
                <div className="w-full h-px bg-cream-200 my-1 sm:my-3" />

                {/* Inquire Now CTA */}
                <button
                  onClick={() => onEnquire && onEnquire(product)}
                  className="w-full py-1 sm:py-2.5 px-1 sm:px-3 rounded-full text-[8.5px] sm:text-xs font-extrabold bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all duration-300 flex items-center justify-center gap-1 shadow-sm active:scale-95 uppercase tracking-wider"
                >
                  <Mail className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-amber-200 shrink-0" />
                  <span className="truncate">Inquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
