"use client"

import { useEffect, useState } from "react"

interface Coin {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
}

export function FloatingCoins() {
  const [coins, setCoins] = useState<Coin[]>([])

  useEffect(() => {
    // Create initial coins
    const initialCoins: Coin[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 15,
      speed: 0.1 + Math.random() * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: 0.2 + Math.random() * 0.5,
    }))

    setCoins(initialCoins)

    // Animation interval
    const interval = setInterval(() => {
      setCoins((prevCoins) =>
        prevCoins.map((coin) => ({
          ...coin,
          y: (coin.y + coin.speed) % 100,
          rotation: (coin.rotation + coin.rotationSpeed) % 360,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute w-6 h-6 text-yellow-400"
          style={{
            left: `${coin.x}%`,
            top: `${coin.y}%`,
            fontSize: `${coin.size}px`,
            transform: `rotate(${coin.rotation}deg)`,
            opacity: 0.3,
          }}
        >
          💰
        </div>
      ))}
    </div>
  )
}

