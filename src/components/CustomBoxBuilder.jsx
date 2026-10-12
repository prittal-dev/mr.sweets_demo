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
    <section className="w-full bg-[#FAF9F6] text-[#111827] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C8102E] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
            <Gift className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONFECTIONERY STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Build Your Own{' '}
            <span className="font-serif-italic text-[#C8102E] font-normal">
              Haute Gift Box.
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 font-normal">
            Hand-pick your favorite artisanal confections piece by piece into our custom gift box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sweet Selection Options */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            {/* Step 1: Select Box Size */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
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
                        ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm'
                        : 'bg-red-50/50 text-[#111827] border-gray-200 hover:border-[#C8102E]'
                    }`}
                  >
                    <div>{size} Pieces</div>
                    <div className={boxSize === size ? 'text-amber-200 text-[10px] font-normal mt-0.5' : 'text-gray-500 text-[10px] font-normal mt-0.5'}>
                      {size === 4 ? 'Personal Vault' : size === 9 ? 'Signature Box' : 'Royal Hamper'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add Individual Sweets */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                  Step 2: Add Artisanal Sweets ({selectedPieces.length}/{boxSize} Filled)
                </label>
                {selectedPieces.length > 0 && (
                  <button
                    onClick={() => setSelectedPieces([])}
                    className="text-xs text-red-600 hover:underline flex items-center gap-1 font-bold"
                  >
                    <RefreshCw className="w-3 h-3" /> Clear Box
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sweetOptions.map((sweet) => (
                  <div
                    key={sweet.id}
                    className="bg-red-50/40 border border-gray-200 p-3 rounded-2xl flex items-center justify-between hover:border-[#C8102E]/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={sweet.image}
                        alt={sweet.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#111827]">{sweet.name}</div>
                        <div className="text-[11px] text-[#C8102E] font-semibold">₹{sweet.unitPrice} / pc</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddPiece(sweet)}
                      disabled={selectedPieces.length >= boxSize}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedPieces.length >= boxSize
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-[#C8102E] text-white hover:bg-[#9B0B21]'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Ribbon & Custom Message */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Ribbon Accent Color:
                </label>
                <div className="flex gap-2">
                  {['Crimson Red', 'Royal Gold', 'Metallic Silver'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setRibbonColor(color)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                        ribbonColor === color
                          ? 'bg-[#C8102E] text-white border-[#C8102E]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Complimentary Gift Note:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wishing you sweetness on your special day!"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-[#111827] placeholder:text-gray-400 focus:border-[#C8102E] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Box Visual Preview */}
          <div className="lg:col-span-5 bg-[#7A0819] border-2 border-red-900 p-6 sm:p-8 rounded-3xl shadow-floating flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Package className="w-4 h-4" /> Live Box Preview
                </span>
                <span className="text-xs font-bold text-gray-200">
                  {selectedPieces.length} / {boxSize} Slots
                </span>
              </div>

              {/* Grid Box Container */}
              <div
                className={`grid gap-3 p-4 bg-[#9B0B21] border border-red-800 rounded-2xl mb-6 ${
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
                          ? 'border-amber-400 bg-[#7A0819]'
                          : 'border-dashed border-white/30 bg-black/20'
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
                        <span className="text-[10px] text-red-200/60 font-bold">Slot {idx + 1}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Box Summary Box */}
              <div className="space-y-2 text-xs text-gray-200 border-t border-red-800/80 pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Base Box & Foil Packaging:</span>
                  <span className="font-semibold text-amber-300">
                    Included
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Confections ({selectedPieces.length}):</span>
                  <span className="font-semibold text-white">
                    {selectedPieces.length} of {boxSize} Slots Filled
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-red-800/80">
                  <span>Box Quote Status:</span>
                  <span className="text-amber-300">Custom B2B Quote</span>
                </div>
              </div>
            </div>

            {/* Action Inquiry Button */}
            <button
              onClick={() => {
                if (onInquireCustomBox) {
                  onInquireCustomBox({
                    name: `Custom ${boxSize}-Piece Bespoke Box`,
                    tagline: `${selectedPieces.length} Custom Selected Confections`
                  });
                }
              }}
              disabled={selectedPieces.length < boxSize}
              className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                selectedPieces.length < boxSize
                  ? 'bg-red-950/60 text-red-300/50 cursor-not-allowed border border-red-900'
                  : 'bg-[#C8102E] text-white hover:bg-[#9B0B21] active:scale-98'
              }`}
            >
              {selectedPieces.length < boxSize ? (
                <span>Fill Remaining {boxSize - selectedPieces.length} Slots to Complete Box</span>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Inquire Custom Gift Box</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
