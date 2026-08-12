"use client";

export default function ExpertiseSection() {
  const pillars = [
    {
      id: "01",
      title: "Languages & Algorithms",
      color: "from-aurora-cyan to-aurora-blue",
      shadow: "shadow-aurora-cyan/20",
      skills: [
        "C",
        "Java",
        "Kotlin",
        "C++",
        "Python",
        "TypeScript",
        "JavaScript",
        "Data Structures",
        "Algorithms",
        "System Design",
      ],
    },
    {
      id: "02",
      title: "Backend & Engineering",
      color: "from-aurora-purple to-aurora-pink",
      shadow: "shadow-aurora-purple/20",
      skills: [
        "Spring Boot",
        "Maven",
        "Microservices",
        "REST APIs",
        "JPA / Hibernate",
        "MySQL",
        "PostgreSQL",
        "SQL",
      ],
    },
    {
      id: "03",
      title: "Frontend & Ecosystem",
      color: "from-aurora-blue to-aurora-cyan",
      shadow: "shadow-aurora-blue/20",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Jetpack Compose",
        "Git",
        "GitHub",
        "CI/CD",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-aurora-purple/5 to-black/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
            Tech{" "}
            <span className="bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue bg-clip-text text-transparent">
              Pillars.
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Specialized in Java Spring Boot ecosystem and high-performance
            full-stack architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {pillars.map((pillar, index) => {
            const delayClass =
              index === 1 ? "delay-100" : index === 2 ? "delay-200" : "delay-0";

            return (
              <div
                key={pillar.title}
                className={`group relative flex flex-col h-full bg-[#080808] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 transition-all duration-700 hover:border-white/20 hover:-translate-y-2 ${pillar.shadow} hover:shadow-2xl ${delayClass}`}
              >
                {/* Visual Identity */}
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-6xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                    {pillar.id}
                  </span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-10 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}
                >
                  {pillar.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {pillar.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-bold text-gray-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 transform group-hover:scale-105 active:scale-95 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Interactive Light Beam */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r ${pillar.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
