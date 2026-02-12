"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { skillGroups } from "@/app/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen snap-start px-6 bg-white pb-20 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-none">
            I’m a software engineer and researcher interested in building reliable, scalable systems
            end-to-end backend services, cloud infrastructure, and automation. I enjoy turning ideas
            into clean implementations, instrumenting them with the right metrics, and iterating
            quickly from prototype to something production-ready.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Tech stack
            </h3>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.label} className="min-w-0">
                <div className="text-xs font-medium text-slate-500">{g.label}</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300 bg-white px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute left-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800"
      >
        <ChevronUp className="w-5 h-5" />
      </a>
      <a
        href="#contact"
        className="absolute right-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
