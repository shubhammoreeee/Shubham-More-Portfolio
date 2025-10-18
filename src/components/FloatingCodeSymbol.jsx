import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";

export function FloatingCodeSymbol({ position, text = "< />", rotationSpeed = 0.01 }) {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += rotationSpeed;
      mesh.current.rotation.x += rotationSpeed / 2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        ref={mesh}
        font="/fonts/helvetiker_regular.typeface.json" // place the font file in public/fonts/
        size={0.3}
        height={0.05}
        position={position}
      >
        {text}
        <meshStandardMaterial color="#00ffff" />
      </Text3D>
    </Float>
  );
}
