import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, MessageSquare, Building2, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'Distributor Partnership',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields (*)');
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        purpose: 'Distributor Partnership',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="w-full bg-[#110C0A] text-[#EFE8DA] py-10 sm:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#231815] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,rgba(17,12,10,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#18110F] border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>GET IN TOUCH WITH US</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-6">
            Contact Mr. Sweet{' '}
            <span className="font-serif italic text-[#D4AF37] font-normal">
              Atelier Concierge.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Have questions about bulk orders, distributor partnerships, festive return gift boxes, or custom retail supply? Our dedicated concierge team responds within 2 business hours.
          </p>
        </div>

        {/* 2-Column Layout: Form & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#18110F] border border-[#362823] p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>SEND US A DIRECT MESSAGE</span>
            </div>

            {isSubmitted ? (
              <div className="bg-[#110C0A] border border-emerald-500/40 p-6 rounded-2xl text-center animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-300">
                  Thank you, <span className="font-bold text-[#D4AF37]">{formData.name}</span>. Our Mr. Sweet Commercial Representative will contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-950/80 border border-red-500/40 text-red-200 text-xs p-3 rounded-xl font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full bg-[#110C0A] border border-[#362823] focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 97877"
                      className="w-full bg-[#110C0A] border border-[#362823] focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@example.com"
                      className="w-full bg-[#110C0A] border border-[#362823] focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Purpose of Contact
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-[#110C0A] border border-[#362823] focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                    >
                      <option>Distributor Partnership</option>
                      <option>Bulk Order Booking</option>
                      <option>Party & Return Gift Packs</option>
                      <option>Export / Commercial Inquiry</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify target delivery location, estimated quantities, or special product requirements..."
                    className="w-full bg-[#110C0A] border border-[#362823] focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all py-3 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  <span>Submit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Atelier Address Card */}
            <div className="bg-[#18110F] border border-[#362823] p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#231815] border border-[#362823] text-[#C8102E] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Commercial Atelier & Factory</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-1">
                  Industrial Confectionery Park, Sector 4, Food Hub, India.
                </p>
                <span className="text-[10px] text-[#D4AF37] font-semibold">ISO 22000 & FSSAI Certified Plant</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-[#18110F] border border-[#362823] p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#231815] border border-[#362823] text-[#D4AF37] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Phone & WhatsApp Helpline</h4>
                <div className="text-xs text-gray-300">
                  <div>Direct / WhatsApp: <a href="https://wa.me/919999997877" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-[#D4AF37]">+91 99999 97877</a></div>
                </div>
              </div>
            </div>

            {/* Email & Support Hours Card */}
            <div className="bg-[#18110F] border border-[#362823] p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#231815] border border-[#362823] text-emerald-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Commercial Email</h4>
                <p className="text-xs text-gray-300 mb-1">
                  <a href="mailto:concierge@mrsweetfoods.com" className="hover:text-[#D4AF37] font-semibold">concierge@mrsweetfoods.com</a>
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
