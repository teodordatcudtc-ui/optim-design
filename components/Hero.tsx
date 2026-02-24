"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgWrap}>
        <div className={styles.bgImage} role="img" aria-label="Living modern cu mobilier elegant" />
      </div>
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          Confort, stil și meșteșug de calitate
        </h1>
        <p className={styles.subtitle}>
          O colecție aleasă de mobilier pentru casă: de la living și dormitor la dining și birou.
          Calitate, design contemporan și prețuri accesibile la Optim Design, Galați.
        </p>
        <p className={styles.subtitleShort} aria-hidden="true">
          Mobilier living, dormitor, dining. Calitate, prețuri bune, Galați.
        </p>
        <Link href="/produse" className={styles.cta}>
          Descoperă colecția →
        </Link>
      </div>
    </section>
  );
}
