"use client";

import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import styles from "./GalleryAsymmetric.module.css";

/** Poze din public/images/categories/ – vezi public/images/CUM_ADAUGI_POZELE.md */
const categoryImage = (slug: string) => `/images/categories/${slug}.jpg`;

const ITEMS = [
  { id: "dormitor", title: "Dormitor & Dressing – mobilier la comandă", href: "/lucrari?categorie=dormitor", image: categoryImage("dormitor"), size: "tall" },
  { id: "living", title: "Living & Sufragerie – amenajări complete", href: "/lucrari?categorie=living", image: categoryImage("living"), size: "wide" },
  { id: "bucatarii", title: "Bucătării – mobilier L și insulă", href: "/lucrari?categorie=bucatarii", image: categoryImage("bucatarii"), size: "square" },
  { id: "all", title: "Vezi toate lucrările →", href: "/lucrari", image: categoryImage("toate"), size: "square" },
];

export function GalleryAsymmetric() {
  return (
    <section className={styles.section} aria-labelledby="gallery-heading">
      <div className={styles.headerWrap}>
        <h2 id="gallery-heading" className={styles.heading}>
          Explorează categoriile
        </h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.cellTall}>
          <Link href={ITEMS[0].href} className={styles.card}>
            <span className={styles.imgWrap}>
              <StaticImage
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
              <StaticImage
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
              <StaticImage
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
              <StaticImage
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
