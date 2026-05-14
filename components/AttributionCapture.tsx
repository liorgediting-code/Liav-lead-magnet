"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/utm";

export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
