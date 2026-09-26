import React, { useState } from 'react';
import { Gift, Plus, Trash2, Sparkles, Check, Package, RefreshCw, Mail } from 'lucide-react';

export default function CustomBoxBuilder({ onInquireCustomBox }) {
  const [boxSize, setBoxSize] = useState(9); // 4, 9, or 16
  const [ribbonColor, setRibbonColor] = useState('Crimson Red');
  const [giftMessage, setGiftMessage] = useState('');
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [added, setAdded] = useState(false);

  const sweetOptions = [
    { id: 's1', name: 'Gold Kaju Katli', image: '/kaju_katli_diamond.jpg', unitPrice: 120 },
    { id: 's2', name: 'Saffron Motichoor Ladoo', image: '/saffron_motichoor_ladoo.jpg', unitPrice: 110 },
    { id: 's3', name: 'Romeo Choco Cone', image: '/romeo_choco_cone.jpg', unitPrice: 130 },
    { id: 's4', name: 'Cocoa Cardamom Peda', image: '/cream_swirling.jpg', unitPrice: 115 },
    { id: 's5', name: 'Swiss Wafer Roll', image: '/wafer_rolling.jpg', unitPrice: 95 },
  ];

  const handleAddPiece = (sweet) => {
    if (selectedPieces.length < boxSize) {
      setSelectedPieces([...selectedPieces, sweet]);
    }
  };

  const handleRemovePiece = (index) => {
    const updated = [...selectedPieces];
    updated.splice(index, 1);
    setSelectedPieces(updated);
  };

  const calculateTotal = () => {
    const baseBoxCost = boxSize === 4 ? 200 : boxSize === 9 ? 350 : 600;
    const piecesCost = selectedPieces.reduce((acc, curr) => acc + curr.unitPrice, 0);
    return baseBoxCost + piecesCost;
  };

  const handleCompleteBox = () => {
    if (selectedPieces.length < boxSize) return;

    const customBox = {
      id: `custom-box-${Date.now()}`,
      name: `Bespoke ${boxSize}-Piece Haute Box`,
      tagline: `${boxSize} Custom Artisanal Pieces • ${ribbonColor} Ribbon`,
      priceINR: calculateTotal(),
      priceUSD: Math.round(calculateTotal() / 80),
      weight: `${boxSize * 40}g Custom Box`,
      image: '/foil_sealing.jpg',
      pieces: selectedPieces,
      ribbonColor,
      giftMessage
    };

    onAddCustomBoxToCart(customBox);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedPieces([]);
      setGiftMessage('');
    }, 2000);
  };

  return (
    <section className="w-full bg-[#18110F] text-[#EFE8DA] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#362823] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            <Gift className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONFECTIONERY STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Your Own{' '}
            <span className="font-serif-italic text-[#D4AF37] font-normal">
              Haute Gift Box.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-normal">
            Hand-pick your favorite artisanal confections piece by piece into our gold-embossed velvet box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sweet Selection Options */}
          <div className="lg:col-span-7 bg-[#231815] border border-[#362823] p-6 sm:p-8 rounded-3xl">
            {/* Step 1: Select Box Size */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                Step 1: Choose Box Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[4, 9, 16].map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setBoxSize(size);
                      if (selectedPieces.length > size) {
                        setSelectedPieces(selectedPieces.slice(0, size));
                      }
                    }}
                    className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold border transition-all text-center ${
                      boxSize === size
                        ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-glow'
                        : 'bg-[#110C0A] text-gray-300 border-[#362823] hover:border-white/20'
                    }`}
                  >
                    <div>{size} Pieces</div>
                    <div className="text-[10px] text-amber-200/80 font-normal mt-0.5">
                      {size === 4 ? 'Personal Vault' : size === 9 ? 'Signature Box' : 'Royal Hamper'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add Individual Sweets */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Step 2: Add Artisanal Sweets ({selectedPieces.length}/{boxSize} Filled)
                </label>
                {selectedPieces.length > 0 && (
                  <button
                    onClick={() => setSelectedPieces([])}
                    className="text-xs text-red-400 hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Clear Box
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sweetOptions.map((sweet) => (
                  <div
                    key={sweet.id}
                    className="bg-[#110C0A] border border-[#362823] p-3 rounded-2xl flex items-center justify-between hover:border-[#D4AF37]/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={sweet.image}
                        alt={sweet.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{sweet.name}</div>
                        <div className="text-[11px] text-[#D4AF37]">₹{sweet.unitPrice} / pc</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddPiece(sweet)}
                      disabled={selectedPieces.length >= boxSize}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedPieces.length >= boxSize
                          ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                          : 'bg-[#C8102E] text-white hover:bg-red-700'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Ribbon & Custom Message */}
            <div className="pt-6 border-t border-[#362823] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">
                  Ribbon Accent Color:
                </label>
                <div className="flex gap-2">
                  {['Crimson Red', 'Royal Gold', 'Midnight Gold'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setRibbonColor(color)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                        ribbonColor === color
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                          : 'bg-[#110C0A] text-gray-400 border-[#362823]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Complimentary Gift Note:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wishing you sweetness on your wedding day!"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  className="w-full bg-[#110C0A] border border-[#362823] rounded-xl px-3 py-2 text-xs text-white placeholder:text-gray-600 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Box Visual Preview */}
          <div className="lg:col-span-5 bg-[#110C0A] border-2 border-[#362823] p-6 sm:p-8 rounded-3xl shadow-floating flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                  <Package className="w-4 h-4" /> Live Box Preview
                </span>
                <span className="text-xs font-bold text-gray-400">
                  {selectedPieces.length} / {boxSize} Slots
                </span>
              </div>

              {/* Grid Box Container */}
              <div
                className={`grid gap-3 p-4 bg-[#18110F] border border-[#362823] rounded-2xl mb-6 ${
                  boxSize === 4 ? 'grid-cols-2' : boxSize === 9 ? 'grid-cols-3' : 'grid-cols-4'
                }`}
              >
                {Array.from({ length: boxSize }).map((_, idx) => {
                  const piece = selectedPieces[idx];
                  return (
                    <div
                      key={idx}
                      className={`aspect-square rounded-xl border-2 flex items-center justify-center relative transition-all overflow-hidden ${
                        piece
                          ? 'border-[#D4AF37] bg-[#231815]'
                          : 'border-dashed border-white/20 bg-black/40'
                      }`}
                    >
                      {piece ? (
                        <div className="relative w-full h-full group">
                          <img
                            src={piece.image}
                            alt={piece.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => handleRemovePiece(idx)}
                            className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] text-gray-600 font-bold">Slot {idx + 1}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Price Calculation Box */}
              <div className="space-y-2 text-xs text-gray-300 border-t border-[#362823] pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Base Velvet Box & Foil Packaging:</span>
                  <span className="font-semibold text-white">
                    ₹{boxSize === 4 ? 200 : boxSize === 9 ? 350 : 600}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Confections ({selectedPieces.length}):</span>
                  <span className="font-semibold text-white">
                    ₹{selectedPieces.reduce((acc, curr) => acc + curr.unitPrice, 0)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-[#362823]">
                  <span>Total Box Price:</span>
                  <span className="text-[#D4AF37]">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Inquiry Button */}
            <button
              onClick={() => {
                if (onInquireCustomBox) {
                  onInquireCustomBox({
                    name: `Custom ${boxSize}-Piece Bespoke Box`,
                    tagline: `${selectedPieces.length} Custom Selected Confections`,
                    priceINR: calculateTotal(),
                    priceUSD: Math.round(calculateTotal() / 75)
                  });
                }
              }}
              disabled={selectedPieces.length < boxSize}
              className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                selectedPieces.length < boxSize
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-[#C8102E] text-white hover:bg-red-700 shadow-glow'
              }`}
            >
              {selectedPieces.length < boxSize ? (
                <span>Fill Remaining {boxSize - selectedPieces.length} Slots to Complete Box</span>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-amber-200" />
                  <span>Inquire Custom Box • ₹{calculateTotal().toLocaleString()}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
