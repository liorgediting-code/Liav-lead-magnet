"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, PlayCircle } from "lucide-react";

const videos = [
  {
    name: "המלצת לקוח",
    videoId: "1Y9PickBDC4",
  },
  {
    name: "המלצת לקוח",
    videoId: "4dGhUrmYuuA",
  },
  {
    name: "המלצת לקוח",
    videoId: "cNVG_vn6E6U",
  },
  {
    name: "המלצת לקוח",
    videoId: "yWRl0O4quuU",
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = videos.length;
  const item = videos[current];

  function goTo(index: number) {
    setCurrent(index);
    setPlaying(false);
  }

  return (
    <div>
      {/* Portrait video container — Shorts are 9:16 */}
      <div className="mx-auto max-w-[300px]">
        <div className="relative aspect-[9/16] bg-navy rounded-2xl overflow-hidden border border-border shadow-sm">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              title={`המלצת וידאו — ${item.name}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e1410] to-[#0e0b08]" />
              <button
                onClick={() => setPlaying(true)}
                aria-label={`הפעל סרטון ${current + 1}`}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              >
                <PlayCircle
                  className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200 drop-shadow-lg"
                  aria-hidden="true"
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          onClick={() => goTo((current - 1 + total) % total)}
          aria-label="סרטון קודם"
          className="cursor-pointer w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="בחר סרטון">
          {videos.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`סרטון ${i + 1}`}
              onClick={() => goTo(i)}
              className={`cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary ${
                i === current
                  ? "w-5 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo((current + 1) % total)}
          aria-label="סרטון הבא"
          className="cursor-pointer w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
