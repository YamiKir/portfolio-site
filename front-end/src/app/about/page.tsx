"use client";

import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { googleSansCode } from "@/styles/fonts/googleSansCode";

export default function About() {
  const introText = `Hi!

Welcome to DevNote, a repository of some of my software projects!`;

  const aboutText = `^ This is me. Hi, it's nice to meet you. I'm Koby and I've set my mind on software since my years in elementary school. The first legitmate language I ever laid my hands on was RobotC for an general engineering course during junior high.
   I throughly enjoyed the experience (granted it was likely due to my relative proficiency) and led to the preclusion of my future as a physical engineer.
    I was so excited that I attempted to learn C# over the following summer for game design, but quickly gave up on that pursuit.
     In 2019, I left my traditional highschool in order to provide myself an even better education and I was finally able to take my first computer science course.
      During my years at the Louisiana School for the Math, Sciences, and the Arts, I was able to expose myself to a plethora of new ideas. 
      I took an introductory programming course with Professor Peters at LSMSA in C++ and the subsequent Data Structures course.
       I also gained exposure to Java and Python during my time there. Aside: I'm grateful for my educators and my peers at LSMSA.
        After leaving LSMSA, I started an undergraduate degree at Louisiana State University at Baton Rouge in Software Engineering.
         After taking a breadth of courses, from Dante's Divine Comedy (a now lasting passion) to Computer Networks and AI to Linear Differential Equations, I earned my Software Engineering degree in May 2025. Now I'm looking to become a member of a team in order to gain mentorship and improve my skills, develop products that have an impact, and work on projects that requires passionate people.`;

  return (
    <div>
      <h1>
        {introText}
      </h1>

      <Image
        src="/selfie.jpg"
        alt="Author's Image"
        width={200}
        height={200}
      />

      <Typewriter
        text={aboutText}
        speed={17}
        className="whitespace-pre-line text-lg"
        fontClass = {googleSansCode.className}
      />
    </div>
  );
}
