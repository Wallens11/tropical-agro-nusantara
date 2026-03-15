import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown, Globe, Wheat, Handshake, FileText, BadgeCheck } from "lucide-react"
import Image from "next/image"
import company from "@/data/company.json"

const heroStats = [
  {
    icon: Wheat,
    title: "2 core products",
    description: "Mocaf Flour and Tiwul for food applications.",
  },
  {
    icon: Globe,
    title: "Export ready",
    description: "Prepared for wholesale, packaging, and market requirements.",
  },
  {
    icon: Handshake,
    title: "Local network",
    description: "Built with farmers and UMKM partnerships.",
  },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(112,128,29,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(35,71,54,0.16),_transparent_28%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            {company.tagline}
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Trusted cassava-based products for global buyers and growing local communities
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            PT. Tropical Agro Nusantara supplies premium Mocaf Flour and Tiwul from Palembang, South Sumatra, with a strong focus on quality consistency, export readiness, and sustainable local partnerships.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-border bg-card/85 p-4 shadow-sm">
                <item.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
              <a href={company.brochureUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Download Profile
              </a>
            </Button>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Available for export inquiries and wholesale partnerships
            </div>
            <a href="#products" className="inline-flex items-center gap-2 font-medium text-primary">
              View products
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,_rgba(124,142,42,0.16),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(35,71,54,0.16),_transparent_34%)] blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/60 bg-muted shadow-[0_24px_80px_rgba(35,71,54,0.18)]">
            <Image
              src="/images/hero-cassava.jpg"
              alt="Premium cassava-based products from Indonesia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-[1.6rem] border border-white/65 bg-white/88 p-2.5 shadow-lg backdrop-blur">
              <Image
                src="/branding/logo-company.jpeg"
                alt={company.name}
                width={96}
                height={82}
                className="h-auto w-[72px] rounded-[1.1rem] md:w-[84px]"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-card/95 p-5 shadow-xl backdrop-blur md:-bottom-8 md:left-8 md:right-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">{company.history.eyebrow}</p>
                <p className="max-w-[16rem] text-xs text-muted-foreground text-pretty md:max-w-[18rem]">{company.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">{company.websiteLabel}</p>
                <p className="text-xs text-muted-foreground">Buyer-ready overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
