"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Edit3,
  Eye,
  Github,
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

// --- INITIAL DATA (Amazon-Targeted Spring Boot Role) ---
const initialResumeData = {
  personalInfo: {
    name: "Niloy Datta",
    title: "Full-Stack Engineer | Backend & Distributed Systems Specialist",
    email: "niloy.datta.dev@gmail.com",
    location: "Sylhet, Bangladesh",
    github: "niloy-datta",
    linkedin: "niloy-datta",
    phone: "+880 1712-345678",
  },
  skills: [
    {
      id: 1,
      name: "Backend & Architecture",
      skills: [
        "Java",
        "Spring Boot 3.x",
        "Spring Security",
        "Microservices Architecture",
        "PostgreSQL",
        "System Design (HLD/LLD)",
        "REST/gRPC",
      ],
    },
    {
      id: 2,
      name: "Mobile Development",
      skills: [
        "Kotlin",
        "Android SDK",
        "Jetpack Compose",
        "Clean Architecture (MVVM)",
      ],
    },
    {
      id: 3,
      name: "Frontend Engineering",
      skills: ["React", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      id: 4,
      name: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, RDS)",
        "Docker",
        "CI/CD Orchestration",
        "Git",
        "Unit/Integration Testing",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc. in Computer Science & Engineering",
      school: "Metropolitan University, Sylhet",
      grade: "2024 - 2027",
    },
  ],
  certifications: [
    {
      id: 1,
      title: "Oracle Certified Professional",
      subtitle: "Java Developer - 2026",
    },
    {
      id: 2,
      title: "AWS Solutions Architect",
      subtitle: "Certified Associate - 2026",
    },
  ],
  summary:
    "Results-driven Full-Stack Engineer with an extensive specialization in Java and the Spring Boot ecosystem. Proven expertise in architecting high-availability backend systems and scalable, cloud-native distributed applications. Highly focused on engineering excellence, utilizing modern design patterns and performance optimization techniques to deliver robust, production-grade solutions for complex, high-traffic environments.",
  projects: [
    {
      id: 1,
      name: "EduNexus Platform",
      type: "2023 - Present",
      tech: "Java, Spring Boot, MongoDB, Microservices",
      description:
        "Architected a highly scalable educational ecosystem utilizing Spring Boot and Microservices to support concurrent user sessions.\n• Developed a resilient real-time communication engine using WebSocket and Spring Boot.\n• Optimized database query performance and implemented caching strategies to maintain high system throughput and reliability.",
    },
    {
      id: 2,
      name: "ExamHero Ecosystem",
      type: "2022 - 2023",
      tech: "Java, Kotlin, Room DB",
      description:
        "Engineered a suite of high-performance Android applications with an offline-first architecture for over 7+ successful Play Store launches.\n• Built complex local state management logic ensuring 100% data consistency during intermittent network connectivity.\n• Integrated performance analytics to identify and resolve UI/UX bottlenecks, improving user retention.",
    },
    {
      id: 3,
      name: "High-Performance E-Commerce Engine",
      type: "2022",
      tech: "Java, Spring Boot, React, PostgreSQL",
      description:
        "Designed and implemented a full-scale e-commerce backend focusing on secure transaction processing and efficient inventory management.\n• Engineered a secure auth layer using Spring Security and JWT for distributed session management.\n• Optimized backend response times and front-end delivery, achieving top-tier performance scores on Core Web Vitals.",
    },
    {
      id: 4,
      name: "VocalLink (R&D)",
      type: "In Progress",
      tech: "Java, WebRTC, Socket.io, Spring Boot",
      description:
        "Currently architecting a low-latency P2P communication platform for HD video and voice streaming.\n• Implementing mesh networking topologies to achieve sub-50ms latency for real-time data transmission.\n• Utilizing Spring Boot for robust signaling server implementation and high-availability session coordination.",
    },
  ],
  achievements: [
    {
      id: 1,
      type: "award",
      title: "7+ Android Apps Published",
      subtitle:
        "Successfully developed and deployed native apps with 10k+ cumulative downloads on Google Play Store",
    },
    {
      id: 2,
      type: "award",
      title: "Finalist (Top 10), Ideathon",
      subtitle:
        "CSE Fest MU 2025 - Selected from 90+ competing teams for technical innovation",
    },
    {
      id: 3,
      type: "academic",
      title: "Competitive Programming",
      subtitle:
        "Codeforces Rating: 1400 - Algorithmic problem-solving proficiency",
    },
  ],
};

