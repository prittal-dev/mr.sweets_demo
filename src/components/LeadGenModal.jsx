import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles, CheckCircle2, Loader2, Building2, Gift, PackageCheck } from 'lucide-react';
import { submitEnquiry } from '../utils/api';

export default function LeadGenModal({ isOpen, onClose, initialTab = 'product', prefilledProduct = null }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 1. Product Enquiry State
  const [productForm, setProductForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: prefilledProduct ? prefilledProduct.name : 'Romeo Choco Cone (30 Cones Pack)',
    quantity: '5 Cartons',
    city: '',
    message: ''
  });

  // 2. Wholesale / B2B Enquiry State
  const [b2bForm, setB2bForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Retail Supermarket',
    productsInterested: 'Romeo Cones & Gold Coin Tubs',
    estimatedQuantity: '100+ Cartons',
    message: ''
  });

  // 3. Custom Gift Box Enquiry State
  const [giftBoxForm, setGiftBoxForm] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Wedding Celebration',
    numberOfBoxes: '50 Boxes',
    preferredProducts: 'Gold Kaju Katli & Choco Cones',
    budgetRange: '₹25,000 – ₹50,000',
    deliveryCity: '',
    message: ''
  });

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
    if (prefilledProduct) {
      const prodName = typeof prefilledProduct === 'object' ? prefilledProduct.name : prefilledProduct;
      const qtyStr = typeof prefilledProduct === 'object' && prefilledProduct.quantity ? `${prefilledProduct.quantity} Cartons` : '5 Cartons';
      setProductForm(prev => ({
        ...prev,
        product: prodName || prev.product,
        quantity: qtyStr
      }));
    }
  }, [initialTab, prefilledProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePhone = (phone) => /^[0-9+\s\-()]{8,15}$/.test(phone.trim());

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!productForm.name.trim()) return setErrorMsg('Please enter your full name.');
    if (!validatePhone(productForm.phone)) return setErrorMsg('Please enter a valid phone number.');
    if (!validateEmail(productForm.email)) return setErrorMsg('Please enter a valid email address.');
    if (!productForm.city.trim()) return setErrorMsg('Please enter your city.');

    await processSubmission(productForm, 'product');
  };

  const handleB2bSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!b2bForm.businessName.trim()) return setErrorMsg('Please enter your firm name.');
    if (!b2bForm.contactPerson.trim()) return setErrorMsg('Please enter contact person name.');
    if (!validatePhone(b2bForm.phone)) return setErrorMsg('Please enter a valid phone number.');
    if (!validateEmail(b2bForm.email)) return setErrorMsg('Please enter a valid email address.');
    if (!b2bForm.city.trim()) return setErrorMsg('Please enter city.');

    await processSubmission(b2bForm, 'wholesale');
  };

  const handleGiftBoxSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!giftBoxForm.name.trim()) return setErrorMsg('Please enter your full name.');
    if (!validatePhone(giftBoxForm.phone)) return setErrorMsg('Please enter a valid phone number.');
    if (!validateEmail(giftBoxForm.email)) return setErrorMsg('Please enter a valid email address.');
    if (!giftBoxForm.deliveryCity.trim()) return setErrorMsg('Please enter delivery city.');

    await processSubmission(giftBoxForm, 'giftbox');
  };

  const processSubmission = async (payload, type) => {
    setLoading(true);
    try {
      await submitEnquiry(payload, type);
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      setErrorMsg('Submission failed. Please check your connection and try again.');
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    setLoading(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-gen-title"
    >
      <div
        className="bg-[#FDFBF7] border border-cream-300 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close enquiry modal"
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white border border-cream-300 text-gray-400 hover:text-[#C8102E] transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-xs font-extrabold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MR. SWEET ATELIER CONCIERGE</span>
          </div>
          <h2 id="lead-gen-title" className="text-2xl sm:text-3xl font-extrabold text-[#231815]">
            Submit Trade & Retail Enquiry
          </h2>
          <p className="text-xs text-[#8B7355] font-medium mt-1">
            Direct response within 2 business hours • ISO & FSSAI Certified Atelier
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div className="text-center py-10 px-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-fadeIn space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950">Thank you for your enquiry!</h3>
            <p className="text-sm font-semibold text-emerald-800 max-w-md mx-auto leading-relaxed">
              Our Mr. Sweet team will get back to you shortly.
            </p>
            <p className="text-xs text-emerald-700">
              A copy of your submission reference has been logged to our priority queue.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="bg-[#110C0A] text-white hover:bg-[#C8102E] transition-all px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Reusable Form Tabs */}
            <div className="flex items-center justify-center gap-1.5 p-1 bg-cream-200 rounded-full mb-6 text-xs font-bold">
              <button
                onClick={() => { setActiveTab('product'); setErrorMsg(''); }}
                className={`flex-1 py-2 px-3 rounded-full transition-all flex items-center justify-center gap-1 ${
                  activeTab === 'product'
                    ? 'bg-[#110C0A] text-white shadow-sm'
                    : 'text-[#362823] hover:text-[#C8102E]'
                }`}
              >
                <PackageCheck className="w-3.5 h-3.5" />
                <span>Product</span>
              </button>

              <button
                onClick={() => { setActiveTab('wholesale'); setErrorMsg(''); }}
                className={`flex-1 py-2 px-3 rounded-full transition-all flex items-center justify-center gap-1 ${
                  activeTab === 'wholesale'
                    ? 'bg-[#110C0A] text-white shadow-sm'
                    : 'text-[#362823] hover:text-[#C8102E]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Wholesale & B2B</span>
              </button>

              <button
                onClick={() => { setActiveTab('giftbox'); setErrorMsg(''); }}
                className={`flex-1 py-2 px-3 rounded-full transition-all flex items-center justify-center gap-1 ${
                  activeTab === 'giftbox'
                    ? 'bg-[#110C0A] text-white shadow-sm'
                    : 'text-[#362823] hover:text-[#C8102E]'
                }`}
              >
                <Gift className="w-3.5 h-3.5" />
                <span>Custom Gift Box</span>
              </button>
            </div>

            {/* Error Message Alert */}
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold text-center">
                {errorMsg}
              </div>
            )}

            {/* FORM 1: Product Enquiry */}
            {activeTab === 'product' && (
              <form onSubmit={handleProductSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="p-name" className="block text-xs font-bold text-[#231815] mb-1">Full Name *</label>
                  <input
                    id="p-name"
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Sharma"
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="p-phone" className="block text-xs font-bold text-[#231815] mb-1">Phone Number *</label>
                    <input
                      id="p-phone"
                      type="tel"
                      required
                      value={productForm.phone}
                      onChange={(e) => setProductForm({ ...productForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="p-email" className="block text-xs font-bold text-[#231815] mb-1">Email Address *</label>
                    <input
                      id="p-email"
                      type="email"
                      required
                      value={productForm.email}
                      onChange={(e) => setProductForm({ ...productForm, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="p-item" className="block text-xs font-bold text-[#231815] mb-1">Product Interested *</label>
                    <input
                      id="p-item"
                      type="text"
                      required
                      value={productForm.product}
                      onChange={(e) => setProductForm({ ...productForm, product: e.target.value })}
                      placeholder="Product name"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="p-qty" className="block text-xs font-bold text-[#231815] mb-1">Quantity / Cartons</label>
                    <select
                      id="p-qty"
                      value={productForm.quantity}
                      onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>1 – 5 Cartons</option>
                      <option>5 – 20 Cartons</option>
                      <option>20 – 50 Cartons</option>
                      <option>50+ Bulk Master Cartons</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="p-city" className="block text-xs font-bold text-[#231815] mb-1">City / Location *</label>
                  <input
                    id="p-city"
                    type="text"
                    required
                    value={productForm.city}
                    onChange={(e) => setProductForm({ ...productForm, city: e.target.value })}
                    placeholder="e.g. Mumbai, Delhi, Bengaluru..."
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="p-msg" className="block text-xs font-bold text-[#231815] mb-1">Message (Optional)</label>
                  <textarea
                    id="p-msg"
                    rows="2"
                    value={productForm.message}
                    onChange={(e) => setProductForm({ ...productForm, message: e.target.value })}
                    placeholder="Specify delivery timeline, retail requirements..."
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C8102E] text-white hover:bg-red-700 transition-all py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Mail className="w-4 h-4 text-[#D4AF37]" />}
                  <span>{loading ? 'SUBMITTING ENQUIRY...' : 'SUBMIT PRODUCT ENQUIRY'}</span>
                </button>
              </form>
            )}

            {/* FORM 2: Wholesale / B2B Enquiry */}
            {activeTab === 'wholesale' && (
              <form onSubmit={handleB2bSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="b-biz" className="block text-xs font-bold text-[#231815] mb-1">Business Name *</label>
                    <input
                      id="b-biz"
                      type="text"
                      required
                      value={b2bForm.businessName}
                      onChange={(e) => setB2bForm({ ...b2bForm, businessName: e.target.value })}
                      placeholder="e.g. Apex Supermarkets Ltd."
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="b-contact" className="block text-xs font-bold text-[#231815] mb-1">Contact Person *</label>
                    <input
                      id="b-contact"
                      type="text"
                      required
                      value={b2bForm.contactPerson}
                      onChange={(e) => setB2bForm({ ...b2bForm, contactPerson: e.target.value })}
                      placeholder="e.g. Rajesh Mehta"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="b-phone" className="block text-xs font-bold text-[#231815] mb-1">Phone Number *</label>
                    <input
                      id="b-phone"
                      type="tel"
                      required
                      value={b2bForm.phone}
                      onChange={(e) => setB2bForm({ ...b2bForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="b-email" className="block text-xs font-bold text-[#231815] mb-1">Email Address *</label>
                    <input
                      id="b-email"
                      type="email"
                      required
                      value={b2bForm.email}
                      onChange={(e) => setB2bForm({ ...b2bForm, email: e.target.value })}
                      placeholder="rajesh@apexretail.com"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="b-city" className="block text-xs font-bold text-[#231815] mb-1">City *</label>
                    <input
                      id="b-city"
                      type="text"
                      required
                      value={b2bForm.city}
                      onChange={(e) => setB2bForm({ ...b2bForm, city: e.target.value })}
                      placeholder="e.g. Ahmedabad, Surat, Dubai..."
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="b-type" className="block text-xs font-bold text-[#231815] mb-1">Business Type</label>
                    <select
                      id="b-type"
                      value={b2bForm.businessType}
                      onChange={(e) => setB2bForm({ ...b2bForm, businessType: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>Retail Supermarket</option>
                      <option>School / College Canteen</option>
                      <option>Regional Distributor</option>
                      <option>Express Kiosk & Outlet</option>
                      <option>Export Merchant</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="b-prod" className="block text-xs font-bold text-[#231815] mb-1">Products Interested</label>
                    <input
                      id="b-prod"
                      type="text"
                      value={b2bForm.productsInterested}
                      onChange={(e) => setB2bForm({ ...b2bForm, productsInterested: e.target.value })}
                      placeholder="Romeo Cones, Gold Coins, Wafers..."
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="b-est" className="block text-xs font-bold text-[#231815] mb-1">Estimated Monthly Units</label>
                    <select
                      id="b-est"
                      value={b2bForm.estimatedQuantity}
                      onChange={(e) => setB2bForm({ ...b2bForm, estimatedQuantity: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>50 – 200 Units</option>
                      <option>200 – 1,000 Units</option>
                      <option>1,000 – 5,000 Units</option>
                      <option>5,000+ Master Container Units</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="b-msg" className="block text-xs font-bold text-[#231815] mb-1">Message (Optional)</label>
                  <textarea
                    id="b-msg"
                    rows="2"
                    value={b2bForm.message}
                    onChange={(e) => setB2bForm({ ...b2bForm, message: e.target.value })}
                    placeholder="Mention margin expectations, GST details..."
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#110C0A] text-white hover:bg-[#C8102E] transition-all py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Mail className="w-4 h-4 text-[#D4AF37]" />}
                  <span>{loading ? 'SUBMITTING B2B REQUEST...' : 'SUBMIT WHOLESALE / B2B ENQUIRY'}</span>
                </button>
              </form>
            )}

            {/* FORM 3: Custom Gift Box Enquiry */}
            {activeTab === 'giftbox' && (
              <form onSubmit={handleGiftBoxSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="g-name" className="block text-xs font-bold text-[#231815] mb-1">Name *</label>
                    <input
                      id="g-name"
                      type="text"
                      required
                      value={giftBoxForm.name}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, name: e.target.value })}
                      placeholder="e.g. Radhika Sen"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="g-phone" className="block text-xs font-bold text-[#231815] mb-1">Phone Number *</label>
                    <input
                      id="g-phone"
                      type="tel"
                      required
                      value={giftBoxForm.phone}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="g-email" className="block text-xs font-bold text-[#231815] mb-1">Email Address *</label>
                    <input
                      id="g-email"
                      type="email"
                      required
                      value={giftBoxForm.email}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="g-occ" className="block text-xs font-bold text-[#231815] mb-1">Occasion</label>
                    <select
                      id="g-occ"
                      value={giftBoxForm.occasion}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, occasion: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>Wedding Celebration</option>
                      <option>Corporate Milestone</option>
                      <option>Diwali / Festive Favor</option>
                      <option>Birthday / Anniversary</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="g-num" className="block text-xs font-bold text-[#231815] mb-1">Number of Boxes</label>
                    <select
                      id="g-num"
                      value={giftBoxForm.numberOfBoxes}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, numberOfBoxes: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>20 – 50 Boxes</option>
                      <option>50 – 200 Boxes</option>
                      <option>200 – 500 Boxes</option>
                      <option>500+ Bespoke Vaults</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="g-budget" className="block text-xs font-bold text-[#231815] mb-1">Budget Range</label>
                    <select
                      id="g-budget"
                      value={giftBoxForm.budgetRange}
                      onChange={(e) => setGiftBoxForm({ ...giftBoxForm, budgetRange: e.target.value })}
                      className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                    >
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,50,000</option>
                      <option>₹1,50,000+ Royal Premium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="g-city" className="block text-xs font-bold text-[#231815] mb-1">Delivery City *</label>
                  <input
                    id="g-city"
                    type="text"
                    required
                    value={giftBoxForm.deliveryCity}
                    onChange={(e) => setGiftBoxForm({ ...giftBoxForm, deliveryCity: e.target.value })}
                    placeholder="e.g. Udaipur, Jaipur, Mumbai..."
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="g-msg" className="block text-xs font-bold text-[#231815] mb-1">Message / Gold Embossing Notes</label>
                  <textarea
                    id="g-msg"
                    rows="2"
                    value={giftBoxForm.message}
                    onChange={(e) => setGiftBoxForm({ ...giftBoxForm, message: e.target.value })}
                    placeholder="Mention couple names for foil stamping, sweet choices..."
                    className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#110C0A] text-white hover:bg-[#C8102E] transition-all py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Mail className="w-4 h-4 text-[#D4AF37]" />}
                  <span>{loading ? 'SUBMITTING GIFT BOX REQUEST...' : 'SUBMIT CUSTOM GIFT BOX ENQUIRY'}</span>
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
