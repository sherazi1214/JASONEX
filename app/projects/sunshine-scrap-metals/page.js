import CaseStudyLayout from "../components/CaseStudyLayout";
import { projects } from "../projectsData";
import { notFound } from "next/navigation";

export default function Page() {
  const project = projects.find((p) => p.slug === "sunshine-scrap-metals");
  if (!project) return notFound();
  return <CaseStudyLayout project={project} />;
}
