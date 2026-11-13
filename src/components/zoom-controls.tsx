"use client";

import { useEffect, useState } from "react";

export default function ZoomControls() {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const saved = Number(localStorage.getItem("bn-site-zoom"));
    if (saved >= 80 && saved <= 120) setZoom(saved);
  }, []);

  useEffect(() => {
    document.documentElement.style.zoom = `${zoom}%`;
    localStorage.setItem("bn-site-zoom", String(zoom));
  }, [zoom]);

  return (
    <div className="zoom-controls" aria-label="Website zoom controls">
      <button onClick={() => setZoom(v => Math.min(120, v + 10))} aria-label="Zoom in">+</button>
      <span>{zoom}%</span>
      <button onClick={() => setZoom(v => Math.max(80, v - 10))} aria-label="Zoom out">−</button>
      <button onClick={() => setZoom(100)} aria-label="Reset zoom">↺</button>
    </div>
  );
}
