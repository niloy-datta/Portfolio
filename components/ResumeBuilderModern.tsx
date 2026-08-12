"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Edit3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Plus,
  Printer,
  Star,
  Terminal,
  Trash2,
} from "lucide-react";
import { useState } from "react";

// --- INITIAL DATA ---
const initialResumeData = {
  personalInfo: {
    name: "Alex Taylor",
    title: "Senior Full Stack Engineer",
    email: "alex.taylor@dev.com",
    location: "San Francisco, CA",
    github: "alextaylor-dev",
    linkedin: "alex-taylor-pro",
  },
  skills: [
    {
      id: 1,
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind", "Next.js", "Framer Motion"],
    },
    {
      id: 2,
      name: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    },
    {
      id: 3,
      name: "DevOps",
      skills: ["AWS", "Docker", "K8s", "CI/CD", "Terraform"],
    },
  ],
  education: [
    {
      id: 1,
      degree: "M.S. Computer Science",
      school: "Stanford University",
      grade: "2018 - 2020",
    },
    {
      id: 2,
      degree: "B.S. Software Engineering",
      school: "UC Berkeley",
      grade: "2014 - 2018",
    },
  ],
  certifications: [
    { id: 1, title: "AWS Solutions Architect", subtitle: "Associate - 2023" },
    {
      id: 2,
      title: "Google Cloud Professional",
      subtitle: "Data Engineer - 2022",
    },
  ],
  summary:
    "Results-driven Senior Full Stack Engineer with 6+ years of experience in building scalable web applications. Proficient in the modern JavaScript stack and cloud architecture. Passionate about code quality, performance optimization, and mentoring junior developers.",
  projects: [
    {
      id: 1,
      name: "Nexus E-Commerce",
      type: "Full Stack Lead",
      tech: "React, Node.js, MongoDB",
      description:
        "Architected a multi-vendor marketplace handling 50k+ daily users. Reduced load times by 40% via server-side rendering.",
    },
    {
      id: 2,
      name: "TaskFlow AI",
      type: "Mobile Architecture",
      tech: "React Native, Firebase",
      description:
        "Developed a productivity app using on-device ML. Featured in App Store 'Productivity' top 10 with 100k+ downloads.",
    },
    {
      id: 3,
      name: "Distributed Cache Lib",
      type: "Open Source",
      tech: "Rust, Redis",
      description:
        "Created a high-performance caching library. Garnered 1.5k+ stars on GitHub and used by 500+ developers.",
    },
  ],
  achievements: [
    {
      id: 1,
      type: "award",
      title: "Best Innovation Award",
      subtitle: "Global Tech Hackathon 2024",
    },
    {
      id: 2,
      type: "academic",
      title: "Published Researcher",
      subtitle: "IEEE Cloud Conf",
    },
    {
      id: 3,
      type: "other",
      title: "Keynote Speaker",
      subtitle: "ReactConf 2023",
    },
  ],
};

