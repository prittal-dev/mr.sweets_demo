import React, { useState, useEffect } from 'react';
import { X, Star, Mail, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductQuickViewModal({ product, onClose, onOpenInquire }) {
  const [quantity, setQuantity] = useState(1);
  const [boxFormat, setBoxFormat] = useState('Standard Atelier Box');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, quantity, boxFormat });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="bg-[#FDFBF7] border border-cream-300 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 border border-cream-300 text-[#231815] hover:bg-[#C8102E] hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-[#110C0A] min-h-[280px] md:min-h-full flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#110C0A]/90 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8B7355] font-bold uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>MR. SWEET HAUTE COLLECTION</span>
              </div>

              <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-extrabold text-[#231815] mb-2 leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-[#8B7355] font-semibold mb-3">
                {product.tagline}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-amber-400 mr-1" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">{product.reviews || '1,200+'} Verified Reviews</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-emerald-700 font-semibold">In Stock</span>
              </div>

              <p className="text-xs sm:text-sm text-[#4F3A34] mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Packaging Format Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase text-[#231815] mb-2">
                  Select Packaging Format:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Standard Atelier Box', 'Royal Velvet Gift Box (+₹350)'].map((format) => (
                    <button
                      key={format}
                      onClick={() => setBoxFormat(format)}
                      className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                        boxFormat === format
                          ? 'bg-[#110C0A] text-[#D4AF37] border-[#362823]'
                          : 'bg-white text-[#231815] border-cream-300 hover:border-[#C8102E]'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ingredients & Dietary Guarantee */}
              <div className="bg-white border border-cream-300 p-3.5 rounded-2xl mb-6 text-xs flex flex-col gap-1.5">
                <div className="flex items-center gap-2 font-bold text-[#231815]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>100% Pure Vegetarian & Preservative Free</span>
                </div>
                <div className="text-gray-500 text-[11px]">
                  Contains: Goan Cashews, A2 Organic Desi Ghee, Pampore Saffron, Edible Gold Leaf.
                </div>
              </div>
            </div>

            {/* Price & Quantity Adder */}
            <div className="pt-4 border-t border-cream-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-extrabold text-[#231815]">
                    ₹{((product.priceINR || 1200) * quantity).toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 ml-2 font-medium">
                    (~${(product.priceUSD || 15) * quantity} USD)
                  </span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center border border-cream-300 rounded-full bg-white px-3 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="text-lg font-bold px-2 text-[#231815] hover:text-[#C8102E]"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#231815]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="text-lg font-bold px-2 text-[#231815] hover:text-[#C8102E]"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenInquire(product);
                }}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md bg-[#C8102E] text-white hover:bg-[#9B0B21]"
              >
                <Mail className="w-4 h-4 text-amber-200" />
                <span>Send Product Inquiry • {product.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
