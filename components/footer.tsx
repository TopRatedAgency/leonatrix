import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-green-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Leonatrix Logo" width={50} height={50} className="object-contain" />
              <span className="text-xl font-bold text-yellow-400">Leonatrix</span>
            </div>
            <p className="max-w-md">
              Leonatrix, büyülü bir dünyada geçen heyecan verici bir platform oyunudur. Patrick ile birlikte kaybolmuş
              altınların peşine düşün!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">İletişim</h3>
            <p className="flex items-start gap-2">
              <span className="text-yellow-400">📍</span>
              Cumhuriyet, Bizim Sk. No:3/A, 34186 Bahçelievler/İstanbul
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-400">📞</span>
              +90 242 212 09 22
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-2xl hover:text-yellow-400">
                📱
              </a>
              <a href="#" className="text-2xl hover:text-yellow-400">
                💻
              </a>
              <a href="#" className="text-2xl hover:text-yellow-400">
                📧
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>© 2025 Leonatrix. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

