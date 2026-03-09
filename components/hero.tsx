import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

const highlights = [
  { icon: Shield, text: "Certified Technicians" },
  { icon: Clock, text: "Same Day Service" },
  { icon: Award, text: "90-Day Warranty" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              Available for Same-Day Repairs
            </div>
            
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl">
              Fast & Efficient Repairs for All Devices
            </h1>
            
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Expert repair services for phones, laptops, tablets, and more. Our certified technicians deliver quality repairs with quick turnaround times.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full border border-primary-foreground/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border border-primary-foreground/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-secondary/20" />
              </div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary shadow-2xl">
                  <svg className="h-12 w-12 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute left-0 top-1/4 rounded-lg bg-primary-foreground/5 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Shield className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">No Fix, No Fee</p>
                    <p className="text-xs text-primary-foreground/50">100% Guarantee</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 rounded-lg bg-primary-foreground/5 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Clock className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Fast Turnaround</p>
                    <p className="text-xs text-primary-foreground/50">Same Day Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
