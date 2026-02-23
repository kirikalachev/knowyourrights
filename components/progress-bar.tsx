"use client"

import { TOTAL_CASES } from "@/lib/cases-data"

interface ProgressBarProps {
  currentCase: number
}

export function ProgressBar({ currentCase }: ProgressBarProps) {
  const progress = (currentCase / TOTAL_CASES) * 100

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
        {currentCase} / {TOTAL_CASES}
      </span>
    </div>
  )
}
