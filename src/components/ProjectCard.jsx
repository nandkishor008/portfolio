import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <Reveal delay={index * 0.05}>
      <article
        className={`project-card project-card--${project.accent} ${featured ? "project-card--featured" : ""}`}
      >
        <div className="project-number">{project.number}</div>
        <div className="project-preview-wrap">
          <ProjectPreview project={project} />
          <div className="preview-glow" />
        </div>
        <div className="project-body">
          <div className="project-meta-line">
            <span className="eyebrow">{project.category}</span>
            <span className="project-status">
              <i /> Case study
            </span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-row">
            {project.stack.slice(0, 6).map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <div className="project-actions">
            <Link className="text-link" to={`/projects/${project.slug}`}>
              Case study <ArrowUpRight size={16} />
            </Link>
            <a
              className="project-external"
              href={project.live === "#" ? project.github : project.live}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={15} />{" "}
              {project.live === "#" ? "GitHub" : "Live demo"}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
