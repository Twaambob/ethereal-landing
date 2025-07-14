'use client'; // This is CRITICAL. It tells Next.js this is an interactive, client-side component.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';


const SpinningShape = () => {
  const meshRef = useRef<Mesh>(null!);

  // This hook now also uses the 'state' object, which contains mouse coordinates.
  useFrame((state) => {
    if (meshRef.current) {
      // Smoothly interpolate the mesh rotation towards the mouse position.
      // 'lerp' creates a much smoother, more natural motion.
      meshRef.current.rotation.y += (state.mouse.x * 0.5 - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (-state.mouse.y * 0.5 - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
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