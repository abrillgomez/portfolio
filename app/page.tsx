import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
