export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-line text-sm text-muted">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-start md:items-center">
        <div>© {new Date().getFullYear()} Katona Zoli</div>
        <div className="flex gap-6">
          <a
            href="mailto:hello@katonazoli.hu"
            className="hover:text-foreground transition-colors"
          >
            hello@katonazoli.hu
          </a>
        </div>
      </div>
    </footer>
  );
}
