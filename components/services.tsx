import { ArrowRight, BrushCleaning, Code2, LayoutTemplate, Sparkles } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Custom websites built for clarity, speed, and a strong digital identity that reflects your vision.",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    description: "Robust front-end implementation with responsive layouts, interactions, and maintainable UI architecture.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsive Website Design",
    description: "Design systems and responsive layouts that look polished and work beautifully on every screen size.",
    icon: Sparkles,
  },
  {
    title: "Website Redesign",
    description: "Refresh existing interfaces with a cleaner structure, modern look, and better user experience.",
    icon: BrushCleaning,
  },
  {
    title: "Interactive Web Interfaces",
    description: "Build engaging, motion-rich interfaces that help brands feel more memorable and premium.",
    icon: Sparkles,
  },
  {
    title: "Landing Page Development",
    description: "Focused landing pages built for marketing clarity, conversion momentum, and creative storytelling.",
    icon: Code2,
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-label">Services</span>
        <h2 className="section-title">What I can build for you</h2>
      </div>

      <div className="services-grid">
        {services.map(({ title, description, icon: Icon }) => (
          <article key={title} className="service-card">
            <div className="icon-wrap">
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact">
              Inquire
              <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
