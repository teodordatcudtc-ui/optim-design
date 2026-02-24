import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Pagina nu a fost găsită.</p>
      <Link href="/" className={styles.link}>
        Întoarce-te la prima pagină
      </Link>
    </div>
  );
}
