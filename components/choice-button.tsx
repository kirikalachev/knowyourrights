"use client"

import { cn } from "@/lib/utils"
import { CheckCircle, XCircle } from "lucide-react"

interface ChoiceButtonProps {
  text: string
  index: number
  isCorrect: boolean
  isSelected: boolean
  isRevealed: boolean
  onClick: () => void
}

const letters = ["A", "B", "C", "D", "E"]

export function ChoiceButton({
  text,
  index,
  isCorrect,
  isSelected,
  isRevealed,
  onClick,
}: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isRevealed}
      className={cn(
        "group relative flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200",
        !isRevealed && [
          "border-border bg-secondary/50 text-secondary-foreground",
          "hover:border-primary/60 hover:bg-primary/10 hover:shadow-md",
          "active:scale-[0.98]",
        ],
        isRevealed && isSelected && isCorrect && [
          "border-emerald-500/60 bg-emerald-500/10 text-foreground",
        ],
        isRevealed && isSelected && !isCorrect && [
          "border-red-500/60 bg-red-500/10 text-foreground",
        ],
        isRevealed && !isSelected && isCorrect && [
          "border-emerald-500/30 bg-emerald-500/5 text-foreground",
        ],
        isRevealed && !isSelected && !isCorrect && [
          "border-border/30 bg-secondary/20 text-muted-foreground opacity-60",
        ]
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
          !isRevealed && "bg-primary/20 text-primary",
          isRevealed && isCorrect && "bg-emerald-500/20 text-emerald-400",
          isRevealed && !isCorrect && isSelected && "bg-red-500/20 text-red-400",
          isRevealed && !isCorrect && !isSelected && "bg-secondary text-muted-foreground"
        )}
      >
        {letters[index]}
      </span>
      <span className="flex-1 text-sm font-medium leading-relaxed md:text-base">{text}</span>
      {isRevealed && isSelected && (
        <span className="shrink-0 mt-0.5">
          {isCorrect ? (
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          ) : (
            <XCircle className="h-5 w-5 text-red-400" />
          )}
        </span>
      )}
      {isRevealed && !isSelected && isCorrect && (
        <span className="shrink-0 mt-0.5">
          <CheckCircle className="h-5 w-5 text-emerald-400/60" />
        </span>
      )}
    </button>
  )
}
