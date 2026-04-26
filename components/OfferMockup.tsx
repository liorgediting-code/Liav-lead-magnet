export default function OfferMockup() {
  return (
    <div className="relative mx-auto mb-6 w-48 select-none" aria-hidden="true">
      {/* Shadow pages behind main cover */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-navy/60 border border-white/10" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-navy/80 border border-white/10" />

      {/* Main cover */}
      <div className="relative rounded-xl bg-navy border border-primary/30 shadow-2xl shadow-black/50 px-5 py-6 flex flex-col gap-3">
        {/* Badge */}
        <div className="inline-flex self-start items-center gap-1.5 bg-primary/20 border border-primary/30 rounded-full px-2.5 py-0.5">
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-[9px] font-bold text-primary tracking-widest uppercase">Free</span>
        </div>

        {/* Title */}
        <p className="text-white font-black text-sm leading-snug">
          תבנית המכירה
          <br />
          ב-8 שלבים
        </p>

        {/* Step list preview */}
        <div className="flex flex-col gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">{n}</span>
              </span>
              <span className="h-1 rounded-full bg-white/15 flex-1" />
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p className="text-[9px] text-primary/60 font-semibold tracking-wider uppercase mt-1">
          liav.co.il
        </p>
      </div>
    </div>
  );
}
