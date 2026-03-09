import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Certified and experienced technicians",
  "90-day warranty on all repairs",
  "Genuine and high-quality replacement parts",
  "Quick turnaround times",
  "Transparent pricing with no hidden fees",
  "Secure data protection guaranteed",
]

export function AboutSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full flex-col items-center justify-center p-8">
                {/* Stats Grid */}
                <div className="grid w-full max-w-md grid-cols-2 gap-6">
                  <div className="rounded-xl bg-background p-6 shadow-sm">
                    <p className="text-4xl font-bold text-secondary">10+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="rounded-xl bg-background p-6 shadow-sm">
                    <p className="text-4xl font-bold text-secondary">50K+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Devices Repaired</p>
                  </div>
                  <div className="rounded-xl bg-background p-6 shadow-sm">
                    <p className="text-4xl font-bold text-secondary">99%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="rounded-xl bg-background p-6 shadow-sm">
                    <p className="text-4xl font-bold text-secondary">4.9</p>
                    <p className="mt-1 text-sm text-muted-foreground">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">About Us</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Your Trusted Device Repair Partner
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              We repair phones, laptops, desktops, tablets, and game consoles. Our certified technicians provide fast and reliable service with a commitment to quality and customer satisfaction.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Founded with a mission to make device repair accessible and affordable, Tech Solutions has grown to become a trusted name in the industry. We believe in transparent pricing, honest assessments, and repairs that last.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
