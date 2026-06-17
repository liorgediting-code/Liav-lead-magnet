"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { trackLead } from "@/lib/meta-pixel";
import { readAttribution } from "@/lib/utm";
import { isValidIsraeliPhone, PHONE_ERROR } from "@/lib/utils";

export default function OptInForm() {
  const router = useRouter();
  const fieldId = useId();
  const nameId = `${fieldId}-name`;
  const phoneId = `${fieldId}-phone`;
  const emailId = `${fieldId}-email`;
  const errorId = `${fieldId}-error`;
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setErrors({});
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "הוסף שם כדי להמשיך";
    }

    if (!form.email.trim()) {
      newErrors.email = "הוסף אימייל כדי להמשיך";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "האימייל לא נראה תקין (בדוק שיש @)";
      }
    }

    if (form.phone.trim() && !isValidIsraeliPhone(form.phone)) {
      newErrors.phone = PHONE_ERROR;
    }

    if (!consent) {
      newErrors.consent = "סמן את תיבת האישור כדי להמשיך";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError("בדוק את השגיאות בטופס");
      return;
    }

    setLoading(true);
    try {
      const attribution = readAttribution();
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, attribution, eventId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "קרתה שגיאה בשרת");
      }
      trackLead({ email: form.email, phone: form.phone }, eventId);
      await new Promise((resolve) => setTimeout(resolve, 300));
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "קרתה תקלה, בדוק את הנתונים ונסה שוב");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={nameId} className="text-sm font-medium text-foreground">
          שם מלא
        </Label>
        <Input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="ישראל ישראלי"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={`text-base h-12 bg-white border-border/60 focus-visible:ring-primary ${errors.name ? "border-destructive" : ""}`}
          disabled={loading}
          required
        />
        {errors.name && (
          <p id={`${nameId}-error`} className="text-xs text-destructive font-medium">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={phoneId} className="text-sm font-medium text-foreground">
          טלפון <span className="text-muted-foreground font-normal text-xs">(אופציונלי)</span>
        </Label>
        <Input
          id={phoneId}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="050-1234567"
          value={form.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
          className={`text-base h-12 bg-white border-border/60 focus-visible:ring-primary ${errors.phone ? "border-destructive" : ""}`}
          disabled={loading}
        />
        {errors.phone && (
          <p id={`${phoneId}-error`} className="text-xs text-destructive font-medium">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={emailId} className="text-sm font-medium text-foreground">
          אימייל
        </Label>
        <Input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="israel@example.com"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className={`text-base h-12 bg-white border-border/60 focus-visible:ring-primary ${errors.email ? "border-destructive" : ""}`}
          disabled={loading}
          required
        />
        {errors.email && (
          <p id={`${emailId}-error`} className="text-xs text-destructive font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* Consent checkbox — חוק התקשורת (בזק ושידורים) תיקון מס׳ 40 */}
      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={loading}
            aria-invalid={!!errors.consent}
            className="mt-1 w-4 h-4 accent-primary flex-shrink-0 cursor-pointer"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            אני מאשר/ת קבלת תכנים שיווקיים ועדכונים בדוא״ל. ניתן לבטל בכל עת.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-destructive font-medium">
            {errors.consent}
          </p>
        )}
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
        {loading ? "שולח..." : "שלחו לי את התבנית"}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        🔒 100% חינם · לא נשלח ספאם · ביטול בלחיצה אחת
      </p>
    </form>
  );
}
