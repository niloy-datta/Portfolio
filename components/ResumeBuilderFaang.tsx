"use client";

import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Edit3,
  Eye,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";

// --- INITIAL DATA (FAANG STYLE) ---
const initialResumeData = {
  personalInfo: {
    name: "Alex Taylor",
    title: "Software Engineer",
    email: "alex.taylor@email.com",
    location: "Bay Area, CA",
    github: "alextaylor",
    linkedin: "alextaylor",
    phone: "+1 234-567-8900",
  },
  skills: [
    {
      id: 1,
      name: "Languages",
      skills: ["Java", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      id: 2,
      name: "Frameworks",
      skills: ["Spring Boot", "React", "Node.js", "Express", "JUnit"],
    },
    {
      id: 3,
      name: "Tools",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "Jenkins"],
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.S. Computer Science",
      school: "University of California, Berkeley",
      grade: "2018 - 2022",
    },
  ],
  certifications: [],
  summary:
    "Software Engineer with experience in building scalable backend systems and high-performance applications. Strong foundation in data structures and algorithms.",
  projects: [
    {
      id: 1,
      name: "Distributed Task Scheduler",
      type: "2023",
      tech: "Java, Spring Boot, Redis, Docker",
      description:
        "Built a highly available task scheduling system that manages 10k+ concurrent jobs.\n• Implemented leader election using Redis to ensure single-instance execution.\n• Designed RESTful APIs for job management and monitoring dashboards.",
    },
    {
      id: 2,
      name: "E-Commerce Microservices",
      type: "2022",
      tech: "Java, Spring Boot, MongoDB, Kubernetes",
      description:
        "Migrated a monolithic e-commerce platform to a microservices architecture.\n• Improved system uptime by 99.9% by implementing circuit breaker patterns.\n• Integrated CI/CD pipelines using Jenkins for automated testing and deployment.",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "Google Hash Code Finalist",
      subtitle: "Ranked top 50 globally in the qualification round",
    },
  ],
};

