"use client";

import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { googleSansCode } from "@/styles/fonts/googleSansCode";
import {useState} from "react";
import styles from "@/styles/About.module.css";
import ContactButtons from "@/components/ContactButtons";
export default function About() {
   const [step, setStep] = useState(0);

  const introText = `Welcome to DevNote, a repository of some of my software projects!`;

  const aboutText = [
  "Hi, it's nice to meet you. I'm Koby and I've set my mind on software since my years in elementary school. The first legitmate language I ever laid my hands on was RobotC for an general engineering course during junior high.",
  "I throughly enjoyed the experience (granted it was likely due to my relative proficiency) and led to the preclusion of my future as a physical engineer.",
  "I was so excited that I attempted to learn C# over the following summer for game design, but quickly gave up on that pursuit.",
  "In 2019, I left my traditional highschool in order to provide myself an even better education and I was finally able to take my first computer science course.",
  "During my years at the Louisiana School for the Math, Sciences, and the Arts, I was able to expose myself to a plethora of new ideas.",
  "I took an introductory programming course with Professor Peters at LSMSA in C++ and the subsequent Data Structures course.",
  "I also gained exposure to Java and Python during my time there. Aside: I'm grateful for my educators and my peers at LSMSA.",
  "After leaving LSMSA, I started an undergraduate degree at Louisiana State University at Baton Rouge in Software Engineering.",
  "After taking a breadth of courses, from Dante's Divine Comedy (a now lasting passion) to Computer Networks and AI and Linear Differential Equations, I earned my Software Engineering degree in May 2025. Now I'm looking to become a member of a team in order to gain mentorship and improve my skills, develop products that have an impact, and work on projects that requires passionate people."
].join(" ");

const hobbiesText = [
  "Outside of programming, I'm an avid gamer. I play couple hero shooters (Overwatch and Marvel Rivals), Yu-Gi-Oh! Master Duel, and Dead by Deadlight currently.",
  "I want to take my language studies more seriously this new year. I'll probably refresh my understanding of Spanish while trying to improve my Italian, and if I'm not too overwhelmed, German.",
  "Recently, I had the pleasure of rediscovering a vintage camera owned by my grandparents and I'm thinking about exploring the world of film photography and travel more."
].join(" ");

const contactText = [
   "If you would like to contact me or view my resume, click the respective button below: "






].join(" ");
 return (
    <div className={styles.container}>
      <h1 className={styles.title}>{introText}</h1>

      <div className={styles.imageWrapper}>
        <Image
          src="/selfie.jpg"
          alt="Author's Image"
          width={200}
          height={200}
          className={styles.avatar}
        />
      </div>

      <Typewriter
        text={aboutText}
        speed={17}
        start={step === 0}
        onComplete={() => setStep(1)}
        className={styles.sectionText}
        fontClass={googleSansCode.className}
      />

      <Typewriter
        text={hobbiesText}
        speed={17}
        start={step === 1}
        onComplete={() => setStep(2)}
        className={styles.sectionText}
        fontClass={googleSansCode.className}
      />
      <Typewriter
        text={contactText}
        speed={17}
        start={step === 2}
        onComplete={() => setStep(3)}
        className={styles.sectionText}
        fontClass={googleSansCode.className}
      />
      <ContactButtons show={step >= 3} />


    </div>
  );

}
