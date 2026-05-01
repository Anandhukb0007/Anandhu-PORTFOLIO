export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-white/30 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/30">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm font-medium text-slate-600 dark:text-slate-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Anandhu K B. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </a>
          <a href="#projects" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
