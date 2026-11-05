import React, { useState, useEffect } from 'react';
import { 
  X, Mail, ShieldCheck, ZoomIn, 
  MessageCircle, CheckCircle2, Package, Tag
} from 'lucide-react';
import { getProductImage, handleImageError } from '../utils/imageUrl';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

export default function ProductQuickViewModal({ product, onClose, onOpenInquire }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(
    product?.activeFlavor || (product?.flavorImages ? 'Mango' : '')
  );

  useEffect(() => {
    if (product) {
      setSelectedFlavor(product.activeFlavor || (product.flavorImages ? 'Mango' : ''));
      lockBodyScroll();
      return () => {
        unlockBodyScroll();
      };
    }
  }, [product]);

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

  const displayImage = product.flavorImages && selectedFlavor
    ? product.flavorImages[selectedFlavor] || product.image
    : (product.displayImage || product.image);

  const hasImage = Boolean(displayImage);

  return (
    <>
      {/* Quick View Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto overscroll-contain"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <div
          className="bg-white border border-gray-100/80 w-full max-w-3xl rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-2xl relative my-auto flex flex-col min-w-0 ring-1 ring-black/5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-gray-200 text-gray-700 hover:text-white hover:bg-[#8B001D] hover:border-[#8B001D] transition-all duration-200 shadow-md flex items-center justify-center focus:outline-none cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 min-w-0 w-full">
            {/* Left: Product Showcase Panel (5 cols) */}
            <div
              onClick={() => {
                if (hasImage) setIsLightboxOpen(true);
              }}
              className={`md:col-span-5 relative bg-gradient-to-br from-amber-50/70 via-rose-50/30 to-yellow-50/50 border-b md:border-b-0 md:border-r border-gray-100 min-h-[220px] sm:min-h-[300px] flex flex-col items-center justify-center p-6 select-none overflow-hidden ${
                hasImage ? 'cursor-pointer group/modalimg' : ''
              }`}
            >
              {/* Floating Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-30 flex flex-wrap gap-1.5 pointer-events-none">
                <span className="inline-flex items-center bg-[#8B001D] text-white text-[10px] sm:text-[11px] font-outfit font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Showcase Product Image (or blank if none) */}
              <div className="relative z-10 w-full flex items-center justify-center my-auto min-h-[140px]">
                {hasImage ? (
                  <img
                    key={displayImage}
                    src={getProductImage(displayImage)}
                    alt={product.name}
                    className="w-auto max-w-full max-h-[160px] sm:max-h-[240px] rounded-xl object-contain drop-shadow-md group-hover/modalimg:scale-105 transition-all duration-300 ease-out animate-fadeIn"
                    decoding="async"
                    onError={(e) => handleImageError(e, displayImage)}
                  />
                ) : (
                  <div className="w-full h-32" />
                )}
              </div>

              {/* Bottom Badge: 100% Veg */}
              <div className="absolute bottom-3.5 left-3.5 z-30 bg-white/95 backdrop-blur-md border border-emerald-200 px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1.5 pointer-events-none">
                <div className="w-3.5 h-3.5 border-2 border-emerald-600 rounded-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </div>
                <span className="text-[10px] font-outfit font-black text-emerald-800 tracking-tight uppercase">
                  100% Pure Veg
                </span>
              </div>

              {hasImage && (
                <div className="absolute bottom-3.5 right-3.5 z-30 bg-black/75 group-hover/modalimg:bg-[#8B001D] backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-outfit font-bold flex items-center gap-1 transition-all shadow-md">
                  <ZoomIn className="w-3 h-3 text-amber-300" />
                  <span>Zoom In</span>
                </div>
              )}
            </div>

            {/* Right: Product Details & Commercial Action (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between min-w-0 w-full bg-white text-left">
              <div>
                {/* Brand Eyebrow */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-[#8B001D] text-[10.5px] font-outfit font-black uppercase tracking-wider mb-2">
                  <span>★ Premium Quality Product</span>
                </div>

                {/* Product Title */}
                <h2 id="modal-product-title" className="text-xl sm:text-2xl font-outfit font-black text-[#18110F] mb-1 leading-snug tracking-tight">
                  {product.name}
                </h2>

                {/* Category Tagline */}
                <p className="text-xs sm:text-sm font-outfit text-gray-500 font-semibold mb-3">
                  {product.category} • Premium Quality • 100% Pure Vegetarian
                </p>

                {/* Packaging & Pricing Matrix */}
                {(product.packing || product.boxMrp) && (
                  <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                    {/* Box / Jar MRP Card */}
                    {product.boxMrp && (
                      <div className="bg-[#FAF6EE] border border-amber-900/10 rounded-2xl p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px] font-outfit font-extrabold uppercase tracking-wider text-gray-500 mb-0.5">
                          <span>Box / Jar MRP</span>
                          <Tag className="w-3.5 h-3.5 text-[#8B001D]" />
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-outfit font-black text-[#8B001D]">
                            ₹{product.boxMrp}
                          </span>
                          {product.unitMrp && (
                            <span className="text-xs font-outfit font-bold text-gray-600">
                              ({product.unitMrp}/pc)
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Packaging Specification Card */}
                    {product.packing && (
                      <div className="bg-[#FAF6EE] border border-amber-900/10 rounded-2xl p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px] font-outfit font-extrabold uppercase tracking-wider text-gray-500 mb-0.5">
                          <span>Packaging</span>
                          <Package className="w-3.5 h-3.5 text-gray-600" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-outfit font-black text-[#18110F] block leading-tight">
                            {product.packing}
                          </span>
                          {product.format && (
                            <span className="text-[11px] font-outfit font-semibold text-gray-500 block mt-0.5 truncate">
                              {product.format}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 4 Flavours Selection Pills */}
                {product.flavors && product.flavors.length > 0 && (
                  <div className="mb-4 p-3 rounded-2xl bg-[#FAF6EE] border border-amber-900/10">
                    <span className="block text-[10.5px] font-outfit font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                      4 Flavours Available:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor) => {
                        const isSelected = selectedFlavor === flavor;
                        return (
                          <button
                            key={flavor}
                            type="button"
                            onClick={() => setSelectedFlavor(flavor)}
                            className={`px-3 py-1 rounded-full text-xs font-outfit font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#8B001D] text-white shadow-xs scale-105'
                                : 'bg-white hover:bg-[#FAF4EA] text-[#8B001D] border border-amber-900/15'
                            }`}
                          >
                            {flavor}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quality & Manufacturing Assurance */}
                <div className="bg-[#FAF6EE] border border-amber-900/10 rounded-2xl p-3.5 mb-4">
                  <div className="flex items-center gap-2 mb-2 text-[#8B001D]">
                    <ShieldCheck className="w-4 h-4 text-[#8B001D]" />
                    <span className="text-xs font-outfit font-black uppercase tracking-wider">
                      Wholesale Trade Inquiry
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Direct factory wholesale supply from New Delhi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Master cartons & dealership distribution across India</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Contact: Mr. Prince Ghai (+91 93500 60606)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Actions: Inquire Wholesale & WhatsApp */}
              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    const inquiryProduct = selectedFlavor
                      ? { ...product, selectedFlavor, name: `${product.name} (${selectedFlavor})` }
                      : product;
                    if (onOpenInquire) onOpenInquire(inquiryProduct);
                  }}
                  className="flex-1 py-3 px-5 rounded-full text-xs font-outfit font-black uppercase tracking-wider transition-all bg-[#8B001D] hover:bg-[#720617] text-white shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-200" />
                  <span>Inquire Wholesale</span>
                </button>
                <a
                  href={`https://wa.me/919350060606?text=${encodeURIComponent(
                    `Hello Mr. Sweet, I would like to inquire regarding wholesale dealership for ${product.name}${
                      selectedFlavor ? ` (${selectedFlavor} flavour)` : ''
                    } - Packing: ${product.packing || 'Standard'} (MRP: ₹${product.boxMrp || ''}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full text-xs font-outfit font-black uppercase tracking-wider transition-all bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Trade</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for Zoom In (only when image is present) */}
      {isLightboxOpen && hasImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-2xl max-h-[85vh] p-4 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg hover:bg-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={getProductImage(displayImage)}
              alt={product.name}
              className="max-w-full max-h-[75vh] object-contain drop-shadow-2xl mx-auto"
            />
            <p className="text-white text-center mt-3 font-outfit font-bold text-sm">
              {product.name} {selectedFlavor ? `(${selectedFlavor})` : ''}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
