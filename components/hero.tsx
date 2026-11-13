import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/Ireneprog2", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:hello@irene.dev", label: "Email", icon: Mail },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">Hello, welcome to my digital universe</span>

          <h1 className="hero-title">
            I&apos;m Irene. I build <span className="gradient-text">digital experiences.</span>
          </h1>

          <p className="hero-subtitle">
            I&apos;m a frontend developer passionate about turning creative ideas into beautiful, interactive, and responsive websites.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="primary-btn">
              Explore My Work
              <ArrowRight size={16} />
            </Link>
            <Link href="#contact" className="secondary-btn">
              Let&apos;s Collaborate
            </Link>
          </div>

          <div className="social-row">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
                <Icon size={16} />
              </Link>
            ))}
          </div>

          <div className="availability">
            <span className="availability-dot" />
            Available for freelance projects
          </div>
        </motion.div>

        <motion.div
          className="cosmic-scene"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <span className="orbit-ring one" aria-hidden="true" />
          <span className="orbit-ring two" aria-hidden="true" />
          <span className="moon one" aria-hidden="true" />
          <span className="moon two" aria-hidden="true" />

          <div className="cosmic-planet" aria-hidden="true" />

          <span className="floating-tag one">React</span>
          <span className="floating-tag two">UI Systems</span>
          <span className="floating-tag three">CSS / JS</span>
        </motion.div>
      </div>
    </section>
  );
}
