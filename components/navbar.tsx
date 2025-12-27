"use client";

import { useState, useEffect } from "react";
import { useCognitiveMode } from "./context/CognitiveModeStore";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const { mode, toggleMode } = useCognitiveMode();

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certs", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-gray-200 fixed top-[80px] z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-cyan-500" : "text-gray-600 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mode Toggle */}
        <button
          onClick={toggleMode}
          className="px-4 py-1.5 rounded-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
        >
          {mode === "explorer" ? "Recruiter Mode" : "Explorer Mode"}
        </button>
      </div>
    </nav>
  );
}
