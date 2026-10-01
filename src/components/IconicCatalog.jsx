import React, { useState } from 'react';
import { Star, Sparkles, Mail, Check, Gift, ArrowRight, Eye } from 'lucide-react';
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

  const handleAction = (product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      tagline: `${product.moq} MOQ • ${product.tag}`,
      priceINR: parseInt(product.priceINR),
      priceUSD: parseFloat(product.priceUSD),
      weight: product.tag,
      image: product.image,
      quantity: 1
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="iconic-range" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC PACKAGED RANGE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
            Iconic Confectionery Catalog
          </h2>

          <p className="text-sm sm:text-base text-[#4F3A34] mt-3 font-normal leading-relaxed max-w-2xl mx-auto">
            Freshly sealed confectionery created for memorable celebrations, daily lunchboxes, and retail counters.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm ${
                activeTab === cat.id
                  ? 'bg-[#110C0A] text-white border-2 border-[#362823] shadow-md scale-105'
                  : 'bg-white text-[#362823] border border-cream-300 hover:border-[#C8102E] hover:text-[#C8102E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-cream-300 rounded-3xl p-5 shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div
                  onClick={() => onQuickView && onQuickView(product)}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-[#F7F5F0] mb-4 border border-cream-200 flex items-center justify-center p-1.5 cursor-pointer group/img"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Quick View Hover Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView && onQuickView(product);
                    }}
                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#231815] p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C8102E] hover:text-white hover:scale-110"
                    aria-label="Quick View Image"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  {/* Left Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#110C0A]/90 backdrop-blur-md text-[#D4AF37] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-[#D4AF37]/30 tracking-wider">
                      {product.badge}
                    </span>
                  </div>

                  {/* Right Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/95 backdrop-blur-md text-[#231815] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-cream-200">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3
                  onClick={() => onQuickView && onQuickView(product)}
                  className="text-base font-bold text-[#231815] group-hover:text-[#C8102E] transition-colors leading-snug mb-2 cursor-pointer"
                >
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#4F3A34] font-normal leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Divider & Bottom Section */}
              <div>
                <div className="w-full h-px bg-cream-200 my-3" />

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-[#C8102E] uppercase tracking-wider">
                      Wholesale B2B
                    </span>
                  </div>

                  <button
                    onClick={() => handleAction(product)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 ${
                      addedId === product.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#110C0A] text-white hover:bg-[#C8102E]'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Enquired</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Enquire</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* 8. Dark Premium "Build Your Own Mr. Sweet Box" Card */}
          <div className="bg-[#110C0A] border-2 border-[#362823] hover:border-[#D4AF37]/50 rounded-3xl p-6 shadow-floating flex flex-col justify-between text-white group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            {/* Ambient Shimmer Light */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#C8102E]/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Header Pill */}
              <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CURATED ATELIER SET</span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug group-hover:text-amber-200 transition-colors">
                Build Your Own Mr. Sweet Box
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-300 font-normal leading-relaxed mb-5">
                Combine your personal favorites: Romeo Cones, 999.9 Gold Coins, NutyMax & Swiss Wafers.
              </p>

              {/* Features List */}
              <div className="space-y-2.5 mb-6 text-xs text-gray-200 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>Pick any 4 full-sized confections</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>Luxury gold embossed ribbon packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span className="text-amber-300 font-bold">Save 20% bundle discount</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-4 border-t border-[#362823]">
              <button
                onClick={() => onEnquire('Build Your Own Box')}
                className="w-full bg-[#C8102E] text-white hover:bg-red-700 transition-all duration-300 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-glow transform active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>INQUIRE CUSTOM GIFT BOX</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
