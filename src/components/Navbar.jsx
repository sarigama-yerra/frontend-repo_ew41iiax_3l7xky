import React, { useState } from 'react'
import { Menu, Github, Linkedin, Mail, Shield, ChevronRight } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-white/15 shadow-inner">
                <Shield size={16} className="text-white/90" />
              </span>
              <div className="leading-tight">
                <p className="font-black tracking-[0.12em] text-white">STUNT <span className="text-slate-300">//RX</span></p>
                <p className="text-[10px] text-slate-400">スタント • SYSTEMS</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="group text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1">
                  <span className="h-[1px] w-0 bg-slate-400 transition-all group-hover:w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white hover:border-white/20 transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white hover:border-white/20 transition-colors"><Linkedin size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-500/15 px-3 py-1.5 text-xs font-medium text-red-100 hover:bg-red-500/25 transition-colors">
                COMMS <ChevronRight size={14} />
              </a>
            </div>

            <button onClick={() => setOpen(v => !v)} className="md:hidden rounded-lg border border-white/10 p-2 text-slate-300"><Menu size={18} /></button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 p-2 text-slate-300"><Github size={18} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 p-2 text-slate-300"><Linkedin size={18} /></a>
                  <a href="mailto:stunt@example.com" className="rounded-md border border-white/10 p-2 text-slate-300"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mx-6 mt-2 h-[3px] bg-[repeating-linear-gradient(90deg,rgba(148,163,184,0.25)_0_12px,transparent_12px_16px)]" />
      </div>
    </header>
  )
}
