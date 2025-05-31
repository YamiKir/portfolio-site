
import Head from "next/head";
import styles from "../styles/Home.module.css"
import CategoryRow from "./CategoryRow";
import React from 'react';
import ScrollToHash from "./ScrollToHash";
import PathnameLogger from "./PathnameLogger";


function scrollToArea(id: string){
  const area = document.getElementById(id);
    if(area){
      area.scrollIntoView({behavior: "smooth", block:"start"});
      
    }
}
export default function Home(){

     const languages = [
    { name: 'C++', image: '/cpp_bw.png' },
    { name: 'Python', image: '/python_bw.png' },
    { name: 'Java', image: '/java_bw.png' },
    { name: 'JavaScript', image: '/javascript_bw.png' },
    { name: 'Ruby', image: '/ruby_bw.png' },
  ];
    const cmd_prog =[
      {name: 'tic tac toe', image : 'ruby_bw.png'}
    ];
    const graphic_prog =[
      {name: 'mana', image : 'ruby_bw.png'}
    ];

     return (
    <div className={styles.container}>
      <ScrollToHash/>
      <PathnameLogger/>
      <Head>
        <title>The Portfolio of Koby Ramsey</title>
      </Head>
      <div className ={styles.headerWrapper}>
      <div className = {styles.header}>
        <a href="/#home"  style={{paddingTop:"10px"}}>
        <img src= "/dev_note_trans.png" alt ="Site Logo" className ={styles.logo} />
        </a>
        <input type = "text" className={styles.search} placeholder="Search my catalogue..."/>
      </div>
      </div>

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
        {/* Main content */}
        <main id ="home" className={styles.main}>
        
          <CategoryRow title="Languages" items={languages} />
          <CategoryRow title="Command-Line" items={cmd_prog} />
          <CategoryRow title="Graphics" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
          <CategoryRow title="Junk" items={graphic_prog} />
        </main>
      </div>
      </div>
      </div>
  );
}