import Link from "next/link"
import { ArrowRight, Scale, Shield, Users, Megaphone, Heart } from "lucide-react"
import { casesData } from "@/lib/cases-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  scale: Scale,
  heart: Heart,
  shield: Shield,
  users: Users,
}

export function HeroSection() {
  return (
    <section className="flex flex-col items-center px-4 py-16 md:py-24">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
        <Scale className="h-3.5 w-3.5 text-primary" />
        <span className="text-xs font-semibold text-primary">
          Интерактивно обучение
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-4 max-w-2xl text-center text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
        Твоите граждански и политически права в Европа
      </h1>

      {/* Description */}
      <p className="mb-10 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
        Placeholder: Научи повече за своите права чрез интерактивни казуси. Разбери как международното право защитава свободите ти в Европа.
      </p>

      {/* CTA */}
      <Link
        href="/case/1"
        className="group mb-16 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] md:text-lg"
      >
        Започни казусите
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>

      {/* Case Preview Cards */}
      <div className="w-full max-w-3xl">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          5 интерактивни казуса
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {casesData.slice(0, 3).map((c) => {
            const Icon = iconMap[c.icon] || Scale
            return (
              <div
                key={c.id}
                className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:bg-card"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {c.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        {casesData.length > 3 && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {"+ още " + (casesData.length - 3) + " казуса"}
          </p>
        )}
      </div>

      {/* Info */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Без регистрация
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          5 интерактивни казуса
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          Placeholder за времетраене
        </div>
      </div>
    </section>
  )
}
