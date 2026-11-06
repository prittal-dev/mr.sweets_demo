import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Factory,
  TrendingUp,
  Heart,
  Quote,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Compass,
  Target
} from 'lucide-react';

export default function AboutUs({ onOpenInquire }) {
  const timelineStages = [
    {
      stage: 'STAGE 01 • YEAR 2000',
      title: 'Foundation of Dreams',
      icon: Award,
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
      stageBadgeColor: 'bg-[#FAF4EB] text-[#8B001D] border-[#F6D5DA]',
      description:
        'Our journey began in the year 2000, when our beloved founder, Late Mr. Paramjeet Ghai, laid the foundation of our confectionery business with a vision to build a successful and respected name in the industry.'
    },
    {
      stage: 'STAGE 02 • 2005 - 2015',
      title: '15 Years of Market Expertise',
      icon: Users,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
      stageBadgeColor: 'bg-[#FAF4EB] text-[#8B001D] border-[#F6D5DA]',
      description:
        'We started our journey by trading in confectionery products. Over the next 15 years, we gained valuable industry experience, developed a deep understanding of market trends and customer preferences, and built strong, long-lasting relationships with our customers and business partners.'
    },
    {
      stage: 'STAGE 03 • 2015 - PRESENT',
      title: 'Brand Genesis: Mr. Sweet',
      icon: Factory,
      iconColor: 'text-[#8B001D] bg-red-50 border-red-200',
      stageBadgeColor: 'bg-[#8B001D] text-white border-[#700516]',
      description:
        'In 2015, we took the next major step in our journey by entering confectionery manufacturing and establishing our own brand, Mr. Sweet. This marked the beginning of a new chapter, allowing us to develop our own products, focus on quality, and build a brand that customers can trust and enjoy.'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Puneet Ghai',
      role: 'Elder Brother',
      area: 'Factory Operations & Production',
      icon: Factory,
      iconBg: 'bg-amber-50 text-amber-800 border-amber-200',
      description:
        'Puneet Ghai, the elder brother, oversees factory operations, production activities, and the overall functioning of our manufacturing facilities, ensuring smooth and efficient operations.'
    },
    {
      name: 'Prince Ghai',
      role: 'Younger Brother',
      area: 'Sales & Business Development',
      icon: TrendingUp,
      iconBg: 'bg-red-50 text-[#8B001D] border-red-200',
      description:
        'Prince Ghai, the younger brother, leads the sales side of the business, focusing on market expansion, customer relationships, business development, and creating new opportunities for the growth of Mr. Sweet.'
    }
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#FAF6EE] text-[#18110F] py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EFE8DA]"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================================================
            1. INTRO
            ========================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Small Yellow Pill */}
          <div className="inline-block bg-[#FFC72C] text-[#18110F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            ABOUT US | EST. 2000
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#18110F] tracking-tight leading-[1.08] mb-4 sm:mb-5">
            Our Journey –{' '}
            <span className="font-serif-italic font-bold text-[#8B001D] block sm:inline">
              A Legacy of Dreams, Experience and Sweetness
            </span>
          </h1>

          {/* Supporting History Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-normal max-w-3xl mx-auto">
            Our journey began in the year 2000, when our beloved founder,{' '}
            <strong className="text-[#18110F] font-bold">Late Mr. Paramjeet Ghai</strong>, laid the foundation of our confectionery business with a vision to build a successful and respected name in the industry.
          </p>
        </div>

        {/* =========================================================
            2. TIMELINE: 3 CARDS
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {timelineStages.map((stage) => {
            const StageIcon = stage.icon;
            return (
              <div
                key={stage.stage}
                className="bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Stage Pill & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border shadow-2xs ${stage.stageBadgeColor}`}
                    >
                      {stage.stage}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs ${stage.iconColor}`}
                    >
                      <StageIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#18110F] tracking-tight leading-snug mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. TWO BROTHERS, ONE VISION
            ========================================================= */}
        <div className="mb-16 sm:mb-20 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18110F] tracking-tight mb-3">
              Two Brothers,{' '}
              <span className="font-serif-italic font-bold text-[#8B001D]">
                One Vision
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              Today, the legacy of our father is being carried forward by his two sons, Puneet Ghai and Prince Ghai, who work together with a shared vision to take the business to new heights.
            </p>
          </div>

          {/* Two Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipTeam.map((leader) => {
              const LeaderIcon = leader.icon;
              return (
                <div
                  key={leader.name}
                  className="bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Role Pill */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs ${leader.iconBg}`}
                      >
                        <LeaderIcon className="w-5 h-5" />
                      </div>

                      <span className="bg-[#FAF4EB] text-[#8B001D] border border-[#F6D5DA] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {leader.role}
                      </span>
                    </div>

                    {/* Name & Focus Area */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18110F] tracking-tight mb-1">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-bold text-[#8B001D] uppercase tracking-wider mb-3">
                      {leader.area}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {leader.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shared Motto Statement */}
          <div className="mt-6 bg-white border border-amber-900/10 rounded-2xl p-4 sm:p-5 text-center shadow-2xs">
            <p className="text-xs sm:text-sm text-[#18110F] font-medium leading-relaxed">
              Together, we combine operational excellence with a strong market focus, working hand in hand to strengthen our brand and expand our presence in the confectionery industry.
            </p>
          </div>
        </div>

        {/* =========================================================
            4. OUR VISION FOR THE FUTURE
            ========================================================= */}
        <div className="mb-16 sm:mb-20 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18110F] tracking-tight mb-3">
              Our Vision for{' '}
              <span className="font-serif-italic font-bold text-[#8B001D]">
                the Future
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#18110F] mb-2">
                More Than Just a Brand
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                For us, Mr. Sweet is more than just a brand. It represents our father’s dream, our family’s dedication, and our commitment to building something meaningful for generations to come.
              </p>
            </div>

            <div className="bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B001D] border border-red-200 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#18110F] mb-2">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Our mission is to expand our product range, maintain consistent quality, build lasting relationships with our customers, and establish Mr. Sweet as a trusted name in the confectionery industry across India and international markets.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            5. FOUNDER MEMORY CTA (RED SECTION)
            ========================================================= */}
        <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-4xl bg-[#8B001D] text-white p-7 sm:p-12 md:p-14 shadow-xl text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Heart Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-amber-300">
              <Heart className="w-6 h-6 fill-amber-300 text-amber-300" />
            </div>

            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-amber-300 mb-2">
              IN REVERED MEMORY OF OUR FOUNDER
            </span>

            {/* Founder Name */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Late Mr. Paramjeet Ghai
            </h2>

            {/* Founder Message */}
            <p className="text-xs sm:text-base text-white/90 leading-relaxed font-normal mb-6 sm:mb-8 max-w-2xl">
              Above all, our greatest motivation is to fulfil the dream of our beloved father and founder, Late Mr. Paramjeet Ghai, by building a large, successful, and respected confectionery company.
            </p>

            {/* Motto Quote Box */}
            <div className="bg-black/25 border border-white/15 rounded-2xl p-5 sm:p-7 max-w-2xl w-full text-center relative shadow-sm mb-8">
              <Quote className="w-7 h-7 text-amber-300/20 absolute top-3 left-4 pointer-events-none" />
              <p className="text-base sm:text-xl font-serif-italic font-bold text-amber-100 leading-snug relative z-10">
                &ldquo;His dream is our inspiration. His legacy is our responsibility. And building Mr. Sweet into a leading confectionery brand is our shared vision.&rdquo;
              </p>
              <div className="mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300/80">
                — Puneet Ghai &amp; Prince Ghai
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Partner With Mr. Sweet */}
              <button
                onClick={() => {
                  if (onOpenInquire) onOpenInquire();
                }}
                className="w-full sm:w-auto bg-white hover:bg-amber-50 active:scale-95 text-[#8B001D] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Partner With Mr. Sweet</span>
                <ArrowRight className="w-4 h-4 text-[#8B001D]" />
              </button>

              {/* Connect on WhatsApp */}
              <a
                href="https://wa.me/919350060606?text=Hello%20Prince%20Ghai,%20I%20am%20interested%20in%20partnering%20with%20Mr.%20Sweet."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
