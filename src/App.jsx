import Navbar from './components/Navbar'
import AboutMe from "./components/AboutMe";
import Hero from './components/Hero'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Contact from './components/Contact'
import Projects from './components/Projects';

export default function App() {
  return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects/>
        <Socials />
        <Contact />
      </main>
    </div>
  )
}
