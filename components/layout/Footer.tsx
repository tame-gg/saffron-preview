import Link from 'next/link'
import { RESTAURANT_CONFIG } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream/60">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent" />

      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <p className="font-serif text-xl font-light tracking-[0.18em] uppercase text-cream">
                {RESTAURANT_CONFIG.name}
              </p>
              <p
                className="farsi-text text-saffron text-base mt-1"
                lang="fa"
                dir="rtl"
              >
                {RESTAURANT_CONFIG.nameFarsi}
              </p>
            </div>
            <p className="font-sans text-sm text-cream/40 leading-relaxed max-w-xs">
              {RESTAURANT_CONFIG.taglineSecondary}. Dinner service
              Tuesday through Sunday.
            </p>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="section-label text-saffron mb-5">Hours</h3>
            <ul className="space-y-2">
              {RESTAURANT_CONFIG.hours.map(({ days, hours }) => (
                <li key={days} className="flex justify-between gap-4 font-sans text-sm">
                  <span className="text-cream/50">{days}</span>
                  <span className={hours === 'Closed' ? 'text-cream/30' : 'text-cream/70'}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="section-label text-saffron mb-5">Find Us</h3>
            <address className="not-italic font-sans text-sm space-y-2 text-cream/60">
              <p className="text-cream/80">{RESTAURANT_CONFIG.address.street}</p>
              <p>{RESTAURANT_CONFIG.address.city}, {RESTAURANT_CONFIG.address.state} {RESTAURANT_CONFIG.address.zip}</p>
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.phone}`}
                className="block mt-4 hover:text-saffron transition-colors duration-200"
              >
                {RESTAURANT_CONFIG.contact.phone}
              </a>
              <a
                href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                className="block hover:text-saffron transition-colors duration-200 break-all"
              >
                {RESTAURANT_CONFIG.contact.email}
              </a>
            </address>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-saffron transition-colors duration-200"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-cream/20">·</span>
              <a
                href={RESTAURANT_CONFIG.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-saffron transition-colors duration-200"
                aria-label="Yelp"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/25">
            © {year} {RESTAURANT_CONFIG.name}. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Footer navigation">
            {[
              { href: '/menu', label: 'Menu' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-xs tracking-[0.15em] uppercase text-cream/30 hover:text-cream/60 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
