import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href?: string
}

export function ServiceCard({ title, description, icon, href = "/services" }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-secondary hover:shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary">
 <img
            src={icon}
            alt={title}
            width={35}
            height={35}
            className="object-contain"
          />        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        
        <div className="flex items-center gap-2 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
