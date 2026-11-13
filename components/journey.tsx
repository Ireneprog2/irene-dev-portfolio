import { Compass, NotebookText } from "lucide-react";

export function Journey() {
  return (
    <section className="section" id="journey">
      <div className="section-header">
        <span className="section-label">Journey</span>
        <h2 className="section-title">My journey</h2>
      </div>

      <div className="journey-grid">
        <div className="journey-card">
          <h3>Creative learning path</h3>
          <p>
            I&apos;m building a foundation in frontend design and development, growing through thoughtful practice, modern tooling, and a focus on creating digital experiences that balance aesthetics with usability.
          </p>
        </div>

        <div className="empty-panel">
          <div className="empty-icon">
            <NotebookText size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">A thoughtful space for future milestones</h3>
            <p>
              Education, certifications, achievements, and professional experience can be added here as the journey grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
