import React from "react";

const previewData = {
  splitdash: {
    title: "SplitDash",
    metric: "Equal · exact · percentage",
    label: "Core model",
    cards: ["Groups", "Expenses", "Balances"],
    cardValues: ["Create", "Split", "Settle"],
    chart: [28, 52, 42, 70, 56, 82, 68, 91, 74, 95],
  },
  "trading-platform": {
    title: "Trading",
    metric: "Watchlists + orders",
    label: "Core scope",
    cards: ["Watchlist", "Holdings", "Positions"],
    cardValues: ["Track", "Review", "Manage"],
    chart: [35, 43, 38, 58, 51, 70, 62, 78, 72, 88],
  },
  wanderlust: {
    title: "Wanderlust",
    metric: "Listings + uploads",
    label: "Core scope",
    cards: ["Listings", "Location", "Reviews"],
    cardValues: ["Create", "Discover", "Review"],
    chart: [32, 45, 40, 62, 55, 68, 58, 75, 69, 83],
  },
  gateguard: {
    title: "GateGuard",
    metric: "Visitors + vehicles",
    label: "Core scope",
    cards: ["Visitors", "Vehicles", "Alerts"],
    cardValues: ["Register", "Track", "Log"],
    chart: [20, 35, 29, 52, 48, 63, 56, 73, 67, 86],
  },
  "sessions-marketplace": {
    title: "Sessions",
    metric: "Creator + learner roles",
    label: "Core scope",
    cards: ["Learners", "Creators", "Bookings"],
    cardValues: ["Create", "Book", "Manage"],
    chart: [26, 36, 46, 42, 57, 64, 60, 75, 79, 91],
  },
  "engineering-projects": {
    title: "Engineering Lab",
    metric: "Prototypes + design",
    label: "Core scope",
    cards: ["Design", "Prototype", "Systems"],
    cardValues: ["Explore", "Prototype", "Build"],
    chart: [30, 48, 45, 61, 55, 72, 66, 78, 70, 90],
  },
};

export default function ProjectPreview({ project }) {
  const data = previewData[project.slug] || previewData.splitdash;

  return (
    <div className="product-preview">
      <div className="preview-topbar">
        <div className="preview-dots">
          <i />
          <i />
          <i />
        </div>
        <span>{data.title} · project preview</span>
        <b>CASE STUDY</b>
      </div>
      <div className="preview-layout">
        <aside className="preview-sidebar">
          <strong>{data.title.slice(0, 2).toUpperCase()}</strong>
          <span className="active">Overview</span>
          <span>{data.cards[0]}</span>
          <span>{data.cards[1]}</span>
          <span>{data.cards[2]}</span>
        </aside>
        <div className="preview-main">
          <div className="preview-heading">
            <span>Product direction</span>
            <small>{project.category.split(" · ")[0]}</small>
          </div>
          <div className="preview-stats">
            <div>
              <small>{data.label}</small>
              <strong>{data.metric}</strong>
            </div>
            <div>
              <small>Primary layer</small>
              <strong>{project.stack[0]}</strong>
            </div>
            <div>
              <small>Core flow</small>
              <strong>{data.cards[0]}</strong>
            </div>
          </div>
          <div className="preview-chart">
            <div className="chart-grid" />
            <svg viewBox="0 0 500 130" preserveAspectRatio="none">
              <defs>
                <linearGradient
                  id={`g-${project.slug}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#ff3f4f" />
                  <stop offset="100%" stopColor="#ffb09f" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke={`url(#g-${project.slug})`}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={data.chart
                  .map((v, i) => `${i * 55},${120 - v}`)
                  .join(" ")}
              />
            </svg>
          </div>
          <div className="preview-bottom">
            {data.cards.map((x, i) => (
              <div key={x}>
                <small>{x}</small>
                <b>{data.cardValues[i]}</b>
                <span>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
