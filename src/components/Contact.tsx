import SectionTitle from './SectionTitle'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <SectionTitle number="04" title="Contact" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center backdrop-blur sm:p-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

        <h3 className="relative text-3xl font-extrabold text-white sm:text-4xl">
          Ayo bikin sesuatu bareng
        </h3>
        <p className="relative mx-auto mt-4 max-w-md text-slate-400">
          Punya ide proyek, tawaran kolaborasi, atau sekadar ingin menyapa?
          Kotak masukku selalu terbuka.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="relative mt-8 inline-block rounded-lg bg-emerald-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300 hover:shadow-emerald-400/40"
        >
          {profile.email}
        </a>

        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-5 py-2 font-mono text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}