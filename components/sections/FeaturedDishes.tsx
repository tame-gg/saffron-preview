'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IMAGES } from '@/lib/images'

export function FeaturedDishes() {
  return (
    <section className="bg-charcoal py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon
                points="40,5 70,20 70,60 40,75 10,60 10,20"
                fill="none"
                stroke="#FAF6EE"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-bg)" />
        </svg>
      </div>

      <div className="container-site relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label text-saffron mb-4">Signature Dishes</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-cream">
            From Our Kitchen
          </h2>
        </motion.div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {IMAGES.featured.map((dish, i) => (
            <motion.div
              key={dish.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute top-5 left-5 font-serif text-5xl font-light text-cream/15 leading-none select-none">
                  0{i + 1}
                </div>

                {/* Label at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-xl font-light text-cream group-hover:text-saffron transition-colors duration-300">
                    {dish.label}
                  </p>
                </div>
              </div>

              {/* Gold bottom accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <Link href="/menu" className="btn-outline-light">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
