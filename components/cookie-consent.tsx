"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")

    // If no choice has been made, show the popup
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="bg-green-900/95 backdrop-blur-sm border border-yellow-500/30 rounded-lg shadow-xl max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-yellow-400">Çerez Bildirimi</h3>
          <button onClick={declineCookies} className="text-white hover:text-yellow-400">
            <X size={24} />
            <span className="sr-only">Kapat</span>
          </button>
        </div>

        <div className="mb-6">
          <p className="mb-3">
            Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır. Çerezler, web sitemizi nasıl
            kullandığınız hakkında bilgi toplar ve tercihlerinizi hatırlamamıza yardımcı olur.
          </p>
          <p>
            "Kabul Et" düğmesine tıklayarak, çerezlerin kullanımını kabul etmiş olursunuz. Çerezlerin kullanımı hakkında
            daha fazla bilgi için gizlilik politikamızı inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={declineCookies}
            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-yellow-500 text-green-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}

