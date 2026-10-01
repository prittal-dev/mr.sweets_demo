import React, { useState, useEffect } from 'react';
import { X, Star, Mail, ShieldCheck, Sparkles, ZoomIn } from 'lucide-react';

export default function ProductQuickViewModal({ product, onClose, onOpenInquire }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) setIsLightboxOpen(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isLightboxOpen]);

  if (!product) return null;

  return (
    <>
      {/* Quick View Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <div
          className="bg-[#FDFBF7] border border-cream-300 w-full max-w-3xl sm:max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-auto max-h-[92vh] flex flex-col min-w-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 border border-cream-300 text-[#231815] hover:bg-[#C8102E] hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 min-w-0 w-full overflow-y-auto">
            {/* Product Image Box */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative bg-[#F5F2EB] border-b md:border-b-0 md:border-r border-cream-200 min-h-[260px] sm:min-h-[340px] md:min-h-full flex items-center justify-center p-6 cursor-pointer group/modalimg min-w-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[320px] sm:max-h-[380px] object-contain group-hover/modalimg:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#110C0A] text-[#D4AF37] text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#D4AF37]/30 tracking-wider shadow-sm">
                  {product.badge || 'ATELIER SPECIAL'}
                </span>
              </div>

              {/* Click to Zoom Overlay Indicator */}
              <div className="absolute bottom-4 right-4 bg-[#110C0A]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover/modalimg:bg-[#C8102E] transition-all shadow-md">
                <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Click to Expand</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 sm:p-8 flex flex-col justify-between min-w-0 w-full">
              <div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#8B7355] font-bold uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>MR. SWEET HAUTE COLLECTION</span>
                </div>

                <h2 id="modal-product-title" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#231815] mb-2 leading-tight break-words">
                  {product.name}
                </h2>

                <p className="text-xs text-[#8B7355] font-semibold mb-3">
                  {product.tagline || '100% Veg • Premium Packaged Confectionery'}
                </p>

                <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-4">
                  <div className="flex items-center text-amber-500 font-bold text-xs sm:text-sm">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-emerald-700 font-semibold">In Stock</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4F3A34] mb-5 sm:mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Ingredients & Dietary Guarantee */}
                <div className="bg-white border border-cream-300 p-3.5 rounded-2xl mb-6 text-xs flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 font-bold text-[#231815]">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>100% Pure Vegetarian & Preservative Free</span>
                  </div>
                  <div className="text-gray-500 text-[11px] leading-normal">
                    Crafted with premium food-grade ingredients, 100% vegetarian & zero animal gelatin.
                  </div>
                </div>
              </div>

              {/* Bottom Inquiry Action */}
              <div className="pt-4 border-t border-cream-200">
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquire(product);
                  }}
                  className="w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md bg-[#C8102E] text-white hover:bg-[#9B0B21] text-center"
                >
                  <Mail className="w-4 h-4 text-amber-200 flex-shrink-0" />
                  <span className="leading-tight">
                    Send Product Inquiry • {product.name}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-[#C8102E] p-3 rounded-full transition-all shadow-xl"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-bold">{product.name}</h3>
              <p className="text-gray-400 text-xs mt-1">Full Resolution View</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
