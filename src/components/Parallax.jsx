import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-10 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <motion.div style={{ y: y3 }} className="pointer-events-none absolute -bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300">
              Full‑stack engineer blending aesthetics and architecture. I build performant frontends, robust APIs, and cloud‑native systems with a calm, deliberate approach.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">React, Next.js, Vite, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">FastAPI, Node, MongoDB, PostgreSQL</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">AWS, Docker, CI/CD, Observability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
