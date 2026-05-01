import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden scroll-mt-24 pt-24 pb-10 sm:pt-32 sm:pb-14"
    >
      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50/50 px-4 py-2 text-sm font-medium text-indigo-700 backdrop-blur-md dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Available for full stack roles
          </div>
          <h1 className="mt-6 text-balance font-heading text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Anandhu K B
            </span>
          </h1>
          <p className="mt-4 text-2xl font-medium tracking-tight text-slate-700 dark:text-slate-300">
            Full Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            I build performant web apps with clean architecture, modern UX, and reliable
            backend systems across MERN stack, PHP, and Next.js.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-medium text-white shadow-xl shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/50 px-8 py-3.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal className="justify-self-center relative" delay={0.2}>
          <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-sm rounded-[2.5rem] border border-white/20 bg-white/40 p-4 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
              <Image
                src="/Hero.png"
                alt="Profile illustration of Anandhu K B"
                width={540}
                height={540}
                priority
                className="h-auto w-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
