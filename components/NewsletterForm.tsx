"use client";

import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

/** Se renderează doar pe client pentru a evita hydration mismatch cu extensiile (ex. fdprocessedid). */
export function NewsletterForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.newsletterForm} aria-hidden style={{ minHeight: "2.75rem" }} />
    );
  }

  return (
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
  );
}
