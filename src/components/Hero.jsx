import React from 'react';
import Spline from '@splinetool/react-spline';

const whatsappLink = 'https://wa.me/6281234567890?text=Halo%20ChatCraft%2C%20saya%20ingin%20konsultasi%20otomatisasi%20AI%20untuk%20UMKM.';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/50 dark:to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Agensi Otomatisasi AI untuk UMKM Indonesia
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Kami bantu tingkatkan penjualan dan efisiensi dengan chatbot, auto-reply, dan integrasi AI di WhatsApp, Instagram, dan TikTok.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-primary text-white px-6 py-3 font-medium shadow hover:shadow-lg transition-shadow"
          >
            Jadwalkan Konsultasi Gratis
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>
  );
}
