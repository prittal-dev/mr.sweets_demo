import React, { useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, BookOpen, Share2, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function BlogModal({ article, onClose, onOpenInquire }) {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const fullArticles = {
    1: {
      sections: [
        {
          heading: 'The Engineering Behind the Crunch',
          body: 'At Mr. Sweet, every Romeo Choco Cone begins with a golden-baked multi-layer waffle wafer. Baking the wafer to exact moisture tolerances ensures the cone remains structurally sound while holding rich, slow-conched cocoa cream.'
        },
        {
          heading: 'Protective Metallic Foil Sealing',
          body: 'To ensure that signature crunchiness reaches every retail shelf across India, we utilize multi-barrier metallic foil wrapping that completely seals out atmospheric humidity and air exposure.'
        },
        {
          heading: 'Master Confectioner Standards',
          body: 'Our crispy cones undergo 100% veg quality checks. Zero animal gelatin or artificial preservatives are added, guaranteeing authentic flavor from the first bite to the crunchy tip.'
        }
      ],
      highlights: ['100% Pure Cocoa Filling', 'Foil Moisture-Sealed', 'ISO 22000 Quality Approved']
    },
    2: {
      sections: [
        {
          heading: 'Embossed Gold Foil & Royal Presentation',
          body: 'Gold coins have symbolized wealth, prosperity, and sweet blessings in Indian culture for generations. Mr. Sweet 999.9 Embossed Gold Coin Jars combine traditional festive symbolism with smooth milk chocolate.'
        },
        {
          heading: 'Reusable Festive Keepsake Tubs',
          body: 'Packaged in clear crystal-style tubs with food-grade airtight lids, these gold coin jars serve as elegant centerpiece items for Diwali hampers, corporate trade gifts, and birthday return gift packs.'
        },
        {
          heading: 'Bulk Commercial Dispatch',
          body: 'Available in master cartons of 10 to 50 tubs, ready for express dispatch across 15,000+ pincodes in India and export freight.'
        }
      ],
      highlights: ['999.9 Detailed Foil Embossing', 'Reusable Crystal Jars', 'Diwali & Event Highlight']
    },
    3: {
      sections: [
        {
          heading: 'The Move Away from Animal Gelatin',
          body: 'Standard gummy candies in the market frequently utilize animal gelatin. Mr. Sweet is proud to manufacture 100% pure vegetarian gummies using natural fruit pectin derived from fresh apples and citrus peels.'
        },
        {
          heading: 'Safe for School Canteens & Kids',
          body: 'Our soft Hunny Bunny fruit jelly pops and ice cream sundae jellies contain zero animal fats, artificial lard, or synthetic fillers, making them safe for school party celebrations and kids of all ages.'
        },
        {
          heading: 'Natural Fruit Flavors',
          body: 'Infused with real mango, strawberry, and citrus fruit concentrates to deliver authentic taste and vibrant natural colors.'
        }
      ],
      highlights: ['Gelatin-Free Formulation', 'Natural Fruit Pectin', 'FSSAI Approved Pure Veg']
    },
    4: {
      sections: [
        {
          heading: 'Capitalizing on Counter Impulse Sales',
          body: 'Impulse purchases account for over 40% of retail confectionery revenue. Placing clear, attractive dispenser jars right beside billing counters significantly boosts daily store turnover.'
        },
        {
          heading: 'Eye-Level Merchandising Design',
          body: 'Our display tubs for Brawo Choco Rice and Krispy Toy surprise boxes feature high-transparency food-grade walls and easy-open lids that encourage quick customer pickup.'
        },
        {
          heading: 'Distributor Profit Margins',
          body: 'High-margin trade terms for retail store owners, school canteens, and bulk distributors with guaranteed shelf-life protection.'
        }
      ],
      highlights: ['40% Higher Impulse Pickups', 'High-Margin Trade Terms', 'Airtight Counter Tubs']
    },
    5: {
      sections: [
        {
          heading: '18-Hour Slow Kettle Conching',
          body: 'Conching is the essential process behind silky smooth chocolate. In our confectionery atelier, premium Dutch cocoa solids and organic caramel are slow-churned in copper kettles for up to 18 hours.'
        },
        {
          heading: 'Temperature-Controlled Alchemy',
          body: 'Maintaining a constant temperature of 48°C eliminates raw cocoa bitterness while developing deep, buttery caramel notes that enrobe our signature NutyMax wafer bars.'
        },
        {
          heading: 'Zero Preservative Promise',
          body: 'Crafted without synthetic waxes or artificial fats, ensuring a rich melt-in-the-mouth experience in every bite.'
        }
      ],
      highlights: ['18-Hour Copper Kettle Conching', 'Controlled 48°C Refining', 'Rich Melt Texture']
    }
  };

  const details = fullArticles[article.id] || fullArticles[1];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div
        className="bg-[#FDFBF7] border border-cream-300 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col min-w-0 text-[#231815]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 border border-cream-300 text-[#231815] hover:bg-[#C8102E] hover:text-white transition-all shadow-md"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="overflow-y-auto p-5 sm:p-8">
          {/* Header Tag */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#C8102E] font-extrabold uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>MR. SWEET JOURNAL • ARTICLE #{article.id}</span>
          </div>

          {/* Title */}
          <h2 id="article-modal-title" className="text-xl sm:text-3xl font-extrabold text-[#231815] mb-3 leading-snug">
            {article.title}
          </h2>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#8B7355] font-semibold mb-6 pb-4 border-b border-amber-900/10">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <span className="bg-[#110C0A] text-[#D4AF37] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
              {article.tag}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#F7F5F0] border border-amber-900/15 mb-6 flex items-center justify-center p-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-contain max-h-[280px]"
            />
          </div>

          {/* Excerpt Lead Paragraph */}
          <p className="text-xs sm:text-base text-[#231815] font-semibold leading-relaxed mb-6 bg-white p-4 rounded-xl border border-amber-900/15 italic">
            "{article.excerpt}"
          </p>

          {/* Article Sections */}
          <div className="space-y-6 text-xs sm:text-sm text-[#4F3A34] leading-relaxed mb-8">
            {details.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm sm:text-lg font-extrabold text-[#231815]">
                  {sec.heading}
                </h3>
                <p className="font-normal text-gray-700 leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Box */}
          <div className="bg-[#110C0A] text-[#EFE8DA] p-4 sm:p-6 rounded-2xl mb-6 border border-[#362823]">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>KEY HIGHLIGHTS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {details.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white bg-[#18110F] p-2.5 rounded-xl border border-[#362823]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="pt-4 border-t border-amber-900/15 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                if (onOpenInquire) onOpenInquire();
              }}
              className="w-full sm:w-auto bg-[#C8102E] text-white hover:bg-[#9B0B21] transition-all px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <Mail className="w-4 h-4 text-amber-200" />
              <span>Inquire Commercial Supply</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-white border border-amber-900/15 text-[#231815] hover:bg-amber-100 transition-all px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
