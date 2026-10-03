import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Clock } from 'lucide-react';
import BlogModal from './BlogModal';

export default function BlogSection({ onOpenInquire }) {
  const [activeArticle, setActiveArticle] = useState(null);

  const blogs = [
    {
      id: 1,
      category: 'CRAFT & PROCESS',
      date: 'Oct 2, 2026',
      readTime: '4 min read',
      title: 'The Art of Crispy Waffle Cones: Preserving Unmatched Crunchiness',
      excerpt: 'Discover how multi-layered baked wafer cones are foil-wrapped to seal in maximum crunchiness and rich cocoa cream flavor.',
      image: '/romeo choco cone.png',
      tag: 'Crispy Wafers'
    },
    {
      id: 2,
      category: 'FESTIVE & GIFTS',
      date: 'Sep 24, 2026',
      readTime: '5 min read',
      title: 'Festive Gifting Trends: Why 999.9 Gold Coin Jars Are #1 Choice',
      excerpt: 'Explore the royal tradition of gold chocolate gifting for Diwali, weddings, birthday party return gifts, and corporate hampers.',
      image: '/gold coin.png',
      tag: 'Festive Hampers'
    },
    {
      id: 3,
      category: 'PURITY & INGREDIENTS',
      date: 'Sep 15, 2026',
      readTime: '3 min read',
      title: '100% Pure Veg Confectionery: Gelatin-Free Sweet Formulations',
      excerpt: 'Learn how zero-animal gelatin and authentic fruit pectin create delicious, worry-free gummies and soft jelly pops for kids.',
      image: '/swiss choclate.png',
      tag: 'Pure Veg'
    },
    {
      id: 4,
      category: 'RETAIL & DISTRIBUTION',
      date: 'Aug 28, 2026',
      readTime: '6 min read',
      title: 'Maximizing Counter Sales: Retail Display Jar Merchandising',
      excerpt: 'How counter display tubs of Brawo Choco Rice and Krispy Toy surprise boxes boost impulse purchases for retail merchants.',
      image: '/brawo box.png',
      tag: 'Retail Trade'
    },
    {
      id: 5,
      category: 'FLAVOR INNOVATION',
      date: 'Aug 10, 2026',
      readTime: '4 min read',
      title: 'Behind the Recipe: Slow-Churned Cocoa & Caramel Conching',
      excerpt: 'Take an insider peek at our atelier conching kettles where Dutch cocoa and golden caramel blend for creamy NutyMax bars.',
      image: '/nuty max box .png',
      tag: 'Factory Secrets'
    }
  ];

  return (
    <section id="blogs" className="w-full bg-[#FDFBF7] py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-amber-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#C8102E] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-1">
              <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>MR. SWEET JOURNAL & BLOGS</span>
            </div>
            <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-[#231815] tracking-tight">
              Latest Articles & Insights
            </h2>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white border border-amber-900/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs text-[10px] sm:text-xs font-bold text-[#8B7355] self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Stories, Recipes & Industry Trends</span>
          </div>
        </div>

        {/* 5 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {blogs.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-amber-900/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveArticle(article)}
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F5F0] border-b border-amber-900/10">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#110C0A] text-[#D4AF37] text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-[#D4AF37]/30 tracking-wider">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-4 sm:p-5">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-[#8B7355] font-bold uppercase tracking-wider mb-2">
                    <span className="truncate mr-1">{article.category}</span>
                    <div className="flex items-center gap-1 text-gray-500 font-medium shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-base font-extrabold text-[#231815] mb-2 leading-snug group-hover:text-[#C8102E] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[10.5px] sm:text-xs text-[#4F3A34] font-normal leading-relaxed mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Article CTA */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between text-[11px] sm:text-xs font-extrabold text-[#C8102E] group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <BlogModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onOpenInquire={onOpenInquire}
      />
    </section>
  );
}
