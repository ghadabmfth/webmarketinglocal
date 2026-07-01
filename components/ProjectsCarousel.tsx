"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/site-data";

/**
 * The homepage's condensed "Nos réalisations" horizontal carousel — ported
 * from projects.js (arrow-tween scroll + IntersectionObserver reveal).
 */
export default function ProjectsCarousel({ projects = PROJECTS }: { projects?: Project[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    if (!vp || !track) return;
    let anim: number | null = null;

    function step() {
      const card = track!.querySelector<HTMLElement>(".proj-card");
      if (!card) return 380;
      const gapStr = getComputedStyle(track!).columnGap || getComputedStyle(track!).gap;
      const gap = parseFloat(gapStr) || 24;
      return card.getBoundingClientRect().width + gap;
    }

    function tweenTo(target: number) {
      const max = vp!.scrollWidth - vp!.clientWidth;
      target = Math.max(0, Math.min(max, target));
      const start = vp!.scrollLeft;
      const dist = target - start;
      if (Math.abs(dist) < 1) {
        vp!.scrollLeft = target;
        update();
        return;
      }
      let t0: number | null = null;
      const dur = 420;
      if (anim) cancelAnimationFrame(anim);
      function frame(ts: number) {
        if (t0 === null) t0 = ts;
        const p = Math.min(1, (ts - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        vp!.scrollLeft = start + dist * e;
        update();
        if (p < 1) anim = requestAnimationFrame(frame);
      }
      anim = requestAnimationFrame(frame);
    }

    function go(dir: number) {
      tweenTo(vp!.scrollLeft + dir * step());
    }

    function update() {
      const max = vp!.scrollWidth - vp!.clientWidth - 4;
      if (prev) prev.disabled = vp!.scrollLeft <= 12;
      if (next) next.disabled = vp!.scrollLeft >= max;
    }

    function onPrev() {
      go(-1);
    }
    function onNext() {
      go(1);
    }
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    vp.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    const cards = track.querySelectorAll(".proj-card");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            e.target.classList.toggle("in-view", e.isIntersecting && e.intersectionRatio > 0.55);
          });
        },
        { root: vp, threshold: [0, 0.55, 1] }
      );
      cards.forEach((c) => io!.observe(c));
    } else {
      cards.forEach((c) => c.classList.add("in-view"));
    }

    return () => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      vp.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      io?.disconnect();
    };
  }, [projects]);

  return (
    <section className="section projects" id="projets" data-screen-label="Réalisations" style={{ backgroundColor: "#fff", paddingTop: 100 }}>
      <span className="proj-bubble" aria-hidden="true" />
      <div className="container">
        <div className="proj-head reveal">
          <div>
            <span className="eyebrow">Nos réalisations</span>
            <h2 className="proj-title" style={{ color: "rgb(13, 27, 46)", fontSize: 45 }}>Nos derniers projets web et marketing digital</h2>
          </div>
          <div className="proj-nav">
            <button className="proj-arrow proj-prev" type="button" aria-label="Projets précédents" ref={prevRef}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="20" y1="12" x2="5" y2="12" />
                <polyline points="11 6 5 12 11 18" />
              </svg>
            </button>
            <button className="proj-arrow proj-next" type="button" aria-label="Projets suivants" ref={nextRef}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="proj-viewport" ref={viewportRef}>
          <div className="proj-track" ref={trackRef}>
            {projects.map((p) => (
              <article className="proj-card" key={p.href}>
                <a className="proj-media" href={p.href} target="_blank" rel="noopener" aria-label={`Voir le projet ${p.client}`}>
                  <div className="proj-shotwrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="proj-shot" src={p.img} alt={p.alt} loading="lazy" />
                  </div>
                </a>
                <div className="proj-caption">
                  <div className="proj-caption-txt">
                    <h3>{p.title}</h3>
                    <span>{p.client}</span>
                  </div>
                  <a className="proj-go" href={p.href} target="_blank" rel="noopener" aria-label={`Ouvrir le site ${p.client}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="proj-foot reveal">
          <Link className="btn proj-more" href="/nos-realisations">
            Voir toutes nos réalisations{" "}
            <span className="btn-arrow" aria-hidden="true">
              <svg className="ar ar-diag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="8 7 17 7 17 16" />
              </svg>
              <svg className="ar ar-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
