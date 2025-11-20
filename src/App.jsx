import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Parallax from './components/Parallax'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Parallax />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} STUNT — Built with a love for mecha and clean code.
        </div>
      </footer>
    </div>
  )
}

export default App
