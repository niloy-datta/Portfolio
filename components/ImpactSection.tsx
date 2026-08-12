"use client";

import { profileData } from "@/data/profile";

export default function ImpactSection() {
  const metrics = [
    {
      value: profileData.stats.launches,
      label: "PLAY STORE LAUNCHES",
      gradient: "from-aurora-blue to-aurora-cyan",
      description: "Native Android applications deployed globally.",
    },
    {
      value: profileData.stats.velocity,
      label: "TEAM VELOCITY LIFT",
      gradient: "from-aurora-purple to-aurora-cyan",
      description: "Consistency in meeting sprint goals and delivery.",
    },
    {
      value: profileData.stats.vitals,
      label: "CORE WEB VITALS",
      gradient: "from-aurora-cyan to-aurora-blue",
      description: "Peak performance and SEO optimization scores.",
    },
    {
      value: profileData.stats.codeforces,
      label: "CODEFORCES RATING",
      gradient: "from-aurora-purple to-aurora-blue",
      description: "Competitive programming and algorithmic proficiency.",
    },
  ];

  return (
    <section
      id="highlights"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase mb-6">
            Global{" "}
            <span className="bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue bg-clip-text text-transparent">
              Impact.
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl">
            Quantitative metrics reflecting engineering rigor and delivery
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 overflow-hidden shadow-2xl"
            >
              {/* Dynamic Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-6">
                <div
                  className={`text-5xl sm:text-6xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}
                >
                  {metric.value}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-black tracking-[0.2em] uppercase text-white opacity-40">
                    {metric.label}
                  </div>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${metric.gradient} w-0 group-hover:w-full transition-all duration-700`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
