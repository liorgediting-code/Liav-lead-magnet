"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PhonePrompt() {
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
        body: JSON.stringify({ name: "guide-phone", phone, email: "" }),
      });
    } finally {
      setSent(true);
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm text-primary font-semibold">
        תודה! נחזור אליך בהקדם.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs mx-auto">
      <Input
        type="tel"
        placeholder="050-1234567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary"
        disabled={loading}
      />
      <Button
        type="submit"
        disabled={loading}
        className="cursor-pointer h-11 px-4 font-semibold bg-primary text-white hover:bg-primary/90 whitespace-nowrap"
      >
        {loading ? "..." : "כן, דברו איתי"}
      </Button>
    </form>
  );
}
