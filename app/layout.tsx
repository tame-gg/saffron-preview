import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Amiri } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { RESTAURANT_CONFIG } from '@/lib/config'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata: Metadata = {
  title: RESTAURANT_CONFIG.seo.title,
  description: RESTAURANT_CONFIG.seo.description,
  metadataBase: new URL(RESTAURANT_CONFIG.seo.siteUrl),
  openGraph: {
    title: RESTAURANT_CONFIG.seo.title,
    description: RESTAURANT_CONFIG.seo.description,
    url: RESTAURANT_CONFIG.seo.siteUrl,
    siteName: RESTAURANT_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: RESTAURANT_CONFIG.seo.title,
    description: RESTAURANT_CONFIG.seo.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${amiri.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
