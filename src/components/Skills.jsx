import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
  { name: "Git & GitHub", level: 75, icon: <FaGitAlt className="text-orange-500" /> },
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Floating Background Glows */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        ⚡ My Skills ⚡
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            className="group relative bg-gray-800/40 backdrop-blur-xl border border-gray-700 hover:border-cyan-400 shadow-lg rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-cyan-400/30"
          >
            <div className="text-5xl mb-3 flex justify-center">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
              ></motion.div>
            </div>

            {/* Floating glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
              layoutId="glow"
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Logos in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[FaReact, SiTailwindcss, FaJs, FaGithub].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${40 + Math.random() * 60}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
