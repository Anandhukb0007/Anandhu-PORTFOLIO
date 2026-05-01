import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FaCheckCircle } from "react-icons/fa";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Developer focused on scalable products and clean implementation details."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40 sm:p-10">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a full stack developer with a BCA background (2023), currently building web
            products with an emphasis on maintainability, user experience, and performance.
            My recent work spans MERN stack applications, PHP-based business tools, and Next.js
            frontend experiences.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I prefer clean component architecture, reliable backend APIs, and interfaces that
            feel fast on mobile and desktop alike.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40 sm:p-10"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Highlights
          </h3>
          <ul className="mt-6 space-y-4 text-base font-medium text-slate-700 dark:text-slate-300">
            {[
              "MERN stack end-to-end project delivery",
              "PHP web development and maintenance",
              "Next.js App Router and SEO optimization",
              "Education: BCA, completed in 2023",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
