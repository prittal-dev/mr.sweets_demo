import React, { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, Check, ArrowRight, Truck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalItemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10" onClick={(e) => e.stopPropagation()}>
        <div className="w-screen max-w-md bg-[#FDFBF7] border-l border-cream-300 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-5 border-b border-cream-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C8102E]" />
              <h2 className="text-base font-extrabold text-[#231815] uppercase tracking-wider">
                Your Shopping Bag ({totalItemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="p-2 rounded-full text-gray-400 hover:text-[#C8102E] hover:bg-cream-100 transition-all focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Incentive Banner */}
          <div className="bg-[#110C0A] text-[#EFE8DA] px-5 py-2.5 text-xs font-semibold flex items-center gap-2 justify-between">
            <div className="flex items-center gap-1.5 text-amber-200">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>🎉 Priority B2B Packaging & Express Dispatch Ready</span>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm font-bold text-[#231815]">Your shopping bag is empty</p>
                <p className="text-xs text-gray-500 mt-1">Explore our haute confections and add treats!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-cream-300 p-3.5 rounded-2xl flex gap-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#231815] leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-500">{item.weight || item.tagline}</p>
                    </div>

                    <div className="flex items-center justify-end pt-2">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-cream-300 rounded-full bg-cream-50 px-2 py-0.5 text-xs font-bold">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                          aria-label="Decrease quantity"
                          className="px-1.5 text-gray-600 hover:text-[#C8102E]"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity || 1}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          aria-label="Increase quantity"
                          className="px-1.5 text-gray-600 hover:text-[#C8102E]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-cream-200 bg-white space-y-3">
              {/* Order Summary Breakdown */}
              <div className="space-y-1 text-xs text-gray-600 pt-2 border-t border-cream-200">
                <div className="flex justify-between">
                  <span>Selected Products</span>
                  <span className="font-bold text-[#231815]">{cartItems.length} Variety Types</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Quantity</span>
                  <span className="font-bold text-[#231815]">{totalItemCount} Units</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#231815] pt-2 border-t border-cream-200">
                  <span>Price Quote</span>
                  <span className="text-[#C8102E]">Available On Inquiry</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>SUBMIT INQUIRY FOR SELECTED ITEMS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
