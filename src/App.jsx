import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CraftBanner from './components/CraftBanner';
import CollectionsGrid from './components/CollectionsGrid';
import IconicCatalog from './components/IconicCatalog';
import TrustSection from './components/TrustSection';
import AboutUs from './components/AboutUs';
import WholesaleB2B from './components/WholesaleB2B';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import LeadGenModal from './components/LeadGenModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

const getPageFromUrl = () => {
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();

  const validPages = ['about', 'products', 'blogs', 'contact'];
  if (validPages.includes(path)) return path;
  if (validPages.includes(hash)) return hash;
  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromUrl);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync active page state with browser back/forward and URL changes
  React.useEffect(() => {
    const handleUrlChange = () => {
      setActivePage(getPageFromUrl());
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

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
      image: '/brawo box.png',
      quantity: 1
    },
    {
      id: 'iconic-38',
      name: 'Romeo Choco Waffle Cone Jar',
      tagline: 'Waffle Cone',
      priceINR: 150,
      priceUSD: 14.99,
      weight: 'Waffle Cone',
      image: '/romeo choco cone.png',
      quantity: 2
    },
    {
      id: 'iconic-40',
      name: 'Swiss Dark Chocolate Wafer Rolls',
      tagline: 'Swiss Cocoa',
      priceINR: 135,
      priceUSD: 12.99,
      weight: 'Swiss Cocoa',
      image: '/swiss choclate.png',
      quantity: 1
    }
  ]);

  // Lead Generation System Modal State
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalTab, setLeadModalTab] = useState('product'); // 'product' | 'wholesale' | 'giftbox'
  const [prefilledProduct, setPrefilledProduct] = useState(null);

  // Lock background body scroll whenever any modal is open
  React.useEffect(() => {
    if (isLeadModalOpen || isCartOpen || !!quickViewProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLeadModalOpen, isCartOpen, quickViewProduct]);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    const targetUrl = pageId === 'home' ? '/' : `/${pageId}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    alert('Downloading Mr. Sweet Wholesale & B2B Commercial Product Catalog (PDF)...');
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

  const cartItemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231815] flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenInquire={() => openLeadModal('wholesale')}
        onOpenCart={() => setIsCartOpen(true)}
        cartItemCount={cartItemCount}
      />

      {/* Page Title Header Banner for Sub-Pages */}
      {activePage !== 'home' && (
        <div className="bg-[#18110F] text-white py-8 px-4 sm:px-8 border-b border-[#362823]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-1 flex items-center gap-2">
                <button onClick={() => handleNavigate('home')} className="hover:underline text-gray-400">Home</button>
                <span>/</span>
                <span className="capitalize">{activePage === 'about' ? 'About Us' : activePage}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activePage === 'about' && 'About Us — Brand Heritage & Craftsmanship'}
                {activePage === 'products' && 'Products — Confectionery Collection'}
                {activePage === 'blogs' && 'Blogs & Journal — Confectionery Insights'}
                {activePage === 'contact' && 'Contact Us — Atelier Concierge & Trade'}
              </h1>
            </div>

            <button
              onClick={() => handleNavigate('home')}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20 transition-all flex items-center gap-1.5"
            >
              <span>← Back to Full Home</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Full Home Experience */}
        {activePage === 'home' && (
          <>
            <Hero
              onExploreCatalog={() => scrollToSection('iconic-range')}
              onRequestQuote={() => openLeadModal('wholesale')}
            />
            <AboutUs onOpenInquire={() => openLeadModal('wholesale')} />
            <CraftBanner />
            <CollectionsGrid onSelectCategory={(id) => scrollToSection('iconic-range')} />
            <IconicCatalog
              onEnquire={(product) => openLeadModal('product', product)}
              onAddToCart={handleAddToCart}
              onQuickView={(product) => setQuickViewProduct(product)}
            />
            <TrustSection />
            <WholesaleB2B
              onDownloadCatalog={handleDownloadCatalog}
              onRequestB2BQuote={() => openLeadModal('wholesale')}
            />
            <BlogSection onOpenInquire={() => openLeadModal('wholesale')} />
            <ContactSection />
          </>
        )}

        {/* 2. Dedicated About Us Page */}
        {activePage === 'about' && (
          <>
            <AboutUs onOpenInquire={() => openLeadModal('wholesale')} />
            <CraftBanner />
            <TrustSection />
          </>
        )}

        {/* 3. Dedicated Products Page */}
        {activePage === 'products' && (
          <>
            <CollectionsGrid onSelectCategory={(id) => scrollToSection('iconic-range')} />
            <IconicCatalog
              onEnquire={(product) => openLeadModal('product', product)}
              onAddToCart={handleAddToCart}
              onQuickView={(product) => setQuickViewProduct(product)}
            />
          </>
        )}

        {/* 4. Dedicated Blogs Page */}
        {activePage === 'blogs' && (
          <>
            <BlogSection onOpenInquire={() => openLeadModal('wholesale')} />
          </>
        )}

        {/* 5. Dedicated Contact Us Page */}
        {activePage === 'contact' && (
          <>
            <ContactSection />
            <WholesaleB2B
              onDownloadCatalog={handleDownloadCatalog}
              onRequestB2BQuote={() => openLeadModal('wholesale')}
            />
          </>
        )}
      </main>

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
