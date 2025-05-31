import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBox";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Portfolio of Koby Ramsey",
  description: "A showcase of projects and programming work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.container}`}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <a href="/#home" style={{ paddingTop: "10px" }}>
              <img src="/dev_note_trans.png" alt="Site Logo" className={styles.logo} />
            </a>
            <SearchBar />
          </div>
        </div>

        {/* Sidebar + Content */}
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <a href="/#home" className={styles.menuItem}>Home</a>
              <a href="/#Languages" className={styles.menuItem}>Languages</a>
              <a href="/#Command-Line" className={styles.menuItem}>Command-Line</a>
              <a href="/#Graphics" className={styles.menuItem}>Graphics</a>
            </div>
          </div>

          <div className={styles.mainWrapper}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
