"use client";

import { Github, Linkedin, Mail, GraduationCap, ChevronUp } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[calc(100svh-57px)] md:min-h-[calc(100svh-57px)] md:h-screen md:md:snap-start flex items-center justify-center px-6 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:cherif.mohamed.latreche@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90"
          >
            <Mail className="w-4 h-4" /> Email
          </a>

          <a
            href="https://github.com/CherifMZ"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:shadow-sm"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/cheriflatreche"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:shadow-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>

          <a
            href="https://scholar.google.com/citations?user=otypx0UAAAAJ&hl=en&oi=ao"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:shadow-sm"
          >
            <GraduationCap className="w-4 h-4" /> Scholar
          </a>
        </div>

        <a href="#about" className="mt-6 inline-flex items-center gap-2 text-slate-600 hover:text-slate-800">
          <ChevronUp className="w-5 h-5" /> Back to about
        </a>
      </div>
    </section>
  );
}
