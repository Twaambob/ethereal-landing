'use client'; // This is CRITICAL. It tells Next.js this is an interactive, client-side component.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const SpinningShape = () => {
  const meshRef = useRef<Mesh>(null!);

  // This hook runs on every single frame, making animation possible
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} /> {/* A 20-sided shape */}
      <meshStandardMaterial color="#ffffff" wireframe />
    </mesh>
  );
};

export const EtherealShape = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <SpinningShape />
      </Canvas>
    </div>
  );
};