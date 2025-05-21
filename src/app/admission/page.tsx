"use client";

import styles from "./admission.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission | Cyan University",
  description:
    "Start your journey at Cyan University. Learn about our admission process and requirements",
  openGraph: {
    title: "Admission | Cyan University",
    description:
      "Start your journey at Cyan University. Learn about our admission process and requirements",
    images: [
      {
        url: "/assets/admission/admission-banner.png",
        width: 1200,
        height: 630,
        alt: "Cyan University Admission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission | Cyan University",
    description:
      "Start your journey at Cyan University. Learn about our admission process and requirements",
    images: ["/assets/admission/admission-banner.png"],
  },
};

export default function About() {
  return (
    <div className={styles.admission}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Admission
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            At Cyan University, we&apos;re on a mission to equip individuals
            with the tech skills they need to thrive in the digital age. Our
            courses, created by industry experts, are designed to meet the
            demands of today&apos;s fast-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
