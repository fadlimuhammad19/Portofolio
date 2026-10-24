const items = [
  'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue', 'Node.js',
  'Express', 'Laravel', 'MySQL', 'Arduino', 'ESP32', 'C++', 'Git', 'Dart',
]

export default function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee font-mono text-sm text-slate-400 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap pr-10">
            {t}
            <span className="text-emerald-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}