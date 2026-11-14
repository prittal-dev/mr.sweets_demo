import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

export default function EventsSection({ onOpenInquire }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activePhotoFilter, setActivePhotoFilter] = useState('all');

  const stats = [
    {
      value: '100%',
      color: 'text-amber-400',
      label: 'Non-Toxic BIS & Pure Veg',
      sub: 'FSSAI Licensed Confections'
    },
    {
      value: '200+',
      color: 'text-cyan-400',
      label: 'Cities Network',
      sub: '50,000+ Retail Outlets'
    },
    {
      value: 'Pan-India',
      color: 'text-rose-400',
      label: 'Exhibition Visits',
      sub: 'Live Sampling & Stalls'
    },
    {
      value: 'Direct',
      color: 'text-emerald-400',
      label: 'Factory Support',
      sub: 'Wholesale & B2B Rates'
    }
  ];

  // All 7 Authentic Event Photos from public/event/
  const eventGallery = [
    {
      id: 7,
      src: '/event/7.webp',
      category: 'stall',
      title: 'Grand Exhibition Pavilion',
      caption: 'Full stall view with confectionery display wall, B2B deal counters & visiting distributors.',
      location: 'Pragati Maidan, New Delhi',
      tag: 'Main Pavilion',
      featured: true
    },
    {
      id: 2,
      src: '/event/2.webp',
      category: 'meetings',
      title: 'Wholesale Product Sampling & Catalog Walkthrough',
      caption: 'Trade buyers tasting Krispy Cones, Fan Pop & reviewing master carton profit margins.',
      location: 'B2B Meeting Table',
      tag: 'B2B Meeting'
    },
    {
      id: 1,
      src: '/event/1.webp',
      category: 'stall',
      title: 'Interactive Live Counter & Product Wall',
      caption: 'Trade visitors exploring Magic Pops, Crazy Eye Maxx & Mr. Joe confectionery shelves.',
      location: 'Confectionery Showcase Wall',
      tag: 'Product Wall'
    },
    {
      id: 4,
      src: '/event/4.webp',
      category: 'meetings',
      title: 'Distributor Contract Signing',
      caption: 'Founder Mr. Prince Ghai signing exclusive regional wholesale distribution agreements.',
      location: 'VIP Trade Desk',
      tag: 'Deal Signing'
    },
    {
      id: 5,
      src: '/event/5.webp',
      category: 'team',
      title: 'Executive Trade Delegation at AAHAR',
      caption: 'Official Mr. Sweet leadership delegation with international trade visitors and stockists.',
      location: 'AAHAR International Expo',
      tag: 'Leadership'
    },
    {
      id: 3,
      src: '/event/3.webp',
      category: 'meetings',
      title: 'Dairy Cone & Daily Rolls Pavilion Meet',
      caption: 'Regional distributors discussing annual bulk container dispatches and festive hampers.',
      location: 'Stall Meeting Corner',
      tag: 'Wholesale Meet'
    },
    {
      id: 6,
      src: '/event/6.webp',
      category: 'team',
      title: '1-on-1 Dealer Strategy Consultations',
      caption: 'Private consultation table for state super-stockists and retail chain suppliers.',
      location: 'Executive Consultation',
      tag: 'Dealer Strategy'
    }
  ];

  const filteredPhotos =
    activePhotoFilter === 'all'
      ? eventGallery
      : eventGallery.filter((p) => p.category === activePhotoFilter);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev + 1) % eventGallery.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? eventGallery.length - 1 : prev - 1
    );
  };

  // Lock background body scroll and stop Lenis smooth scrolling while lightbox is active
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      lockBodyScroll();
      if (window.lenis) {
        window.lenis.stop();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        unlockBodyScroll();
        if (window.lenis) {
          window.lenis.start();
        }
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedPhotoIndex]);

  return (
    <section id="events" className="w-full select-none">
      {/* =========================================================================
          1. DARK NAVY HERO BANNER (Pixel-matched to reference image)
          ========================================================================= */}
      <div className="w-full bg-[#0B1320] text-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,199,44,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#FFC72C] text-[#18110F] px-4 py-1.5 rounded-full text-xs font-outfit font-black uppercase tracking-wider mb-4 sm:mb-5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#18110F] fill-current" />
            <span>MR. SWEET EVENT SHOWCASE</span>
          </div>

          {/* Huge White Bold Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-outfit font-black text-white tracking-tight leading-[1.08] mb-4 sm:mb-5">
            Exhibitions &amp; Live Event Showcase
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
            Take an exclusive look at Mr. Sweet live exhibition footage, official
            invitation pass, and interactive stall showcases across national
            kids trade expos!
          </p>

          {/* 4 Stat / Feature Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto text-left">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#121B2A]/90 backdrop-blur-md border border-slate-700/60 rounded-xl sm:rounded-2xl p-4 sm:p-5.5 transition-all duration-300 hover:border-slate-500 hover:bg-[#162234] shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-outfit font-black ${stat.color} leading-none mb-1.5 sm:mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {stat.label}
                </div>
                <div className="text-[10.5px] sm:text-xs text-slate-400 font-normal mt-0.5 sm:mt-1 leading-snug">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. CRISP YELLOW ACCENT SEPARATOR STRIP
          ========================================================================= */}
      <div className="w-full h-2 sm:h-2.5 bg-[#FFC72C] shadow-xs" />

      {/* =========================================================================
          3. PURE PHOTO GALLERY SECTION (All 7 authentic event images)
          ========================================================================= */}
      <div className="w-full bg-[#FAF6EE] text-[#18110F] py-10 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 border-b border-[#EFE8DA]">
        <div className="max-w-6xl mx-auto">
          {/* Header Row: Title & Category Filters */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-outfit font-black uppercase tracking-wider text-[#8B001D] mb-1.5">
                <Camera className="w-4 h-4 text-[#8B001D]" />
                <span>OFFICIAL TRADE EXPO GALLERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-outfit font-black text-[#18110F] tracking-tight">
                Live From Our Trade Expo Stalls
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Real photographs from Mr. Sweet pavilions across Pragati Maidan and national B2B food expos — sampling sessions, deal signings, and confectionery displays.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 shrink-0">
              {[
                { id: 'all', label: 'All Photos (7)' },
                { id: 'stall', label: 'Pavilion Stalls' },
                { id: 'meetings', label: 'B2B Meetings' },
                { id: 'team', label: 'Leadership' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActivePhotoFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-outfit font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activePhotoFilter === tab.id
                      ? 'bg-[#8B001D] text-white shadow-xs'
                      : 'bg-white hover:bg-amber-50 text-gray-700 border border-amber-900/15'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* When 'All' filter is selected: 1 Featured Full-Width Panorama + 6 Symmetrical Cards */}
          {activePhotoFilter === 'all' ? (
            <div>
              {/* Featured Full-Width Panorama Card */}
              <div
                onClick={() => openLightbox(0)}
                className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer mb-6 sm:mb-8 flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1] min-h-[220px] max-h-[440px] overflow-hidden bg-slate-900">
                  <img
                    src={eventGallery[0].src}
                    alt={eventGallery[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content Below Image */}
                <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-outfit font-black text-[#18110F] leading-tight group-hover:text-[#8B001D] transition-colors">
                      {eventGallery[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl leading-relaxed">
                      {eventGallery[0].caption}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-outfit font-bold text-[#8B001D] group-hover:translate-x-0.5 transition-transform">
                    <span>View Photo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Perfectly Balanced 3-Column x 2-Row Grid for the remaining 6 Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {eventGallery.slice(1).map((photo, sliceIdx) => {
                  const originalIndex = sliceIdx + 1;
                  return (
                    <div
                      key={photo.id}
                      onClick={() => openLightbox(originalIndex)}
                      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                    >
                      {/* Image Container with Consistent Aspect Ratio */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </div>

                      {/* Card Content with Uniform Height */}
                      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between bg-white">
                        <div>
                          <h3 className="font-outfit font-black text-sm sm:text-base text-[#18110F] leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-[#8B001D] transition-colors">
                            {photo.title}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed min-h-[2rem]">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Uniform Filtered Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filteredPhotos.map((photo) => {
                const originalIndex = eventGallery.findIndex((p) => p.id === photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(originalIndex >= 0 ? originalIndex : 0)}
                    className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </div>

                    <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="font-outfit font-black text-sm sm:text-base text-[#18110F] leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-[#8B001D] transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed min-h-[2rem]">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Trade Inquiry Action Card */}
          <div className="mt-12 sm:mt-16 bg-white border border-[#EADBCE] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-outfit font-black uppercase tracking-wider text-[#8B001D] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                B2B TRADE &amp; SUPER-STOCKIST INQUIRIES
              </span>
              <h3 className="text-xl sm:text-2xl font-outfit font-black text-[#18110F] mt-2 tracking-tight">
                Want to partner with Mr. Sweet in your region?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                Get master carton wholesale rates, product samples, and direct manufacturer support for your distribution territory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenInquire}
                className="w-full sm:w-auto bg-[#8B001D] hover:bg-[#720617] active:scale-95 text-white font-outfit font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-amber-300" />
                <span>Contact Trade Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919350060606"
                className="w-full sm:w-auto bg-[#FAF4EB] hover:bg-amber-100/70 text-[#18110F] border border-amber-900/15 font-outfit font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#8B001D]" />
                <span>+91 93500 60606</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. FULLSCREEN LIGHTBOX MODAL (Click to expand any real photo)
          ========================================================================= */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overscroll-contain touch-none select-none"
          onClick={closeLightbox}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10 text-white z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-outfit font-semibold text-slate-300">
                  Photo {selectedPhotoIndex + 1} of {eventGallery.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Photo View */}
            <div className="relative flex-grow flex items-center justify-center bg-black/50 overflow-hidden min-h-[300px]">
              <img
                src={eventGallery[selectedPhotoIndex].src}
                alt={eventGallery[selectedPhotoIndex].title}
                className="max-h-[68vh] max-w-full object-contain mx-auto"
              />

              {/* Prev & Next Navigation Buttons */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-5 py-3.5 bg-slate-900 border-t border-white/10 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-outfit font-black text-white">
                    {eventGallery[selectedPhotoIndex].title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {eventGallery[selectedPhotoIndex].caption}
                  </p>
                </div>

                <div className="text-xs font-bold text-amber-400 shrink-0">
                  {selectedPhotoIndex + 1} / {eventGallery.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
