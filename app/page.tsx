import AcademicProjectsSection from "@/components/AcademicProjectsSection";
import BentoAboutCard from "@/components/BentoAboutCard";
import BentoGrid from "@/components/BentoGrid";
import CertificationsSection from "@/components/CertificationsSection";
import ContactFormEnhanced from "@/components/ContactFormEnhanced";
import FloatingActionButton from "@/components/FloatingActionButton";
import Footer from "@/components/Footer";
import FullStackRoadmap from "@/components/FullStackRoadmap";
import HeaderUltraModern from "@/components/HeaderUltraModern";
import HeroUltraModern from "@/components/HeroUltraModern";
import ImpactSection from "@/components/ImpactSection";
import LiveProjectsSection from "@/components/LiveProjectsSection";
import LoadingScreen from "@/components/LoadingScreen";
import MobileSection from "@/components/MobileSection";
import ParticipationsSection from "@/components/ParticipationsSection";
import ProjectsUltraModern from "@/components/ProjectsUltraModern";
import SkillsUltraModern from "@/components/SkillsUltraModern";

export default function Home() {
  return (
    <main className="starry-background min-h-screen relative overflow-x-hidden">
      <LoadingScreen />
      <div className="relative z-10 overflow-x-hidden">
        <HeaderUltraModern />
        <HeroUltraModern />

        <BentoGrid>
          <BentoAboutCard />
        </BentoGrid>

        <ImpactSection />
        <SkillsUltraModern />
        <CertificationsSection />
        <ParticipationsSection />
        <MobileSection />
        <LiveProjectsSection />
        <AcademicProjectsSection />
        <ProjectsUltraModern />
        <FullStackRoadmap />

        <ContactFormEnhanced />
        <FloatingActionButton />
        <Footer />
      </div>
    </main>
  );
}
