import React from 'react';
import { MapPin, Clock, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function Boutiques({ onBookTasting }) {
  const stores = [
    {
      city: 'MUMBAI FLAGSHIP',
      address: 'Waterfield Road, Bandra West, Mumbai 400050',
      hours: 'Mon – Sun: 10:00 AM – 10:00 PM',
      phone: '+91 22 8899 4400',
      tag: 'Tasting Salon & Atelier'
    },
    {
      city: 'NEW DELHI ATELIER',
      address: 'Santushti Shopping Complex, Chanakyapuri, New Delhi 110021',
      hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
      phone: '+91 11 4455 7711',
      tag: 'Royal Gifting Lounge'
    },
    {
      city: 'BENGALURU BOUTIQUE',
      address: 'UB City, Vittal Mallya Road, Bengaluru 560001',
      hours: 'Mon – Sun: 11:00 AM – 10:00 PM',
      phone: '+91 80 6633 9922',
      tag: 'Gourmet Tasting Room'
    },
    {
      city: 'DUBAI MALL OF EMIRATES',
      address: 'Fashion Avenue Level 1, Dubai UAE',
      hours: 'Sun – Thu: 10:00 AM – 11:00 PM',
      phone: '+971 4 399 2288',
      tag: 'International Flagship'
    }
  ];

  return (
    <section className="w-full bg-[#9B0B21] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#7A0819]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>VISIT OUR CONFECTIONERY BOUTIQUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Flagship Tasting{' '}
              <span className="font-serif-italic text-amber-300 font-normal">
                Salons.
              </span>
            </h2>
          </div>
          <button
            onClick={onBookTasting}
            className="bg-[#C8102E] text-white hover:bg-white hover:text-[#C8102E] transition-all px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto shadow-md border border-red-400/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Tasting Reservation</span>
          </button>
        </div>

        {/* Boutiques Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store, idx) => (
            <div
              key={idx}
              className="bg-[#7A0819] border border-red-500/30 p-6 rounded-3xl hover:border-amber-300/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="bg-[#9B0B21] text-amber-300 text-[10px] font-extrabold px-3 py-1 rounded-full border border-amber-300/40 inline-block mb-3">
                  {store.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {store.city}
                </h3>

                <p className="text-xs text-red-100 mb-4 font-normal leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </p>

                <p className="text-[11px] text-red-200 mb-2 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-300" />
                  <span>{store.hours}</span>
                </p>

                <p className="text-[11px] text-red-200 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-red-300" />
                  <span>{store.phone}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
