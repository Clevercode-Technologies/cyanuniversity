"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Featured.module.scss";

export default function Featured() {
  return (
    <div className={styles.featured__container}>
      <div className={styles.featured__head}>
        <h2 className={`${styles.featured__title} font-libre-bodoni-700`}>
          Featured Courses
        </h2>
        <p className={`${styles.featured__description} font-libre-bodoni-500`}>
          Our full Accredited programs are recognized by both industry and
          academia, ensuring students receive high-quality, credible education
        </p>
      </div>
      <div className={styles.featured__cards}>
        {featuredCourses.map((course) => (
          <div className={styles.featured__card} key={course.title}>
            <Image
              src={course.image}
              alt={course.title}
              width={384}
              height={282}
              className={styles.featured__card__image}
            />
            <div className={styles.featured__card__info}>
              <div className={styles.featured__card__info__badge}>
                <Image
                  src="/assets/featured/books.png"
                  alt="books"
                  width={25}
                  height={25}
                />
                <span
                  className={`${styles.totalLessons} font-libre-bodoni-400`}
                >{`${course.totalLessons} lessons`}</span>
              </div>
              <div className={styles.featured__card__info__title}>
                <h3
                  className={`${styles.featured__card__info__title__text} font-libre-bodoni-700`}
                >
                  {course.title}
                </h3>
                <p
                  className={`${styles.featured__card__info__title__description} font-libre-bodoni-400`}
                >
                  {course.description}
                </p>
                <Link href="/courses">
                  <button
                    className={`${styles.featured__card__info__title__button} font-libre-bodoni-700`}
                  >
                    LEARN MORE
                    <Image
                      src="/assets/featured/more.png"
                      alt="arrow-right"
                      width={25}
                      height={25}
                      className={`${styles.featured__card__info__title__button__icon}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const featuredCourses: {
  title: string;
  description: string;
  image: string;
  totalLessons: number;
}[] = [
  {
    title: "Web Development",
    description:
      "Learn how to build websites and web applications using HTML, CSS, and JavaScript.",
    image: "/assets/featured/web-dev.png",
    totalLessons: 15,
  },
  {
    title: "UI/UX Design",
    description: "User Research, Wireframing, Prototyping, Adobe XD, Figma.",
    image: "/assets/featured/ux.png",
    totalLessons: 12,
  },
  {
    title: "Data Science",
    description:
      "Data Analysis, Data Visualization, Data Science, Machine Learning, Deep Learning.",
    image: "/assets/featured/data-science.png",
    totalLessons: 18,
  },
  {
    title: "Web Development",
    description:
      "Learn how to build websites and web applications using HTML, CSS, and JavaScript.",
    image: "/assets/featured/web-dev.png",
    totalLessons: 13,
  },
  {
    title: "UI/UX Design",
    description: "User Research, Wireframing, Prototyping, Adobe XD, Figma.",
    image: "/assets/featured/ux.png",
    totalLessons: 17,
  },
  {
    title: "Data Science",
    description:
      "Data Analysis, Data Visualization, Data Science, Machine Learning, Deep Learning.",
    image: "/assets/featured/data-science.png",
    totalLessons: 13,
  },
];
