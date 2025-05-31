import Head from "next/head";
import styles from "../styles/Home.module.css";
import CategoryRow from "../components/CategoryRow";
import React from "react";
import ScrollToHash from "./ScrollToHash";
import PathnameLogger from "./PathnameLogger";

export default function Home() {
  const languages = [
    { name: "C++", slug: "cpp", image: "/cpp_bw.png" },
    { name: "Python", slug: "python", image: "/python_bw.png" },
    { name: "Java", slug: "java", image: "/java_bw.png" },
    { name: "JavaScript", slug: "javascript", image: "/javascript_bw.png" },
    { name: "Ruby", slug: "ruby", image: "/ruby_bw.png" },
  ];

  const cmd_prog = [
    { name: "Tic Tac Toe", slug: "tic-tac-toe", image: "/ruby_bw.png" },
  ];

  const graphic_prog = [
    { name: "Mana", slug: "mana", image: "/ruby_bw.png" },
  ];

  return (
    <>
      <Head>
        <title>The Portfolio of Koby Ramsey</title>
      </Head>
      <ScrollToHash />
      <PathnameLogger />
      <main id="home" className={styles.main}>
        <CategoryRow title="Languages" items={languages} />
        <CategoryRow title="Command-Line" items={cmd_prog} />
        <CategoryRow title="Graphics" items={graphic_prog} />
        {[...Array(10)].map((_, i) => (
          <CategoryRow key={i} title="Junk" items={graphic_prog} />
        ))}
      </main>
    </>
  );
}
