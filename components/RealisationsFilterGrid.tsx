"use client";

import { useEffect, useRef, useState } from "react";
import { FILTER_DIMENSIONS, REALISATIONS, type FilterDim } from "@/lib/realisations-data";
import ProjectModal from "@/components/ProjectModal";

type FilterState = { exp: string; sector: string; tech: string };

const DIM_ATTR: Record<FilterDim, "cat" | "sector" | "tech"> = {
  exp: "cat",
  sector: "sector",
  tech: "tech",
};

export default function RealisationsFilterGrid() {
  const [state, setState] = useState<FilterState>({ exp: "all", sector: "all", tech: "all" });
  const [openDim, setOpenDim] = useState<FilterDim | null>(null);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && rootRef.current.contains(e.target as Node)) return;
      setOpenDim(null);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function matches(project: (typeof REALISATIONS)[number]) {
    return (Object.keys(state) as FilterDim[]).every((dim) => {
      const val = state[dim];
      if (val === "all") return true;
      const attr = DIM_ATTR[dim];
      const cats = project[attr].split(" ");
      return cats.indexOf(val) !== -1;
    });
  }

  const activeProject = REALISATIONS.find((p) => p.url === activeUrl) ?? null;

  return (
    <>
      <div className="rea-filterbar reveal" ref={rootRef}>
        <span className="rf-eyebrow">Filtrer par</span>
        <div className="rf-drops">
          {(Object.keys(FILTER_DIMENSIONS) as FilterDim[]).map((dim) => {
            const dimDef = FILTER_DIMENSIONS[dim];
            const selected = state[dim];
            const selectedOpt = dimDef.options.find((o) => o.val === selected);
            const isOpen = openDim === dim;
            const isChosen = selected !== "all";
            return (
              <div className={`rf-drop${isOpen ? " open" : ""}${isChosen ? " rf-chosen" : ""}`} data-dim={dim} key={dim}>
                <button
                  className="rf-trigger"
                  type="button"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDim((prev) => (prev === dim ? null : dim));
                  }}
                >
                  {(isChosen ? selectedOpt?.label : dimDef.label) + " "}
                  <span className="rf-chev">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="rf-menu" role="listbox">
                  {dimDef.options.map((opt) => (
                    <button
                      key={opt.val}
                      className={`rf-opt${selected === opt.val ? " is-active" : ""}`}
                      data-val={opt.val}
                      role="option"
                      aria-selected={selected === opt.val}
                      onClick={() => {
                        setState((prev) => ({ ...prev, [dim]: opt.val }));
                        setOpenDim(null);
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rea-grid" id="reaGrid">
        {REALISATIONS.map((project) => {
          const hidden = !matches(project);
          return (
            <article
              className={`rea-card reveal${hidden ? " rea-hidden" : ""}`}
              data-cat={project.cat}
              data-sector={project.sector}
              data-tech={project.tech}
              key={project.url}
              style={{ cursor: "pointer" }}
            >
              <a
                className="proj-media"
                href={project.url}
                target="_blank"
                rel="noopener"
                aria-label={`Voir le projet ${project.client}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveUrl(project.url);
                }}
              >
                <div className="proj-shotwrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="proj-shot" src={project.img} alt={`Aperçu du site ${project.client}`} loading="lazy" />
                </div>
              </a>
              <div className="proj-caption">
                <div className="proj-caption-txt">
                  <h3>{project.title}</h3>
                  <span>{project.client}</span>
                </div>
                <a
                  className="proj-go"
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Ouvrir le site ${project.client}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveUrl(project.url);
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveUrl(null)} />
    </>
  );
}
