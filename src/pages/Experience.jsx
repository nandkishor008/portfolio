import React from "react";
import { ArrowUpRight, BriefcaseBusiness, Award, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { achievements } from "../data/content";

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="04 · Experience"
        title="Turning independent work into professional depth."
        text="My experience is growing through an online internship, freelance work and the products I have built from scratch. This is the stage where academic foundations become stronger delivery habits: clearer scope, better debugging and software that can be handed to another person."
      />
      <section className="section container experience-feature">
        <Reveal>
          <div className="experience-status">
            <span className="status-dot" /> CURRENT FOCUS
          </div>
          <span className="eyebrow">Online internship</span>
          <h2>Learning the rhythm of real delivery.</h2>
          <p>
            I am currently working through an online internship while continuing
            to build full-stack products. My focus is on the parts that projects
            rarely teach alone: breaking work into useful increments,
            communicating decisions, debugging methodically and leaving code
            easier to maintain than I found it.
          </p>
          <div
            className="experience-details"
            aria-label="Current professional focus"
          >
            <div>
              <span>01</span>
              <strong>Build</strong>
              <small>Full-stack products from interface to deployment.</small>
            </div>
            <div>
              <span>02</span>
              <strong>Improve</strong>
              <small>Debugging, communication and maintainable delivery.</small>
            </div>
            <div>
              <span>03</span>
              <strong>Grow</strong>
              <small>
                Turning project experience into team-ready practice.
              </small>
            </div>
          </div>
          <div className="icon-row">
            <span>
              <BriefcaseBusiness /> Delivery practice
            </span>
            <span>
              <BookOpen /> Deliberate learning
            </span>
          </div>
        </Reveal>
        <div className="experience-orb">
          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="ring ring-three" />
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Professional development</span>
              <h2>What I am sharpening now.</h2>
            </div>
          </div>
          <div className="cert-grid">
            <Reveal>
              <article className="cert-card">
                <Award />
                <span className="eyebrow">IN PROGRESS</span>
                <h3>Structured learning</h3>
                <p>
                  Professional learning is ongoing alongside project work.
                  Completed credentials will be added here with their issuing
                  body and verification link.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="cert-card">
                <BookOpen />
                <span className="eyebrow">CURRENT FOCUS</span>
                <h3>Sharper engineering habits</h3>
                <p>
                  Current focus: software engineering, full-stack development,
                  DSA and using development tools thoughtfully without losing
                  technical ownership.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section container">
        <span className="eyebrow">Achievements</span>
        <h2>Milestones that shaped the journey.</h2>
        <div className="achievement-grid">
          {achievements.map(([v, t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="achievement">
                <strong>{v}</strong>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
