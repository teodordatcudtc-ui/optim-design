import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Despre noi",
  description: `Despre ${SITE.name} – magazin de mobilier în Galați. Calitate, design și meșteșug de ani.`,
};

export default function DespreNoiPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Despre noi</h1>
          <p className={styles.lead}>
            Mobilier de calitate pentru casă – de la living la dormitor și dining.
          </p>
        </header>
        <div className={styles.content}>
          <p>
            La <strong>{SITE.name}</strong> credem că mobilierul bun face diferența între o locuință
            și o casă. Oferim o colecție aleasă de mobilier: living, sofa, dormitor, dining, birou
            și decor – toate într-un singur loc, în Galați.
          </p>
          <p>
            Combinăm estetica modernă cu eleganța atemporală și prețuri accesibile. Fiecare piesă
            este selectată pentru durabilitate, confort și design, astfel încât să se potrivească
            atât caselor contemporane, cât și celor care preferă un stil clasic.
          </p>
          <p>
            Suntem aici să te ajutăm să găsești exact ce ai nevoie – vizitează-ne în showroom
            sau contactează-ne pentru oferte și consultanță.
          </p>
        </div>
        <section className={styles.cta} aria-label="Acțiune">
          <Link href="/contact" className={styles.ctaLink}>
            Contactează-ne
          </Link>
        </section>
      </div>
    </article>
  );
}
