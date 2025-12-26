"use client";

import { useState } from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import ProjectsGrid from "../../components/Projects";
import Skills from "../../components/Skills";
import Certificates from "../../components/Certificates";
import Contact from "../../components/Contact";

import ExplorerMode from "../../components/explorer/ExplorerMode";

type Mode = "recruiter" | "explorer";

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("recruiter");

  const toggleMode = () => {
    setMode((prev) => (prev === "recruiter" ? "explorer" : "recruiter"));
  };

  return (
    <div
      data-theme={mode}
      className="min-h-screen transition-colors duration-500 bg-[var(--bg)] text-[var(--fg)]"
    >
      <div className="fixed top-6 right-6 z-[100]">
        <button
          onClick={toggleMode}
          className="theme-toggle-btn px-4 py-2 rounded-md shadow-md hover:opacity-90 transition"
          aria-label={`Switch to ${mode === "recruiter" ? "Explorer" : "Recruiter"} mode`}
        >
          {mode === "recruiter" ? "🚀 Explorer Mode" : "👔 Recruiter Mode"}
        </button>
      </div>

      {mode === "explorer" ? (
        <ExplorerMode />
      ) : (
        <>
          <Hero mode={mode} titleSize="text-3xl md:text-4xl" />
          <About />
          <Experience />
          <ProjectsGrid />
          <Skills />
          <Certificates />
          <Contact />
        </>
      )}
    </div>
  );
}
