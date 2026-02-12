"use client";

import { SECTIONS, SectionId } from "@/app/data/site";

export default function DotNav({ active }: { active: SectionId }) {
  return (
    <nav className="pointer-events-none fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-40">
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          aria-current={active === id ? "true" : undefined}
          className={[
            "pointer-events-auto w-3 h-3 rounded-full ring-2 ring-white/60 transition",
            active === id ? "bg-indigo-500 scale-110" : "bg-slate-300 hover:bg-slate-500",
          ].join(" ")}
        />
      ))}
    </nav>
  );
}
