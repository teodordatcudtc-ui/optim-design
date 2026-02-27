import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import styles from "../termeni-si-conditii/page.module.css";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Politica de confidențialitate și protecția datelor personale la ${SITE.name}.`,
};

export default function PoliticaConfidentialitatePage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Politica de confidențialitate</h1>
          <p className={styles.lead}>
            Ultima actualizare: februarie 2025
          </p>
        </header>
        <div className={styles.content}>
          <section>
            <h2>1. Operatorul datelor</h2>
            <p>
              <strong>{SITE.name}</strong>, cu sediul în {SITE.address}, este operatorul datelor
              personale colectate prin intermediul acestui site și al formularului de contact.
            </p>
          </section>
          <section>
            <h2>2. Ce date colectăm</h2>
            <p>
              Putem colecta: nume, adresă de email, număr de telefon și alte informații pe care le
              furnizați voluntar prin formularul de contact, email sau telefon, în scopul
              răspunderii la solicitări de ofertă sau informații.
            </p>
          </section>
          <section>
            <h2>3. Scopul prelucrării</h2>
            <p>
              Datele sunt utilizate exclusiv pentru: răspuns la solicitări, transmiterea ofertelor,
              comunicări legate de proiecte. Nu utilizăm datele pentru marketing fără acordul dumneavoastră
              expres.
            </p>
          </section>
          <section>
            <h2>4. Drepturile dumneavoastră (GDPR)</h2>
            <p>
              Conform Regulamentului UE 679/2016, aveți dreptul la: acces la date, rectificare,
              ștergere („dreptul de a fi uitat”), restricționare a prelucrării, portabilitate și
              opoziție. Pentru exercitarea acestor drepturi, contactați-ne la{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Aveți și dreptul de a depune o
              plângere la ANSPDCP.
            </p>
          </section>
          <section>
            <h2>5. Securitatea datelor</h2>
            <p>
              Luăm măsuri tehnice și organizatorice adecvate pentru protecția datelor personale
              împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>
          </section>
          <section>
            <h2>6. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică. Modificările vor fi publicate pe
              această pagină, cu menționarea datei ultimei actualizări.
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
