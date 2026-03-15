import { Wheat, Award, Truck, Shield } from "lucide-react"
import company from "@/data/company.json"

const icons = [Wheat, Award, Truck, Shield]

export function WhyChooseUs() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your trusted partner for premium Indonesian cassava products
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.reasons.map((reason, index) => {
            const Icon = icons[index] ?? Shield

            return (
            <div key={reason.title} className="rounded-lg border border-border bg-background p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
