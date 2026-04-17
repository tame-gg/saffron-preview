# Saffron Kitchen — Restaurant Website Template

A premium restaurant demo site built for client pitches. Next.js 15 + App Router, TypeScript, Tailwind CSS, Framer Motion. Deployed to Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing for a New Client

All client-specific values live in two files:

### `lib/config.ts`
- Restaurant name, Farsi name
- Address, phone, email, social links
- Business hours
- About page copy (story, pull quote)
- SEO metadata

### `lib/images.ts`
- Hero image
- About image
- 3 featured dish images
- 8 gallery images

Swap the Unsplash URLs for real photography. All images use `next/image` with lazy loading and responsive sizing built in.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  template.tsx        # Page transition wrapper
  page.tsx            # Home (Hero + About + Featured + CTA)
  menu/page.tsx       # Full menu with sticky category tabs
  gallery/page.tsx    # Photo grid with lightbox
  contact/page.tsx    # Map, hours, contact + private events

components/
  layout/
    Navigation.tsx    # Fixed nav with mobile drawer
    Footer.tsx
  sections/
    Hero.tsx          # Full-screen hero with mandala + parallax
    About.tsx         # Two-column story section
    FeaturedDishes.tsx
    ReservationBanner.tsx
  ui/
    AnimatedMandala.tsx  # Signature rotating Persian geometric SVG
    PersianDivider.tsx   # Section divider with Shamseh star
    ReservationModal.tsx # Reservation form with validation

lib/
  config.ts           # All restaurant info (fork this for new clients)
  images.ts           # All image URLs (swap for real photography)
  menu-data.ts        # Full menu structure with Farsi names
```

## Key Design Details

- **Colors**: Saffron `#D4A437`, Cream `#FAF6EE`, Pomegranate `#8B1A2B`, Charcoal `#1A1614`
- **Fonts**: Cormorant Garamond (headings) + Inter (body) + Amiri (Farsi text)
- **Signature element**: Slow-rotating multi-ring Persian mandala SVG on the hero, rendered in pure CSS animations for zero JS overhead
- **Persian touches**: Farsi script alongside English in logo, menu headers, and about section pull quote — all using proper `dir="rtl"` and the Amiri Arabic font
- **Animations**: Framer Motion for viewport reveals (0.7–0.9s ease-out), scroll parallax on hero, mouse parallax, staggered menu items, reservation modal

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect the repo in the Vercel dashboard. No environment variables required for the demo.

## Replacing Placeholder Images

All Unsplash URLs are in `lib/images.ts`. When you have real photography:
1. Drop images into `public/images/`
2. Update paths in `lib/images.ts` to `/images/filename.jpg`
3. Remove the `remotePatterns` config in `next.config.ts` if no longer needed

## Build

```bash
npm run build
npm start
```

`npm run build` should complete with zero warnings.
