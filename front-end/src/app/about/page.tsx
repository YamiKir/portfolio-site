"use client";

import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { googleSansCode } from "@/styles/fonts/googleSansCode";
import { Geist } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/About.module.css";
import ContactButtons from "@/components/ContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function About() {
  const [step, setStep] = useState(0);

  const introText =
    "Welcome to DevNote, a repository of some of my software projects!";

  const aboutText = [
    "Hi, it's nice to meet you. I'm Koby, and I've set my mind on software since my years in elementary school. The first legitimate language I ever laid my hands on was RobotC, which I used in a general engineering course during junior high.",
    "I thoroughly enjoyed the experience (likely due to my relative proficiency), which ultimately led me away from a future as a physical engineer.",
    "I was so excited that I attempted to learn C# over the following summer for game design, but quickly gave up on that pursuit.",
    "In 2019, I left my traditional high school in order to provide myself an even better education, where I was finally able to take my first computer science course.",
    "During my years at the Louisiana School for the Math, Science, and the Arts, I was able to expose myself to a plethora of new ideas.",
    "I took an introductory programming course with Professor Peters at LSMSA in C++ and the subsequent Data Structures course.",
    "I also gained exposure to Java and Python during my time there. Aside: I'm grateful for my educators and my peers at LSMSA.",
    "After leaving LSMSA, I began an undergraduate Software Engineering degree at Louisiana State University.",
    "After taking a breadth of courses, from Dante's Divine Comedy to Computer Networks, AI, and Linear Differential Equations, I earned my Software Engineering degree in May 2025. Now I'm looking to become a member of a team in order to gain mentorship and improve my skills, develop products that have an impact, and work on projects that require passionate people.",
  ].join(" ");

  const hobbiesText = [
    "Outside of programming, I'm an avid gamer. I currently play a couple of hero shooters, including Overwatch and Marvel Rivals, as well as Yu-Gi-Oh! Master Duel and Dead by Daylight.",
    "I want to take my language studies more seriously this year. I'll probably refresh my understanding of Spanish while trying to improve my Italian, and if I'm not too overwhelmed, German.",
    "Recently, I had the pleasure of rediscovering a vintage camera owned by my grandparents, and I'm thinking about exploring the world of film photography and travel more.",
  ].join(" ");

  const contactText =
    "If you would like to contact me or view my resume, click the respective button below.";

  const aboutSpeed = (22 * 1000) / aboutText.length;
  const hobbySpeed = (11 * 1000) / hobbiesText.length;
  const contactSpeed = 15;

  return (
    <main className={styles.container}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={`${styles.eyebrow} ${googleSansCode.className}`}>
            / about
          </span>

          <h1 className={`${styles.title} ${geistSans.className}`}>
            {introText}
          </h1>

          <div className={styles.divider} />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/selfie.jpg"
            alt="Koby Ramsey"
            width={240}
            height={240}
            className={styles.avatar}
            priority
          />
        </div>
      </section>

      {/* Background */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={googleSansCode.className}>01</span>
          <h2 className={geistSans.className}>Background</h2>
        </div>

        <Typewriter
          text={aboutText}
          speed={aboutSpeed}
          start={step === 0}
          onComplete={() => setStep(1)}
          className={styles.sectionText}
          fontClass={googleSansCode.className}
        />
      </section>

      {/* Interests */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={googleSansCode.className}>02</span>
          <h2 className={geistSans.className}>Outside of Code</h2>
        </div>

        <Typewriter
          text={hobbiesText}
          speed={hobbySpeed}
          start={step === 1}
          onComplete={() => setStep(2)}
          className={styles.sectionText}
          fontClass={googleSansCode.className}
        />
      </section>

      {/* Contact */}
      <section className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionHeader}>
          <span className={googleSansCode.className}>03</span>
          <h2 className={geistSans.className}>Get in Touch</h2>
        </div>

        <Typewriter
          text={contactText}
          speed={contactSpeed}
          start={step === 2}
          onComplete={() => setStep(3)}
          className={styles.sectionText}
          fontClass={googleSansCode.className}
        />

        <ContactButtons show={step >= 3} />
      </section>

    </main>
  );
}