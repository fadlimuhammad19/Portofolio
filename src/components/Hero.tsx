import { profile } from '../data/profile'
import foto from '../assets/pp.jpg'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] flex-col-reverse items-center justify-center gap-12 md:flex-row md:justify-between"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Terbuka untuk kolaborasi
        </span>

        <p className="mt-6 font-mono text-emerald-400">Hi, saya</p>
        <h1 className="mt-2 bg-linear-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
          {profile.name}
        </h1>
        <h2 className="mt-4 h-9 font-mono text-xl text-slate-300 sm:text-2xl">
          <span className="text-slate-500">&gt; </span>
          <Typewriter words={profile.roles} />
        </h2>
        <p className="mt-6 max-w-xl text-slate-400">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-400 px-6 py-2.5 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300 hover:shadow-emerald-400/40"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-2.5 font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Hubungi Saya
          </a>
          <a
            href="/cv.pdf"
            download="CV-Namamu.pdf"
            className="rounded-lg border border-slate-700 px-6 py-2.5 font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="relative animate-float">
        <div className="absolute -inset-3 rounded-full bg-linear-to-tr from-emerald-400 to-cyan-400 opacity-50 blur-2xl" />
        <img
          src={foto}
          alt={`Foto ${profile.name}`}
          className="relative h-64 w-64 rounded-full border-4 border-slate-950 object-cover md:h-80 md:w-80"
        />
      </div>
    </section>
  )
}