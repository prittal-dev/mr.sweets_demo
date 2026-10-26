import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Factory, TrendingUp, Sparkles, 
  Quote, ShieldCheck, Globe2, Users, ArrowRight, CheckCircle2, MapPin 
} from 'lucide-react';

export default function AboutUs({ onOpenInquire }) {
  const milestones = [
    {
      step: '01',
      period: 'INCEPTION',
      year: '2000',
      title: 'Foundation of Dreams',
      subtitle: 'The Vision of Late Mr. Paramjeet Ghai',
      description: 'Our journey began in the year 2000, when our beloved founder, Late Mr. Paramjeet Ghai, laid the foundation of our confectionery business with a vision to build a successful and respected name in the industry.',
      tagline: 'Built on integrity, passion, and respect for the confectionery craft.',
      badgeText: "Founder's Visionary Legacy",
      icon: Sparkles,
      gradient: 'from-amber-500/10 via-amber-50/40 to-white',
      border: 'border-amber-200/90 hover:border-amber-400',
      pill: 'bg-amber-100 text-amber-900 border-amber-300',
      iconBg: 'bg-amber-500 text-white',
      watermark: '2000'
    },
    {
      step: '02',
      period: 'EXPANSION & TRUST',
      year: '2000 – 2015',
      title: '15 Years of Market Experience',
      subtitle: 'Trading, Insights & Enduring Alliances',
      description: 'We started our journey by trading in confectionery products. Over the next 15 years, we gained valuable industry experience, developed a deep understanding of market trends and customer preferences, and built strong, long-lasting relationships with our customers and business partners.',
      tagline: 'Deep market intelligence, customer empathy, and trusted trade networks.',
      badgeText: 'Long-Lasting Customer Partnerships',
      icon: Users,
      gradient: 'from-rose-500/10 via-orange-50/30 to-white',
      border: 'border-rose-200/90 hover:border-rose-400',
      pill: 'bg-rose-100 text-rose-900 border-rose-300',
      iconBg: 'bg-rose-600 text-white',
      watermark: '15 YRS'
    },
    {
      step: '03',
      period: 'NEW CHAPTER',
      year: '2015 – Present',
      title: 'Brand Genesis: Mr. Sweet',
      subtitle: 'Automated Manufacturing & Quality First',
      description: 'In 2015, we took the next major step in our journey by entering confectionery manufacturing and establishing our own brand, Mr. Sweet. This marked the beginning of a new chapter, allowing us to develop our own products, focus on quality, and build a brand that customers can trust and enjoy.',
      tagline: 'Proprietary product formulations, ISO standards, and consumer-favorite treats.',
      badgeText: 'Homegrown Proprietary Brand',
      icon: Factory,
      gradient: 'from-red-500/10 via-amber-500/5 to-white',
      border: 'border-red-300 hover:border-[#C8102E] ring-1 ring-red-100/80',
      pill: 'bg-[#C8102E] text-white border-[#C8102E] shadow-xs',
      iconBg: 'bg-gradient-to-br from-[#E02438] to-[#991B1B] text-white',
      watermark: '2015'
    }
  ];

  const leaders = [
    {
      name: 'Puneet Ghai',
      role: 'Elder Brother',
      area: 'Factory Operations & Manufacturing',
      icon: Factory,
      bgColor: 'from-amber-500/10 via-orange-500/5 to-white',
      borderColor: 'border-amber-200',
      accentColor: 'text-amber-800',
      pillBg: 'bg-amber-100 text-amber-900 border-amber-300',
      description: 'Oversees factory operations, production activities, and the overall functioning of our manufacturing facilities, ensuring smooth and efficient operations.'
    },
    {
      name: 'Prince Ghai',
      role: 'Younger Brother',
      area: 'Sales & Market Expansion',
      icon: TrendingUp,
      bgColor: 'from-red-500/10 via-rose-500/5 to-white',
      borderColor: 'border-red-200',
      accentColor: 'text-[#C8102E]',
      pillBg: 'bg-red-100 text-red-900 border-red-300',
      description: 'Leads the sales side of the business, focusing on market expansion, customer relationships, business development, and creating new opportunities for the growth of Mr. Sweet.'
    }
  ];

  const missionPillars = [
    {
      title: 'Product Range Expansion',
      desc: 'Continuously developing new confectionery treats, modern wafer varieties, and chocolate confections.',
      icon: Sparkles
    },
    {
      title: 'Consistent Quality',
      desc: 'Strict manufacturing standards, premium ingredients, and 100% pure vegetarian confectionery guarantee.',
      icon: ShieldCheck
    },
    {
      title: 'Lasting Relationships',
      desc: 'Partnering closely with retailers, stockists, and wholesale distributors on a transparent bill-to-bill basis.',
      icon: Users
    },
    {
      title: 'India & Global Reach',
      desc: 'Establishing Mr. Sweet as a respected, household confectionery brand across domestic and export markets.',
      icon: Globe2
    }
  ];

  return (
    <section id="about" className="w-full bg-[#FAF9F6] text-[#111827] py-10 sm:py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 border-t border-red-100 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-20">
        
        {/* ========================================================
            PART 1: SECTION HEADER & OUR JOURNEY
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-xs font-fredoka font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>About Us • Est. 2000</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-outfit font-black text-[#111827] tracking-tight leading-[1.15] mb-4">
            Our Journey –{' '}
            <span className="font-serif italic font-normal text-[#C8102E] block sm:inline">
              A Legacy of Dreams, Experience and Sweetness
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Our journey began in the year 2000, when our beloved founder, <strong className="text-[#111827] font-extrabold">Late Mr. Paramjeet Ghai</strong>, laid the foundation of our confectionery business with a vision to build a successful and respected name in the industry.
          </p>
        </motion.div>

        {/* Interactive Connected Timeline Header Bar (Desktop & Tablet) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto px-6 pt-2 pb-1">
          <div className="absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-[#C8102E] -translate-y-1/2 rounded-full opacity-30 pointer-events-none" />
          <div className="relative flex justify-between items-center">
            {milestones.map((item, idx) => {
              const MilestoneIcon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center gap-1.5 bg-[#FAF9F6] px-4 z-10">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md border-2 transition-transform hover:scale-110 ${
                    idx === 2 ? 'bg-[#C8102E] text-white border-[#C8102E] ring-4 ring-red-100' : 'bg-white text-gray-800 border-amber-300 ring-4 ring-amber-50'
                  }`}>
                    <MilestoneIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-[11px] text-[#C8102E] uppercase tracking-wider">
                    {item.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Milestone Journey Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {milestones.map((item, index) => {
            const MilestoneIcon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-gradient-to-b ${item.gradient} border ${item.border} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5`}
              >
                {/* Top Glowing Color Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  index === 0 ? 'bg-gradient-to-r from-amber-400 to-amber-500' :
                  index === 1 ? 'bg-gradient-to-r from-rose-400 to-amber-500' :
                  'bg-gradient-to-r from-[#C8102E] via-red-500 to-amber-400'
                }`} />

                {/* Faint Giant Background Watermark */}
                <div className="absolute -bottom-3 -right-2 font-outfit font-black text-6xl sm:text-7xl text-gray-900/[0.04] select-none pointer-events-none">
                  {item.watermark}
                </div>

                <div>
                  {/* Top Header Row: Step Badge & Themed Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 text-[10px] sm:text-xs font-mono font-black px-2.5 py-1 rounded-full shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                        <span>STAGE {item.step}</span>
                      </span>
                      <span className={`text-[9.5px] sm:text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md border ${item.pill}`}>
                        {item.year}
                      </span>
                    </div>

                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xs ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <MilestoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Milestone Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-outfit font-black text-[#111827] mb-1 leading-tight group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-gray-500 mb-3.5">
                    {item.subtitle}
                  </p>

                  {/* Official Story Description */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  {/* Key Strategic Tagline Box */}
                  <div className="bg-white/90 backdrop-blur-xs border border-gray-200/80 rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs text-gray-700 leading-snug font-medium mb-4 flex items-start gap-2 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item.tagline}</span>
                  </div>
                </div>

                {/* Bottom Footer Badge */}
                <div className="pt-3.5 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px] sm:text-xs text-gray-800 font-extrabold truncate">
                      {item.badgeText}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 font-bold shrink-0">
                    #{item.step}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================
            PART 2: TWO BROTHERS, ONE VISION
            ======================================================== */}
        <div className="pt-6 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-fredoka font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span>Leadership &amp; Family Heritage</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-outfit font-black text-[#111827] tracking-tight leading-tight mb-3">
              Two Brothers,{' '}
              <span className="font-serif italic font-normal text-[#C8102E]">
                One Vision
              </span>
            </h2>

            <p className="text-xs sm:text-base text-gray-700 leading-relaxed font-medium">
              Today, the legacy of our father is being carried forward by his two sons, <strong className="text-[#111827]">Puneet Ghai</strong> and <strong className="text-[#111827]">Prince Ghai</strong>, who work together with a shared vision to take the business to new heights.
            </p>
          </motion.div>

          {/* Side-by-Side Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, index) => {
              const IconComponent = leader.icon;
              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, x: index === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`bg-gradient-to-br ${leader.bgColor} border ${leader.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center text-[#C8102E]">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                      </div>
                      <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${leader.pillBg}`}>
                        {leader.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-outfit font-black text-[#111827] mb-1">
                      {leader.name}
                    </h3>
                    <p className={`text-xs sm:text-sm font-bold ${leader.accentColor} mb-4`}>
                      {leader.area}
                    </p>

                    <p className="text-xs sm:text-base text-gray-700 leading-relaxed font-normal">
                      {leader.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Executive Leadership at Mr. Sweet</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Synergy Banner: Hand-in-Hand Unity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-6 sm:mt-8 max-w-5xl mx-auto bg-gradient-to-r from-red-50 via-white to-amber-50 border border-red-200/90 rounded-2xl p-4 sm:p-6 text-center shadow-xs"
          >
            <p className="text-xs sm:text-base text-gray-800 font-semibold leading-relaxed">
              &ldquo;Together, we combine operational excellence with a strong market focus, working hand in hand to strengthen our brand and expand our presence in the confectionery industry.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            PART 2.5: PAN-INDIA FOOTPRINT STATS BANNER (COMPACT SLEEK)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#7A0819] via-[#9B0B21] to-[#5C0410] border-2 border-amber-300/40 py-4 sm:py-5 px-4 sm:px-8 text-white relative"
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Compact Header Pill */}
            <div className="text-center mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 bg-black/35 border border-amber-300/40 text-amber-200 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-inner">
                <Globe2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Pan-India Distribution Footprint</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 items-stretch">
              
              {/* Stat 1: 20+ States in India */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl py-3.5 px-5 flex items-center justify-start sm:justify-center gap-4 text-left shadow-md hover:bg-white/15 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-outfit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 tracking-tight leading-none">
                    20+
                  </div>
                  <div className="text-sm sm:text-base font-outfit font-extrabold text-white mt-1">
                    States in India
                  </div>
                </div>
              </div>

              {/* Stat 2: 500+ Happy Super Stockists / Distributors */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl py-3.5 px-5 flex items-center justify-start sm:justify-center gap-4 text-left shadow-md hover:bg-white/15 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-400/25 border border-red-300/40 text-red-200 flex items-center justify-center shrink-0 shadow-inner">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-outfit font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 tracking-tight leading-none">
                    500+
                  </div>
                  <div className="text-sm sm:text-base font-outfit font-extrabold text-white mt-1">
                    Happy Super Stockists / Distributors
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ========================================================
            PART 3: OUR VISION FOR THE FUTURE & FOUNDER TRIBUTE
            ======================================================== */}
        <div className="pt-6 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#C8102E] px-4 py-1.5 rounded-full text-xs font-fredoka font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Looking Ahead</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-outfit font-black text-[#111827] tracking-tight leading-tight mb-3">
              Our Vision for the Future
            </h2>

            <p className="text-xs sm:text-base text-gray-700 leading-relaxed font-medium">
              For us, <strong className="text-[#111827]">Mr. Sweet is more than just a brand</strong>. It represents our father’s dream, our family’s dedication, and our commitment to building something meaningful for generations to come.
            </p>
          </motion.div>

          {/* 4 Mission Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 max-w-6xl mx-auto">
            {missionPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C8102E] flex items-center justify-center mb-4">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-outfit font-black text-[#111827] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-xs text-gray-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission Statement Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-white border border-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm mb-10 text-center"
          >
            <p className="text-sm sm:text-lg text-gray-800 font-medium leading-relaxed">
              Our mission is to <strong className="text-[#111827]">expand our product range</strong>, <strong className="text-[#111827]">maintain consistent quality</strong>, <strong className="text-[#111827]">build lasting relationships with our customers</strong>, and establish <strong className="text-[#C8102E]">Mr. Sweet</strong> as a trusted name in the confectionery industry across India and international markets.
            </p>
          </motion.div>

          {/* Grand Memorial & Founder Dedication Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#8A081C] via-[#B50E29] to-[#6B0515] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-amber-300/40 relative overflow-hidden"
          >
            {/* Ambient Confectionery Sparkle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/60 flex items-center justify-center mb-4 sm:mb-6 text-amber-300 shadow-inner">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-amber-300 text-amber-300 animate-pulse" />
              </div>

              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-amber-200 mb-2">
                In Revered Memory of Our Founder
              </div>

              <h3 className="text-xl sm:text-3xl font-outfit font-black text-white mb-4">
                Late Mr. Paramjeet Ghai
              </h3>

              <p className="text-xs sm:text-base text-red-100 max-w-2xl leading-relaxed font-normal mb-6 sm:mb-8">
                Above all, our greatest motivation is to fulfil the dream of our beloved father and founder, Late Mr. Paramjeet Ghai, by building a large, successful, and respected confectionery company.
              </p>

              {/* The Golden Motto Quote Box */}
              <div className="bg-black/30 backdrop-blur-md border border-amber-300/40 rounded-2xl p-5 sm:p-8 max-w-2xl w-full text-center relative shadow-xl">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300/30 absolute top-3 left-4 pointer-events-none" />
                <p className="text-base sm:text-2xl font-serif italic font-medium text-amber-100 leading-snug relative z-10">
                  &ldquo;His dream is our inspiration. His legacy is our responsibility. And building Mr. Sweet into a leading confectionery brand is our shared vision.&rdquo;
                </p>
                <div className="mt-3 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-amber-300/80">
                  — Puneet Ghai &amp; Prince Ghai
                </div>
              </div>

              {/* Connect / Inquire CTA */}
              {onOpenInquire && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={onOpenInquire}
                    className="bg-white hover:bg-amber-50 active:scale-95 text-[#C8102E] text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Partner with Mr. Sweet</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/919350060606?text=Hello%20Prince%20Ghai,%20I%20am%20interested%20in%20learning%20more%20about%20Mr.%20Sweet%20wholesale%20distribution."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
