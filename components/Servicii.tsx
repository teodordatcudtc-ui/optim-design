"use client";

import Link from "next/link";
import styles from "./Servicii.module.css";

const SERVICII = [
  {
    title: "Mobilier la comandă",
    desc: "Băi, bucătării, living, dormitor, birouri – executăm mobilier personalizat după proiectul și măsurile spațiului.",
  },
  {
    title: "Amenajări complete",
    desc: "Proiecte la cheie: design interior, execuție mobilier, montaj și finisaje. Un singur partener pentru întreg spațiul.",
  },
  {
    title: "Design & consultanță",
    desc: "Consultanță pentru materiale, finisaje și soluții funcționale. Proiecte adaptate nevoilor și bugetului dumneavoastră.",
  },
  {
    title: "Garanție & calitate",
    desc: "Execuție de calitate, materiale selecte. Garanție 2 ani pentru mobilierul realizat.",
  },
];

export function Servicii() {
  return (
    <section className={styles.section} aria-labelledby="servicii-heading">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 id="servicii-heading" className={styles.heading}>
            Ce oferim
          </h2>
          <p className={styles.lead}>
            Soluții complete de mobilier pentru locuințe și spații comerciale – de la proiect la montaj.
          </p>
        </header>
        <ul className={styles.grid} role="list">
          {SERVICII.map(({ title, desc }) => (
            <li key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </li>
          ))}
        </ul>
        <p className={styles.ctaWrap}>
          <Link href="/contact" className={styles.cta}>
            Discută proiectul tău
          </Link>
        </p>
      </div>
    </section>
  );
}
