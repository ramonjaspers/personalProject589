export interface CursorOptions {
  radius?: number
  delay?: number
}

export function setupCursorGlow(options: CursorOptions = {}) {
  const { radius = 2160, delay = 0.1 } = options
  const root = document.documentElement

  root.style.setProperty('--cursor-size', `${radius}px`)

  let targetX = window.innerWidth / 2
  let targetY = window.innerHeight / 2
  let currentX = targetX
  let currentY = targetY

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX
    targetY = e.clientY
  })

  function animate() {
    currentX += (targetX - currentX) * delay
    currentY += (targetY - currentY) * delay

    root.style.setProperty('--cursor-x', `${currentX}px`)
    root.style.setProperty('--cursor-y', `${currentY}px`)

    requestAnimationFrame(animate)
  }

  animate()
} 