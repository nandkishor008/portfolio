import React from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Layers3,
  Server,
  Database,
  ShieldCheck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import ProjectPreview from "../components/ProjectPreview";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section container">
        <h1>Project not found.</h1>
        <Link className="text-link" to="/projects">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className={`detail-hero detail-hero--${project.accent}`}>
        <div className="container">
          <Link className="back-link" to="/projects">
            <ArrowLeft size={16} /> All projects
          </Link>
          <span className="eyebrow">
            {project.number} · {project.category}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {project.title}
          </motion.h1>
          <p>{project.tagline}</p>
          <div className="detail-actions">
            <a
              className="btn btn-primary"
              href={project.live === "#" ? project.github : project.live}
              target="_blank"
              rel="noreferrer"
            >
              {project.live === "#" ? "View on GitHub" : "View live demo"}{" "}
              <ArrowUpRight size={17} />
            </a>
            <a
              className="btn btn-ghost"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <Reveal>
          <div className="detail-product-frame">
            <div className="detail-browser-bar">
              <span />
              <span />
              <span />
              <b>{project.title.toLowerCase().replaceAll(" ", "-")}.app</b>
            </div>
            <ProjectPreview project={project} />
          </div>
        </Reveal>

        <div className="detail-columns">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <p className="large-copy">{project.longDescription}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Technology</span>
            <div className="tag-row tag-row-large">
              {project.stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="architecture-panel">
            <div className="section-head">
              <div>
                <span className="eyebrow">System thinking</span>
                <h2>How the product fits together.</h2>
              </div>
            </div>
            <div className="architecture-flow">
              <Arch
                icon={<Layers3 />}
                title="Interface"
                text="Responsive React experience"
              />
              <div className="flow-line" />
              <Arch
                icon={<Server />}
                title="API"
                text="Application & business logic"
              />
              <div className="flow-line" />
              <Arch
                icon={<Database />}
                title="Data"
                text="Structured persistent storage"
              />
              <div className="flow-line" />
              <Arch
                icon={<ShieldCheck />}
                title="Security"
                text="Authentication & validation"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="feature-list">
            <span className="eyebrow">Key features</span>
            {project.features.map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <strong>{x}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Arch({ icon, title, text }) {
  return (
    <div className="arch-node">
      {icon}
      <span>{title}</span>
      <small>{text}</small>
    </div>
  );
}
