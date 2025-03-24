import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonatrix - Altın Peşinde Büyülü Bir Macera",
  description:
    "Leonatrix, büyülü bir dünyada geçen heyecan verici bir platform oyunudur. Patrick ile birlikte kaybolmuş altınların peşine düşün!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-green-900 text-white relative`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}

