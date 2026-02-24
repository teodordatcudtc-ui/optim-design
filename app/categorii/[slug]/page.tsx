import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { notFound } from "next/navigation";
import { CATEGORIES, SITE } from "@/lib/constants";
import { FEATURED_PRODUCTS } from "@/lib/products";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

const SLUG_TO_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.label])
);

/** Poze din public/images/categories/ – vezi public/images/CUM_ADAUGI_POZELE.md */
const categoryImage = (slug: string) => `/images/categories/${slug}.jpg`;

const SLUG_IMAGES: Record<string, string> = {
  living: categoryImage("living"),
  dining: categoryImage("dining"),
  dormitor: categoryImage("dormitor"),
  birou: categoryImage("birou"),
  decor: categoryImage("decor"),
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
            <StaticImage
              src={image}
              alt=""
              fill
              className={styles.heroImg}
              sizes="(max-width: 768px) 100vw, 80vw"
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
                    <StaticImage
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
