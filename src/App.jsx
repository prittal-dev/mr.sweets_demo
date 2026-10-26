import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBannerSlider from './components/HeroBannerSlider';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import DualTickerBanner from './components/DualTickerBanner';
import CraftBanner from './components/CraftBanner';
import IconicCatalog from './components/IconicCatalog';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ContactCTA from './components/ContactCTA';
import ContactSection from './components/ContactSection';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import LeadGenModal from './components/LeadGenModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import StatCardsSection from './components/StatCardsSection';
import FloatingSocialSidebar from './components/FloatingSocialSidebar';
import { lockBodyScroll, unlockBodyScroll } from './utils/scrollLock';

const sectionIdMap = {
  home: 'atelier-hero',
  about: 'about',
  products: 'products',
  contact: 'contact'
};

const getPageFromUrl = () => {
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const validPages = ['about', 'products', 'contact'];
  if (path === '404' || hash === '404') return '404';
  if (validPages.includes(path)) return path;
  if (validPages.includes(hash)) return hash;
  if (path && path !== '' && path !== 'home' && path !== 'index.html') {
    return '404';
  }
  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromUrl);
  const [activeSection, setActiveSection] = useState('home');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sync active page state with browser back/forward and URL changes
  React.useEffect(() => {
    const handleUrlChange = () => {
      setActivePage(getPageFromUrl());
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // ScrollSpy to track active section while scrolling according to website
  React.useEffect(() => {
    if (activePage !== 'home') return;

    const sections = [
      { id: 'atelier-hero', name: 'home' },
      { id: 'about', name: 'about' },
      { id: 'products', name: 'products' },
      { id: 'contact', name: 'contact' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].name);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Handle initial hash scrolling on mount or hashchange
  React.useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (hash && sectionIdMap[hash] && activePage === 'home') {
        setTimeout(() => {
          const el = document.getElementById(sectionIdMap[hash]);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    };

    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, [activePage]);

  // Cart Drawer State with default initial items
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'iconic-29',
      name: 'Brawo Choco Rice Crunch Master Box',
      tagline: 'Master Box',
      priceINR: 195,
      priceUSD: 18.99,
      weight: 'Master Box',
      image: '/brawo box.webp',
      quantity: 1
    },
    {
      id: 'iconic-38',
      name: 'Romeo Choco Waffle Cone Jar',
      tagline: 'Waffle Cone',
      priceINR: 150,
      priceUSD: 14.99,
      weight: 'Waffle Cone',
      image: '/romeo choco cone.webp',
      quantity: 2
    },
    {
      id: 'iconic-40',
      name: 'Swiss Dark Chocolate Wafer Rolls',
      tagline: 'Swiss Cocoa',
      priceINR: 135,
      priceUSD: 12.99,
      weight: 'Swiss Cocoa',
      image: '/swiss choclate.webp',
      quantity: 1
    }
  ]);

  // Lead Generation System Modal State
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalTab, setLeadModalTab] = useState('product'); // 'product' | 'wholesale' | 'giftbox'
  const [prefilledProduct, setPrefilledProduct] = useState(null);

  // Lock background body scroll whenever any modal is open
  React.useEffect(() => {
    const isAnyModalOpen = isLeadModalOpen || isCartOpen || !!quickViewProduct;
    if (isAnyModalOpen) {
      lockBodyScroll();
      return () => {
        unlockBodyScroll();
      };
    }
  }, [isLeadModalOpen, isCartOpen, quickViewProduct]);

  const handleNavigate = (pageId) => {
    const validPages = ['home', 'about', 'products', 'contact', '404'];
    const targetPage = validPages.includes(pageId) ? pageId : '404';

    setActivePage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetPage === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${targetPage}`);
    }
  };

  const openLeadModal = (tab = 'product', product = null) => {
    setLeadModalTab(tab);
    setPrefilledProduct(product);
    setIsLeadModalOpen(true);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    openLeadModal('product', {
      name: `Shopping Bag Checkout (${cartItems.reduce((a, b) => a + (b.quantity || 1), 0)} items)`
    });
  };

  const handleDownloadCatalog = () => {
    const link = document.createElement('a');
    link.href = '/Mr sweets banner .pdf';
    link.download = 'Mr_Sweet_Price_List_2026.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    // When clicking Explore on any category circle, open the dedicated Products page with all items opened
    if (activePage !== 'products') {
      handleNavigate('products');
    }
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        activePage={activePage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquire={() => openLeadModal('wholesale')}
        onOpenCart={() => setIsCartOpen(true)}
        cartItemCount={cartItemCount}
      />

      {/* Page Title Header Banner for Sub-Pages */}
      {activePage !== 'home' && activePage !== '404' && (
        <div className="bg-[#C8102E] text-white py-3 sm:py-7 md:py-9 px-3.5 sm:px-6 lg:px-8 border-b border-[#9B0B21] shadow-xs relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3 relative z-10">
            <div className="min-w-0 pr-2">
              <div className="text-[9px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider mb-0.5 sm:mb-1 flex items-center gap-1.5 truncate">
                <button onClick={() => handleNavigate('home')} className="hover:underline text-amber-100/90 cursor-pointer">Home</button>
                <span className="text-white/60">/</span>
                <span className="capitalize font-extrabold text-white">
                  {activePage === 'about' ? 'About Us' : activePage === 'products' ? 'Products' : activePage === 'contact' ? 'Contact' : activePage}
                </span>
              </div>
              <h1 className="text-[13.5px] sm:text-2xl md:text-3xl font-outfit font-black text-white tracking-tight leading-tight truncate">
                {activePage === 'about' && 'About Us — Heritage'}
                {activePage === 'products' && 'Product Portfolio'}
                {activePage === 'contact' && 'Contact Us — Inquiries'}
              </h1>
            </div>

            <button
              onClick={() => handleNavigate('home')}
              className="bg-white/15 hover:bg-white/25 active:scale-95 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/30 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
              aria-label="Back to Home"
            >
              <span>← Back</span>
              <span className="hidden sm:inline">to Home</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Full Home Experience */}
        {activePage === 'home' && (
          <>
            {/* 5-Banner Autoscroll Slider (Uncropped & 3-sec interval) */}
            <HeroBannerSlider />
            {/* Atelier Hero Section */}
            <Hero
              onExploreCatalog={() => handleNavigate('products')}
              onRequestQuote={() => openLeadModal('wholesale')}
            />
            <DualTickerBanner />
            <StatCardsSection />
            <CraftBanner
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />
            <IconicCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onEnquire={(product) => openLeadModal('product', product)}
              onAddToCart={handleAddToCart}
              onQuickView={(product) => setQuickViewProduct(product)}
            />
            <MarqueeBanner theme="crimson" />
            <AboutUs onOpenInquire={() => openLeadModal('wholesale')} />
            <WhyChooseUs onOpenInquire={() => openLeadModal('wholesale')} />
            <TestimonialsSection />
            <ContactSection />
            <ContactCTA onOpenInquire={() => openLeadModal('wholesale')} />
          </>
        )}

        {/* 2. Dedicated About Us Page */}
        {activePage === 'about' && (
          <>
            <AboutUs onOpenInquire={() => openLeadModal('wholesale')} />
            <MarqueeBanner theme="dark" />
            <WhyChooseUs onOpenInquire={() => openLeadModal('wholesale')} />
            <CraftBanner
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />
            <TestimonialsSection />
            <ContactCTA onOpenInquire={() => openLeadModal('wholesale')} />
          </>
        )}

        {/* 3. Dedicated Products Page */}
        {activePage === 'products' && (
          <>
            <IconicCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              onEnquire={(product) => openLeadModal('product', product)}
              onAddToCart={handleAddToCart}
              onQuickView={(product) => setQuickViewProduct(product)}
              forceFullView={true}
            />
            <MarqueeBanner theme="dark" />
            <ContactCTA onOpenInquire={() => openLeadModal('wholesale')} />
          </>
        )}


        {/* 7. Dedicated Contact Us Page */}
        {activePage === 'contact' && (
          <>
            <ContactSection />
            <ContactCTA onOpenInquire={() => openLeadModal('wholesale')} />
          </>
        )}

        {/* 8. Dedicated 404 Page Not Found */}
        {activePage === '404' && (
          <NotFoundPage
            onNavigate={handleNavigate}
            onOpenInquire={() => openLeadModal('wholesale')}
          />
        )}
      </main>

      {/* Sticky Floating Social Media Sidebar (Matches Official Screen) */}
      <FloatingSocialSidebar />

      {/* Footer */}
      <Footer
        onOpenInquire={() => openLeadModal('wholesale')}
        onNavigate={handleNavigate}
      />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Lead Generation & Quick View Modals */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenInquire={(product) => openLeadModal('product', product)}
        onAddToCart={handleAddToCart}
      />

      <LeadGenModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialTab={leadModalTab}
        prefilledProduct={prefilledProduct}
      />
    </div>
  );
}



