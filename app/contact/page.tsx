'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PersianDivider } from '@/components/ui/PersianDivider'
import { ReservationModal } from '@/components/ui/ReservationModal'
import { RESTAURANT_CONFIG } from '@/lib/config'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen">
        {/* Page hero */}
        <div className="bg-charcoal pt-36 pb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-bg" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
                  <circle cx="35" cy="35" r="25" fill="none" stroke="#FAF6EE" strokeWidth="0.4" />
                  <polygon points="35,12 56,24 56,46 35,58 14,46 14,24" fill="none" stroke="#FAF6EE" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-bg)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="section-label text-saffron mb-4">Find Us</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-3">
              Visit {RESTAURANT_CONFIG.name}
            </h1>
            <p className="font-serif text-lg italic text-cream/50 max-w-sm mx-auto">
              {RESTAURANT_CONFIG.address.street}, {RESTAURANT_CONFIG.address.city}, {RESTAURANT_CONFIG.address.state}
            </p>
          </motion.div>

          <PersianDivider className="mt-10 max-w-sm mx-auto" light />
        </div>

        {/* Map + Info */}
        <section className="container-site py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Info column */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Address */}
              <motion.div variants={fadeUp}>
                <h2 className="section-label text-saffron mb-4">Address</h2>
                <address className="not-italic">
                  <p className="font-serif text-2xl font-light text-charcoal mb-1">
                    {RESTAURANT_CONFIG.address.street}
                  </p>
                  <p className="font-sans text-charcoal/60">
                    {RESTAURANT_CONFIG.address.city},{' '}
                    {RESTAURANT_CONFIG.address.state}{' '}
                    {RESTAURANT_CONFIG.address.zip}
                  </p>
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_CONFIG.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 font-sans text-xs tracking-widest uppercase text-saffron hover:text-saffron-dark transition-colors duration-200"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </motion.div>

              {/* Hours */}
              <motion.div variants={fadeUp}>
                <h2 className="section-label text-saffron mb-4">Hours</h2>
                <ul className="space-y-2.5">
                  {RESTAURANT_CONFIG.hours.map(({ days, hours }) => (
                    <li key={days} className="flex justify-between items-baseline gap-4">
                      <span className="font-sans text-sm text-charcoal/60">{days}</span>
                      <span
                        className={`font-sans text-sm whitespace-nowrap ${
                          hours === 'Closed' ? 'text-charcoal/30' : 'text-charcoal'
                        }`}
                      >
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={fadeUp}>
                <h2 className="section-label text-saffron mb-4">Contact</h2>
                <div className="space-y-2">
                  <a
                    href={`tel:${RESTAURANT_CONFIG.contact.phone}`}
                    className="flex items-center gap-3 font-sans text-sm text-charcoal/70 hover:text-charcoal transition-colors duration-200 group"
                  >
                    <svg className="w-4 h-4 text-saffron/60 group-hover:text-saffron transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {RESTAURANT_CONFIG.contact.phone}
                  </a>
                  <a
                    href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                    className="flex items-center gap-3 font-sans text-sm text-charcoal/70 hover:text-charcoal transition-colors duration-200 group break-all"
                  >
                    <svg className="w-4 h-4 text-saffron/60 group-hover:text-saffron transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {RESTAURANT_CONFIG.contact.email}
                  </a>
                </div>
              </motion.div>

              {/* Reservation CTA */}
              <motion.div variants={fadeUp}>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary w-full sm:w-auto"
                >
                  Reserve a Table
                </button>
              </motion.div>
            </motion.div>

            {/* Map column */}
            <motion.div
              className="lg:col-span-3 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px] overflow-hidden border border-charcoal/10">
                <iframe
                  src={RESTAURANT_CONFIG.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${RESTAURANT_CONFIG.name} at ${RESTAURANT_CONFIG.address.full}`}
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <PersianDivider />
          </div>

          {/* Private events */}
          <motion.div
            className="mt-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label text-saffron mb-4">Private Events</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Host Your Gathering Here
            </h2>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-8">
              {RESTAURANT_CONFIG.name} is available for private dining events, corporate dinners, and
              intimate celebrations. Our private room seats up to 24 guests and can be configured
              for both family-style and plated service.
            </p>
            <a
              href={`mailto:${RESTAURANT_CONFIG.contact.email}?subject=Private%20Dining%20Inquiry`}
              className="btn-outline-dark"
            >
              Inquire About Private Dining
            </a>
          </motion.div>
        </section>
      </main>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
