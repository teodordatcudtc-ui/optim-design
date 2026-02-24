"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./GalleryAsymmetric.module.css";

const ITEMS = [
  {
    id: "beds",
    title: "Colecția noastră de paturi – Confort și stil în dormitor",
    href: "/produse?categorie=dormitor",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    size: "tall",
  },
  {
    id: "sofa",
    title: "Colecția de sofa",
    href: "/produse?categorie=living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    size: "wide",
  },
  {
    id: "tables",
    title: "Colecția de mese",
    href: "/produse?categorie=dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    size: "square",
  },
  {
    id: "all",
    title: "Vezi toată colecția →",
    href: "/produse",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    size: "square",
  },
];

export function GalleryAsymmetric() {
  return (
    <section className={styles.section} aria-label="Galerie inspirație">
      <div className={styles.grid}>
        <div className={styles.cellTall}>
          <Link href={ITEMS[0].href} className={styles.card}>
            <span className={styles.imgWrap}>
              <Image
                src={ITEMS[0].image}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </span>
            <span className={styles.overlay} />
            <span className={styles.caption}>{ITEMS[0].title}</span>
          </Link>
        </div>
        <div className={styles.cellWide}>
          <Link href={ITEMS[1].href} className={styles.card}>
            <span className={styles.imgWrap}>
              <Image
                src={ITEMS[1].image}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </span>
            <span className={styles.overlay} />
            <span className={styles.caption}>{ITEMS[1].title}</span>
          </Link>
        </div>
        <div className={styles.cellSquare}>
          <Link href={ITEMS[2].href} className={styles.card}>
            <span className={styles.imgWrap}>
              <Image
                src={ITEMS[2].image}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 27vw"
              />
            </span>
            <span className={styles.overlay} />
            <span className={styles.caption}>{ITEMS[2].title}</span>
          </Link>
        </div>
        <div className={styles.cellSquare}>
          <Link href={ITEMS[3].href} className={styles.card}>
            <span className={styles.imgWrap}>
              <Image
                src={ITEMS[3].image}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 27vw"
              />
            </span>
            <span className={styles.overlay} />
            <span className={styles.caption}>{ITEMS[3].title}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
