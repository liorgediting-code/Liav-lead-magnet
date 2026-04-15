"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function OptInForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("אנא מלא את כל השדות");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("כתובת אימייל לא תקינה");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("שגיאה בשרת");
      router.push("/guide");
    } catch {
      setError("משהו השתבש, אנא נסה שוב");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          שם מלא
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="ישראל ישראלי"
          value={form.name}
          onChange={handleChange}
          className="text-base h-12 bg-white border-border/60 focus-visible:ring-primary"
          disabled={loading}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
          טלפון
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="050-1234567"
          value={form.phone}
          onChange={handleChange}
          className="text-base h-12 bg-white border-border/60 focus-visible:ring-primary"
          disabled={loading}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          אימייל
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="israel@example.com"
          value={form.email}
          onChange={handleChange}
          className="text-base h-12 bg-white border-border/60 focus-visible:ring-primary"
          disabled={loading}
          required
        />
      </div>

      {error && (
        <p className="text-sm text-destructive font-medium text-center">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="cursor-pointer h-14 text-base font-bold mt-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-colors duration-200 shadow-lg shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {loading ? "שולח..." : "שלח לי את המדריך בחינם"}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        ללא ספאם. ללא כרטיס אשראי. המדריך יישלח אלייך מיידית.
      </p>
    </form>
  );
}
