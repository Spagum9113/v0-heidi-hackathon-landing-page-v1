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
        {/* Abstract bracket shapes on sides (Heidi-style) */}
        <div className="absolute left-0 top-1/4 w-64 h-96 -translate-x-1/2 opacity-8 pointer-events-none">
          <svg viewBox="0 0 200 300" fill="none" className="w-full h-full text-[#211217]">
            <path d="M0 50 Q50 0 100 50 T200 50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_15s_ease-in-out_infinite]" />
            <path d="M0 150 Q50 100 100 150 T200 150" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_18s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
            <path d="M0 250 Q50 200 100 250 T200 250" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_20s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
          </svg>
        </div>
        <div className="absolute right-0 top-1/3 w-64 h-96 translate-x-1/2 opacity-8 pointer-events-none">
          <svg viewBox="0 0 200 300" fill="none" className="w-full h-full text-[#211217]">
            <path d="M200 50 Q150 0 100 50 T0 50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_17s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
            <path d="M200 150 Q150 100 100 150 T0 150" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_19s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
            <path d="M200 250 Q150 200 100 250 T0 250" stroke="currentColor" strokeWidth="2" fill="none" className="animate-[bracketFlow_16s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
          </svg>
        </div>

        {/* Animated gradient blobs with morphing effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FBF582]/25 blur-3xl animate-[morph_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4A90E2]/15 blur-3xl animate-[morph_25s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#2D8659]/10 blur-3xl animate-[morph_30s_ease-in-out_infinite]" style={{ animationDelay: '10s' }} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#FBF582]/20 blur-3xl animate-[morph_22s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
        
        {/* Subtle decorative stars (x's) - Heidi style */}
        <div className="absolute top-24 left-[12%] w-3 h-3 text-[#211217]/15 animate-[starTwinkle_4s_ease-in-out_infinite]">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-40 right-[10%] w-2 h-2 text-[#211217]/12 animate-[starTwinkle_5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-36 left-[20%] w-2.5 h-2.5 text-[#211217]/10 animate-[starTwinkle_6s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-28 right-[18%] w-3 h-3 text-[#211217]/12 animate-[starTwinkle_4.5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        
        {/* Animated decorative plus symbols with gentle float */}
        <Plus className="absolute top-20 left-[15%] w-4 h-4 text-[#211217]/20 animate-[gentleFloat_8s_ease-in-out_infinite]" />
        <Plus className="absolute top-32 right-[12%] w-5 h-5 text-[#211217]/15 animate-[gentleFloat_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <Plus className="absolute bottom-40 left-[18%] w-4 h-4 text-[#211217]/20 animate-[gentleFloat_9s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        <Plus className="absolute bottom-32 right-[20%] w-6 h-6 text-[#211217]/10 animate-[gentleFloat_11s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        
        {/* Additional floating dots with pulse */}
        <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-[#211217]/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-[25%] w-3 h-3 bg-[#211217]/8 rounded-full animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-[8%] w-1.5 h-1.5 bg-[#211217]/12 rounded-full animate-[pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-[15%] w-2 h-2 bg-[#211217]/10 rounded-full animate-[pulse_4.5s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />

        <div className="container relative mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-[#755760] tracking-wide">AI trusted and loved by clinicians</p>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#211217] text-balance">
              Get <span className="italic">more</span> time back. <br className="hidden md:block" />
              Move <span className="italic">better</span> care forward.
            </h1>

            <p className="mb-6 text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto text-pretty">
              We're bringing clinicians one step closer to Heidi's vision of zero-admin medicine with <span className="font-semibold text-[#211217]">Hailey</span>, our <span className="font-semibold text-[#211217]">instant, predictive EMR automation</span>.
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
