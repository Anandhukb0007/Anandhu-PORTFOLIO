"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "@/lib/site-config";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 transition-all duration-500 ${
          isScrolled
            ? "rounded-full border border-slate-200/50 bg-white/70 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
            : "rounded-full border border-transparent bg-transparent py-4"
        }`}
      >
        <nav className="flex items-center justify-between px-6">
          <a
            href="#hero"
            className="font-heading text-lg font-bold tracking-wide text-slate-900 transition-colors hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400"
          >
            Anandhu<span className="text-indigo-500">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-indigo-100/80 dark:bg-indigo-500/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-800 backdrop-blur-sm transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700/50 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300 lg:hidden"
            >
              {isMenuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-slate-200/50 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                      activeSection === item.id
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
