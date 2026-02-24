import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} – adresă, telefon, program. Vizitează-ne în Galați, Zona Metro.`,
};

export default function ContactPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.lead}>
            Vizitează-ne în showroom sau contactează-ne pentru oferte și informații.
          </p>
        </header>

        <div className={styles.grid}>
          <section className={styles.block} aria-labelledby="contact-location">
            <h2 id="contact-location" className={styles.subtitle}>
              Locație
            </h2>
            <p className={styles.address}>{SITE.address}</p>
            <p className={styles.note}>Zona Metro, Hală 60</p>
          </section>

          <section className={styles.block} aria-labelledby="contact-phone">
            <h2 id="contact-phone" className={styles.subtitle}>
              Telefon
            </h2>
            <p>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className={styles.phone}>
                {SITE.phone}
              </a>
            </p>
          </section>

          <section className={styles.block} aria-labelledby="contact-social">
            <h2 id="contact-social" className={styles.subtitle}>
              Social
            </h2>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Facebook – Optim Design
            </a>
          </section>
        </div>

        <section className={styles.mapSection} aria-label="Hartă locație">
          <h2 className="visually-hidden">Locație pe hartă</h2>
          <div className={styles.mapWrap}>
            <iframe
              src={SITE.mapsEmbed}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Optim Design pe Google Maps"
              className={styles.map}
            />
          </div>
        </section>
      </div>
    </article>
  );
}
