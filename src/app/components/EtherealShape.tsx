'use client'; // This is CRITICAL. It tells Next.js this is an interactive, client-side component.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

const SpinningShape = () => {
  const meshRef = useRef<Mesh>(null!);
  const targetPosition = new Vector3();

  useFrame((state) => {
    if (meshRef.current) {
      const { viewport, mouse } = state;

      // Calculate target position based on mouse
      targetPosition.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      );

      // Animate rotation toward target position
      // If mouse is near center, apply idle rotation
      const isMouseCentered = Math.abs(mouse.x) < 0.01 && Math.abs(mouse.y) < 0.01;
      if (isMouseCentered) {
        meshRef.current.rotation.y += 0.01; // Idle spin
        meshRef.current.rotation.x += 0.005;
      } else {
        // Smoothly rotate toward target
        meshRef.current.lookAt(targetPosition);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      {/* Changed to a non-wireframe material to better see the rotation */}
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.6}
        roughness={0.2}
      />
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