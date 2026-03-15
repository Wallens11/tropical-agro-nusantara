import Image from "next/image"
import Link from "next/link"
import company from "@/data/company.json"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-card">
                <Image
                  src="/branding/logo-tan.jpeg"
                  alt={company.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="text-lg font-semibold text-foreground">{company.name}</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{company.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground md:items-end">
            <p>{company.contact.location}</p>
            <p>{company.contact.email}</p>
            <p>{company.contact.phoneDisplay}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link href="#catalog" className="text-sm text-muted-foreground hover:text-foreground">
                Catalog
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              (c) {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
