"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-green-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Leonatrix Logo" width={60} height={60} className="object-contain" />
          <span className="text-2xl font-bold text-yellow-400">Leonatrix</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/sirket-hakkinda" className="hover:text-yellow-400 transition-colors">
            Şirket Hakkında
          </Link>
          <Link href="/oyun-hakkinda" className="hover:text-yellow-400 transition-colors">
            Oyun Hakkında
          </Link>
          <Link href="/nasil-oynanir" className="hover:text-yellow-400 transition-colors">
            Nasıl Oynanır
          </Link>
          <Link href="/guncellemeler" className="hover:text-yellow-400 transition-colors">
            Güncellemeler
          </Link>
          <Link href="/iletisim" className="hover:text-yellow-400 transition-colors">
            İletişim
          </Link>
        </nav>

        <button className="md:hidden text-2xl text-yellow-400" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors py-2 border-b border-green-800"
              onClick={toggleMenu}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/sirket-hakkinda"
              className="hover:text-yellow-400 transition-colors py-2 border-b border-green-800"
              onClick={toggleMenu}
            >
              Şirket Hakkında
            </Link>
            <Link
              href="/oyun-hakkinda"
              className="hover:text-yellow-400 transition-colors py-2 border-b border-green-800"
              onClick={toggleMenu}
            >
              Oyun Hakkında
            </Link>
            <Link
              href="/nasil-oynanir"
              className="hover:text-yellow-400 transition-colors py-2 border-b border-green-800"
              onClick={toggleMenu}
            >
              Nasıl Oynanır
            </Link>
            <Link
              href="/guncellemeler"
              className="hover:text-yellow-400 transition-colors py-2 border-b border-green-800"
              onClick={toggleMenu}
            >
              Güncellemeler
            </Link>
            <Link href="/iletisim" className="hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

