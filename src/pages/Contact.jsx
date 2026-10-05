import React, { useState } from "react";
import { ArrowUpRight, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry — ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <>
      <PageHeader
        eyebrow="07 · Contact"
        title="Start with the problem, not the pitch."
        text="For a software opportunity, freelance project, collaboration or technical conversation, send the context that matters: what you are building, who it is for and where you are currently stuck."
      />
      <section className="section container contact-grid">
        <Reveal>
          <div className="contact-copy">
            <span className="eyebrow">Direct line</span>
            <h2>{profile.email}</h2>
            <p>
              I’m open to software-development opportunities and freelance work.
              Email is best for a detailed brief; LinkedIn works well for a
              first conversation.
            </p>
            <button
              className="contact-copy-btn"
              type="button"
              onClick={copyEmail}
            >
              <Copy size={15} />{" "}
              {copied ? "Email copied" : "Copy email address"}
            </button>
            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail /> Email
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={submit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows="7"
                placeholder="What are you building, and what would you like help with?"
              />
            </label>
            <button className="btn btn-primary" type="submit">
              <Send size={17} /> Prepare enquiry
            </button>
            {sent && (
              <small className="form-note">
                Your email app should open with the enquiry prepared. Please
                check it before sending.
              </small>
            )}
          </form>
        </Reveal>
      </section>
      <section className="section container cta-panel">
        <span className="eyebrow">Elsewhere</span>
        <h2>See the work before we talk.</h2>
        <p>
          Browse the projects, code and problem-solving practice behind the
          portfolio.
        </p>
        <div className="link-grid">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            LeetCode <ArrowUpRight size={16} />
          </a>
          <a href={profile.fiverr} target="_blank" rel="noreferrer">
            Fiverr <ArrowUpRight size={16} />
          </a>
          <a href={profile.upwork} target="_blank" rel="noreferrer">
            Upwork <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
