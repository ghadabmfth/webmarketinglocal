import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import { BtnArrow } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";
import { ARTICLES, getArticleBySlug, type ArticleBlock } from "@/lib/articles-data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Marketing Local`,
    description: article.description,
  };
}

function ArticleSection({ block, i }: { block: ArticleBlock; i: number }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="article-lead" key={i}>
          {block.text}
        </p>
      );
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const p = article.dataPrefix;
  // Most articles number hero=14, hero-container=15, body=16, callout-link=17 (see
  // Article.dataOffset doc comment in lib/articles-data.ts). "ia-web-design" wraps its
  // <h1> text in an extra data-s span, shifting body/callout numbers by +1.
  const off = article.dataOffset ?? 0;

  return (
    <>
      <BodyAttrs bodyClass={article.bodyClass} dataS={`${p}-1`} />

      {/* ============ ARTICLE HERO ============ */}
      <section className="contact-hero hero--rea article-hero" data-s={`${p}-14`}>
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container article-container" data-s={`${p}-15`}>
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <Link href="/ressources">Ressources</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">{article.breadcrumb}</span>
          </nav>
          <div className="article-tags">
            {article.tags.map((tag) => (
              <span className="blog-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <h1 className="article-title">
            {article.titleDataS ? (
              <span data-s={article.titleDataS}>{article.title}</span>
            ) : (
              article.title
            )}
          </h1>
          <div className="article-meta">
            <span className="am-author">
              <span className="am-avatar am-avatar--mark">
                <LogoMark />
              </span>{" "}
              Par l&apos;équipe Marketing Local
            </span>
            <span className="am-dot">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* ============ ARTICLE BODY ============ */}
      <article className="section article-body" data-s={`${p}-${16 + off}`}>
        <div className="container article-container">
          <div className="article-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="article-cover-slot"
              src={article.cover}
              alt={article.coverAlt}
              loading="lazy"
            />
          </div>

          {article.sections.map((block, i) => (
            <ArticleSection block={block} i={i} key={i} />
          ))}

          <div className="article-callout">
            <h3>{article.calloutTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.calloutBody }} />
            <Link href="/contact" className="btn" data-s={`${p}-${17 + off}`}>
              Discutons de votre projet <BtnArrow />
            </Link>
          </div>

          <Link className="article-back" href="/ressources">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>{" "}
            Retour aux ressources
          </Link>
        </div>
      </article>

      <CtaBand
        heading="Et si votre projet était le prochain ?"
        body="Des solutions adaptées aux TPE et aux PME. On regarde ensemble votre visibilité actuelle et ce qu'on peut en faire."
      />
    </>
  );
}
