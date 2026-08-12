"use client";

import dynamic from "next/dynamic";

const ResumeBuilderProfessional = dynamic(
  () => import("@/components/ResumeBuilderProfessional"),
  { ssr: false }
);

export default function ProfessionalResumePage() {
  return <ResumeBuilderProfessional />;
}
