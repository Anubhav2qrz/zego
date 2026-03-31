import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Environment, Float, Edges, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const cardCount = 18;
// ... (cards array logic remains here if it's used elsewhere, but for now we focus on SpiralGroup)

function PremiumBox() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshDistortMaterial 
          color="#6D28D9" 
          speed={2} 
          distort={0.3} 
          metalness={0.8}
          roughness={0.2}
          emissive="#4C1D95"
          emissiveIntensity={0.5}
        />
        <Edges
          linewidth={4}
          scale={1.1}
          threshold={15}
          color="#A78BFA"
        />
      </mesh>
    </Float>
  );
}

export default function SpiralCards3D() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} color="purple" intensity={1} />
          <PremiumBox />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
