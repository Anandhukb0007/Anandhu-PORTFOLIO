"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types/portfolio";

type SkillCardProps = {
  category: SkillCategory;
};

export function SkillCard({ category }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-6 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <header className="mb-6 flex items-center gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 shadow-sm dark:from-indigo-500/20 dark:to-purple-500/20 dark:text-indigo-300">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100">
          {category.title}
        </h3>
      </header>
      <ul className="space-y-5">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
              <span>{skill.name}</span>
              <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/50 dark:bg-slate-800/50">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
