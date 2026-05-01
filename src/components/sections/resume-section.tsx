import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FaFileDownload } from "react-icons/fa";

export function ResumeSection() {
  return (
    <SectionWrapper
      id="resume"
      title="Resume"
      subtitle="Download a concise summary of skills, projects, and experience."
    >
      <Reveal className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40 sm:p-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Need a quick profile overview? Download my resume for role history, technical stack,
            and project highlights in one PDF.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/40"
          >
            <FaFileDownload className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
