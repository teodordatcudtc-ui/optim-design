"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgWrap}>
        <img
          src="/images/hero.jpg"
          alt=""
          className={styles.bgImage}
          aria-hidden
        />
        <div className={styles.bgOverlay} aria-hidden />
      </div>
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          Design studio pentru interioare <em>moderne</em>
        </h1>
        <div className={styles.decorLine} aria-hidden />
        <p className={styles.subtitle}>
          Mobilier la comandă – băi, bucătării, living, dormitor, birouri. Amenajări complete, Galați.
        </p>
        <p className={styles.subtitleShort} aria-hidden="true">
          Mobilier la comandă, amenajări complete. Galați.
        </p>
        <div className={styles.ctaWrap}>
          <Link href="/lucrari" className={styles.ctaPrimary}>
            <span className={styles.ctaPrimaryLong}>Vezi lucrările realizate →</span>
            <span className={styles.ctaPrimaryShort}>Lucrări →</span>
          </Link>
          <Link href="/despre-noi" className={styles.ctaSecondary}>
            Despre noi ↗
          </Link>
        </div>
        <div className={styles.stats} role="list">
          <div className={styles.stat} role="listitem">
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>Ani experiență</span>
          </div>
          <div className={styles.stat} role="listitem">
            <span className={styles.statValue}>1200+</span>
            <span className={styles.statLabel}>Clienți mulțumiți</span>
          </div>
          <div className={styles.stat} role="listitem">
            <span className={styles.statValue}>2</span>
            <span className={styles.statLabel}>Ani garanție</span>
          </div>
        </div>
      </div>
    </section>
  );
}
