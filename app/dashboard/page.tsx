import type { Metadata } from "next";
import LeadsDashboard from "@/components/LeadsDashboard";

export const metadata: Metadata = {
  title: "דשבורד לידים · ליאב כהן",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <main className="flex-1 bg-navy">
      <LeadsDashboard />
    </main>
  );
}
