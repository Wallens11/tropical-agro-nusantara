import { Target, Compass } from "lucide-react"
import company from "@/data/company.json"

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our Vision & Mission
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">Vision</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {company.vision}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Compass className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">Mission</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {company.missions.map((mission) => (
                <li key={mission} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
