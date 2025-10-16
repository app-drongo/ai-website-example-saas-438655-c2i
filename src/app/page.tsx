import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
          <section id="contact">
        <Contact />
      </section>
    </>
  )
}
import Contact from '@/components/sections/home/Contact'