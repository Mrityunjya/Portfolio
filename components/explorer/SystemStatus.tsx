"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SystemStatus() {
  const [time, setTime] = useState("");
  const [load, setLoad] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    const loadInterval = setInterval(() => {
      setLoad(Math.floor(Math.random() * (48 - 38 + 1)) + 38);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(loadInterval);
    };
  }, []);

  return (
    /**
     * Changes:
     * 1. Compact flex-row layout instead of stacked.
     * 2. Removed secondary telemetry (Lat/Long) to save space.
     * 3. Reduced padding and font sizes for a "stealth" look.
     */
    <div className="fixed bottom-6 left-6 z-[150] hidden lg:flex items-center gap-2 font-mono pointer-events-none">
      
      {/* Unified Compact HUD */}
      <div className="flex items-center gap-4 px-3 py-1.5 bg-black/60 border border-white/10 rounded-full backdrop-blur-xl pointer-events-auto shadow-2xl">
        
        {/* Active Pulse Indicator */}
        <div className="flex items-center gap-2 border-r border-white/10 pr-3">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
          </div>
          <span className="text-[8px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Live</span>
        </div>

        {/* Neural Load Mini-Bar */}
        <div className="flex items-center gap-2 min-w-[80px]">
          <span className="text-[8px] text-white/30 uppercase">Load</span>
          <div className="h-[1px] flex-grow bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${load}%` }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-cyan-500 shadow-[0_0_5px_cyan]"
            />
          </div>
          <span className="text-[9px] text-cyan-500/80 font-bold w-6">{load}%</span>
        </div>

        {/* Time - Simplified */}
        <div className="border-l border-white/10 pl-3">
          <span className="text-[9px] text-white/70 font-bold tabular-nums">
            {time || "00:00"}
          </span>
        </div>

      </div>
    </div>
  );
}