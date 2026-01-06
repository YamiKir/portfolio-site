import Head from "next/head";
import styles from "../styles/Home.module.css";
import CategoryRow from "../components/CategoryRow";
import React from "react";
import ScrollToHash from "./ScrollToHash";
import PathnameLogger from "./PathnameLogger";
import Link from "next/link";



export default function Home() {
   const introMsg =<>Koby Ramsey<br /> LSU Software Engineer</>;
   const feats =[
      {name: "Lotus Leaf", slug:"lotus-leaf", image:"/lotus-bw.png"},
      {name: "PokeBot", slug:"pb", image:"/poked-bw.png"},
      {name: "SongGuesser", slug:"sg", image:"/song-guessr-bw.png"}
      
   ];
  const languages = [
    { name: "C++", slug: "cpp", image: "/cpp_bw.png" },
    { name: "Python", slug: "python", image: "/python_bw.png" },
    { name: "Java", slug: "java", image: "/java_bw.png" },
    { name: "JavaScript", slug: "javascript", image: "/javascript_bw.png" },
    
  ];

  const cmd_prog = [
  { name: "C++", slug: "cpp", image: "/cpp_bw.png" },
    
  ];

  const graphic_prog = [
   { name: "JavaScript", slug: "javascript", image: "/javascript_bw.png" },
  ];

  return (
    <>
      <Head>
        <title>The Portfolio of Koby Ramsey</title>
      </Head>
      <ScrollToHash />
      <PathnameLogger />
      <main id="home" className={styles.main}>
        <h1 id ="intro-self" className={styles.introduction}>
            {introMsg}
            <br></br>
             <Link href="/about" className={styles.aboutInline}>
               About Me →
            </Link>
         </h1> 
            
          <CategoryRow title="Featured Projects" items={feats} />
          <CategoryRow title="Languages" items={languages} />
        <CategoryRow title="Command-Line" items={cmd_prog} />
        <CategoryRow title="Graphics" items={graphic_prog} />
      </main>
    </>
  );
}
