"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ARTICLES, ARTICLE_CATS } from "@/lib/articles-data";

const CATEGORIES: { val: string; label: string }[] = [
  { val: "all", label: "Tous les articles" },
  { val: "strategie", label: "Stratégie" },
  { val: "site-web", label: "Site Web" },
  { val: "visibilite", label: "Visibilité" },
  { val: "acquisition", label: "Acquisition" },
  { val: "experience-utilisateur", label: "Expérience utilisateur" },
  { val: "publicite", label: "Publicité" },
  { val: "ia", label: "IA" },
  { val: "securite", label: "Sécurité" },
];

export default function BlogFilterGrid() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ val: string; text: string }[]>([]);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggleCat(val: string, text: string) {
    if (val === "all") {
      setSelected([]);
      setOpen(false);
      return;
    }
    setSelected((prev) => {
      const i = prev.findIndex((s) => s.val === val);
      if (i === -1) return [...prev, { val, text }];
      return prev.filter((s) => s.val !== val);
    });
  }

  function removeChip(val: string) {
    setSelected((prev) => prev.filter((s) => s.val !== val));
  }

  const isVisible = (slug: string) => {
    if (selected.length === 0) return true;
    const cats = ARTICLE_CATS[slug] || [];
    return selected.some((s) => cats.includes(s.val));
  };

  return (
    <>
      <div className="rea-filterbar reveal" data-s="rs-18">
        <span className="rf-eyebrow" data-s="rs-19">Filtrer par</span>
        <div className="rf-drops" data-s="rs-20">
          <div className={`rf-drop${open ? " open" : ""}${selected.length > 0 ? " rf-chosen" : ""}`} data-dim="cat" ref={dropRef}>
            <button
              className="rf-trigger"
              type="button"
              aria-expanded={open}
              data-s="rs-21"
              onClick={() => setOpen((o) => !o)}
            >
              Thématiques{" "}
              <span className="rf-chev" data-s="rs-22">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" data-s="rs-23" />
                </svg>
              </span>
            </button>
            <div className="rf-menu" role="listbox">
              {CATEGORIES.map((c) => {
                const isActive = c.val === "all" ? selected.length === 0 : selected.some((s) => s.val === c.val);
                return (
                  <button
                    key={c.val}
                    className={`rf-opt${isActive ? " is-active" : ""}`}
                    data-val={c.val}
                    role="option"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => toggleCat(c.val, c.label)}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rf-selected" id="rfSelected" hidden={selected.length === 0}>
          {selected.map((s) => (
            <span className="rf-chip" data-val={s.val} key={s.val}>
              {s.text}
              <button
                type="button"
                className="rf-chip-x"
                aria-label={`Retirer le filtre ${s.text}`}
                onClick={() => removeChip(s.val)}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="blog-grid" id="blogGrid">
        {ARTICLES.map((article) => (
          <article
            className={`blog-card reveal${isVisible(article.slug) ? "" : " blog-hidden"}`}
            data-cats={(ARTICLE_CATS[article.slug] || []).join(" ")}
            key={article.slug}
          >
            <Link className="blog-media" href={`/ressources/${article.slug}`} aria-label={`Lire : ${article.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="blog-slot" src={article.cover} alt="Visuel de l'article" loading="lazy" />
              <span className="blog-cat">{article.categoryBadge}</span>
            </Link>
            <div className="blog-body">
              <div className="blog-tags">
                {article.tags.map((tag) => (
                  <span className="blog-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <h3 className="blog-title">{article.title}</h3>
              <Link className="blog-link" href={`/ressources/${article.slug}`}>
                Lire l&apos;article{" "}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
