'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PersianDivider } from '@/components/ui/PersianDivider'
import { MENU_DATA, type MenuCategory, type MenuItem } from '@/lib/menu-data'

const DIETARY_ICONS: Record<string, { symbol: string; label: string; color: string }> = {
  vegetarian: { symbol: 'V', label: 'Vegetarian', color: 'text-emerald-600' },
  vegan: { symbol: 'Ve', label: 'Vegan', color: 'text-emerald-700' },
  'gluten-free': { symbol: 'GF', label: 'Gluten-Free', color: 'text-amber-700' },
  'contains-nuts': { symbol: 'N', label: 'Contains Nuts', color: 'text-orange-700' },
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      whileHover={{
        y: -3,
        boxShadow: '0 12px 40px rgba(26,22,20,0.12)',
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`group bg-cream border border-charcoal/8 p-6 sm:p-8 relative overflow-hidden ${
        item.featured ? 'ring-1 ring-saffron/30' : ''
      }`}
    >
      {/* Featured badge */}
      {item.featured && (
        <div className="absolute top-0 right-0 w-[56px] h-[56px] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[56px] border-l-transparent border-t-[56px] border-t-saffron" />
          <span className="absolute top-[10px] right-[-2px] w-10 text-center text-[8px] font-sans font-semibold tracking-widest uppercase text-charcoal rotate-45 leading-none">
            Chef
          </span>
        </div>
      )}

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          {/* Names */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
            <h3 className="font-serif text-xl font-light text-charcoal group-hover:text-saffron transition-colors duration-300">
              {item.name}
            </h3>
            {item.nameFarsi && (
              <span
                className="farsi-text text-base text-charcoal/40"
                lang="fa"
                dir="rtl"
              >
                {item.nameFarsi}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed">
            {item.description}
          </p>

          {/* Dietary tags */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.dietary.map((tag) => {
                const d = DIETARY_ICONS[tag]
                if (!d) return null
                return (
                  <span
                    key={tag}
                    title={d.label}
                    className={`font-sans text-[10px] tracking-wider uppercase border px-2 py-0.5 ${d.color} border-current opacity-60`}
                  >
                    {d.symbol}
                  </span>
                )
              })}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="font-serif text-xl font-light text-saffron whitespace-nowrap pt-0.5">
          {item.price}
        </div>
      </div>
    </motion.div>
  )
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-28">
      {/* Category header */}
      <motion.div
        className="text-center mb-10 md:mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-center gap-5 mb-3">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal">
            {category.name}
          </h2>
          <span
            className="farsi-text text-2xl sm:text-3xl text-saffron/70"
            lang="fa"
            dir="rtl"
          >
            {category.nameFarsi}
          </span>
        </div>
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-charcoal/40">
          {category.subtitle}
        </p>
      </motion.div>

      {/* Items grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        {category.items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [tabsStuck, setTabsStuck] = useState(false)

  useEffect(() => {
    const el = tabsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setTabsStuck(!entry.isIntersecting),
      { threshold: 1, rootMargin: '-80px 0px 0px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Track scroll position to update active tab
  useEffect(() => {
    const reversedCats = [...MENU_DATA].reverse()
    const handleScroll = () => {
      for (const category of reversedCats) {
        const el = document.getElementById(category.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
            setActiveCategory(category.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToCategory(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setActiveCategory(id)
  }

  return (
    <main className="min-h-screen">
      {/* Page hero */}
      <div className="bg-charcoal pt-36 pb-20 text-center relative overflow-hidden">
        {/* Subtle divider-inspired background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="menu-bg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" fill="none" stroke="#FAF6EE" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#menu-bg)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="section-label text-saffron mb-4">The Menu</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-3">
            A Persian Table
          </h1>
          <p className="font-serif text-lg italic text-cream/50 max-w-sm mx-auto">
            Each dish a memory, each season a new expression
          </p>
        </motion.div>

        <PersianDivider className="mt-10 max-w-sm mx-auto" light />
      </div>

      {/* Sticky category tabs */}
      <div
        ref={tabsRef}
        className={`sticky top-[78px] z-30 bg-cream border-b transition-shadow duration-300 ${
          tabsStuck ? 'shadow-md shadow-charcoal/10' : 'border-charcoal/8'
        }`}
      >
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto no-scrollbar -mx-5 sm:mx-0 px-5 sm:px-0">
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex flex-col items-center gap-0.5 px-5 py-4 whitespace-nowrap font-sans text-xs tracking-[0.18em] uppercase transition-all duration-300 border-b-2 flex-shrink-0 min-h-[44px] ${
                  activeCategory === cat.id
                    ? 'border-saffron text-charcoal'
                    : 'border-transparent text-charcoal/40 hover:text-charcoal/70 hover:border-charcoal/20'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`farsi-text text-[10px] transition-opacity duration-300 ${
                    activeCategory === cat.id ? 'opacity-70' : 'opacity-30'
                  }`}
                  lang="fa"
                  dir="rtl"
                >
                  {cat.nameFarsi}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dietary key */}
      <div className="bg-cream-dark/30 border-b border-charcoal/5">
        <div className="container-site py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {Object.entries(DIETARY_ICONS).map(([, d]) => (
              <span key={d.label} className={`font-sans text-[10px] tracking-wide ${d.color} opacity-70`}>
                <span className="font-medium border border-current px-1.5 py-px mr-1.5">{d.symbol}</span>
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <div className="container-site py-16 md:py-24">
        <div className="space-y-20 md:space-y-28">
          {MENU_DATA.map((category, i) => (
            <div key={category.id}>
              <CategorySection category={category} />
              {i < MENU_DATA.length - 1 && (
                <div className="mt-16 md:mt-20">
                  <PersianDivider />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-20 pt-10 border-t border-charcoal/8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs text-charcoal/40 leading-relaxed max-w-lg mx-auto">
            Menu reflects current seasonal offerings and may change without notice.
            Please inform your server of any allergies. Consuming raw or undercooked foods
            may increase risk of foodborne illness.{' '}
            <span className="text-charcoal/60">
              An 18% gratuity is added to parties of 6 or more.
            </span>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
