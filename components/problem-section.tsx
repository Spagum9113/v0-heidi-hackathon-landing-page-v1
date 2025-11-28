import { Sparkle } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FCFAF8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
              the risk of errors.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sunlight/20 flex items-center justify-center flex-shrink-0">
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
                  <p className="text-secondary leading-relaxed">Wasted on copying from Heidi to EMR systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0">
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

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-150">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>
      </div>
    </section>
  )
}
