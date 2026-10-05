import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { services } from "../data/content";
import { profile } from "../data/profile";

export default function Freelance() {
  return (
    <>
      <PageHeader
        eyebrow="06 · Freelance"
        title="Practical software, built around the real problem."
        text="I help turn a product idea, an unfinished application or a stubborn bug into a clear next release. The work can be a focused React feature, a backend workflow or a complete full-stack product; the standard stays the same: clear scope, honest communication and code you can keep working with."
      />
      <section className="section container services-grid">
        {services.map(([n, t, d], i) => (
          <Reveal key={n} delay={i * 0.05}>
            <article className="service">
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <CheckCircle2 size={18} />
            </article>
          </Reveal>
        ))}
      </section>
      <section className="section container freelance-process">
        <div>
          <span className="eyebrow">How we work</span>
          <h2>A small process keeps the work clear.</h2>
        </div>
        <div className="process-steps">
          <div>
            <span>01</span>
            <strong>Clarify</strong>
            <p>Define the user, the problem and the first useful outcome.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Build</strong>
            <p>
              Choose the simplest sound architecture and deliver in visible
              steps.
            </p>
          </div>
          <div>
            <span>03</span>
            <strong>Refine</strong>
            <p>
              Test the important flows, fix the rough edges and prepare the
              handoff.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container freelance-cta">
          <div>
            <span className="eyebrow">Hire / collaborate</span>
            <h2>Tell me what you’re trying to build.</h2>
            <p>
              I can help with a new product, an existing application, a feature,
              a bug or a backend/API workflow.
            </p>
          </div>
          <div className="freelance-links">
            <a
              className="btn btn-primary"
              href={profile.fiverr}
              target="_blank"
              rel="noreferrer"
            >
              Work with me on Fiverr <ArrowUpRight size={17} />
            </a>
            <a
              className="btn btn-ghost"
              href={profile.upwork}
              target="_blank"
              rel="noreferrer"
            >
              Open Upwork <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              Email me directly <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
