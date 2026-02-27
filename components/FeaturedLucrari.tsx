"use client";

import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { FEATURED_LUCRARI } from "@/lib/lucrari";
import { CATEGORIES, SITE } from "@/lib/constants";
import styles from "./FeaturedProducts.module.css";

export function FeaturedLucrari() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 id="featured-heading" className={styles.title}>
            Lucrări realizate – {SITE.name}
          </h2>
          <Link href="/lucrari" className={styles.link}>
            Vezi toate →
          </Link>
        </header>
        <ul className={styles.grid} role="list">
          {FEATURED_LUCRARI.map((lucrare) => {
            const categoryLabel = CATEGORIES.find((c) => c.slug === lucrare.categorySlug)?.label ?? lucrare.categorySlug;
            return (
              <li key={lucrare.id} className={styles.card}>
                <Link href={`/lucrari/${lucrare.slug}`} className={styles.cardLink}>
                  <span className={styles.imageWrap}>
                    <StaticImage
                      src={lucrare.image}
                      alt=""
                      width={400}
                      height={400}
                      className={styles.image}
                      sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </span>
                  <span className={styles.overlayText}>
                    <span className={styles.category}>{categoryLabel}</span>
                    <span className={styles.name}>{lucrare.title}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
