"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FlowingIntelligence({ count = 8000 }) {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Create sophisticated particle data: position + unique speed factors
  const [positions, stepSizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const steps = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Create a more organic, slightly flattened ellipsoid cloud
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const distance = THREE.MathUtils.randFloat(7, 14);

      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (distance * Math.sin(phi) * Math.sin(theta)) * 0.8; // Flattened Y
      pos[i * 3 + 2] = distance * Math.cos(phi);
      
      steps[i] = THREE.MathUtils.randFloat(0.1, 1.5); // Individual movement speed
    }
    return [pos, steps];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();

    // 1. Fluid Rotation
    points.current.rotation.y = t * 0.03;
    points.current.rotation.z = Math.sin(t * 0.2) * 0.05;

    // 2. Interactive Parallax (Subtle lean toward mouse)
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 1.5, 0.02);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 1.5, 0.02);

    // 3. Size Pulsing for "Neural Firing" effect
    if (points.current.material instanceof THREE.PointsMaterial) {
      points.current.material.size = 0.025 + Math.sin(t * 1.5) * 0.005;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0ea5e9" // Deep cyan
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

// Background "Volumetric" Atmosphere
function Atmosphere() {
  return (
    <Sphere args={[20, 32, 32]}>
      <meshBasicMaterial 
        color="#0c4a6e" 
        side={THREE.BackSide} 
        transparent 
        opacity={0.03} 
      />
    </Sphere>
  );
}

export default function ExplorerScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 40 }}
      gl={{ antialias: false, stencil: false, depth: false }}
      dpr={[1, 2]} // High-resolution rendering
    >
      <color attach="background" args={["#010208"]} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

      {/* The Core Intelligence */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <FlowingIntelligence />
      </Float>

      {/* Atmospheric Depth */}
      <Atmosphere />

      {/* Post-Processing: The "Senior" Polish */}
      <EffectComposer multisampling={0} disableNormalPass>
        <Bloom 
          luminanceThreshold={0.15} 
          mipmapBlur 
          intensity={1.8} 
          radius={0.3} 
        />
        {/* Adds a high-end "lens" look to the corners */}
        <ChromaticAberration 
          offset={new THREE.Vector2(0.001, 0.001)} 
          radialModulation={true}
          modulationOffset={0.5}
        />
        <Noise opacity={0.04} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>
    </Canvas>
  );
}