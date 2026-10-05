import React from "react";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";

const groupNotes = {
  Frontend:
    "The layer I use to turn product flows into clear, responsive interfaces.",
  Backend:
    "APIs, validation and authentication that keep the interface dependable.",
  Databases:
    "Choosing the data model and queries around how the product actually behaves.",
  "Cloud & DevOps":
    "Getting applications deployed, reproducible and maintainable after launch.",
  Programming:
    "The languages I reach for across product work, automation and engineering problems.",
  "AI & CS":
    "Computer-science fundamentals that sharpen architecture and day-to-day decisions.",
};

export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="03 · Skills"
        title="A practical stack, not a logo wall."
        text="My practical engineering toolkit spans the complete product lifecycle: responsive interfaces, APIs and application logic, databases, authentication, deployment and the problem-solving fundamentals that support them."
      />
      <section className="section container skill-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <article className="skill-card">
              <div className="skill-card-heading">
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="skill-card-count">
                  {group.items.length} tools
                </span>
              </div>
              <h3>{group.title}</h3>
              <p className="skill-card-note">{groupNotes[group.title]}</p>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="section section-dark">
        <div className="container split-feature">
          <div>
            <span className="eyebrow">Engineering</span>
            <h2>
              Build the interface. Own the API. Understand the data — and know
              how the pieces behave together.
            </h2>
          </div>
          <a
            className="btn btn-ghost"
            href="https://github.com/nandkishor008"
            target="_blank"
            rel="noreferrer"
          >
            See code <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
