export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tech: string[];
  view: string;
};

export const projects: Project[] = [
  {
    id: "harmonix",
    title: "HarmoniX",
    subtitle: "AI-driven music cognition engine",
    year: "2024",
    description:
      "An AI system that understands musical structure, emotion, and signal-level cognition using deep learning.",
    tech: ["Python", "PyTorch", "Signal Processing", "Transformers"],
    view: "/explorer/harmonix",
  },
  {
    id: "geosense",
    title: "GeoSense",
    subtitle: "Earth-scale spatial intelligence system",
    year: "2024",
    description:
      "A geospatial intelligence engine combining graph AI and time-series data for large-scale earth insights.",
    tech: ["Graph AI", "Time-Series", "Satellite Data", "Three.js"],
    view: "/explorer/geosense",
  },
  {
    id: "nyxchainz",
    title: "NyxChainZ",
    subtitle: "On-chain fraud intelligence engine",
    year: "2025",
    description:
      "A Web3 fraud detection platform leveraging graph neural networks and probabilistic risk scoring.",
    tech: ["Web3", "Graph Neural Networks", "Risk Scoring"],
    view: "/explorer/nyxchainz",
  },
  {
    id: "NeuralSearch",
    title: "Neural Search",
    subtitle: "NeuroSearch — Personalized Semantic Search Engine",
    year: "2025",
    description:
      "Built a semantic search engine using vector embeddings and a vector database for meaning-based retrieval over unstructured documents.",
    tech: ["ML", "VectorDB", "Semantic"],
    view: "/explorer/neuralsearch",
  },
];
