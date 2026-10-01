import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CraftBanner from './components/CraftBanner';
import CollectionsGrid from './components/CollectionsGrid';
import IconicCatalog from './components/IconicCatalog';
import TrustSection from './components/TrustSection';
import WholesaleB2B from './components/WholesaleB2B';
import CustomerReviewsSection from './components/CustomerReviewsSection';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import LeadGenModal from './components/LeadGenModal';
import Footer from './components/Footer';

export default function App() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Lead Generation System Modal State
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalTab, setLeadModalTab] = useState('product'); // 'product' | 'wholesale' | 'giftbox'
  const [prefilledProduct, setPrefilledProduct] = useState(null);

  const openLeadModal = (tab = 'product', product = null) => {
    setLeadModalTab(tab);
    setPrefilledProduct(product);
    setIsLeadModalOpen(true);
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

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231815] flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        onOpenInquire={() => openLeadModal('wholesale')}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('iconic-range')}
          onRequestQuote={() => openLeadModal('wholesale')}
        />

        {/* Craft & Ingredient Banner */}
        <CraftBanner />

        {/* Collections Grid */}
        <CollectionsGrid
          onSelectCategory={(id) => scrollToSection('iconic-range')}
        />

        {/* Iconic Confectionery Catalog (AUTHENTIC PACKAGED RANGE) */}
        <IconicCatalog
          onEnquire={(product) => openLeadModal('product', product)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Why Confectionery Lovers Trust Mr. Sweet */}
        <TrustSection />

        {/* Commercial Distribution & Wholesale B2B Section */}
        <WholesaleB2B
          onDownloadCatalog={handleDownloadCatalog}
          onRequestB2BQuote={() => openLeadModal('wholesale')}
        />

        {/* Customer Review Section (Loved Across Generations) & Newsletter */}
        <CustomerReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquire={() => openLeadModal('wholesale')}
      />

      {/* Lead Generation & Quick View Modals */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenInquire={(product) => openLeadModal('product', product)}
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
