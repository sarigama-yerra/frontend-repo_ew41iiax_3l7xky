import React from 'react'
import { motion } from 'framer-motion'
import { Cog, Shield, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'RX‑FRAME UI',
    desc: 'Component kit inspired by mobile suit cockpits. Fast, modular, battle‑tested.',
    icon: <Cog size={18} />,
    tags: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'A.E.U.G. Telemetry',
    desc: 'Unified traces/metrics/logs with auto‑anomaly detection and mission replays.',
    icon: <Shield size={18} />,
    tags: ['OpenTelemetry', 'Grafana', 'K8s'],
  },
  {
    title: 'MINOVSKY CLOUD',
    desc: 'Edge‑ready cloud toolkit for low‑latency deployments and secure channels.',
    icon: <Rocket size={18} />,
    tags: ['FastAPI', 'Edge', 'MongoDB'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Hangar</h2>
          <p className="text-sm text-slate-400">Deployed units and experimental frames</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-blue-400/30 hover:bg-blue-500/5 transition"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {p.icon}
                <span>{p.title}</span>
              </div>
              <p className="text-slate-300">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-md border border-white/10 bg-slate-900/40 px-2 py-1 text-[11px] text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
