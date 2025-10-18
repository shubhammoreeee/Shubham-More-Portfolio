import { Github, Linkedin, Mail } from 'lucide-react'

export default function Socials() {
  return (
    <section id="socials" className="py-8 bg-gray-900 text-center">
      <h3 className="text-xl font-semibold mb-4 text-white">Connect with me</h3>
      <div className="flex justify-center gap-6 mt-2">
        <a href="https://github.com/shubhammoreeee" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-600">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/shubham-more-877493369" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-600">
          <Linkedin size={28} />
        </a>
        <a href="mailto:shubhammore14112006@gmail.com" className="text-gray-300 hover:text-cyan-600">
          <Mail size={28} />
        </a>
      </div>
    </section>
  )
}
