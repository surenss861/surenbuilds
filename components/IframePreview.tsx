"use client";

import { useState } from "react";

export default function IframePreview({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black/20 border border-white/10">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-sm text-white/60 z-10">
          Loading live preview…
        </div>
      )}
      <iframe
        src={src}
        onLoad={() => setLoaded(true)}
        className="w-full h-[720px] border-0"
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        title="Live preview"
      />
      <div className="absolute bottom-0 right-0 p-3 bg-black/40 backdrop-blur-sm">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline opacity-70 hover:opacity-100 transition-opacity"
        >
          Open site in new tab ↗
        </a>
      </div>
    </div>
  );
}