// --- MODERN RESUME PREVIEW COMPONENT ---
const ResumePreview = ({ data }: { data: typeof initialResumeData }) => {
  const {
    personalInfo,
    education,
    skills,
    certifications,
    summary,
    projects,
    achievements,
  } = data;

  return (
    <div
      id="resume-preview"
      className="bg-white shadow-2xl overflow-hidden rounded-none sm:rounded-sm print:shadow-none min-h-[1100px] w-full max-w-[210mm] mx-auto flex flex-col md:flex-row font-sans"
    >
      {/* --- LEFT SIDEBAR (DARK) --- */}
      <div className="w-full md:w-[32%] bg-slate-900 text-slate-300 p-8 print:w-[32%] print:bg-slate-900 print:text-slate-300">
        {/* Contact Info (Mobile: Top, Desktop: Sidebar) */}
        <div className="mb-10 space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="bg-slate-800 p-2 rounded-md text-cyan-400">
              <Mail size={16} />
            </div>
            <span className="break-all">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-800 p-2 rounded-md text-cyan-400">
              <MapPin size={16} />
            </div>
            <span>{personalInfo.location}</span>
          </div>
          {personalInfo.github && (
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 p-2 rounded-md text-cyan-400">
                <Github size={16} />
              </div>
              <a
                href={`https://github.com/${personalInfo.github}`}
                className="hover:text-white transition-colors"
              >
                /{personalInfo.github}
              </a>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 p-2 rounded-md text-cyan-400">
                <Linkedin size={16} />
              </div>
              <a href="#" className="hover:text-white transition-colors">
                in/{personalInfo.linkedin}
              </a>
            </div>
          )}
        </div>

        {/* Education */}
        <section className="mb-10">
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-slate-700 pb-2">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="text-white font-semibold">{edu.school}</div>
                <div className="text-slate-400 text-sm mt-1">{edu.degree}</div>
                <div className="text-slate-500 text-xs mt-1 font-mono">
                  {edu.grade}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-slate-700 pb-2">
            Skills
          </h3>
          <div className="space-y-6">
            {skills.map((cat) => (
              <div key={cat.id}>
                <div className="text-cyan-400 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <Terminal size={12} /> {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-[10px] font-medium rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-slate-700 pb-2">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.id} className="text-sm">
                <strong className="block text-slate-200">{cert.title}</strong>
                <span className="text-slate-500 text-xs">{cert.subtitle}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* --- RIGHT CONTENT (LIGHT) --- */}
      <div className="w-full md:w-[68%] p-8 md:p-12 bg-white text-slate-800 print:w-[68%]">
        {/* Header */}
        <div className="mb-12 border-b-2 border-slate-100 pb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-2 uppercase">
            {personalInfo.name.split(" ")[0]}
            <span className="text-slate-400 block md:inline md:ml-4">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-700 font-medium tracking-wide mt-4">
            {personalInfo.title}
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-2xl text-lg">
            {summary}
          </p>
        </div>

        {/* Projects */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-slate-900 text-white rounded flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
              Experience & Projects
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((proj) => (
              <div key={proj.id} className="group">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {proj.name}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {proj.type}
                  </span>
                </div>
                <div className="text-xs font-semibold text-cyan-600 mb-3 font-mono">
                  {proj.tech}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm border-l-2 border-slate-200 pl-4 group-hover:border-cyan-400 transition-colors">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-slate-900 text-white rounded flex items-center justify-center">
              <Star size={20} />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
              Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50 hover:shadow-sm hover:border-cyan-200 transition-all break-inside-avoid"
              >
                <div className="mt-1 text-cyan-600">
                  {item.type === "award" ? (
                    <Award size={18} />
                  ) : item.type === "academic" ? (
                    <BookOpen size={18} />
                  ) : (
                    <Star size={18} />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// --- EDITOR COMPONENTS ---
const InputGroup = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: any) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white outline-none transition-all min-h-[100px] text-slate-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white outline-none transition-all text-slate-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    )}
  </div>
);

const SectionAccordion = ({
  title,
  icon: Icon,
  children,
  isOpen,
  onToggle,
}: any) => (
  <div
    className={`border rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? "border-cyan-200 shadow-md bg-white" : "border-slate-200 bg-white hover:border-slate-300"}`}
  >
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-4 transition-colors text-left cursor-pointer ${isOpen ? "bg-cyan-50/50" : "bg-white hover:bg-slate-50"}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg ${isOpen ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500"}`}
        >
          <Icon size={18} />
        </div>
        <span
          className={`font-bold ${isOpen ? "text-cyan-900" : "text-slate-700"}`}
        >
          {title}
        </span>
      </div>
      {isOpen ? (
        <ChevronUp size={18} className="text-cyan-400" />
      ) : (
        <ChevronDown size={18} className="text-slate-400" />
      )}
    </button>
    {isOpen && (
      <div className="p-5 border-t border-cyan-100 space-y-5 animate-in slide-in-from-top-2 duration-200">
        {children}
      </div>
    )}
  </div>
);

const Editor = ({ data, setData }: any) => {
  const [openSection, setOpenSection] = useState("personal");

  const updatePersonal = (field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const updateItem = (
    section: string,
    id: number,
    field: string,
    value: string
  ) => {
    setData((prev: any) => ({
      ...prev,
      [section]: prev[section].map((item: any) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = (section: string, template: any) => {
    setData((prev: any) => ({
      ...prev,
      [section]: [...prev[section], { ...template, id: Date.now() }],
    }));
  };

  const removeItem = (section: string, id: number) => {
    setData((prev: any) => ({
      ...prev,
      [section]: prev[section].filter((item: any) => item.id !== id),
    }));
  };

  const updateSkill = (catId: number, skillString: string) => {
    setData((prev: any) => ({
      ...prev,
      skills: prev.skills.map((cat: any) =>
        cat.id === catId
          ? { ...cat, skills: skillString.split(",").map((s) => s.trim()) }
          : cat
      ),
    }));
  };

  const toggleSection = (section: string) =>
    setOpenSection(openSection === section ? "" : section);

  return (
    <div className="p-5 space-y-6 pb-32">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Details</h2>
          <p className="text-xs text-slate-500 mt-1">
            Edit your information below
          </p>
        </div>
      </div>

      {/* Personal Info */}
      <SectionAccordion
        title="Personal Info"
        icon={Edit3}
        isOpen={openSection === "personal"}
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 gap-4">
          <InputGroup
            label="Full Name"
            value={data.personalInfo.name}
            onChange={(v: string) => updatePersonal("name", v)}
          />
          <InputGroup
            label="Job Title"
            value={data.personalInfo.title}
            onChange={(v: string) => updatePersonal("title", v)}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              label="Email"
              value={data.personalInfo.email}
              onChange={(v: string) => updatePersonal("email", v)}
            />
            <InputGroup
              label="Location"
              value={data.personalInfo.location}
              onChange={(v: string) => updatePersonal("location", v)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              label="GitHub"
              value={data.personalInfo.github}
              onChange={(v: string) => updatePersonal("github", v)}
            />
            <InputGroup
              label="LinkedIn"
              value={data.personalInfo.linkedin}
              onChange={(v: string) => updatePersonal("linkedin", v)}
            />
          </div>
        </div>
      </SectionAccordion>

      {/* Summary */}
      <SectionAccordion
        title="Professional Summary"
        icon={Edit3}
        isOpen={openSection === "summary"}
        onToggle={() => toggleSection("summary")}
      >
        <InputGroup
          type="textarea"
          label="Professional Profile"
          value={data.summary}
          onChange={(v: string) => setData((p: any) => ({ ...p, summary: v }))}
        />
      </SectionAccordion>

      {/* Projects */}
      <SectionAccordion
        title="Projects"
        icon={Briefcase}
        isOpen={openSection === "projects"}
        onToggle={() => toggleSection("projects")}
      >
        {data.projects.map((proj: any) => (
          <div
            key={proj.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group mb-4 hover:border-cyan-300 transition-colors"
          >
            <button
              onClick={() => removeItem("projects", proj.id)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
            <div className="grid grid-cols-2 gap-3 mb-3 pr-8">
              <InputGroup
                label="Project Name"
                value={proj.name}
                onChange={(v: string) =>
                  updateItem("projects", proj.id, "name", v)
                }
              />
              <InputGroup
                label="Role / Type"
                value={proj.type}
                onChange={(v: string) =>
                  updateItem("projects", proj.id, "type", v)
                }
              />
            </div>
            <InputGroup
              label="Tech Stack"
              value={proj.tech}
              onChange={(v: string) =>
                updateItem("projects", proj.id, "tech", v)
              }
              className="mb-3"
            />
            <InputGroup
              type="textarea"
              label="Description"
              value={proj.description}
              onChange={(v: string) =>
                updateItem("projects", proj.id, "description", v)
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("projects", {
              name: "New Project",
              type: "Full Stack",
              tech: "React, Node",
              description: "Brief description of the project...",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-500 font-medium hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
        >
          <Plus size={18} /> Add Project
        </button>
      </SectionAccordion>

      {/* Skills */}
      <SectionAccordion
        title="Skills"
        icon={Terminal}
        isOpen={openSection === "skills"}
        onToggle={() => toggleSection("skills")}
      >
        {data.skills.map((cat: any) => (
          <div
            key={cat.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group mb-3"
          >
            <button
              onClick={() => removeItem("skills", cat.id)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
            <InputGroup
              label="Category (e.g. Frontend)"
              value={cat.name}
              onChange={(v: string) => updateItem("skills", cat.id, "name", v)}
              className="mb-3"
            />
            <InputGroup
              label="Skills (comma separated)"
              value={cat.skills.join(", ")}
              onChange={(v: string) => updateSkill(cat.id, v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("skills", { name: "New Category", skills: ["Skill 1"] })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-500 font-medium hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
        >
          <Plus size={18} /> Add Skill Category
        </button>
      </SectionAccordion>

      {/* Education */}
      <SectionAccordion
        title="Education"
        icon={BookOpen}
        isOpen={openSection === "education"}
        onToggle={() => toggleSection("education")}
      >
        {data.education.map((edu: any) => (
          <div
            key={edu.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group mb-3"
          >
            <button
              onClick={() => removeItem("education", edu.id)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
            <InputGroup
              label="Degree"
              value={edu.degree}
              onChange={(v: string) =>
                updateItem("education", edu.id, "degree", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Institution"
              value={edu.school}
              onChange={(v: string) =>
                updateItem("education", edu.id, "school", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Years / Grade"
              value={edu.grade}
              onChange={(v: string) =>
                updateItem("education", edu.id, "grade", v)
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("education", {
              degree: "Degree",
              school: "University",
              grade: "2020-2024",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-500 font-medium hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
        >
          <Plus size={18} /> Add Education
        </button>
      </SectionAccordion>

      {/* Certifications */}
      <SectionAccordion
        title="Certifications"
        icon={Award}
        isOpen={openSection === "certs"}
        onToggle={() => toggleSection("certs")}
      >
        {data.certifications.map((cert: any) => (
          <div
            key={cert.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group mb-3"
          >
            <button
              onClick={() => removeItem("certifications", cert.id)}
              className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
            >
              <Trash2 size={16} />
            </button>
            <InputGroup
              label="Certification Name"
              value={cert.title}
              onChange={(v: string) =>
                updateItem("certifications", cert.id, "title", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Issuer / Date"
              value={cert.subtitle}
              onChange={(v: string) =>
                updateItem("certifications", cert.id, "subtitle", v)
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("certifications", {
              title: "Certificate Name",
              subtitle: "Issuer - Year",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-500 font-medium hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all"
        >
          <Plus size={18} /> Add Certification
        </button>
      </SectionAccordion>
    </div>
  );
};

// --- HELPER ICON ---
const UserIcon = ({ size, className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// --- MAIN COMPONENT ---
export default function ResumeBuilderModern() {
  const [data, setData] = useState(initialResumeData);
  const [activeTab, setActiveTab] = useState("editor");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start relative pb-20 lg:pb-0">
      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden w-full bg-white/80 backdrop-blur-md p-1 rounded-xl border border-slate-200 sticky top-20 z-40 mb-4 shadow-sm">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "editor"
              ? "bg-cyan-600 text-white shadow-lg shadow-cyan-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Editor
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "preview"
              ? "bg-cyan-600 text-white shadow-lg shadow-cyan-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Preview
        </button>
      </div>

      {/* Editor Column */}
      <div
        className={`w-full lg:w-[420px] flex-shrink-0 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 h-auto lg:h-[calc(100vh-8rem)] overflow-y-auto lg:sticky lg:top-24 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent ${activeTab === "editor" ? "block" : "hidden lg:block"} print:hidden`}
      >
        <Editor data={data} setData={setData} />
      </div>

      {/* Preview Column */}
      <div
        className={`flex-grow flex justify-center w-full overflow-x-hidden ${activeTab === "preview" ? "block" : "hidden lg:flex"}`}
      >
        <div className="w-full max-w-full overflow-x-auto lg:overflow-visible pb-10 origin-top scale-[0.65] sm:scale-100 lg:scale-100 mb-[-30%] sm:mb-0">
          <ResumePreview data={data} />
        </div>
      </div>

      {/* Print Button Wrapper for consistency with other templates */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="bg-cyan-600 text-white p-4 rounded-full shadow-2xl hover:bg-cyan-500 transition-all flex items-center justify-center"
          title="Download PDF"
        >
          <Printer size={24} />
        </button>
      </div>

      {/* Styles */}
      <style>{`
        @media print {
          body { background: white; -webkit-print-color-adjust: exact; }
          nav, .print\\:hidden { display: none !important; }
          #resume-preview { 
            box-shadow: none; 
            margin: 0; 
            padding: 0; 
            max-width: 100%;
            width: 100%;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}
