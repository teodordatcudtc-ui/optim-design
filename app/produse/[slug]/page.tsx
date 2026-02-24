import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { notFound } from "next/navigation";
import { getProductBySlug, ALL_PRODUCTS } from "@/lib/products";
import { CATEGORIES } from "@/lib/constants";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produs" };
  return {
    title: product.name,
    description: `${product.name} – ${product.category}, ${product.price}. ${SITE.name}, Galați.`,
  };
}

export default async function ProdusPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel = CATEGORIES.find((c) => c.slug === product.categorySlug)?.label ?? product.category;

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/produse">Produse</Link>
          <span className={styles.sep} aria-hidden>/</span>
          <Link href={`/produse?categorie=${product.categorySlug}`}>{categoryLabel}</Link>
          <span className={styles.sep} aria-hidden>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <StaticImage
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>
            {product.description && (
              <p className={styles.desc}>{product.description}</p>
            )}
            {product.colors && product.colors.length > 0 && (
              <div className={styles.options}>
                <span className={styles.optionsLabel}>Culori disponibile:</span>
                <ul className={styles.colorList} role="list">
                  {product.colors.map((color) => (
                    <li key={color} className={styles.colorItem}>{color}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link href="/contact" className={styles.cta}>
              Comandă
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
