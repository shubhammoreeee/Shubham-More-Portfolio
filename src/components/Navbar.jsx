import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Shubham More";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    let i = 0;

    const type = () => {
      if (!isDeleting && i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
        timer = setTimeout(type, 150);
      } else if (isDeleting && i > 0) {
        setDisplayText(fullText.substring(0, i - 1));
        i--;
        timer = setTimeout(type, 100);
      } else if (!isDeleting && i === fullText.length) {
        timer = setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && i === 0) {
        setIsDeleting(false);
        timer = setTimeout(type, 400);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [isDeleting]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="flex justify-between items-center p-5 bg-gray-900 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      {/* Typewriter Animated Name */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-white "
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 align-middle"
        ></motion.span>
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-cyan-400 transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button
          className="p-2 rounded-lg bg-gray-800 text-white shadow-inner hover:bg-gray-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold"
          >
            {/* {isOpen ? "✕" : "☰"} */}
            <div className="w-6 h-6 flex flex-col justify-around items-center">
        {/* Top line */}
        <motion.div
          className="w-6 h-0.5 bg-white rounded-full origin-center"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 50, y: 10 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        {/* Middle line */}
        <motion.div
          className="w-6 h-0.5 bg-white rounded-full"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        {/* Bottom line */}
        <motion.div
          className="w-6 h-0.5 bg-white rounded-full origin-center"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -50, y: -5 },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </div>
          </motion.span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-lg flex flex-col md:hidden text-center text-white border-t border-gray-700"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="py-4 border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-wide"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
