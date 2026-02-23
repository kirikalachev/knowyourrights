"use client"

import { useEffect, useCallback } from "react"
import { CheckCircle, XCircle, BookOpen, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ResultPopupProps {
  isCorrect: boolean
  explanation: string
  legalReference: string
  onNext: () => void
  onClose: () => void
  isLastCase: boolean
}

export function ResultPopup({
  isCorrect,
  explanation,
  legalReference,
  onNext,
  onClose,
  isLastCase,
}: ResultPopupProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "Enter") onNext()
    },
    [onClose, onNext]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="animate-scale-in relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={isCorrect ? "Правилен отговор" : "Грешен отговор"}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Затвори"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          {isCorrect ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15">
              <XCircle className="h-5 w-5 text-red-400" />
            </div>
          )}
          <h3
            className={cn(
              "text-lg font-bold md:text-xl",
              isCorrect ? "text-emerald-400" : "text-red-400"
            )}
          >
            {isCorrect ? "Правилен отговор!" : "Не съвсем!"}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-card-foreground/80 md:text-base">
          {explanation}
        </p>

        <div className="mb-6 flex items-start gap-2 rounded-xl bg-primary/10 p-3">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-xs font-medium text-primary md:text-sm">
            {legalReference}
          </p>
        </div>

        <button
          onClick={onNext}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
        >
          {isLastCase ? "Виж резултатите" : "Следващ казус"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
