"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import certificatesData from "../certificates.json"; 

interface Certificate {
  title: string;
  issuer?: string;
  year?: string;
  link?: string;
  image?: string;
}

const CertificateCard = ({ c, index }: { c: Certificate; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-[480px] w-full cursor-pointer"
    >
      <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/15 transition-colors duration-700 rounded-[2rem] blur-3xl" />

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full bg-[#030712]/60 backdrop-blur-[20px] border border-white/10 rounded-[2rem] overflow-hidden p-6 shadow-2xl transition-all duration-500 group-hover:border-cyan-500/50"
      >
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-black/40">
          <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_cyan] z-30"
          />

          <Image
            src={c.image || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"}
            alt={c.title}
            fill
            unoptimized
            className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 saturate-0 group-hover:saturate-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-cyan-500 font-bold tracking-[0.3em] uppercase">
              Cred_ID_{index.toString().padStart(3, '0')}
            </span>
            <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_cyan]" />
          </div>
          
          <h3 className="text-2xl font-bold tracking-tighter text-white leading-tight min-h-[60px]">
            {c.title}
          </h3>

          <div className="mt-4 flex flex-col gap-1">
            <p className="text-xs font-mono text-white/40 uppercase tracking-wider">{c.issuer || "System Verified"}</p>
            <p className="text-[10px] font-mono text-cyan-500/60 uppercase">{c.year || "2024"} // AUTHENTICATED</p>
          </div>

          <a
            href={c.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full py-4 rounded-xl bg-white/5 border border-white/10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/80 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-500"
          >
            Request Access
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExplorerCertificates() {
  const data = Array.isArray(certificatesData) ? certificatesData : [];

  return (
    <div className="w-full py-20"> 
      <div className="flex flex-col mb-20 px-4 md:px-16">
        <span className="text-[10px] uppercase tracking-[0.8em] text-cyan-500 font-bold block mb-4">
          Verification_Sequence
        </span>
        <h2 className="text-5xl font-bold tracking-tighter text-white lg:text-6xl">
          Cognitive Credentials
        </h2>
      </div>

      {/* SPACING FIX: 
          1. gap-16: Increases space between cards.
          2. px-8 md:px-20: Creates a wide horizontal buffer to avoid HUD overlap.
          3. perspective-[2000px]: Provides more 3D 'depth' room for the tilt.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 md:px-20 perspective-[2000px]">
        {data.map((c, index) => (
          <CertificateCard key={index} c={c} index={index} />
        ))}
      </div>
    </div>
  );
}