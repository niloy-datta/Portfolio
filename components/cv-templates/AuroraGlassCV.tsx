import Image from "next/image";

interface AuroraGlassCVProps {
  data: any;
}

export default function AuroraGlassCV({ data }: AuroraGlassCVProps) {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-gradient-to-br from-cyan-200/60 via-purple-200/60 to-pink-200/60 rounded-2xl shadow-2xl p-8 text-gray-900 font-sans backdrop-blur-2xl border border-white/30">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            {data.fullName}
          </h1>
          <h2 className="text-xl font-semibold text-purple-600 mt-1">
            {data.title}
          </h2>
          <p className="text-gray-600 mt-2 max-w-md">{data.summary}</p>
        </div>
        {data.photoUrl && (
          <div className="relative w-28 h-28">
            <Image
              src={data.photoUrl}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-white/60 shadow-lg"
              unoptimized
            />
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-cyan-600 mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li>
                Email: <span className="text-gray-800">{data.email}</span>
              </li>
              <li>
                Phone: <span className="text-gray-800">{data.phone}</span>
              </li>
              <li>
                Location: <span className="text-gray-800">{data.location}</span>
              </li>
              {data.website && (
                <li>
                  Website:{" "}
                  <a
                    href={
                      data.website.startsWith("http")
                        ? data.website
                        : `https://${data.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline cursor-pointer"
                  >
                    {data.website}
                  </a>
                </li>
              )}
              {data.github && (
                <li>
                  GitHub:{" "}
                  <a
                    href={
                      data.github.startsWith("http")
                        ? data.github
                        : `https://${data.github}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline cursor-pointer"
                  >
                    {data.github}
                  </a>
                </li>
              )}
              {data.linkedin && (
                <li>
                  LinkedIn:{" "}
                  <a
                    href={
                      data.linkedin.startsWith("http")
                        ? data.linkedin
                        : `https://${data.linkedin}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline cursor-pointer"
                  >
                    {data.linkedin}
                  </a>
                </li>
              )}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-cyan-600 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.split(",").map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-white text-xs font-semibold shadow"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className="flex-1 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              Experience
            </h3>
            <ul className="space-y-4">
              {data.experiences?.map((exp: any, i: number) => (
                <li key={i} className="bg-white/60 rounded-xl p-4 shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-pink-700">{exp.role}</span>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <div className="text-sm text-gray-700">{exp.company}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {exp.details}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              Education
            </h3>
            <ul className="space-y-4">
              {data.education?.map((edu: any, i: number) => (
                <li key={i} className="bg-white/60 rounded-xl p-4 shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-700">
                      {edu.degree}
                    </span>
                    <span className="text-xs text-gray-500">{edu.period}</span>
                  </div>
                  <div className="text-sm text-gray-700">{edu.institute}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {edu.details}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
