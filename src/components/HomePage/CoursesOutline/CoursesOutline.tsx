"use client";

import Image from "next/image";
import styles from "./CoursesOutline.module.scss";

export default function CoursesOutline() {
  return (
    <div className={styles.outline__container}>
      {cardData.map((cardItem, index) => (
        <div className={styles.card__body} key={`${cardItem.preview}-${index}`}>
          <Image
            alt="card__image"
            src={cardItem.preview}
            width={319}
            height={236}
            className={styles.card__image}
          />

          <div className={styles.excert__container}>
            <h2 className={`${styles.excert} font-libre-bodoni-600`}>{cardItem.excert}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardData: { preview: string; excert: string }[] = [
  {
    preview: "/assets/courses_outline/course-1.png",
    excert: "Tech skills & Innovations",
  },
  {
    preview: "/assets/courses_outline/course-2.png",
    excert: "Real projects & Internships",
  },
  {
    preview: "/assets/courses_outline/course-3.png",
    excert: "Online Admissions",
  },
  {
    preview: "/assets/courses_outline/course-4.png",
    excert: "No large upfront cost",
  },
];
