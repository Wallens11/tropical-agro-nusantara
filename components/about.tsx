import { Users, Leaf, Handshake } from "lucide-react"
import company from "@/data/company.json"

export function About() {
  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
            About {company.name}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {company.history.summary}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Local Partnership</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {company.history.details[0]}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Economic Impact</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {company.history.details[1]}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Long-term Growth</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {company.history.details[2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
