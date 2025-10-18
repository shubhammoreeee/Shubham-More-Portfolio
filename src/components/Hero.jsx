import { FloatingCodeSymbol } from "./FloatingCodeSymbol";
import React, { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Torus,
  Stars,
  Float,
  Text3D,
  Center,
} from "@react-three/drei";
function FloatingText() {
  const textRef = useRef();

  // Animate rotation and color with mouse
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = state.mouse.x * Math.PI; // horizontal mouse movement
      textRef.current.rotation.x = state.mouse.y * Math.PI * 0.5; // vertical movement
      // Optional: color cycle
      const hue = (state.clock.getElapsedTime() * 50) % 360;
      textRef.current.material.color.setHSL(hue / 360, 0.7, 0.5);
    }
  });

  return (
    <Center position={[0, 1.5, 0]}>
      {/* <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json" // add font file in public/fonts
        size={0.5}
        height={0.2}
      >
        Shubham More
        <meshStandardMaterial color="#ffcc00" />
      </Text3D> */}
    </Center>
  );
}

export default function Hero() {
  return (
    <section id="home" className="w-full h-screen bg-black relative">
      <motion.div className="absolute z-10 pt-20 w-full p-0 text-center md:top-[150px] md:text-start md:p-[100px] md:flex justify-between ">
        <div className="w-full md:w-[50%] absolute top-80 md:top-0 md:relative ">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-pulse">
            Hi, I&apos;m <span className="text-cyan-400">Shubham More</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            I build <span className="text-cyan-400">interactive</span>, <span className="text-cyan-400">modern</span>, and <span className="text-cyan-400">responsive</span> web applications with React.js & Tailwind CSS
          </p>
          <a
          href="/Shubham CV.pdf"
          download
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-cyan-600 hover:text-white transition-colors"
        >
          Download Resume
        </a></div>
        <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-0 md:relative mt-20 ml-20 md:mt-[-70px] z-20"
      >
        {/* Animated glowing border */}
        <motion.div
          className="absolute inset-0 rounded-full p-[5px] blur-md"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        ></motion.div>

        <img
          src="./SelfImage.jpg"
          alt="Shubham More"
          className="relative rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover border-[4px] border-cyan-500 shadow-lg shadow-cyan-500/30"
        />
      </motion.div>
      </motion.div>

      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

         {/* Mouse-controlled orbit */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

          <Suspense fallback={null}>
           {/* Floating Sphere with color cycle */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.2, 64, 64]} scale={1.5}>
              <MeshDistortMaterial
                // color="blue"
                color= "#6b93d6" /* A specific "earth" brown */
                backgroundcolor= "#34A56F" /* An "earth" green */
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Float>

          {/* Torus with color shift */}
          <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
            <Torus args={[1, 0.3, 16, 100]} position={[3, 1, -2]} scale={0.8}>
              <MeshDistortMaterial color="#ffcc00" attach="material" distort={0.2} speed={2} />
            </Torus>
          </Float>

          {/* Floating Cubes */}
          {[...Array(5)].map((_, i) => (
            <Float
              key={i}
              speed={0.5 + i * 0.2}
              rotationIntensity={1}
              floatIntensity={1}
              floatingRange={[1, 2]}
            >
              <mesh
                position={[
                  Math.random() * 6 - 3,
                  Math.random() * 4 - 2,
                  Math.random() * 6 - 3,
                ]}
              >
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial
                  color={`hsl(${(i * 72) % 360}, 100%, 60%)`}
                />
              </mesh>
            </Float>
          ))}

          {/* Floating 3D Text */}
          <FloatingText />

          {/* Stars / Particles */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>
        {/* <Float>
          <Sphere args={[1.5, 32, 32]}>
            <MeshDistortMaterial color="#3a86ff" distort={0.2} speed={1.5} />
          </Sphere>
        </Float> */}

        Floating coding symbols
        <FloatingCodeSymbol position={[-3,1,-2]} text="< />" />
        <FloatingCodeSymbol position={[2,-1,-3]} text="{}" />
      </Canvas>
    </section>
  );
}
