import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionTitle number="02" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60"
          >
            <h3 className="font-mono text-emerald-400">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-slate-600"
                >
                  <item.icon
                    className="text-lg transition group-hover:scale-125"
                    style={{ color: item.color }}
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}