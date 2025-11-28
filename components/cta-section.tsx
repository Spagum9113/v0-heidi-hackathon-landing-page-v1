import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FBF582] overflow-hidden rounded-t-[80px] border-2">
      {/* Decorative curved shape */}
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full bg-sunlight/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2">
        <div className="w-full h-full bg-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-inverted leading-tight text-balance">
            The first step towards <span className="italic text-sunlight">zero-admin</span> medicine.
          </h2>

          <p className="text-xl md:text-2xl text-sand-100 leading-relaxed max-w-3xl mx-auto text-balance">
            This is the future of clinical automation. Join us in building Heidi's vision of seamless, intelligent
            healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* <Button
              size="lg"
              className="bg-[#211217] hover:bg-[#211217]/90 text-[#F9F4F1] font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get started today
            </Button> */}
            <Button
              size="lg"
              className="bg-[#211217] hover:bg-[#211217]/90 text-[#F9F4F1] font-semibold px-8 py-6 text-lg rounded-3xl shadow-lg hover:shadow-xl transition-all"
            >
              Learn more
            </Button>
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-sand-100 text-sm">Trusted by clinicians worldwide</p>
            <div className="flex justify-center gap-8 opacity-60">
              <div className="text-sand-100 text-sm">2M+ consultations/week</div>
              <div className="text-sand-100 text-sm">•</div>
              <div className="text-sand-100 text-sm">200+ specialties</div>
              <div className="text-sand-100 text-sm">•</div>
              <div className="text-sand-100 text-sm">8M+ hours saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
