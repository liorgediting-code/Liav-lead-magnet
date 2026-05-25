"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackPurchase } from "@/lib/meta-pixel";
import { readAttribution } from "@/lib/utm";
import { isValidIsraeliPhone, PHONE_ERROR } from "@/lib/utils";

export default function NamePhonePrompt() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!phone.trim()) return;
    if (!isValidIsraeliPhone(phone)) {
      setError(PHONE_ERROR);
      return;
    }
    setLoading(true);
    try {
      const attribution = readAttribution();
      const eventId = `purchase_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email: "", source: "offer", attribution, eventId }),
      });
      trackPurchase({ currency: "ILS" }, eventId);
    } finally {
      setSent(true);
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm text-primary font-semibold text-center py-2">
        תודה! נחזור אליך בהקדם.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        type="text"
        placeholder="השם שלך"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary"
        disabled={loading}
      />
      <Input
        type="tel"
        placeholder="מספר טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary"
        disabled={loading}
        required
      />
      {error && (
        <p className="text-sm text-destructive font-medium text-center">{error}</p>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="cursor-pointer h-11 w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {loading ? "..." : "שלח ונחזור אליך"}
      </Button>
    </form>
  );
}
