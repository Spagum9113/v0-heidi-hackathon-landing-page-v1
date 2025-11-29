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
                <svg className="w-12 h-12" viewBox="0 0 180 180" fill="none">
                    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                        <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#mask0)">
                        <circle cx="90" cy="90" r="90" fill="currentColor" />
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
                        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
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
                    <path d="M126.916 72.7283C126.916 67.8426 130.842 63.9163 135.728 63.9163H160.637C171.409 63.9163 180.183 72.6901 180.183 83.4618V98.3708C180.183 109.142 171.409 117.916 160.637 117.916H95.3627C84.5909 117.916 75.8171 126.69 75.8171 137.462V160.637C75.8171 171.409 84.5909 180.183 95.3627 180.183H120.272C125.157 180.183 129.084 184.109 129.084 188.995V192.084C129.084 202.855 137.858 211.629 148.63 211.629H192.084C202.855 211.629 211.629 202.855 211.629 192.084V135.728C211.629 130.842 207.703 126.916 202.817 126.916H188.995C178.223 126.916 169.449 118.142 169.449 107.37V83.4618C169.449 72.6901 178.223 63.9163 188.995 63.9163H202.817C207.703 63.9163 211.629 59.99 211.629 55.1043V44.3627C211.629 33.5909 202.855 24.8171 192.084 24.8171H148.63C137.858 24.8171 129.084 33.5909 129.084 44.3627V47.4517C129.084 52.3374 125.157 56.2637 120.272 56.2637H95.3627C84.5909 56.2637 75.8171 65.0375 75.8171 75.8092V120.272C75.8171 125.157 79.7434 129.084 84.6291 129.084H107.37C118.142 129.084 126.916 137.858 126.916 148.63V160.637C126.916 165.523 130.842 169.449 135.728 169.449H188.995C199.767 169.449 208.541 178.223 208.541 188.995V211.629C208.541 216.515 204.615 220.441 199.729 220.441H135.728C124.956 220.441 116.183 211.667 116.183 200.895V188.995C116.183 184.109 112.256 180.183 107.37 180.183H84.6291C73.8573 180.183 65.0835 171.409 65.0835 160.637V95.3627C65.0835 84.5909 73.8573 75.8171 84.6291 75.8171H107.37C112.256 75.8171 116.183 71.8908 116.183 67.0051V63.9163C116.183 53.1445 124.956 44.3707 135.728 44.3707H199.729C204.615 44.3707 208.541 48.297 208.541 53.1827V116.183C208.541 126.955 199.767 135.728 188.995 135.728H160.637C155.751 135.728 151.825 139.655 151.825 144.541V188.995C151.825 199.767 143.051 208.541 132.279 208.541H44.3627C33.5909 208.541 24.8171 199.767 24.8171 188.995V135.728C24.8171 130.842 28.7434 126.916 33.6291 126.916H47.4517C58.2235 126.916 66.9973 118.142 66.9973 107.37V83.4618C66.9973 72.6901 58.2235 63.9163 47.4517 63.9163H33.6291C28.7434 63.9163 24.8171 59.99 24.8171 55.1043V44.3627C24.8171 33.5909 33.5909 24.8171 44.3627 24.8171H132.279C143.051 24.8171 151.825 33.5909 151.825 44.3627V47.4517C151.825 52.3374 155.751 56.2637 160.637 56.2637H188.995C199.767 56.2637 208.541 65.0375 208.541 75.8092V120.272C208.541 125.157 204.615 129.084 199.729 129.084H135.728C124.956 129.084 116.183 137.858 116.183 148.63V200.895C116.183 211.667 124.956 220.441 135.728 220.441H199.729C204.615 220.441 208.541 216.515 208.541 211.629V148.63C208.541 137.858 199.767 129.084 188.995 129.084H160.637C155.751 129.084 151.825 125.157 151.825 120.272V75.8092C151.825 65.0375 143.051 56.2637 132.279 56.2637H44.3627C33.5909 56.2637 24.8171 65.0375 24.8171 75.8092V132.279C24.8171 143.051 33.5909 151.825 44.3627 151.825H107.37C112.256 151.825 116.183 155.751 116.183 160.637V188.995C116.183 199.767 124.956 208.541 135.728 208.541H188.995C199.767 208.541 208.541 199.767 208.541 188.995V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163C116.183 59.0306 120.109 55.1043 125.995 55.1043H188.995C199.767 55.1043 208.541 46.3305 208.541 35.5587V24.8171C208.541 19.9314 204.615 16.0051 199.729 16.0051H135.728C124.956 16.0051 116.183 7.2313 116.183 -3.5405V-16.0051C116.183 -26.7769 124.956 -35.5507 135.728 -35.5507H199.729C204.615 -35.5507 208.541 -31.6244 208.541 -26.7387V36.2627C208.541 47.0345 199.767 55.8083 188.995 55.8083H160.637C155.751 55.8083 151.825 59.7346 151.825 64.6203V108.083C151.825 118.855 143.051 127.629 132.279 127.629H44.3627C33.5909 127.629 24.8171 136.403 24.8171 147.175V160.637C24.8171 171.409 33.5909 180.183 44.3627 180.183H107.37C112.256 180.183 116.183 184.109 116.183 188.995V211.629C116.183 216.515 120.109 220.441 125.995 220.441H188.995C199.767 220.441 208.541 211.667 208.541 200.895V135.728C208.541 130.842 204.615 126.916 199.729 126.916H135.728C124.956 126.916 116.183 118.142 116.183 107.37V63.9163Z" fill="white" />
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

                {/* Video Demo Placeholder */}
                <div className="mb-24">
                    <a
                        href="https://loom.com/share/your-video-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group cursor-pointer"
                    >
                        <div className="bg-card border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
                            <div className="aspect-video bg-muted flex items-center justify-center relative group-hover:bg-muted/80 transition-colors">
                                <div className="text-center relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <svg
                                            className="w-10 h-10 text-primary"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-xl font-semibold mb-2">Watch Demo Video</p>
                                    <p className="text-muted-foreground mb-2">
                                        See our platform in action
                                    </p>
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                        Demo video coming soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
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

