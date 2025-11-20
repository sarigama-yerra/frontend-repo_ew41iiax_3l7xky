import React from 'react'
import { motion } from 'framer-motion'
import { Code, Globe, Cpu } from 'lucide-react'

const projects = [
  {
    title: 'Mecha Shop',
    desc: 'Headless commerce with server‑driven UI and blazing fast search.',
    icon: <Globe size={18} />,
    tags: ['Next.js', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'Telemetry Core',
    desc: 'Observability stack with traces, metrics, logs and auto‑insights.',
    icon: <Cpu size={18} />,
    tags: ['OpenTelemetry', 'Grafana', 'K8s'],
  },
  {
    title: 'Motion Lab',
    desc: 'Micro‑interactions library with physics‑based animations.',
    icon: <Code size={18} />,
    tags: ['Framer Motion', 'Vite', 'NPM'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="text-sm text-slate-400">Selected builds that balance polish and pragmatism</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition"
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
