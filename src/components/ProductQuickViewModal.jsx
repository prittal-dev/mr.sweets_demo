import React, { useState, useEffect } from 'react';
import { 
  X, Star, Mail, ShieldCheck, ZoomIn, 
  Package, Clock, Scale, Tag, BadgePercent, MessageCircle
} from 'lucide-react';
import { getProductImage, handleImageError } from '../utils/imageUrl';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

function formatPieces(packing) {
  if (!packing) return '30 PCS';
  const match = packing.match(/(\d+)\s*PCS/i);
  return match ? `${match[1]} PCS` : packing;
}

export default function ProductQuickViewModal({ product, onClose, onOpenInquire, onAddToCart }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (product) {
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

  return (
    <>
      {/* Quick View Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto overscroll-contain"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <div
          className="bg-white border border-gray-100/80 w-full max-w-4xl rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-2xl relative my-auto max-h-[92vh] flex flex-col min-w-0 ring-1 ring-black/5 overscroll-contain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-2.5 right-2.5 sm:top-5 sm:right-5 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-gray-200 text-gray-700 hover:text-white hover:bg-[#E02438] hover:border-[#E02438] transition-all duration-200 shadow-md sm:shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#E02438] active:scale-95"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 min-w-0 w-full overflow-y-auto overscroll-contain">
            {/* Left: Product Showcase Panel (5 cols) */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="md:col-span-5 relative bg-gradient-to-br from-amber-50/70 via-rose-50/30 to-yellow-50/50 border-b md:border-b-0 md:border-r border-gray-100 min-h-[195px] sm:min-h-[360px] md:min-h-full flex flex-col items-center justify-center pt-9 pb-8 px-3 sm:p-8 cursor-pointer group/modalimg min-w-0 select-none overflow-hidden"
            >
              {/* Confectionery Ambient Background Glow */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-300/30 via-red-400/15 to-transparent blur-2xl" />
                <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-yellow-300/25 blur-xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-red-400/20 blur-xl" />
              </div>

              {/* Floating Top Badges (z-30 so image never covers them) */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-30 flex flex-wrap gap-1 sm:gap-1.5 max-w-[calc(100%-48px)] sm:max-w-[80%] pointer-events-none">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-[#E02438] to-[#B91C1C] text-white text-[9px] sm:text-[11px] font-black px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-sm sm:shadow-md shadow-red-500/20 tracking-wider uppercase">
                  {product.badge || 'MR. SWEET POPULAR'}
                </span>
                {product.section && (
                  <span className="inline-flex items-center bg-white/95 backdrop-blur-md text-gray-800 text-[8.5px] sm:text-[10px] font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-gray-200/90 shadow-sm uppercase tracking-wide">
                    {product.section}
                  </span>
                )}
              </div>

              {/* Showcase Product Image with Drop Shadow & Smooth Hover */}
              <div className="relative z-10 w-full flex items-center justify-center my-auto">
                <img
                  src={getProductImage(product.image)}
                  alt={product.name}
                  className="w-auto max-w-full max-h-[145px] sm:max-h-[300px] md:max-h-[330px] rounded-xl sm:rounded-2xl object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)] group-hover/modalimg:scale-105 group-hover/modalimg:-rotate-1 transition-all duration-300 ease-out"
                  decoding="async"
                  onError={(e) => handleImageError(e, product.image)}
                />
              </div>

              {/* Bottom Badges: 100% Veg & Zoom in (z-30) */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1.5 rounded-lg sm:rounded-xl shadow-xs flex items-center gap-1.5 sm:gap-2 pointer-events-none">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-emerald-600 rounded-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </div>
                <span className="text-[8.5px] sm:text-[10px] font-black text-emerald-800 tracking-tight uppercase">100% Pure Veg</span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-30 bg-black/75 group-hover/modalimg:bg-[#E02438] backdrop-blur-md text-white px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full text-[9.5px] sm:text-[11px] font-bold flex items-center gap-1 sm:gap-1.5 transition-all shadow-md group-hover/modalimg:scale-105">
                <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                <span>Zoom In</span>
              </div>
            </div>

            {/* Right: Product Details & Commercial Matrix (7 cols) */}
            <div className="md:col-span-7 p-2.5 sm:p-7 md:p-8 flex flex-col justify-between min-w-0 w-full bg-white">
              <div>
                {/* Brand Eyebrow */}
                <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-red-50 to-amber-50 border border-red-200/60 text-[#E02438] text-[8.5px] sm:text-[11px] font-black uppercase tracking-wider mb-1 sm:mb-2">
                  <span>Mr. Sweet Confectionery</span>
                </div>

                {/* Product Title */}
                <h2 id="modal-product-title" className="text-[13.5px] sm:text-2xl md:text-[25px] font-black text-[#111827] mb-0.5 sm:mb-1.5 leading-tight tracking-tight break-words">
                  {product.name}
                </h2>

                {/* Subtitle / Tagline */}
                <p className="text-[9px] sm:text-[13px] text-gray-500 font-semibold mb-1.5 sm:mb-3">
                  {product.tagline || '100% Veg • Authentic Packaged Confectionery'}
                </p>

                {/* Rating & Stock Status */}
                <div className="flex items-center flex-wrap gap-1.5 sm:gap-2.5 mb-2 sm:mb-3.5">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 font-black text-[9px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-2xs">
                    <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating || '4.9'}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[9px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-2xs">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Stock & Ready for Dispatch</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[9.5px] sm:text-sm text-gray-600 mb-2 sm:mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Bento Pricing Matrix */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 mb-1.5 sm:mb-3">
                  {/* Box / Jar MRP Card */}
                  <div className="bg-gradient-to-br from-red-50 via-rose-50/50 to-white border border-red-200/90 rounded-lg sm:rounded-2xl p-1.5 sm:p-3 flex flex-col justify-between shadow-2xs">
                    <div className="flex items-center justify-between text-[7.5px] sm:text-[10px] font-black uppercase tracking-wider text-[#E02438] mb-0.5">
                      <span>Box / Jar MRP</span>
                      <Tag className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E02438]" />
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-1.5">
                      <span className="text-base sm:text-3xl font-black text-[#E02438] tracking-tight">
                        ₹{product.boxMrp || product.priceINR}
                      </span>
                      <span className="text-[7.5px] sm:text-[10px] font-extrabold text-red-500 uppercase">Retail Box</span>
                    </div>
                  </div>

                  {/* Unit Retail or Wholesale Card */}
                  <div className="bg-gradient-to-br from-amber-50 via-yellow-50/40 to-white border border-amber-200/90 rounded-lg sm:rounded-2xl p-1.5 sm:p-3 flex flex-col justify-between shadow-2xs">
                    <div className="flex items-center justify-between text-[7.5px] sm:text-[10px] font-black uppercase tracking-wider text-amber-900 mb-0.5">
                      <span>{product.unitMrp ? 'Unit Retail' : 'Wholesale Rate'}</span>
                      <BadgePercent className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-700" />
                    </div>
                    <div className="flex items-baseline gap-1 sm:gap-1.5">
                      <span className="text-base sm:text-3xl font-black text-amber-950 tracking-tight">
                        {product.unitMrp ? `${product.unitMrp}` : (product.kcPrice ? `₹${product.kcPrice}` : 'Wholesale')}
                      </span>
                      <span className="text-[7.5px] sm:text-[10px] font-extrabold text-amber-800 uppercase">
                        {product.unitMrp ? '/ pc' : 'per box'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Logistics Bento Specifications */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-1.5 sm:mb-3 text-xs">
                  {/* Pieces / Packing */}
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-md sm:rounded-xl p-1 sm:p-2.5 flex flex-col justify-center">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 text-[7px] sm:text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      <Package className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600 shrink-0" />
                      <span>Pieces</span>
                    </div>
                    <span className="font-mono font-black text-gray-900 text-[8.5px] sm:text-xs truncate block" title={`Full Carton: ${product.packing}`}>
                      {formatPieces(product.packing)}
                    </span>
                  </div>

                  {/* Net Weight */}
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-md sm:rounded-xl p-1 sm:p-2.5 flex flex-col justify-center">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 text-[7px] sm:text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      <Scale className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600 shrink-0" />
                      <span>Net Weight</span>
                    </div>
                    <span className="font-bold text-gray-900 text-[8.5px] sm:text-xs truncate block">
                      {product.weight || 'Standard'}
                    </span>
                  </div>

                  {/* Shelf Life */}
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-md sm:rounded-xl p-1 sm:p-2.5 flex flex-col justify-center">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500 text-[7px] sm:text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600 shrink-0" />
                      <span>Shelf Life</span>
                    </div>
                    <span className="font-bold text-gray-900 text-[8.5px] sm:text-xs truncate block">
                      {product.shelfLife || '12 Months'}
                    </span>
                  </div>
                </div>

                {/* FSSAI & Quality Guarantee */}
                <div className="bg-emerald-50/50 border border-emerald-100/90 rounded-lg sm:rounded-2xl p-1.5 sm:p-3 mb-2 sm:mb-4 flex items-center justify-between gap-1 sm:gap-2 text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <div className="min-w-0">
                      <div className="font-bold text-emerald-950 text-[8.5px] sm:text-xs truncate">
                        100% Pure Vegetarian • Quality Assured
                      </div>
                      <div className="text-[7.5px] sm:text-[10px] text-emerald-800/80 truncate">
                        Hygiene sealed. Store in a cool, dry place.
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="inline-block bg-white border border-emerald-200 text-emerald-900 text-[7.5px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-2xs">
                      Lic. 12720052000625
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions: Inquire Wholesale & WhatsApp Trade */}
              <div className="pt-1.5 border-t border-gray-100 flex flex-col sm:flex-row gap-1.5 sm:gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquire(product);
                  }}
                  className="flex-1 py-2 sm:py-3.5 px-3 sm:px-5 rounded-lg sm:rounded-2xl text-[9.5px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#E02438] via-[#C8102E] to-[#B91C1C] hover:from-[#C8102E] hover:to-[#991B1B] text-white shadow-md sm:shadow-lg shadow-red-500/25 active:scale-98 cursor-pointer"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
                  <span>Inquire Wholesale</span>
                </button>
                <a
                  href={`https://wa.me/919350060606?text=Hello%20Prince%20Ghai,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}%20(Packing:%20${encodeURIComponent(product.packing || '')},%20MRP:%20₹${product.boxMrp || product.priceINR}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 sm:py-3.5 px-3 sm:px-5 rounded-lg sm:rounded-2xl text-[9.5px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md sm:shadow-lg shadow-emerald-500/25 active:scale-98"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-100" />
                  <span>WhatsApp Trade</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-[#E02438] p-3 rounded-full transition-all shadow-xl"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={getProductImage(product.image)}
              alt={product.name}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              decoding="async"
              onError={(e) => handleImageError(e, product.image)}
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
