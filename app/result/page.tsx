import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { casesData } from "@/lib/cases-data"
import {
  CheckCircle,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  Scale,
  Megaphone,
  Heart,
  Shield,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Резултати | Права в Европа",
  description: "Обобщение на преминатите казуси за граждански и политически права.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  scale: Scale,
  heart: Heart,
  shield: Shield,
  users: Users,
}

export default function ResultPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        <div className="animate-fade-in-up">
          {/* Completion Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl text-balance">
              Поздравления! Завърши всички казуси.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
              Преминахте през всичките {casesData.length} казуса за
              граждански и политически права. Ето обобщение на темите, които
              разгледахте.
            </p>
          </div>

          {/* Cases Summary */}
          <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Разгледани теми
            </h2>
            <div className="flex flex-col gap-3">
              {casesData.map((c) => {
                const Icon = iconMap[c.icon] || Scale
                return (
                  <div
                    key={c.id}
                    className="flex items-center gap-3 rounded-xl bg-secondary/50 p-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-card-foreground">
                        {c.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Info Box */}
          <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="mb-2 text-base font-bold text-foreground">
             Научи повече
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
             Европейската конвенция за правата на човека (ЕКПЧ) е
              международен договор, който защитава основните граждански и
              политически права на хората в Европа. Можете да научите повече на
              официалния сайт на Европейския съд по правата на човека.
            </p>
            <a
              href="https://www.echr.coe.int/documents/d/echr/convention_bul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Европейска конвенция за правата на човека (ЕКПЧ)
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case/1"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              Опитай отново
            </Link>
            <Link
              href="/"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3 font-bold text-secondary-foreground transition-colors hover:bg-secondary/80 active:scale-[0.98]"
            >
              Към началото
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          Placeholder: Проект за образователни цели. Всички текстове са примерни
          и подлежат на замяна.
        </p>
      </footer>
    </main>
  )
}
