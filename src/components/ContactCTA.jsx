import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactCTA({ onOpenInquire }) {
  return (
    <section className="w-full bg-[#9B0B21] text-white py-16 sm:py-28 px-3 sm:px-6 lg:px-8 border-t border-[#7A0819] relative overflow-hidden">
      {/* Background Soft Radial Glow & Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(155,11,33,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#7A0819] via-[#9B0B21] to-[#7A0819] border border-red-500/40 p-8 sm:p-14 md:p-20 rounded-3xl sm:rounded-4xl shadow-2xl text-center max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 bg-[#7A0819] border border-white/30 text-amber-300 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PARTNERSHIP & CAMPAIGN DESK</span>
          </div>

          {/* Heading */}
          <h2 className="text-section-display font-extrabold text-white tracking-tight mb-4">
            Let’s Make{' '}
            <span className="font-serif italic text-amber-300 font-normal block sm:inline">
              Something Sweet.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-base text-red-100 font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
            For retail supply, distributor partnerships, corporate gift hampers, or export enquiries, get in touch with our team. We respond within 2 business hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquire && onOpenInquire('wholesale')}
              className="w-full sm:w-auto bg-[#C8102E] hover:bg-white hover:text-[#C8102E] text-white px-9 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:shadow-glow transition-all duration-300 active:scale-95 border border-red-400/40 group"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:text-[#C8102E] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+919999997877"
              className="w-full sm:w-auto bg-white text-[#C8102E] hover:bg-red-50 transition-all duration-300 px-9 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#C8102E]" />
              <span>CONTACT US: +91 99999 97877</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

