"use client";

import styles from "@/styles/About.module.css";

type ResumeButtonProps = {
  show: boolean; // controls visibility
};

export default function ResumeButton({ show }: ResumeButtonProps) {
  if (!show) return null; // don’t render if show is false

  const handleResumeClick = () => {
    // Make sure your resume is in public/downloads/
    window.open("/downloads/ramsey_resume.pdf", "_blank");
  };

  return (
    <div className={styles.buttonRow}>
      <button
        type="button"
        onClick={handleResumeClick}
        className={styles.buttonPrimary}
      >
        Download Resume
      </button>
    </div>
  );
}
