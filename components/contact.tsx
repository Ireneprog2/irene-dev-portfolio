"use client";

import { ArrowRight, Github, Linkedin, Mail, Send, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const contactList = [
  { label: "Email", value: "hello@irene.dev", icon: Mail },
  { label: "GitHub", value: "github.com/Ireneprog2", icon: Github },
  { label: "LinkedIn", value: "linkedin.com", icon: Linkedin },
  { label: "WhatsApp", value: "Configurable later", icon: MessageCircle },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Please enter a valid email.";
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    else if (formData.message.trim().length < 15) nextErrors.message = "Please add a little more detail.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      setSuccess("");
      return;
    }

    setSuccess("Thanks! Your message is ready to be connected to a future email service.");
    setErrors({});
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s create something amazing.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Have an idea, project, or opportunity?</h3>
          <p className="contact-copy">
            I&apos;d love to hear about it. Let&apos;s turn your vision into something real, thoughtful, and beautifully crafted.
          </p>

          <div className="contact-list">
            {contactList.map(({ label, value, icon: Icon }) => (
              <div key={label} className="contact-item">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
                  <Icon size={16} />
                </span>
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.14em] text-slate-400">{label}</div>
                  <div className="mt-1 text-sm text-slate-200">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder="Your name"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                placeholder="you@example.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                value={formData.subject}
                onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                placeholder="Project inquiry"
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder="Tell me about your idea..."
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {success && <span className="form-success">{success}</span>}

            <button type="submit" className="primary-btn w-fit">
              Send Message
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
