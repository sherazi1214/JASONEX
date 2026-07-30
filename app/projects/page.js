import ProjectCard from "./components/ProjectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="bg-ink py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-display text-white">
          Check Our Works With <br /> Real Results
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}