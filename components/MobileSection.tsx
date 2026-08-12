export default function MobileSection() {
  const mobileApps = [
    {
      title: "ExamHero SSC",
      subtitle: "ExamHero: SSC Model Test & Suggestion",
      description:
        "Comprehensive offline quiz platforms for secondary/higher secondary students with 5000+ curriculum questions and real-time result tracking. Optimized for Bangladesh education board.",
      points: [
        "Native Android offline-first architecture using Room DB.",
        "Interactive analytics dashboard for performance monitoring.",
      ],
      technologies: ["JAVA", "ANDROID SDK", "SQLITE"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentTextClass: "text-blue-400",
      accentBgClass: "bg-blue-500",
      mockGradientClass: "app-gradient-blue",
      glowClass: "text-glow-blue",
    },
    {
      title: "ExamHero HSC",
      subtitle: "ExamHero: HSC Board Question & Quiz",
      description:
        "Higher Secondary certificate preparation app designed for advanced subject-matter mastery and competitive simulations for science, arts, and commerce groups.",
      points: [
        "Architected with high-performance list optimizations for huge question banks.",
        "Integrated performance analytics to identify weak subject areas.",
      ],
      technologies: ["JAVA", "KOTLIN", "ROOM DB"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-purple-500/20 to-indigo-500/20",
      accentTextClass: "text-purple-400",
      accentBgClass: "bg-purple-500",
      mockGradientClass: "app-gradient-purple",
      glowClass: "text-glow-purple",
    },
    {
      title: "DayVault",
      subtitle: "DayVault: Daily Diary & Mood Tracker",
      description:
        "A secure, markdown-supported daily journaling app focused on productivity and personal reflection with biometric locking.",
      points: [
        "Custom rich-text editor implementation for seamless writing.",
        "Secure local encryption and biometric authentication for privacy.",
      ],
      technologies: ["KOTLIN", "ROOM", "BIOMETRICS"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-rose-500/20 to-pink-500/20",
      accentTextClass: "text-rose-400",
      accentBgClass: "bg-rose-500",
      mockGradientClass: "app-gradient-rose",
      glowClass: "text-glow-rose",
    },
    {
      title: "CashFlow Pro",
      subtitle: "CashFlow: Budget Planner & Expense Tracker",
      description:
        "Advanced financial tracking tool for personal budgeting, featuring visual expense categorization and monthly saving goals.",
      points: [
        "Interactive financial charting using MPAndroidChart.",
        "Local-first architecture with optional cloud backup.",
      ],
      technologies: ["KOTLIN", "MPANDROIDCHART", "FIREBASE"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-emerald-500/20 to-green-500/20",
      accentTextClass: "text-emerald-400",
      accentBgClass: "bg-emerald-500",
      mockGradientClass: "app-gradient-emerald",
      glowClass: "text-glow-emerald",
    },
    {
      title: "FitLogix",
      subtitle: "FitLogix: Gym Workout & Rep Counter",
      description:
        "A premium gym workout and weightlifting tracker designed for efficiency, featuring rep counting and advanced progress visualization.",
      points: [
        "Advanced workout logging with custom routine builder.",
        "Progress visualization with detailed body metric tracking.",
      ],
      technologies: ["KOTLIN", "JETPACK COMPOSE", "HEALTH CONNECT"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-orange-500/20 to-red-500/20",
      accentTextClass: "text-orange-400",
      accentBgClass: "bg-orange-500",
      mockGradientClass: "app-gradient-gold",
      glowClass: "text-glow-gold",
    },
    {
      title: "Atmosphere",
      subtitle: "Atmosphere: Local Weather & Radar",
      description:
        "Real-time hyper-local weather forecasting app using OpenWeatherMap API, featuring radar maps and severe weather alerts.",
      points: [
        "Location-based services and REST API integration.",
        "Beautiful animated weather backgrounds based on current conditions.",
      ],
      technologies: ["JAVA", "RETROFIT", "LOCATION API"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-sky-500/20 to-blue-500/20",
      accentTextClass: "text-sky-400",
      accentBgClass: "bg-sky-500",
      mockGradientClass: "app-gradient-blue",
      glowClass: "text-glow-blue",
    },
    {
      title: "CodeJava",
      subtitle: "CodeJava: Learn OOP & Programming",
      description:
        "Interactive Java learning platform for beginners to advanced developers, focusing on Object-Oriented Programming principles.",
      points: [
        "Custom code syntax highlighter and compiler integration.",
        "Structured curriculum for mastering Java / OOP.",
      ],
      technologies: ["JAVA", "KOTLIN", "CODE EDITOR"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-amber-500/20 to-yellow-500/20",
      accentTextClass: "text-amber-400",
      accentBgClass: "bg-amber-500",
      mockGradientClass: "app-gradient-gold",
      glowClass: "text-glow-gold",
    },
    {
      title: "Frontend Master",
      subtitle: "Frontend Master: HTML, CSS, JS Compiler",
      description:
        "Advanced reference application and mobile compiler for modern web technologies: JavaScript, TypeScript, HTML, CSS, and Tailwind.",
      points: [
        "Interactive code playgrounds with live preview engine.",
        "Comprehensive documentation of advanced frontend patterns.",
      ],
      technologies: ["TYPESCRIPT", "TAILWIND", "WEBVIEW"],
      playStoreUrl: "#",
      webUrl: "#",
      gradient: "from-indigo-500/20 to-violet-500/20",
      accentTextClass: "text-indigo-400",
      accentBgClass: "bg-indigo-500",
      mockGradientClass: "app-gradient-purple",
      glowClass: "text-glow-purple",
    },
  ];

  return (
    <section
      id="mobile"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Background Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-aurora-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-aurora-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 sm:mb-32">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
            Product{" "}
            <span className="bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-text text-transparent">
              Ecosystem.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Native Android applications and Web platforms delivering specialized
            educational content.
          </p>
        </div>

        <div className="space-y-32 sm:space-y-48">
          {mobileApps.map((app, index) => (
            <div
              key={app.title}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Left Side: Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <span
                    className={`text-xs font-bold tracking-[0.3em] uppercase opacity-80 ${app.accentTextClass}`}
                  >
                    {app.subtitle}
                  </span>
                  <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
                    {app.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-medium">
                  {app.description}
                </p>

                <div className="space-y-4">
                  {app.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${app.accentBgClass}`}
                      />
                      <p className="text-gray-400 font-medium">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {app.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-wider text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <span>Play Store</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href={app.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all"
                  >
                    <span>Visit Website</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side: Visual/Mockup */}
              <div className="flex-1 relative group w-full max-w-[400px]">
                {/* Glowing Aura */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} blur-[100px] rounded-full scale-125 group-hover:scale-150 transition-all duration-700 opacity-60`}
                />

                {/* Stylized Phone Frame */}
                <div
                  data-bird-target={`mobile-app-${index}`}
                  className="relative z-10 mx-auto w-full aspect-[9/18.5] bg-[#0c0c0c] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl p-4 flex flex-col overflow-hidden transform group-hover:rotate-1 group-hover:-translate-y-2 transition-all duration-700"
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-10 h-1 bg-[#222] rounded-full" />
                  </div>

                  {/* Screen Content Mockup */}
                  <div className="flex-1 rounded-[2rem] bg-[#050505] p-5 flex flex-col gap-4 overflow-hidden relative">
                    {/* Header Mock */}
                    <div className="flex items-center justify-between opacity-50">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="w-12 h-2 rounded-full bg-white/10" />
                    </div>

                    {/* App UI Visual */}
                    <div className="mt-8 space-y-4">
                      <div
                        className={`h-32 rounded-2xl w-full ${app.mockGradientClass}`}
                      />
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                        <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="h-20 rounded-xl bg-white/5" />
                        <div className="h-20 rounded-xl bg-white/5" />
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-center opacity-30">
                      <div className="w-6 h-6 rounded-md bg-white/20" />
                      <div className="w-6 h-6 rounded-md bg-white/20" />
                      <div className="w-6 h-6 rounded-md bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                  <span className={`text-2xl ${app.glowClass}`}>📱</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center shadow-xl -rotate-12 group-hover:rotate-0 transition-transform">
                  <span
                    className={`font-black text-[10px] ${app.accentTextClass}`}
                  >
                    {app.technologies[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
