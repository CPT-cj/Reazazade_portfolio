"use client";

import { useEffect, useState } from "react";

const copy = {
  fa: {
    eyebrow: "MOHAMMAD AMIN REZAZADE · PORTFOLIO",
    title: "یک مسیر در حال شکل‌گیری است",
    description:
      "این پورتفولیو هنوز در حال توسعه و تکمیل است؛ با این حال، می‌توانید نسخه فعلی آن را مشاهده کنید.",
    button: "مشاهده نسخه فعلی سایت",
    status: "در حال توسعه",
    note: "نسخه فعلی در دسترس است",
  },
  en: {
    eyebrow: "MOHAMMAD AMIN REZAZADE · PORTFOLIO",
    title: "Something is taking shape.",
    description:
      "This portfolio is currently under development. You can still explore the current version.",
    button: "Explore Current Website",
    status: "IN DEVELOPMENT",
    note: "Current version available",
  },
};

export function PortfolioExperience({ locale, header, footer, children }) {
  const [phase, setPhase] = useState("intro");
  const isFa = locale === "fa";
  const text = copy[isFa ? "fa" : "en"];

  useEffect(() => {
    if (phase === "entered") {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  const enterPortfolio = () => {
    if (phase !== "intro") return;
    setPhase("exiting");
    window.setTimeout(() => setPhase("entered"), 680);
  };

  if (phase === "entered") {
    return (
      <>
        <div className="tech-atmosphere" aria-hidden="true" />
        {header}
        <main id="main">{children}</main>
        {footer}
      </>
    );
  }

  return (
    <div className="intro-stage" dir={isFa ? "rtl" : "ltr"}>
      <section
        className={`intro-screen${phase === "exiting" ? " intro-screen--exit" : ""}`}
        aria-labelledby="intro-title"
        aria-describedby="intro-description"
      >
        <div className="intro-orb intro-orb--one" aria-hidden="true" />
        <div className="intro-orb intro-orb--two" aria-hidden="true" />
        <div className="intro-grid" aria-hidden="true" />

        <div className="intro-topline">
          <span className="intro-mark" aria-hidden="true">
            MA
          </span>
          <span>{text.eyebrow}</span>
        </div>

        <div className="intro-content">
          <div className="intro-status intro-reveal intro-reveal--1">
            <span className="intro-status-dot" />
            <span>{text.status}</span>
          </div>

          <h1
            id="intro-title"
            className="intro-title intro-reveal intro-reveal--2"
          >
            {text.title}
          </h1>

          <p
            id="intro-description"
            className="intro-description intro-reveal intro-reveal--3"
          >
            {text.description}
          </p>

          <button
            type="button"
            className="intro-button intro-reveal intro-reveal--4"
            onClick={enterPortfolio}
            disabled={phase !== "intro"}
          >
            <span>{text.button}</span>
            <span className="intro-button-arrow" aria-hidden="true">
              {isFa ? "←" : "→"}
            </span>
          </button>
        </div>

        <div className="intro-bottomline intro-reveal intro-reveal--5">
          <span>{text.note}</span>
          <span className="intro-progress" aria-hidden="true">
            <span />
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </section>
    </div>
  );
}
