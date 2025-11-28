import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Navigation } from "./header"

export function Hero() {
  return (
    <>
      <Navigation />
      <section className="relative overflow-hidden bg-[#F9F4F1] py-20 md:py-32">
        {/* Decorative curved shapes */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
            <path d="M0 0 L200 0 Q150 200, 180 400 Q150 600, 200 800 L0 800 Z" fill="#211217" />
          </svg>
        </div> */}

        {/* <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
            <path d="M200 0 L0 0 Q50 200, 20 400 Q50 600, 0 800 L200 800 Z" fill="#211217" />
          </svg>
        </div> */}

        {/* Decorative plus symbols */}
        <Plus className="absolute top-20 left-[15%] w-4 h-4 text-[#211217]/20" />
        <Plus className="absolute top-32 right-[12%] w-5 h-5 text-[#211217]/15" />
        <Plus className="absolute bottom-40 left-[18%] w-4 h-4 text-[#211217]/20" />
        <Plus className="absolute bottom-32 right-[20%] w-6 h-6 text-[#211217]/10" />

        <div className="container relative mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-[#755760] tracking-wide">AI trusted and loved by clinicians</p>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#211217] text-balance">
              Get time <span className="italic">back</span>. <br className="hidden md:block" />
              Move care <span className="italic">forward</span>.
            </h1>

            <p className="mb-10 text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              Your AI scribe capturing notes, summaries, and follow-ups as you go. By your side while care flows.
            </p>

            <Button
              size="lg"
              className="bg-[#211217] text-[#F9F4F1] hover:bg-[#211217]/90 rounded-full px-8 py-6 text-lg font-medium gap-2"
            >
              <Plus className="w-5 h-5" />
              Get Heidi free
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
