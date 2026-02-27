import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage } from "@/components/StaticImage";
import { notFound } from "next/navigation";
import { getLucrareBySlug, ALL_LUCRARI } from "@/lib/lucrari";
import { CATEGORIES, SITE } from "@/lib/constants";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_LUCRARI.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lucrare = getLucrareBySlug(slug);
  if (!lucrare) return { title: "Lucrare" };
  const categoryLabel = CATEGORIES.find((c) => c.slug === lucrare.categorySlug)?.label ?? lucrare.categorySlug;
  return {
    title: lucrare.title,
    description: `${lucrare.title} – ${categoryLabel}. ${lucrare.description ?? ""} ${SITE.name}, Galați.`,
  };
}

export default async function LucrarePage({ params }: Props) {
  const { slug } = await params;
  const lucrare = getLucrareBySlug(slug);
  if (!lucrare) notFound();

  const categoryLabel = CATEGORIES.find((c) => c.slug === lucrare.categorySlug)?.label ?? lucrare.categorySlug;

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/lucrari">Lucrări realizate</Link>
          <span className={styles.sep} aria-hidden>/</span>
          <Link href={`/lucrari?categorie=${lucrare.categorySlug}`}>{categoryLabel}</Link>
          <span className={styles.sep} aria-hidden>/</span>
          <span aria-current="page">{lucrare.title}</span>
        </nav>

        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <StaticImage
              src={lucrare.image}
              alt={lucrare.title}
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.category}>{categoryLabel}</p>
            <h1 className={styles.title}>{lucrare.title}</h1>
            {lucrare.description && (
              <p className={styles.desc}>{lucrare.description}</p>
            )}
            {lucrare.specs && lucrare.specs.length > 0 && (
              <dl className={styles.specs}>
                {lucrare.specs.map(({ label, value }) => (
                  <div key={label} className={styles.specRow}>
                    <dt className={styles.specLabel}>{label}</dt>
                    <dd className={styles.specValue}>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className={styles.ctaWrap}>
              <Link href="/contact" className={styles.cta}>
                Solicită ofertă personalizată
              </Link>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
