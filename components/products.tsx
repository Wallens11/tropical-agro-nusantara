import { Button } from "@/components/ui/button"
import { MessageCircle, Check } from "lucide-react"
import Image from "next/image"
import company from "@/data/company.json"

export function Products() {
  return (
    <section id="products" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Export-oriented product lines built around cassava quality, versatility, and dependable supply
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {company.products.map((product) => (
            <div key={product.name} className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <a
                    href={`${company.contact.whatsappUrl}?text=${encodeURIComponent(`Hello, I am interested in ${product.name}. Please provide more information.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Inquire via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
