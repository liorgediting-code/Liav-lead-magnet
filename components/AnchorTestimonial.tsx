export default function AnchorTestimonial() {
  return (
    <div className="max-w-sm mx-auto px-5 pt-6 pb-2">
      <figure className="flex flex-col items-center gap-3 text-center">
        <div className="w-8 h-0.5 bg-primary/40 rounded-full" />
        <blockquote className="text-sm text-foreground/80 leading-relaxed font-medium">
          &ldquo;אני מיישם את זה על לידים חדשים — כל ליד שנכנס, טיק טק שיחת טלפון&rdquo;
        </blockquote>
        <figcaption className="text-xs text-muted-foreground">
          לקוח של ליאב
        </figcaption>
      </figure>
    </div>
  );
}
