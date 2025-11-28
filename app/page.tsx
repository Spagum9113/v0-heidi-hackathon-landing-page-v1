import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ImpactSection } from "@/components/impact-section"
import { FutureVisionSection } from "@/components/future-vision-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <FutureVisionSection />
      <CTASection />
    </main>
  )
}
