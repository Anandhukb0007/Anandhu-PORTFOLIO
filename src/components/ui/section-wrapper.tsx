import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="section-shell relative z-10">
        <Reveal>
          <header className="mb-12 max-w-3xl">
            <h2 className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">
              <span className="h-px w-8 bg-indigo-500/50"></span>
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                {subtitle}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
