import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function HowToPlay() {
  return (
    <div>
      <PageHeader title="Nasıl Oynanır" subtitle="Leonatrix'e başlamak ve ustalaşmak için rehber" />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyunu İndirin</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="bg-green-900/30 p-6 rounded-xl text-center max-w-xs">
              <Image
                src="/images/image2.jpg"
                alt="App Store"
                width={200}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">iOS için İndirin</h3>
              <p className="mb-4">App Store'dan Leonatrix'i ücretsiz olarak indirin ve maceraya hemen başlayın.</p>
              <Link
                href="#"
                className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-6 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
              >
                App Store
              </Link>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center max-w-xs">
              <Image
                src="/images/image3.jpg"
                alt="Google Play"
                width={200}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Android için İndirin</h3>
              <p className="mb-4">Google Play'den Leonatrix'i ücretsiz olarak indirin ve maceraya hemen başlayın.</p>
              <Link
                href="#"
                className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-6 rounded-full text-lg transition-all transform hover:scale-105 inline-block"
              >
                Google Play
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Temel Kontroller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4">Hareket Kontrolleri</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">👆</span>
                  <div>
                    <h4 className="font-bold">Sola/Sağa Kaydırma</h4>
                    <p>
                      Patrick'i sola veya sağa hareket ettirmek için ekranın sol veya sağ tarafına dokunun ve kaydırın.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">👆</span>
                  <div>
                    <h4 className="font-bold">Yukarı Kaydırma</h4>
                    <p>Patrick'in zıplaması için ekranı yukarı doğru hızlıca kaydırın.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">👆</span>
                  <div>
                    <h4 className="font-bold">Çift Dokunma</h4>
                    <p>Patrick'in çift zıplaması için ekrana iki kez hızlıca dokunun.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4">Yetenek Kontrolleri</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✨</span>
                  <div>
                    <h4 className="font-bold">Altın Dokunuş</h4>
                    <p>
                      Ekranın sağ alt köşesindeki altın simgesine dokunun ve ardından dönüştürmek istediğiniz nesneye
                      dokunun.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">🍀</span>
                  <div>
                    <h4 className="font-bold">Şans Kalkanı</h4>
                    <p>Ekranın sol alt köşesindeki yonca simgesine dokunarak kalkanı etkinleştirin.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">🌈</span>
                  <div>
                    <h4 className="font-bold">Gökkuşağı Zıplaması</h4>
                    <p>
                      Ekranın üst kısmındaki gökkuşağı simgesine dokunun ve ardından zıplamak istediğiniz yere dokunun.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gameplay Progression - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun İlerlemesi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Eğitim Bölümü</h3>
              <p>
                Oyuna başladığınızda, temel kontrolleri ve yetenekleri öğreneceğiniz bir eğitim bölümü ile
                karşılaşacaksınız. Bu bölümü tamamlamak, oyunun geri kalanında başarılı olmanız için çok önemlidir.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Dünyaları Keşfedin</h3>
              <p>
                Her dünya, kendi benzersiz zorluklarıyla dolu 10-15 seviyeden oluşur. Bir dünyayı tamamlamak için tüm
                seviyeleri geçmeli ve o dünyanın boss'unu yenmelisiniz.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Yeteneklerinizi Geliştirin</h3>
              <p>
                Oyun boyunca topladığınız altınlar ve özel eşyalar, Patrick'in yeteneklerini geliştirmek için
                kullanılabilir. Yetenek ağacında ilerleyerek, oyun deneyiminizi kişiselleştirebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun İpuçları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">💡</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Başlangıç İpuçları</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Oyuna başlarken tüm eğitim bölümlerini tamamlayın.</li>
                <li>Altın paraları toplamak için her köşeyi keşfedin.</li>
                <li>Yeteneklerinizi kullanmadan önce enerji seviyenizi kontrol edin.</li>
                <li>Kontrol ayarlarını kendi oyun tarzınıza göre özelleştirin.</li>
                <li>İlk dünyayı tamamlamadan önce temel hareketleri iyice öğrenin.</li>
              </ul>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Orta Seviye İpuçları</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Yetenek kombinasyonlarını kullanarak zorlu bölümleri daha kolay geçin.</li>
                <li>Gizli geçitleri bulmak için şüpheli duvarlara Altın Dokunuş yeteneğini kullanın.</li>
                <li>Düşmanların hareket paternlerini öğrenin ve ona göre strateji geliştirin.</li>
                <li>Kontrol noktalarını kaçırmamak için dikkatli olun.</li>
                <li>Enerji iksirlerini acil durumlar için saklayın.</li>
              </ul>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🏆</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">İleri Seviye İpuçları</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Hızlı hareket teknikleri için çift zıplama ve duvar kaymasını birleştirin.</li>
                <li>Boss savaşlarında, saldırı paternlerini öğrenmek için ilk birkaç dakika savunmada kalın.</li>
                <li>Tüm koleksiyon parçalarını toplamak için gizli bölgeleri keşfedin.</li>
                <li>Yetenek ağacınızı oyun tarzınıza göre geliştirin.</li>
                <li>Zaman sınırlı görevlerde, önce rotayı öğrenin, sonra hızlı bir şekilde tamamlayın.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Video Rehberleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-6xl text-yellow-400">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Başlangıç Rehberi</h3>
              <p>Oyuna başlayanlar için temel kontroller ve ilk dünya hakkında detaylı bir video rehberi.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-6xl text-yellow-400">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Yetenek Kullanım Rehberi</h3>
              <p>Patrick'in tüm yeteneklerini etkili bir şekilde kullanmayı öğreten detaylı bir video rehberi.</p>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Sorun Giderme</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyun Açılmıyor</h3>
              <p className="mb-4">Eğer oyun açılmıyorsa, şu adımları deneyin:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Cihazınızı yeniden başlatın</li>
                <li>Uygulamayı kaldırıp yeniden yükleyin</li>
                <li>Cihazınızın işletim sisteminin güncel olduğundan emin olun</li>
                <li>Yeterli depolama alanınız olduğunu kontrol edin</li>
              </ol>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyun Donuyor veya Yavaş Çalışıyor</h3>
              <p className="mb-4">Performans sorunları yaşıyorsanız:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Arka planda çalışan uygulamaları kapatın</li>
                <li>Oyun ayarlarından grafik kalitesini düşürün</li>
                <li>Cihazınızı şarj ederken oynayın (pil tasarrufu modu kapalıyken)</li>
                <li>Cihazınızın aşırı ısınmadığından emin olun</li>
              </ol>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">İlerleme Kaydedilmiyor</h3>
              <p className="mb-4">İlerleme sorunları için:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>İnternet bağlantınızı kontrol edin</li>
                <li>Oyun hesabınıza giriş yaptığınızdan emin olun</li>
                <li>Oyunu normal şekilde kapatın, aniden çıkmayın</li>
                <li>Oyun içi ayarlardan manuel kaydetme seçeneğini kullanın</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Sıkça Sorulan Sorular</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyun tamamen ücretsiz mi?</h3>
              <p>
                Evet, Leonatrix'i ücretsiz olarak indirebilir ve oynayabilirsiniz. Oyun içi satın alımlar, kozmetik
                öğeler ve bazı özel yetenekler için mevcuttur, ancak oyunun tamamını ücretsiz olarak
                tamamlayabilirsiniz.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">İnternet bağlantısı gerekli mi?</h3>
              <p>
                İlk kurulum ve güncellemeler için internet bağlantısı gereklidir. Temel oyun modunu çevrimdışı
                oynayabilirsiniz, ancak çevrimiçi sıralamalar ve çok oyunculu modlar için internet bağlantısı
                gereklidir.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyun ilerlemem kaydediliyor mu?</h3>
              <p>
                Evet, oyun ilerlemesi otomatik olarak kaydedilir. Ayrıca, hesabınızla giriş yaparsanız, ilerlemeleriniz
                bulut üzerinde saklanır ve farklı cihazlar arasında senkronize edilir.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyunda kaç dünya var?</h3>
              <p>
                Şu anda Leonatrix'te 5 ana dünya bulunmaktadır, her biri 10-15 seviyeden oluşmaktadır. Düzenli
                güncellemelerle yeni dünyalar ve seviyeler eklenmektedir.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-2">Teknik sorunlar yaşıyorum, ne yapmalıyım?</h3>
              <p>
                Teknik sorunlar için lütfen destek ekibimizle iletişime geçin: destek@leonatrix.com. Ayrıca, oyun
                içindeki Ayarlar menüsünden de yardım alabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Community Resources - NEW */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Topluluk Kaynakları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Oyuncu Rehberleri</h3>
              <p className="mb-4 text-center">
                Deneyimli oyuncular tarafından hazırlanan detaylı rehberler ve ipuçları.
              </p>
              <div className="space-y-2">
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Tam Koleksiyon Rehberi</div>
                  <div className="text-sm">Tüm gizli eşyaların ve koleksiyon parçalarının yerleri</div>
                </a>
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Boss Yenme Taktikleri</div>
                  <div className="text-sm">Tüm boss'ları kolayca yenmek için stratejiler</div>
                </a>
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Hızlı İlerleme Rehberi</div>
                  <div className="text-sm">Oyunda hızlı bir şekilde ilerlemek için ipuçları</div>
                </a>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">👥</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Topluluk Platformları</h3>
              <p className="mb-4 text-center">
                Diğer oyuncularla bağlantı kurun, sorular sorun ve deneyimlerinizi paylaşın.
              </p>
              <div className="space-y-2">
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Resmi Discord Sunucusu</div>
                  <div className="text-sm">Canlı sohbet, etkinlikler ve geliştiricilerle doğrudan iletişim</div>
                </a>
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Reddit Topluluğu</div>
                  <div className="text-sm">Tartışmalar, paylaşımlar ve topluluk etkinlikleri</div>
                </a>
                <a href="#" className="block bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors">
                  <div className="font-bold">Leonatrix Wiki</div>
                  <div className="text-sm">
                    Oyun hakkında detaylı bilgiler içeren topluluk tarafından oluşturulan wiki
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

