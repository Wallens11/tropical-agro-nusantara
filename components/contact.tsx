import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin, Phone, FileText } from "lucide-react"
import company from "@/data/company.json"

export function Contact() {
  return (
    <section id="contact" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Ready to Partner with Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you are an importer, distributor, or food manufacturer, we are ready to discuss your requirements and build a long-term partnership around cassava-based products from Indonesia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a
                  href={company.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${company.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={company.brochureUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">WhatsApp</h3>
              <p className="mt-1 text-sm text-muted-foreground">{company.contact.phoneDisplay}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">{company.contact.email}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">{company.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
