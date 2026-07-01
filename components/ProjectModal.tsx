"use client";

import { useEffect, useRef } from "react";
import { BtnArrow } from "@/components/Icons";
import type { RealisationProject } from "@/lib/realisations-data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: RealisationProject | null;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<Element | null>(null);

  useEffect(() => {
    if (project) {
      lastFocusRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      const el = lastFocusRef.current;
      if (el && "focus" in el && typeof (el as HTMLElement).focus === "function") {
        (el as HTMLElement).focus();
      }
    }
  }, [project]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && project) onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  return (
    <div
      id="reaModal"
      className={`rea-modal${project ? " open" : ""}`}
      aria-hidden={project ? "false" : "true"}
      role="dialog"
      aria-modal="true"
      aria-label="Détail du projet"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget || target.classList.contains("rm-overlay") || target.closest(".rm-close")) {
          onClose();
        }
      }}
    >
      <div className="rm-overlay" />
      <div className="rm-box">
        {project && (
          <>
            <div className="rm-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.img} alt={`Aperçu du site ${project.client}`} />
            </div>
            <div className="rm-body">
              <span className="rm-type">{project.type}</span>
              <h2 className="rm-title">{project.client}</h2>
              <p className="rm-desc">{project.desc}</p>
              <div className="rm-grid">
                <div className="rm-block">
                  <span className="rm-label">Client</span>
                  <div className="rm-vals">
                    <b>{project.client}</b>
                  </div>
                </div>
                <div className="rm-block">
                  <span className="rm-label">Secteurs d&apos;activité</span>
                  <div className="rm-vals">
                    {project.sectors.map((s) => (
                      <span className="rm-chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="rm-block">
                  <span className="rm-label">Expertises</span>
                  <div className="rm-vals">
                    {project.expertises.map((e) => (
                      <span className="rm-chip" key={e}>{e}</span>
                    ))}
                  </div>
                </div>
                <div className="rm-block">
                  <span className="rm-label">Technologies</span>
                  <div className="rm-vals">
                    {project.technologies.map((t) => (
                      <span className="rm-chip" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a className="btn rm-cta" href={project.url} target="_blank" rel="noopener">
                Voir le nouveau site <BtnArrow />
              </a>
            </div>
          </>
        )}
      </div>
      <button className="rm-close" type="button" aria-label="Fermer" ref={closeBtnRef} onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </div>
  );
}
