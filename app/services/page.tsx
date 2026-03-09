import type { Metadata } from "next"
import { Monitor, Smartphone, HardDrive, Shield, RefreshCw, Database, Gauge, Bug } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - Tech Solutions",
  description: "Professional hardware and software repair services for all devices. LCD repair, battery replacement, virus removal, data recovery, and more.",
}

const hardwareServices = [
  {
    title: "LCD / Digitizer Repair",
    description: "Cracked or unresponsive screen? We replace LCD panels and digitizers for all device types with high-quality parts.",
    icon: Monitor,
  },
  {
    title: "Charging / Battery Issues",
    description: "From faulty charging ports to battery replacements, we'll get your device powered up and running smoothly.",
    icon: HardDrive,
  },
  {
    title: "Liquid Damage",
    description: "Dropped your device in water? Our specialized cleaning and repair process can often save liquid-damaged devices.",
    icon: Shield,
  },
  {
    title: "Speaker / Mic Repair",
    description: "Can't hear or be heard? We repair and replace speakers, microphones, and earpieces for all devices.",
    icon: Smartphone,
  },
  {
    title: "Face ID / Touch ID Repair",
    description: "Biometric features not working? We can diagnose and repair Face ID and Touch ID components.",
    icon: Shield,
  },
]

const softwareServices = [
  {
    title: "OS Updates & Installation",
    description: "Keep your device running with the latest operating system updates, or downgrade if needed.",
    icon: RefreshCw,
  },
  {
    title: "Virus & Malware Removal",
    description: "Complete removal of viruses, malware, and unwanted software. We also help secure your device against future threats.",
    icon: Bug,
  },
  {
    title: "Data Recovery",
    description: "Lost important files? Our data recovery experts can retrieve data from damaged or corrupted storage devices.",
    icon: Database,
  },
  {
    title: "Device Optimization",
    description: "Speed up your slow device with our optimization service. We clean up junk files and optimize performance.",
    icon: Gauge,
  },
]

function ServiceCard({ title, description, icon: Icon }: { title: string; description: string; icon: typeof Monitor }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-secondary hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary">
        <Icon className="h-7 w-7 text-secondary transition-colors group-hover:text-secondary-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
              Our Services
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/70">
              Comprehensive hardware and software repair services for all your devices. Quality repairs with quick turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Services */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Hardware</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Hardware Services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Physical repairs and component replacements performed by certified technicians.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hardwareServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Software Services */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Software</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Software Services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Software troubleshooting, optimization, and data services to keep your devices running smoothly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {softwareServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
