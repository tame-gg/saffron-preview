'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PersianDivider } from '@/components/ui/PersianDivider'
import { RESTAURANT_CONFIG } from '@/lib/config'
import { IMAGES } from '@/lib/images'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export function About() {
  return (
    <section id="about" className="bg-cream relative overflow-hidden py-24 md:py-32">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="persian-bg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon
                points="30,2 35,10 44,10 38,16 40,25 30,20 20,25 22,16 16,10 25,10"
                fill="#D4A437"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persian-bg)" />
        </svg>
      </div>

      <div className="container-site relative">
        {/* Section label + heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className="section-label mb-4" variants={fadeUp}>
            Our Story
          </motion.p>
          <motion.h2 className="section-title max-w-2xl mx-auto" variants={fadeUp}>
            {RESTAURANT_CONFIG.about.shortBio}
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold border offset */}
            <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-saffron/30 z-0" />

            <div className="relative z-10 aspect-[4/5] overflow-hidden">
              <Image
                src={IMAGES.about.src}
                alt={IMAGES.about.alt}
                fill
                className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Small founder quote card */}
            <div className="absolute bottom-6 right-0 translate-x-4 bg-charcoal py-5 px-6 max-w-[220px] border-t border-saffron/60">
              <p className="font-serif text-lg font-light italic text-cream leading-snug">
                &ldquo;The sofreh is a promise.&rdquo;
              </p>
              <p className="font-sans text-xs text-saffron mt-2 tracking-widest uppercase">
                — Dara Shirazi
              </p>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Pull quote in Farsi */}
            <motion.div
              className="mb-10 border-l-2 border-saffron pl-6"
              variants={fadeUp}
            >
              <p
                className="farsi-text text-2xl sm:text-3xl font-light text-charcoal/80 leading-relaxed mb-2"
                lang="fa"
                dir="rtl"
              >
                {RESTAURANT_CONFIG.about.pullQuote}
              </p>
              <p className="font-serif text-sm italic text-saffron">
                {RESTAURANT_CONFIG.about.pullQuoteTranslation}
              </p>
            </motion.div>

            {/* Story paragraphs */}
            {RESTAURANT_CONFIG.about.story.map((paragraph, i) => (
              <motion.p
                key={i}
                className={`font-sans text-charcoal/70 leading-[1.85] ${
                  i < RESTAURANT_CONFIG.about.story.length - 1 ? 'mb-5' : ''
                } ${i === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:text-saffron first-letter:float-left first-letter:leading-none first-letter:mr-2 first-letter:mt-1' : ''}`}
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-charcoal/10"
              variants={fadeUp}
            >
              {[
                { number: '2019', label: 'Est.' },
                { number: '8', label: 'Herbs in Ghormeh Sabzi' },
                { number: '4hrs', label: 'Minimum Braise' },
              ].map(({ number, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-3xl sm:text-4xl font-light text-saffron">{number}</p>
                  <p className="font-sans text-xs text-charcoal/50 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20">
          <PersianDivider />
        </div>
      </div>
    </section>
  )
}
