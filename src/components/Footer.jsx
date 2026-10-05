import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <span className="eyebrow">Let’s build</span>
          <h2>Ideas deserve to become products.</h2>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/freelance">Freelance</Link>
          <Link to="/contact">Contact</Link>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built with React.</span>
      </div>
    </footer>
  );
}