export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid de 4 columnas en desktop, 2 en tablet, 1 en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna 1 - Logo + descripción + iconos sociales */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-md">
                <svg
                  className="size-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                DevCorp
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Engineering excellence for the enterprise. We build scalable,
              resilient, and high-performance digital solutions for global
              industry leaders.
            </p>

            <div className="flex gap-4">
              <a
                className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all border border-slate-200 dark:border-slate-700"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all border border-slate-200 dark:border-slate-700"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">terminal</span>
              </a>
            </div>
          </div>

          {/* Columna 2 - Solutions */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Web Platforms
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Cloud Native Apps
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  AI Integration
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Legacy Modernization
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Global Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
              Global Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Security Center
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Partner Program
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Parte inferior: legal + copyright */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Security
            </a>
          </div>

          <p className="text-slate-400 text-xs font-medium">
            © 2026 DevCorp Enterprise. Systems globally operational.
          </p>
        </div>
      </div>
    </footer>
  );
}