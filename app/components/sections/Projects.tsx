"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/app/data/site";

export default function Projects() {
  return (
    <section id="projects" className="min-h-[calc(100svh-var(--header-h))] md:h-screen md:snap-start flex items-center px-4">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Projects</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <h3 className="font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 text-xs font-medium text-slate-500">{p.stack}</div>
            </motion.a>
          ))}
        </div>
      </div>

      <a href="#highlights" className="absolute left-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronUp className="w-5 h-5" />
      </a>
      <a href="#about" className="absolute right-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
