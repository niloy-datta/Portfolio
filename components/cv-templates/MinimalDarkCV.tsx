import Image from "next/image";

interface MinimalDarkCVProps {
  data: any;
}

export default function MinimalDarkCV({ data }: MinimalDarkCVProps) {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 text-white font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-black text-white">{data.fullName}</h1>
          <h2 className="text-xl font-semibold text-gray-400 mt-1">
            {data.title}
          </h2>
          <p className="text-gray-300 mt-2 max-w-md">{data.summary}</p>
        </div>
        {data.photoUrl && (
          <div className="relative w-28 h-28">
            <Image
              src={data.photoUrl}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-gray-700 shadow-lg"
              unoptimized
            />
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li>
                Email: <span className="text-gray-200">{data.email}</span>
              </li>
              <li>
                Phone: <span className="text-gray-200">{data.phone}</span>
              </li>
              <li>
                Location: <span className="text-gray-200">{data.location}</span>
              </li>
              {data.website && (
                <li>
                  Website:{" "}
                  <span className="text-cyan-400 underline">
                    {data.website}
                  </span>
                </li>
              )}
              {data.github && (
                <li>
                  GitHub:{" "}
                  <span className="text-cyan-400 underline">{data.github}</span>
                </li>
              )}
              {data.linkedin && (
                <li>
                  LinkedIn:{" "}
                  <span className="text-cyan-400 underline">
                    {data.linkedin}
                  </span>
                </li>
              )}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.split(",").map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-800 text-cyan-300 text-xs font-semibold shadow"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className="flex-1 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Experience
            </h3>
            <ul className="space-y-4">
              {data.experiences?.map((exp: any, i: number) => (
                <li key={i} className="bg-gray-800/80 rounded-xl p-4 shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300">{exp.role}</span>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                  </div>
                  <div className="text-sm text-gray-200">{exp.company}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {exp.details}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              Education
            </h3>
            <ul className="space-y-4">
              {data.education?.map((edu: any, i: number) => (
                <li key={i} className="bg-gray-800/80 rounded-xl p-4 shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300">
                      {edu.degree}
                    </span>
                    <span className="text-xs text-gray-400">{edu.period}</span>
                  </div>
                  <div className="text-sm text-gray-200">{edu.institute}</div>
                  <div className="text-xs text-gray-400 mt-1">
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
