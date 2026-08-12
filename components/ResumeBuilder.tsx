"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileDown,
  FileType,
  Image as ImageIcon,
  Layout,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

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

type PaperSize = "a4" | "letter" | "legal";
type ColorTheme = "color" | "bw" | "grayscale";
type TemplateStyle =
  | "minimal"
  | "modern"
  | "executive"
  | "creative"
  | "sidebar_modern"
  | "creative_header";

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

const paperSizes: Record<
  PaperSize,
  { name: string; width: string; height: string }
> = {
  a4: { name: "A4", width: "210mm", height: "297mm" },
  letter: { name: "Letter", width: "8.5in", height: "11in" },
  legal: { name: "Legal", width: "8.5in", height: "14in" },
};

const colorThemes: Record<
  ColorTheme,
  {
    name: string;
    accent: string;
    text: string;
    muted: string;
    bg: string;
    badgeBg: string;
  }
> = {
  color: {
    name: "Color",
    accent: "#6366f1",
    text: "#111827",
    muted: "#6b7280",
    bg: "#ffffff",
    badgeBg: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  bw: {
    name: "Black & White",
    accent: "#000000",
    text: "#000000",
    muted: "#4b5563",
    bg: "#ffffff",
    badgeBg: "#f3f4f6",
  },
  grayscale: {
    name: "Grayscale",
    accent: "#374151",
    text: "#1f2937",
    muted: "#6b7280",
    bg: "#fafafa",
    badgeBg: "#e5e7eb",
  },
};

const templateStyles: Record<
  TemplateStyle,
  { name: string; description: string }
> = {
  minimal: { name: "Minimal", description: "Clean and simple" },
  modern: { name: "Modern", description: "Bold and contemporary" },
  executive: { name: "Executive", description: "Professional elegance" },
  creative: { name: "Creative", description: "Stand out design" },
  sidebar_modern: {
    name: "Dark Sidebar",
    description: "Modern split layout with dark sidebar",
  },
  creative_header: {
    name: "Gold Header",
    description: "Elegant layout with gold accent header",
  },
};

const emptyExperience: ExperienceItem = {
  role: "",
  company: "",
  period: "",
  details: "",
};

const emptyEducation: EducationItem = {
  degree: "",
  institute: "",
  period: "",
  details: "",
};

export default function ResumeBuilder() {
  const [paperSize, setPaperSize] = useState<PaperSize>("a4");
  const [colorTheme, setColorTheme] = useState<ColorTheme>("color");
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>("modern");
  const [form, setForm] = useState<ResumeForm>({
    fullName: "Niloy Chandra Datta",
    title: "Full-Stack Developer",
    email: "niloy.datta.dev@gmail.com",
    phone: "+880 1XXXXXXXXX",
    location: "Sylhet, Bangladesh",
    website: "https://niloychandra.dev",
    github: "https://github.com/NiloyChandraDatta",
    linkedin: "https://www.linkedin.com/in/niloy-datta-9897473a8/",
    summary:
      "Full-stack developer with a focus on scalable backend systems, modern web apps, and Android development. Passionate about clean architecture, performance, and shipping reliable products.",
    skills:
      "Java, Spring Boot, Kotlin, Android, Next.js, TypeScript, PostgreSQL, Docker, AWS",
    photoUrl: "",
    experiences: [
      {
        role: "Senior Full-Stack Developer",
        company: "InnovateTech Solutions",
        period: "2023 — Present",
        details:
          "Led microservices architecture and optimized APIs to cut latency by 60%.",
      },
    ],
    education: [
      {
        degree: "BSc in Computer Science & Engineering",
        institute: "Metropolitan University, Sylhet",
        period: "2024 — 2027",
        details: "Focused on software engineering and distributed systems.",
      },
    ],
  });

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
      experiences: [...prev.experiences, { ...emptyExperience }],
    }));
  };

  const addEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [...prev.education, { ...emptyEducation }],
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

  const skillTags = useMemo(
    () =>
      form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    [form.skills]
  );

  const resumeText = useMemo(() => {
    const lines: string[] = [];
    lines.push(form.fullName);
    if (form.title) lines.push(form.title);
    lines.push(`${form.email} • ${form.phone} • ${form.location}`);
    if (form.website) lines.push(`Website: ${form.website}`);
    if (form.github) lines.push(`GitHub: ${form.github}`);
    if (form.linkedin) lines.push(`LinkedIn: ${form.linkedin}`);
    lines.push("");
    lines.push("Summary");
    lines.push(form.summary);
    lines.push("");
    lines.push("Skills");
    lines.push(skillTags.join(", "));
    lines.push("");
    lines.push("Experience");
    form.experiences.forEach((exp) => {
      lines.push(`${exp.role} — ${exp.company} (${exp.period})`);
      lines.push(exp.details);
      lines.push("");
    });
    lines.push("Education");
    form.education.forEach((edu) => {
      lines.push(`${edu.degree} — ${edu.institute} (${edu.period})`);
      lines.push(edu.details);
      lines.push("");
    });
    return lines.join("\n");
  }, [form, skillTags]);

  const resumeMarkdown = useMemo(() => {
    return `# ${form.fullName}\n${form.title}\n\n- ${form.email}\n- ${form.phone}\n- ${form.location}\n- ${form.website}\n- ${form.github}\n- ${form.linkedin}\n\n## Summary\n${form.summary}\n\n## Skills\n${skillTags.map((s) => `- ${s}`).join("\n")}\n\n## Experience\n${form.experiences
      .map(
        (exp) =>
          `**${exp.role}**, ${exp.company} (${exp.period})\n\n${exp.details}`
      )
      .join("\n\n")}\n\n## Education\n${form.education
      .map(
        (edu) =>
          `**${edu.degree}**, ${edu.institute} (${edu.period})\n\n${edu.details}`
      )
      .join("\n\n")}`;
  }, [form, skillTags]);

  const resumeJson = useMemo(() => JSON.stringify(form, null, 2), [form]);

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getTemplateStyles = () => {
    const theme = colorThemes[colorTheme];
    const size = paperSizes[paperSize];

    const baseStyles = `
      @page { size: ${size.width} ${size.height}; margin: 0; }
      @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: 'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
        color: ${theme.text}; 
        background: ${theme.bg};
        line-height: 1.5;
      }
    `;

    if (templateStyle === "minimal") {
      return `${baseStyles}
        .resume { padding: 48px 56px; max-width: 100%; }
        .header { border-bottom: 1px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 24px; }
        .name { font-size: 28px; font-weight: 600; letter-spacing: -0.5px; color: ${theme.text}; }
        .title { font-size: 14px; color: ${theme.muted}; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px; }
        .contact { font-size: 12px; color: ${theme.muted}; margin-top: 8px; }
        .section { margin-top: 24px; }
        .section-title { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: ${theme.accent}; margin-bottom: 12px; border-bottom: 1px solid ${theme.accent}20; padding-bottom: 6px; }
        .summary { font-size: 13px; color: ${theme.text}; line-height: 1.7; }
        .skills { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill { font-size: 11px; padding: 4px 10px; background: ${colorTheme === "color" ? theme.accent + "15" : "#f3f4f6"}; color: ${colorTheme === "color" ? theme.accent : theme.text}; border-radius: 4px; }
        .entry { margin-bottom: 16px; }
        .entry-header { display: flex; justify-content: space-between; align-items: baseline; }
        .entry-title { font-size: 14px; font-weight: 600; color: ${theme.text}; }
        .entry-subtitle { font-size: 13px; color: ${theme.muted}; }
        .entry-period { font-size: 11px; color: ${theme.muted}; }
        .entry-details { font-size: 12px; color: ${theme.muted}; margin-top: 4px; line-height: 1.6; }
        .photo { width: 72px; height: 72px; border-radius: 8px; object-fit: cover; }
        .header-content { display: flex; justify-content: space-between; align-items: flex-start; }
        .header-text { flex: 1; }
      `;
    }

    if (templateStyle === "modern") {
      return `${baseStyles}
        .resume { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
        .sidebar { background: ${colorTheme === "color" ? "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)" : colorTheme === "grayscale" ? "#374151" : "#111827"}; color: white; padding: 40px 28px; }
        .main { padding: 40px 48px; background: ${theme.bg}; }
        .photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid rgba(255,255,255,0.2); margin: 0 auto 20px; display: block; }
        .photo-placeholder { width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.1); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; color: rgba(255,255,255,0.4); }
        .sidebar-name { font-size: 22px; font-weight: 700; text-align: center; letter-spacing: -0.3px; }
        .sidebar-title { font-size: 12px; text-align: center; opacity: 0.8; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px; }
        .sidebar-section { margin-top: 28px; }
        .sidebar-section-title { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; opacity: 0.6; margin-bottom: 12px; }
        .contact-item { font-size: 11px; margin-bottom: 8px; opacity: 0.9; word-break: break-word; }
        .skills { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill { font-size: 10px; padding: 4px 8px; background: rgba(255,255,255,0.15); border-radius: 12px; }
        .main-name { font-size: 32px; font-weight: 800; color: ${theme.text}; letter-spacing: -1px; }
        .main-title { font-size: 14px; color: ${colorTheme === "color" ? theme.accent : theme.muted}; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
        .section { margin-top: 32px; }
        .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: ${colorTheme === "color" ? theme.accent : theme.text}; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid ${colorTheme === "color" ? theme.accent : theme.text}; }
        .summary { font-size: 13px; color: ${theme.muted}; line-height: 1.8; }
        .entry { margin-bottom: 20px; position: relative; padding-left: 16px; }
        .entry::before { content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; background: ${colorTheme === "color" ? theme.accent : theme.text}; border-radius: 50%; }
        .entry-header { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; }
        .entry-title { font-size: 15px; font-weight: 600; color: ${theme.text}; }
        .entry-subtitle { font-size: 13px; color: ${theme.muted}; }
        .entry-period { font-size: 11px; color: ${theme.muted}; background: ${colorTheme === "color" ? theme.accent + "15" : "#f3f4f6"}; padding: 2px 8px; border-radius: 4px; }
        .entry-details { font-size: 12px; color: ${theme.muted}; margin-top: 6px; line-height: 1.7; }
      `;
    }

    if (templateStyle === "executive") {
      return `${baseStyles}
        .resume { padding: 56px 64px; max-width: 100%; }
        .header { text-align: center; border-bottom: 3px double ${colorTheme === "color" ? theme.accent : theme.text}; padding-bottom: 24px; margin-bottom: 32px; }
        .photo { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin: 0 auto 16px; border: 3px solid ${colorTheme === "color" ? theme.accent : theme.text}; }
        .name { font-size: 36px; font-weight: 300; letter-spacing: 4px; text-transform: uppercase; color: ${theme.text}; }
        .title { font-size: 14px; color: ${colorTheme === "color" ? theme.accent : theme.muted}; margin-top: 8px; letter-spacing: 3px; text-transform: uppercase; }
        .contact { font-size: 11px; color: ${theme.muted}; margin-top: 12px; letter-spacing: 1px; }
        .contact span { margin: 0 12px; }
        .section { margin-top: 28px; }
        .section-title { font-size: 13px; font-weight: 400; text-transform: uppercase; letter-spacing: 4px; color: ${theme.text}; margin-bottom: 16px; text-align: center; }
        .section-title::before, .section-title::after { content: '—'; margin: 0 16px; color: ${colorTheme === "color" ? theme.accent : theme.muted}; }
        .summary { font-size: 13px; color: ${theme.muted}; line-height: 1.8; text-align: center; max-width: 600px; margin: 0 auto; font-style: italic; }
        .skills { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .skill { font-size: 11px; padding: 6px 14px; border: 1px solid ${colorTheme === "color" ? theme.accent : theme.text}; color: ${colorTheme === "color" ? theme.accent : theme.text}; border-radius: 0; text-transform: uppercase; letter-spacing: 1px; }
        .entries { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .entry { padding: 16px; border-left: 2px solid ${colorTheme === "color" ? theme.accent : "#e5e7eb"}; }
        .entry-title { font-size: 14px; font-weight: 600; color: ${theme.text}; }
        .entry-subtitle { font-size: 12px; color: ${theme.muted}; margin-top: 2px; }
        .entry-period { font-size: 10px; color: ${colorTheme === "color" ? theme.accent : theme.muted}; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
        .entry-details { font-size: 11px; color: ${theme.muted}; margin-top: 8px; line-height: 1.6; }
      `;
    }

    // Creative template
    if (templateStyle === "creative") {
      return `${baseStyles}
      .resume { padding: 0; }
      .hero { background: ${colorTheme === "color" ? "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" : colorTheme === "grayscale" ? "linear-gradient(135deg, #374151 0%, #4b5563 100%)" : "linear-gradient(135deg, #1f2937 0%, #374151 100%)"}; color: white; padding: 48px; position: relative; overflow: hidden; }
      .hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 60%; height: 200%; background: rgba(255,255,255,0.1); transform: rotate(15deg); }
      .hero-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 32px; }
      .photo { width: 140px; height: 140px; border-radius: 20px; object-fit: cover; border: 4px solid rgba(255,255,255,0.3); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      .photo-placeholder { width: 140px; height: 140px; border-radius: 20px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 48px; }
      .name { font-size: 42px; font-weight: 800; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
      .title { font-size: 16px; opacity: 0.9; margin-top: 4px; font-weight: 300; letter-spacing: 2px; }
      .contact { font-size: 12px; opacity: 0.8; margin-top: 12px; }
      .contact span { margin-right: 16px; }
      .body { padding: 40px 48px; background: ${theme.bg}; }
      .summary-box { background: ${colorTheme === "color" ? "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)" : "#f9fafb"}; padding: 24px; border-radius: 16px; margin-bottom: 32px; border-left: 4px solid ${colorTheme === "color" ? "#667eea" : theme.text}; }
      .summary { font-size: 14px; color: ${theme.text}; line-height: 1.8; }
      .skills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
      .skill { font-size: 11px; padding: 8px 16px; background: ${colorTheme === "color" ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : theme.text}; color: white; border-radius: 20px; font-weight: 500; }
      .section { margin-bottom: 32px; }
      .section-title { font-size: 18px; font-weight: 700; color: ${colorTheme === "color" ? "#667eea" : theme.text}; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
      .section-title::after { content: ''; flex: 1; height: 2px; background: ${colorTheme === "color" ? "linear-gradient(90deg, #667eea 0%, transparent 100%)" : "#e5e7eb"}; }
      .entry { background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f3f4f6; }
      .entry-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; }
      .entry-title { font-size: 16px; font-weight: 600; color: ${theme.text}; }
      .entry-subtitle { font-size: 13px; color: ${colorTheme === "color" ? "#667eea" : theme.muted}; }
      .entry-period { font-size: 11px; color: white; background: ${colorTheme === "color" ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : theme.text}; padding: 4px 12px; border-radius: 12px; }
      .entry-details { font-size: 13px; color: ${theme.muted}; margin-top: 12px; line-height: 1.7; }
    `;
    }

    if (templateStyle === "sidebar_modern") {
      return `${baseStyles}
        .resume { display: grid; grid-template-columns: 32% 68%; min-height: 100vh; }
        .sidebar { background: ${colorTheme === "color" ? "#1e293b" : colorTheme === "grayscale" ? "#333" : "black"}; color: white; padding: 40px; text-align: left; }
        .main { padding: 40px 48px; background: white; color: #334155; }
        .photo { width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin-bottom: 30px; border: 4px solid rgba(255,255,255,0.1); display: block; }
        .photo-placeholder { width: 140px; height: 140px; border-radius: 50%; background: rgba(255,255,255,0.1); margin-bottom: 30px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: rgba(255,255,255,0.5); }
        
        .sidebar-section { margin-bottom: 32px; }
        .sidebar-section-title { font-size: 16px; font-weight: 700; color: white; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
        .contact-item { font-size: 13px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 2px; }
        .contact-label { font-size: 11px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.5px; }
        .contact-value { opacity: 0.95; font-weight: 500; word-break: break-all; }
        
        .skills { display: flex; flex-direction: column; gap: 8px; }
        .skill { display: flex; align-items: center; gap: 8px; font-size: 13px; }
        .skill::before { content: '•'; color: ${colorTheme === "color" ? "#6366f1" : "white"}; font-size: 18px; line-height: 0; }

        .header { margin-bottom: 40px; }
        .name { font-size: 42px; font-weight: 800; color: #0f172a; line-height: 1.1; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -1px; }
        .title { font-size: 18px; color: ${colorTheme === "color" ? "#6366f1" : "#475569"}; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
        
        .section { margin-bottom: 36px; }
        .section-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; padding-bottom: 8px; border-bottom: 2px solid #0f172a; display: inline-block; min-width: 60px; }
        
        .summary { font-size: 14px; line-height: 1.8; color: #475569; }
        
        .entry { margin-bottom: 24px; }
        .entry-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; flex-wrap: wrap; }
        .entry-title { font-size: 16px; font-weight: 700; color: #0f172a; }
        .entry-company { font-size: 14px; font-weight: 600; color: ${colorTheme === "color" ? "#6366f1" : "#475569"}; }
        .entry-period { font-size: 13px; color: #64748b; font-style: italic; }
        .entry-details { font-size: 13px; line-height: 1.7; color: #475569; margin-top: 8px; }
      `;
    }

    if (templateStyle === "creative_header") {
      return `${baseStyles}
        .resume { display: grid; grid-template-columns: 32% 68%; min-height: 100vh; }
        .sidebar { background: ${colorTheme === "color" ? "#fdf6e3" : "#f3f4f6"}; padding: 40px 32px; color: #4a4a4a; border-right: 1px solid rgba(0,0,0,0.05); }
        .main { background: white; position: relative; padding-top: 0; display: flex; flex-direction: column; }
        
        .header-bar { background: ${colorTheme === "color" ? "#d4af37" : "#333"}; color: white; padding: 48px 40px; margin-bottom: 40px; }
        .name { font-size: 48px; font-weight: 800; line-height: 1; text-transform: uppercase; letter-spacing: 2px; }
        .title { font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 4px; margin-top: 12px; opacity: 0.9; }
        
        .photo { width: 160px; height: 160px; object-fit: cover; margin-bottom: 40px; display: block; border: 8px solid white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .photo-placeholder { width: 160px; height: 160px; background: #e2e8f0; margin-bottom: 40px; display: flex; align-items: center; justify-content: center; font-size: 48px; color: #94a3b8; border: 8px solid white; }
        
        .sidebar-section { margin-bottom: 40px; }
        .sidebar-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #2c3e50; margin-bottom: 20px; border-bottom: 2px solid ${colorTheme === "color" ? "#d4af37" : "#333"}; padding-bottom: 8px; display: inline-block; }
        
        .contact-item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 13px; color: #555; word-break: break-all; }
        .contact-icon { width: 16px; text-align: center; }
        
        .skill-item { margin-bottom: 10px; font-size: 13px; display: flex; align-items: center; gap: 8px; }
        .skill-item::before { content: '▪'; color: ${colorTheme === "color" ? "#d4af37" : "#333"}; }
        
        .main-content-area { padding: 0 40px 40px 40px; }
        
        .section { margin-bottom: 40px; }
        .section-title { font-size: 15px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #2c3e50; margin-bottom: 24px; display: block; }
        
        .summary { font-size: 14px; line-height: 1.8; color: #555; margin-bottom: 20px; }
        
        .entry { margin-bottom: 28px; }
        .entry-header { margin-bottom: 4px; }
        .entry-title { font-size: 16px; font-weight: 700; color: #2c3e50; }
        .entry-company { font-size: 14px; font-weight: 600; color: #555; font-style: italic; display: block; margin-top: 2px; }
        .entry-period { font-size: 13px; color: ${colorTheme === "color" ? "#d4af37" : "#888"}; font-weight: 600; margin-top: 2px; display: block; text-transform: uppercase; }
        .entry-details { font-size: 13px; line-height: 1.7; color: #666; margin-top: 8px; }
      `;
    }
  };

  const getTemplateHTML = () => {
    const theme = colorThemes[colorTheme];

    if (templateStyle === "minimal") {
      return `
        <div class="resume">
          <div class="header">
            <div class="header-content">
              <div class="header-text">
                <div class="name">${form.fullName}</div>
                <div class="title">${form.title}</div>
                <div class="contact">${form.email} • ${form.phone} • ${form.location}</div>
                <div class="contact">${form.website} • ${form.github}</div>
              </div>
              ${form.photoUrl ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />` : ""}
            </div>
          </div>
          <div class="section">
            <div class="section-title">Profile</div>
            <div class="summary">${form.summary}</div>
          </div>
          <div class="section">
            <div class="section-title">Skills</div>
            <div class="skills">${skillTags.map((s) => `<span class="skill">${s}</span>`).join("")}</div>
          </div>
          <div class="section">
            <div class="section-title">Experience</div>
            ${form.experiences
              .map(
                (exp) => `
              <div class="entry">
                <div class="entry-header">
                  <div><span class="entry-title">${exp.role}</span> <span class="entry-subtitle">at ${exp.company}</span></div>
                  <span class="entry-period">${exp.period}</span>
                </div>
                <div class="entry-details">${exp.details}</div>
              </div>
            `
              )
              .join("")}
          </div>
          <div class="section">
            <div class="section-title">Education</div>
            ${form.education
              .map(
                (edu) => `
              <div class="entry">
                <div class="entry-header">
                  <div><span class="entry-title">${edu.degree}</span> <span class="entry-subtitle">— ${edu.institute}</span></div>
                  <span class="entry-period">${edu.period}</span>
                </div>
                <div class="entry-details">${edu.details}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    if (templateStyle === "modern") {
      return `
        <div class="resume">
          <div class="sidebar">
            ${form.photoUrl ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />` : `<div class="photo-placeholder">👤</div>`}
            <div class="sidebar-name">${form.fullName}</div>
            <div class="sidebar-title">${form.title}</div>
            <div class="sidebar-section">
              <div class="sidebar-section-title">Contact</div>
              <div class="contact-item">📧 ${form.email}</div>
              <div class="contact-item">📱 ${form.phone}</div>
              <div class="contact-item">📍 ${form.location}</div>
              ${form.website ? `<div class="contact-item">🌐 ${form.website}</div>` : ""}
              ${form.github ? `<div class="contact-item">💻 ${form.github.replace("https://", "")}</div>` : ""}
              ${form.linkedin ? `<div class="contact-item">🔗 ${form.linkedin.replace("https://", "")}</div>` : ""}
            </div>
            <div class="sidebar-section">
              <div class="sidebar-section-title">Skills</div>
              <div class="skills">${skillTags.map((s) => `<span class="skill">${s}</span>`).join("")}</div>
            </div>
          </div>
          <div class="main">
            <div class="main-name">${form.fullName}</div>
            <div class="main-title">${form.title}</div>
            <div class="section">
              <div class="section-title">Profile Summary</div>
              <div class="summary">${form.summary}</div>
            </div>
            <div class="section">
              <div class="section-title">Professional Experience</div>
              ${form.experiences
                .map(
                  (exp) => `
                <div class="entry">
                  <div class="entry-header">
                    <div>
                      <span class="entry-title">${exp.role}</span>
                      <span class="entry-subtitle"> — ${exp.company}</span>
                    </div>
                    <span class="entry-period">${exp.period}</span>
                  </div>
                  <div class="entry-details">${exp.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="section">
              <div class="section-title">Education</div>
              ${form.education
                .map(
                  (edu) => `
                <div class="entry">
                  <div class="entry-header">
                    <div>
                      <span class="entry-title">${edu.degree}</span>
                      <span class="entry-subtitle"> — ${edu.institute}</span>
                    </div>
                    <span class="entry-period">${edu.period}</span>
                  </div>
                  <div class="entry-details">${edu.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    }

    if (templateStyle === "executive") {
      return `
        <div class="resume">
          <div class="header">
            ${form.photoUrl ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />` : ""}
            <div class="name">${form.fullName}</div>
            <div class="title">${form.title}</div>
            <div class="contact">
              <span>${form.email}</span>
              <span>${form.phone}</span>
              <span>${form.location}</span>
            </div>
          </div>
          <div class="section">
            <div class="section-title">Executive Summary</div>
            <div class="summary">${form.summary}</div>
          </div>
          <div class="section">
            <div class="section-title">Core Competencies</div>
            <div class="skills">${skillTags.map((s) => `<span class="skill">${s}</span>`).join("")}</div>
          </div>
          <div class="section">
            <div class="section-title">Professional Experience</div>
            <div class="entries">
              ${form.experiences
                .map(
                  (exp) => `
                <div class="entry">
                  <div class="entry-title">${exp.role}</div>
                  <div class="entry-subtitle">${exp.company}</div>
                  <div class="entry-period">${exp.period}</div>
                  <div class="entry-details">${exp.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="section">
            <div class="section-title">Education</div>
            <div class="entries">
              ${form.education
                .map(
                  (edu) => `
                <div class="entry">
                  <div class="entry-title">${edu.degree}</div>
                  <div class="entry-subtitle">${edu.institute}</div>
                  <div class="entry-period">${edu.period}</div>
                  <div class="entry-details">${edu.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    }

    if (templateStyle === "sidebar_modern") {
      return `
        <div class="resume">
          <div class="sidebar">
            <div class="profile-section">
              ${
                form.photoUrl
                  ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />`
                  : `<div class="photo-placeholder"><span>${form.fullName.charAt(0)}</span></div>`
              }
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-section-title">Contact</div>
              <div class="contact-item">
                <span class="contact-label">Address</span>
                <span class="contact-value">${form.location}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone</span>
                <span class="contact-value">${form.phone}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Email</span>
                <span class="contact-value">${form.email}</span>
              </div>
              ${
                form.website
                  ? `
              <div class="contact-item">
                <span class="contact-label">Website</span>
                <span class="contact-value">${form.website.replace(/^https?:\/\//, "")}</span>
              </div>`
                  : ""
              }
              ${
                form.linkedin
                  ? `
              <div class="contact-item">
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">linkedin.com/in/...</span>
              </div>`
                  : ""
              }
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-section-title">Skills</div>
              <div class="skills">
                ${skillTags.map((skill) => `<div class="skill">${skill}</div>`).join("")}
              </div>
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-section-title">Languages</div>
              <div class="skills">
                <div class="skill">English</div>
                <div class="skill">Bengali</div>
              </div>
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-section-title">Hobbies</div>
              <div class="skills">
                <div class="skill">Photography</div>
                <div class="skill">Coding</div>
                <div class="skill">Traveling</div>
              </div>
            </div>
          </div>
          
          <div class="main">
            <div class="header">
              <div class="name">${form.fullName}</div>
              <div class="title">${form.title}</div>
            </div>
            
            <div class="section">
              <div class="section-title">Profile</div>
              <div class="summary">${form.summary}</div>
            </div>
            
            <div class="section">
              <div class="section-title">Work Experience</div>
              ${form.experiences
                .map(
                  (exp) => `
                <div class="entry">
                  <div class="entry-header">
                    <div class="entry-title">${exp.role}</div>
                    <div class="entry-period">${exp.period}</div>
                  </div>
                  <div class="entry-company">${exp.company}</div>
                  <div class="entry-details">${exp.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
            
            <div class="section">
              <div class="section-title">Education</div>
              ${form.education
                .map(
                  (edu) => `
                <div class="entry">
                  <div class="entry-header">
                    <div class="entry-title">${edu.degree}</div>
                    <div class="entry-period">${edu.period}</div>
                  </div>
                  <div class="entry-company">${edu.institute}</div>
                  <div class="entry-details">${edu.details}</div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    }

    if (templateStyle === "creative_header") {
      return `
        <div class="resume">
          <div class="sidebar">
            <div class="profile-section">
              ${
                form.photoUrl
                  ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />`
                  : `<div class="photo-placeholder"><span>${form.fullName.charAt(0)}</span></div>`
              }
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-title">Contact</div>
              <div class="contact-list">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <span>${form.phone}</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <span>${form.location}</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <span>${form.email}</span>
                </div>
                ${
                  form.linkedin
                    ? `
                <div class="contact-item">
                  <span class="contact-icon">in</span>
                  <span>linkedin.com/in/...</span>
                </div>`
                    : ""
                }
                ${
                  form.website
                    ? `
                <div class="contact-item">
                  <span class="contact-icon">🌐</span>
                  <span>${form.website.replace(/^https?:\/\//, "")}</span>
                </div>`
                    : ""
                }
              </div>
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-title">Skills</div>
              <div class="skills-list">
                ${skillTags.map((skill) => `<div class="skill-item">${skill}</div>`).join("")}
              </div>
            </div>
            
            <div class="sidebar-section">
              <div class="sidebar-title">Education</div>
              ${form.education
                .map(
                  (edu) => `
                <div class="entry">
                  <div class="entry-title" style="font-size: 14px;">${edu.degree}</div>
                  <div class="entry-company" style="font-size: 13px;">${edu.institute}</div>
                  <div class="entry-period" style="font-size: 12px;">${edu.period}</div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          
          <div class="main">
            <div class="header-bar">
              <div class="name">${form.fullName}</div>
              <div class="title">${form.title}</div>
            </div>
            
            <div class="main-content-area">
              <div class="section">
                <div class="section-title">Professional Profile</div>
                <div class="summary">${form.summary}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Experience</div>
                ${form.experiences
                  .map(
                    (exp) => `
                  <div class="entry">
                    <div class="entry-header">
                      <div class="entry-title">${exp.role}</div>
                    </div>
                    <span class="entry-company">${exp.company}</span> <span class="entry-period">| ${exp.period}</span>
                    <div class="entry-details">${exp.details}</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
              
              <div class="section">
                <div class="section-title">Certifications</div>
                <div class="entry">
                  <div class="entry-title">AWS Certified Solutions Architect</div>
                  <div class="entry-company">Amazon Web Services</div>
                </div>
                <div class="entry">
                  <div class="entry-title">Kotlin Certified Developer</div>
                  <div class="entry-company">JetBrains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Creative template
    return `
      <div class="resume">
        <div class="hero">
          <div class="hero-content">
            ${form.photoUrl ? `<img src="${form.photoUrl}" class="photo" alt="Photo" />` : `<div class="photo-placeholder">✨</div>`}
            <div>
              <div class="name">${form.fullName}</div>
              <div class="title">${form.title}</div>
              <div class="contact">
                <span>📧 ${form.email}</span>
                <span>📱 ${form.phone}</span>
                <span>📍 ${form.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="summary-box">
            <div class="summary">${form.summary}</div>
          </div>
          <div class="skills">${skillTags.map((s) => `<span class="skill">${s}</span>`).join("")}</div>
          <div class="section">
            <div class="section-title">Experience</div>
            ${form.experiences
              .map(
                (exp) => `
              <div class="entry">
                <div class="entry-header">
                  <div>
                    <div class="entry-title">${exp.role}</div>
                    <div class="entry-subtitle">${exp.company}</div>
                  </div>
                  <span class="entry-period">${exp.period}</span>
                </div>
                <div class="entry-details">${exp.details}</div>
              </div>
            `
              )
              .join("")}
          </div>
          <div class="section">
            <div class="section-title">Education</div>
            ${form.education
              .map(
                (edu) => `
              <div class="entry">
                <div class="entry-header">
                  <div>
                    <div class="entry-title">${edu.degree}</div>
                    <div class="entry-subtitle">${edu.institute}</div>
                  </div>
                  <span class="entry-period">${edu.period}</span>
                </div>
                <div class="entry-details">${edu.details}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  };

  const downloadPDF = () => {
    const size = paperSizes[paperSize];
    const previewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${form.fullName} - Resume</title>
  <style>${getTemplateStyles()}</style>
</head>
<body>${getTemplateHTML()}</body>
</html>`;

    const previewWindow = window.open("", "_blank");
    if (!previewWindow) return;
    previewWindow.document.open();
    previewWindow.document.write(previewHtml);
    previewWindow.document.close();
    previewWindow.focus();
    previewWindow.print();
  };

  return (
    <section className="relative min-h-screen px-6 py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-aurora-blue/20 via-aurora-purple/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-120px] left-12 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-aurora-cyan/15 to-transparent blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] project-grid-pattern pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            Resume Builder
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
            Generate a premium CV in minutes
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Add your information, skills, and experience, then download your CV
            in multiple formats.
          </p>
        </motion.div>

        {/* Settings Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 glass-ultra"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Template Style */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layout className="w-4 h-4 text-aurora-purple" />
                <span className="text-sm font-medium text-white">
                  Template Style
                </span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {(Object.keys(templateStyles) as TemplateStyle[]).map(
                  (style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setTemplateStyle(style)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        templateStyle === style
                          ? "bg-gradient-to-r from-aurora-blue to-aurora-purple text-white shadow-lg"
                          : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {templateStyles[style].name}
                    </button>
                  )
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {templateStyles[templateStyle].description}
              </p>
            </div>

            {/* Paper Size */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileType className="w-4 h-4 text-aurora-cyan" />
                <span className="text-sm font-medium text-white">
                  Paper Size
                </span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {(Object.keys(paperSizes) as PaperSize[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPaperSize(size)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      paperSize === size
                        ? "bg-gradient-to-r from-aurora-cyan to-aurora-blue text-white shadow-lg"
                        : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {paperSizes[size].name}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {paperSizes[paperSize].width} × {paperSizes[paperSize].height}
              </p>
            </div>

            {/* Color Theme */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-aurora-blue" />
                <span className="text-sm font-medium text-white">
                  Color Theme
                </span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {(Object.keys(colorThemes) as ColorTheme[]).map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setColorTheme(theme)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      colorTheme === theme
                        ? "bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white shadow-lg"
                        : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        theme === "color"
                          ? "resume-swatch-color"
                          : theme === "bw"
                            ? "resume-swatch-bw"
                            : "resume-swatch-gray"
                      }`}
                    />
                    {colorThemes[theme].name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra gradient-border card-premium">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">
                    Your Information
                  </h2>
                  <p className="text-sm text-gray-400">
                    Fill the essentials and build instantly.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-300">
                  <ImageIcon className="w-4 h-4" />
                  Photo (optional)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Professional title"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Photo URL"
                  value={form.photoUrl}
                  onChange={(e) => updateField("photoUrl", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="Website"
                  value={form.website}
                  onChange={(e) => updateField("website", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="GitHub"
                  value={form.github}
                  onChange={(e) => updateField("github", e.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                  placeholder="LinkedIn"
                  value={form.linkedin}
                  onChange={(e) => updateField("linkedin", e.target.value)}
                />
              </div>

              <textarea
                className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                rows={4}
                placeholder="Short professional summary"
                value={form.summary}
                onChange={(e) => updateField("summary", e.target.value)}
              />

              <textarea
                className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500"
                rows={3}
                placeholder="Skills (comma-separated)"
                value={form.skills}
                onChange={(e) => updateField("skills", e.target.value)}
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra card-premium">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Experience</h2>
                  <p className="text-sm text-gray-400">
                    Add your work history.
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white hover:bg-white/20 transition-all"
                  onClick={addExperience}
                >
                  Add
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {form.experiences.map((exp, index) => (
                  <div
                    key={`${exp.role}-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) =>
                          updateExperience(index, "role", e.target.value)
                        }
                      />
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(index, "company", e.target.value)
                        }
                      />
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Period"
                        value={exp.period}
                        onChange={(e) =>
                          updateExperience(index, "period", e.target.value)
                        }
                      />
                    </div>
                    <textarea
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                      rows={3}
                      placeholder="Key achievements"
                      value={exp.details}
                      onChange={(e) =>
                        updateExperience(index, "details", e.target.value)
                      }
                    />
                    {form.experiences.length > 1 && (
                      <button
                        type="button"
                        className="text-xs text-red-300 hover:text-red-200"
                        onClick={() => removeExperience(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra card-premium">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Education</h2>
                  <p className="text-sm text-gray-400">
                    Add your education history.
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white hover:bg-white/20 transition-all"
                  onClick={addEducation}
                >
                  Add
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {form.education.map((edu, index) => (
                  <div
                    key={`${edu.degree}-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                          updateEducation(index, "degree", e.target.value)
                        }
                      />
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Institute"
                        value={edu.institute}
                        onChange={(e) =>
                          updateEducation(index, "institute", e.target.value)
                        }
                      />
                      <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                        placeholder="Period"
                        value={edu.period}
                        onChange={(e) =>
                          updateEducation(index, "period", e.target.value)
                        }
                      />
                    </div>
                    <textarea
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                      rows={3}
                      placeholder="Achievements / notes"
                      value={edu.details}
                      onChange={(e) =>
                        updateEducation(index, "details", e.target.value)
                      }
                    />
                    {form.education.length > 1 && (
                      <button
                        type="button"
                        className="text-xs text-red-300 hover:text-red-200"
                        onClick={() => removeEducation(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:sticky lg:top-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra card-premium">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black text-white">Preview</h2>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded-lg bg-aurora-purple/20 text-aurora-purple text-[10px] font-medium uppercase tracking-wider">
                    {templateStyles[templateStyle].name}
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-aurora-cyan/20 text-aurora-cyan text-[10px] font-medium uppercase tracking-wider">
                    {paperSizes[paperSize].name}
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-aurora-blue/20 text-aurora-blue text-[10px] font-medium uppercase tracking-wider">
                    {colorThemes[colorTheme].name}
                  </span>
                </div>
              </div>

              {/* Template-aware preview */}
              <div
                className={`relative mt-6 rounded-2xl border overflow-hidden transition-all duration-300 max-h-[500px] ${
                  templateStyle === "modern" ? "flex" : ""
                } ${
                  colorTheme === "bw"
                    ? "resume-preview-bg-white"
                    : colorTheme === "grayscale"
                      ? "resume-preview-bg-light"
                      : "resume-preview-bg-white"
                } ${
                  paperSize === "legal"
                    ? "resume-preview-aspect-legal"
                    : paperSize === "letter"
                      ? "resume-preview-aspect-letter"
                      : "resume-preview-aspect-a4"
                }`}
              >
                {/* Modern template sidebar */}
                {templateStyle === "modern" && (
                  <div
                    className={`w-[35%] p-4 flex flex-col items-center ${
                      colorTheme === "color"
                        ? "resume-preview-sidebar-color"
                        : colorTheme === "grayscale"
                          ? "resume-preview-sidebar-gray"
                          : "resume-preview-sidebar-dark"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                      {form.photoUrl && form.photoUrl.trim() !== "" ? (
                        <Image
                          src={form.photoUrl}
                          alt="Profile"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      ) : (
                        <span className="text-white/40 text-lg">👤</span>
                      )}
                    </div>
                    <p className="text-white text-xs font-bold mt-2 text-center truncate w-full">
                      {form.fullName}
                    </p>
                    <p className="text-white/60 text-[8px] uppercase tracking-wider">
                      {form.title}
                    </p>
                    <div className="mt-4 w-full space-y-1">
                      <p className="text-white/40 text-[7px] uppercase tracking-wider">
                        Contact
                      </p>
                      <p className="text-white/80 text-[8px] truncate">
                        {form.email}
                      </p>
                      <p className="text-white/80 text-[8px]">{form.phone}</p>
                    </div>
                  </div>
                )}

                {/* Creative template hero */}
                {templateStyle === "creative" && (
                  <div
                    className={`p-4 flex items-center gap-3 ${
                      colorTheme === "color"
                        ? "resume-preview-hero-color"
                        : colorTheme === "grayscale"
                          ? "resume-preview-hero-gray"
                          : "resume-preview-hero-dark"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center overflow-hidden">
                      {form.photoUrl && form.photoUrl.trim() !== "" ? (
                        <Image
                          src={form.photoUrl}
                          alt="Profile"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      ) : (
                        <span className="text-white/60 text-lg">✨</span>
                      )}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">
                        {form.fullName}
                      </p>
                      <p className="text-white/70 text-[9px]">{form.title}</p>
                    </div>
                  </div>
                )}

                {/* Main content area */}
                <div
                  className={`p-4 ${templateStyle === "modern" ? "flex-1" : ""} ${templateStyle === "creative" ? "" : ""}`}
                >
                  {/* Header for minimal/executive */}
                  {(templateStyle === "minimal" ||
                    templateStyle === "executive") && (
                    <div
                      className={`${templateStyle === "executive" ? "text-center" : "flex items-start gap-3"} pb-3 mb-3 border-b ${
                        colorTheme === "color"
                          ? "resume-preview-border-accent"
                          : "resume-preview-border-gray"
                      }`}
                    >
                      {templateStyle === "minimal" &&
                        form.photoUrl &&
                        form.photoUrl.trim() !== "" && (
                          <Image
                            src={form.photoUrl}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover"
                            unoptimized
                          />
                        )}
                      {templateStyle === "executive" &&
                        form.photoUrl &&
                        form.photoUrl.trim() !== "" && (
                          <div className="mx-auto mb-2">
                            <Image
                              src={form.photoUrl}
                              alt="Profile"
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full object-cover mx-auto"
                              unoptimized
                            />
                          </div>
                        )}
                      <div
                        className={
                          templateStyle === "executive" ? "" : "flex-1"
                        }
                      >
                        <p
                          className={`font-bold ${templateStyle === "executive" ? "text-base uppercase tracking-[2px]" : "text-sm"} ${
                            colorTheme === "bw"
                              ? "resume-preview-text-black"
                              : "resume-preview-text-dark"
                          }`}
                        >
                          {form.fullName}
                        </p>
                        <p
                          className={`text-[9px] uppercase tracking-wider ${
                            colorTheme === "color"
                              ? "resume-preview-text-accent"
                              : "resume-preview-text-muted"
                          }`}
                        >
                          {form.title}
                        </p>
                        <p className="text-[8px] text-gray-500 mt-1">
                          {form.email} • {form.phone}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Summary */}
                  <div className="mb-3">
                    <p
                      className={`text-[8px] uppercase tracking-wider mb-1 ${templateStyle === "executive" ? "text-center" : ""} ${
                        colorTheme === "color"
                          ? "resume-preview-text-accent"
                          : "resume-preview-text-faint"
                      }`}
                    >
                      {templateStyle === "executive"
                        ? "— Summary —"
                        : "Summary"}
                    </p>
                    <p
                      className={`text-[9px] leading-relaxed resume-preview-text-subtle ${templateStyle === "executive" ? "text-center italic" : ""}`}
                    >
                      {form.summary.substring(0, 120)}...
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-3">
                    <p
                      className={`text-[8px] uppercase tracking-wider mb-1 ${templateStyle === "executive" ? "text-center" : ""} ${
                        colorTheme === "color"
                          ? "resume-preview-text-accent"
                          : "resume-preview-text-faint"
                      }`}
                    >
                      Skills
                    </p>
                    <div
                      className={`flex flex-wrap gap-1 ${templateStyle === "executive" ? "justify-center" : ""}`}
                    >
                      {skillTags.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className={`px-1.5 py-0.5 text-[7px] rounded ${
                            colorTheme === "color"
                              ? templateStyle === "creative"
                                ? "resume-preview-skill-creative"
                                : "resume-preview-skill-color"
                              : "resume-preview-skill-bw"
                          } ${
                            templateStyle === "executive"
                              ? colorTheme === "color"
                                ? "resume-preview-skill-border"
                                : "resume-preview-skill-border-bw"
                              : ""
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                      {skillTags.length > 5 && (
                        <span className="text-[7px] text-gray-400">
                          +{skillTags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Experience preview */}
                  {form.experiences[0] && (
                    <div className="mb-2">
                      <p
                        className={`text-[8px] uppercase tracking-wider mb-1 ${templateStyle === "executive" ? "text-center" : ""} ${
                          colorTheme === "color"
                            ? "resume-preview-text-accent"
                            : "resume-preview-text-faint"
                        }`}
                      >
                        Experience
                      </p>
                      <div
                        className={`${templateStyle === "modern" ? "pl-2 border-l-2" : ""} ${
                          colorTheme === "color"
                            ? "resume-preview-border-accent"
                            : "resume-preview-border-gray"
                        }`}
                      >
                        <p className="text-[9px] font-semibold resume-preview-text-dark">
                          {form.experiences[0].role}
                        </p>
                        <p
                          className={`text-[8px] ${
                            colorTheme === "color"
                              ? "resume-preview-text-accent"
                              : "resume-preview-text-muted"
                          }`}
                        >
                          {form.experiences[0].company}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview hint */}
              <p className="text-center text-[10px] text-gray-500 mt-4">
                This is a scaled preview. Download PDF for full quality.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra card-premium">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black text-white">Download</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-400">Ready</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Export your resume in multiple formats.
              </p>

              {/* Selected options summary */}
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">
                  Your CV Settings
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-aurora-purple/10 text-aurora-purple text-[10px]">
                    <Layout className="w-3 h-3" />
                    {templateStyles[templateStyle].name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-aurora-cyan/10 text-aurora-cyan text-[10px]">
                    <FileType className="w-3 h-3" />
                    {paperSizes[paperSize].name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-aurora-blue/10 text-aurora-blue text-[10px]">
                    <Palette className="w-3 h-3" />
                    {colorThemes[colorTheme].name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 relative z-10">
                <button
                  type="button"
                  onClick={downloadPDF}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-blue to-aurora-purple text-white font-bold px-4 py-4 hover:scale-[1.02] transition-transform shadow-lg shadow-aurora-purple/20 col-span-1 sm:col-span-2"
                >
                  <FileDown className="w-5 h-5" />
                  Download PDF
                  <span className="ml-1 px-2 py-0.5 rounded bg-white/20 text-[10px]">
                    Recommended
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadFile(resumeText, "resume.txt", "text/plain")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white font-bold px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  TXT
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadFile(resumeMarkdown, "resume.md", "text/markdown")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white font-bold px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Markdown
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadFile(resumeJson, "resume.json", "application/json")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white font-bold px-4 py-3 hover:bg-white/20 transition-colors col-span-1 sm:col-span-2"
                >
                  <Download className="w-5 h-5" />
                  JSON (For Developers)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
