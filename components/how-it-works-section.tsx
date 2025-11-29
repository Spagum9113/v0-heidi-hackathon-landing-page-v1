export function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "RPA Integration",
            description: "Hailey's RPA technology pulls and pushes information from any EMR desktop into Heidi Health without requiring complex integrations or APIs.",
        },
        {
            number: "02",
            title: "Local Processing",
            description: "Everything runs locally on your device, ensuring maximum security and privacy for patient data. No cloud dependencies.",
        },
        {
            number: "03",
            title: "Seamless Transfer",
            description: "Effortless data transfer between Heidi and your EMR with minimal clicks. Just review, confirm, and move forward.",
        },
    ]

    const techStack = [
        {
            name: "Next.js",
            description: "React Framework",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 394 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0zm-81.1 0h17.8l63.6 66.6-8.5 8.8-63.6-66.6v57.8h-13.6V0h4.3zm-18.1 0h17.8v79.4h-17.8V0zm-40.8 0h68.5v12.7h-27.2v66.6h-13.6V12.7h-27.7V0zm-40.7 0h17.8v66.6h45.5v12.8h-63.3V0zm-27.3 12.7h13.6v53.9h-13.6V12.7zm-21.7 0h17.8l8.5 8.8-8.5 8.9-17.8-17.7zm-4.3-12.7h17.8v79.4h-13.6l-53.1-55.1v55.1H0V0h13.6l53.1 55.1V0z" fill="currentColor"/>
                    <path d="M81.1 0l-8.5 8.8 8.5 8.9 8.5-8.9L81.1 0z" fill="currentColor"/>
                </svg>
            ),
        },
        {
            name: "TypeScript",
            description: "Type Safety",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#3178C6" />
                    <path d="M128.716 129.5V236H143.92V129.5H197.5V115.5H75V129.5H128.716Z" fill="white" />
                    <path d="M153.5 115.5V236H168.5V196.5H197C220 196.5 233.5 184 233.5 163C233.5 142 220 129.5 197 129.5H168.5V115.5H153.5ZM168.5 143H194.5C208 143 218 150 218 163C218 176 208 183 194.5 183H168.5V143Z" fill="white" />
                </svg>
            ),
        },
        {
            name: "Tailwind CSS",
            description: "Styling",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 153.6" fill="none">
                    <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#paint0_linear_tailwind)" />
                    <defs>
                        <linearGradient id="paint0_linear_tailwind" x1="0" y1="0" x2="256" y2="153.6" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2298BD" />
                            <stop offset="1" stopColor="#0ED7B5" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
        },
        {
            name: "React",
            description: "UI Library",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#61DAFB" />
                    <circle cx="128" cy="128" r="40" stroke="white" strokeWidth="8" fill="none" />
                    <ellipse cx="128" cy="128" rx="40" ry="20" stroke="white" strokeWidth="6" fill="none" transform="rotate(60 128 128)" />
                    <ellipse cx="128" cy="128" rx="40" ry="20" stroke="white" strokeWidth="6" fill="none" transform="rotate(-60 128 128)" />
                    <circle cx="88" cy="128" r="4" fill="white" />
                    <circle cx="168" cy="128" r="4" fill="white" />
                </svg>
            ),
        },
        {
            name: "Electron",
            description: "Desktop App",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#47848F" />
                    <path d="M128 48L64 96V160L128 208L192 160V96L128 48ZM128 72L160 96V160L128 184L96 160V96L128 72Z" fill="white" />
                    <circle cx="128" cy="128" r="24" fill="white" />
                </svg>
            ),
        },
        {
            name: "Vite",
            description: "Build Tool",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#646CFF" />
                    <path d="M128 64L64 128L128 192L192 128L128 64Z" fill="white" />
                    <path d="M96 96L128 128L160 96L128 64L96 96Z" fill="#FFD859" />
                </svg>
            ),
        },
        {
            name: "Node.js",
            description: "Runtime",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#339933" />
                    <path d="M128 48C90.5 48 60 78.5 60 116C60 130 64.5 143 72.5 153.5L80 145C73.5 137 70 127 70 116C70 85.5 97.5 58 128 58C158.5 58 186 85.5 186 116C186 146.5 158.5 174 128 174C120 174 112.5 172.5 106 169.5L98.5 177C107 182.5 117 186 128 186C165.5 186 196 155.5 196 116C196 78.5 165.5 48 128 48Z" fill="white" />
                    <path d="M128 198C165.5 198 196 167.5 196 128C196 90.5 165.5 60 128 60C90.5 60 60 90.5 60 128C60 165.5 90.5 198 128 198Z" fill="white" opacity="0.3" />
                </svg>
            ),
        },
        {
            name: "OpenAI",
            description: "AI Integration",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#10A37F" />
                    <path d="M128 64L96 96L128 128L160 96L128 64Z" fill="white" />
                    <path d="M128 128L96 160L128 192L160 160L128 128Z" fill="white" />
                    <circle cx="128" cy="128" r="16" fill="#10A37F" />
                </svg>
            ),
        },
        {
            name: "Claude",
            description: "AI Assistant",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#D97757" />
                    <circle cx="128" cy="128" r="60" stroke="white" strokeWidth="8" fill="none" />
                    <circle cx="128" cy="128" r="40" fill="white" opacity="0.3" />
                    <circle cx="128" cy="128" r="20" fill="white" />
                </svg>
            ),
        },
        {
            name: "Vercel",
            description: "Deployment",
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="28" fill="#000000" />
                    <path d="M128 64L64 128L128 192L192 128L128 64Z" fill="white" />
                </svg>
            ),
        },
    ]

    return (
        <section id="how-it-works" className="relative pt-32 pb-36 md:pb-40 bg-gradient-to-br from-[#FCFAF8] via-[#F6ECE4] to-[#FCFAF8] overflow-hidden">
            {/* Animated gradient blobs with more color */}
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FBF582]/12 rounded-full blur-3xl animate-[gradientShift_26s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#4A90E2]/10 rounded-full blur-3xl animate-[gradientShift_30s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#2D8659]/8 rounded-full blur-3xl animate-[gradientShift_24s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Instant, predictive EMR automation that works with any EMR system. No integrations needed.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-20 pb-28">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-card border rounded-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                                <div className="text-6xl font-bold text-primary/20 mb-4 transition-all duration-300 group-hover:text-primary/30 group-hover:scale-110">
                                    {step.number}
                                </div>
                                <h3 className="font-serif text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">
                                    <svg
                                        className="w-8 h-8 text-primary/30 transition-colors duration-300 group-hover:text-primary/50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Video Demo */}
                <div className="mb-24">
                    <div className="bg-card border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
                        <div className="aspect-video relative bg-black rounded-xl overflow-hidden">
                            <iframe
                                key="loom-demo-video"
                                src="https://www.loom.com/embed/e3c40d05622b4e3e9d37e1d9eb585157"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                title="Hailey Demo Video"
                            />
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunlight/20 rounded-full text-sm font-semibold text-bark">
                            ✓ Successfully integrated with Careflow
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bark leading-tight text-center pt-8">
                        Built with Modern Technology
                    </h2>
                    <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                        Powered by a robust tech stack and backend architecture designed for scalability and reliability
                    </p>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
                        Scalable and reusable with other EMR systems because our RPA technology works at the desktop level, 
                        independent of EMR-specific APIs or integrations. Once built for one EMR, the architecture easily adapts to others.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group cursor-pointer"
                            >
                                <div className="mb-3 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                                    {tech.icon}
                                </div>
                                <h4 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{tech.name}</h4>
                                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

