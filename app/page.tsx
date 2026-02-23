import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          Placeholder: Проект за образователни цели. Всички текстове са примерни и подлежат на замяна.
        </p>
      </footer>
    </main>
  )
}
