import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/postprocessing"], //
  experimental: {
    /* ✅ This allows the bundler to correctly see the R3F context symbols in React 19 */
    optimizePackageImports: ["three", "@react-three/fiber", "@react-three/drei"], 
  },
};

export default nextConfig;