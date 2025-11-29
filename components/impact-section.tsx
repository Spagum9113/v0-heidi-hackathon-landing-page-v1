import { Sparkle } from 'lucide-react'

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 md:py-28 bg-gradient-to-br from-[#FCFAF8] via-[#FBF582]/5 to-[#F6ECE4] overflow-hidden">
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
              The clinician experience becomes: <span className="text-bark font-semibold">TAB → TAB → Confirm</span> allowing clinician's to get time back and move care forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Animated connecting paths - hidden on mobile */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <path
                d="M 12.5% 50% Q 25% 30%, 37.5% 50% T 62.5% 50% T 87.5% 50%"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                className="animate-[drawPath_3s_ease-in-out_forwards]"
                style={{ animationDelay: '0.5s' }}
              />
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FBF582" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#4A90E2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2D8659" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animated cursor icon that follows the path */}
            <div 
              className="hidden lg:block absolute top-1/2 w-6 h-6 pointer-events-none" 
              style={{ 
                zIndex: 1,
                animation: 'cursorMove 4s ease-in-out infinite',
                animationDelay: '0.5s'
              }}
            >
              <svg 
                className="w-6 h-6 text-sunlight"
                fill="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(251, 245, 130, 0.6))'
                }}
              >
                <path d="M13.64 21.97c-.72.72-1.89.72-2.61 0L2.03 12.97c-.72-.72-.72-1.89 0-2.61L10.03 2.36c.72-.72 1.89-.72 2.61 0l9 9c.72.72.72 1.89 0 2.61l-8 8z" />
              </svg>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 relative z-10" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 rounded-full bg-sunlight/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sunlight/30 group-hover:shadow-lg animate-[pulse_3s_ease-in-out_infinite] relative">
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* Animated ring around icon */}
                <div className="absolute inset-0 rounded-full border-2 border-sunlight/30 animate-[pathGlow_2s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }} />
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110 animate-[countUp_1.2s_ease-out_forwards]" style={{ animationDelay: '0.9s' }}>1.5-2.5</p>
                <p className="text-lg text-secondary mt-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '1.1s' }}>Hours saved daily</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 relative z-10" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-full bg-sky/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sky/30 group-hover:shadow-lg animate-[pulse_3s_ease-in-out_infinite] relative" style={{ animationDelay: '0.5s' }}>
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full border-2 border-sky/30 animate-[pathGlow_2s_ease-in-out_infinite]" style={{ animationDelay: '1.3s' }} />
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110 animate-[countUp_1.2s_ease-out_forwards]" style={{ animationDelay: '1.4s' }}>95%</p>
                <p className="text-lg text-secondary mt-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '1.6s' }}>Accuracy of data transfer</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 relative z-10" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-full bg-forest/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-forest/30 group-hover:shadow-lg animate-[pulse_3s_ease-in-out_infinite] relative" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full border-2 border-forest/30 animate-[pathGlow_2s_ease-in-out_infinite]" style={{ animationDelay: '1.8s' }} />
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110 animate-[countUp_1.2s_ease-out_forwards]" style={{ animationDelay: '1.9s' }}>70%</p>
                <p className="text-lg text-secondary mt-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '2.1s' }}>Reduction in context switching</p>
              </div>
            </div>

            <div className="text-center space-y-4 transition-all duration-300 hover:scale-105 group animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 relative z-10" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 rounded-full bg-sunlight/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-sunlight/30 group-hover:shadow-lg animate-[pulse_3s_ease-in-out_infinite] relative" style={{ animationDelay: '1.5s' }}>
                <svg className="w-10 h-10 text-bark transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full border-2 border-sunlight/30 animate-[pathGlow_2s_ease-in-out_infinite]" style={{ animationDelay: '2.3s' }} />
              </div>
              <div>
                <p className="font-serif text-5xl md:text-6xl text-bark font-semibold transition-all duration-300 group-hover:scale-110 animate-[countUp_1.2s_ease-out_forwards]" style={{ animationDelay: '2.4s' }}>100%</p>
                <p className="text-lg text-secondary mt-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '2.6s' }}>EMR compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
