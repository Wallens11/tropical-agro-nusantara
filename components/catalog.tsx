import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"
import company from "@/data/company.json"

export function Catalog() {
  return (
    <section id="catalog" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Product Catalog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Key specifications and buying points aligned with the approved company profile
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {company.products.map((product) => (
            <div key={product.name} className="rounded-[1.75rem] border border-border bg-card">
              <div className="border-b border-border bg-secondary/50 px-6 py-4">
                <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr key={spec.label} className={index !== product.specs.length - 1 ? "border-b border-border" : ""}>
                        <td className="py-3 pr-4 text-sm font-medium text-foreground">{spec.label}</td>
                        <td className="py-3 text-sm text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="outline" size="lg" asChild>
            <a
              href={`${company.contact.whatsappUrl}?text=${encodeURIComponent("Hello, I would like to request the full product catalog.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request Full Catalog
            </a>
          </Button>
          <Button size="lg" asChild>
            <a
              href={company.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Your Requirements
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
