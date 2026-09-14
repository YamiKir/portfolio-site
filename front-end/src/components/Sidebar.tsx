"use client";

import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarTrigger}>
      <aside className={styles.sidebar}>
        <nav className={styles.navigation} aria-label="Main navigation">
          <div className={styles.navigationSection}>
            <Link href="/#home" className={styles.menuItem}>
              Home
            </Link>

            <Link href="/#feats" className={styles.menuItem}>
              Featured Programs
            </Link>
          </div>

          <div className={styles.navigationSection}>
            <Link href="/#Languages" className={styles.menuItem}>
              Languages
            </Link>

            <Link href="/#Command-Line" className={styles.menuItem}>
              Command-Line
            </Link>

            <Link href="/#Graphics" className={styles.menuItem}>
              Graphics
            </Link>
          </div>

          <div className={styles.navigationSection}>
            <Link href="/about" className={styles.menuItem}>
              About
            </Link>

            <Link
              href="/downloads/ramsey_resume.pdf"
              className={styles.menuItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
        </nav>

        <div className={styles.sidebarHint}>
          <span>☰</span>
        </div>
      </aside>
    </div>
  );
}