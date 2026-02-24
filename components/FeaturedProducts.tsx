"use client";

import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/constants";
import styles from "./FeaturedProducts.module.css";

export function FeaturedProducts() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 id="featured-heading" className={styles.title}>
            Interioare {SITE.name}.
          </h2>
          <Link href="/produse" className={styles.link}>
            Vezi toate →
          </Link>
        </header>
        <ul className={styles.grid} role="list">
          {FEATURED_PRODUCTS.map((product) => (
            <li key={product.id} className={styles.card}>
              <Link href={product.href} className={styles.cardLink}>
                <span className={styles.imageWrap}>
                  <StaticImage
                    src={product.image}
                    alt=""
                    width={400}
                    height={400}
                    className={styles.image}
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw"
                  />
                </span>
                <span className={styles.overlayText}>
                  <span className={styles.category}>{product.category}</span>
                  <span className={styles.name}>{product.name}</span>
                  <span className={styles.price}>{product.price}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
