"use client";

import {
  Award,
  ChevronDown,
  ChevronUp,
  Edit3,
  Eye,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plus,
  Printer,
  Terminal,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";

// --- INITIAL DATA (OPTIMIZED FOR EUROPASS) ---
const initialResumeData = {
  personalInfo: {
    name: "Alex Taylor",
    title: "Senior Software Engineer",
    email: "alex.taylor@dev.com",
    location: "San Francisco, CA, USA",
    github: "alextaylor-dev",
    linkedin: "alex-taylor-pro",
    phone: "+1 (555) 123-4567",
  },
  skills: [
    { id: 1, name: "Mother tongue(s)", skills: ["English"] },
    {
      id: 2,
      name: "Programming Languages",
      skills: ["Java", "Python", "JavaScript/TypeScript", "C++", "SQL", "Rust"],
    },
    {
      id: 3,
      name: "Frameworks & Libs",
      skills: ["Spring Boot", "React", "Next.js", "Node.js", "PyTorch", "gRPC"],
    },
    {
      id: 4,
      name: "Cloud & Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "AWS (EC2, Lambda, S3)",
        "Jenkins",
        "Terraform",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      grade: "2018 - 2020",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      grade: "2014 - 2018",
    },
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      subtitle: "Associate Level",
    },
  ],
  summary:
    "Resilient, high-performance applications specialist. Expert in backend systems with Java Spring Boot and native Android development. Committed to building distributed systems with 6+ years of experience in the field.",
  projects: [
    {
      id: 1,
      name: "Nexus Distributed Cache",
      type: "Full Time",
      tech: "Rust, Redis, gRPC",
      description:
        "Architected a low-latency distributed caching system supporting 100k+ req/sec.\n• Reduced database load by 40% through intelligent invalidation strategies.\n• Implemented eventual consistency models for multi-region data replication.",
    },
    {
      id: 2,
      name: "SwiftPay Mobile",
      type: "Contract",
      tech: "Kotlin, Android SDK, JWT",
      description:
        "Developed a secure payment gateway for high-traffic e-commerce applications.\n• Integrated biometric authentication and multi-factor security layers.\n• Optimized network calls, resulting in a 25% faster transaction processing time.",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "Open Source Contributor",
      subtitle: "Active contributor to several major Apache projects",
    },
  ],
};

// --- HELPER COMPONENTS ---
const SidebarItem = ({ icon: Icon, text, link }: any) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="bg-blue-600 text-white p-2 rounded-full mt-1 flex-shrink-0">
      <Icon size={16} />
    </div>
    <div className="flex flex-col">
      {link ? (
        <a
          href={link.startsWith("http") ? link : `https://${link}`}
          className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors break-all"
        >
          {text}
        </a>
      ) : (
        <span className="text-sm font-medium text-slate-700 break-words">
          {text}
        </span>
      )}
    </div>
  </div>
);

const SectionHeader = ({ title, icon: Icon }: any) => (
  <div className="flex items-center gap-3 border-b-2 border-blue-600 mb-6 pb-2">
    <div className="bg-blue-600 text-white p-2 rounded-lg">
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-bold text-blue-900 uppercase tracking-tight">
      {title}
    </h3>
  </div>
);

