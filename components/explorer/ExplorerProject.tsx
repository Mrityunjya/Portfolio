"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  hologram: string;
}

interface Props {
  project: Project;
}

export default function ExplorerProject({ project }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        // Changed max-width and added padding to prevent squashing
        className="relative flex flex-col items-center text-center w-full max-w-4xl mx-auto py-12"
      >
        {/* --- ADVANCED SCANNING LINE EFFECT --- */}
        {/* Reduced opacity and moved to very back to ensure text readability */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <motion.div 
            initial={{ top: "-100%" }}
            animate={{ top: "200%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent skew-y-12"
          />
        </div>

        {/* --- HOLOGRAPHIC PROJECTION UNIT --- */}
        <div className="relative w-64 h-64 mb-16 flex items-center justify-center z-10">
          {/* Base Glow - Increased spread */}
          <div className="absolute bottom-4 w-40 h-10 bg-cyan-500/30 blur-3xl rounded-[100%] animate-pulse" />
          
          {/* Rotating Outer Rings - Dual Layer for Senior look */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-dotted border-cyan-500/10 rounded-full"
          />

          {/* Hologram Content - Adjusted Glassmorphism */}
          <div className="relative z-10 w-44 h-44 rounded-full bg-cyan-950/20 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center overflow-hidden">
            <div className="text-cyan-400 animate-pulse text-[10px] tracking-[0.5em] font-black uppercase mb-1">
               {project.hologram}
            </div>
            <div className="w-12 h-[1px] bg-cyan-500/50 mb-2" />
            <div className="text-[8px] font-mono text-cyan-500/60 uppercase tracking-tighter">
              Authorized_Access
            </div>

            {/* Scanning Line inside hologram */}
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-0 w-full h-[1px] bg-cyan-400/30 shadow-[0_0_10px_cyan] z-20"
            />
          </div>

          {/* Core Light Beam */}
          <div className="absolute bottom-0 w-[2px] h-32 bg-gradient-to-t from-cyan-500/60 via-cyan-500/20 to-transparent left-1/2 -translate-x-1/2" />
        </div>

        {/* --- TYPOGRAPHY & CONTENT --- */}
        <div className="relative z-20 px-6">
          <motion.h3 
            className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white uppercase italic"
          >
            {project.title}
          </motion.h3>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10 font-medium">
            {project.description}
          </p>

          {/* Technical Stack Pills - Improved Spacing */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Advanced GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-12 py-4 bg-white text-black font-black rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-widest uppercase">View Project Data</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}