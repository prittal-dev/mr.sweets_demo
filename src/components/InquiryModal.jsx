import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles, Check } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Wedding & Celebration Hampers',
    boxQuantity: '50 – 200 Boxes',
    message: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div
        className="bg-[#FDFBF7] border border-cream-300 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white border border-cream-300 text-gray-400 hover:text-[#C8102E] transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-xs font-extrabold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MR. SWEET ATELIER CONCIERGE</span>
          </div>
          <h3 id="inquiry-modal-title" className="text-2xl font-extrabold text-[#231815]">
            Inquire for Gifting & B2B
          </h3>
          <p className="text-xs text-[#8B7355] font-medium mt-1">
            Request custom gold foil embossing, tasting boxes & volume pricing.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 bg-emerald-50 rounded-2xl border border-emerald-200 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-emerald-900">Inquiry Received!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Our Senior Gifting Concierge will reach out within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#231815] mb-1">Full Name *</label>
              <input
                id="inquiry-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ananya Sharma"
                className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#231815] mb-1">Email *</label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ananya@example.com"
                  className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#231815] mb-1">Phone / WhatsApp *</label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="inquiry-purpose" className="block text-xs font-bold text-[#231815] mb-1">Inquiry Purpose</label>
                <select
                  id="inquiry-purpose"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                >
                  <option>Wedding & Celebration Hampers</option>
                  <option>Corporate Milestone Gifting</option>
                  <option>Wholesale & Export Distributorship</option>
                  <option>Tasting Room Reservation</option>
                </select>
              </div>
              <div>
                <label htmlFor="inquiry-boxes" className="block text-xs font-bold text-[#231815] mb-1">Estimated Boxes</label>
                <select
                  id="inquiry-boxes"
                  value={formData.boxQuantity}
                  onChange={(e) => setFormData({ ...formData, boxQuantity: e.target.value })}
                  className="w-full bg-white border border-cream-300 rounded-xl px-3 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
                >
                  <option>10 – 50 Boxes</option>
                  <option>50 – 200 Boxes</option>
                  <option>200 – 1,000 Boxes</option>
                  <option>1,000+ Custom Bulk Order</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-msg" className="block text-xs font-bold text-[#231815] mb-1">Customization Requirements</label>
              <textarea
                id="inquiry-msg"
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention event date, desired sweets, monogram details..."
                className="w-full bg-white border border-cream-300 rounded-xl px-3.5 py-2.5 text-xs text-[#231815] focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#110C0A] text-white hover:bg-[#C8102E] transition-all py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>SUBMIT CONCIERGE REQUEST</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
