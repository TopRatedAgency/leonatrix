import Image from "next/image"
import Link from "next/link"
import { SimpleCoinGame } from "@/components/simple-coin-game"
import { FloatingCoins } from "@/components/floating-coins"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <FloatingCoins />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-yellow-400">
            Leonatrix: Altın Peşinde Büyülü Bir Macera!
          </h1>
          <p className="text-lg md:text-xl">
            Patrick'in büyülü dünyasında altın arayışına çıkın. Klasik platform oyunu heyecanını benzersiz sihirli
            yeteneklerle birleştiren bu macerada kaybolmuş hazineleri keşfedin.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/nasil-oynanir"
              className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
            >
              Şimdi İndir
            </Link>
            <Link
              href="/oyun-hakkinda"
              className="bg-transparent border-2 border-yellow-500 hover:border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-400 rounded-full opacity-30 blur-xl"></div>
          <Image
            src="/images/hero-leprechaun.jpg"
            alt="Leonatrix Oyun Görseli"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl relative z-10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Oyunun Özellikleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-900/30 p-6 rounded-xl text-center">
            <div className="text-4xl text-yellow-400 mb-4">🎮</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Klasik Platform Mekaniği</h3>
            <p>Zıpla, koş ve engelleri aş. Leonatrix, sevdiğiniz klasik platform oyunlarının tüm heyecanını sunar.</p>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl text-center">
            <div className="text-4xl text-yellow-400 mb-4">✨</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Büyülü Yetenekler</h3>
            <p>Patrick'in özel yeteneklerini kullanarak bulmacaları çöz ve gizli hazineleri keşfet.</p>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl text-center">
            <div className="text-4xl text-yellow-400 mb-4">🌍</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Büyüleyici Dünyalar</h3>
            <p>Her biri kendine özgü zorluklarla dolu, görsel olarak etkileyici dünyaları keşfedin.</p>
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Patrick ile Tanışın</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/images/image1.jpg"
              alt="Patrick Leprechaun"
              width={400}
              height={500}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">Neşeli ve Kurnaz Bir Leprechaun</h3>
            <p className="text-lg">
              Patrick, kaybolmuş altınların peşinde büyülü bir dünyada maceradan maceraya koşan neşeli bir leprechaun.
              Onun benzersiz yetenekleri arasında:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">✨</span>
                <div>
                  <h4 className="font-bold">Altın Dokunuş</h4>
                  <p>
                    Patrick dokunduğu nesneleri geçici olarak altına çevirebilir, bu da ona yeni platformlar oluşturma
                    yeteneği verir.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">🍀</span>
                <div>
                  <h4 className="font-bold">Şans Kalkanı</h4>
                  <p>Tehlike anında Patrick'in yonca yapraklı kalkanı onu korur ve düşmanları şaşırtır.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-2xl">🌈</span>
                <div>
                  <h4 className="font-bold">Gökkuşağı Zıplaması</h4>
                  <p>Patrick, gökkuşağı köprüleri oluşturarak ulaşılması zor yerlere erişebilir.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="container mx-auto px-4 py-16 bg-green-900/30 rounded-3xl my-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Oyuncularımız Ne Diyor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-900/30 p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <div className="flex">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
              </div>
            </div>
            <p className="text-center italic mb-4">
              "Leonatrix, uzun zamandır oynadığım en eğlenceli platform oyunu! Patrick'in yetenekleri oyuna tamamen
              farklı bir boyut katıyor."
            </p>
            <div className="text-center">
              <p className="font-bold text-green-400">Ahmet Y.</p>
              <p className="text-sm">İstanbul</p>
            </div>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <div className="flex">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
              </div>
            </div>
            <p className="text-center italic mb-4">
              "Grafikleri, müziği ve oynanışıyla tam bir başyapıt. Çocuklarımla birlikte oynamaktan büyük keyif
              alıyoruz!"
            </p>
            <div className="text-center">
              <p className="font-bold text-green-400">Zeynep K.</p>
              <p className="text-sm">Ankara</p>
            </div>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <div className="flex">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span className="text-yellow-400 text-2xl">⭐</span>
              </div>
            </div>
            <p className="text-center italic mb-4">
              "Bulmacalar zorlayıcı ama adil. Her seviyeyi tamamladığımda gerçek bir başarı hissi yaşıyorum. Kesinlikle
              tavsiye ederim!"
            </p>
            <div className="text-center">
              <p className="font-bold text-green-400">Mehmet D.</p>
              <p className="text-sm">İzmir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Oyun Görüntüleri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src="/images/image5.jpg"
            alt="Oyun Görüntüsü"
            width={300}
            height={200}
            className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
          />
          <Image
            src="/images/image6.jpg"
            alt="Oyun Görüntüsü"
            width={300}
            height={200}
            className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
          />
          <Image
            src="/images/image7.jpg"
            alt="Oyun Görüntüsü"
            width={300}
            height={200}
            className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
          />
          <Image
            src="/images/image8.jpg"
            alt="Oyun Görüntüsü"
            width={300}
            height={200}
            className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/oyun-hakkinda" className="inline-block text-yellow-400 hover:text-yellow-300 font-bold">
            Daha Fazla Görüntü Gör →
          </Link>
        </div>
      </section>

      {/* Mini Game Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-green-900/30 rounded-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Hemen Oynamaya Başla!</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          Patrick'i kontrol ederek düşen altın paraları topla! Klavyenizdeki sol ve sağ ok tuşlarını veya dokunmatik
          ekranda parmağınızı kullanarak Patrick'i hareket ettirebilirsiniz.
        </p>
        <div className="max-w-2xl mx-auto bg-purple-900/50 p-4 rounded-xl">
          <SimpleCoinGame />
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Son Güncellemeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-900/30 p-6 rounded-xl">
            <div className="text-sm text-yellow-400 mb-2">15 Mart 2025</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Yeni Dünya: Kristal Mağaralar</h3>
            <p className="mb-4">
              Yeni güncellememizle birlikte, Patrick'in macerası Kristal Mağaralar dünyasında devam ediyor!
            </p>
            <Link href="/guncellemeler" className="text-yellow-400 hover:text-yellow-300">
              Devamını Oku →
            </Link>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl">
            <div className="text-sm text-yellow-400 mb-2">28 Şubat 2025</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Yeni Yetenek: Zaman Yavaşlatma</h3>
            <p className="mb-4">
              Patrick artık çevresindeki zamanı yavaşlatabilir, bu da zorlu bölümleri geçmeyi kolaylaştırır.
            </p>
            <Link href="/guncellemeler" className="text-yellow-400 hover:text-yellow-300">
              Devamını Oku →
            </Link>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl">
            <div className="text-sm text-yellow-400 mb-2">10 Şubat 2025</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Performans İyileştirmeleri</h3>
            <p className="mb-4">
              Oyun performansını artıran ve çeşitli hataları düzelten yeni bir güncelleme yayınladık.
            </p>
            <Link href="/guncellemeler" className="text-yellow-400 hover:text-yellow-300">
              Devamını Oku →
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/guncellemeler" className="inline-block text-yellow-400 hover:text-yellow-300 font-bold">
            Tüm Güncellemeleri Gör →
          </Link>
        </div>
      </section>

      {/* Download CTA Section - NEW */}
      <section className="container mx-auto px-4 py-16 my-16">
        <div className="bg-gradient-to-r from-purple-900 to-green-900 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Maceraya Hemen Katıl!</h2>
              <p className="text-lg">
                Leonatrix'i şimdi indirin ve Patrick ile birlikte büyülü dünyaları keşfedin. Ücretsiz olarak App Store
                ve Google Play'de!
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/nasil-oynanir"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
                >
                  iOS için İndir
                </Link>
                <Link
                  href="/nasil-oynanir"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
                >
                  Android için İndir
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute inset-4 bg-yellow-400 rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div
                  className="absolute inset-8 bg-yellow-400 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "600ms" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - NEW */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-yellow-400">Topluluğumuza Katılın</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-900/30 p-6 rounded-xl">
            <div className="text-4xl text-yellow-400 mb-4 text-center">👥</div>
            <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Sosyal Medya</h3>
            <p className="text-center mb-6">
              Leonatrix topluluğuna katılın, diğer oyuncularla tanışın ve en son haberlerden haberdar olun.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-3xl hover:text-yellow-400 transition-colors">
                📱
              </a>
              <a href="#" className="text-3xl hover:text-yellow-400 transition-colors">
                💻
              </a>
              <a href="#" className="text-3xl hover:text-yellow-400 transition-colors">
                📷
              </a>
              <a href="#" className="text-3xl hover:text-yellow-400 transition-colors">
                🎮
              </a>
            </div>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl">
            <div className="text-4xl text-yellow-400 mb-4 text-center">📧</div>
            <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Bültenimize Abone Olun</h3>
            <p className="text-center mb-6">
              En son güncellemeler, özel içerikler ve etkinlikler hakkında bilgi almak için bültenimize abone olun.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-grow p-3 bg-purple-900/50 border border-green-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-r-lg transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

