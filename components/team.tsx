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
              className="rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary">
                {member.name.slice(0, 1)}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
