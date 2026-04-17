'use client'

import { motion } from 'framer-motion'

// Generates evenly-spaced diamond shapes along a circle of given radius
function RingDiamonds({
  count,
  radius,
  size,
  className,
}: {
  count: number
  radius: number
  size: number
  className?: string
}) {
  return (
    <g className={className}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2
        const cx = 400 + radius * Math.cos(angle)
        const cy = 400 + radius * Math.sin(angle)
        const rotateDeg = (i / count) * 360
        const pts = [
          `${cx},${cy - size}`,
          `${cx + size * 0.45},${cy}`,
          `${cx},${cy + size}`,
          `${cx - size * 0.45},${cy}`,
        ].join(' ')
        return (
          <polygon
            key={i}
            points={pts}
            transform={`rotate(${rotateDeg}, ${cx}, ${cy})`}
          />
        )
      })}
    </g>
  )
}

// Generates evenly-spaced small 6-pointed stars along a circle
function RingStars({
  count,
  radius,
  size,
  className,
}: {
  count: number
  radius: number
  size: number
  className?: string
}) {
  return (
    <g className={className}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2
        const cx = 400 + radius * Math.cos(angle)
        const cy = 400 + radius * Math.sin(angle)

        // 6-pointed star: 12 points alternating outer/inner radius
        const outerR = size
        const innerR = size * 0.45
        const pts = Array.from({ length: 12 }, (_, j) => {
          const a = (j / 12) * 2 * Math.PI - Math.PI / 2
          const r = j % 2 === 0 ? outerR : innerR
          return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
        }).join(' ')

        return <polygon key={i} points={pts} />
      })}
    </g>
  )
}

// Center 8-pointed star (Shamseh)
function Shamseh({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const innerR = r * 0.38
  const pts = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * 2 * Math.PI - Math.PI / 2
    const radius = i % 2 === 0 ? r : innerR
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
  }).join(' ')

  return <polygon points={pts} />
}

// Decorative ring of small squares at 45°
function RingSquares({
  count,
  radius,
  size,
  className,
}: {
  count: number
  radius: number
  size: number
  className?: string
}) {
  return (
    <g className={className}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2
        const cx = 400 + radius * Math.cos(angle)
        const cy = 400 + radius * Math.sin(angle)
        const s = size / 2
        return (
          <rect
            key={i}
            x={cx - s}
            y={cy - s}
            width={size}
            height={size}
            transform={`rotate(45, ${cx}, ${cy})`}
          />
        )
      })}
    </g>
  )
}

interface AnimatedMandalaProps {
  className?: string
  opacity?: number
}

export function AnimatedMandala({ className = '', opacity = 0.07 }: AnimatedMandalaProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outermost ring — 28 small squares */}
        <RingSquares count={28} radius={370} size={10} className="mandala-ring-1" />

        {/* Outer diamond ring — 20 diamonds */}
        <RingDiamonds count={20} radius={320} size={14} className="mandala-ring-1" />

        {/* Outer star ring — 12 6-pointed stars */}
        <RingStars count={12} radius={265} size={14} className="mandala-ring-2" />

        {/* Middle diamond ring — 16 diamonds */}
        <RingDiamonds count={16} radius={210} size={12} className="mandala-ring-2" />

        {/* Inner star ring — 8 6-pointed stars */}
        <RingStars count={8} radius={155} size={18} className="mandala-ring-3" />

        {/* Inner diamond ring — 12 small diamonds */}
        <RingDiamonds count={12} radius={110} size={10} className="mandala-ring-3" />

        {/* Center Shamseh — 8-pointed star, counter-rotation */}
        <g className="mandala-ring-4">
          <Shamseh cx={400} cy={400} r={68} />
        </g>

        {/* Center dot */}
        <circle cx="400" cy="400" r="8" />
      </svg>
    </motion.div>
  )
}
