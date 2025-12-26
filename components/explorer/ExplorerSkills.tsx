"use client";

import { motion } from "framer-motion";

// Expanded and Categorized Skills Data
const skillsData = {
  "AI / ML": [
    "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", 
    "Graph AI", "Reinforcement Learning", "Vector DBs (Pinecone, FAISS)", 
    "Multi-Agent Orchestration", "Predictive Modeling"
  ],
  "Frontend": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Three.js", "Framer Motion", "ShadCN UI", "Cinematic UI/UX"
  ],
  "Backend": [
    "Node.js", "GraphQL", "REST APIs", "PostgreSQL", 
    "MongoDB", "SQL", "WebSockets", "Microservices"
  ],
  "Other / Tools": [
    "Git", "Docker", "Linux", "Figma", 
    "Smart Contract Analytics", "Financial AI", "Security & Fraud Analysis"
  ],
};

const NeuralIcon = () => (
  <div className="relative w-12 h-12 mr-4 hidden sm:block">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-cyan-500/30 rounded-lg"
    />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [45, 135, 45] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-2 border border-cyan-400/60 bg-cyan-400/10 rotate-45"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]" />
    </div>
  </div>
);

export default function ExplorerSkills() {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 w-full">
      {Object.entries(skillsData).map(([category, items], catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: catIndex * 0.15 }}
          className="group relative"
        >
          {/* Header Area */}
          <div className="flex items-start mb-6">
            <NeuralIcon />
            <div className="flex-1">
              <div className="flex justify-between items-end w-full mb-1">
                <span className="text-[9px] uppercase tracking-[0.5em] text-cyan-500 font-black">
                  Core_Module_{catIndex + 1}
                </span>
                <span className="text-[9px] font-mono text-white/30 tracking-tighter">
                  SYS_ID: 0x{Math.random().toString(16).slice(2, 6).toUpperCase()}
                </span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic group-hover:text-cyan-400 transition-colors duration-500">
                {category.replace(" / ", " // ")}
              </h3>
            </div>
          </div>

          {/* Advanced Loading Bar [Diagnostic Sweep] */}
          <div className="relative h-[2px] w-full bg-white/5 mb-8 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: catIndex * 0.3 }}
              className="absolute h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />
            <motion.div 
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute h-full w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40"
            />
          </div>

          {/* Categorized Skill Pills */}
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.5)" }}
                className="px-4 py-1.5 bg-black border border-white/20 rounded-full flex items-center gap-2 group/pill transition-all cursor-default"
              >
                <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-40 group-hover/pill:opacity-100 group-hover/pill:shadow-[0_0_8px_cyan] transition-all" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover/pill:text-cyan-400">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Holographic Vertical Metadata */}
          <div className="absolute -right-4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block">
            <div className="absolute top-1/2 -translate-y-1/2 left-2 rotate-90 origin-left whitespace-nowrap text-[8px] font-mono text-cyan-500/30 tracking-[0.4em] uppercase">
              Module_Sync_Established
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}