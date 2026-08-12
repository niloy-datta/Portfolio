import HeaderUltraModern from "@/components/HeaderUltraModern";
import ResumeBuilder from "@/components/ResumeBuilder";

export default function ResumePage() {
  return (
    <main className="starry-background min-h-screen relative overflow-x-hidden">
      <HeaderUltraModern />
      <div className="pt-20">
        <ResumeBuilder />
      </div>
    </main>
  );
}
