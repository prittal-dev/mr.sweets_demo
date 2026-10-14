import React, { useState, useMemo } from 'react';
import { X, Search, FileText, Download, Phone, ShieldCheck, Tag, Printer } from 'lucide-react';
import { showcaseProducts, pdfMeta } from '../data/products';
import { getProductImage, handleImageError } from '../utils/imageUrl';

export default function PriceListTableModal({ isOpen, onClose, onEnquire }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('ALL');

  // Filter products by section and search term
  const filteredProducts = useMemo(() => {
    if (!isOpen) return [];
    return showcaseProducts.filter((product) => {
      const matchesSection = selectedSection === 'ALL' || product.section === selectedSection;
      const matchesSearch =
        !searchTerm.trim() ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.packing.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSection && matchesSearch;
    });
  }, [isOpen, selectedSection, searchTerm]);

  // Group products by section for tabular presentation
  const groupedProducts = useMemo(() => {
    if (!isOpen) return {};
    const groups = {};
    filteredProducts.forEach((p) => {
      if (!groups[p.section]) {
        groups[p.section] = [];
      }
      groups[p.section].push(p);
    });
    return groups;
  }, [isOpen, filteredProducts]);

  if (!isOpen) return null;

  // Distinct sections from the PDF
  const sections = [
    'ALL',
    'WAFFERS VARIETY',
    'CARAMEL COATED WAFFER',
    'TIFFIN AVAILABLE WITH SHRINK PACK',
    'CREAM WAFFER',
    'BLISTER',
    'MOULDING PURE CHOCOLATE',
    'WAFER STICK 5/-',
    'CONES',
    'CANDIES/ALL SEASON COIN/BLISTER PETTA',
    'JELLY ITEMS',
    'AAMPAPAD'
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[94vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF7EE] border-b border-gray-200 p-4 sm:p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#2EC4B6] text-[#0F172A] font-fredoka font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Official Trade Document
                </span>
                <span className="bg-[#C8102E] text-white font-fredoka font-bold text-xs px-3 py-1 rounded-full tracking-wider animate-pulse">
                  {pdfMeta.activeOffer}
                </span>
                <span className="text-xs font-bold text-gray-600 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                  Effective: {pdfMeta.effectiveDate}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-black text-[#0F172A] tracking-tight">
                MR.SWEET PRICE LIST
              </h2>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-gray-700 mt-1">
                <span>
                  Trade Desk:{' '}
                  <span className="text-[#C8102E] font-black">{pdfMeta.contactPerson}</span>
                </span>
                <span>•</span>
                <a
                  href={`tel:${pdfMeta.phone}`}
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-extrabold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 {pdfMeta.phone}</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
                title="Print Price Sheet"
              >
                <Printer className="w-4 h-4 text-gray-600" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 sm:p-2.5 rounded-full bg-white border border-gray-300 hover:bg-[#C8102E] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search and Category Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-gray-200/80">
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 76 items by name, pack, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/30 focus:border-[#C8102E]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs font-bold text-gray-600 shrink-0">
              Showing <span className="text-[#C8102E] font-black">{filteredProducts.length}</span> of {showcaseProducts.length} items
            </div>
          </div>

          {/* Section Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer text-[11px] sm:text-xs ${
                  selectedSection === sec
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Table Content */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 font-bold mb-2">No products found matching "{searchTerm}".</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSection('ALL');
                }}
                className="text-xs font-bold text-[#C8102E] hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedProducts).map(([sectionName, items]) => (
                <div key={sectionName} className="rounded-2xl border border-gray-300 overflow-hidden shadow-xs">
                  {/* Yellow Section Banner (Matches PDF header style) */}
                  <div className="bg-[#FFE500] text-[#0F172A] font-outfit font-black text-center py-2 px-4 uppercase text-sm sm:text-base tracking-wider border-b border-yellow-400">
                    {sectionName}
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gray-100/90 text-gray-700 font-black uppercase text-[10px] sm:text-xs border-b border-gray-300">
                        <tr>
                          <th className="py-2.5 px-3 w-12 text-center">SR NO.</th>
                          <th className="py-2.5 px-3 w-16 text-center">IMAGE</th>
                          <th className="py-2.5 px-4">PRODUCTS</th>
                          <th className="py-2.5 px-3 whitespace-nowrap">PACKING BOX/JAR/PCS</th>
                          <th className="py-2.5 px-3 whitespace-nowrap text-center">RATES</th>
                          <th className="py-2.5 px-3 whitespace-nowrap text-right">BOX/JAR M.R.P</th>
                          <th className="py-2.5 px-3 whitespace-nowrap text-right">KC PRICE</th>
                          <th className="py-2.5 px-3 whitespace-nowrap text-center">SHELF LIFE & WEIGHT</th>
                          <th className="py-2.5 px-3 text-center">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {items.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-amber-50/40 transition-colors">
                            <td className="py-3 px-3 text-center font-bold text-gray-500">
                              {item.srNo || idx + 1}
                            </td>
                            <td className="py-2 px-3 text-center">
                              <div className="w-11 h-11 mx-auto rounded-xl bg-gray-50 border border-gray-200 p-1 flex items-center justify-center">
                                <img
                                  src={getProductImage(item.image)}
                                  alt={item.name}
                                  className="w-full h-full object-contain"
                                  onError={(e) => handleImageError(e, item.image)}
                                />
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-outfit font-black text-[#0F172A] text-xs sm:text-sm leading-tight">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                                {item.brand} • {item.unitMrp}/pc retail
                              </div>
                            </td>
                            <td className="py-3 px-3 font-semibold text-gray-700 whitespace-nowrap font-mono text-[11px] sm:text-xs">
                              {item.packing}
                            </td>
                            <td className="py-3 px-3 text-center whitespace-nowrap">
                              {item.rates ? (
                                <span className="bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded font-mono text-xs">
                                  {item.rates}
                                </span>
                              ) : (
                                <span className="text-gray-300 font-bold">—</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-right font-black text-[#C8102E] whitespace-nowrap text-xs sm:text-sm">
                              ₹{item.boxMrp} RS
                            </td>
                            <td className="py-3 px-3 text-right whitespace-nowrap font-bold text-emerald-800 text-xs sm:text-sm">
                              {item.kcPrice ? `₹${item.kcPrice}/-` : '—'}
                            </td>
                            <td className="py-3 px-3 text-center text-xs whitespace-nowrap text-gray-600">
                              {item.weight && <span className="font-bold text-gray-800">{item.weight}</span>}
                              {item.weight && item.shelfLife && <span> • </span>}
                              {item.shelfLife && <span className="text-gray-500">{item.shelfLife}</span>}
                              {!item.weight && !item.shelfLife && <span className="text-gray-400">Standard</span>}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <button
                                onClick={() => {
                                  onClose();
                                  if (onEnquire) onEnquire(item);
                                }}
                                className="bg-[#0F172A] hover:bg-[#C8102E] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
                              >
                                Inquire
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Terms & Conditions from Page 7 */}
          <div className="mt-8 bg-amber-50/70 border border-amber-200 p-5 rounded-2xl text-xs">
            <h4 className="font-outfit font-black text-[#0F172A] text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>TERMS & CONDITIONS (OFFICIAL PRICE LIST)</span>
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-medium">
              <li>ALL RATES ARE FOR WHOLESALE / DISTRIBUTOR DISPATCH.</li>
              <li>NO FURTHER DISCOUNT WILL B GIVEN AFTER THIS PRICE LIST.</li>
              <li>ALL RATES INCLUDING OF GST.</li>
              <li>PAYMENT SYSTEM WILL B BILL TO BILL.</li>
              <li>ACTIVE SCHEME: OFFER 50+1 (Buy 50 cartons/boxes, get 1 free).</li>
            </ol>
            <div className="mt-3 pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-3 text-gray-600">
              <div>
                Direct Trade Inquiries: <span className="font-bold text-gray-900">Prince Ghai</span> (+91 {pdfMeta.phone})
              </div>
              <div className="font-bold text-[#C8102E]">
                MR. SWEET FOODS INDUSTRY LTD.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7EE] border-t border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-600 font-medium text-center sm:text-left">
            Complete data extracted from official PDF Price List (Effective: {pdfMeta.effectiveDate})
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/91${pdfMeta.phone}?text=Hello%20Mr.%20Sweet,%20I%20am%20interested%20in%20placing%20a%20wholesale%20order%20from%20your%202026%20Price%20List.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Prince Ghai</span>
            </a>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
