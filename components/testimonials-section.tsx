import { ArrowRight } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FBF582]/12 rounded-full blur-3xl animate-[gradientShift_28s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#4A90E2]/10 rounded-full blur-3xl animate-[gradientShift_32s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight max-w-4xl mx-auto">
            Trusted by clinicians for <span className="italic">measurable</span> impact
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Customer Satisfaction (Dark Burgundy/Purple) */}
          <div className="bg-gradient-to-br from-[#211217] to-[#3a1f2a] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
            <div className="absolute top-6 left-6 w-20 h-20 bg-sky rounded-full flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-[8px] font-bold leading-tight">CUSTOMER</span>
              <span className="text-[8px] font-bold leading-tight">RATED</span>
              <span className="text-[6px] mt-0.5 opacity-80">Spotlight</span>
            </div>
            
            <div className="mt-20 space-y-6">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                100% of clinicians surveyed said they would recommend Hailey to their colleagues.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sunlight hover:text-sunlight/80 transition-colors group-hover:gap-3">
                <span className="font-semibold">Read the report</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Testimonial (Light Yellow) */}
          <div className="bg-[#FBF582] rounded-3xl p-8 md:p-10 text-bark relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              <div className="text-4xl md:text-5xl font-serif leading-tight">
                <span className="text-bark/40">"</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                Hailey has transformed how we work. What used to take 2-5 minutes per patient now takes seconds. We see Hailey as a partner helping us deliver measurable transformation to our practice, making us more resilient as we face the many challenges in healthcare.
              </p>
            </div>
          </div>

          {/* Card 3: Wellbeing Metric (White/Light Grey) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-sand-150 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bark mb-2">Clinical Practice Study</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-4xl md:text-5xl font-serif font-bold text-bark">
                70% improvement
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                in clinician workflow satisfaction and reduced administrative burden.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-bark hover:text-primary transition-colors group">
                <span className="font-semibold">Read the report</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 4: AI Statement (Dark Grey/Blue Gradient) */}
          <div className="bg-gradient-to-br from-[#2D3A4A] to-[#1a2332] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="inline-flex items-center gap-2 text-sunlight hover:text-sunlight/80 transition-colors mb-8 group">
              <span className="font-semibold">Read the report</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            {/* Large Icon */}
            <div className="flex justify-center my-8">
              <div className="w-32 h-32 rounded-full border-4 border-sunlight/30 flex items-center justify-center">
                <svg className="w-16 h-16 text-sunlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-center">
              Clinical automation demands a new approach to EMR integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

