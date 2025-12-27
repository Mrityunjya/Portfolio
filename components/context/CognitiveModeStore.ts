import { create } from "zustand";

export type CognitiveMode = "overview" | "explorer";

interface CognitiveModeState {
  mode: CognitiveMode;
  toggleMode: () => void;
  setMode: (mode: CognitiveMode) => void;
}

export const useCognitiveMode = create<CognitiveModeState>((set) => ({
  mode: "overview",
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "overview" ? "explorer" : "overview",
    })),
  setMode: (mode) => set({ mode }),
}));
