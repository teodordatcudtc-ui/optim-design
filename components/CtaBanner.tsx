"use client";

import Link from "next/link";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.bg} role="img" aria-label="Sofa modern cu accente verzi" />
      <div className={styles.content}>
        <h2 id="cta-heading" className={styles.title}>
          Creează-ți mobilierul ideal azi
        </h2>
        <p className={styles.text}>
          De la living la dormitor și dining – găsești mobilier de calitate, design contemporan
          și prețuri corecte. Vizitează-ne în Galați sau contactează-ne pentru oferte.
        </p>
        <Link href="/contact" className={styles.cta}>
          Contact
        </Link>
      </div>
    </section>
  );
}
