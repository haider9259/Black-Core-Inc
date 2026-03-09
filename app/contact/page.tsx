import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Tech Solutions",
  description: "Get in touch with Tech Solutions for a free repair estimate. Contact us by phone, email, or visit our store for professional device repair services.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "Khizerirfan21@gmail.com",
    href: "mailto:Khizerirfan21@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(447) 478-073689",
    href: "tel:+447478073689",
  },
  {
    icon: MapPin,
    title: "Address",
    content: " 742 North Orange, Street, Wilmington, DE 19801",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9AM - 7PM\nSat: 10AM - 5PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/70">
              Have a device that needs repair? Get in touch for a free estimate. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-1">
            {/* Contact Form */}
            {/* <div>
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div> */}

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                You can also reach us through the following channels.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-card-foreground">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 block whitespace-pre-line text-sm text-muted-foreground transition-colors hover:text-secondary"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border hidden">
                <div className="aspect-video bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        123 Tech Street, Suite 100<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
