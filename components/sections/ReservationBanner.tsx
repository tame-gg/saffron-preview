'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ReservationModal } from '@/components/ui/ReservationModal'
import { RESTAURANT_CONFIG } from '@/lib/config'

export function ReservationBanner() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-saffron py-20 md:py-24 relative overflow-hidden">
        {/* Decorative pattern behind */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diamond-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="#1A1614" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-grid)" />
          </svg>
        </div>

        <div className="container-site relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal/60 mb-4">
              Tuesday through Sunday
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal mb-4">
              Join Us for Dinner
            </h2>
            <p className="font-serif text-lg italic text-charcoal/60 mb-10 max-w-md mx-auto">
              Reserve your table and let us take care of everything else.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-charcoal-light hover:shadow-xl active:scale-[0.98] min-w-[200px]"
              >
                Reserve a Table
              </button>
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/30 text-charcoal font-sans font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-charcoal hover:bg-charcoal/5 active:scale-[0.98] min-w-[200px]"
              >
                {RESTAURANT_CONFIG.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
