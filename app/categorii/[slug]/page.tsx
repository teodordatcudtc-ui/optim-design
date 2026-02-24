import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES, SITE } from "@/lib/constants";
import { FEATURED_PRODUCTS } from "@/lib/products";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

const SLUG_TO_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.label])
);

const SLUG_IMAGES: Record<string, string> = {
  living: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
  dormitor: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  birou: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  decor: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
};

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = SLUG_TO_LABEL[slug];
  if (!label) return { title: "Categorie" };
  return {
    title: label,
    description: `Mobilier ${label} la ${SITE.name}, Galați. Colecție selectată.`,
  };
}

export default async function CategorieSlugPage({ params }: Props) {
  const { slug } = await params;
  const label = SLUG_TO_LABEL[slug];
  if (!label) notFound();

  const image = SLUG_IMAGES[slug] || SLUG_IMAGES.living;
  const products = FEATURED_PRODUCTS.slice(0, 4);

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/categorii">Categorii</Link>
          <span className={styles.breadcrumbSep} aria-hidden>/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <header className={styles.header}>
          <div className={styles.heroImage}>
            <Image
              src={image}
              alt=""
              fill
              className={styles.heroImg}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{label}</h1>
            <p className={styles.lead}>
              Mobilier de calitate pentru {label.toLowerCase()}. Vizitează showroom-ul nostru
              în Galați sau contactează-ne pentru oferte.
            </p>
          </div>
        </header>
        <section className={styles.products} aria-labelledby="products-heading">
          <h2 id="products-heading" className={styles.sectionTitle}>
            Produse selectate
          </h2>
          <ul className={styles.grid} role="list">
            {products.map((p) => (
              <li key={p.id} className={styles.card}>
                <Link href={p.href} className={styles.cardLink}>
                  <span className={styles.imageWrap}>
                    <Image
                      src={p.image}
                      alt=""
                      width={300}
                      height={300}
                      className={styles.image}
                      sizes="(max-width: 600px) 100vw, 50vw, 25vw"
                    />
                  </span>
                  <span className={styles.name}>{p.name}</span>
                  <span className={styles.price}>{p.price}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.more}>
            <Link href="/contact">Contactează-ne</Link> pentru întreaga ofertă și prețuri.
          </p>
        </section>
      </div>
    </article>
  );
}
