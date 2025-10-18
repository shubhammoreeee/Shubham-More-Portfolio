export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4">Let's build something together 🚀</p>
      <form
        action="https://formspree.io/f/xpwybdoy"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded-md text-black" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded-md text-black" required />
        <input name="contact no." placeholder="Your Contact No." className="w-full p-3 rounded-md text-black" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-md text-black h-32" required></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">Send Message</button>
      </form>
      <p className="text-sm mt-4 text-gray-300">Or email me at <a href="mailto:shubhammore14112006@gmail.com" className="underline">shubhammore14112006@gmail.com</a></p>
    </section>
  )
}
