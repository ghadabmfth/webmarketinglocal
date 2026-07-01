"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { BtnArrow } from "./Icons";

const EMAIL_RE = /.+@.+\..+/;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function clearError(name: string) {
    setInvalid((prev) => (prev[name] ? { ...prev, [name]: false } : prev));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"));
    const nextInvalid: Record<string, boolean> = {};
    let ok = true;
    const badFields: Array<HTMLInputElement | HTMLTextAreaElement> = [];
    for (const el of fields) {
      if (!el.hasAttribute("required")) continue;
      const valid = el.value.trim() !== "" && (el.type !== "email" || EMAIL_RE.test(el.value));
      nextInvalid[el.name] = !valid;
      if (!valid) {
        ok = false;
        badFields.push(el);
      }
    }
    setInvalid(nextInvalid);
    if (!ok) {
      badFields[0]?.focus();
      return;
    }
    // No backend — simulate a successful submission.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="cf-success" id="contactSuccess">
        <span className="cf-success-ic">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h3>Merci, c&apos;est envoyé !</h3>
        <p>On a bien reçu votre demande. Un de nos experts vous recontacte sous 48h ouvrées.</p>
        <Link href="/" className="btn cf-back">
          Retour à l&apos;accueil <BtnArrow />
        </Link>
      </div>
    );
  }

  return (
    <form className="contact-form" id="contactForm" noValidate ref={formRef} onSubmit={onSubmit}>
      <h2 className="cf-title">Demandez votre diagnostic gratuit</h2>
      <p className="cf-lead">Remplissez ce formulaire, on revient vers vous rapidement.</p>
      <div className="cf-row">
        <label className={`cf-field${invalid.prenom ? " cf-invalid" : ""}`}>
          <span className="cf-label">Prénom<span className="req">*</span></span>
          <input type="text" name="prenom" required placeholder="Votre prénom" onInput={() => clearError("prenom")} />
        </label>
        <label className={`cf-field${invalid.nom ? " cf-invalid" : ""}`}>
          <span className="cf-label">Nom<span className="req">*</span></span>
          <input type="text" name="nom" required placeholder="Votre nom" onInput={() => clearError("nom")} />
        </label>
      </div>
      <label className="cf-field">
        <span className="cf-label">Entreprise</span>
        <input type="text" name="entreprise" placeholder="Nom de votre entreprise" />
      </label>
      <div className="cf-row">
        <label className={`cf-field${invalid.email ? " cf-invalid" : ""}`}>
          <span className="cf-label">Email<span className="req">*</span></span>
          <input type="email" name="email" required placeholder="vous@exemple.fr" onInput={() => clearError("email")} />
        </label>
        <label className="cf-field">
          <span className="cf-label">Téléphone</span>
          <input type="tel" name="telephone" placeholder="06 12 34 56 78" />
        </label>
      </div>
      <label className="cf-field">
        <span className="cf-label">Votre message</span>
        <textarea name="message" rows={4} placeholder="Parlez-nous de votre activité et de votre besoin…" />
      </label>
      <button type="submit" className="btn cf-submit">
        Envoyer ma demande <BtnArrow />
      </button>
      <p className="cf-fineprint">En envoyant ce formulaire, vous acceptez d&apos;être recontacté par Marketing Local. Vos données ne sont jamais revendues.</p>
    </form>
  );
}
