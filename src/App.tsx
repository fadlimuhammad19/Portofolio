import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TimelineSection from './components/TimelineSection'
import Contact from './components/Contact'
import Reveal from './components/Reveal'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'
import { profile } from './data/profile'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-200">
      <ScrollProgress />
      <CursorGlow />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Reveal><Marquee /></Reveal>
        <Reveal><Stats /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal>
          <TimelineSection id="education" number="04" title="Education" category="pendidikan" />
        </Reveal>
        <Reveal>
          <TimelineSection id="experience" number="05" title="Experience" category="pengalaman" />
        </Reveal>
        <Reveal>
          <TimelineSection id="organization" number="06" title="Organization" category="organisasi" />
        </Reveal>
        <Reveal><Contact /></Reveal>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
      <BackToTop />
    </div>
  )
}