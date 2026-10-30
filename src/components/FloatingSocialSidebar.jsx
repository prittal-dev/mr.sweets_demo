import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function FloatingSocialSidebar() {
  const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      bg: 'bg-[#1877F2]',
      icon: Facebook
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com',
      bg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
      icon: Instagram
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1.5 items-end select-none pointer-events-none">
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`pointer-events-auto ${item.bg} text-white h-10 w-10 hover:w-32 rounded-l-xl flex items-center overflow-hidden transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:brightness-105 cursor-pointer group`}
          >
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-white group-hover:scale-115 transition-transform" />
            </div>
            <span className="text-xs font-outfit font-extrabold tracking-wide whitespace-nowrap pr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
