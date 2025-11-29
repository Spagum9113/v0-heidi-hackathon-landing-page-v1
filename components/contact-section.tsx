import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-[#FCFAF8] via-[#FBF582]/8 to-[#F6ECE4] overflow-hidden">
      {/* Animated gradient blobs with morphing */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FBF582]/15 blur-3xl animate-[morph_24s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#4A90E2]/12 blur-3xl animate-[morph_28s_ease-in-out_infinite]" style={{ animationDelay: '7s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#2D8659]/10 blur-3xl animate-[morph_26s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
      
      {/* Subtle decorative stars */}
      <div className="absolute top-40 left-[10%] w-2 h-2 text-[#211217]/12 animate-[starTwinkle_4.5s_ease-in-out_infinite]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-[8%] w-2.5 h-2.5 text-[#211217]/10 animate-[starTwinkle_5.5s_ease-in-out_infinite]" style={{ animationDelay: '2.5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      
      {/* Floating dots */}
      <div className="absolute top-1/3 right-[18%] w-1.5 h-1.5 bg-[#211217]/10 rounded-full animate-[pulse_4.5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 left-[15%] w-2 h-2 bg-[#211217]/8 rounded-full animate-[pulse_5.5s_ease-in-out_infinite]" style={{ animationDelay: '3.5s' }} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center space-y-8 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#211217] leading-tight">
            Integrate <span className="italic">Hailey</span> into the <span className="italic">Heidi Health ecosystem</span>.
          </h2>
          <p className="text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto">
            This is the first step towards building Heidi Health's vision of zero-admin medicine. 
            Join us in building the future of clinical automation.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg text-[#211217]">
                Interested in integrating our EMR automation into your practice?
              </p>
              <p className="text-[#755760]">
                Get in touch to learn more about how we can help eliminate admin work and give clinicians their time back.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-[#211217] text-[#F9F4F1] hover:bg-[#211217]/90 rounded-full px-8 py-6 text-lg font-medium gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                asChild
              >
                <a href="mailto:contact@heidi.com">
                  <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Contact us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#211217] text-[#211217] hover:bg-[#F9F4F1] rounded-full px-8 py-6 text-lg font-medium gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                asChild
              >
                <a href="mailto:contact@heidi.com">
                  <MessageSquare className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Schedule a demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

