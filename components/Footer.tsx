import Link from "next/link";
import { SITE, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";
import { NewsletterForm } from "@/components/NewsletterForm";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.brandBg} aria-hidden="true">
        {SITE.name.toUpperCase()}
      </div>
      <div className={styles.grid}>
        <div className={styles.block}>
          <h3 className={styles.title}>Locație</h3>
          <p className={styles.address}>{SITE.address}</p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.title}>Contact</h3>
          <p>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          </p>
          {SITE.email && (
            <p>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          )}
        </div>
        <div className={styles.block}>
          <h3 className={styles.title}>Social</h3>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
        </div>
        <div className={styles.block}>
          <h3 className={styles.title}>Newsletter</h3>
          <p className={styles.newsletterText}>Abonează-te la oferte și noutăți.</p>
          <NewsletterForm />
        </div>
      </div>
      <nav className={styles.footerNav} aria-label="Navigație footer">
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.legalNav} aria-label="Pagini legale">
        {LEGAL_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.legalLink}>
            {label}
          </Link>
        ))}
      </nav>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
      </p>
    </footer>
  );
}
