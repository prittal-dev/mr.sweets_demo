import React, { useState } from 'react';
import { Star, Eye, Mail, Sparkles, Filter } from 'lucide-react';

export default function ProductCatalog({ onQuickView, onOpenInquire }) {
  const [activeTab, setActiveTab] = useState('all');
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Confections' },
    { id: 'heritage', label: 'Royal Gold Mithai' },
    { id: 'cones', label: 'Romeo Wafer Cones' },
    { id: 'fusion', label: 'Haute Cocoa Fusion' },
    { id: 'gifting', label: 'Bespoke Gift Boxes' },
  ];

  const products = [
    {
      id: 'p1',
      category: 'heritage',
      name: 'Diamond Kaju Katli (24K Gold Leaf)',
      tagline: 'Goan Cashews • 24K Edible Gold • Silver Vark',
      priceUSD: 24,
      priceINR: 1850,
      weight: '500g (16 Pcs)',
      rating: 4.9,
      reviews: 1420,
      badge: 'BESTSELLER',
      image: '/kaju_katli_diamond.jpg',
      description: 'Slow-churned pure Goan cashew paste topped with certified 24K edible gold vark and organic saffron strands.'
    },
    {
      id: 'p2',
      category: 'heritage',
      name: 'Saffron Motichoor Pearl Ladoo',
      tagline: 'Desi Ghee • Pampore Saffron • Pistachio Pearls',
      priceUSD: 18,
      priceINR: 1450,
      weight: '500g (12 Pcs)',
      rating: 5.0,
      reviews: 980,
      badge: 'ROYAL HERITAGE',
      image: '/saffron_motichoor_ladoo.jpg',
      description: 'Hand-rolled motichoor pearls cooked in pure A2 Desi Ghee and infused with organic Kashmiri Mogra saffron.'
    },
    {
      id: 'p3',
      category: 'cones',
      name: 'Romeo Choco Cone (Hazelnut Swiss Cream)',
      tagline: 'Crispy Baked Cone • 70% Dark Cocoa • Hazelnut',
      priceUSD: 16,
      priceINR: 1250,
      weight: 'Box of 12 Mini Cones',
      rating: 4.8,
      reviews: 2150,
      badge: 'SIGNATURE CRAFT',
      image: '/romeo_choco_cone.jpg',
      description: 'Our iconic 1.2mm ultra-crispy waffle cones filled to the brim with velvet Swiss hazelnut chocolate.'
    },
    {
      id: 'p4',
      category: 'gifting',
      name: 'The Royal Velvet Gift Vault',
      tagline: 'Assorted 16-Piece Masterpiece Selection',
      priceUSD: 45,
      priceINR: 3500,
      weight: '750g Deluxe Velvet Box',
      rating: 4.9,
      reviews: 640,
      badge: 'LUXE GIFTING',
      image: '/foil_sealing.jpg',
      description: 'Our signature handcrafted velvet & brass foil box featuring a curated mix of gold mithai, wafer cones, and dark pedas.'
    },
    {
      id: 'p5',
      category: 'fusion',
      name: 'Valrhona Cocoa Cardamom Peda',
      tagline: 'Single Origin Dark Cocoa • Kerala Green Elaichi',
      priceUSD: 22,
      priceINR: 1680,
      weight: '450g (14 Pcs)',
      rating: 4.9,
      reviews: 430,
      badge: 'NEW ARRIVAL',
      image: '/cream_swirling.jpg',
      description: 'A decadent fusion of Valrhona French dark chocolate conched with slow-churned milk mawa and cardamom.'
    },
    {
      id: 'p6',
      category: 'cones',
      name: 'Crispy Swiss Wafer Roll Vault',
      tagline: 'Layered Crisp Wafers • White Chocolate Caramel',
      priceUSD: 19,
      priceINR: 1490,
      weight: 'Box of 16 Rolls',
      rating: 4.7,
      reviews: 870,
      badge: 'ATELIER SPECIAL',
      image: '/wafer_rolling.jpg',
      description: 'Light-as-air crispy baked wafer rolls filled with caramel cream and dusted with Marcona almond flour.'
    },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="curated-box" className="w-full bg-[#FDFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARTISANAL CATALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
            Our Signature{' '}
            <span className="font-serif-italic text-[#C8102E] font-normal">
              Haute Confections.
            </span>
          </h2>
          <p className="text-[#4F3A34] text-sm sm:text-base mt-3 font-normal">
            Handcrafted daily in small batches using pure A2 Desi Ghee, Kashmiri Saffron, and single-origin cocoa.
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
                  ? 'bg-[#110C0A] text-[#D4AF37] border border-[#362823] shadow-md scale-105'
                  : 'bg-white text-[#362823] border border-cream-300 hover:border-[#C8102E] hover:text-[#C8102E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-cream-300 rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Product Image & Badges */}
              <div className="relative aspect-square overflow-hidden bg-[#F7F5F0] cursor-pointer" onClick={() => onQuickView(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#110C0A]/90 backdrop-blur-md text-[#D4AF37] text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#D4AF37]/30 tracking-wider">
                    {product.badge}
                  </span>
                </div>

                {/* Quick View Floating Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(product);
                  }}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-[#231815] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C8102E] hover:text-white hover:scale-110"
                  aria-label="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-medium">{product.weight}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400 font-normal">({product.reviews})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onQuickView(product)}
                    className="text-lg font-bold text-[#231815] hover:text-[#C8102E] transition-colors cursor-pointer mb-1 leading-snug"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#8B7355] font-semibold mb-3">
                    {product.tagline}
                  </p>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-[#C8102E] uppercase tracking-wider">
                      B2B Catalogue
                    </span>
                    <span className="text-[11px] font-bold text-[#8B7355] mt-0.5">
                      {product.weight}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenInquire(product)}
                    className="px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 bg-[#110C0A] text-white hover:bg-[#C8102E]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
