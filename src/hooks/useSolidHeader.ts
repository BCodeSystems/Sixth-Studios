"use client";
import { useEffect, useState } from "react";

export function useSolidHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const obs = new IntersectionObserver(([entry]) => {
      setSolid(!entry.isIntersecting);
    });

    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return solid;
}