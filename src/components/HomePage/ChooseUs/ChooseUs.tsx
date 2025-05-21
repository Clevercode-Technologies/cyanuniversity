"use client";

import Image from "next/image";
import styles from "./ChooseUs.module.scss";

export default function ChooseUs() {
  return (
    <div className={styles.chooseUs__container}>
      <div className={styles.chooseUs__content}>
        <h2 className={`${styles.chooseUs__title} font-libre-bodoni-700`}>
          Why Choose Cyan University?
        </h2>
        <div className={styles.chooseUs__cards}>
        {choiceCards.map((card) => (
          <div className={styles.chooseUs__card} key={card.title}>
            <Image src={card.icon} alt={card.title} width={80} height={80} />
            <h3 className={`${styles.chooseUs__cardTitle} font-libre-bodoni-700`}>{card.title}</h3>
            <p className={`${styles.chooseUs__cardDescription} font-libre-bodoni-400`}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const choiceCards: { icon: string; title: string; description: string }[] = [
  {
    icon: "/assets/choose-us/person.png",
    title: "Expert Instructors",
    description: "Learn from seasoned professionals in the tech field.",
    },
    {
        icon: "/assets/choose-us/play.png",
        title: "Flexible Learning",
        description: "Courses available online and on-demand."
    },
    {
        icon: "/assets/choose-us/lock.png",
        title: "Real-World Skills",
        description: "We focus on hands-on practical training."
    },
    {
        icon: "/assets/choose-us/certificate.png",
        title: "Certification ",
        description: "Earn a recognized certificate that proves your skill."
    },
];
