import Image from "next/image"
import Link from "next/link"
import { FileText } from "lucide-react"
import company from "@/data/company.json"
import { GallerySlider } from "@/components/gallery-slider"

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

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
          {company.gallery.map((item, index) => (
            <div
              key={item.label}
              className={`overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm ${
                index === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] bg-muted">
                {Array.isArray(item.slides) ? (
                  <GallerySlider slides={item.slides} alt={item.alt} fit={item.fit} />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={index === 1 ? "object-contain p-4" : "object-contain p-6"}
                  />
                )}
              </div>
              <div className="space-y-3 p-5">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    <FileText className="h-4 w-4" />
                    {item.cta}
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
