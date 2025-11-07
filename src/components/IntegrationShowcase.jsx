import React from 'react';
import { MessageCircle, Instagram, BadgeCheck, Database, FileSpreadsheet, ShoppingCart } from 'lucide-react';

export default function IntegrationShowcase() {
  const items = [
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { icon: <BadgeCheck className="w-5 h-5" />, label: 'TikTok' },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Platform & Integrasi</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Kami membangun alur otomatis yang menyambungkan kanal social ke sistem bisnis Anda. Dari chat hingga database,
              semuanya terukur dan siap scale.
            </p>
            <ul className="mt-6 grid grid-cols-3 gap-4">
              {items.map((it) => (
                <li key={it.label} className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2 bg-white dark:bg-neutral-900">
                  <span className="text-primary">{it.icon}</span>
                  <span className="text-sm text-neutral-900 dark:text-neutral-100">{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contoh Alur Kerja</h3>
            <ol className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">1</span>
                Chat masuk dari Instagram/TikTok/WhatsApp diproses AI untuk niat dan prioritas.
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">2</span>
                Data prospek disimpan ke Google Sheets atau Database internal.
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">3</span>
                Notifikasi tim via WhatsApp/Email, atau auto follow-up terjadwal.
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">4</span>
                Sinkronisasi katalog dan pemesanan dengan marketplace seperti Shopee/Tokopedia.
              </li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-2 py-1 bg-white dark:bg-neutral-900"><FileSpreadsheet className="w-4 h-4"/> Google Sheets</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-2 py-1 bg-white dark:bg-neutral-900"><Database className="w-4 h-4"/> Database</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-2 py-1 bg-white dark:bg-neutral-900"><ShoppingCart className="w-4 h-4"/> Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
