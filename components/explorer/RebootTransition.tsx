"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RebootTransition({ isExplorer }: { isExplorer: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 1400); 
    return () => clearTimeout(timer);
  }, [isExplorer]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#010208] pointer-events-none overflow-hidden"
        >
          {/* 1. LAYER: VIRTUAL FRAME-BUFFER DISTORTION */}
          <motion.div 
            animate={{ 
              opacity: [0, 0.2, 0, 0.3, 0],
              scaleY: [1, 1.05, 0.95, 1],
              skewX: [0, 10, -10, 0]
            }}
            transition={{ duration: 0.2, repeat: 6 }}
            className="absolute inset-0 bg-cyan-500/5 z-0"
          />

          {/* 2. LAYER: PROCEDURAL SCANNING GRIDS */}
          <div className="absolute inset-0 z-10 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#164e63_1px,transparent_1px),linear-gradient(to_bottom,#164e63_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* 3. LAYER: CENTRAL DIAGNOSTIC CORE */}
          <div className="relative z-50 flex flex-col items-center">
            {/* Spinning Mechanical Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 border-t-2 border-l-2 border-cyan-500/20 rounded-full"
            />
            
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                {/* Mode-Specific Status Codes */}
                <div className="font-mono text-[8px] text-cyan-500/40 mb-2 tracking-[0.4em]">
                  {isExplorer ? "LOG_ENTRY: 0x882A_INIT" : "LOG_ENTRY: 0x114B_RESTORE"}
                </div>
                
                <h2 className="text-[12px] font-black tracking-[1.2em] text-white uppercase italic drop-shadow-[0_0_10px_rgba(6,182,212,1)]">
                  {isExplorer ? "Explorer_Interface" : "Standard_Protocol"}
                </h2>
              </motion.div>

              {/* Data Packet Progress Bar */}
              <div className="w-72 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_cyan]"
                />
              </div>

              {/* Binary Readout Footer */}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
                className="font-mono text-[7px] text-cyan-800 tracking-[0.8em]"
              >
                101001101011001010101111001
              </motion.div>
            </div>
          </div>

          {/* 4. LAYER: THE "KINETIC" SWEEP (Laser) */}
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 0.7, ease: "circIn" }}
            className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_40px_5px_cyan] z-[100]"
          />

          {/* 5. LAYER: FINAL SHUTTER GLITCH */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0, 1, 0],
              x: [0, -20, 20, 0]
            }}
            transition={{ delay: 1.2, duration: 0.2 }}
            className="absolute inset-0 bg-white mix-blend-difference z-[110]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}