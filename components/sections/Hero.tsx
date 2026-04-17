'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { AnimatedMandala } from '@/components/ui/AnimatedMandala'
import { ReservationModal } from '@/components/ui/ReservationModal'
import { RESTAURANT_CONFIG } from '@/lib/config'
import { IMAGES } from '@/lib/images'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Scroll-based parallax for background image
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 800], [0, 180])

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  // Mandala counter-parallax (opposite direction to image)
  const mandalaX = useTransform(springX, (v) => v * -0.5)
  const mandalaY = useTransform(springY, (v) => v * -0.5)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(((e.clientX / innerWidth) - 0.5) * 20)
      mouseY.set(((e.clientY / innerHeight) - 0.5) * 12)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    }),
  }

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[600px] max-h-[1100px] flex flex-col items-center justify-center overflow-hidden bg-charcoal"
        aria-label="Hero section"
      >
        {/* Background image with scroll + mouse parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute"
            style={{
              top: '-12%',
              left: '-6%',
              right: '-6%',
              bottom: '-12%',
              y: imageY,
              x: springX,
            }}
          >
            <Image
              src={IMAGES.hero.src}
              alt={IMAGES.hero.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>

          {/* Layered dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
          <div className="absolute inset-0 bg-charcoal/25" />
        </div>

        {/* Animated Persian mandala — the signature "wow" element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[min(90vh,90vw)] max-w-4xl text-saffron"
            style={{ x: mandalaX, y: mandalaY }}
          >
            <AnimatedMandala opacity={0.09} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Location label */}
          <motion.p
            className="section-label text-saffron/80 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            {RESTAURANT_CONFIG.address.city}, {RESTAURANT_CONFIG.address.state}
          </motion.p>

          {/* Main heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] font-light text-cream leading-none tracking-tight mb-2">
              {RESTAURANT_CONFIG.name}
            </h1>
            <p
              className="farsi-text text-[clamp(1.4rem,3.5vw,2.8rem)] text-saffron font-light tracking-widest"
              lang="fa"
              dir="rtl"
            >
              {RESTAURANT_CONFIG.nameFarsi}
            </p>
          </motion.div>

          {/* Divider line */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            <div className="w-16 h-px bg-saffron/50" />
            <div className="w-1.5 h-1.5 bg-saffron rotate-45" />
            <div className="w-16 h-px bg-saffron/50" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-serif text-xl sm:text-2xl font-light italic text-cream/75 mb-10 max-w-lg mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.75}
          >
            {RESTAURANT_CONFIG.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary min-w-[200px]"
            >
              Reserve a Table
            </button>
            <Link href="/menu" className="btn-outline-light min-w-[200px]">
              View the Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/40">
            Scroll
          </span>
          <div className="scroll-indicator">
            <svg className="w-5 h-5 text-saffron/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </motion.div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
