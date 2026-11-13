import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="flex items-center gap-3">
          <div className="brand-mark">
            <Mail size={14} className="text-cyan-300" />
          </div>
          <div className="footer-brand">Irene Dev</div>
        </div>

        <div className="footer-links">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <Link href="https://github.com/Ireneprog2" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
            <Github size={15} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
            <Linkedin size={15} />
          </Link>
          <Link href="#home" aria-label="Back to top" className="social-link">
            <ArrowUp size={15} />
          </Link>
        </div>
      </div>

      <div className="footer-inner mt-4">
        <div className="footer-meta">Turning ideas into beautiful digital experiences.</div>
        <div className="footer-meta">© {year} Irene Dev. All rights reserved.</div>
      </div>
    </footer>
  );
}
