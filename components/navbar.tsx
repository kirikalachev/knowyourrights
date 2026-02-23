"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scale, RotateCcw } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <Scale className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold tracking-tight md:text-base">
            Права в Европа
          </span>
        </Link>
        {!isHome && (
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 md:text-sm"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Начало
          </Link>
        )}
      </div>
    </nav>
  )
}
