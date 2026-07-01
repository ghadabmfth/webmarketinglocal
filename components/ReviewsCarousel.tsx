"use client";

import { useEffect, useRef } from "react";
import { GoogleGIcon } from "./Icons";
import { REVIEWS, type Review } from "@/lib/site-data";

export default function ReviewsCarousel({
  reviews = REVIEWS,
  score = "4,9",
  scoreLabel = "Basé sur 38 avis Google",
}: {
  reviews?: Review[];
  score?: string;
  scoreLabel?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const dotsWrap = dotsRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    if (!viewport || !dotsWrap) return;
    const track = viewport.querySelector<HTMLElement>(".rev-track");
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;

    function step() {
      if (cards.length < 2) return cards[0].offsetWidth;
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }
    function perView() {
      return Math.max(1, Math.round(viewport!.clientWidth / step()));
    }
    function maxIndex() {
      return Math.max(0, cards.length - perView());
    }
    function currentIndex() {
      return Math.round(viewport!.scrollLeft / step());
    }

    function buildDots() {
      dotsWrap!.innerHTML = "";
      const pages = maxIndex() + 1;
      for (let i = 0; i < pages; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Aller à l’avis " + (i + 1));
        b.addEventListener("click", () => goTo(i));
        dotsWrap!.appendChild(b);
      }
    }

    let animRAF: number | null = null;
    function animateScroll(target: number) {
      if (animRAF) cancelAnimationFrame(animRAF);
      const start = viewport!.scrollLeft;
      const dist = target - start;
      if (Math.abs(dist) < 1) {
        viewport!.scrollLeft = target;
        return;
      }
      const dur = 420;
      const t0 = performance.now();
      function frame(now: number) {
        const p = Math.min(1, (now - t0) / dur);
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        viewport!.scrollLeft = start + dist * e;
        if (p < 1) animRAF = requestAnimationFrame(frame);
        else update();
      }
      animRAF = requestAnimationFrame(frame);
    }

    function goTo(i: number) {
      const idx = Math.max(0, Math.min(i, maxIndex()));
      animateScroll(idx * step());
    }

    function update() {
      const idx = currentIndex();
      const mi = maxIndex();
      Array.from(dotsWrap!.children).forEach((d, i) => {
        d.classList.toggle("active", i === Math.min(idx, mi));
      });
      if (prev) prev.disabled = idx <= 0;
      if (next) next.disabled = idx >= mi;
    }

    function onPrev() {
      goTo(currentIndex() - 1);
    }
    function onNext() {
      goTo(currentIndex() + 1);
    }
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);

    let scrollRAF: number | null = null;
    function onScroll() {
      if (scrollRAF) cancelAnimationFrame(scrollRAF);
      scrollRAF = requestAnimationFrame(update);
    }
    viewport.addEventListener("scroll", onScroll, { passive: true });

    let timer: ReturnType<typeof setInterval> | null = null;
    const DELAY = 5000;
    function play() {
      stop();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(() => {
        const idx = currentIndex();
        goTo(idx >= maxIndex() ? 0 : idx + 1);
      }, DELAY);
    }
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    const carousel = viewport.closest(".reviews-carousel");
    const hoverEls = [carousel, dotsWrap].filter(Boolean) as Element[];
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", play);
      el.addEventListener("touchstart", stop, { passive: true } as AddEventListenerOptions);
      el.addEventListener("focusin", stop);
    });

    buildDots();
    update();
    play();

    let rt: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(rt);
      rt = setTimeout(() => {
        buildDots();
        update();
      }, 180);
    }
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      viewport.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", stop);
        el.removeEventListener("mouseleave", play);
        el.removeEventListener("focusin", stop);
      });
    };
  }, [reviews]);

  return (
    <div className="reviews">
      <div className="reviews-head reveal">
        <div className="reviews-score">
          <div className="rs-num" style={{ fontFamily: "var(--font-display)" }}>{score}</div>
          <div className="rs-meta">
            <div className="rs-stars" aria-label={`${score} sur 5`}>★★★★★</div>
            <div className="rs-sub">{scoreLabel}</div>
          </div>
        </div>
        <a className="reviews-brand" href="https://www.google.com/search?q=Marketing+Local+agence+web" target="_blank" rel="noopener">
          <GoogleGIcon size={26} />
          <span>
            Avis <b>Google</b>
          </span>
        </a>
      </div>

      <div className="reviews-carousel reveal d1">
        <button className="rev-nav rev-prev" type="button" aria-label="Avis précédents" ref={prevRef}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="rev-viewport" ref={viewportRef}>
          <div className="rev-track">
            {reviews.map((r) => (
              <article className="review-card" key={r.name}>
                <header className="rev-top">
                  <span className="rev-av" style={{ background: r.avatarColor }}>{r.initials}</span>
                  <span className="rev-id">
                    <b>{r.name}</b>
                    <span>{r.when}</span>
                  </span>
                  <GoogleGIcon size={20} className="rev-g" />
                </header>
                <div className="rev-stars" aria-label="5 sur 5">★★★★★</div>
                <p className="rev-text">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
        <button className="rev-nav rev-next" type="button" aria-label="Avis suivants" ref={nextRef}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="rev-dots" ref={dotsRef} role="tablist" aria-label="Sélection des avis" />
    </div>
  );
}
