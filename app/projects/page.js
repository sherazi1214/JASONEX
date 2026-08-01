import ProjectCard from "./components/ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="bg-ink py-20 px-4 sm:px-6 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-display text-white leading-tight">
            Case Studies that speak <br /> for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}