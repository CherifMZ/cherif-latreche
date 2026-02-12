"use client";

type Props = { name?: string };

export default function Header({ name = "Your Name" }: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 bg-clip-text text-transparent">
            {name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#experience" className="hover:opacity-70">Experience</a>
          <a href="#education" className="hover:opacity-70">Education</a>
          <a href="#highlights" className="hover:opacity-70">Highlights</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>

          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-1 rounded-xl border border-slate-300 px-3 py-1.5 hover:shadow-sm"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
