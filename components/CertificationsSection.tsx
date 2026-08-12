import { profileData } from "@/data/profile";

export default function CertificationsSection() {
  const icons = ["🛡️", "🍃", "☁️", "📱", "🌐"];
  const glows = [
    "cert-glow-green",
    "cert-glow-sky",
    "cert-glow-purple",
    "cert-glow-blue",
  ];

  const certifications = profileData.certifications.map((cert, index) => ({
    title: cert.title,
    issuer: cert.issuer,
    year: cert.year,
    description:
      (cert as any).description ||
      "Verified technical mastery in advanced software development.",
    credentialLink: cert.verificationUrl || "#",
    icon: icons[index % icons.length],
    glowClass: glows[index % glows.length],
  }));

  return (
    <section
      id="certifications"
      className="w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              Digital{" "}
              <span className="bg-gradient-to-r from-aurora-cyan to-aurora-purple bg-clip-text text-transparent">
                Credentials.
              </span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-xl font-medium">
              A record of technical mastery and academic discipline in
              engineering.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-10 mb-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 overflow-hidden shadow-2xl"
            >
              {/* Animated Glow Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />

              {/* Badge/Icon */}
              <div className="relative z-10 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-white/20">
                {cert.icon}
                <div
                  className={`absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${cert.glowClass}`}
                />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.2em] uppercase opacity-40 text-white">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-bold text-white/40">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-aurora-cyan transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="text-gray-400 font-medium leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <div className="h-0.5 w-12 bg-white/10" />
                  <a
                    href={cert.credentialLink}
                    className="text-xs font-black tracking-[0.1em] uppercase text-white hover:text-aurora-cyan transition-colors flex items-center gap-2 group/link"
                  >
                    Verify Credential
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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

              {/* Holographic scanner line animation */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
