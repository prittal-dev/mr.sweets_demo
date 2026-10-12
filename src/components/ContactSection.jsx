import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  Building2,
  Share2,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'Wholesale / Bulk Supply',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      return 'Please enter a valid 10-digit phone/WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      return 'Please write a brief description of your requirement.';
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

    // Auto reset form after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        requirement: 'Wholesale / Bulk Supply',
        message: ''
      });
    }, 6000);
  };

  return (
    <section id="contact" className="w-full bg-[#FAF9F6] text-[#111827] py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>COMMERCIAL DESK & CONCIERGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
            Contact Mr. Sweet{' '}
            <span className="font-serif italic text-[#C8102E] font-normal block sm:inline">
              Corporate Headquarters.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Whether you need bulk distribution terms, export pricing, custom packaging hampers, or retail product samples, our concierge team is at your service.
          </p>
        </div>

        {/* CLEAN TWO-COLUMN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* LEFT COLUMN: Address, Phone, Email, Business Hours, Social Media */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-white border border-red-100 p-6 sm:p-8 rounded-3xl shadow-lg space-y-6">
              <h3 className="text-lg sm:text-2xl font-extrabold text-[#111827] pb-3 border-b border-red-100">
                Atelier & Factory Contact Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-[#C8102E] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Corporate Address</div>
                  <p className="text-xs sm:text-sm text-[#111827] font-medium leading-relaxed">
                    Mr. Sweet Foods Industry Ltd.<br />
                    Industrial Confectionery Park, Sector 4, Food Hub, India.
                  </p>
                  <span className="inline-block text-[10px] text-[#C8102E] font-semibold mt-1">
                    ISO 22000:2018 & FSSAI Certified Plant
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone & Direct Trade Line</div>
                  <div className="text-xs sm:text-sm text-[#111827] font-bold">
                    <a href="tel:+919999997877" className="hover:text-[#C8102E] transition-colors">+91 99999 97877</a>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    WhatsApp Desk Available
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-[#C8102E] flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Official Email Addresses</div>
                  <div className="text-xs sm:text-sm text-[#111827] font-medium space-y-0.5">
                    <div><a href="mailto:info@mrsweets.in" className="hover:text-[#C8102E] transition-colors">info@mrsweets.in</a></div>
                    <div><a href="mailto:trade@mrsweets.in" className="hover:text-[#C8102E] transition-colors">trade@mrsweets.in</a></div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Commercial Desk Hours</div>
                  <p className="text-xs sm:text-sm text-[#111827] font-medium">
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Sunday: Closed (Dispatch Desk Open)
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-red-100">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Connect With Mr. Sweet</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-gray-600 hover:text-[#C8102E] hover:border-[#C8102E] flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-gray-600 hover:text-[#C8102E] hover:border-[#C8102E] flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-gray-600 hover:text-[#C8102E] hover:border-[#C8102E] flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/919999997877"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 hover:border-emerald-500 flex items-center justify-center transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-red-100 p-6 sm:p-10 rounded-3xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mb-2">
              Send a Direct Commercial Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Fill in your details below and our commercial manager will review your requirement and reply within 2 business hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-300 p-8 rounded-2xl text-center space-y-3"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-[#111827]">Inquiry Submitted Successfully!</h4>
                <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto">
                  Thank you, <span className="text-[#C8102E] font-bold">{formData.name}</span>. We have received your inquiry for <span className="text-[#111827] font-semibold">&ldquo;{formData.requirement}&rdquo;</span>.
                </p>
                <p className="text-xs text-gray-500 pt-2">
                  A copy of trade terms and brochure link has been dispatched to your email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Form Error Banner */}
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-[#C8102E] text-xs p-3.5 rounded-xl font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C8102E] shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex FMCG Distributors"
                      className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Business Email Address <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajesh@apexfmcg.com"
                      className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone / WhatsApp Number <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 97877"
                      className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Requirement Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Select Primary Requirement <span className="text-[#C8102E]">*</span>
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors cursor-pointer"
                  >
                    <option>Wholesale / Bulk Supply</option>
                    <option>Distributor & Stockist Partnership</option>
                    <option>Retail Chain Supply</option>
                    <option>Global Export Inquiry</option>
                    <option>Private Labeling / Custom Packaging</option>
                    <option>Product Sample Request</option>
                    <option>General Corporate Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Message / Order Details <span className="text-[#C8102E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify target delivery location, estimated quantities, or special product requirements..."
                    className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-[#C8102E] text-[#111827] text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#C8102E] hover:bg-[#9B0B21] text-white transition-all py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 border border-red-500/40"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Commercial Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
