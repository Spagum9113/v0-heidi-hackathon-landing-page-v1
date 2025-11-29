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
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#FCFAF8] via-[#FBF582]/5 to-[#F6ECE4] py-20 md:py-32">
        {/* Animated gradient blobs with more color */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FBF582]/25 rounded-full blur-3xl animate-[gradientShift_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4A90E2]/15 rounded-full blur-3xl animate-[gradientShift_25s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#2D8659]/10 rounded-full blur-3xl animate-[gradientShift_30s_ease-in-out_infinite]" style={{ animationDelay: '10s' }} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#FBF582]/20 rounded-full blur-3xl animate-[gradientShift_22s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />

        {/* Animated decorative plus symbols */}
        <Plus className="absolute top-20 left-[15%] w-4 h-4 text-[#211217]/20 animate-[float_6s_ease-in-out_infinite]" />
        <Plus className="absolute top-32 right-[12%] w-5 h-5 text-[#211217]/15 animate-[floatSlow_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <Plus className="absolute bottom-40 left-[18%] w-4 h-4 text-[#211217]/20 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        <Plus className="absolute bottom-32 right-[20%] w-6 h-6 text-[#211217]/10 animate-[floatSlow_9s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-[#211217]/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-[25%] w-3 h-3 bg-[#211217]/8 rounded-full animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />

        <div className="container relative mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-[#755760] tracking-wide">AI trusted and loved by clinicians</p>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#211217] text-balance">
              Get test <span className="italic">back</span>. <br className="hidden md:block" />
              Move care <span className="italic">forward</span>.
            </h1>

            <p className="mb-6 text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              We're bringing clinicians one step closer to Heidi Health's vision of zero-admin medicine with <span className="font-semibold text-[#211217]">Hailey</span> — our <span className="font-semibold text-[#211217]">instant, predictive EMR automation</span>.
            </p>
            <p className="mb-10 text-base md:text-lg text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              Imagine if Hailey could complete tasks <span className="italic">before</span> you even think of them. Clinician experience becomes: <span className="font-semibold text-[#211217]">TAB → TAB → Confirm</span>. Just review and confirm, freeing clinician time to actually care for patients.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#211217] text-[#F9F4F1] hover:bg-[#211217]/90 rounded-full px-8 py-6 text-lg font-medium gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
              Get Hailey free
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
