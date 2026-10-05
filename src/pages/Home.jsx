import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Scene3D from "../components/Scene3D";
import AutoSlider from "../components/AutoSlider";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export default function Home() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRole((r) => (r + 1) % profile.secondaryRoles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero hero-cinematic">
        <div className="hero-noise" />
        <div className="hero-gridlines" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="status-dot" />
              Open to software roles, internships & freelance projects
            </motion.div>

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              NANDKISHOR KUMAR PANDIT · IIT GANDHINAGAR
            </motion.p>

            <motion.div
              className="role-display"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <span>Building as</span>
              <strong key={role}>{profile.secondaryRoles[role]}</strong>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.8 }}
            >
              I turn complex ideas into <span>useful software.</span>
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.64 }}
            >
              I’m Nandkishor, a 2026 IIT Gandhinagar graduate and full-stack
              developer who enjoys building complete products — from the first
              database schema and API to the final responsive interface and
              deployment.
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74 }}
            >
              My work combines React, Node.js, Express, MongoDB, MySQL, REST
              APIs, authentication and cloud deployment. Alongside client and
              personal projects, I’m currently working through an online
              internship and continuing professional certifications, while
              sharpening my problem-solving skills through DSA.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.86 }}
            >
              <Link className="btn btn-primary" to="/projects">
                Explore my work <ArrowUpRight size={17} />
              </Link>
              <Link className="btn btn-ghost" to="/about">
                More about me
              </Link>
            </motion.div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <span className="hero-email">{profile.email}</span>
            </div>

            <div className="hero-proof">
              <div>
                <strong>319+</strong>
                <span>LeetCode</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Selected builds</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>IITGN graduate</span>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-visual-clean">
            
            <div className="scene-frame">
              <Scene3D />
            </div>

            <div className="visual-label visual-label-bottom">
              <span>UI</span>
              <i />
              <span>API</span>
              <i />
              <span>DATA</span>
              <i />
              <span>CLOUD</span>
            </div>
          </div>
        </div>

        <a href="#featured" className="scroll-cue">
          <ArrowDown size={15} /> Scroll to explore
        </a>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {[
            "REACT",
            "NODE.JS",
            "EXPRESS",
            "MONGODB",
            "MYSQL",
            "AWS",
            "DOCKER",
            "C++",
            "REST APIs",
            "JWT",
          ].map((x, i) => (
            <span key={i}>
              {x} <b>✦</b>
            </span>
          ))}
          {[
            "REACT",
            "NODE.JS",
            "EXPRESS",
            "MONGODB",
            "MYSQL",
            "AWS",
            "DOCKER",
            "C++",
            "REST APIs",
            "JWT",
          ].map((x, i) => (
            <span key={`b${i}`}>
              {x} <b>✦</b>
            </span>
          ))}
        </div>
      </section>

      <section id="featured" className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Products I’ve built.</h2>
          </div>
          <Link className="text-link" to="/projects">
            View all projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <AutoSlider
          items={projects.slice(0, 4)}
          render={(project, i) => (
            <ProjectCard project={project} index={i} featured />
          )}
        />
      </section>

      <section className="section section-dark">
        <div className="container process-section">
          <Reveal>
            <span className="eyebrow">How I work</span>
            <h2>From problem definition to a production-ready product.</h2>
          </Reveal>
          <div className="process-grid">
            {[
              [
                "01",
                "Understand",
                "Clarify the problem, users and desired outcome.",
              ],
              [
                "02",
                "Architect",
                "Choose the stack, data model and API structure.",
              ],
              [
                "03",
                "Build",
                "Create responsive UI, backend logic and integrations.",
              ],
              ["04", "Ship", "Test, deploy, measure and keep improving."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.07}>
                <div className="process-card">
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container stats-section">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="section container cta-panel cta-red">
        <span className="eyebrow">Let’s build</span>
        <h2>Have a product idea, a feature or a problem to solve?</h2>
        <p>
          I’m available for software development opportunities and selected
          freelance work.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/contact">
            Let’s talk <ArrowUpRight size={17} />
          </Link>
          <Link className="btn btn-ghost" to="/freelance">
            Freelance services
          </Link>
        </div>
      </section>
    </>
  );
}
