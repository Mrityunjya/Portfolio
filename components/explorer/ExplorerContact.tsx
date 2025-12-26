"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExplorerContact() {
  const [status, setStatus] = useState("AWAITING_INPUT"); // AWAITING_INPUT, UPLOADING, SUCCESS
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleTransmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("UPLOADING");

    // Simulated Data Upload Sequence
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("SUCCESS");
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <section id="contact" className="w-full max-w-5xl py-20 px-4 scroll-mt-32">
      <div className="flex flex-col mb-12">
        <span className="text-[10px] uppercase tracking-[0.6em] text-cyan-500 font-bold block mb-3">
          Communication_Link
        </span>
        <h2 className="text-5xl font-bold tracking-tighter text-white">
          Establish Connection
        </h2>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative group">
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-[2rem] group-hover:bg-cyan-500/10 transition-colors" />
          
          <div className="relative bg-[#030712]/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 overflow-hidden min-h-[500px] flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className={`w-2 h-2 rounded-full ${status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500/50'}`} />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className={`w-2 h-2 rounded-full ${status === 'UPLOADING' ? 'bg-cyan-500 animate-pulse' : 'bg-green-500/50'}`} />
              </div>
              <span className="text-[9px] font-mono text-cyan-500 tracking-widest">
                STATUS_REPORT: {status}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {status === "SUCCESS" ? (
                // Success Transmission Visual
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-grow flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full border border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <motion.div 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      className="text-cyan-500 text-2xl font-bold"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Transmission_Received</h3>
                  <p className="text-[10px] text-white/40 font-mono">ENCRYPTION_KEY_STORED // LATENCY_STABLE</p>
                  <button 
                    onClick={() => { setStatus("AWAITING_INPUT"); setUploadProgress(0); }}
                    className="text-[9px] text-cyan-500 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    [ OPEN_NEW_CHANNEL ]
                  </button>
                </motion.div>
              ) : status === "UPLOADING" ? (
                // Uploading Progress Visual
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-grow flex flex-col items-center justify-center space-y-6 w-full"
                >
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]"
                      initial={{ width: 0 }}
                      animate={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between w-full font-mono text-[10px]">
                    <span className="text-cyan-500">UPLOADING_PACKETS...</span>
                    <span className="text-white/40">{uploadProgress}%</span>
                  </div>
                  <div className="text-[8px] font-mono text-white/20 animate-pulse italic">
                    DO_NOT_TERMINATE_CONNECTION
                  </div>
                </motion.div>
              ) : (
                // Standard Form
                <motion.form 
                  onSubmit={handleTransmission}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">// Input_Subject_Name</label>
                    <input required type="text" placeholder="IDENTIFY_YOURSELF" className="contact-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">// Input_Return_Link</label>
                    <input required type="email" placeholder="EMAIL_PROTOCOL" className="contact-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">// Transmission_Data</label>
                    <textarea required rows={4} placeholder="ENCRYPT_MESSAGE..." className="contact-input resize-none" />
                  </div>
                  <button type="submit" className="transmission-btn">
                    Execute_Transmission
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Direct Access Nodes */}
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">Access Protocol Overview</h3>
            <p className="text-sm text-white/40 leading-relaxed font-mono">
              Establish a secure handshake for strategic partnership or high-latency 
              collaboration. Neural nodes are actively listening.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Neural_Link", value: "GITHUB_NODE" },
              { label: "Secure_Node", value: "LINKEDIN_STATION" },
              { label: "Direct_Link", value: "EMAIL_ENDPOINT" }
            ].map((node, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-all cursor-pointer">
                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">{node.label}</span>
                <span className="text-[10px] font-mono text-cyan-500 font-bold group-hover:text-cyan-400 transition-colors tracking-tighter">{node.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-input {
          @apply w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-cyan-400 
          focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/10;
        }
        .transmission-btn {
          @apply w-full py-4 bg-cyan-500 text-black font-black uppercase text-[10px] tracking-[0.4em] rounded-xl 
          hover:bg-white hover:shadow-[0_0_25px_white] transition-all duration-500 active:scale-95;
        }
      `}</style>
    </section>
  );
}