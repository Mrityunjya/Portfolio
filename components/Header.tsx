"use client";

import { useCognitiveMode } from "./context/CognitiveModeStore";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold tracking-wide">Dual Cognitive</h1>
      </div>
    </header>
  );
}
