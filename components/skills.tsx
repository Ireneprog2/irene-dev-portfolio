import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    title: "HTML5",
    icon: Code2,
    description: "Semantic, accessible structure that creates a strong foundation for clean digital experiences.",
  },
  {
    title: "CSS3",
    icon: Palette,
    description: "Modern styling, layout precision, responsive design, and polished visual systems.",
  },
  {
    title: "JavaScript",
    icon: Rocket,
    description: "Interactive behavior, logic, UI patterns, and smooth front-end functionality.",
  },
  {
    title: "React",
    icon: Code2,
    description: "Reusable components, state-driven interfaces, and modern user-centric application experiences.",
  },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-label">Skills</span>
        <h2 className="section-title">My technical arsenal</h2>
      </div>

      <div className="skills-grid">
        {skills.map(({ title, description, icon: Icon }) => (
          <article key={title} className="skill-card">
            <div className="icon-wrap">
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