// --- HELPER COMPONENTS ---
const SidebarItem = ({ icon: Icon, text, link }: any) => (
  <div className="flex items-start gap-3 text-sm text-slate-300 mb-3">
    <Icon size={16} className="mt-0.5 text-cyan-400 flex-shrink-0" />
    {link ? (
      <a
        href={link.startsWith("http") ? link : `https://${link}`}
        className="hover:text-white transition-colors break-all"
      >
        {text}
      </a>
    ) : (
      <span className="break-words">{text}</span>
    )}
  </div>
);

const SectionHeader = ({ title, className = "" }: any) => (
  <h3
    className={`text-lg font-bold uppercase tracking-wider text-blue-900 border-b-2 border-blue-900 mb-4 pb-1 ${className}`}
  >
    {title}
  </h3>
);

// --- PREVIEW ---
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
      className="bg-white shadow-2xl min-h-[1100px] w-full max-w-[210mm] mx-auto flex flex-col md:flex-row font-sans print:shadow-none print:w-full print:max-w-none"
    >
      {/* --- LEFT SIDEBAR --- */}
      <div className="w-full md:w-[35%] bg-slate-900 text-white p-8 print:bg-slate-900 print:text-white print:w-[35%]">
        <div className="w-32 h-32 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-8 border-4 border-slate-700 overflow-hidden">
          <User size={64} className="text-slate-500" />
        </div>

        <div className="mb-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Contact
          </h4>
          <SidebarItem icon={Mail} text={personalInfo.email} />
          <SidebarItem icon={Phone} text={personalInfo.phone} />
          <SidebarItem icon={MapPin} text={personalInfo.location} />
          <SidebarItem
            icon={Linkedin}
            text={`linkedin.com/in/${personalInfo.linkedin}`}
            link={personalInfo.linkedin}
          />
          <SidebarItem
            icon={Github}
            text={`github.com/${personalInfo.github}`}
            link={personalInfo.github}
          />
        </div>

        <div className="mb-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Technical Stack
          </h4>
          <div className="space-y-6">
            {skills.map((cat) => (
              <div key={cat.id}>
                <div className="text-cyan-400 font-bold text-xs uppercase mb-2">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-slate-800 text-slate-200 px-2 py-1 rounded text-xs border border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Certifications
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            {certifications.map((cert) => (
              <li key={cert.id} className="flex flex-col">
                <span className="font-bold text-white">{cert.title}</span>
                <span className="text-xs text-slate-400">{cert.subtitle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- RIGHT CONTENT --- */}
      <div className="w-full md:w-[65%] p-8 md:p-10 bg-white text-slate-800 print:w-[65%]">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-blue-500 font-bold lowercase flex items-center gap-1 mb-2">
              <span className="bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-sm text-xs font-serif">
                E
              </span>{" "}
              europass
            </div>
            <h1 className="text-4xl font-extrabold text-blue-900 uppercase tracking-tight leading-none mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl text-blue-500 font-medium">
              {personalInfo.title}
            </h2>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-slate-600 leading-relaxed text-sm italic">
            {summary}
          </p>
        </div>

        <SectionHeader title="Professional Experience & Projects" />
        <div className="space-y-6 mb-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="relative pl-4 border-l-2 border-slate-200"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h4 className="font-bold text-lg text-slate-800">
                  {proj.name}
                </h4>
                <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  <Calendar size={12} /> {proj.type}
                </div>
              </div>
              <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
                {proj.tech}
              </div>
              <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                {proj.description}
              </p>
            </div>
          ))}
        </div>

        <SectionHeader title="Education" />
        <div className="space-y-4 mb-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col">
              <h4 className="font-bold text-slate-800">{edu.degree}</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-slate-600 text-sm">{edu.school}</span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

        <SectionHeader title="Honours & Awards" />
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-3 rounded border border-slate-100 flex items-start gap-3"
            >
              <Award className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <div className="font-bold text-sm text-slate-800">
                  {item.title}
                </div>
                <div className="text-xs text-slate-500">{item.subtitle}</div>
              </div>
            </div>
          ))}
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
        className="w-full bg-white border border-slate-300 rounded-sm p-2 text-sm focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all min-h-[100px] text-slate-800 font-sans"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-white border border-slate-300 rounded-sm p-2 text-sm focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all text-slate-800 font-sans"
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
    className={`border rounded-sm overflow-hidden mb-3 transition-all duration-200 ${isOpen ? "border-blue-400 shadow-sm bg-white" : "border-slate-200 bg-slate-50"}`}
  >
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between p-3 transition-colors text-left cursor-pointer ${isOpen ? "bg-blue-50" : "hover:bg-slate-100"}`}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={16}
          className={isOpen ? "text-blue-900" : "text-slate-500"}
        />
        <span
          className={`font-semibold text-sm ${isOpen ? "text-blue-900" : "text-slate-600"}`}
        >
          {title}
        </span>
      </div>
      {isOpen ? (
        <ChevronUp size={16} className="text-blue-900" />
      ) : (
        <ChevronDown size={16} className="text-slate-400" />
      )}
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
    <div className="p-5 space-y-6 pb-32 font-sans">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-bold text-blue-900">Editor</h2>
          <p className="text-xs text-slate-500 mt-1">
            Targeted Role: Spring Boot Developer
          </p>
        </div>
      </div>

      <SectionAccordion
        title="Personal Information"
        icon={Edit3}
        isOpen={openSection === "personal"}
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 gap-4">
          <InputGroup
            label="Name"
            value={data.personalInfo.name}
            onChange={(v: any) => updatePersonal("name", v)}
          />
          <InputGroup
            label="Title"
            value={data.personalInfo.title}
            onChange={(v: any) => updatePersonal("title", v)}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              label="Email"
              value={data.personalInfo.email}
              onChange={(v: any) => updatePersonal("email", v)}
            />
            <InputGroup
              label="Telephone"
              value={data.personalInfo.phone}
              onChange={(v: any) => updatePersonal("phone", v)}
            />
          </div>
          <InputGroup
            label="Address"
            value={data.personalInfo.location}
            onChange={(v: any) => updatePersonal("location", v)}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputGroup
              label="GitHub (Username)"
              value={data.personalInfo.github}
              onChange={(v: any) => updatePersonal("github", v)}
            />
            <InputGroup
              label="LinkedIn (Username)"
              value={data.personalInfo.linkedin}
              onChange={(v: any) => updatePersonal("linkedin", v)}
            />
          </div>
        </div>
      </SectionAccordion>

      <SectionAccordion
        title="Experience & Projects"
        icon={Briefcase}
        isOpen={openSection === "projects"}
        onToggle={() => toggleSection("projects")}
      >
        {data.projects.map((proj: any) => (
          <div
            key={proj.id}
            className="p-3 border border-slate-300 rounded-sm bg-white relative group mb-4 shadow-sm"
          >
            <button
              onClick={() => removeItem("projects", proj.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
            <div className="grid grid-cols-2 gap-3 mb-2 pr-6">
              <InputGroup
                label="Project Name"
                value={proj.name}
                onChange={(v: any) =>
                  updateItem("projects", proj.id, "name", v)
                }
              />
              <InputGroup
                label="Dates / Duration"
                value={proj.type}
                onChange={(v: any) =>
                  updateItem("projects", proj.id, "type", v)
                }
              />
            </div>
            <InputGroup
              label="Core Tech Stack"
              value={proj.tech}
              onChange={(v: any) => updateItem("projects", proj.id, "tech", v)}
              className="mb-2"
            />
            <InputGroup
              type="textarea"
              label="Impact Description"
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
              name: "New Project",
              type: "2024 - Present",
              tech: "Java, Spring Boot...",
              description: "Describe impact using metrics...",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-slate-300 rounded text-slate-600 text-sm hover:bg-slate-50 transition-all"
        >
          <Plus size={14} /> Add Item
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Skills & Tech"
        icon={Terminal}
        isOpen={openSection === "skills"}
        onToggle={() => toggleSection("skills")}
      >
        {data.skills.map((cat: any) => (
          <div
            key={cat.id}
            className="p-3 border border-slate-300 rounded-sm bg-white relative group mb-3 shadow-sm"
          >
            <button
              onClick={() => removeItem("skills", cat.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
            <InputGroup
              label="Category"
              value={cat.name}
              onChange={(v: any) => updateItem("skills", cat.id, "name", v)}
              className="mb-2"
            />
            <InputGroup
              label="Values"
              value={cat.skills.join(", ")}
              onChange={(v: any) => updateSkill(cat.id, v)}
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("skills", { name: "New Skill", skills: ["Value"] })
          }
          className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-slate-300 rounded text-slate-600 text-sm hover:bg-slate-50 transition-all"
        >
          <Plus size={14} /> Add Category
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Education"
        icon={BookOpen}
        isOpen={openSection === "education"}
        onToggle={() => toggleSection("education")}
      >
        {data.education.map((edu: any) => (
          <div
            key={edu.id}
            className="p-3 border border-slate-300 rounded-sm bg-white relative group mb-3 shadow-sm"
          >
            <button
              onClick={() => removeItem("education", edu.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
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
              label="Institution"
              value={edu.school}
              onChange={(v: any) =>
                updateItem("education", edu.id, "school", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Timeline"
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
              grade: "2020 - 2024",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-slate-300 rounded text-slate-600 text-sm hover:bg-slate-50 transition-all"
        >
          <Plus size={14} /> Add Education
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

      <SectionAccordion
        title="Certs & Awards"
        icon={Award}
        isOpen={openSection === "certs"}
        onToggle={() => toggleSection("certs")}
      >
        {data.certifications.map((item: any) => (
          <div
            key={item.id}
            className="p-3 border border-slate-300 rounded-sm bg-white relative group mb-3 shadow-sm"
          >
            <button
              onClick={() => removeItem("certifications", item.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
            <InputGroup
              label="Certificate"
              value={item.title}
              onChange={(v: any) =>
                updateItem("certifications", item.id, "title", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Subtitle"
              value={item.subtitle}
              onChange={(v: any) =>
                updateItem("certifications", item.id, "subtitle", v)
              }
            />
          </div>
        ))}
        {data.achievements.map((item: any) => (
          <div
            key={item.id}
            className="p-3 border border-slate-300 rounded-sm bg-white relative group mb-3 shadow-sm"
          >
            <button
              onClick={() => removeItem("achievements", item.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
            <InputGroup
              label="Award"
              value={item.title}
              onChange={(v: any) =>
                updateItem("achievements", item.id, "title", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Details"
              value={item.subtitle}
              onChange={(v: any) =>
                updateItem("achievements", item.id, "subtitle", v)
              }
            />
          </div>
        ))}
        <button
          onClick={() =>
            addItem("certifications", {
              title: "Name",
              subtitle: "Description",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-slate-300 rounded text-slate-600 text-sm hover:bg-slate-50 transition-all"
        >
          <Plus size={14} /> Add Item
        </button>
      </SectionAccordion>
    </div>
  );
};

// --- MAIN WRAPPER ---
export default function ResumeBuilderAmazon() {
  const [data, setData] = useState(initialResumeData);
  const [activeTab, setActiveTab] = useState("editor");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen">
      {/* Mobile Tabs (Simplified consistent with other builders) */}
      <div className="flex lg:hidden bg-blue-100 rounded-xl p-1 mb-6 sticky top-20 z-40 border border-blue-200">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${activeTab === "editor" ? "bg-blue-600 text-white shadow-lg" : "text-blue-600"}`}
        >
          <Edit3 size={18} />
          <span className="font-bold">Editor</span>
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all cursor-pointer ${activeTab === "preview" ? "bg-blue-600 text-white shadow-lg" : "text-blue-600"}`}
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
