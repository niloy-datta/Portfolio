"use client";

import AuroraGlassCV from "@/components/cv-templates/AuroraGlassCV";
import { Layout, Printer, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";

// --- TYPES ---
type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

type EducationItem = {
  degree: string;
  institute: string;
  period: string;
  details: string;
};

type ResumeForm = {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  skills: string;
  photoUrl: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
};

const initialForm: ResumeForm = {
  fullName: "Niloy Chandra Datta",
  title: "Creative Developer",
  email: "niloy@example.com",
  phone: "+880 1XXXXXXXXX",
  location: "Sylhet, Bangladesh",
  website: "niloychandra.dev",
  github: "NiloyChandraDatta",
  linkedin: "niloy-datta",
  summary:
    "Passionate developer with a love for creating beautiful, functional, and user-friendly interfaces. Specialized in modern web technologies and creative design solutions.",
  skills:
    "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js, UI/UX Design",
  photoUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300",
  experiences: [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Corp",
      period: "2023 - Present",
      details:
        "Leading the frontend team in building scalable web applications using Next.js and React.",
    },
    {
      role: "UI Developer",
      company: "Design Studio",
      period: "2021 - 2023",
      details:
        "Collaborated with designers to implement pixel-perfect user interfaces and animations.",
    },
  ],
  education: [
    {
      degree: "B.Sc in Computer Science",
      institute: "Metropolitan University",
      period: "2019 - 2023",
      details: "Focus on Software Engineering and Human-Computer Interaction.",
    },
  ],
};

export default function ResumeBuilderGlass() {
  const [form, setForm] = useState<ResumeForm>(initialForm);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  const updateField = (key: keyof ResumeForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateExperience = (
    index: number,
    key: keyof ExperienceItem,
    value: string
  ) => {
    setForm((prev) => {
      const next = [...prev.experiences];
      next[index] = { ...next[index], [key]: value };
      return { ...prev, experiences: next };
    });
  };

  const updateEducation = (
    index: number,
    key: keyof EducationItem,
    value: string
  ) => {
    setForm((prev) => {
      const next = [...prev.education];
      next[index] = { ...next[index], [key]: value };
      return { ...prev, education: next };
    });
  };

  const addExperience = () => {
    setForm((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { role: "", company: "", period: "", details: "" },
      ],
    }));
  };

  const addEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institute: "", period: "", details: "" },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setForm((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const removeEducation = (index: number) => {
    setForm((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start relative pb-20 lg:pb-0 min-h-screen bg-slate-50 p-4 lg:p-8">
      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden w-full bg-white/80 backdrop-blur-md p-1 rounded-xl border border-slate-200 sticky top-20 z-40 mb-4 shadow-sm">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "editor"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Editor
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "preview"
              ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Preview
        </button>
      </div>

      {/* Editor Column */}
      <div
        className={`w-full lg:w-[450px] flex-shrink-0 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 h-auto lg:h-[calc(100vh-8rem)] overflow-y-auto lg:sticky lg:top-24 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent ${activeTab === "editor" ? "block" : "hidden lg:block"} print:hidden`}
      >
        <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3 text-purple-600 mb-2">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-800">Glass Editor</h2>
          </div>
          <p className="text-sm text-slate-500">
            Edit your details for the Aurora Glass template.
          </p>
        </div>

        <div className="p-6 space-y-8">
          {/* Personal Info */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Layout className="w-4 h-4" /> Personal Information
            </h3>
            <div className="space-y-3">
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Job Title"
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
              />
              <textarea
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                rows={4}
                placeholder="Professional Summary"
                value={form.summary}
                onChange={(e) => updateField("summary", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Photo URL"
                value={form.photoUrl}
                onChange={(e) => updateField("photoUrl", e.target.value)}
              />
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Contact Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Location"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Website"
                value={form.website}
                onChange={(e) => updateField("website", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="GitHub Username"
                value={form.github}
                onChange={(e) => updateField("github", e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="LinkedIn Username"
                value={form.linkedin}
                onChange={(e) => updateField("linkedin", e.target.value)}
              />
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Skills
            </h3>
            <textarea
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              rows={3}
              placeholder="Skills (comma separated, e.g. React, Node.js, Design)"
              value={form.skills}
              onChange={(e) => updateField("skills", e.target.value)}
            />
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Experience
              </h3>
              <button
                onClick={addExperience}
                className="text-xs font-bold text-purple-600 hover:text-purple-700 uppercase tracking-wider"
              >
                + Add
              </button>
            </div>
            <div className="space-y-4">
              {form.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 relative group"
                >
                  <button
                    onClick={() => removeExperience(index)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="space-y-3">
                    <input
                      className="w-full bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none font-medium"
                      placeholder="Role"
                      value={exp.role}
                      onChange={(e) =>
                        updateExperience(index, "role", e.target.value)
                      }
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        className="bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(index, "company", e.target.value)
                        }
                      />
                      <input
                        className="bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600"
                        placeholder="Period"
                        value={exp.period}
                        onChange={(e) =>
                          updateExperience(index, "period", e.target.value)
                        }
                      />
                    </div>
                    <textarea
                      className="w-full bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600 resize-none"
                      rows={2}
                      placeholder="Details / Achievements"
                      value={exp.details}
                      onChange={(e) =>
                        updateExperience(index, "details", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Education
              </h3>
              <button
                onClick={addEducation}
                className="text-xs font-bold text-purple-600 hover:text-purple-700 uppercase tracking-wider"
              >
                + Add
              </button>
            </div>
            <div className="space-y-4">
              {form.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 relative group"
                >
                  <button
                    onClick={() => removeEducation(index)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="space-y-3">
                    <input
                      className="w-full bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none font-medium"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        className="bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600"
                        placeholder="Institute"
                        value={edu.institute}
                        onChange={(e) =>
                          updateEducation(index, "institute", e.target.value)
                        }
                      />
                      <input
                        className="bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600"
                        placeholder="Period"
                        value={edu.period}
                        onChange={(e) =>
                          updateEducation(index, "period", e.target.value)
                        }
                      />
                    </div>
                    <textarea
                      className="w-full bg-transparent border-b border-slate-200 py-1 text-sm focus:border-purple-500 outline-none text-slate-600 resize-none"
                      rows={2}
                      placeholder="Details"
                      value={edu.details}
                      onChange={(e) =>
                        updateEducation(index, "details", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Preview Column */}
      <div
        className={`flex-1 w-full lg:h-[calc(100vh-8rem)] lg:sticky lg:top-24 flex flex-col ${activeTab === "preview" ? "block" : "hidden lg:flex"}`}
      >
        <div className="mb-4 flex items-center justify-end gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105 transition-all text-sm"
          >
            <Printer className="w-4 h-4" />
            Save as PDF
          </button>
        </div>

        <div className="flex-1 bg-slate-100 rounded-3xl border border-slate-200 overflow-y-auto p-4 lg:p-12 flex items-start justify-center print:p-0 print:border-none print:shadow-none print:overflow-visible print:bg-white print:h-auto print:static">
          <div className="w-full max-w-[210mm] print:max-w-none print:w-full">
            <AuroraGlassCV data={form} />
          </div>
        </div>
      </div>
    </div>
  );
}
