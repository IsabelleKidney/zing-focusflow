import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  scale, 
  color, 
  speed, 
  distort 
}: { 
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const TorusShape = ({ 
  position, 
  scale, 
  color, 
  speed 
}: { 
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.08;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.1;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -3] as [number, number, number], scale: 1.2, color: '#f97316', speed: 0.4, distort: 0.3 },
    { position: [4, -1, -4] as [number, number, number], scale: 0.8, color: '#fb923c', speed: 0.5, distort: 0.4 },
    { position: [-2, -2, -2] as [number, number, number], scale: 0.6, color: '#fdba74', speed: 0.6, distort: 0.2 },
    { position: [3, 3, -5] as [number, number, number], scale: 1.5, color: '#ea580c', speed: 0.3, distort: 0.5 },
    { position: [0, 1, -6] as [number, number, number], scale: 2, color: '#c2410c', speed: 0.2, distort: 0.3 },
  ], []);

  const toruses = useMemo(() => [
    { position: [5, 0, -4] as [number, number, number], scale: 0.5, color: '#f97316', speed: 0.3 },
    { position: [-5, -1, -5] as [number, number, number], scale: 0.7, color: '#fb923c', speed: 0.4 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#fff7ed" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#f97316" />
      
      {shapes.map((props, i) => (
        <FloatingShape key={`shape-${i}`} {...props} />
      ))}
      
      {toruses.map((props, i) => (
        <TorusShape key={`torus-${i}`} {...props} />
      ))}
    </>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
