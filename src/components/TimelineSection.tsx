import SectionTitle from './SectionTitle'
import { journey } from '../data/journey'
import type { MilestoneCategory } from '../types/milestone'

type Props = {
  id: string
  number: string
  title: string
  category: MilestoneCategory
}

export default function TimelineSection({ id, number, title, category }: Props) {
  const items = journey.filter((m) => m.category === category)

  if (items.length === 0) return null

  return (
    <section id={id} className="py-16">
      <SectionTitle number={number} title={title} />
      <ol className="relative ml-2 border-l border-slate-800">
        {items.map((item) => (
          <li key={item.id} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 ring-4 ring-emerald-400/20" />
            <p className="font-mono text-xs text-emerald-400">{item.period}</p>
           <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
{item.position && (
  <p className="mt-0.5 text-sm font-semibold text-emerald-300">
    {item.position}
  </p>
)}
<p className="text-sm text-slate-500">{item.place}</p>
            {item.description && (
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                {item.description}
              </p>
            )}

            {item.details && (
              <ul className="mt-3 max-w-xl space-y-2 text-sm text-slate-400">
                {item.details.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}