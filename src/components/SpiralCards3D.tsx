import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Edges, useTexture, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function ProjectCube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Load textures for each side of the cube
  const textures = useTexture([
    '/projects/instagram-logo.png',
    '/projects/canva-logo.png',
    '/projects/adobe-logo.png',
    '/projects/nex-logo.png',
    '/projects/gt650.png',
    '/projects/fortuner.png',
  ]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Extremely gentle base rotation, so it doesn't fight the user too much
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        {textures.map((texture, idx) => (
          <meshStandardMaterial
            key={idx}
            attach={`material-${idx}`}
            map={texture}
            metalness={0}
            roughness={1}
            emissive={idx < 4 ? "white" : "black"}
            emissiveIntensity={idx < 4 ? 0.05 : 0}
          />
        ))}
        <Edges
          linewidth={2}
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
    <div className="w-full h-[500px] flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} color="white" intensity={1} />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={false}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <ProjectCube />
          </PresentationControls>

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
