import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function AboutGame() {
  return (
    <div>
      <PageHeader title="Oyun Hakkında" subtitle="Leonatrix'in büyülü dünyasını keşfedin" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/hero-leprechaun.jpg"
              alt="Leonatrix Oyun Görseli"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400">Oyun Hikayesi</h2>
            <p className="text-lg">
              Leonatrix, neşeli ve kurnaz bir leprechaun olan Patrick'in, kaybolmuş altın hazinesini bulmak için çıktığı
              büyülü bir maceraya odaklanıyor. Efsaneye göre, bu hazine yüzyıllar önce kötü bir büyücü tarafından
              çalınmış ve büyülü dünyaya dağıtılmıştır.
            </p>
            <p className="text-lg">
              Patrick, büyülü yeteneklerini kullanarak, tehlikeli düşmanları alt etmeli, zorlu bulmacaları çözmeli ve
              farklı dünyalarda gizlenmiş altın parçalarını toplamalıdır. Her dünya, kendine özgü zorluklar ve
              sürprizlerle doludur.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun Özellikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl flex gap-4">
              <div className="text-4xl text-yellow-400">🎮</div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Klasik Platform Mekaniği</h3>
                <p>
                  Zıpla, koş, tırman ve engelleri aş. Leonatrix, sevdiğiniz klasik platform oyunlarının tüm heyecanını
                  sunar, ancak modern grafikler ve akıcı kontroller ile geliştirilmiştir.
                </p>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex gap-4">
              <div className="text-4xl text-yellow-400">✨</div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Büyülü Yetenekler</h3>
                <p>
                  Patrick'in benzersiz yeteneklerini kullanarak oyun deneyimini zenginleştirin. Altın Dokunuş, Şans
                  Kalkanı ve Gökkuşağı Zıplaması gibi yetenekler, bulmacaları çözmenize ve gizli alanları keşfetmenize
                  yardımcı olur.
                </p>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex gap-4">
              <div className="text-4xl text-yellow-400">🌍</div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Büyüleyici Dünyalar</h3>
                <p>
                  Yemyeşil ormanlardan, buzlu dağlara, volkanik mağaralardan, su altı krallıklarına kadar uzanan çeşitli
                  dünyaları keşfedin. Her dünya, kendine özgü düşmanlar, bulmacalar ve zorluklarla doludur.
                </p>
              </div>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl flex gap-4">
              <div className="text-4xl text-yellow-400">💎</div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Hazine Avı</h3>
                <p>
                  Altın paraları, değerli taşları ve gizli eşyaları toplayarak Patrick'in hazinesini büyütün. Özel
                  koleksiyon parçalarını bularak ekstra yetenekler ve sürpriz içerikler açın.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Character Gallery - NEW */}
        <div className="mb-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Karakter Galerisi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <Image
                src="/images/image1.jpg"
                alt="Patrick"
                width={300}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Patrick</h3>
              <p className="mb-2">
                Ana karakter, neşeli ve kurnaz bir leprechaun. Altın hazinesini bulmak için büyülü yeteneklerini
                kullanır.
              </p>
              <div className="flex gap-2">
                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full">Kahraman</span>
                <span className="bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded-full">Leprechaun</span>
              </div>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <Image
                src="/images/image2.jpg"
                alt="Kara Büyücü"
                width={300}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Kara Büyücü</h3>
              <p className="mb-2">Ana düşman, Patrick'in hazinesini çalan ve büyülü dünyaya dağıtan kötü büyücü.</p>
              <div className="flex gap-2">
                <span className="bg-purple-400/20 text-purple-400 text-xs px-2 py-1 rounded-full">Kötü</span>
                <span className="bg-red-400/20 text-red-400 text-xs px-2 py-1 rounded-full">Büyücü</span>
              </div>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <Image
                src="/images/image3.jpg"
                alt="Orman Perisi"
                width={300}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Orman Perisi</h3>
              <p className="mb-2">Patrick'in yardımcısı, ona yol gösterir ve zor durumlarda ipuçları verir.</p>
              <div className="flex gap-2">
                <span className="bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded-full">Dost</span>
                <span className="bg-blue-400/20 text-blue-400 text-xs px-2 py-1 rounded-full">Peri</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun Dünyaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <Image
                src="/images/image5.jpg"
                alt="Yemyeşil Orman"
                width={400}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Yemyeşil Orman</h3>
              <p>
                Patrick'in macerasının başladığı yer. Yemyeşil ağaçlar, renkli çiçekler ve dost canlısı orman
                sakinleriyle dolu. Ancak dikkatli olun, ormanın derinliklerinde tehlikeli yaratıklar pusuya yatmış
                olabilir.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <Image
                src="/images/image6.jpg"
                alt="Buzlu Dağlar"
                width={400}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Buzlu Dağlar</h3>
              <p>
                Karlı zirveler ve buz mağaralarıyla dolu zorlu bir bölge. Kaygan zeminler ve dondurucu rüzgarlar,
                Patrick'in ilerlemesini zorlaştırır. Burada, Buz Kraliçesi'nin koruduğu değerli bir hazine parçası
                gizlidir.
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <Image
                src="/images/image7.jpg"
                alt="Volkanik Mağaralar"
                width={400}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Volkanik Mağaralar</h3>
              <p>
                Lavlar ve ateş tuzaklarıyla dolu tehlikeli bir bölge. Yüksek sıcaklık, Patrick'in dayanıklılığını test
                eder. Ateş Ejderhası'nın koruduğu bu bölgede, en değerli hazine parçalarından biri saklanmaktadır.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun Görüntüleri</h2>
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
            <Image
              src="/images/image9.jpg"
              alt="Oyun Görüntüsü"
              width={300}
              height={200}
              className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
            />
            <Image
              src="/images/image10.jpg"
              alt="Oyun Görüntüsü"
              width={300}
              height={200}
              className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
            />
            <Image
              src="/images/image11.jpg"
              alt="Oyun Görüntüsü"
              width={300}
              height={200}
              className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
            />
            <Image
              src="/images/image12.jpg"
              alt="Oyun Görüntüsü"
              width={300}
              height={200}
              className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Community Highlights - NEW */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Topluluk Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4">Oyuncu Yaratımları</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Image
                  src="/images/image8.jpg"
                  alt="Oyuncu Yaratımı"
                  width={200}
                  height={200}
                  className="rounded-lg w-full h-32 object-cover"
                />
                <Image
                  src="/images/image9.jpg"
                  alt="Oyuncu Yaratımı"
                  width={200}
                  height={200}
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
              <p>
                Oyuncularımızın Leonatrix evreni için yarattığı harika fan art çalışmaları. Siz de kendi yaratımlarınızı
                #LeonatrixArt etiketiyle paylaşabilirsiniz!
              </p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4">Haftanın Rekorları</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-green-800/50 pb-2">
                  <span className="font-bold">En Yüksek Skor</span>
                  <div>
                    <span className="text-yellow-400 font-bold">125,780</span>
                    <span className="text-sm ml-2">GamerKral55</span>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-green-800/50 pb-2">
                  <span className="font-bold">En Hızlı Tamamlama</span>
                  <div>
                    <span className="text-yellow-400 font-bold">18:24</span>
                    <span className="text-sm ml-2">SpeedRunner42</span>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-green-800/50 pb-2">
                  <span className="font-bold">En Çok Altın</span>
                  <div>
                    <span className="text-yellow-400 font-bold">8,945</span>
                    <span className="text-sm ml-2">GoldHunter</span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold">En Çok Düşman</span>
                  <div>
                    <span className="text-yellow-400 font-bold">342</span>
                    <span className="text-sm ml-2">BattleMaster</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Sistem Gereksinimleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Minimum</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>İşletim Sistemi:</span>
                  <span>Android 8.0 veya iOS 12</span>
                </li>
                <li className="flex justify-between">
                  <span>İşlemci:</span>
                  <span>Quad-core 1.5 GHz</span>
                </li>
                <li className="flex justify-between">
                  <span>RAM:</span>
                  <span>2 GB</span>
                </li>
                <li className="flex justify-between">
                  <span>Depolama:</span>
                  <span>500 MB boş alan</span>
                </li>
                <li className="flex justify-between">
                  <span>İnternet:</span>
                  <span>İlk kurulum için gerekli</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Önerilen</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>İşletim Sistemi:</span>
                  <span>Android 10.0 veya iOS 14</span>
                </li>
                <li className="flex justify-between">
                  <span>İşlemci:</span>
                  <span>Octa-core 2.0 GHz</span>
                </li>
                <li className="flex justify-between">
                  <span>RAM:</span>
                  <span>4 GB</span>
                </li>
                <li className="flex justify-between">
                  <span>Depolama:</span>
                  <span>1 GB boş alan</span>
                </li>
                <li className="flex justify-between">
                  <span>İnternet:</span>
                  <span>Stabil bağlantı (çevrimiçi özellikler için)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Game Mechanics - NEW */}
        <div className="mt-16 bg-green-900/30 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">Oyun Mekanikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🏃</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Hareket Sistemi</h3>
              <p>
                Leonatrix'in akıcı hareket sistemi, klasik platform oyunlarının hissini modern kontrollerle birleştirir.
                Çift zıplama, duvar kayması ve hızlı koşu gibi hareketler oyuncuya tam kontrol sağlar.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🔮</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Yetenek Sistemi</h3>
              <p>
                Patrick'in yetenekleri, oyun ilerledikçe açılır ve geliştirilebilir. Her yetenek, belirli zorluklara
                karşı avantaj sağlar ve gizli alanları keşfetmenize yardımcı olur.
              </p>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-xl">
              <div className="text-4xl text-yellow-400 mb-4 text-center">🧩</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">Bulmaca Sistemi</h3>
              <p>
                Çevre etkileşimli bulmacalar, oyuncunun hem reflekslerini hem de zekasını test eder. Bulmacaları çözmek
                için Patrick'in yeteneklerini doğru zamanda ve yerde kullanmanız gerekir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

