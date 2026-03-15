import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VisionMission } from "@/components/vision-mission"
import { Products } from "@/components/products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Catalog } from "@/components/catalog"
import { Gallery } from "@/components/gallery"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Products />
      <WhyChooseUs />
      <Catalog />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
