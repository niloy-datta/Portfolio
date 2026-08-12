"use client";

import ResumeBuilder from "@/components/ResumeBuilder";
import ResumeBuilderFaang from "@/components/ResumeBuilderFaang";
import ResumeBuilderModern from "@/components/ResumeBuilderModern";
import {
  ArrowLeft,
  Briefcase,
  Code2,
  FileText,
  Globe,
  Layout,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import ResumeBuilderAmazon from "@/components/ResumeBuilderAmazon";
import ResumeBuilderEuropass from "@/components/ResumeBuilderEuropass";
import ResumeBuilderGlass from "@/components/ResumeBuilderGlass";
import ResumeBuilderProfessional from "@/components/ResumeBuilderProfessional";

export default function ResumeBuilderPage() {
  const [activeTemplate, setActiveTemplate] = useState<
    | "classic"
    | "modern"
    | "faang"
    | "europass"
    | "professional"
    | "amazon"
    | "glass"
  >("classic");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm print:hidden">
        <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 cursor-pointer"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="h-6 w-px bg-slate-200"></div>
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">
              Resume Builder
            </h1>
          </div>

          {/* Template Selector */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg overflow-x-auto max-w-full sm:max-w-none">
            <button
              onClick={() => setActiveTemplate("classic")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "classic"
                  ? "bg-white text-indigo-600 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Layout size={14} className="sm:w-4 sm:h-4" />
              <span>Classic</span>
            </button>
            <button
              onClick={() => setActiveTemplate("modern")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "modern"
                  ? "bg-white text-cyan-600 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <FileText size={14} className="sm:w-4 sm:h-4" />
              <span>Modern</span>
            </button>
            <button
              onClick={() => setActiveTemplate("faang")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "faang"
                  ? "bg-white text-slate-900 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Code2 size={14} className="sm:w-4 sm:h-4" />
              <span>FAANG</span>
            </button>
            <button
              onClick={() => setActiveTemplate("europass")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "europass"
                  ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Globe size={14} className="sm:w-4 sm:h-4" />
              <span>Europass</span>
            </button>
            <button
              onClick={() => setActiveTemplate("professional")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "professional"
                  ? "bg-white text-emerald-600 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Briefcase size={14} className="sm:w-4 sm:h-4" />
              <span>Professional</span>
            </button>
            <button
              onClick={() => setActiveTemplate("amazon")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "amazon"
                  ? "bg-white text-orange-500 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Code2 size={14} className="sm:w-4 sm:h-4" />
              <span>Amazon</span>
            </button>
            <button
              onClick={() => setActiveTemplate("glass")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer relative z-50 ${
                activeTemplate === "glass"
                  ? "bg-white text-purple-600 shadow-sm ring-1 ring-black/5"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              <span>Glass</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTemplate === "classic" && <ResumeBuilder />}

        {activeTemplate === "modern" && (
          <div className="max-w-[1920px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderModern />
          </div>
        )}

        {activeTemplate === "faang" && (
          <div className="max-w-[1600px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderFaang />
          </div>
        )}

        {activeTemplate === "europass" && (
          <div className="max-w-[1600px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderEuropass />
          </div>
        )}

        {activeTemplate === "professional" && (
          <div className="max-w-[1600px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderProfessional />
          </div>
        )}

        {activeTemplate === "amazon" && (
          <div className="max-w-[1600px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderAmazon />
          </div>
        )}

        {activeTemplate === "glass" && (
          <div className="max-w-[1600px] mx-auto p-4 lg:p-8 animate-in fade-in duration-300">
            <ResumeBuilderGlass />
          </div>
        )}
      </div>
    </div>
  );
}
