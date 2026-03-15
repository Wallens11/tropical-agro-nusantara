import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown, Globe, Wheat, Handshake } from "lucide-react"
import Image from "next/image"
import company from "@/data/company.json"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(112,128,29,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(35,71,54,0.16),_transparent_28%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            {company.tagline}
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Trusted cassava-based products for global buyers and growing local communities
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            PT. Tropical Agro Nusantara supplies premium Mocaf Flour and Tiwul from Palembang, South Sumatra, with a strong focus on quality consistency, export readiness, and sustainable local partnerships.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm">
              <Wheat className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold text-foreground">2 core products</p>
              <p className="mt-1 text-sm text-muted-foreground">Mocaf Flour and Tiwul for food applications.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm">
              <Globe className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold text-foreground">Export ready</p>
              <p className="mt-1 text-sm text-muted-foreground">Prepared for wholesale, packaging, and market requirements.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm">
              <Handshake className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-semibold text-foreground">Local network</p>
              <p className="mt-1 text-sm text-muted-foreground">Built with farmers and UMKM partnerships.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#products">
                <ArrowDown className="mr-2 h-5 w-5" />
                View Products
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Available for export inquiries, wholesale partnerships, and private discussions
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-6 hidden h-28 w-28 overflow-hidden rounded-full border border-white/60 bg-white/70 shadow-2xl backdrop-blur md:block">
            <Image
              src="/branding/logo-tan.jpeg"
              alt={`${company.name} logo`}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted shadow-[0_24px_80px_rgba(35,71,54,0.18)]">
            <Image
              src="/images/hero-cassava.jpg"
              alt="Premium cassava-based products from Indonesia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-card/95 p-5 shadow-xl backdrop-blur md:-bottom-8 md:left-8 md:right-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">{company.history.eyebrow}</p>
                <p className="text-xs text-muted-foreground">{company.location}</p>
              </div>
              <p className="text-right text-sm font-medium text-primary">{company.websiteLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
