import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-bold tracking-tight text-white">STUNT<span className="ml-2 text-xs font-normal text-blue-400/80">Full‑Stack • Gundam‑core</span></a>
            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white hover:border-white/20 transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white hover:border-white/20 transition-colors"><Linkedin size={18} /></a>
              <a href="#contact" className="rounded-lg border border-blue-500/30 bg-gradient-to-tr from-blue-600/30 to-fuchsia-600/30 px-3 py-1.5 text-sm text-white hover:from-blue-600/40 hover:to-fuchsia-600/40 transition-colors">Contact</a>
            </div>
            <button className="md:hidden rounded-lg border border-white/10 p-2 text-slate-300"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
