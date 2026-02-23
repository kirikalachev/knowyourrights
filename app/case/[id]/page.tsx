import { notFound } from "next/navigation"
import { casesData } from "@/lib/cases-data"
import { Navbar } from "@/components/navbar"
import { CaseCard } from "@/components/case-card"

interface CasePageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return casesData.map((c) => ({ id: String(c.id) }))
}

export async function generateMetadata({ params }: CasePageProps) {
  const { id } = await params
  const caseData = casesData.find((c) => c.id === Number(id))
  if (!caseData) return { title: "Казус не е намерен" }
  return {
    title: `Казус ${caseData.id}: ${caseData.title} | Права в Европа`,
    description: caseData.description,
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params
  const caseData = casesData.find((c) => c.id === Number(id))

  if (!caseData) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        <CaseCard caseData={caseData} />
      </div>
    </main>
  )
}
