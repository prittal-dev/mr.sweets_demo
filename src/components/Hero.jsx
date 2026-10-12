import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Award, Factory, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExploreCatalog, onRequestQuote }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <section id="atelier-hero" className="w-full relative overflow-hidden bg-black min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-32">
      {/* Background Video Stream */}
      <video
        ref={videoRef}
        src="/chocolate_factory.mp4"
        poster="/romeo choco cone.png"
        autoPlay
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-85 filter brightness-105 saturate-110 scale-105 pointer-events-none"
      />

      {/* Subtle Dark Vignette & Soft Ambient Radial Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Main Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-black/60 border border-white/25 text-amber-300 px-4 py-1.5 rounded-full shadow-lg mb-4 sm:mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-fredoka font-bold uppercase tracking-[0.2em]">
                CRAFTING SWEET MOMENTS
              </span>
            </div>

            {/* Large Fluid Display Typography Headline */}
            <h1 className="text-hero-display font-outfit font-black text-white tracking-tight mb-4 sm:mb-6 [text-shadow:_0_4px_30px_rgba(0,0,0,0.8)]">
              Made to Delight.{' '}
              <span className="font-serif-italic text-amber-300 font-normal block sm:inline drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Loved at Every Bite.
              </span>
            </h1>

            {/* Short Supporting Paragraph */}
            <p className="text-sm sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10 text-center lg:text-left [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
              From our signature crispy Romeo Choco Cones and slow-conched Swiss cream wafers to royal gold coin jars, experience India's premier confectionery manufacturer committed to uncompromised purity and taste.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-5 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => {
                  if (onExploreCatalog) onExploreCatalog();
                }}
                className="w-full sm:w-auto bg-[#C8102E] text-white hover:bg-white hover:text-[#C8102E] transition-all duration-300 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl hover:shadow-glow transform active:scale-95 border border-red-400/40 flex items-center justify-center gap-2.5 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#C8102E] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  if (onRequestQuote) onRequestQuote();
                }}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#111827] border border-white/30 transition-all duration-300 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>ABOUT MR SWEETS →</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase Product Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative bg-black/70 border border-white/20 backdrop-blur-xl p-5 sm:p-8 rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden group text-white">
              {/* Card Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] sm:text-xs font-fredoka font-bold text-amber-300 uppercase tracking-widest">
                    SIGNATURE CRAFT SELECTION
                  </span>
                </div>
                <span className="bg-emerald-950/80 text-emerald-300 text-[9.5px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  100% Pure Veg
                </span>
              </div>

              {/* Showcase Product Image Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/15 p-4 flex items-center justify-center mb-4 group/img shadow-inner">
                <img
                  src="/brawo box.png"
                  alt="Mr. Sweet Brawo Choco Rice Crunch Bar"
                  className="w-full h-full object-contain group-hover/img:scale-108 transition-transform duration-700 filter drop-shadow-2xl"
                />
                
                <div className="absolute top-2 left-2 bg-[#FFC709] text-[#111827] font-fredoka text-[9px] sm:text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  ★ BESTSELLER
                </div>

                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  Crispy Choco Rice Crunch
                </div>
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h3 className="text-lg sm:text-2xl font-outfit font-black text-white mb-1 group-hover:text-amber-300 transition-colors">
                  Brawo Choco Rice Crunch Bar
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-4">
                  Crispy roasted rice crispies enrobed in rich 70% dark cocoa and velvety milk chocolate coating.
                </p>

                {/* 4 Quality Check Icons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/15 text-[10px] sm:text-xs text-white/90 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>ISO 22000 Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Airtight Seal Lock</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Corporate Trust & Credibility Footer Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-16 pt-6 border-t border-white/10 bg-black/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-amber-300 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-extrabold text-white">QUALITY</div>
              <div className="text-[10px] sm:text-xs text-white/80">100% Pure Veg Ingredients</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-amber-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-extrabold text-white">TASTE</div>
              <div className="text-[10px] sm:text-xs text-white/80">Slow-Conched Cocoa</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-amber-300 flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-extrabold text-white">MANUFACTURING</div>
              <div className="text-[10px] sm:text-xs text-white/80">ISO 22000 Automated Plant</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-extrabold text-white">TRUST</div>
              <div className="text-[10px] sm:text-xs text-white/80">50,000+ Retail Counters</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


