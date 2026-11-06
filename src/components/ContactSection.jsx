import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    partnershipType: 'Super Stockist / Depo',
    message: '',
    agreeUpdates: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formError) setFormError('');
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name.';
    }
    if (!formData.company.trim() || formData.company.trim().length < 2) {
      return 'Please enter your company or business name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Please enter a valid business email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      return 'Please enter a valid 10-digit phone/WhatsApp number.';
    }
    if (!formData.location.trim() || formData.location.trim().length < 2) {
      return 'Please enter your State & City.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setFormError(errorMsg);
      return;
    }

    setFormError('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        location: '',
        partnershipType: 'Super Stockist / Depo',
        message: '',
        agreeUpdates: true
      });
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#FAF6EE] text-[#18110F] py-8 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#EFE8DA]"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          {/* Small Pink/Red Pill */}
          <div className="inline-block bg-[#FAF4EB] border border-[#F6D5DA] text-[#8B001D] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 shadow-2xs">
            WHOLESALE &amp; DEALERSHIP DESK
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#18110F] tracking-tight leading-[1.1] mb-2 sm:mb-3">
            Contact Mr. Sweet{' '}
            <span className="font-serif-italic font-bold text-[#8B001D] block sm:inline">
              Corporate Headquarters
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-base text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto">
            Retailers, modern trade chains, super stockists, and institutional buyers can connect directly with our corporate commercial team for regional distribution partnerships and factory pricing.
          </p>
        </div>

        {/* =========================================================
            TWO COLUMN CONTACT AREA
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch">
          {/* -------------------------------------------------------
              LEFT CARD: Direct Factory Access
              ------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-white border border-amber-900/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#18110F] tracking-tight pb-2.5 sm:pb-4 mb-3.5 sm:mb-6 border-b border-amber-900/10">
                Direct Factory Access
              </h3>

              <div className="space-y-3 sm:space-y-5">
                {/* Factory Address */}
                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B001D]" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                      Factory &amp; Corporate Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#18110F] font-bold leading-snug">
                      130, Library Road, Azad Market,<br />
                      Delhi – 110006, India.
                    </p>
                  </div>
                </div>

                {/* Commercial Sales Phone */}
                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B001D]" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                      Commercial Sales Hotline
                    </span>
                    <a
                      href="tel:+919350060606"
                      className="text-xs sm:text-sm text-[#18110F] font-bold hover:text-[#8B001D] transition-colors block"
                    >
                      Mr. Prince Ghai: +91 93500 60606
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B001D]" />
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                      Commercial Email Desk
                    </span>
                    <a
                      href="mailto:aadyaconfactioners@gmail.com"
                      className="text-xs sm:text-sm text-[#18110F] font-bold hover:text-[#8B001D] transition-colors break-all block"
                    >
                      aadyaconfactioners@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-4 sm:mt-8 pt-3 sm:pt-5 border-t border-amber-900/10">
              <div className="flex items-center gap-2.5 sm:gap-3 bg-[#FAF6EE] p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-amber-900/10">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-[#18110F]">
                  FSSAI Lic. No. 12720052000625
                </span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT CARD: Send a Commercial Inquiry Form
              ------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white border border-amber-900/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#18110F] tracking-tight pb-2.5 sm:pb-4 mb-3 sm:mb-6 border-b border-amber-900/10">
                Send a Commercial Inquiry
              </h3>

              {/* Submission Alert */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 sm:p-6 rounded-2xl text-center space-y-2 sm:space-y-3 my-2 sm:my-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-emerald-950">Inquiry Received Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 font-medium max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our commercial team has received your inquiry for <strong>{formData.company}</strong> and will follow up with complete catalog and price sheets.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-[#8B001D] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#8B001D]" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Company */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rajesh Kumar"
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Apex Trading Co."
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone / WhatsApp & Business Email */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="purchase@retail.com"
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: State & City & Partnership Type */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        State &amp; City *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Mumbai, MH"
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                        Partnership Type *
                      </label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Super Stockist / Depo">Super Stockist / Depot</option>
                        <option value="Wholesale Distributor">Wholesale Distributor</option>
                        <option value="Supermarket / Modern Trade">Modern Trade / Retail</option>
                        <option value="Canteen / Institutional Supply">Institutional Supply</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirement Details / Message */}
                  <div>
                    <label className="block text-[9.5px] sm:text-[11px] font-bold text-[#18110F] uppercase tracking-wider mb-0.5 sm:mb-1">
                      Requirement Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify estimated monthly carton volume, preferred confectionery SKUs..."
                      className="w-full bg-[#FAF6EE] focus:bg-white border border-amber-900/15 focus:border-[#8B001D] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#18110F] placeholder-gray-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-2 cursor-pointer pt-0.5 select-none">
                    <input
                      type="checkbox"
                      name="agreeUpdates"
                      checked={formData.agreeUpdates}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-[#8B001D] focus:ring-[#8B001D] cursor-pointer"
                    />
                    <span className="text-[10px] sm:text-[11px] text-gray-600 font-normal leading-snug">
                      I agree to receive official catalogs and wholesale price sheets via WhatsApp and Email.
                    </span>
                  </label>

                  {/* CTA */}
                  <div className="pt-1 sm:pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-2.5 sm:py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>SUBMIT COMMERCIAL INQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
