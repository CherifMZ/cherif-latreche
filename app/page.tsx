import Header from "./components/Header";
import ScrollPage from "./components/ScrollPage";

import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Highlights from "./components/sections/Highlights";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Page() {
  return (
    <div className="h-screen bg-slate-50 text-slate-900 selection:bg-indigo-200/60">
      <Header name="Cherif Latreche" />
      <ScrollPage>
        <Hero />
        <Experience />
        <Education />
        <Highlights />
        <Projects />
        <About />
        <Contact />
      </ScrollPage>
    </div>
  );
}
