import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE } from "@/lib/constants";
import { LucrariClient } from "./LucrariClient";

export const metadata: Metadata = {
  title: "Lucrări realizate",
  description: `Proiecte și amenajări realizate de ${SITE.name}: băi, bucătării, living, dormitor, spații comerciale. Mobilier la comandă, Galați.`,
};

function LucrariFallback() {
  return (
    <div style={{ padding: "var(--space-2xl)", textAlign: "center", color: "var(--color-text-muted)" }}>
      Se încarcă…
    </div>
  );
}

export default function LucrariPage() {
  return (
    <Suspense fallback={<LucrariFallback />}>
      <LucrariClient />
    </Suspense>
  );
}
