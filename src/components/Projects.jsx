import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
    title: "QR Attendance System",
    desc: "A smart QR-based attendance solution built using React.js, Tailwind CSS, and Node.js for real-time student tracking.",
    img: "/project1.png",
    github: "https://github.com/A1YAARY/Csi_Attendance_Web",
    live: "https://csi-attendance-web-fronted-test.onrender.com",
    tech: ["React", "Tailwind", "Node.js"],
    },
    {
    title: "Portfolio Website",
    desc: "My personal space on the web, built with animations, responsive design, and interactive 3D effects using Framer Motion.",
    img: "/project2.png",
    github: "https://github.com/shubhammoreeee",
    live: "#",
    tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
    title: "AyurSutra Care,Connect,Cure",
    desc: "A web-based telehealth platform enabling rural healthcare access through real-time consultations.",
    img: "/project3.png",
    github: "https://github.com/shubhammoreeee",
    live: "#",
    tech: ["React", "Express", "MongoDB"],
    },
];

export default function Projects() {
    return (
    <section
        id="projects"
        className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      {/* Cosmic light overlay */}
        <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="text-center mb-16 relative z-10">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold  drop-shadow-lg"
        >
            🚀 Featured Projects
        </motion.h2>
        <p className="text-gray-400 mt-3 text-lg">
            Hover over each project to explore its details
        </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10">
        {projects.map((proj, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="group relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-cyan-400/20 backdrop-blur-md hover:shadow-cyan-400/40 transition-all duration-500"
            >
            {/* Project image */}
            <motion.img
                src={proj.img}
                alt={proj.title}
                className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
            />

            {/* Glowing border on hover */}
            <motion.div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-all duration-500"></motion.div>

            {/* Project content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                {proj.title}
                </h3>
                <p className="text-gray-400 mb-4">{proj.desc}</p>

              {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                    <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-400 text-sm px-3 py-1 rounded-full"
                    >
                    {t}
                    </span>
                ))}
                </div>

              {/* Buttons */}
                <div className="flex gap-4">
                <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300 z-30"
                >
                    <FaGithub /> Code
                </a>
                <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full text-black font-semibold transition-all duration-300 z-30"
                >
                    <FaExternalLinkAlt /> Live
                </a>
                </div>
            </div>
            </motion.div>
        ))}
        </div>

      {/* Floating stars overlay */}
        <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
        >
        {[...Array(30)].map((_, i) => (
            <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />
        ))}
        </motion.div>
    </section>
    );
}
