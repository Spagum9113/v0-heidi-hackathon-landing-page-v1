"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Navigation } from "./header"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Navigation />
      <section id="hero" className="relative overflow-hidden bg-[#FCFAF8] py-20 md:py-32">
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

            <p className="mb-6 text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              We're bringing clinicians one step closer to Heidi's vision of zero-admin medicine with our <span className="font-semibold text-[#211217]">instant, predictive EMR automation</span>.
            </p>
            <p className="mb-10 text-base md:text-lg text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              Imagine if Heidi could complete tasks <span className="italic">before</span> you even think of them. Clinician experience becomes: <span className="font-semibold text-[#211217]">TAB → TAB → Confirm</span>. Just review and confirm, freeing clinician time to actually care for patients.
            </p>

            <Button
              onClick={scrollToContact}
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
