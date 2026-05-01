import projects from "@/data/projects.json";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/types/portfolio";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
};

async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch("https://api.github.com/users/anandhukb/repos?sort=updated&per_page=4", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GithubRepo[];
    return repos;
  } catch {
    return [];
  }
}

export async function ProjectsSection() {
  const projectList = projects as Project[];
  const repos = await getGithubRepos();

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected builds with real-world workflows and modern stack choices."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projectList.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="group relative mt-12 overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
          GitHub Activity
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Live repository data fetched from GitHub API (refreshes hourly).
        </p>
        {repos.length > 0 ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {repos.map((repo) => (
              <li key={repo.id} className="relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-5 transition hover:border-indigo-500/30 hover:bg-white/80 dark:border-white/5 dark:bg-slate-800/50 dark:hover:border-indigo-500/30 dark:hover:bg-slate-800/80">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-base font-semibold text-slate-900 transition hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
                >
                  {repo.name}
                </a>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {repo.description ?? "No description provided yet."}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {repo.language ?? "Codebase"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            GitHub preview unavailable right now. Project cards above remain available.
          </p>
        )}
      </Reveal>
    </SectionWrapper>
  );
}
