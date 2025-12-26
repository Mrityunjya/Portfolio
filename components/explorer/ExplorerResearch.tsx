"use client";

import { motion } from "framer-motion";

interface ResearchEntry {
  id: number;
  title: string;
  type: "medium" | "paper";
  link: string;
  abstract: string;
  date: string;
}

const researchData: ResearchEntry[] = [
  {
    id: 1,
    title: "AI in Autonomous Vehicles",
    type: "medium",
    link: "https://medium.com/example-post",
    abstract: "Heuristic-driven decision trees vs. End-to-End deep learning in urban navigation.",
    date: "2024.Q4"
  },
  {
    id: 2,
    title: "GNNs for Orbital Dynamics",
    type: "paper",
    link: "https://arxiv.org/abs/example-paper",
    abstract: "Utilizing Graph Neural Networks for real-time trajectory prediction in high-density space debris environments.",
    date: "2024.Q2"
  },
  {
    id: 3,
    title: "Computer Vision Paradigms",
    type: "medium",
    link: "https://medium.com/example-post2",
    abstract: "Analyzing the transition from CNNs to Vision Transformers in automotive safety systems.",
    date: "2023.Q4"
  }
];

export default function ExplorerResearch() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-between items-end mb-16 px-2">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-500 font-bold block mb-2">
            Archive_Index
          </span>
          <h2 className="text-4xl font-bold tracking-tighter">Research & Intelligence</h2>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            Database_Sync: Active
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        {researchData.map((entry, index) => (
          <motion.a
            key={entry.id}
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative block w-full"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-colors duration-500 rounded-xl" />
            
            <div className="relative p-6 border-l border-white/10 group-hover:border-cyan-500/50 transition-all duration-500">
              {/* Metadata Header */}
              <div className="flex items-center gap-4 mb-3">
                <span className={`text-[9px] px-2 py-0.5 rounded border ${
                  entry.type === 'paper' ? 'border-purple-500/50 text-purple-400' : 'border-cyan-500/50 text-cyan-400'
                } font-mono uppercase`}>
                  {entry.type}
                </span>
                <span className="text-[10px] font-mono text-white/30 tracking-widest">
                  REL_DATE // {entry.date}
                </span>
              </div>

              {/* Title & Arrow */}
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {entry.title}
                </h3>
                <motion.span 
                  whileHover={{ x: 5 }}
                  className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.span>
              </div>

              {/* Abstract */}
              <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-2xl border-t border-white/5 pt-3">
                {entry.abstract}
              </p>

              {/* Decorative Corner (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/0 group-hover:border-cyan-500/40 transition-all duration-500" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}