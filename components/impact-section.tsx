import { Sparkle } from 'lucide-react'

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 md:py-28 bg-[#FCFAF8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="border border-sand-150 rounded-3xl p-8 md:p-12 lg:p-16 bg-white shadow-sm">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bark/5 rounded-full">
              <Sparkle className="w-4 h-4 text-bark" />
              <p className="text-sm font-semibold text-bark">Real Impact</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight max-w-4xl mx-auto">
              Clinicians get their time <span className="italic">back</span>.
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              No more constant tab switching. Less clicks. Works with whatever EMR you're using. Safer for patient privacy
              and data security.
            </p>
            <p className="text-base text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
              Clinician experience becomes: <span className="text-bark font-semibold">TAB → TAB → Confirm</span>. Just review and confirm, freeing clinician time to actually care for patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group">
              <div className="w-20 h-20 rounded-full bg-sunlight/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sunlight/30 group-hover:shadow-lg">
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110">80%</p>
                <p className="text-lg text-secondary mt-2">Time saved per patient</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group">
              <div className="w-20 h-20 rounded-full bg-sky/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sky/30 group-hover:shadow-lg">
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110">95%</p>
                <p className="text-lg text-secondary mt-2">Accuracy of data transfer</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group">
              <div className="w-20 h-20 rounded-full bg-forest/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-forest/30 group-hover:shadow-lg">
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110">70%</p>
                <p className="text-lg text-secondary mt-2">Reduction in context switching</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group">
              <div className="w-20 h-20 rounded-full bg-sunlight/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sunlight/30 group-hover:shadow-lg">
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110">100%</p>
                <p className="text-lg text-secondary mt-2">EMR compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
