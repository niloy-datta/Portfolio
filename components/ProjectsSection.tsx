"use client";

import { memo } from "react";

function ProjectsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const projects = [
    {
      title: "Service Portal",
      subtitle: "Enterprise Backend",
      description:
        "A high-availability service orchestration platform built with Java Spring Boot and Kubernetes.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      link: "#",
      subtitleClass: "text-blue-400",
      patternClass: "project-pattern-blue",
    },
    {
      title: "BioData Pro",
      subtitle: "AI-Powered NLP",
      description:
        "Cloud-native resume parsing engine utilizing Java NLP libraries and Spring Cloud for scalable processing.",
      technologies: ["Spring Cloud", "JPA", "OpenNLP", "AWS"],
      link: "#",
      subtitleClass: "text-emerald-400",
      patternClass: "project-pattern-emerald",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 sm:mb-32">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-6 relative">
            Selected{" "}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-blue">
              Work.
            </span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-blue rounded-full" />
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl font-medium px-4">
            Engineered solutions that bridge complex requirements with elegant
            user experiences.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative w-full perspective-1000"
            >
              {/* Connection Line */}
              {index !== projects.length - 1 && (
                <div className="absolute left-[20px] lg:left-1/2 bottom-[-100px] sm:bottom-[-128px] w-px h-24 sm:h-32 bg-gradient-to-b from-white/10 to-transparent hidden sm:block" />
              )}

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                {/* Project Visual / "Portal" */}
                <div
                  className={`flex-1 w-full lg:w-1/2 relative z-10 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#080808] border border-white/10 overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 shadow-2xl">
                    {/* Abstract decorative background since we don't have screenshots */}
                    <div
                      className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 ${project.patternClass}`}
                    />

                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: `url(${basePath}/grid.svg)` }}
                    />

                    {/* Floating Elements */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white/5 uppercase tracking-widest group-hover:text-white/10 transition-colors duration-500 select-none text-center">
                        {project.title}
                      </h3>
                    </div>

                    {/* Overlay Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Back glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-aurora-cyan/20 to-aurora-blue/20 blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10 rounded-full" />
                </div>

                {/* Project Details */}
                <div className="flex-1 w-full lg:w-1/2 space-y-4 lg:space-y-6 lg:px-8 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
                      0{index + 1}
                    </span>
                    <div className="h-px w-8 sm:w-12 bg-gray-800" />
                    <span
                      className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase ${project.subtitleClass}`}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] sm:text-xs font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 lg:pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:gap-6 transition-all group/link"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-aurora-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
