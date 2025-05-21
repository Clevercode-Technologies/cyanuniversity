"use client";

import styles from "./admission.module.scss";

export default function About() {
  return (
    <div className={styles.admission}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Admission
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            At Cyan University, we&apos;re on a mission to equip individuals with the
            tech skills they need to thrive in the digital age. Our courses,
            created by industry experts, are designed to meet the demands of
            today’s fast-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
