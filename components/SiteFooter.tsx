import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80 text-sm">
      <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-white/70">
          © {year} ליאב כהן · כל הזכויות שמורות
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/privacy" className="hover:text-white underline-offset-4 hover:underline">
            מדיניות פרטיות
          </Link>
          <Link href="/terms" className="hover:text-white underline-offset-4 hover:underline">
            תנאי שימוש
          </Link>
          <Link href="/accessibility" className="hover:text-white underline-offset-4 hover:underline">
            הצהרת נגישות
          </Link>
          <a
            href="mailto:liavcohen798@gmail.com"
            className="hover:text-white underline-offset-4 hover:underline"
          >
            צור קשר
          </a>
        </nav>
      </div>
    </footer>
  );
}
