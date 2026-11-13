import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Cosmic Portfolio Concept",
    category: "UI Design / Frontend",
    description:
      "A premium single-page portfolio concept exploring immersive gradients, motion, and a futuristic visual identity for a creative brand.",
    stack: ["React", "CSS", "Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Launchpad Landing Page",
    category: "Landing Page",
    description:
      "A high-converting startup landing page focused on clarity, messaging, and polished conversion moments across devices.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Brand Studio Experience",
    category: "Web Experience",
    description:
      "A product storytelling website designed to highlight a brand’s personality while combining elegant structure and memorable motion.",
    stack: ["React", "Tailwind", "UI Design"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected creations</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-media" aria-hidden="true" />
            <div className="project-body">
              <span className="project-tag">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <Link href={project.liveUrl} className="link-btn" aria-label={`Live demo for ${project.name}`}>
                  Live Demo
                  <ArrowUpRight size={15} />
                </Link>
                <Link href={project.repoUrl} className="link-btn" aria-label={`GitHub for ${project.name}`}>
                  <Github size={15} />
                  Code
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
