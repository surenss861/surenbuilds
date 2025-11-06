"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const root = document.body;
    const dots: HTMLDivElement[] = [];

    // Create 10 trail dots
    for (let i = 0; i < 10; i++) {
      const d = document.createElement("div");
      d.className =
        "pointer-events-none fixed size-1.5 rounded-full bg-[rgba(27,115,255,.35)]";
      root.appendChild(d);
      dots.push(d);
    }

    const pos = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));

    const onMove = (e: MouseEvent) => {
      pos[0] = { x: e.clientX, y: e.clientY };
      for (let i = 1; i < 10; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.25;
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.25;
        dots[i].style.transform = `translate(${pos[i].x}px,${pos[i].y}px)`;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return null;
}
