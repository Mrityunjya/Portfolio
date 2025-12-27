"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// 1. IMPORT REAL DATA AND TYPE
import { projects, type Project } from "@/data/projects"; 

// ✅ FIX: Dynamically import ExplorerScene with SSR disabled
// This prevents the "Hooks can only be used within the Canvas component" error
// by ensuring the Canvas and its children load together on the client.
const ExplorerScene = dynamic(() => import("./ExplorerScene"), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#010208]" /> 
});

// Explorer Components
import ExplorerSkills from "./ExplorerSkills";
import ExplorerProject from "./ExplorerProject";
import ExplorerCertificates from "./ExplorerCerificates";
import ExplorerResearch from "./ExplorerResearch";
import ExplorerExperience from "./ExplorerExperience";
import ExplorerContact from "./ExplorerContact";
import ExplorerAbout from "./ExplorerAbout"; 
import RebootTransition from "./RebootTransition";
import SystemStatus from "./SystemStatus";
import Navbar from "./navbar"; 

// Standard Shared Components
import Hero from "../Hero";

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`relative z-10 bg-[#030712]/50 backdrop-blur-[40px] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden group ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
    <div className="relative z-10 p-10 md:p-16">{children}</div>
  </motion.div>
);

export default function ExplorerMode() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#010208] text-white selection:bg-cyan-500/30 font-sans antialiased overflow-x-hidden">
      
      <RebootTransition isExplorer={true} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Navbar /> 
        <SystemStatus />
        <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[300] origin-left shadow-[0_0_15px_cyan]" />
      </motion.div>

      {/* BACKGROUND SCENE */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <ExplorerScene />
      </motion.div>

      <main className="relative z-10 flex flex-col items-center gap-64 py-48 px-6 lg:px-12">
        
        <section id="hero" className="w-full max-w-6xl text-center min-h-[70vh] flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="w-full max-w-4xl scroll-mt-40">
          <p className="diag-label">Log_Entry // Identity_Manifest</p>
          <GlassCard>
            <ExplorerAbout />
          </GlassCard>
        </section>

        <section id="experience" className="w-full max-w-5xl scroll-mt-40">
          <p className="diag-label">Log_Entry // Trajectory_Trace</p>
          <ExplorerExperience />
        </section>

        <section id="skills" className="w-full max-w-5xl scroll-mt-40">
          <GlassCard>
             <div className="flex flex-col gap-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                   <h2 className="text-3xl font-black tracking-tighter uppercase italic text-white">System_Diagnostics</h2>
                   <span className="text-[10px] font-mono text-cyan-500 animate-pulse hidden sm:block">STATUS // OPTIMIZED</span>
                </div>
                <ExplorerSkills />
             </div>
          </GlassCard>
        </section>

        <section id="projects" className="w-full max-w-6xl scroll-mt-40">
          <p className="diag-label">Log_Entry // Holographic_Output</p>
          <GlassCard className="!p-0">
            <div className="relative p-10 md:p-16">
              <ExplorerProject project={projects[currentIndex] as any} />
              
              <div className="flex justify-between w-full mt-16 px-6">
                <button 
                  onClick={() => setCurrentIndex(c => (c === 0 ? projects.length - 1 : c - 1))} 
                  className="nav-btn group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                </button>
                
                <div className="flex items-center gap-2">
                  {projects.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 transition-all duration-300 ${i === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/10'}`} 
                    />
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentIndex(c => (c === projects.length - 1 ? 0 : c + 1))} 
                  className="nav-btn group"
                >
                   <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </GlassCard>
        </section>

        <section id="certificates" className="w-full max-w-7xl scroll-mt-40">
           <ExplorerCertificates />
        </section>

        <section id="research" className="w-full max-w-4xl scroll-mt-40">
          <p className="diag-label">Log_Entry // Intelligence_Archives</p>
          <GlassCard><ExplorerResearch /></GlassCard>
        </section>

        <section id="contact" className="w-full max-w-5xl scroll-mt-40 mb-32">
          <ExplorerContact />
        </section>

        <footer className="flex flex-col items-center gap-8 opacity-30 hover:opacity-100 transition-all duration-700 pb-20">
           <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_cyan]" />
           <span className="text-[10px] font-mono uppercase tracking-[0.8em] animate-pulse">End_Of_Transmission</span>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="text-[9px] font-black text-cyan-400 hover:text-white transition-all border border-cyan-500/20 px-8 py-3 rounded-full hover:bg-cyan-500/10 uppercase tracking-[0.3em]"
           >
             [ RE-INITIALIZE_SYSTEM ]
           </button>
        </footer>
      </main>

      <style jsx>{`
        .diag-label { @apply text-[9px] font-mono text-cyan-500/40 tracking-[0.5em] uppercase mb-5 ml-6 font-bold; }
        .nav-btn {
          @apply w-16 h-16 flex items-center justify-center 
          bg-white/[0.03] border border-white/10 rounded-full 
          hover:bg-cyan-500/10 hover:border-cyan-500/40 
          transition-all duration-500 text-2xl text-white/50 hover:text-cyan-400;
        }
      `}</style>
    </div>
  );
}