import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { socialLinks } from "@/lib/site-config";

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: MdEmail,
};

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Let’s discuss product ideas, freelance work, or team opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Connect
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Reach me through email or social channels. I usually respond within 24 hours.
          </p>
          <ul className="mt-8 space-y-4">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.label as keyof typeof socialIconMap];

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                    className="inline-flex w-full items-center gap-4 rounded-2xl border border-slate-300/70 bg-white/50 px-5 py-4 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-all hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/40">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <ContactForm />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
