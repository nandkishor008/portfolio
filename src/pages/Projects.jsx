import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category.split(" · ")[1] || p.category)),
  ];
  const shown =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));
  return (
    <>
      <PageHeader
        eyebrow="02 · Projects"
        title="Selected work, built from the ground up."
        text="A selection of products and systems I designed and built across frontend, backend, databases and deployment. Each case study explains the problem, architecture, technology choices, implementation and the engineering decisions behind the result."
      />
      <section className="section container">
        <div className="filter-row" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "filter active" : "filter"}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="project-results">
          Showing {shown.length} of {projects.length} projects
        </p>
        <div className="project-grid">
          {shown.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </section>
      <section className="section section-dark">
        <div className="container split-feature">
          <div>
            <span className="eyebrow">Open source</span>
            <h2>More experiments live on GitHub.</h2>
          </div>
          <a
            className="btn btn-primary"
            href="https://github.com/nandkishor008"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
