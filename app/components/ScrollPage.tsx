"use client";

import { useEffect, useRef, useState } from "react";
import DotNav from "./DotNav";
import { SECTIONS, SectionId } from "@/app/data/site";

export default function ScrollPage({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<SectionId>("top");

  useEffect(() => {
    const onClick = (e: Event) => {
      const t = e.target as HTMLElement;
      const a = t.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      setProgress(scrollTop / Math.max(1, scrollHeight - clientHeight));

      let best: SectionId = "top";
      let bestDelta = Infinity;
      for (const id of SECTIONS) {
        const s = document.getElementById(id);
        if (!s) continue;
        const delta = Math.abs((s.offsetTop ?? 0) - scrollTop);
        if (delta < bestDelta) { bestDelta = delta; best = id; }
      }
      setActive(best);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 h-0.5 z-[60]"
        style={{ width: `${progress * 100}%`, background: "rgba(79,70,229,0.9)" }}
      />
      <div
        ref={scrollerRef}
        className="h-[calc(100svh-var(--header-h))] overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory"
      >
        {children}
      </div>
      <DotNav active={active} />
    </>
  );
}
