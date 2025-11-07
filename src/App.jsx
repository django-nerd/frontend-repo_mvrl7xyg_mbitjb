import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesShowcase from './components/FeaturesShowcase';
import IntegrationShowcase from './components/IntegrationShowcase';
import FAQSection from './components/FAQSection';

function Footer() {
  const whatsappLink = 'https://wa.me/6281234567890?text=Halo%20ChatCraft%2C%20saya%20ingin%20konsultasi%20otomatisasi%20AI%20untuk%20UMKM.';
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} ChatCraft — Agensi Otomatisasi AI untuk UMKM</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md">Konsultasi via WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <FeaturesShowcase />
        <IntegrationShowcase />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
