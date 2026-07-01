"use client";

import { useEffect } from "react";

export default function BodyAttrs({ bodyClass, dataS }: { bodyClass: string; dataS: string }) {
  useEffect(() => {
    document.body.className = bodyClass;
    document.body.setAttribute("data-s", dataS);
  }, [bodyClass, dataS]);
  return null;
}
