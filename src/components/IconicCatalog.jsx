import React, { useState } from 'react';
import { Star, Sparkles, Mail, Check, Gift, ArrowRight } from 'lucide-react';

export default function IconicCatalog({ onEnquire, onAddToCart }) {
  const [activeTab, setActiveTab] = useState('all');
  const [addedId, setAddedId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Creations (7)' },
    { id: 'wafers', label: 'Wafer Cones & Bars' },
    { id: 'candies', label: 'Candies & Jellies' },
    { id: 'tins', label: 'Celebration Tins' },
  ];

  const products = [
    {
      id: 'iconic-1',
      category: 'wafers',
      name: 'Romeo Choco Cone (30 Cones Pack)',
      badge: 'BESTSELLER',
      rating: 4.9,
      orders: '1,420 orders',
      priceUSD: '14.99',
      priceINR: '150',
      moq: '5 cartons',
      tag: '100% Veg',
      image: '/romeo_choco_cone.jpg',
      description: 'Crispy wafer mini cones filled with Swiss cocoa hazelnut cream & roasted nuts.'
    },
    {
      id: 'iconic-2',
      category: 'tins',
      name: 'Gold Coin 999.9 Chocolate Jar',
      badge: 'FESTIVE JAR',
      rating: 5.0,
      orders: '2,180 orders',
      priceUSD: '12.50',
      priceINR: '199',
      moq: '10 tubs',
      tag: '100% Veg',
      image: '/gold_coin_jar.jpg',
      description: 'Embossed 999.9 milk chocolate gold coins in airtight keepsake festive tub.'
    },
    {
      id: 'iconic-3',
      category: 'candies',
      name: 'Fun Pops Assorted Jelly Pops (Bears)',
      badge: 'NEW FLAVOUR',
      rating: 4.8,
      orders: '950 orders',
      priceUSD: '9.99',
      priceINR: '120',
      moq: '12 packs',
      tag: 'Bears Set',
      image: '/jelly_pops_bears.jpg',
      description: 'Chewy fruit jelly pops shaped like bears, infused with real mango & strawberry juice.'
    },
    {
      id: 'iconic-4',
      category: 'wafers',
      name: 'Swiss Strawberry Cream Filled Wafers',
      badge: 'CRISPY STICK',
      rating: 4.9,
      orders: '1,840 orders',
      priceUSD: '13.99',
      priceINR: '160',
      moq: '8 tubs',
      tag: '₹5 / Stick',
      image: '/swiss_strawberry_wafer.jpg',
      description: 'Slow-baked multi-layer crisp wafers filled with real strawberry Swiss cream.'
    },
    {
      id: 'iconic-5',
      category: 'wafers',
      name: 'NutyMax Chocolaty Wafer (Caramel & Nuts)',
      badge: 'CARAMEL & NUTS',
      rating: 5.0,
      orders: '3,410 orders',
      priceUSD: '11.99',
      priceINR: '120',
      moq: '10 cartons',
      tag: '₹10 Pack',
      image: '/nutymax_wafer_bar.jpg',
      description: 'Layered chocolate wafer bar loaded with chewy butter caramel and crunchy peanuts.'
    },
    {
      id: 'iconic-6',
      category: 'candies',
      name: 'New Crazy Lips Strawberry Candy Box',
      badge: 'NOVELTY',
      rating: 4.7,
      orders: '820 orders',
      priceUSD: '8.99',
      priceINR: '99',
      moq: '15 trays',
      tag: 'Strawberry',
      image: '/crazy_lips_candy.jpg',
      description: 'Fun lip-shaped strawberry hard candies, popular for birthday favors & kids retail.'
    },
    {
      id: 'iconic-7',
      category: 'candies',
      name: 'New Light Lipstick Candy Tubes',
      badge: 'FAVORS',
      rating: 4.9,
      orders: '1,120 orders',
      priceUSD: '10.50',
      priceINR: '110',
      moq: '10 boxes',
      tag: '18-Pack',
      image: '/crazy_lips_candy.jpg',
      description: 'Interactive push-up lipstick fruit candies with LED light-up cap, 18 tubes per box.'
    }
  ];

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
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-50 mb-4 border border-cream-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
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

                {/* Rating & Orders */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-[11px] text-gray-500 font-medium">{product.orders}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-base font-bold text-[#231815] group-hover:text-[#C8102E] transition-colors leading-snug mb-2">
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
                    <span className="text-[11px] font-bold text-[#8B7355] uppercase tracking-wider">
                      MOQ: {product.moq}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-base font-extrabold text-[#231815]">
                        ${product.priceUSD}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        / ₹{product.priceINR}
                      </span>
                    </div>
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
