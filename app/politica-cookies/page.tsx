import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import styles from "../termeni-si-conditii/page.module.css";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  description: `Informații despre utilizarea cookie-urilor pe site-ul ${SITE.name}.`,
};

export default function PoliticaCookiesPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Politica de cookie-uri</h1>
          <p className={styles.lead}>
            Ultima actualizare: februarie 2025
          </p>
        </header>
        <div className={styles.content}>
          <section>
            <h2>1. Ce sunt cookie-urile</h2>
            <p>
              Cookie-urile sunt fișiere text de mici dimensiuni pe care site-urile le salvează pe
              dispozitivul dumneavoastră pentru a memora preferințe, a îmbunătăți navigarea sau
              pentru statistici.
            </p>
          </section>
          <section>
            <h2>2. Ce cookie-uri folosim</h2>
            <p>
              Site-ul {SITE.name} poate utiliza cookie-uri esențiale pentru funcționarea paginii
              (ex. sesiune) și, eventual, cookie-uri de analiză (ex. Google Analytics) sau pentru
              hartă (Google Maps). Cookie-urile de marketing sunt utilizate doar cu acordul dumneavoastră.
            </p>
          </section>
          <section>
            <h2>3. Cum puteți controla cookie-urile</h2>
            <p>
              Puteți configura browserul să refuze sau să șteargă cookie-urile. Setările diferă în
              funcție de browser (Chrome, Firefox, Safari, Edge). Excluderea cookie-urilor poate
              afecta unele funcționalități ale site-ului.
            </p>
          </section>
          <section>
            <h2>4. Cookie-uri terțe părți</h2>
            <p>
              Dacă folosim servicii terțe (ex. Google Maps, Google Analytics), acestea pot seta
              propriile cookie-uri. Politicile lor de confidențialitate se aplică acestor date.
            </p>
          </section>
          <section>
            <h2>5. Contact</h2>
            <p>
              Pentru întrebări legate de cookie-uri, contactați-ne la{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </section>
        </div>
        <p className={styles.back}>
          <Link href="/">← Înapoi la prima pagină</Link>
        </p>
      </div>
    </article>
  );
}
