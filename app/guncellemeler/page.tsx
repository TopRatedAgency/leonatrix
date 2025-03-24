import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function Updates() {
  return (
    <div>
      <PageHeader title="Güncellemeler" subtitle="Leonatrix'in en son güncellemeleri ve gelecek planları" />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Son Güncellemeler</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/images/image5.jpg"
                    alt="Kristal Mağaralar Güncellemesi"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="text-sm text-yellow-400 mb-2">15 Mart 2025</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Versiyon 2.5: Kristal Mağaralar</h3>
                  <p className="mb-4">
                    Yeni güncellememizle birlikte, Patrick'in macerası Kristal Mağaralar dünyasında devam ediyor! Bu
                    büyüleyici yeni dünya, parlayan kristallar, gizli geçitler ve yeni düşmanlarla dolu.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold">Yenilikler:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Yeni Dünya: Kristal Mağaralar (15 yeni seviye)</li>
                      <li>Yeni Düşmanlar: Kristal Gardiyanları ve Mağara Yarasaları</li>
                      <li>
                        Yeni Yetenek: Kristal Yansıması - Patrick kristal yüzeylerde yansıyarak gizli alanlara
                        erişebilir
                      </li>
                      <li>Yeni Koleksiyon Parçaları: 20 yeni kristal parçası</li>
                      <li>Performans iyileştirmeleri ve hata düzeltmeleri</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/images/image6.jpg"
                    alt="Zaman Yavaşlatma Güncellemesi"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="text-sm text-yellow-400 mb-2">28 Şubat 2025</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Versiyon 2.4: Zaman Yavaşlatma</h3>
                  <p className="mb-4">
                    Patrick artık çevresindeki zamanı yavaşlatabilir, bu da zorlu bölümleri geçmeyi kolaylaştırır. Bu
                    yeni yetenek, oyuna tamamen yeni bir boyut katıyor!
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold">Yenilikler:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Yeni Yetenek: Zaman Yavaşlatma</li>
                      <li>Yetenek Ağacı Güncellemesi: Zaman yetenekleri için yeni bir dal</li>
                      <li>Yeni Görevler: Zaman temalı 5 yeni görev</li>
                      <li>Kullanıcı arayüzü iyileştirmeleri</li>
                      <li>Ses efektleri ve müzik güncellemeleri</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/images/image7.jpg"
                    alt="Performans İyileştirmeleri"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="text-sm text-yellow-400 mb-2">10 Şubat 2025</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Versiyon 2.3: Performans İyileştirmeleri</h3>
                  <p className="mb-4">
                    Oyun performansını artıran ve çeşitli hataları düzelten yeni bir güncelleme yayınladık. Bu
                    güncelleme, oyun deneyimini daha akıcı ve keyifli hale getiriyor.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-bold">Yenilikler:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Düşük RAM'li cihazlarda performans iyileştirmeleri</li>
                      <li>Yükleme sürelerinin kısaltılması</li>
                      <li>Pil tüketiminin azaltılması</li>
                      <li>Çeşitli hata düzeltmeleri ve stabilite iyileştirmeleri</li>
                      <li>Bazı seviye tasarımlarında küçük değişiklikler</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Insights - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Geliştirici Notları</h2>
          <div className="space-y-8">
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/image11.jpg"
                    alt="Ahmet Yılmaz"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-green-400">Ahmet Yılmaz</h3>
                    <span className="text-sm text-yellow-400">Genel Müdür</span>
                  </div>
                  <p className="italic">
                    "Kristal Mağaralar güncellemesi, oyuncularımızın uzun zamandır beklediği bir içerikti. Ekibimiz, bu
                    yeni dünyayı tasarlarken hem görsel olarak etkileyici hem de oynanış açısından yenilikçi olmasına
                    büyük önem verdi. Kristal Yansıması yeteneği, oyuncularımıza tamamen yeni bir oynanış deneyimi
                    sunacak."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/image13.jpg"
                    alt="Mehmet Demir"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-green-400">Mehmet Demir</h3>
                    <span className="text-sm text-yellow-400">Baş Geliştirici</span>
                  </div>
                  <p className="italic">
                    "Performans iyileştirmeleri, oyunun daha geniş bir cihaz yelpazesinde sorunsuz çalışmasını sağlamak
                    için çok önemliydi. Özellikle düşük RAM'li cihazlarda oyun deneyimini optimize etmek için çok
                    çalıştık. Ayrıca, pil tüketimini azaltmak için render sistemimizi tamamen yeniden tasarladık."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Gelecek Güncellemeler</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🌊</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Su Altı Krallığı</h3>
              <p className="mb-4 text-center">
                Yakında gelecek olan Su Altı Krallığı güncellemesi, Patrick'i denizin derinliklerine götürecek. Yeni
                yüzme mekanikleri, su altı yaratıkları ve gizli hazinelerle dolu yepyeni bir dünya!
              </p>
              <div className="text-sm text-yellow-400 text-center">Tahmini Yayın: Nisan 2025</div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🏰</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Gökyüzü Kaleleri</h3>
              <p className="mb-4 text-center">
                Gökyüzü Kaleleri güncellemesi, Patrick'i bulutların üzerindeki yüzen kalelere taşıyacak. Yerçekimi
                bulmacaları, uçan düşmanlar ve rüzgar mekanikleriyle dolu heyecan verici bir macera!
              </p>
              <div className="text-sm text-yellow-400 text-center">Tahmini Yayın: Haziran 2025</div>
            </div>
          </div>
        </div>

        {/* Community Events - NEW */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Topluluk Etkinlikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-sm text-yellow-400 mb-2">20-27 Mart 2025</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Kristal Hazine Avı</h3>
              <p className="mb-4">
                Yeni Kristal Mağaralar dünyasında özel hazineleri bulun ve eşsiz ödüller kazanın. En çok kristal
                toplayan oyuncular özel kostümler kazanacak!
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-purple-900/50 text-xs px-2 py-1 rounded-full">Aktif</span>
                <button className="text-yellow-400 hover:text-yellow-300">Detaylar →</button>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-sm text-yellow-400 mb-2">5-12 Nisan 2025</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Hız Koşusu Turnuvası</h3>
              <p className="mb-4">
                Seçili seviyeleri en hızlı şekilde tamamlayarak global sıralamada yerinizi alın. İlk 100 oyuncu özel
                ödüller kazanacak!
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-green-900/50 text-xs px-2 py-1 rounded-full">Yakında</span>
                <button className="text-yellow-400 hover:text-yellow-300">Hatırlatıcı Kur →</button>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-sm text-yellow-400 mb-2">15-30 Nisan 2025</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Fan Art Yarışması</h3>
              <p className="mb-4">
                Patrick ve Leonatrix dünyası ile ilgili en yaratıcı çizimlerinizi gönderin. Kazanan eserler oyun içinde
                sergilenecek!
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-green-900/50 text-xs px-2 py-1 rounded-full">Yakında</span>
                <button className="text-yellow-400 hover:text-yellow-300">Detaylar →</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Güncelleme Takvimi</h2>

          <div className="bg-green-900/30 p-6 rounded-xl max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-700">
                    <th className="py-2 px-4 text-left text-yellow-400">Tarih</th>
                    <th className="py-2 px-4 text-left text-yellow-400">Versiyon</th>
                    <th className="py-2 px-4 text-left text-yellow-400">Güncelleme</th>
                    <th className="py-2 px-4 text-left text-yellow-400">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-700/50">
                    <td className="py-2 px-4">15 Mart 2025</td>
                    <td className="py-2 px-4">v2.5</td>
                    <td className="py-2 px-4">Kristal Mağaralar</td>
                    <td className="py-2 px-4 text-green-400">Yayında</td>
                  </tr>
                  <tr className="border-b border-green-700/50">
                    <td className="py-2 px-4">28 Şubat 2025</td>
                    <td className="py-2 px-4">v2.4</td>
                    <td className="py-2 px-4">Zaman Yavaşlatma</td>
                    <td className="py-2 px-4 text-green-400">Yayında</td>
                  </tr>
                  <tr className="border-b border-green-700/50">
                    <td className="py-2 px-4">10 Şubat 2025</td>
                    <td className="py-2 px-4">v2.3</td>
                    <td className="py-2 px-4">Performans İyileştirmeleri</td>
                    <td className="py-2 px-4 text-green-400">Yayında</td>
                  </tr>
                  <tr className="border-b border-green-700/50">
                    <td className="py-2 px-4">Nisan 2025</td>
                    <td className="py-2 px-4">v2.6</td>
                    <td className="py-2 px-4">Su Altı Krallığı</td>
                    <td className="py-2 px-4 text-yellow-400">Geliştirme Aşamasında</td>
                  </tr>
                  <tr className="border-b border-green-700/50">
                    <td className="py-2 px-4">Haziran 2025</td>
                    <td className="py-2 px-4">v2.7</td>
                    <td className="py-2 px-4">Gökyüzü Kaleleri</td>
                    <td className="py-2 px-4 text-purple-400">Planlama Aşamasında</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Ağustos 2025</td>
                    <td className="py-2 px-4">v3.0</td>
                    <td className="py-2 px-4">Çok Oyunculu Mod</td>
                    <td className="py-2 px-4 text-purple-400">Planlama Aşamasında</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

