import React from 'react';
import { Rocket, MessageCircle } from 'lucide-react';

const whatsappLink = 'https://wa.me/6281234567890?text=Halo%20ChatCraft%2C%20saya%20ingin%20konsultasi%20otomatisasi%20AI%20untuk%20UMKM.';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <Rocket className="w-5 h-5 text-primary" />
          <span>ChatCraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#services" className="hover:text-neutral-900 dark:hover:text-white">Layanan</a>
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Fitur</a>
          <a href="#faq" className="hover:text-neutral-900 dark:hover:text-white">FAQ</a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow"
        >
          <MessageCircle className="w-4 h-4" />
          Konsultasi Gratis
        </a>
      </div>
    </header>
  );
}
