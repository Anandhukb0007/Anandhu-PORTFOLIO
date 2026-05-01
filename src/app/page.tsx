import dynamic from "next/dynamic";
import { Suspense } from "react";
import { OpeningAnimation } from "@/components/ui/opening-animation";

import { Navbar } from "@/components/navigation/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects-section").then((mod) => mod.ProjectsSection),
);
const ContactSection = dynamic(
  () => import("@/components/sections/contact-section").then((mod) => mod.ContactSection),
);

function SectionLoadingFallback() {
  return (
    <div className="section-shell py-20">
      <div className="h-40 animate-pulse rounded-2xl bg-slate-200/70 dark:bg-slate-800/70" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <OpeningAnimation />
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={<SectionLoadingFallback />}>
          <ProjectsSection />
        </Suspense>
        <ExperienceSection />
        <ResumeSection />
        <BlogSection />
        <Suspense fallback={<SectionLoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
