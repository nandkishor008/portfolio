import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";

const nodes = [
  { p: [-2.65, 1.25, 0.2], label: "UI", color: "#ff625b" },
  { p: [2.55, 1.1, -0.1], label: "API", color: "#ff9a86" },
  { p: [-2.8, -1.05, 0], label: "AUTH", color: "#ffb18f" },
  { p: [2.7, -1.05, 0.15], label: "DB", color: "#ff625b" },
  { p: [0, 2.35, -0.2], label: "CLOUD", color: "#ff8b7f" },
  { p: [0, -2.25, 0.15], label: "GIT", color: "#ffb8aa" }
];

function CoreServer() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.07;
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.45, 1.75, 1.45]} />
        <meshStandardMaterial
          color="#111116"
          metalness={0.85}
          roughness={0.18}
          emissive="#3a080c"
          emissiveIntensity={0.55}
        />
      </mesh>

      <mesh scale={[1.03, 1.03, 1.03]}>
        <boxGeometry args={[1.45, 1.75, 1.45]} />
        <meshBasicMaterial color="#ff4f4f" wireframe transparent opacity={0.22} />
      </mesh>

      {[-0.48, 0, 0.48].map((y) => (
        <group key={y}>
          <mesh position={[0, y, 0.74]}>
            <boxGeometry args={[0.86, 0.035, 0.018]} />
            <meshBasicMaterial color="#ff655d" />
          </mesh>
          <mesh position={[-0.45, y, 0.75]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshBasicMaterial color="#ffb5a8" />
          </mesh>
        </group>
      ))}

      <Text position={[0, 1.18, 0]} fontSize={0.13} color="#ff7a70" anchorX="center">
        SERVER
      </Text>
      <Text position={[0, -1.15, 0]} fontSize={0.105} color="#a99a9b" anchorX="center">
        CORE API
      </Text>
    </group>
  );
}

function ArchitectureNode({ item, index }) {
  const ref = useRef();
  const phase = index * 0.9;

  useFrame((state) => {
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + phase) * 0.12;
    if (ref.current) ref.current.scale.setScalar(pulse);
  });

  return (
    <group position={item.p}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.24, 1]} />
        <meshBasicMaterial color={item.color} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color={item.color} />
      </mesh>
      <Text position={[0, -0.42, 0]} fontSize={0.105} color="#c9b6b5" anchorX="center">
        {item.label}
      </Text>
    </group>
  );
}

function DataPackets() {
  const refs = useRef([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((ref, i) => {
      if (!ref) return;
      const progress = (t * (0.17 + i * 0.025) + i * 0.21) % 1;
      const start = new THREE.Vector3(0, 0, 0);
      const target = new THREE.Vector3(...nodes[i % nodes.length].p);
      ref.position.lerpVectors(start, target, progress);
    });
  });

  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial color={i % 2 ? "#ffb19f" : "#ff514f"} />
        </mesh>
      ))}
    </>
  );
}

function ArchitectureScene() {
  const ring = useRef();

  const lines = useMemo(
    () =>
      nodes.map((node) => ({
        points: [[0, 0, 0], node.p],
      })),
    []
  );

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * 0.08;
    ring.current.rotation.x = 0.65;
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.35}>
        <CoreServer />
      </Float>

      {nodes.map((node, i) => (
        <ArchitectureNode key={node.label} item={node} index={i} />
      ))}

      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={i % 2 ? "#8e2c36" : "#c94b50"}
          transparent
          opacity={0.36}
          lineWidth={0.8}
        />
      ))}

      <DataPackets />

      <group ref={ring}>
        <mesh rotation={[0.65, 0, 0]}>
          <torusGeometry args={[2.55, 0.008, 8, 120]} />
          <meshBasicMaterial color="#ff4f4f" transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[0.65, 0.3, 0.8]}>
          <torusGeometry args={[3.05, 0.006, 8, 120]} />
          <meshBasicMaterial color="#ffb09f" transparent opacity={0.22} />
        </mesh>
      </group>
    </>
  );
}

export default function Scene3D({ compact = false }) {
  return (
    <div className={`scene3d ${compact ? "scene3d--compact" : ""}`}>
      <Canvas camera={{ position: [0, 0, 7.8], fov: 42 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.45} />
        <pointLight position={[3, 4, 5]} intensity={18} color="#ff514f" />
        <pointLight position={[-4, -2, 3]} intensity={8} color="#ffad9a" />
        <Suspense fallback={null}>
          <Stars radius={30} depth={16} count={compact ? 240 : 650} factor={1.5} saturation={0} fade speed={0.25} />
          <ArchitectureScene />
          <Text position={[0, -3.05, 0]} fontSize={0.14} color="#b99e9d" anchorX="center">
            SOFTWARE ARCHITECTURE · DATA · DEPLOYMENT
          </Text>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.13} />
      </Canvas>
    </div>
  );
}
