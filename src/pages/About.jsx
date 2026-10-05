import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Rocket,
  Award,
  Trophy,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { timeline } from "../data/content";
import { education, profile } from "../data/profile";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="01 · About"
        title="A mechanical engineer who chose to build software."
        text="I’m a 2026 IIT Gandhinagar graduate who developed a strong software-engineering track alongside Mechanical Engineering. My portfolio reflects that journey: full-stack products, database-backed systems, problem solving, freelance work, an online internship and continuous professional learning."
      />

      <section className="section container about-intro">
        <div className="about-copy">
          <Reveal>
            <span className="eyebrow">Who I am</span>
            <h2>
              I enjoy turning ambiguous ideas into clear, working systems.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              My engineering background taught me to think in terms of systems,
              constraints and measurable outcomes. I carried that mindset into
              software, where I learned to design interfaces, model data, build
              APIs, implement authentication and deploy applications that people
              can actually use.
            </p>
            <p>
              I’m especially interested in full-stack development because it
              lets me understand the whole product rather than only one layer. I
              like moving from a problem statement to an architecture, then to a
              clean interface and finally to a deployed product.
            </p>
          </Reveal>
          <div className="icon-row">
            <span>
              <Code2 /> Full-stack builder
            </span>
            <span>
              <Rocket /> Product focused
            </span>
            <span>
              <GraduationCap /> IIT Gandhinagar
            </span>
            <span>
              <Target /> Continuous learner
            </span>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="profile-card">
            <div className="profile-image-frame">
              <img
                src={profile.profileImage}
                alt="Nandkishor Kumar Pandit"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="profile-placeholder">
                <strong>NK</strong>
                <span>FULL-STACK DEVELOPER · IIT GANDHINAGAR</span>
              </div>
              <div className="profile-scanline" />
            </div>
            <div className="profile-meta">
              <div>
                <span className="eyebrow">Profile</span>
                <h3>{profile.name}</h3>
                <p>{profile.role} · IIT Gandhinagar Graduate</p>
              </div>
              <span className="profile-badge">2026 · IITGN</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Education & achievements</span>
              <h2>The foundations behind the builder.</h2>
            </div>
            <p className="section-head-copy">
              Academic performance, scholarship recognition and a long-running
              interest in solving difficult problems shaped the way I approach
              software today.
            </p>
          </div>

          <div className="education-grid">
            <Reveal>
              <EducationCard item={education.degree} featured />
            </Reveal>
            <Reveal delay={0.05}>
              <EducationCard item={education.class12} />
            </Reveal>
            <Reveal delay={0.1}>
              <EducationCard item={education.class10} />
            </Reveal>

            <Reveal delay={0.15}>
              <article className="education-card premium-card dakshana-card">
                <div className="education-card-top">
                  <div className="education-icon">
                    <Award />
                  </div>
                  <span className="eyebrow">Scholarship recognition</span>
                </div>
                <div className="education-card-main">
                  <h3>{education.dakshana.title}</h3>
                  <p>{education.dakshana.organization}</p>
                </div>
                <div className="education-card-footer">
                  <span>JDST 2021</span>
                  <p>{education.dakshana.detail}</p>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="entrance-strip">
            {education.entrance.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Journey</span>
            <h2>From campus to products.</h2>
          </div>
          <p className="section-head-copy">
            Each stage added another layer: engineering fundamentals,
            programming, full-stack development, deployment and now professional
            experience.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container cta-panel">
        <span className="eyebrow">Next</span>
        <h2>See how that foundation turns into real software.</h2>
        <p>
          Explore the projects where I applied frontend engineering, backend
          architecture, databases, authentication and deployment together.
        </p>
        <Link className="btn btn-primary" to="/projects">
          Explore projects <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}

function EducationCard({ item, featured = false }) {
  return (
    <article
      className={`education-card premium-card ${featured ? "education-featured" : ""}`}
    >
      <div className="education-card-top">
        <div className="education-icon">
          <GraduationCap />
        </div>
        <span className="eyebrow">{item.period}</span>
      </div>
      <div className="education-card-main">
        <h3>{item.title}</h3>
        <p>{item.institution}</p>
      </div>
      <div className="education-score-row">
        <span>Academic result</span>
        <strong>{item.score}</strong>
      </div>
    </article>
  );
}
