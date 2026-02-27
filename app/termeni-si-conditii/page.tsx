import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: `Termenii și condițiile de utilizare ale site-ului ${SITE.name}.`,
};

export default function TermeniSiConditiiPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Termeni și condiții</h1>
          <p className={styles.lead}>
            Ultima actualizare: februarie 2025
          </p>
        </header>
        <div className={styles.content}>
          <section>
            <h2>1. Informații generale</h2>
            <p>
              Acest site este operat de <strong>{SITE.name}</strong>, cu sediul în {SITE.address}.
              Accesând și utilizând acest site, acceptați prezentele termeni și condiții.
            </p>
          </section>
          <section>
            <h2>2. Servicii oferite</h2>
            <p>
              {SITE.name} oferă servicii de producție mobilier la comandă, amenajări interioare,
              design și consultanță. Informațiile prezentate pe site sunt orientative. Pentru oferte
              personalizate și detalii concrete, vă rugăm să ne contactați direct.
            </p>
          </section>
          <section>
            <h2>3. Drepturi de autor</h2>
            <p>
              Conținutul acestui site – texte, imagini, design – este protejat de drepturile de autor
              și aparține {SITE.name} sau partenerilor săi. Reproducerea, distribuirea sau utilizarea
              fără acord scris prealabil este interzisă.
            </p>
          </section>
          <section>
            <h2>4. Limite de răspundere</h2>
            <p>
              Facem eforturi pentru ca informațiile de pe site să fie corecte și actualizate, însă nu
              garantăm completitudinea sau acuratețea lor. {SITE.name} nu răspunde pentru daune
              indirecte rezultate din utilizarea sau imposibilitatea utilizării site-ului.
            </p>
          </section>
          <section>
            <h2>5. Contact</h2>
            <p>
              Pentru întrebări legate de termenii și condițiile de utilizare, ne puteți contacta la{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> sau telefonic la{" "}
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>.
            </p>
          </section>
        </div>
        <p className={styles.back}>
          <Link href="/">← Înapoi la prima pagină</Link>
        </p>
      </div>
    </article>
  );
}
