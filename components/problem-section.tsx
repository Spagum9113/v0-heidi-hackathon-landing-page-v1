import { Sparkle } from 'lucide-react'

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
      {/* Animated gradient blobs with more color */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBF582]/12 rounded-full blur-3xl animate-[gradientShift_22s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A90E2]/10 rounded-full blur-3xl animate-[gradientShift_26s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#2D8659]/8 rounded-full blur-3xl animate-[gradientShift_24s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bark/5 rounded-full">
              <Sparkle className="w-4 h-4 text-bark" />
              <p className="text-sm font-semibold text-bark">The Problem</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight">
              Clinicians waste precious time on <span className="italic">manual</span> data entry.
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Every patient encounter requires tedious copying between systems, breaking clinical flow and increasing
              the risk of errors. Clinicians are stuck with legacy EMRs that are slow and hard to connect with modern software.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              *Best Practice (BP) has 70% of all Australian GPs using their system, but they're gatekept by exclusive partnerships with Lyrebird, limiting innovation and choice for clinicians.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunlight/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">2-5 minutes per patient</h3>
                  <p className="text-secondary leading-relaxed">Wasted on copying from Heidi Health to EMR systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Constant tab switching</h3>
                  <p className="text-secondary leading-relaxed">Breaking clinical flow and concentration</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Higher error risk</h3>
                  <p className="text-secondary leading-relaxed">Manual reformatting creates security risks with PHI</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2">Gatekept by partnerships</h3>
                  <p className="text-secondary leading-relaxed">Exclusive partnerships like Best Practice* and Lyrebird limit innovation and choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
