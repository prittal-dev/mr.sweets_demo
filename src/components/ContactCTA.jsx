import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function ContactCTA({ onOpenInquire }) {
  return (
    <section className="w-full bg-[#FFC72C] text-[#18110F] py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-amber-400">
      {/* Subtle Warm Background Depth */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Small Text */}
        <div className="inline-flex items-center bg-[#18110F]/10 border border-[#18110F]/15 text-[#18110F] px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-fredoka font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-2xs">
          <span>READY TO STOCK HIGH-VELOCITY TREATS?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-fredoka font-bold text-[#18110F] tracking-tight leading-[1.1] mb-2 sm:mb-3">
          <span className="block">Let's Make</span>
          <span className="block font-fredoka font-bold italic text-[#8B001D] mt-0.5 sm:mt-1">
            Something Sweet.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm md:text-base font-fredoka text-[#18110F]/85 font-normal leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6 px-2">
          Become an authorized regional stockist or commercial wholesale distributor. Enjoy high consumer velocity, protected margins, automated factory freshness, and prompt nationwide dispatch.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          {/* PRIMARY: INQUIRE NOW FOR DEALERSHIP */}
          <button
            onClick={() => {
              if (onOpenInquire) onOpenInquire('wholesale');
            }}
            className="w-full sm:w-auto bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white font-fredoka font-bold text-xs sm:text-[13px] tracking-wide px-6 sm:px-8 py-3 rounded-full shadow-lg shadow-red-950/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>INQUIRE NOW FOR DEALERSHIP</span>
            <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
          </button>

          {/* SECONDARY: Call Phone */}
          <a
            href="tel:+919350060606"
            className="w-full sm:w-auto bg-white hover:bg-[#FFFDF9] active:scale-95 text-[#18110F] hover:text-[#8B001D] font-fredoka font-bold text-xs sm:text-[13px] tracking-wide px-5 sm:px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-black/5"
            title="Call Mr. Prince Ghai: +91 93500 60606"
          >
            <Phone className="w-3.5 h-3.5 text-[#8B001D]" />
            <span>+91 93500 60606</span>
          </a>
        </div>
      </div>
    </section>
  );
}
