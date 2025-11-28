import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#FCFAF8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center space-y-8 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#211217] leading-tight">
            Integrate into the <span className="italic">Heidi ecosystem</span>.
          </h2>
          <p className="text-lg md:text-xl text-[#755760] leading-relaxed max-w-2xl mx-auto">
            This is the first step towards building Heidi's vision of zero-admin medicine. 
            Join us in building the future of clinical automation.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-150">
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
                className="bg-[#211217] text-[#F9F4F1] hover:bg-[#211217]/90 rounded-full px-8 py-6 text-lg font-medium gap-2"
                asChild
              >
                <a href="mailto:contact@heidi.com">
                  <Mail className="w-5 h-5" />
                  Contact us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#211217] text-[#211217] hover:bg-[#F9F4F1] rounded-full px-8 py-6 text-lg font-medium gap-2"
                asChild
              >
                <a href="mailto:contact@heidi.com">
                  <MessageSquare className="w-5 h-5" />
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