// --- PREVIEW ---
const ResumePreview = ({ data }: { data: typeof initialResumeData }) => {
  const { personalInfo, education, skills, summary, projects, achievements } =
    data;

  return (
    <div
      id="resume-preview"
      className="bg-white shadow-2xl min-h-[1100px] w-full max-w-[210mm] mx-auto p-12 font-serif text-slate-900 print:shadow-none print:w-full print:max-w-none"
    >
      <div className="text-center mb-8 border-b-2 border-slate-900 pb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">
          {personalInfo.name}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-1">
            <Mail size={14} /> {personalInfo.email}
          </span>
          <span className="flex items-center gap-1">
            <Phone size={14} /> {personalInfo.phone}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {personalInfo.location}
          </span>
          <span className="flex items-center gap-1">
            <Linkedin size={14} /> linkedin.com/in/{personalInfo.linkedin}
          </span>
          <span className="flex items-center gap-1">
            <Github size={14} /> github.com/{personalInfo.github}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wider">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-4 tracking-wider">
            Experience \u0026 Projects
          </h2>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base">{proj.name}</h3>
                  <span className="text-sm font-medium text-slate-600">
                    {proj.type}
                  </span>
                </div>
                <div className="text-xs font-bold italic text-slate-500 mb-2">
                  {proj.tech}
                </div>
                <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-4 tracking-wider">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {skills.map((cat) => (
              <div key={cat.id} className="flex gap-2 text-sm">
                <span className="font-bold w-32 flex-shrink-0">
                  {cat.name}:
                </span>
                <span className="text-slate-700">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-4 tracking-wider">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <div className="text-sm text-slate-600">{edu.school}</div>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  {edu.grade}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 tracking-wider">
            Honors \u0026 Awards
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            {achievements.map((item) => (
              <li key={item.id}>
                <span className="font-bold">{item.title}</span> -{" "}
                {item.subtitle}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// --- EDITOR ---
const InputGroup = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: any) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="w-full bg-white border border-slate-300 rounded-sm p-2 text-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all min-h-[100px] text-slate-800"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-white border border-slate-300 rounded-sm p-2 text-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all text-slate-800"
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
    className={`border rounded-sm overflow-hidden mb-2 transition-all ${isOpen ? "border-slate-400 shadow-sm bg-white" : "border-slate-200 bg-slate-50"}`}
  >
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-3 transition-colors text-left cursor-pointer ${isOpen ? "bg-slate-50" : "hover:bg-slate-100"}`}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={16}
          className={isOpen ? "text-slate-900" : "text-slate-500"}
        />
        <span
          className={`font-bold text-xs uppercase tracking-wider ${isOpen ? "text-slate-900" : "text-slate-600"}`}
        >
          {title}
        </span>
      </div>
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
    {isOpen && (
      <div className="p-4 border-t border-slate-200 space-y-4">{children}</div>
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
    <div className="p-4 space-y-4 pb-32">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight uppercase">
          FAANG Editor
        </h2>
      </div>

      <SectionAccordion
        title="Personal"
        icon={User}
        isOpen={openSection === "personal"}
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 gap-3">
          <InputGroup
            label="Name"
            value={data.personalInfo.name}
            onChange={(v: any) => updatePersonal("name", v)}
          />
          <InputGroup
            label="Email"
            value={data.personalInfo.email}
            onChange={(v: any) => updatePersonal("email", v)}
          />
          <InputGroup
            label="Phone"
            value={data.personalInfo.phone}
            onChange={(v: any) => updatePersonal("phone", v)}
          />
          <InputGroup
            label="Github"
            value={data.personalInfo.github}
            onChange={(v: any) => updatePersonal("github", v)}
          />
          <InputGroup
            label="LinkedIn"
            value={data.personalInfo.linkedin}
            onChange={(v: any) => updatePersonal("linkedin", v)}
          />
        </div>
      </SectionAccordion>

      <SectionAccordion
        title="Projects"
        icon={Briefcase}
        isOpen={openSection === "projects"}
        onToggle={() => toggleSection("projects")}
      >
        {data.projects.map((proj: any) => (
          <div
            key={proj.id}
            className="p-3 border border-slate-200 rounded-sm bg-white relative mb-3"
          >
            <button
              onClick={() => removeItem("projects", proj.id)}
              className="absolute top-2 right-2 text-slate-300 hover:text-red-500"
            >
              <Trash2 size={12} />
            </button>
            <InputGroup
              label="Name"
              value={proj.name}
              onChange={(v: any) => updateItem("projects", proj.id, "name", v)}
              className="mb-2"
            />
            <InputGroup
              label="Stack"
              value={proj.tech}
              onChange={(v: any) => updateItem("projects", proj.id, "tech", v)}
              className="mb-2"
            />
            <InputGroup
              type="textarea"
              label="Impact"
              value={proj.description}
              onChange={(v: any) =>
                updateItem("projects", proj.id, "description", v)
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("projects", {
              name: "Project",
              type: "2024",
              tech: "Java...",
              description: "Description...",
            })
          }
          className="w-full py-2 border border-dashed border-slate-300 text-xs font-bold text-slate-500 hover:bg-slate-50 uppercase tracking-widest"
        >
          + Add Project
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Skills"
        icon={Edit3}
        isOpen={openSection === "skills"}
        onToggle={() => toggleSection("skills")}
      >
        {data.skills.map((cat: any) => (
          <div
            key={cat.id}
            className="p-3 border border-slate-200 rounded-sm bg-white relative mb-3"
          >
            <button
              onClick={() => removeItem("skills", cat.id)}
              className="absolute top-2 right-2 text-slate-300 hover:text-red-500"
            >
              <Trash2 size={12} />
            </button>
            <InputGroup
              label="Category"
              value={cat.name}
              onChange={(v: any) => updateItem("skills", cat.id, "name", v)}
              className="mb-2"
            />
            <InputGroup
              label="Items"
              value={cat.skills.join(", ")}
              onChange={(v: any) => updateSkill(cat.id, v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("skills", { name: "New Category", skills: [] })
          }
          className="w-full py-2 border border-dashed border-slate-300 text-xs font-bold text-slate-500 hover:bg-slate-50 uppercase tracking-widest"
        >
          + Add Skill
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Education"
        icon={FileText}
        isOpen={openSection === "education"}
        onToggle={() => toggleSection("education")}
      >
        {data.education.map((edu: any) => (
          <div
            key={edu.id}
            className="p-3 border border-slate-200 rounded-sm bg-white relative mb-3"
          >
            <button
              onClick={() => removeItem("education", edu.id)}
              className="absolute top-2 right-2 text-slate-300 hover:text-red-500"
            >
              <Trash2 size={12} />
            </button>
            <InputGroup
              label="Degree"
              value={edu.degree}
              onChange={(v: any) =>
                updateItem("education", edu.id, "degree", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="School"
              value={edu.school}
              onChange={(v: any) =>
                updateItem("education", edu.id, "school", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Dates"
              value={edu.grade}
              onChange={(v: any) => updateItem("education", edu.id, "grade", v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("education", {
              degree: "Degree",
              school: "Univ",
              grade: "2024",
            })
          }
          className="w-full py-2 border border-dashed border-slate-300 text-xs font-bold text-slate-500 hover:bg-slate-50 uppercase tracking-widest"
        >
          + Add Education
        </button>
      </SectionAccordion>
    </div>
  );
};

export default function ResumeBuilderFaang() {
  const [data, setData] = useState(initialResumeData);
  const [activeTab, setActiveTab] = useState("editor");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen">
      {/* Mobile Tabs */}
      <div className="flex lg:hidden bg-slate-200 rounded-xl p-1 mb-6 sticky top-20 z-40 border border-slate-300">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "editor"
              ? "bg-slate-900 text-white shadow-lg"
              : "text-slate-600"
          }`}
        >
          <Edit3 size={18} />
          <span className="font-bold">Editor</span>
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "preview"
              ? "bg-slate-900 text-white shadow-lg"
              : "text-slate-600"
          }`}
        >
          <Eye size={18} />
          <span className="font-bold">Preview</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start relative pb-20 lg:pb-0">
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
      </div>

      {/* Print Button Wrapper */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-black hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Print to PDF"
        >
          <Printer
            size={24}
            className="group-hover:rotate-12 transition-transform"
          />
        </button>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
          #resume-preview { 
            box-shadow: none !important; 
            margin: 0 !important; 
            padding: 0 !important; 
            max-width: 100% !important;
            width: 100% !important;
          }
          @page { margin: 1cm; }
        }
      `}</style>
    </div>
  );
}
