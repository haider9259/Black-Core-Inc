import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
