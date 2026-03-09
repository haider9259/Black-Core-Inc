import { ServiceCard } from "@/components/service-card"
import { Smartphone, TabletSmartphone, Laptop, Monitor, Gamepad2, Wrench, Cpu } from "lucide-react"

const services = [
  {
    title: "iPhone Repair",
    description: "Screen replacements, battery swaps, and hardware fixes for all iPhone models.",
    icon: Smartphone,
  },
  {
    title: "Android Repair",
    description: "Expert repairs for Samsung, Google Pixel, OnePlus, and other Android devices.",
    icon: Smartphone,
  },
  {
    title: "Desktop Repair",
    description: "Hardware upgrades, virus removal, and performance optimization for desktop PCs.",
    icon: Monitor,
  },
  {
    title: "Tablet Repair",
    description: "iPad and Android tablet repairs including screen, battery, and charging issues.",
    icon: TabletSmartphone,
  },
  {
    title: "Laptop Repair",
    description: "Comprehensive laptop repairs for all major brands including Apple MacBooks.",
    icon: Laptop,
  },
  {
    title: "Game Console Repair",
    description: "PlayStation, Xbox, and Nintendo Switch repairs for all common issues.",
    icon: Gamepad2,
  },
  {
    title: "Hardware / Software Repair",
    description: "Full diagnostic and repair services for both hardware and software problems.",
    icon: Cpu,
  },
]

export function Services() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Expert Repair Services for All Your Devices
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From smartphones to gaming consoles, we have the expertise to fix it all.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
