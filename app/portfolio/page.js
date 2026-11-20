import ProjectCard from "./components/ProjectCard";
import { projects } from "./portfolioData";

export const metadata = { title: "Portfolio | JASONEX" };

export default function PortfolioPage() {
  return (
    <main className="bg-ink py-20 px-4 sm:px-6 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-14">
          <p className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-white leading-tight">
            Case Studies that speak <br /> for themselves
          </h1>
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
