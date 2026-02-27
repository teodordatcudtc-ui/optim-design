"use client";

import styles from "./AboutStats.module.css";

const STATS = [
  { value: "10+", label: "Ani de experiență" },
  { value: "500+", label: "Lucrări finalizate" },
  { value: "1200+", label: "Clienți mulțumiți" },
];

export function AboutStats() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.wrap}>
        <div className={styles.about}>
          <h2 id="about-heading" className={styles.heading}>
            Despre noi
          </h2>
          <p className={styles.text}>
            Credem că mobilierul de calitate este cheia unei case frumoase și funcționale.
            Cu pasiune pentru design și meșteșug, producem mobilier la comandă: băi, bucătării, living, dormitor, birouri.
            Amenajări interioare personalizate, execuție de calitate – Optim Design, Galați.
          </p>
        </div>
        <div className={styles.stats} role="list">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className={styles.stat} role="listitem">
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
