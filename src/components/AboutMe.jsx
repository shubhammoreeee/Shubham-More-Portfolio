import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaUserAstronaut } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden">
      {/* Subtle moving stars background */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaUserAstronaut className="inline-block text-cyan-400 mr-3" />
        About Me
      </motion.h2>

      {/* Profile Summary */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m <span className="text-cyan-400 font-semibold">Shubham More</span>, a passionate
          and self-driven <span className="text-cyan-300">Software Developer</span> with strong
          skills in <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Tailwind CSS</span>,
          and modern web technologies. I love building interactive, responsive, and visually
          appealing web applications. My goal is to become a <span className="text-cyan-300">Full Stack Developer </span>
          and contribute to impactful real-world tech solutions.
        </p>
      </motion.div>

      {/* Education + Experience Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Education Section */}
        <motion.div
          className="bg-gray-800/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 transition-all"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 flex items-center mb-6">
            <FaGraduationCap className="mr-3 text-cyan-300" /> Education
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <p className="font-semibold text-white">
                Bachelor of Engineering (Computer Science)
              </p>
              <p>Atharva College of Engineering, Mumbai</p>
              <p className="text-cyan-400 text-sm">CGPA: 8.75</p>
            </li>
            <li>
              <p className="font-semibold text-white">HSC – Science</p>
              <p>Patkar College, Mumbai</p>
              <p className="text-cyan-400 text-sm">84.33% (2024)</p>
            </li>
            <li>
              <p className="font-semibold text-white">SSC – Nirmala Niketan High School</p>
              <p className="text-cyan-400 text-sm">78.80% (2022)</p>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="bg-gray-800/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/30 transition-all"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 flex items-center mb-6">
            <FaCode className="mr-3 text-cyan-300" /> Experience
          </h3>
          <div className="space-y-4 text-gray-300">
            <p className="font-semibold text-white">
              Frontend Developer – CSI ACE (2025 - Present)
            </p>
            <p>
              As an active member of CSI ACE, I’ve worked on multiple real-time projects using
              React.js and Tailwind CSS. I focus on clean, efficient code and modern UI design
              principles, continuously enhancing my skills through collaboration and online learning.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating glow particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
