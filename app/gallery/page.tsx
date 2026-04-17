'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PersianDivider } from '@/components/ui/PersianDivider'
import { IMAGES } from '@/lib/images'
import { RESTAURANT_CONFIG } from '@/lib/config'

export default function GalleryPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  function openLightbox(src: string, alt: string) {
    setLightboxSrc(src)
    setLightboxAlt(alt)
  }

  function closeLightbox() {
    setLightboxSrc(null)
    setLightboxAlt('')
  }

  return (
    <main className="min-h-screen">
      {/* Page hero */}
      <div className="bg-charcoal pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gallery-bg" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect x="18" y="18" width="14" height="14" fill="none" stroke="#FAF6EE" strokeWidth="0.5" transform="rotate(45, 25, 25)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gallery-bg)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="section-label text-saffron mb-4">Gallery</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-3">
            Seen & Savored
          </h1>
          <p className="font-serif text-lg italic text-cream/50 max-w-sm mx-auto">
            A visual journey through the kitchen and dining room
          </p>
        </motion.div>

        <PersianDivider className="mt-10 max-w-sm mx-auto" light />
      </div>

      {/* Gallery grid */}
      <section className="container-site py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[260px]">
          {IMAGES.gallery.map((image, i) => (
            <motion.button
              key={image.src}
              className={`relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${image.wide && image.tall
                ? 'col-span-2 row-span-2'
                : image.wide
                  ? 'col-span-2'
                  : image.tall
                    ? 'row-span-2'
                    : 'col-span-1'
                }`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 4) * 0.08,
              }}
              onClick={() => openLightbox(image.src, image.alt)}
              aria-label={`View full size: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes={
                  image.wide
                    ? '(max-width: 768px) 100vw, 50vw'
                    : '(max-width: 768px) 50vw, 25vw'
                }
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 border border-cream/60 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-16">
          <PersianDivider />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif text-2xl font-light text-charcoal/70 mb-2">
            Follow our kitchen on Instagram
          </p>
          <a
            href={RESTAURANT_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-saffron hover:text-saffron-dark transition-colors tracking-widest"
          >
            {RESTAURANT_CONFIG.contact.instagram}
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <>
            <motion.div
              className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeLightbox}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-4xl aspect-[4/3] overflow-hidden"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </motion.div>

              <button
                onClick={closeLightbox}
                className="absolute top-5 right-6 text-cream/60 hover:text-cream text-3xl leading-none transition-colors"
                aria-label="Close image"
              >
                ×
              </button>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-sans text-xs text-cream/40 max-w-md px-4">
                {lightboxAlt}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
