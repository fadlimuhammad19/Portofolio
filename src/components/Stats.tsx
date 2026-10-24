import Counter from './Counter'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

const stats = [
  { label: 'Proyek', value: projects.length, suffix: '' },
  {
    label: 'Teknologi',
    value: skillGroups.reduce((total, g) => total + g.items.length, 0),
    suffix: '',
  },
  { label: 'Tahun belajar coding', value: 3, suffix: '+' },
]

export default function Stats() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-3 gap-4 text-center">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur"
          >
            <div className="bg-linear-to-r from-emerald-300 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}