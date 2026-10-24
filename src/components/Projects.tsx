import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionTitle number="03" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}