import { PlusIcon } from "./Icons";

export type FaqEntry = { q: string; a: string };

/**
 * Renders .faq-item/.faq-q/.faq-a markup. Click-to-expand behaviour is wired
 * globally by AppEffects (ported from app.js) via the .faq-q class, so no
 * client logic lives here — this stays a plain server component.
 */
export default function FaqList({ items, defaultOpenFirst = false }: { items: FaqEntry[]; defaultOpenFirst?: boolean }) {
  return (
    <div className="faq-wrap reveal">
      {items.map((item, i) => (
        <div className={`faq-item${defaultOpenFirst && i === 0 ? " open" : ""}`} key={item.q}>
          <button className="faq-q">
            {item.q} <PlusIcon />
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
