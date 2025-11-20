import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for cyberpunk vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(600px_circle_at_80%_30%,rgba(217,70,239,0.15),transparent)]"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" /> Gundam‑themed Portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            STUNT
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              Full‑Stack Developer
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-slate-300">
            I engineer resilient web systems with a taste for mecha aesthetics. Smooth interactions, futuristic visuals, and scalable architectures.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-xl border border-blue-500/30 bg-blue-500/20 px-5 py-2.5 text-sm font-medium text-blue-100 hover:bg-blue-500/30 transition">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
