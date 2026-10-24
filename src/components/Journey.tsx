import SectionTitle from './SectionTitle'
import { journey } from '../data/journey'

export default function Journey() {
  return (
    <section id="journey" className="py-20">
      <SectionTitle number="04" title="Journey" />
      <ol className="relative ml-2 border-l border-slate-800">
        {journey.map((item) => (
          <li key={item.id} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 ring-4 ring-emerald-400/20" />
            <p className="font-mono text-xs text-emerald-400">{item.period}</p>
            <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.place}</p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}