import React from 'react';
import { Instagram, MessageCircle, Sparkles } from 'lucide-react';

export default function FeaturesShowcase() {
  return (
    <section id="features" className="py-16 bg-neutral-50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Katalog Layanan Inti</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mt-2">Disesuaikan untuk kebutuhan UMKM — fokus pada hasil, bukan tool.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Automation */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">Otomatisasi Instagram</h3>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Auto-DM dari komentar dan mention</li>
              <li>• AI jawab pertanyaan berulang (FAQ)</li>
              <li>• Kumpulkan leads dari Story & DM</li>
              <li>• Funnel DM ke WhatsApp/Website</li>
            </ul>
          </div>

          {/* TikTok Automation */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">Otomatisasi TikTok</h3>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Auto-DM yang mengarahkan ke website/WA</li>
              <li>• Koleksi data prospek dari Live & Komentar</li>
              <li>• Auto-reply komentar untuk boosting engagement</li>
              <li>• Integrasi tracking untuk konten organik & iklan</li>
            </ul>
          </div>

          {/* WhatsApp Blast & AI */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">WhatsApp Blast & AI</h3>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• WA Blast untuk promosi & follow-up otomatis</li>
              <li>• AI berbahasa Indonesia dengan konteks bisnis</li>
              <li>• AI caption & copywriting untuk campaign</li>
              <li>• Manajemen kontak & segmentasi audience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
