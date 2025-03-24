import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function AboutCompany() {
  return (
    <div>
      <PageHeader title="Şirket Hakkında" subtitle="Leonatrix'in arkasındaki yaratıcı ekiple tanışın" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/image10.jpg"
              alt="Şirket Ofisi"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400">Hikayemiz</h2>
            <p className="text-lg">
              Leonatrix Games, 2020 yılında İstanbul'da bir grup tutkulu oyun geliştiricisi tarafından kuruldu.
              Amacımız, oyuncuları büyülü dünyalara götüren, yaratıcı ve eğlenceli oyunlar geliştirmekti.
            </p>
            <p className="text-lg">
              Şirketimiz, her yaştan oyuncuya hitap eden, görsel olarak etkileyici ve oynanışı akıcı mobil oyunlar
              geliştirmeye odaklanmıştır. İlk büyük projemiz olan Leonatrix ile, klasik platform oyunu mekaniğini büyülü
              yeteneklerle birleştirerek benzersiz bir oyun deneyimi sunuyoruz.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">🎨</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Yaratıcılık</h3>
              <p>
                Her projemizde yenilikçi fikirler ve özgün tasarımlar sunmaya çalışıyoruz. Yaratıcılık, şirketimizin
                temel taşıdır.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">👥</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Ekip Çalışması</h3>
              <p>
                Başarımızın arkasında, farklı yeteneklere sahip profesyonellerden oluşan ekibimiz var. Birlikte daha
                iyisini yaratıyoruz.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">💖</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Oyuncu Odaklılık</h3>
              <p>
                Oyuncularımızın deneyimini her zaman ön planda tutuyoruz. Geri bildirimler, gelişimimizin en önemli
                parçasıdır.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Section - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Ödüllerimiz ve Başarılarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">🏆</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">2024 - En İyi Mobil Oyun</h3>
              <p className="text-sm">Türkiye Oyun Geliştirme Ödülleri</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">🥇</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">2023 - En İyi Sanat Tasarımı</h3>
              <p className="text-sm">Uluslararası Mobil Oyun Festivali</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">2023 - Yılın Yenilikçi Oyunu</h3>
              <p className="text-sm">Dijital Oyun Zirvesi</p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl text-center">
              <div className="text-4xl text-yellow-400 mb-4">🏅</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">2022 - En İyi Bağımsız Oyun</h3>
              <p className="text-sm">Avrupa Oyun Geliştirme Ödülleri</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/image11.jpg"
                  alt="Ahmet Yılmaz"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Ahmet Yılmaz</h3>
              <p className="text-yellow-400 mb-2">Kurucu & Genel Müdür</p>
              <p className="text-sm">10 yıllık oyun geliştirme deneyimiyle Leonatrix'in vizyonunu şekillendiriyor.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/image12.jpg"
                  alt="Zeynep Kaya"
                  width={128}
                  height={128}
                  alt="Zeynep Kaya"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Zeynep Kaya</h3>
              <p className="text-yellow-400 mb-2">Baş Tasarımcı</p>
              <p className="text-sm">Leonatrix'in büyüleyici dünyasını ve karakterlerini tasarlayan yaratıcı beyin.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/image13.jpg"
                  alt="Mehmet Demir"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Mehmet Demir</h3>
              <p className="text-yellow-400 mb-2">Baş Geliştirici</p>
              <p className="text-sm">Oyunun teknik altyapısını oluşturan ve kodlama süreçlerini yöneten uzman.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/image9.jpg"
                  alt="Ayşe Şahin"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Ayşe Şahin</h3>
              <p className="text-yellow-400 mb-2">Pazarlama Direktörü</p>
              <p className="text-sm">
                Leonatrix'in tanıtım stratejilerini geliştiren ve marka bilinirliğini artıran uzman.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section - NEW */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">İş Ortaklarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-4xl">🎮</div>
              </div>
              <p className="font-bold text-center">TechPlay</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-4xl">💻</div>
              </div>
              <p className="font-bold text-center">GameDev Studios</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-4xl">🎨</div>
              </div>
              <p className="font-bold text-center">ArtVision</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-4xl">🔊</div>
              </div>
              <p className="font-bold text-center">SoundWave</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Ofisimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/image3.jpg"
                alt="Ofis Görüntüsü 1"
                width={600}
                height={400}
                className="rounded-lg shadow-xl mb-4"
              />
              <p className="text-center">Yaratıcı çalışma alanımız</p>
            </div>
            <div>
              <Image
                src="/images/image4.jpg"
                alt="Ofis Görüntüsü 2"
                width={600}
                height={400}
                className="rounded-lg shadow-xl mb-4"
              />
              <p className="text-center">Test ve geliştirme bölümümüz</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg max-w-3xl mx-auto">
              İstanbul'un kalbinde yer alan modern ofisimiz, ekibimizin yaratıcılığını ve işbirliğini destekleyen bir
              ortam sunuyor. Burada, Leonatrix ve gelecekteki projelerimiz için çalışmalarımızı sürdürüyoruz.
            </p>
          </div>
        </div>

        {/* Company Timeline - NEW */}
        <div className="mt-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Şirket Tarihçemiz</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold">
                  1
                </div>
                <div className="w-1 flex-grow bg-yellow-400/30 mt-2"></div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">2020 - Kuruluş</h3>
                <p>Leonatrix Games, İstanbul'da kuruldu. İlk ekip 5 kişiden oluşuyordu.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold">
                  2
                </div>
                <div className="w-1 flex-grow bg-yellow-400/30 mt-2"></div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">2021 - İlk Prototip</h3>
                <p>Leonatrix'in ilk prototipi geliştirildi ve test edilmeye başlandı.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold">
                  3
                </div>
                <div className="w-1 flex-grow bg-yellow-400/30 mt-2"></div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">2022 - İlk Yatırım</h3>
                <p>Şirket, ilk büyük yatırımını aldı ve ekibini genişletmeye başladı.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold">
                  4
                </div>
                <div className="w-1 flex-grow bg-yellow-400/30 mt-2"></div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">2023 - Beta Sürümü</h3>
                <p>Leonatrix'in beta sürümü seçili oyunculara sunuldu ve olumlu geri bildirimler alındı.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold">
                  5
                </div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-xl font-bold text-green-400 mb-1">2024 - Resmi Lansman</h3>
                <p>Leonatrix, App Store ve Google Play'de resmi olarak yayınlandı ve milyonlarca indirmeye ulaştı.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

