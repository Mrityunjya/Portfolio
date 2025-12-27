"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, createPortal } from "@react-three/fiber"; //
import { Points, PointMaterial, Float, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from "@react-three/postprocessing";

// ✅ THE CONSUMER: Wrapped in its own boundary
function SceneContent() {
  const points = useRef<THREE.Points>(null);
  const { mouse, scene } = useThree(); //

  const positions = useMemo(() => {
    const pos = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const distance = THREE.MathUtils.randFloat(7, 14);
      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta) * 0.8;
      pos[i * 3 + 2] = distance * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => { //
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.03;
    points.current.rotation.z = Math.sin(t * 0.2) * 0.05;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 1.5, 0.02);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 1.5, 0.02);
  });

  return (
    <>
      <color attach="background" args={["#010208"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial transparent color="#0ea5e9" size={0.025} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.4} />
        </Points>
      </Float>
      <Sphere args={[20, 32, 32]}>
        <meshBasicMaterial color="#0c4a6e" side={THREE.BackSide} transparent opacity={0.03} />
      </Sphere>
      <Suspense fallback={null}>
        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={0.15} mipmapBlur intensity={1.8} radius={0.3} />
          <ChromaticAberration offset={new THREE.Vector2(0.001, 0.001)} radialModulation modulationOffset={0.5} />
          <Noise opacity={0.04} />
          <Vignette offset={0.1} darkness={1.2} />
        </EffectComposer>
      </Suspense>
    </>
  );
}

// ✅ THE PROVIDER: Uses a "Mount Lock" to prevent SSR-related context loss
export default function ExplorerScene() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-[#010208]" />;

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 40 }}
        gl={{ antialias: false, stencil: false, depth: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}