"use client"

import type React from "react"

import { useState } from "react"
import PageHeader from "@/components/page-header"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div>
      <PageHeader
        title="İletişim"
        subtitle="Sorularınız, geri bildirimleriniz veya önerileriniz için bizimle iletişime geçin"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Bize Ulaşın</h2>

            {isSubmitted ? (
              <div className="bg-green-900/30 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Mesajınız Gönderildi!</h3>
                <p className="mb-4">Mesajınız için teşekkür ederiz. En kısa sürede size geri dönüş yapacağız.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-6 rounded-full transition-all"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-green-900/30 border border-green-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-green-900/30 border border-green-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-green-900/30 border border-green-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Konu Seçin</option>
                    <option value="Teknik Destek">Teknik Destek</option>
                    <option value="Öneri">Öneri</option>
                    <option value="Hata Bildirimi">Hata Bildirimi</option>
                    <option value="İş Birliği">İş Birliği</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-green-900/30 border border-green-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>
            )}
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">İletişim Bilgileri</h2>

            <div className="space-y-8">
              <div className="bg-green-900/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-yellow-400">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Adres</h3>
                    <p>Cumhuriyet, Bizim Sk. No:3/A, 34186 Bahçelievler/İstanbul</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-yellow-400">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Telefon</h3>
                    <p>+90 242 212 09 22</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-yellow-400">📧</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">E-posta</h3>
                    <p>info@leonatrix.com</p>
                    <p>destek@leonatrix.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-yellow-400">🕒</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 10:00 - 14:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Sıkça Sorulan Sorular</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                İş başvurusu yapmak istiyorum. Nasıl başvurabilirim?
              </h3>
              <p>
                İş başvuruları için kariyer@leonatrix.com adresine CV'nizi ve portfolyonuzu gönderebilirsiniz. Açık
                pozisyonlar için web sitemizin Kariyer bölümünü düzenli olarak kontrol etmenizi öneririz.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                Oyun hakkında bir önerim var. Bunu nasıl paylaşabilirim?
              </h3>
              <p>
                Önerileriniz bizim için çok değerli! Bu sayfadaki iletişim formunu kullanarak veya öneri@leonatrix.com
                adresine e-posta göndererek önerilerinizi bizimle paylaşabilirsiniz.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyunda bir hata buldum. Nasıl bildirebilirim?</h3>
              <p>
                Oyun içindeki "Ayarlar &gt; Yardım &gt; Hata Bildir" menüsünü kullanarak veya destek@leonatrix.com
                adresine e-posta göndererek hataları bildirebilirsiniz. Hatanın açıklamasını ve mümkünse ekran
                görüntüsünü eklemeyi unutmayın.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                Oyununuzu kendi YouTube kanalımda yayınlayabilir miyim?
              </h3>
              <p>
                Evet, Leonatrix'i içerik oluşturucular için tamamen açık bir politikamız var. Oyunumuzu YouTube, Twitch
                veya diğer platformlarda özgürce yayınlayabilirsiniz. Hatta bizi etiketlerseniz, içeriğinizi sosyal
                medya kanallarımızda paylaşabiliriz!
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Sosyal Medya</h2>

          <div className="flex justify-center gap-8">
            <a href="#" className="bg-green-900/30 p-6 rounded-full hover:bg-green-800/50 transition-colors">
              <div className="text-4xl">📱</div>
            </a>
            <a href="#" className="bg-green-900/30 p-6 rounded-full hover:bg-green-800/50 transition-colors">
              <div className="text-4xl">💻</div>
            </a>
            <a href="#" className="bg-green-900/30 p-6 rounded-full hover:bg-green-800/50 transition-colors">
              <div className="text-4xl">📷</div>
            </a>
            <a href="#" className="bg-green-900/30 p-6 rounded-full hover:bg-green-800/50 transition-colors">
              <div className="text-4xl">🎮</div>
            </a>
          </div>
        </div>

        {/* Job Opportunities - NEW */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Kariyer Fırsatları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Kıdemli Oyun Geliştirici</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full">Tam Zamanlı</span>
                <span className="bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded-full">İstanbul</span>
              </div>
              <p className="mb-4">
                Unity veya Unreal Engine ile en az 3 yıl deneyimli, mobil oyun geliştirme konusunda uzman bir
                geliştirici arıyoruz.
              </p>
              <button className="text-yellow-400 hover:text-yellow-300 font-bold">Detaylar ve Başvuru →</button>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">3D Karakter Sanatçısı</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full">Tam Zamanlı</span>
                <span className="bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded-full">Uzaktan</span>
              </div>
              <p className="mb-4">
                Stilize karakterler tasarlama ve modelleme konusunda deneyimli, yaratıcı bir 3D sanatçısı arıyoruz.
              </p>
              <button className="text-yellow-400 hover:text-yellow-300 font-bold">Detaylar ve Başvuru →</button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-6 rounded-full transition-all">
              Tüm Açık Pozisyonlar
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Konum</h2>

          <div className="bg-green-900/30 p-4 rounded-xl">
            <div className="aspect-[16/9] bg-black/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-yellow-400 mb-4">🗺️</div>
                <p className="text-lg">Harita Görüntüsü</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

