'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ReservationModal } from '@/components/ui/ReservationModal'
import { RESTAURANT_CONFIG } from '@/lib/config'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-charcoal/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none group">
              <span className="font-serif text-xl font-light tracking-[0.18em] uppercase text-cream transition-colors duration-300 group-hover:text-saffron">
                {RESTAURANT_CONFIG.name}
              </span>
              <span
                className="farsi-text text-sm text-saffron/80 tracking-wide mt-0.5"
                lang="fa"
                dir="rtl"
              >
                {RESTAURANT_CONFIG.nameFarsi}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : (href.startsWith('/#') ? false : pathname.startsWith(href))
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 py-1 group ${
                      isActive ? 'text-saffron' : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-saffron transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary py-3 px-6"
              >
                Reserve a Table
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="w-6 h-px bg-cream block"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-px bg-cream block"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-px bg-cream block"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-charcoal/60 z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-charcoal z-40 lg:hidden flex flex-col pt-24 pb-10 px-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              {/* Gold top line */}
              <div className="absolute top-20 left-8 right-8 h-px bg-saffron/30" />

              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={href}
                      className="block font-serif text-3xl font-light text-cream/80 hover:text-cream py-3 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <button
                  onClick={() => { setMobileOpen(false); setModalOpen(true) }}
                  className="btn-primary w-full"
                >
                  Reserve a Table
                </button>
                <p className="font-sans text-xs text-cream/30 text-center mt-4">
                  {RESTAURANT_CONFIG.contact.phone}
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
