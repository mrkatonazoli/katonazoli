export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-line font-mono text-xs uppercase tracking-[0.18em] text-muted">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-start md:items-center">
        <div className="flex items-center gap-3">
          <span className="text-accent">©</span>
          <span>{new Date().getFullYear()} Katona Zoli</span>
        </div>
        <div>
          <a
            href="mailto:hello@katonazoli.hu"
            className="hover:text-foreground transition-colors normal-case tracking-normal"
          >
            hello@katonazoli.hu
          </a>
        </div>
      </div>
    </footer>
  );
}
