"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global page behaviours ported from app.js: scroll-reveal, smooth scroll for
 * in-page anchors, FAQ accordion and the métiers accordion. Re-attached on
 * every route change since client-side navigation doesn't reload the DOM.
 */
export default function AppEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io!.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
    }

    const failsafe = setTimeout(() => {
      if (!document.querySelector(".reveal.in")) {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      }
    }, 1600);

    function smoothTo(target: string) {
      const el = document.querySelector(target);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    const anchorClickHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const handler = (ev: Event) => {
        const href = a.getAttribute("href") || "";
        if (href.length > 1) {
          ev.preventDefault();
          smoothTo(href);
        }
      };
      a.addEventListener("click", handler);
      anchorClickHandlers.push([a, handler]);
    });

    const scrollBtnHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll("[data-scroll]").forEach((b) => {
      const handler = () => smoothTo(b.getAttribute("data-scroll") || "");
      b.addEventListener("click", handler);
      scrollBtnHandlers.push([b, handler]);
    });

    // Init: items marked .open in markup (e.g. FAQ page's first question)
    // start expanded — give them a concrete max-height so the CSS transition
    // has something to animate from/to.
    document.querySelectorAll(".faq-item.open .faq-a").forEach((el) => {
      const ans = el as HTMLElement;
      ans.style.maxHeight = ans.scrollHeight + "px";
    });

    const faqHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll(".faq-q").forEach((btn) => {
      const handler = () => {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const ans = item.querySelector<HTMLElement>(".faq-a");
        const open = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((it) => {
          it.classList.remove("open");
          const a = it.querySelector<HTMLElement>(".faq-a");
          if (a) a.style.maxHeight = "0px";
        });
        if (!open && ans) {
          item.classList.add("open");
          ans.style.maxHeight = ans.scrollHeight + "px";
        }
      };
      btn.addEventListener("click", handler);
      faqHandlers.push([btn, handler]);
    });

    // Métiers accordion (single-open, smooth height)
    const metierItems = document.querySelectorAll<HTMLDetailsElement>(".metiers-acc .metier");
    const metierHandlers: Array<[Element, EventListener]> = [];
    function bodyOf(d: HTMLDetailsElement) {
      return d.querySelector<HTMLElement>(".metier-body");
    }
    function openItem(d: HTMLDetailsElement) {
      const b = bodyOf(d);
      if (!b) return;
      d.setAttribute("open", "");
      d.classList.add("is-open");
      b.style.maxHeight = b.scrollHeight + "px";
    }
    function closeItem(d: HTMLDetailsElement) {
      const b = bodyOf(d);
      if (!b) return;
      b.style.maxHeight = b.scrollHeight + "px";
      requestAnimationFrame(() => {
        b.style.maxHeight = "0px";
      });
      d.classList.remove("is-open");
      const done = () => {
        if (!d.classList.contains("is-open")) d.removeAttribute("open");
        b.removeEventListener("transitionend", done);
      };
      b.addEventListener("transitionend", done);
    }
    metierItems.forEach((d) => {
      const b = bodyOf(d);
      if (d.hasAttribute("open")) {
        d.classList.add("is-open");
        if (b) b.style.maxHeight = b.scrollHeight + "px";
      } else if (b) {
        b.style.maxHeight = "0px";
      }
      const sum = d.querySelector("summary");
      if (!sum) return;
      const handler = (e: Event) => {
        e.preventDefault();
        const isOpen = d.classList.contains("is-open");
        metierItems.forEach((other) => {
          if (other !== d && other.classList.contains("is-open")) closeItem(other);
        });
        if (isOpen) closeItem(d);
        else openItem(d);
      };
      sum.addEventListener("click", handler);
      metierHandlers.push([sum, handler]);
    });
    function onResize() {
      metierItems.forEach((d) => {
        if (d.classList.contains("is-open")) {
          const b = bodyOf(d);
          if (b) b.style.maxHeight = b.scrollHeight + "px";
        }
      });
    }
    window.addEventListener("resize", onResize);

    return () => {
      io?.disconnect();
      clearTimeout(failsafe);
      anchorClickHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      scrollBtnHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      faqHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      metierHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return null;
}
