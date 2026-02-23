"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { CaseData } from "@/lib/cases-data"
import { TOTAL_CASES } from "@/lib/cases-data"
import { ChoiceButton } from "./choice-button"
import { ResultPopup } from "./result-popup"
import { ProgressBar } from "./progress-bar"
import { Megaphone, Scale, Heart, Shield, Users } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  scale: Scale,
  heart: Heart,
  shield: Shield,
  users: Users,
}

interface CaseCardProps {
  caseData: CaseData
}

export function CaseCard({ caseData }: CaseCardProps) {
  const router = useRouter()
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  const isLastCase = caseData.id === TOTAL_CASES
  const IconComponent = iconMap[caseData.icon] || Scale

  const handleChoice = (index: number) => {
    if (selectedChoice !== null) return
    setSelectedChoice(index)
    setTimeout(() => setShowPopup(true), 400)
  }

  const handleNext = () => {
    if (isLastCase) {
      router.push("/result")
    } else {
      router.push(`/case/${caseData.id + 1}`)
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="animate-fade-in-up">
      {/* Progress */}
      <div className="mb-6">
        <ProgressBar currentCase={caseData.id} />
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
            <IconComponent className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Казус {caseData.id} от {TOTAL_CASES}
            </p>
            <h2 className="text-lg font-bold text-card-foreground md:text-xl text-balance">
              {caseData.title}
            </h2>
          </div>
        </div>

        {/* Scenario */}
        <div className="mb-6 rounded-xl bg-secondary/50 p-4">
          <p className="text-sm leading-relaxed text-card-foreground/80 md:text-base">
            {caseData.scenario}
          </p>
        </div>

        {/* Label */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Изберете отговор
        </p>

        {/* Choices */}
        <div className="flex flex-col gap-3">
          {caseData.choices.map((choice, idx) => (
            <ChoiceButton
              key={idx}
              text={choice.text}
              index={idx}
              isCorrect={choice.isCorrect}
              isSelected={selectedChoice === idx}
              isRevealed={selectedChoice !== null}
              onClick={() => handleChoice(idx)}
            />
          ))}
        </div>
      </div>

      {/* Result Popup */}
      {showPopup && selectedChoice !== null && (
        <ResultPopup
          isCorrect={caseData.choices[selectedChoice].isCorrect}
          explanation={caseData.choices[selectedChoice].explanation}
          legalReference={caseData.choices[selectedChoice].legalReference}
          onNext={handleNext}
          onClose={handleClosePopup}
          isLastCase={isLastCase}
        />
      )}
    </div>
  )
}
