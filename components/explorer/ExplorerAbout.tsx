"use client";

import { motion } from "framer-motion";

export default function ExplorerAbout() {
  return (
    <div className="relative group">
      {/* 1. Diagnostic Data Peripherals */}
      <div className="absolute -top-10 left-0 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-cyan-500/50" />
        <span className="text-[9px] font-mono text-cyan-500 tracking-[0.5em] uppercase">
          Neural_Identity_Index
        </span>
      </div>

      <div className="absolute -right-8 top-1/2 -rotate-90 origin-right">
        <span className="text-[8px] font-mono text-white/10 tracking-[1em] uppercase">
          Core_Protocol_v8.4
        </span>
      </div>

      {/* 2. The Main Content Terminal */}
      <div className="space-y-8">
        {/* Typewriter Header */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-black tracking-tighter text-white uppercase italic"
        >
          System <span className="text-cyan-500">Architect</span>
        </motion.h2>

        <div className="space-y-6 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-white/80 leading-relaxed text-xl font-medium tracking-tight"
          >
            I build intelligent systems where <span className="text-white font-bold">engineering</span>, 
            <span className="text-cyan-400"> AI</span>, and <span className="text-white font-bold">human cognition</span> intersect. 
            My focus is not just on making things work, but on making them 
            <span className="italic"> understandable, scalable, and ethically grounded.</span>
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white/40 leading-relaxed text-sm font-mono border-l-2 border-cyan-500/20 pl-6"
          >
            // This interface operates in dual-state — fast clarity for recruiters 
            and deep exploration for those who want to understand how things truly work.
          </motion.p>
        </div>

        {/* 3. Diagnostic Footer Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/5">
          {[
            { label: "Stability", val: "99.9%" },
            { label: "Cognition", val: "Active" },
            { label: "Ethics_Level", val: "Hardcoded" },
            { label: "Latency", val: "0.02ms" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-cyan-500/80 font-bold">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-xl" />
    </div>
  );
}