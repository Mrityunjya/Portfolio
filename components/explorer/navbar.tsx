"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCognitiveMode } from "@/context/CognitiveModeStore";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { mode } = useCognitiveMode();

  const isExplorer = mode === "explorer";

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certs", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <AnimatePresence>
      {isExplorer && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          /* fixed positioning with a top offset (pt-32) to sit below your Dual Cognitive header */
          className="fixed top-0 left-0 w-full z-[240] flex justify-center pt-36 pointer-events-none"
        >
          <nav className={`flex items-center gap-2 md:gap-6 px-5 py-2 rounded-full border border-white/10 shadow-2xl transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? "bg-[#030712]/80 backdrop-blur-xl scale-90 border-cyan-500/20" 
              : "bg-white/5 backdrop-blur-md"
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`font-mono font-bold uppercase tracking-[0.2em] text-[9px] px-3 py-1 transition-all relative group
                    ${isActive ? "text-cyan-400" : "text-white/30 hover:text-white"}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Sliding Underline Glow */}
                  {isActive && (
                    <motion.div 
                      layoutId="navPillGlow"
                      className="absolute inset-0 bg-cyan-500/5 rounded-full border border-cyan-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {isActive && (
                    <motion.div 
                      layoutId="activeGlowLine"
                      className="absolute -bottom-1 left-1/4 w-1/2 h-[1px] bg-cyan-500 shadow-[0_0_8px_cyan]" 
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}