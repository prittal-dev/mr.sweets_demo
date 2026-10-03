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

export default function App() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231815] flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        onOpenInquire={() => openLeadModal('wholesale')}
        onOpenCart={() => setIsCartOpen(true)}
        cartItemCount={cartItemCount}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('iconic-range')}
          onRequestQuote={() => openLeadModal('wholesale')}
        />

        {/* 1. About Us & Confectionery Heritage Section */}
        <AboutUs onOpenInquire={() => openLeadModal('wholesale')} />

        {/* Craft & Ingredient Banner */}
        <CraftBanner />

        {/* 2. Products Section (Collections Grid & Iconic Catalog) */}
        <CollectionsGrid
          onSelectCategory={(id) => scrollToSection('iconic-range')}
        />

        {/* Iconic Confectionery Catalog (AUTHENTIC PACKAGED RANGE) */}
        <IconicCatalog
          onEnquire={(product) => openLeadModal('product', product)}
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Why Confectionery Lovers Trust Mr. Sweet */}
        <TrustSection />

        {/* Commercial Distribution & Wholesale B2B Section */}
        <WholesaleB2B
          onDownloadCatalog={handleDownloadCatalog}
          onRequestB2BQuote={() => openLeadModal('wholesale')}
        />

        {/* 3. Blogs & Insights Journal Section */}
        <BlogSection onOpenInquire={() => openLeadModal('wholesale')} />

        {/* 4. Contact Us & Atelier Concierge Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquire={() => openLeadModal('wholesale')}
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
