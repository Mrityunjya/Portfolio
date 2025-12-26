"use client";

import ResumeButton from "./ResumeButton";

type HeroProps = {
  mode?: "recruiter" | "explorer";
};

export default function Hero({ mode }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Name / Identity */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Mrityunjya Sankar
      </h1>

      {/* Tagline */}
      <p className="mt-3 max-w-xl text-base sm:text-lg md:text-xl text-gray-400">
        Dual Cognitive Engineer — Building intelligent systems where{" "}
        <span className="text-white font-medium">clarity meets chaos</span>.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <ResumeButton />
        <a
          href="#projects"
          className="px-5 py-2 rounded-lg border border-gray-700 hover:border-white transition"
        >
          View Work
        </a>
      </div>

      {/* Mode Hint */}
      <p className="mt-8 text-xs sm:text-sm text-gray-500 italic">
        Focus Mode · Explore Mode
      </p>
    </section>
  );
}
