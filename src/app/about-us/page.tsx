"use client";

import Image from "next/image";
import styles from "./about.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cyan University",
  description:
    "Learn about Cyan University's mission, vision, and commitment to excellence in education",
  openGraph: {
    title: "About Us | Cyan University",
    description:
      "Learn about Cyan University's mission, vision, and commitment to excellence in education",
    images: [
      {
        url: "/assets/about-page/about-banner.png",
        width: 1200,
        height: 630,
        alt: "About Cyan University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cyan University",
    description:
      "Learn about Cyan University's mission, vision, and commitment to excellence in education",
    images: ["/assets/about-page/about-banner.png"],
  },
};

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            About us
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            At Cyan University, we&apos;re on a mission to equip individuals
            with the tech skills they need to thrive in the digital age. Our
            courses, created by industry experts, are designed to meet the
            demands of today&apos;s fast-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className={styles.main__content}>
        <div className={styles.title}>
          <Image
            src={"/assets/icons/grad-hat-thick.png"}
            alt={"grad-hat"}
            width={61}
            height={61}
          />
          <h2
            className="font-libre-bodoni-700"
            style={{ fontSize: 36, lineHeight: "40px" }}
          >
            Cyan University
          </h2>
        </div>
        <div>
          <p
            style={{ maxWidth: 892, fontSize: 24, lineHeight: "40px" }}
            className="font-libre-bodoni-500"
          >
            Welcome to Cyan University, a premier online institution dedicated
            to providing cutting-edge, flexible, and accessible education in
            technology.{" "}
          </p>
        </div>
      </div>

      <div className={styles.main__content__about}>
        <Image
          width={774}
          height={707}
          alt="about__image"
          src={"/assets/about-image.png"}
        />
        <p className={`${styles.main__content__text} font-libre-bodoni-500`}>
          At Cyan University, we offer a range of degree programs and
          certification courses designed to equip students with practical,
          real-world expertise in areas such as software development,
          cybersecurity, data science, artificial intelligence, and more. Our
          fully online platform enables students from across Nigeria and around
          the globe to learn at their own pace, making education accessible
          regardless of location or schedule. <br />
          <br /> Whether you&apos;re looking to kickstart your career, upskill,
          or transition into the tech industry, Cyan University provides the
          resources, support, and community to help you succeed. Join us on this
          exciting journey as we shape the future of technology and education in
          Nigeria and beyond. Together, we&apos;ll build the future – one
          innovative mind at a time.
        </p>
      </div>

      <div className={styles.outline__container}>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/learn.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Learn Online
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Online coding in coding, AI, data science
          </p>
        </div>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/schedule.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Flexible schedule
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Study on your schedule, from your couch or a local hub
          </p>
        </div>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/time.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Hands on pratice
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Real-world projects because theory alone doesn&apos;t cut it
          </p>
        </div>
      </div>

      <div className={styles.vision}>
        <div>
          <h2
            className={`font-libre-bodoni-700`}
            style={{
              fontSize: "40px",
            }}
          >
            Our Vision
          </h2>
          <p className="font-libre-bodoni-500" style={{}}>
            Cyan University was founded with a single goal: to bridge the skills
            gap in the tech industry by offering flexible, industry-aligned
            courses. Our curriculum is continuously updated to reflect the
            latest advancements in technology and meet employer needs.
          </p>
        </div>

        <Image
          alt="vision-photo"
          src={"/assets/about-page/vision.png"}
          width={774}
          height={569}
        />
      </div>

      <div className={styles.reverse__vision}>
        <div>
          <h2
            className={`font-libre-bodoni-700`}
            style={{
              fontSize: "40px",
            }}
          >
            Our Mission
          </h2>
          <p className="font-libre-bodoni-500" style={{}}>
            Cyan University was founded with a single goal: to bridge the skills
            gap in the tech industry by offering flexible, industry-aligned
            courses. Our curriculum is continuously updated to reflect the
            latest advancements in technology and meet employer needs.
          </p>

          <button className={`${styles.waitlist} font-libre-bodoni-700`}>
            Join waitlist
            <Image
              alt="arrow-right"
              src={"/assets/icons/arr-right.png"}
              width={31}
              height={31}
            />
          </button>
        </div>

        <Image
          alt="vision-photo"
          src={"/assets/about-page/mission.png"}
          width={774}
          height={569}
        />
      </div>
    </div>
  );
}
