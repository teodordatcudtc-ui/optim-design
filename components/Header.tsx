"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${SITE.name} – Acasă`}>
          {SITE.name}.
        </Link>
        <nav className={styles.nav} aria-label="Navigație principală">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? styles.navLinkActive : styles.navLink}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={styles.phone}
            aria-label="Sună-ne"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="Facebook Optim Design"
          >
            <span aria-hidden>f</span>
          </a>
        </div>
      </div>
    </header>
  );
}
