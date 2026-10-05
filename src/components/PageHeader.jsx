import React from "react";
import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="page-header container">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </Reveal>
    </section>
  );
}