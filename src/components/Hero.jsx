import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

/*
  Hero section updated:
  - Removed 3D Spline scene
  - Added 2D "Gundam"-styled animated backdrop using CSS layers (blueprint grid, scanlines, parallax plates)
  - Optional video overlay: set VITE_HERO_VIDEO to a .mp4/.webm for a true 2D animation loop
  - Color scheme: black/white/grey with minimal red/blue accents
*/

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

  const heroVideo = import.meta.env.VITE_HERO_VIDEO // Optional external animation video URL

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* 2D animated background */}
      <div className="absolute inset-0">
        {/* Optional: external 2D animation video overlay */}
        {heroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}

        {/* Moving blueprint grid (neutral) */}
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(#0b0f19_1px,transparent_1px),linear-gradient(90deg,#0b0f19_1px,transparent_1px)] [background-size:48px_48px] animate-[gridShift_30s_linear_infinite]" />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_3px)]" />

        {/* Parallax plates (grey with tiny red/blue glow) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-gradient-to-br from-red-500/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute -right-24 top-44 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="absolute left-[10%] top-[20%] h-28 w-28 rotate-6 rounded-md border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
          <div className="absolute right-[12%] top-[30%] h-20 w-40 -rotate-3 rounded-md border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
        </div>

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/30 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-24 pointer-events-none">
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl will-change-transform"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" /> SYSTEM: GUNDAM UI ONLINE
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            STUNT
            <span className="block bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Full‑Stack Operator
            </span>
          </h1>
          <div className="mt-6 grid gap-3 text-slate-300">
            <p>Initializing mission parameters. Minovsky field nominal. Panels locked.</p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="h-[1px] w-10 bg-slate-400/60" /> RX‑FRAME v1.2 • STATUS: <span className="text-green-300">GREEN</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/[0.07] transition">
              Enter Hangar
            </a>
            <a href="#contact" className="pointer-events-auto rounded-xl border border-red-500/30 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-red-500/10 transition">
              Open Comms
            </a>
          </div>
        </motion.div>
      </div>

      {/* bottom accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.35)_30%,rgba(59,130,246,0.28)_70%,transparent)] blur-md" />

      <style>{`
        @keyframes gridShift { to { background-position: 1200px 1200px; } }
      `}</style>
    </section>
  )
}
