import React from "react";
import { ArrowUpRight, Code2, Terminal, Trophy } from "lucide-react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Coding() {
  return (
    <>
      <PageHeader
        eyebrow="05 · Problem solving"
        title="A sharper way to approach unfamiliar problems."
        text="I use consistent DSA practice to improve how I reason: understand the constraints, find the right model, test the edge cases and explain the trade-offs. The habit supports the same work I do in product code, APIs and data-heavy systems."
      />
      <section className="section container coding-hero">
        <Reveal>
          <div className="coding-number">
            319<span>+</span>
          </div>
          <span className="eyebrow">LeetCode problems solved</span>
          <h2>Primarily in C++.</h2>
          <p>
            Practice across arrays, hash tables, graphs, recursion, dynamic
            programming and other core algorithmic patterns.
          </p>
          <a
            className="btn btn-primary"
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            View problem-solving profile <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <div className="code-art" aria-label="Problem-solving workflow">
          <div className="code-line">
            <span>01</span> <b>understand</b>(constraints);
          </div>
          <div className="code-line">
            <span>02</span> model_the_problem();
          </div>
          <div className="code-line">
            <span>03</span> test_edge_cases();
          </div>
          <div className="code-line">
            <span>04</span> explain_tradeoffs();
          </div>
          <div className="code-line">
            <span>05</span> implement_and_review();
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container icon-cards">
          <Reveal>
            <div>
              <Code2 />
              <h3>Pattern recognition</h3>
              <p>
                Arrays, hash tables, graphs, recursion and dynamic programming
                are the patterns I return to most often.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <Terminal />
              <h3>Implementation</h3>
              <p>
                C++ gives me a precise environment for thinking about data
                structures, complexity and edge cases.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <Trophy />
              <h3>Product impact</h3>
              <p>
                The goal is not a puzzle score alone: it is clearer API logic,
                better data decisions and more reliable software.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
