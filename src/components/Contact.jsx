import React from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-slate-400">Let’s collaborate on your next mission.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 md:grid-cols-3">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20" placeholder="Your name" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20" placeholder="Email" />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/30 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600/40 transition"><Send size={16}/> Send</button>
        </form>
        <a href="mailto:stunt@example.com" className="mt-4 inline-flex items-center gap-2 text-slate-300 hover:text-white transition"><Mail size={16}/> stunt@example.com</a>
      </div>
    </section>
  )
}
