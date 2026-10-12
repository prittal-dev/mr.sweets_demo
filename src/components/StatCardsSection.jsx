import React from 'react';
import { Award, Users, Package, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatCardsSection() {
  const cards = [
    {
      id: 1,
      icon: Award,
      badgeBg: 'bg-red-50 border-red-100 text-[#C8102E]',
      value: '30+ Years',
      valueColor: 'text-[#C8102E]',
      title: 'Craft & FMCG Heritage',
      description: 'Decades of sweet confectionery excellence'
    },
    {
      id: 2,
      icon: Users,
      badgeBg: 'bg-red-50 border-red-100 text-[#C8102E]',
      value: '50,000+',
      valueColor: 'text-[#C8102E]',
      title: 'Retail Outlets & Stores',
      description: 'Trusted network across pan-India counters'
    },
    {
      id: 3,
      icon: Package,
      badgeBg: 'bg-red-50 border-red-100 text-[#C8102E]',
      value: '15,000+',
      valueColor: 'text-[#C8102E]',
      title: 'Pincodes & Global Export',
      description: 'Moisture-lock logistics & export reach'
    },
    {
      id: 4,
      icon: ShieldCheck,
      badgeBg: 'bg-emerald-50 border-emerald-100 text-[#00A651]',
      value: '100% Pure Veg',
      valueColor: 'text-[#00A651]',
      title: 'ISO 22000 & FSSAI Certified',
      description: 'Zero animal gelatin, pure cocoa & real fruit'
    }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-red-100/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white border border-red-200/70 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-red-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${card.badgeBg}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Highlight Stat Value */}
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${card.valueColor}`}>
                    {card.value}
                  </h3>

                  {/* Title */}
                  <h4 className="text-xs sm:text-sm font-bold text-[#111827] mt-2 group-hover:text-[#C8102E] transition-colors">
                    {card.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-1.5 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
