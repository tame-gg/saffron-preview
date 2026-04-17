import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { FeaturedDishes } from '@/components/sections/FeaturedDishes'
import { ReservationBanner } from '@/components/sections/ReservationBanner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedDishes />
      <ReservationBanner />
    </main>
  )
}
