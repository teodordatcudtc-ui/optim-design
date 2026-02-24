import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, SITE } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Categorii mobilier",
  description: `Categorii de mobilier la ${SITE.name}: living, dormitor, dining, birou, decor. Galați.`,
};

export default function CategoriiPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Categorii</h1>
          <p className={styles.lead}>
            Alege categoria de mobilier care te interesează și descoperă produsele noastre.
          </p>
        </header>
        <ul className={styles.grid} role="list">
          {CATEGORIES.map((cat) => (
            <li key={cat.slug}>
              <Link href={cat.href} className={styles.card}>
                <span className={styles.label}>{cat.label}</span>
                <span className={styles.arrow} aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
