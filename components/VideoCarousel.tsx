"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, PlayCircle } from "lucide-react";

// ──────────────────────────────────────────────────────────────────
// הוסף כאן את פרטי הסרטונים שלך.
// כדי לחבר YouTube: הוסף videoId: "YOUTUBE_VIDEO_ID"
// ──────────────────────────────────────────────────────────────────
const videos = [
  {
    name: "שם הממליץ",
    role: "תפקיד / עיסוק",
    caption: "תיאור קצר של מה הממליץ מספר בסרטון",
    videoId: "", // "dQw4w9WgXcQ" — הוסף YouTube ID כאן
    thumbnailUrl: "", // "/thumbnails/video1.jpg" — או תמונת thumbnail מקומית
  },
  {
    name: "ממליץ שני",
    role: "תפקיד / עיסוק",
    caption: "תיאור קצר של הסרטון השני",
    videoId: "",
    thumbnailUrl: "",
  },
  {
    name: "ממליץ שלישי",
    role: "תפקיד / עיסוק",
    caption: "תיאור קצר של הסרטון השלישי",
    videoId: "",
    thumbnailUrl: "",
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
      {/* Video container */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        {/* 16:9 video area */}
        <div className="relative aspect-video bg-slate-800">
          {item.videoId && playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              title={`המלצת וידאו — ${item.name}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail or gradient placeholder */}
              {item.thumbnailUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.thumbnailUrl}
                  alt={`תמונה ממוזערת — ${item.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
              )}

              {/* Play button overlay */}
              <button
                onClick={() => item.videoId && setPlaying(true)}
                aria-label={`הפעל סרטון של ${item.name}`}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 group cursor-pointer"
              >
                <PlayCircle
                  className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200 drop-shadow-lg"
                  aria-hidden="true"
                />
                {!item.videoId && (
                  <span className="text-xs text-white/40 px-3 py-1 bg-black/30 rounded-full">
                    הוסף videoId להפעלת הסרטון
                  </span>
                )}
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="bg-white px-5 py-4 border-t border-slate-100">
          <p className="text-sm font-bold text-foreground">{item.name}</p>
          <p className="text-xs text-muted-foreground mb-1">{item.role}</p>
          <p className="text-xs text-foreground/60 leading-relaxed">{item.caption}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          onClick={() => goTo((current - 1 + total) % total)}
          aria-label="סרטון קודם"
          className="cursor-pointer w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronRight className="w-5 h-5 text-slate-600" aria-hidden="true" />
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
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo((current + 1) % total)}
          aria-label="סרטון הבא"
          className="cursor-pointer w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronLeft className="w-5 h-5 text-slate-600" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
