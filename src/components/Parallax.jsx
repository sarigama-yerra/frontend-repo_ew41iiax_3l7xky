import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -220])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -320])

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      {/* Mecha blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#60a5fa0d_0,transparent_40%),radial-gradient(circle_at_80%_20%,#f472b60d_0,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#0b1220_0,#0b1220_1px,transparent_1px),linear-gradient(90deg,#0b1220_0,#0b1220_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating energy cores */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-10 left-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <motion.div style={{ y: y3 }} className="pointer-events-none absolute -bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Pilot Profile</h2>
            <p className="mt-4 text-slate-300">
              Full‑stack engineer operating under codename <span className="text-blue-300">STUNT</span>. Specializing in mission‑ready UIs, resilient APIs, and cloud ops. Tuning systems for precision and velocity.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">FRAME: React • Vite • Tailwind • Framer Motion</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">CORE: FastAPI • Node • MongoDB • Postgres</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">SYSTEMS: AWS • Docker • CI/CD • Observability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
