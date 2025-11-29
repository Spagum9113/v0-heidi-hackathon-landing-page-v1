import { Sparkle } from 'lucide-react'

export function FutureVisionSection() {
  return (
    <section id="future-vision" className="relative py-24 md:py-32 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
      {/* Animated gradient blobs with more color */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FBF582]/12 rounded-full blur-3xl animate-[gradientShift_28s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#4A90E2]/10 rounded-full blur-3xl animate-[gradientShift_32s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#2D8659]/8 rounded-full blur-3xl animate-[gradientShift_26s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bark/5 rounded-full">
              <Sparkle className="w-4 h-4 text-bark" />
              <p className="text-sm font-semibold text-bark">Future Vision</p>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight">
              The future of <span className="italic">clinical automation</span>.
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              We're building something revolutionary: <span className="font-semibold text-bark">Cluely and Cursor, but for doctors</span>. An AI assistant that learns your patterns, predicts your needs,
              and automates everything before you even think about it.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              Always watching and learning your clinical patterns, recognizing what you need before you know it.
              The system will learn over time and become more and more automated.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="w-8 h-8 rounded-full bg-sunlight flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-4 h-4 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2 transition-colors duration-300 group-hover:text-primary">Always learning</h3>
                  <p className="text-secondary leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    Continuously watching and understanding your clinical patterns to become more intelligent over time
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="w-8 h-8 rounded-full bg-sky flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-4 h-4 text-bark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2 transition-colors duration-300 group-hover:text-primary">Predictive actions</h3>
                  <p className="text-secondary leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    Anticipates what you need before you know it. All you do is review, confirm, and move forward
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2">


                <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bark mb-2 transition-colors duration-300 group-hover:text-primary">Complete automation</h3>
                  <p className="text-secondary leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    No more reliance on gatekeepers like BP or exclusive partnerships. Automate everything without waiting for partnerships. True clinical freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-bark rounded-3xl p-12 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sunlight/10 rounded-full blur-3xl animate-[gradientShift_20s_ease-in-out_infinite]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl animate-[gradientShift_25s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sunlight/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-sunlight animate-pulse" />
                    <span className="text-xs font-semibold text-sunlight">AI Assistant Active</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl text-inverted flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-2">
                        <kbd className="px-3 py-1.5 bg-sand-100/10 border border-sand-100/20 rounded-md text-sm font-mono text-sunlight animate-[tabPress_2s_ease-in-out_infinite] shadow-lg">TAB</kbd>
                        <span className="text-sand-100">.</span>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <kbd className="px-3 py-1.5 bg-sand-100/10 border border-sand-100/20 rounded-md text-sm font-mono text-sunlight animate-[tabPress_2s_ease-in-out_infinite] shadow-lg" style={{ animationDelay: '0.7s' }}>TAB</kbd>
                        <span className="text-sand-100">.</span>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <kbd className="px-3 py-1.5 bg-sand-100/10 border border-sand-100/20 rounded-md text-sm font-mono text-sunlight animate-[tabPress_2s_ease-in-out_infinite] shadow-lg" style={{ animationDelay: '1.4s' }}>TAB</kbd>
                        <span className="text-sand-100">.</span>
                      </span>
                    </h3>
                  </div>
                  <p className="text-sand-100 text-lg leading-relaxed">
                    That's all it takes. Review, confirm, and move on. The system learns your workflow and handles the
                    rest.
                  </p>
                </div>

                <div className="space-y-3 pt-6">
                  <div className="flex items-center gap-3 text-sand-100">
                    <div className="w-6 h-6 rounded bg-sunlight/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sunlight text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm">AI observes your clinical pattern</span>
                  </div>
                  <div className="flex items-center gap-3 text-sand-100">
                    <div className="w-6 h-6 rounded bg-sky/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sky text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm">Predicts your next action</span>
                  </div>
                  <div className="flex items-center gap-3 text-sand-100">
                    <div className="w-6 h-6 rounded bg-forest/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-forest text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm">You confirm and continue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
