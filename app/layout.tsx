import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Preloader from "@/components/Preloader";
import AppEffects from "@/components/AppEffects";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Marketing Local — Agence web à Nantes | Sites internet & visibilité Google",
  description:
    "Agence web locale à Nantes : création de site internet, référencement local (SEO) et fiche Google gérés pour vous. +120 entreprises accompagnées. Diagnostic gratuit.",
};

const ANIM_INIT_SCRIPT = `
if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('anim');
}
window.addEventListener('load', function () {
  setTimeout(function () {
    if (!document.querySelector('.reveal.in')) {
      var els = document.querySelectorAll('.reveal');
      for (var i = 0; i < els.length; i++) els[i].classList.add('in');
    }
  }, 1600);
});
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="anim-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: ANIM_INIT_SCRIPT }} />
        <Preloader />
        <AppEffects />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
