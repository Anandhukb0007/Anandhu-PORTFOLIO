"use client";

import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SkillCard } from "@/components/ui/skill-card";

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="A practical stack across frontend, backend, and databases."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.05}>
            <SkillCard category={category} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
