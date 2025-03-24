"use client"

import { useEffect, useRef, useState } from "react"

export function CoinGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Game variables
    let animationFrameId: number
    let playerX = canvas.width / 2
    const playerY = canvas.height - 60
    const playerWidth = 50
    const playerHeight = 60
    const playerSpeed = 5
    const keys = { left: false, right: false }
    let touchX: number | null = null
    let coins: Coin[] = []
    let lastCoinTime = 0
    const coinInterval = 1000 // ms between coin spawns

    // Load images
    const playerImage = new Image()
    const coinImage = new Image()

    // Track image loading
    let loadedImages = 0
    const totalImages = 2

    const onImageLoad = () => {
      loadedImages++
      if (loadedImages === totalImages) {
        setImagesLoaded(true)
        // Draw start screen once images are loaded
        drawStartScreen()
      }
    }

    const onImageError = (e: ErrorEvent) => {
      console.error("Error loading image:", e)
      // Use fallback colors instead of images
      drawStartScreen(true)
    }

    // Set up image loading
    playerImage.onload = onImageLoad
    playerImage.onerror = onImageError as any
    coinImage.onload = onImageLoad
    coinImage.onerror = onImageError as any

    // Set image sources - use simple colored rectangles as fallback
    playerImage.src = "/images/patrick.png"
    coinImage.src = "/images/coin.png"
    playerImage.crossOrigin = "anonymous"
    coinImage.crossOrigin = "anonymous"

    // Coin class
    interface Coin {
      x: number
      y: number
      speed: number
      size: number
      collected: boolean
    }

    // Handle keyboard input
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.left = true
      if (e.key === "ArrowRight") keys.right = true
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.left = false
      if (e.key === "ArrowRight") keys.right = false
    }

    // Handle touch input
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchX = touch.clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchX === null) return

      const touch = e.touches[0]
      const currentX = touch.clientX

      if (currentX < touchX - 10) {
        keys.left = true
        keys.right = false
      } else if (currentX > touchX + 10) {
        keys.right = true
        keys.left = false
      }

      touchX = currentX
    }

    const handleTouchEnd = () => {
      touchX = null
      keys.left = false
      keys.right = false
    }

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchmove", handleTouchMove)
    canvas.addEventListener("touchend", handleTouchEnd)

    // Create a new coin
    const createCoin = () => {
      const size = 30
      const x = Math.random() * (canvas.width - size)
      const coin: Coin = {
        x,
        y: -size,
        speed: 2 + Math.random() * 2,
        size,
        collected: false,
      }
      coins.push(coin)
    }

    // Game loop
    const gameLoop = (timestamp: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create coins at intervals
      if (timestamp - lastCoinTime > coinInterval) {
        createCoin()
        lastCoinTime = timestamp
      }

      // Update player position
      if (keys.left && playerX > 0) playerX -= playerSpeed
      if (keys.right && playerX < canvas.width - playerWidth) playerX += playerSpeed

      // Draw player (with fallback)
      try {
        if (playerImage.complete && playerImage.naturalHeight !== 0) {
          ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight)
        } else {
          // Fallback: draw a green rectangle for the player
          ctx.fillStyle = "#4ade80"
          ctx.fillRect(playerX, playerY, playerWidth, playerHeight)
        }
      } catch (error) {
        // Fallback if drawImage fails
        ctx.fillStyle = "#4ade80"
        ctx.fillRect(playerX, playerY, playerWidth, playerHeight)
      }

      // Update and draw coins
      coins.forEach((coin, index) => {
        coin.y += coin.speed

        // Check for collision with player
        if (
          !coin.collected &&
          coin.y + coin.size > playerY &&
          coin.y < playerY + playerHeight &&
          coin.x + coin.size > playerX &&
          coin.x < playerX + playerWidth
        ) {
          coin.collected = true
          setScore((prevScore) => prevScore + 1)
        }

        // Draw coin if not collected (with fallback)
        if (!coin.collected) {
          try {
            if (coinImage.complete && coinImage.naturalHeight !== 0) {
              ctx.drawImage(coinImage, coin.x, coin.y, coin.size, coin.size)
            } else {
              // Fallback: draw a yellow circle for the coin
              ctx.fillStyle = "#fbbf24"
              ctx.beginPath()
              ctx.arc(coin.x + coin.size / 2, coin.y + coin.size / 2, coin.size / 2, 0, Math.PI * 2)
              ctx.fill()
            }
          } catch (error) {
            // Fallback if drawImage fails
            ctx.fillStyle = "#fbbf24"
            ctx.beginPath()
            ctx.arc(coin.x + coin.size / 2, coin.y + coin.size / 2, coin.size / 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        // Remove coins that are off screen or collected
        if (coin.y > canvas.height || coin.collected) {
          coins.splice(index, 1)
        }
      })

      // Continue animation
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    // Start game function
    const startGame = () => {
      setGameStarted(true)
      setScore(0)
      coins = []
      playerX = canvas.width / 2
      lastCoinTime = 0
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    // Draw start screen
    const drawStartScreen = (useFallback = false) => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#f0c420"
      ctx.font = "24px Arial"
      ctx.textAlign = "center"
      ctx.fillText("Oynamak için tıkla!", canvas.width / 2, canvas.height / 2)

      // Add click event to start game
      const handleClick = () => {
        canvas.removeEventListener("click", handleClick)
        startGame()
      }

      canvas.addEventListener("click", handleClick)
    }

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">Skor: {score}</div>
      <canvas
        ref={canvasRef}
        className="w-full h-[300px] bg-gradient-to-b from-purple-800/50 to-green-800/50 rounded-lg cursor-pointer"
      />
      <p className="mt-4 text-sm text-center">
        {isMobile
          ? "Parmağınızı sola veya sağa kaydırarak Patrick'i hareket ettirin"
          : "Sol ve sağ ok tuşlarını kullanarak Patrick'i hareket ettirin"}
      </p>
    </div>
  )
}

