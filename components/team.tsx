import Image from "next/image"
import company from "@/data/company.json"

export function Team() {
  return (
    <section id="team" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The people behind our partnerships, communication, and market development
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {company.team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/5] bg-[radial-gradient(circle_at_top,_rgba(124,142,42,0.14),_transparent_42%),linear-gradient(180deg,_#f8f6ef,_#eff2e8)]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition ?? "center" }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-semibold text-primary">
                      {member.name.slice(0, 1)}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
