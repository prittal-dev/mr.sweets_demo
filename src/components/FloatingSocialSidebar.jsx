import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function FloatingSocialSidebar() {
  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com', bg: 'bg-[#1877F2]', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com', bg: 'bg-[#E4405F]', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com', bg: 'bg-[#FF0000]', icon: Youtube },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', bg: 'bg-[#0A66C2]', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', bg: 'bg-[#1DA1F2]', icon: Twitter },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com',
      bg: 'bg-[#BD081C]',
      customIcon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.03-.95-.06-2.42.05-3.46l.73-3.12s-.18-.37-.18-.91c0-.85.49-1.49 1.11-1.49.52 0 .78.39.78.87 0 .53-.34 1.32-.51 2.05-.14.61.31 1.11.91 1.11 1.1 0 1.94-1.16 1.94-2.83 0-1.48-1.06-2.51-2.58-2.51-1.76 0-2.79 1.32-2.79 2.68 0 .53.2.1.47 1.43a.38.38 0 0 1 .09.36c-.03.14-.11.45-.14.58-.05.19-.16.23-.37.14-1.38-.64-2.25-2.66-2.25-4.28 0-3.48 2.53-6.68 7.3-6.68 3.83 0 6.81 2.73 6.81 6.38 0 3.8-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.26l-.69 2.63c-.25.96-.92 2.16-1.37 2.89A12 12 0 1 0 12 0z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col shadow-2xl rounded-l-lg overflow-hidden border-y border-l border-white/20 select-none">
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`${item.bg} text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200 hover:w-12 hover:pl-1.5 group cursor-pointer shadow-xs`}
          >
            {item.customIcon || <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />}
          </a>
        );
      })}
    </div>
  );
}
