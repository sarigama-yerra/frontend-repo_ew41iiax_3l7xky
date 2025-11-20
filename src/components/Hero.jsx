import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useTransform(my, [-1, 1], [8, -8])
  const rotateY = useTransform(mx, [-1, 1], [-10, 10])
  const translateX = useTransform(mx, [-1, 1], [-12, 12])
  const translateY = useTransform(my, [-1, 1], [-8, 8])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x * 2 - 1)
    my.set(y * 2 - 1)
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Spline 3D background (interactive) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Mecha HUD overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070d]/60 via-[#05070d]/20 to-[#05070d]/80" />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(#0b1220_0,#0b1220_1px,transparent_1px),linear-gradient(90deg,#0b1220_0,#0b1220_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.18),transparent),radial-gradient(600px_circle_at_80%_30%,rgba(217,70,239,0.14),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24 pointer-events-none">
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl will-change-transform"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-blue-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM: GUNDAM UI ONLINE
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            STUNT
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              Full‑Stack Operator
            </span>
          </h1>
          <div className="mt-6 grid gap-3 text-slate-300">
            <p>Initializing mission parameters. Optimizing render pipeline. Calibrating Minovsky field…</p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="h-[1px] w-10 bg-blue-400/60" /> RX‑FRAME v1.2 • STATUS: GREEN
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto rounded-xl border border-blue-500/30 bg-blue-600/30 px-5 py-2.5 text-sm font-medium text-blue-50 hover:bg-blue-600/40 transition">Enter Hangar</a>
            <a href="#contact" className="pointer-events-auto rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition">Open Comms</a>
          </div>
        </motion.div>
      </div>

      {/* bottom HUD accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.35)_30%,rgba(217,70,239,0.35)_70%,transparent)] blur-md" />
    </section>
  )
}
