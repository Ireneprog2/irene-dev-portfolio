import { ArrowRight, Github, Linkedin, Mail, MapPin, Menu, Sparkles, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header" id="home">
      <div className="nav-inner">
        <Link href="#home" className="inline-flex items-center gap-3" aria-label="Irene Dev home">
          <span className="brand-mark">
            <Sparkles size={16} className="text-cyan-300" />
          </span>
          <span className="brand-text text-sm text-white">Irene Dev</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="nav-cta hidden md:inline-flex">
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu-panel">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="nav-cta inline-flex w-fit" onClick={() => setIsOpen(false)}>
              Let&apos;s Talk
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
