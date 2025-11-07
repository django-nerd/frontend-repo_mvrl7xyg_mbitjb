import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Apa layanan yang ditawarkan ChatCraft?',
      a: 'Kami membantu UMKM mengotomatiskan akuisisi dan layanan pelanggan di WhatsApp, Instagram, dan TikTok dengan chatbot AI, auto-reply, dan integrasi sistem bisnis.'
    },
    {
      q: 'Bagaimana model harganya?',
      a: 'Harga bersifat custom tergantung kebutuhan dan volume. Konsultasi gratis via WhatsApp akan membantu kami memberi estimasi yang tepat.'
    },
    {
      q: 'Apakah perlu tim teknis dari sisi kami?',
      a: 'Tidak. Tim kami menangani setup end-to-end termasuk penulisan prompt, alur percakapan, integrasi, dan pelatihan penggunaan.'
    },
    {
      q: 'Apa saja integrasi yang didukung?',
      a: 'Kami mendukung integrasi ke Google Sheets, Meta platform, serta e-commerce populer seperti Shopee dan Tokopedia.'
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-neutral-900 dark:text-white font-medium">
                {item.q}
                <span className="ml-4 text-neutral-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