// --- EUROPASS PREVIEW ---
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
      className="bg-white shadow-2xl min-h-[1100px] w-full max-w-[210mm] mx-auto flex flex-col font-sans print:shadow-none print:w-full print:max-w-none"
    >
      {/* Header Banner */}
      <div className="bg-blue-900 h-6 w-full print:bg-blue-900"></div>

      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Info Column */}
        <div className="w-full md:w-[35%] bg-slate-50 p-8 border-r border-slate-200">
          <div className="w-40 h-40 mx-auto bg-slate-200 rounded-2xl flex items-center justify-center mb-8 border-4 border-white shadow-lg overflow-hidden">
            <User size={80} className="text-slate-400" />
          </div>

          <div className="mb-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">
              Contact Details
            </h4>
            <SidebarItem icon={Mail} text={personalInfo.email} />
            <SidebarItem icon={Phone} text={personalInfo.phone} />
            <SidebarItem icon={MapPin} text={personalInfo.location} />
            <SidebarItem
              icon={Linkedin}
              text="linkedin.com/in/alex-taylor"
              link={personalInfo.linkedin}
            />
            <SidebarItem
              icon={Github}
              text="github.com/alextaylor"
              link={personalInfo.github}
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">
              Technical Stack
            </h4>
            <div className="space-y-6">
              {skills.map((cat) => (
                <div key={cat.id}>
                  <div className="text-blue-900 font-bold text-xs uppercase mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-white text-slate-700 px-2.5 py-1 rounded text-xs border border-slate-200 font-medium shadow-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-[65%] p-10 bg-white">
          <div className="mb-12">
            <h1 className="text-5xl font-black text-blue-900 uppercase tracking-tighter leading-none mb-3">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-blue-600 font-bold tracking-tight mb-6">
              {personalInfo.title}
            </h2>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <p className="text-slate-700 leading-relaxed text-sm italic font-medium">
                {summary}
              </p>
            </div>
          </div>

          <SectionHeader title="Professional Experience" icon={Globe} />
          <div className="space-y-10 mb-12">
            {projects.map((proj) => (
              <div key={proj.id} className="flex gap-6 group">
                <div className="w-24 flex-shrink-0">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider block text-center border border-blue-100">
                    {proj.type}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-extrabold text-lg text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {proj.name}
                  </h4>
                  <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">
                    {proj.tech}
                  </div>
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader title="Education" icon={FileText} />
          <div className="space-y-8 mb-12">
            {education.map((edu) => (
              <div key={edu.id} className="flex gap-6">
                <div className="w-24 flex-shrink-0">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block text-center">
                    {edu.grade}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800 text-lg">
                    {edu.degree}
                  </h4>
                  <span className="text-blue-600 font-bold text-sm">
                    {edu.school}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader title="Achievements" icon={Award} />
          <div className="grid grid-cols-1 gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md"
              >
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-800">{item.title}</div>
                  <div className="text-sm text-slate-500 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all min-h-[120px] text-slate-800 font-sans shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-800 font-sans shadow-sm"
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
    className={`border rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? "border-blue-600 shadow-lg bg-white" : "border-slate-200 bg-slate-50 hover:bg-white"}`}
  >
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-4 transition-colors text-left cursor-pointer ${isOpen ? "bg-blue-50" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg ${isOpen ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}
        >
          <Icon size={18} />
        </div>
        <span
          className={`font-bold text-sm ${isOpen ? "text-blue-900" : "text-slate-600"}`}
        >
          {title}
        </span>
      </div>
      {isOpen ? (
        <ChevronUp size={20} className="text-blue-600" />
      ) : (
        <ChevronDown size={20} className="text-slate-400" />
      )}
    </button>
    {isOpen && (
      <div className="p-6 border-t border-slate-100 space-y-5 animate-in slide-in-from-top-2 duration-200">
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
    <div className="p-6 space-y-6 pb-32 font-sans">
      <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-blue-900 tracking-tight">
            Editor
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
            Europass Standards
          </p>
        </div>
      </div>

      <SectionAccordion
        title="Personal Details"
        icon={User}
        isOpen={openSection === "personal"}
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 gap-5">
          <InputGroup
            label="Full Name"
            value={data.personalInfo.name}
            onChange={(v: any) => updatePersonal("name", v)}
          />
          <InputGroup
            label="Professional Title"
            value={data.personalInfo.title}
            onChange={(v: any) => updatePersonal("title", v)}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              label="Email Address"
              value={data.personalInfo.email}
              onChange={(v: any) => updatePersonal("email", v)}
            />
            <InputGroup
              label="Phone Number"
              value={data.personalInfo.phone}
              onChange={(v: any) => updatePersonal("phone", v)}
            />
          </div>
          <InputGroup
            label="Current Location"
            value={data.personalInfo.location}
            onChange={(v: any) => updatePersonal("location", v)}
          />
        </div>
      </SectionAccordion>

      <SectionAccordion
        title="Work History"
        icon={Globe}
        isOpen={openSection === "projects"}
        onToggle={() => toggleSection("projects")}
      >
        <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800 mb-4 border border-blue-100 font-medium leading-relaxed">
          Europass format emphasize role types. Use the &quot;Type&quot; field
          for dates or contract types (e.g. &quot;Jan 2020 - Present&quot;).
        </div>
        {data.projects.map((proj: any) => (
          <div
            key={proj.id}
            className="p-4 border border-slate-200 rounded-xl bg-white relative group mb-5 shadow-sm transition-all hover:border-blue-300"
          >
            <button
              onClick={() => removeItem("projects", proj.id)}
              className="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
            <div className="grid grid-cols-2 gap-4 mb-4 pr-8">
              <InputGroup
                label="Company/Project"
                value={proj.name}
                onChange={(v: any) =>
                  updateItem("projects", proj.id, "name", v)
                }
              />
              <InputGroup
                label="Duration/Type"
                value={proj.type}
                onChange={(v: any) =>
                  updateItem("projects", proj.id, "type", v)
                }
              />
            </div>
            <InputGroup
              label="Key Technologies"
              value={proj.tech}
              onChange={(v: any) => updateItem("projects", proj.id, "tech", v)}
              className="mb-4"
            />
            <InputGroup
              type="textarea"
              label="Responsibilities \u0026 Achievements"
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
              name: "Company Name",
              type: "Dates",
              tech: "Tech used",
              description: "Achievements...",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 text-sm font-bold hover:bg-slate-50 hover:border-blue-300 transition-all"
        >
          <Plus size={18} /> Add Experience
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Expertise"
        icon={Terminal}
        isOpen={openSection === "skills"}
        onToggle={() => toggleSection("skills")}
      >
        {data.skills.map((cat: any) => (
          <div
            key={cat.id}
            className="p-5 border border-slate-200 rounded-xl bg-white relative group mb-4 shadow-sm"
          >
            <button
              onClick={() => removeItem("skills", cat.id)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
            <InputGroup
              label="Group Name"
              value={cat.name}
              onChange={(v: any) => updateItem("skills", cat.id, "name", v)}
              className="mb-4"
            />
            <InputGroup
              label="Specific Skills (comma separated)"
              value={cat.skills.join(", ")}
              onChange={(v: any) => updateSkill(cat.id, v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("skills", { name: "Skill Category", skills: ["Skill"] })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 text-sm font-bold hover:bg-slate-50 transition-all"
        >
          <Plus size={18} /> Add Category
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Academics"
        icon={FileText}
        isOpen={openSection === "education"}
        onToggle={() => toggleSection("education")}
      >
        {data.education.map((edu: any) => (
          <div
            key={edu.id}
            className="p-5 border border-slate-200 rounded-xl bg-white relative group mb-4 shadow-sm"
          >
            <button
              onClick={() => removeItem("education", edu.id)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
            <InputGroup
              label="Qualification"
              value={edu.degree}
              onChange={(v: any) =>
                updateItem("education", edu.id, "degree", v)
              }
              className="mb-4"
            />
            <InputGroup
              label="Institution Name"
              value={edu.school}
              onChange={(v: any) =>
                updateItem("education", edu.id, "school", v)
              }
              className="mb-4"
            />
            <InputGroup
              label="Duration"
              value={edu.grade}
              onChange={(v: any) => updateItem("education", edu.id, "grade", v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("education", {
              degree: "Degree",
              school: "University",
              grade: "Dates",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 text-sm font-bold hover:bg-slate-50 transition-all"
        >
          <Plus size={18} /> Add Education
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Summary"
        icon={Edit3}
        isOpen={openSection === "summary"}
        onToggle={() => toggleSection("summary")}
      >
        <InputGroup
          type="textarea"
          label="Professional Summary"
          value={data.summary}
          onChange={(v: any) => setData((p: any) => ({ ...p, summary: v }))}
        />
      </SectionAccordion>
    </div>
  );
};

// --- MAIN PROJECT BUILDER COMPONENT ---
export default function ResumeBuilderEuropass() {
  const [data, setData] = useState(initialResumeData);
  const [activeTab, setActiveTab] = useState("editor");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen">
      {/* Mobile Tabs */}
      <div className="flex lg:hidden bg-blue-100 rounded-xl p-1 mb-6 sticky top-20 z-40 border border-blue-200">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "editor"
              ? "bg-blue-600 text-white shadow-lg"
              : "text-blue-600"
          }`}
        >
          <Edit3 size={18} />
          <span className="font-bold">Editor</span>
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${
            activeTab === "preview"
              ? "bg-blue-600 text-white shadow-lg"
              : "text-blue-600"
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
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Print to PDF"
        >
          <Printer
            size={24}
            className="group-hover:rotate-12 transition-transform"
          />
        </button>
      </div>

      {/* Print Styles Override */}
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
