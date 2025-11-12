// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-gray-900 text-white text-center px-6">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
//       <p className="mb-4">Let's build something together 🚀</p>
//       <form
//         action="https://formspree.io/f/xpwybdoy"
//         method="POST"
//         className="max-w-md mx-auto space-y-4"
//       >
//         <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md text-black" required />
//         <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded-md text-black" required />
//         <input name="contact no." placeholder="Your Contact No." className="w-full p-3 rounded-md text-black" required />
//         <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-md text-black h-32" required></textarea>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">Send Message</button>
//       </form>
//       <p className="text-sm mt-4 text-gray-300">Or email me at <a href="mailto:shubhammore14112006@gmail.com" className="underline">shubhammore14112006@gmail.com</a></p>
//     </section>
//   )
// }
// import { motion } from "framer-motion";
// import { FaPaperPlane } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center px-6"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-extrabold mb-4"
//       >
//         Get in Touch 💬
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-gray-300 mb-10 text-lg"
//       >
//         Have an idea or a project? Let’s collaborate and make it real 🚀
//       </motion.p>

//       <motion.form
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         viewport={{ once: true }}
//         action="https://formspree.io/f/xpwybdoy"
//         method="POST"
//         className="max-w-md mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-lg space-y-4 backdrop-blur-sm"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           name="contact no."
//           placeholder="Your Contact No."
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           className="w-full p-3 rounded-md text-black h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         ></textarea>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all px-6 py-3 rounded-lg font-semibold text-white shadow-md w-full"
//         >
//           <FaPaperPlane /> Send Message
//         </motion.button>
//       </motion.form>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-sm mt-6 text-gray-400"
//       >
//         Or email me directly at{" "}
//         <a
//           href="mailto:shubhammore14112006@gmail.com"
//           className="underline hover:text-blue-400 transition-colors"
//         >
//           shubhammore14112006@gmail.com
//         </a>
//       </motion.p>
//     </section>
//   );
// }
// import { motion } from "framer-motion";
// import { FaPaperPlane } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 text-white text-center overflow-hidden"
//     >
//       {/* 🌌 Animated space background */}
//       <div className="absolute inset-0  bg-gray-900">
//         <div className="absolute inset-0"></div>
//         <div className="absolute inset-0"></div>
//         <div className="absolute inset-0">
//           {[...Array(100)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               initial={{
//                 opacity: Math.random(),
//                 x: Math.random() * 100 + "vw",
//                 y: Math.random() * 100 + "vh",
//               }}
//               animate={{
//                 y: ["0vh", "100vh"],
//                 opacity: [1, 0.2, 1],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 💬 Section content */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="relative text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
//       >
//         Contact Me 🚀
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="relative text-gray-300 mb-10 text-lg"
//       >
//         Let’s create something extraordinary among the stars ✨
//       </motion.p>

//       {/* 🛰️ Contact Form */}
//       <motion.form
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         viewport={{ once: true }}
//         action="https://formspree.io/f/xpwybdoy"
//         method="POST"
//         className="relative max-w-md mx-auto bg-gray-800/60 backdrop-blur-md border border-gray-700/60 p-8 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.4)] space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           required
//         />
//         <input
//           name="contact no."
//           placeholder="Your Contact No."
//           className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           className="w-full p-3 rounded-md text-black h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           required
//         ></textarea>
//         <motion.button
//           whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(59,130,246,0.8)" }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-3 rounded-lg font-semibold text-white w-full shadow-lg"
//         >
//           <FaPaperPlane /> Send Message
//         </motion.button>
//       </motion.form>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="relative text-sm mt-8 text-gray-400"
//       >
//         Or email me directly at{" "}
//         <a
//           href="mailto:shubhammore14112006@gmail.com"
//           className="underline hover:text-cyan-400 transition-colors"
//         >
//           shubhammore14112006@gmail.com
//         </a>
//       </motion.p>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  // 🌟 Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit and clear inputs
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xpwybdoy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" }); // clear fields
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong. Please try again.");
    }

    // Clear message after 4 seconds
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 text-white text-center overflow-hidden"
    >
      {/* 🌌 Animated space background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                opacity: Math.random(),
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* 💬 Section content */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
      >
        Contact Me 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-gray-300 mb-10 text-lg"
      >
        Let’s create something extraordinary among the stars ✨
      </motion.p>

      {/* 🛰️ Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-md mx-auto bg-gray-800/60 backdrop-blur-md border border-gray-700/60 p-8 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.4)] space-y-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Your Contact No."
          className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 rounded-md text-black h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(59,130,246,0.8)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-3 rounded-lg font-semibold text-white w-full shadow-lg"
        >
          <FaPaperPlane /> Send Message
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm mt-3 text-cyan-400 font-medium"
          >
            {status}
          </motion.p>
        )}
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-sm mt-8 text-gray-400"
      >
        Or email me directly at{" "}
        <a
          href="mailto:shubhammore14112006@gmail.com"
          className="underline hover:text-cyan-400 transition-colors"
        >
          shubhammore14112006@gmail.com
        </a>
      </motion.p>
    </section>
  );
}
