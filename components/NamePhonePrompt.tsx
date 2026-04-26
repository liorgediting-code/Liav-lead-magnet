"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NamePhonePrompt() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email: "", source: "offer" }),
      });
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
      <Button
        type="submit"
        disabled={loading}
        className="cursor-pointer h-11 w-full font-bold bg-primary text-white hover:bg-primary/90"
      >
        {loading ? "..." : "שלח — נחזור אליך"}
      </Button>
    </form>
  );
}
