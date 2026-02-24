import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
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
          <form
            className={styles.newsletterForm}
            action="#"
            method="post"
            aria-label="Abonare newsletter"
          >
            <label htmlFor="footer-email" className="visually-hidden">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.submit}>
              Abonare
            </button>
          </form>
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
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
      </p>
    </footer>
  );
}
