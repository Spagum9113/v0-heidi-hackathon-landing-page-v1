import { Sparkle } from 'lucide-react'

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 md:py-32 bg-[#FCFAF8] overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 text-sunlight animate-[drift_20s_ease-in-out_infinite]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L22 18L20 40L18 18L20 0Z" />
            <path d="M0 20L18 18L40 20L18 22L0 20Z" />
          </svg>
        </div>
      </div>
      
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FBF582]/10 rounded-full blur-3xl animate-[gradientShift_25s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FBF582]/8 rounded-full blur-3xl animate-[gradientShift_30s_ease-in-out_infinite]" style={{ animationDelay: '7s' }} />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunlight/20 rounded-full">
            <Sparkle className="w-4 h-4 text-sunlight" />
            <p className="text-sm font-semibold text-sunlight">Our Solution</p>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-inverted leading-tight">
            Seamless integration with <span className="italic text-sunlight">any</span> EMR system.
          </h2>

          <p className="text-lg md:text-xl text-sand-100 leading-relaxed max-w-3xl mx-auto">
            Our RPA technology pulls and pushes information between Heidi and your EMR desktop without requiring complex
            integrations or APIs. Everything runs locally and securely.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-bark/40 backdrop-blur-sm border border-sand-150/20 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 rounded-full bg-sunlight/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sunlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-inverted mb-3">No integrations needed</h3>
              <p className="text-sand-100 leading-relaxed">
                Works with any EMR system without complex API integrations or lengthy setup processes
              </p>
            </div>

            <div className="bg-bark/40 backdrop-blur-sm border border-sand-150/20 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-inverted mb-3">Runs locally</h3>
              <p className="text-sand-100 leading-relaxed">
                All processing happens on your device, ensuring maximum security and privacy for patient data
              </p>
            </div>

            <div className="bg-bark/40 backdrop-blur-sm border border-sand-150/20 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-inverted mb-3">Easy data transfer</h3>
              <p className="text-sand-100 leading-relaxed">
                Very easy copy and pasting of all information between Heidi and your EMR. No manual reformatting or rewriting needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
