import Image from "next/image";

export default function ParticipationsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const achievements = [
    {
      title: "IDEATHON 2024",
      subtitle: "Innovation Challenge",
      prize: "30,000 BDT",
      description:
        "Secured top position for developing an AI-driven solution for urban waste management.",
      image: `${basePath}/achievements/ideathon.jpg`,
      prizeClass: "text-yellow-400",
    },
  ];

  return (
    <section
      id="participations"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-24 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase mb-4">
              Trophy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Case.
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-xl">
              Competitive milestones and recognitions earned through innovation
              and code.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="w-12 h-1 bg-yellow-500/20 rounded-full" />
            <div className="w-12 h-1 bg-white/10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative h-[300px] sm:h-[400px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-700 hover:-translate-y-2 bg-[#0a0a0a]"
            >
              {/* Background Image / Gradient */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-20 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 z-30 p-6 sm:p-10 flex flex-col justify-end">
                <div className="space-y-3 sm:space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                      {item.subtitle}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-black tracking-widest uppercase ${item.prizeClass}`}
                    >
                      {item.prize}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-white leading-none uppercase">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
