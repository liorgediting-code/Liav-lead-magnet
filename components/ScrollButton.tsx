"use client";

export default function ScrollButton({
  children,
  target = "signup",
  className = "",
}: {
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      className={className}
    >
      {children}
    </button>
  );
}
