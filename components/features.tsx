import { Shield, Zap, UserCheck, DollarSign } from "lucide-react"

const features = [
  {
    title: "No Fix, No Fee Policy",
    description: "We only charge you if we successfully repair your device. No risk, no hidden costs.",
    icon: Shield,
  },
  {
    title: "Fast Repairs",
    description: "Most repairs completed within 24-48 hours. Many same-day repairs available.",
    icon: Zap,
  },
  {
    title: "Professional Technicians",
    description: "Our certified technicians have years of experience with all device types.",
    icon: UserCheck,
  },
  {
    title: "Affordable Prices",
    description: "Competitive pricing with no surprise fees. Free estimates on all repairs.",
    icon: DollarSign,
  },
]

export function Features() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            The Tech Solutions Difference
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary shadow-lg">
                  <feature.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
              
              {/* Connector line (hidden on last item and mobile) */}
              {index < features.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full bg-border lg:block" style={{ transform: 'translateX(50%)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
