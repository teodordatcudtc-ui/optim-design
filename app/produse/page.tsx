import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE } from "@/lib/constants";
import { ProduseClient } from "./ProduseClient";

export const metadata: Metadata = {
  title: "Produse",
  description: `Mobilier la ${SITE.name}: living, dormitor, dining, birou, decor. Filtrare pe categorii și sortare. Galați.`,
};

function ProduseFallback() {
  return (
    <div style={{ padding: "var(--space-2xl) var(--space-lg)", minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "var(--color-text-muted)" }}>Se încarcă produsele…</p>
    </div>
  );
}

export default function ProdusePage() {
  return (
    <Suspense fallback={<ProduseFallback />}>
      <ProduseClient />
    </Suspense>
  );
}
