'use client'

import { motion } from 'framer-motion'

interface PersianDividerProps {
  className?: string
  light?: boolean
}

export function PersianDivider({ className = '', light = false }: PersianDividerProps) {
  const color = light ? 'rgba(250,246,238,0.35)' : 'rgba(212,164,55,0.45)'
  const starColor = light ? 'rgba(250,246,238,0.6)' : '#D4A437'

  return (
    <motion.div
      className={`flex items-center justify-center gap-4 py-2 ${className}`}
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 24"
        className="w-full max-w-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left line */}
        <line x1="0" y1="12" x2="158" y2="12" stroke={color} strokeWidth="0.75" />

        {/* Small diamond left */}
        <polygon points="162,12 168,8 174,12 168,16" fill={starColor} opacity="0.7" />

        {/* Center 8-pointed star */}
        <g transform="translate(200, 12)">
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i / 16) * 2 * Math.PI - Math.PI / 2
            const r = i % 2 === 0 ? 9 : 3.8
            return {
              x: r * Math.cos(angle),
              y: r * Math.sin(angle),
            }
          })
            .map((p) => `${p.x},${p.y}`)
            .join(' ')}
          <polygon
            points={Array.from({ length: 16 }, (_, i) => {
              const angle = (i / 16) * 2 * Math.PI - Math.PI / 2
              const r = i % 2 === 0 ? 9 : 3.8
              return `${200 + r * Math.cos(angle)},${12 + r * Math.sin(angle)}`
            }).join(' ')}
            fill={starColor}
          />
        </g>

        {/* Small diamond right */}
        <polygon points="226,12 232,8 238,12 232,16" fill={starColor} opacity="0.7" />

        {/* Right line */}
        <line x1="242" y1="12" x2="400" y2="12" stroke={color} strokeWidth="0.75" />
      </svg>
    </motion.div>
  )
}
