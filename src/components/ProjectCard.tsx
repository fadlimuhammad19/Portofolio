import type { MouseEvent } from 'react'
import type { Project } from '../types/project'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={handleMove}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-400/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(300px circle at var(--mx) var(--my), rgba(52, 211, 153, 0.12), transparent 70%)',
        }}
      />

      <h3 className="text-lg font-bold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800 px-3 py-1 font-mono text-xs text-emerald-300"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-auto flex gap-4 pt-5 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </div>
  )
}