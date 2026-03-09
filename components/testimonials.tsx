import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "Tech Solutions saved my laptop when I thought all hope was lost. They recovered my data and fixed the hardware issue in just one day. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "I've used their services multiple times for various devices. Always professional, always on time, and the prices are very fair. They're my go-to repair shop.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content: "Broke my iPhone screen right before finals. They fixed it the same day for a great price. The staff was friendly and explained everything clearly.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-border bg-background p-8 shadow-sm"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-secondary-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
