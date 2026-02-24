"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { ALL_PRODUCTS, sortProducts, type SortOption } from "@/lib/products";
import { CATEGORIES } from "@/lib/constants";
import styles from "./produse.module.css";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default", label: "Relevanță" },
  { value: "price-asc", label: "Preț crescător" },
  { value: "price-desc", label: "Preț descrescător" },
  { value: "name-asc", label: "Nume A → Z" },
  { value: "name-desc", label: "Nume Z → A" },
];

export function ProduseClient() {
  const searchParams = useSearchParams();
  const categorie = searchParams.get("categorie") ?? "";
  const sort = (searchParams.get("sort") as SortOption) || "default";

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS;
    if (categorie && CATEGORIES.some((c) => c.slug === categorie)) {
      list = list.filter((p) => p.categorySlug === categorie);
    }
    return sortProducts(list, sort);
  }, [categorie, sort]);

  const setParams = useCallback(
    (updates: { categorie?: string; sort?: string }) => {
      const p = new URLSearchParams(searchParams.toString());
      if (updates.categorie !== undefined) {
        if (updates.categorie) p.set("categorie", updates.categorie);
        else p.delete("categorie");
      }
      if (updates.sort !== undefined) {
        if (updates.sort && updates.sort !== "default") p.set("sort", updates.sort);
        else p.delete("sort");
      }
      return "?" + p.toString();
    },
    [searchParams]
  );

  const currentCategoryLabel =
    CATEGORIES.find((c) => c.slug === categorie)?.label ?? "Toate";

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Produse</h1>
          <p className={styles.lead}>
            Mobilier de calitate – filtrează pe categorie și sortează după preț sau nume.
          </p>
        </header>

        <div className={styles.toolbar}>
          <nav className={styles.categories} aria-label="Filtre categorii">
            <span className={styles.toolbarLabel}>Categorie:</span>
            <Link
              href="/produse"
              className={!categorie ? styles.filterActive : styles.filterLink}
            >
              Toate
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/produse?categorie=${c.slug}${sort && sort !== "default" ? `&sort=${sort}` : ""}`}
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
                window.location.href = val
                  ? `/produse?categorie=${val}${sort && sort !== "default" ? `&sort=${sort}` : ""}`
                  : "/produse";
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
          <div className={styles.sortWrap}>
            <label htmlFor="sort-select" className={styles.toolbarLabel}>
              Sortare:
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={(e) => {
                const newSort = e.target.value as SortOption;
                window.location.href = setParams({ sort: newSort });
              }}
              className={styles.sortSelect}
              aria-label="Sortare produse"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className={styles.resultCount}>
          {filtered.length} {filtered.length === 1 ? "produs" : "produse"}
          {categorie ? ` în ${currentCategoryLabel}` : ""}
        </p>

        <ul className={styles.grid} role="list">
          {filtered.map((product) => (
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

        {filtered.length === 0 && (
          <p className={styles.empty}>
            Nu există produse în această categorie.{" "}
            <Link href="/produse" className={styles.emptyLink}>
              Vezi toate produsele
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
