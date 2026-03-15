import Image from "next/image"
import company from "@/data/company.json"

export function Gallery() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our Product Flow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A quick look at processing, quality control, and shipment readiness
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {company.gallery.map((item) => (
            <div key={item.label} className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
