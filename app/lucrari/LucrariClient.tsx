"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { ALL_LUCRARI } from "@/lib/lucrari";
import { CATEGORIES } from "@/lib/constants";
import styles from "./lucrari.module.css";

export function LucrariClient() {
  const searchParams = useSearchParams();
  const categorie = searchParams.get("categorie") ?? "";

  const filtered = useMemo(() => {
    if (!categorie || !CATEGORIES.some((c) => c.slug === categorie)) {
      return ALL_LUCRARI;
    }
    return ALL_LUCRARI.filter((l) => l.categorySlug === categorie);
  }, [categorie]);

  const currentCategoryLabel =
    CATEGORIES.find((c) => c.slug === categorie)?.label ?? "Toate";

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Lucrări realizate</h1>
          <p className={styles.lead}>
            Proiecte și amenajări realizate – mobilier la comandă, design interior.
          </p>
        </header>

        <div className={styles.toolbar}>
          <nav className={styles.categories} aria-label="Filtre categorii">
            <span className={styles.toolbarLabel}>Categorie:</span>
            <Link
              href="/lucrari"
              className={!categorie ? styles.filterActive : styles.filterLink}
            >
              Toate
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/lucrari?categorie=${c.slug}`}
                className={categorie === c.slug ? styles.filterActive : styles.filterLink}
                aria-current={categorie === c.slug ? "true" : undefined}
              >
                {c.label}
              </Link>
            ))}
          </nav>
          <div className={styles.categorySelectWrap}>
            <label htmlFor="category-select" className={styles.toolbarLabel}>
              Categorie:
            </label>
            <select
              id="category-select"
              value={categorie}
              onChange={(e) => {
                const val = e.target.value;
                window.location.href = val ? `/lucrari?categorie=${val}` : "/lucrari";
              }}
              className={styles.sortSelect}
              aria-label="Filtrare categorie"
            >
              <option value="">Toate</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className={styles.resultCount}>
          {filtered.length} {filtered.length === 1 ? "lucrare" : "lucrări"}
          {categorie ? ` în ${currentCategoryLabel}` : ""}
        </p>

        <ul className={styles.grid} role="list">
          {filtered.map((lucrare) => {
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

        {filtered.length === 0 && (
          <p className={styles.empty}>
            Nu există lucrări în această categorie.{" "}
            <Link href="/lucrari" className={styles.emptyLink}>
              Vezi toate lucrările
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
