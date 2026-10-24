import SectionTitle from './SectionTitle'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionTitle number="01" title="About" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-4 text-slate-400">
          {profile.about.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 font-mono text-sm shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-slate-500">about.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 leading-7 text-slate-300">
{`const me = {
  nama: '${profile.name}',
  kuliah: 'Teknik Komputer',
  fokus: ['Web', 'IoT'],
  sedangBelajar: 'Dart',
  ngopi: true,
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}