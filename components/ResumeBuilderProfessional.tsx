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
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Plus,
  Printer,
  Terminal,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

// --- INITIAL DATA ---
const initialResumeData = {
  personalInfo: {
    name: "Niloy Chandra Datta",
    title: "Full-Stack Engineer & Backend Architect",
    email: "niloy.datta.dev@gmail.com",
    location: "Sylhet, Bangladesh",
    github: "NiloyChandraDatta",
    linkedin: "niloy-chandra-datta",
    portfolio: "niloychnadradatta.dev",
    phone: "+880 1712-345678",
    photo: null,
  },
  skills: [
    {
      id: 1,
      name: "Backend & Architecture",
      skills: [
        "Java",
        "Spring Boot 3.x",
        "Enterprise Microservices",
        "PostgreSQL",
        "Distributed Systems",
        "Spring Security",
      ],
    },
    {
      id: 2,
      name: "Mobile Development",
      skills: [
        "Kotlin",
        "Android SDK",
        "Jetpack Compose",
        "Clean Architecture",
      ],
    },
    {
      id: 3,
      name: "Frontend Engineering",
      skills: ["React", "Tailwind CSS", "JavaScript (ES6+)"],
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
  ],
  summary:
    "Full-Stack Engineer specialized in Java and the Spring Boot ecosystem. Personally developed and deployed 7+ native Android applications to the Google Play Store. Focused on building reliable backend microservices and high-performance solutions.",
  projects: [
    {
      id: 1,
      name: "EduNexus Platform",
      type: "",
      tech: "Java, Spring Boot, MongoDB",
      description:
        "I built this comprehensive educational ecosystem offering SSC/HSC exam preparation through quizzes and a tutor-finding marketplace.\n• Developed structured visual learning modules for Java, Data Structures (DSA), and Spring Boot.\n• Implemented high-performance features including visual notes and real-time student-tutor interaction tools.",
    },
    {
      id: 2,
      name: "ExamHero Ecosystem",
      type: "",
      tech: "Java, Kotlin",
      description:
        "I created several offline-first Android apps for secondary and higher secondary students.\n• Built smooth data handling logic and integrated student performance dashboards.",
    },
  ],
  achievements: [
    {
      id: 1,
      type: "award",
      title: "7+ Android Apps Published",
      subtitle: "Successfully built and deployed 7+ apps on Google Play Store",
    },
    {
      id: 2,
      type: "award",
      title: "Finalist (Top 10), Ideathon",
      subtitle: "CSE Fest MU 2025 - Selected from 90+ competing teams",
    },
  ],
};

// --- HELPER COMPONENTS ---
const SidebarItem = ({
  icon: Icon,
  text,
  link,
}: {
  icon: any;
  text: string;
  link?: boolean;
}) => (
  <div className="flex items-start gap-3 text-sm text-slate-300 mb-3">
    <Icon size={16} className="mt-0.5 text-cyan-400 flex-shrink-0" />
    {link ? (
      <span className="break-all">{text}</span>
    ) : (
      <span className="break-words">{text}</span>
    )}
  </div>
);

const SectionHeader = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => (
  <h3
    className={`text-lg font-bold uppercase tracking-wider text-blue-900 border-b-2 border-blue-900 mb-4 pb-1 ${className}`}
  >
    {title}
  </h3>
);

// --- RESUME PREVIEW (A4 Optimized) ---
const ResumePreview = ({ data }: { data: any }) => {
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
      id="resume-content-area"
      className="bg-white shadow-2xl min-h-[297mm] w-[210mm] mx-auto flex flex-col md:flex-row font-sans print:shadow-none print:w-[210mm] print:m-0 print:min-h-[297mm]"
    >
      {/* --- LEFT SIDEBAR --- */}
      <div className="w-full md:w-[35%] bg-slate-900 text-white p-8 print:w-[35%] print:bg-slate-900 print:text-white print:flex-shrink-0">
        {/* Profile Photo */}
        <div className="w-36 h-36 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-8 border-4 border-slate-700 overflow-hidden">
          {personalInfo.photo ? (
            <Image
              src={personalInfo.photo}
              alt="Profile"
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          ) : (
            <User size={64} className="text-slate-500" />
          )}
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Contact
          </h4>
          <SidebarItem icon={Mail} text={personalInfo.email} />
          <SidebarItem icon={Phone} text={personalInfo.phone} />
          {personalInfo.portfolio && (
            <SidebarItem icon={Globe} text={personalInfo.portfolio} />
          )}
          <SidebarItem icon={MapPin} text={personalInfo.location} />
          <SidebarItem
            icon={Linkedin}
            text={`linkedin.com/in/${personalInfo.linkedin}`}
          />
          <SidebarItem
            icon={Github}
            text={`github.com/${personalInfo.github}`}
          />
        </div>

        {/* Technical Skills */}
        <div className="mb-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Technical Skills
          </h4>
          <div className="space-y-6">
            {skills.map((cat: any) => (
              <div key={cat.id}>
                <div className="text-cyan-400 font-bold text-xs uppercase mb-2">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s: string) => (
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

        {/* Certifications */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">
            Certifications
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            {certifications.map((cert: any) => (
              <li key={cert.id} className="flex flex-col">
                <span className="font-bold text-white">{cert.title}</span>
                <span className="text-xs text-slate-400">{cert.subtitle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- RIGHT CONTENT --- */}
      <div className="w-full md:w-[65%] p-8 md:p-10 bg-white text-slate-800 print:w-[65%] print:flex-grow">
        <div className="flex justify-between items-start mb-8 gap-4 overflow-hidden">
          <div className="flex flex-col flex-1 min-w-0">
            <h1 className="text-4xl font-extrabold text-blue-900 uppercase tracking-tight leading-tight mb-2 whitespace-nowrap">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl text-blue-500 font-semibold leading-tight whitespace-nowrap">
              {personalInfo.title}
            </h2>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-slate-600 leading-relaxed text-sm italic text-justify">
            {summary}
          </p>
        </div>

        <SectionHeader title="Work Experience & Projects" />
        <div className="space-y-6 mb-8">
          {projects.map((proj: any) => (
            <div
              key={proj.id}
              className="relative pl-4 border-l-2 border-slate-200 text-justify"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h4 className="font-bold text-lg text-slate-800">
                  {proj.name}
                </h4>
                {proj.type && (
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    <Calendar size={12} /> {proj.type}
                  </div>
                )}
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
          {education.map((edu: any) => (
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
          {achievements.map((item: any) => (
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
      className={`w-full flex items-center justify-between p-3 transition-colors text-left ${isOpen ? "bg-blue-50" : "hover:bg-slate-100"}`}
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updatePersonal = (field: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const updateItem = (
    section: string,
    id: number,
    field: string,
    value: any
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2000000) {
        alert("Image is too large. Please upload an image under 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonal("photo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSection = (section: string) =>
    setOpenSection(openSection === section ? "" : section);

  return (
    <div className="p-5 space-y-6 pb-32 font-sans text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-bold text-blue-900">Editor</h2>
          <p className="text-xs text-slate-500 mt-1">
            Professional Resume Format
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
          <div className="flex flex-col gap-2 mb-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Profile Photo
            </label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                {data.personalInfo.photo ? (
                  <Image
                    src={data.personalInfo.photo}
                    alt="Preview"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={24} className="text-slate-400" />
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <Upload size={14} /> Upload
                </button>
                {data.personalInfo.photo && (
                  <button
                    onClick={() => updatePersonal("photo", null)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded text-sm font-medium hover:bg-red-100 transition-colors"
                  >
                    <X size={14} /> Remove
                  </button>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
          <InputGroup
            label="Name"
            value={data.personalInfo.name}
            onChange={(v: string) => updatePersonal("name", v)}
          />
          <InputGroup
            label="Title"
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
              label="Telephone"
              value={data.personalInfo.phone}
              onChange={(v: string) => updatePersonal("phone", v)}
            />
          </div>
          <InputGroup
            label="Portfolio Website"
            value={data.personalInfo.portfolio}
            onChange={(v: string) => updatePersonal("portfolio", v)}
          />
          <InputGroup
            label="Address"
            value={data.personalInfo.location}
            onChange={(v: string) => updatePersonal("location", v)}
          />
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

      <SectionAccordion
        title="Work Experience"
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
                onChange={(v: string) =>
                  updateItem("projects", proj.id, "name", v)
                }
              />
              <InputGroup
                label="Dates"
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
              className="mb-2"
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
              type: "",
              tech: "Stack...",
              description: "Details...",
            })
          }
          className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-slate-300 rounded text-slate-600 text-sm hover:bg-slate-50 transition-all"
        >
          <Plus size={14} /> Add Experience
        </button>
      </SectionAccordion>

      <SectionAccordion
        title="Skills"
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
              onChange={(v: string) => updateItem("skills", cat.id, "name", v)}
              className="mb-2"
            />
            <InputGroup
              label="Values"
              value={cat.skills.join(", ")}
              onChange={(v: string) => updateSkill(cat.id, v)}
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
              onChange={(v: string) =>
                updateItem("education", edu.id, "degree", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="University"
              value={edu.school}
              onChange={(v: string) =>
                updateItem("education", edu.id, "school", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Dates"
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
          label="Content"
          value={data.summary}
          onChange={(v: string) => setData((p: any) => ({ ...p, summary: v }))}
        />
      </SectionAccordion>

      <SectionAccordion
        title="Certifications & Awards"
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
              onChange={(v: string) =>
                updateItem("certifications", item.id, "title", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Details"
              value={item.subtitle}
              onChange={(v: string) =>
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
              onChange={(v: string) =>
                updateItem("achievements", item.id, "title", v)
              }
              className="mb-2"
            />
            <InputGroup
              label="Details"
              value={item.subtitle}
              onChange={(v: string) =>
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

// --- MAIN APP ---
export default function ResumeBuilderProfessional() {
  const [data, setData] = useState(initialResumeData);
  const [activeTab, setActiveTab] = useState("editor");

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-md border-b border-blue-800 sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="font-bold text-lg tracking-tight flex items-center gap-1">
              Professional Resume Builder
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex md:hidden bg-blue-800 rounded p-1 mr-2">
              <button
                onClick={() => setActiveTab("editor")}
                className={`p-1.5 rounded transition-all ${activeTab === "editor" ? "bg-blue-700 text-white" : "text-blue-300"}`}
              >
                <Edit3 size={16} />
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`p-1.5 rounded transition-all ${activeTab === "preview" ? "bg-blue-700 text-white" : "text-blue-300"}`}
              >
                <Eye size={16} />
              </button>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-400 transition-all shadow font-medium text-sm active:scale-95"
            >
              <Printer size={16} />
              <span className="hidden sm:inline">Print PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div
            className={`w-full lg:w-[400px] flex-shrink-0 bg-slate-50 rounded shadow border border-slate-200 h-[calc(100vh-6rem)] overflow-y-auto sticky top-20 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent ${activeTab === "editor" ? "block" : "hidden lg:block"} print:hidden`}
          >
            <Editor data={data} setData={setData} />
          </div>
          <div
            className={`flex-grow flex justify-center w-full ${activeTab === "preview" ? "block" : "hidden lg:flex"}`}
          >
            <ResumePreview data={data} />
          </div>
        </div>
      </main>

      {/* Print CSS */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          nav,
          .print\\:hidden {
            display: none !important;
          }

          #resume-content-area {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            display: flex !important;
            flex-direction: row !important;
            page-break-after: avoid;
          }

          #resume-content-area > div:first-child {
            width: 35% !important;
            background-color: #0f172a !important;
            color: white !important;
            print-color-adjust: exact;
          }
          #resume-content-area > div:last-child {
            width: 65% !important;
            background-color: white !important;
          }
        }
      `}</style>
    </div>
  );
}
