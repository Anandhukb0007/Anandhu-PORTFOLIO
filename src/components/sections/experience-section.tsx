import { experienceItems } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Hands-on product development with backend-first and full stack responsibilities."
    >
      <div className="relative border-l-2 border-slate-200/50 pl-8 dark:border-white/10">
        {experienceItems.map((item) => (
          <Reveal key={item.role} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[2.35rem] top-1.5 h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] ring-4 ring-indigo-500/20" />
            <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <p className="mt-1.5 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
                {item.company} <span className="mx-2 text-slate-300 dark:text-slate-600">•</span> {item.duration}
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {item.summary}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-indigo-500/20 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
