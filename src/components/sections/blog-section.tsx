import { blogPosts } from "@/data/blog-posts";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FaArrowRight } from "react-icons/fa";

export function BlogSection() {
  return (
    <SectionWrapper
      id="blog"
      title="Blog"
      subtitle="MDX-ready content cards for developer notes and tutorials."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal
            key={post.title}
            delay={index * 0.05}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
              {post.date}
            </p>
            <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {post.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>
            <a
              href={post.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Read article
              <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
