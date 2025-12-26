"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[]; // This was missing in your data array
}

const experience: ExperienceItem[] = [
  {
    role: "Lead Developer ( AI ML )",
    company: "EDORAS",
    duration: "Nov 2024 – Present",
    description:
      "Designed and built AI-driven systems across NLP, computer vision, and intelligent web platforms with a strong emphasis on real-world usability.",
    tags: ["Neural Networks", "NLP", "Computer Vision", "System Architecture"],
  },
  {
    role: "SDE AI ML Intern",
    company: "Octin Technology",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Designed and built AI-driven systems that detect synthetic data and deepfake artifacts in visual media.",
    tags: ["Synthetic Data", "Deepfake Detection", "PyTorch"],
  },
  {
    role: "AI ML Intern",
    company: "OutriX",
    duration: "Jul 2025 – Aug 2025",
    description:
      "Designed and built AI-driven systems like News Classification, Image Segregation, and automated data labeling pipelines.",
    tags: ["Classification", "Automation", "TensorFlow"],
  },
];

export default function ExplorerExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="w-full relative py-20">
      {/* 1. Header Section */}
      <div className="flex flex-col mb-24 px-4 border-l-2 border-cyan-500/30 pl-8">
        <span className="text-[10px] uppercase tracking-[0.8em] text-cyan-500 font-black block mb-3 font-mono animate-pulse">
          Chronological_Trace // 0xAF32
        </span>
        <h2 className="text-5xl font-black tracking-tighter text-white uppercase italic">
          Professional <span className="text-cyan-500">Trajectory</span>
        </h2>
      </div>

      <div className="relative">
        {/* 2. The Animated Vertical Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-white/5">
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute inset-0 w-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent shadow-[0_0_20px_cyan]"
          />
        </div>

        <div className="space-y-24">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.role}-${index}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="relative pl-12 md:pl-28 group"
            >
              {/* Timeline Node - Holographic Pulse */}
              <div className="absolute left-[11px] md:left-[27px] top-2 z-20">
                <div className="w-3 h-3 rounded-full bg-black border-2 border-cyan-500 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,1)]" />
                <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-500 animate-ping opacity-20" />
              </div>

              {/* Data Card */}
              <div className="relative p-10 bg-[#030712]/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden group-hover:border-cyan-500/40 transition-all duration-700">
                
                {/* Internal Scanline Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase italic group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      <p className="text-cyan-500/80 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-mono text-cyan-400 font-bold whitespace-nowrap uppercase tracking-widest shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]">
                    {item.duration}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-10 max-w-3xl text-lg relative z-10">
                  {item.description}
                </p>

                {/* Diagnostic Tags */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 rounded-full bg-black border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Final Interactive Glow */}
                <div className="absolute -inset-x-40 -inset-y-40 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[120px] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}