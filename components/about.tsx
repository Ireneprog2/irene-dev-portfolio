import Link from "next/link";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-label">About</span>
        <h2 className="section-title">A little about me</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m Irene, a frontend developer focused on building websites that feel modern, engaging, and easy to use. I enjoy transforming ideas into polished digital experiences that balance clarity, creativity, and performance.
          </p>
          <p>
            My work centers on crafting responsive interfaces, refining visual systems, and bringing design ideas to life with clean, thoughtful code. I enjoy building with HTML, CSS, JavaScript, and React while staying curious about the technologies shaping the web.
          </p>
          <p>
            I&apos;m driven by the challenge of solving problems through technology and collaborating with businesses, founders, and creative minds to create experiences that feel both premium and human.
          </p>

          <div className="mt-7">
            <Link href="#contact" className="primary-btn w-fit">
              Let&apos;s Build Together
              <Sparkles size={16} />
            </Link>
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-orb" aria-hidden="true" />
          <div className="visual-ring" aria-hidden="true" />
          <span className="visual-mini one">Frontend</span>
          <span className="visual-mini two">Creative</span>
          <span className="visual-mini three">Responsive</span>
        </div>
      </div>
    </section>
  );
}
