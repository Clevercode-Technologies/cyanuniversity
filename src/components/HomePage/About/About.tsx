"use client";

import Image from "next/image";
import styles from "./About.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Scroll progress within the containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start when container bottom hits viewport top, end when container top hits viewport bottom
  });

  // Parallax transformations
  // For left image: moves from 0 to -50px as container scrolls through viewport
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, -80]); // Slower, moves up
  // For right image: moves from 0 to 50px
  const rightImageY = useTransform(scrollYProgress, [0, 1], [0, 80]); // Slower, moves down

  const initialYLeft = -42;
  const initialYRight = 42;

  const handleWaitlistClick = () => {
    router.push("/waitlist");
  };

  return (
    <div ref={containerRef} className={styles.about__container}>
      <div className={styles.about__left}>
        {/* Left Image */}
        <motion.div
          className={styles.left__image} // Keep for base styling if any
          style={{ y: leftImageY }} // Apply parallax scroll effect
          initial={{ opacity: 0, y: initialYLeft - 50 }} // Start further up and transparent
          whileInView={{
            opacity: 1,
            y: initialYLeft, // Animate to base position
          }}
          viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is visible, repeat animation
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            alt="left_image"
            src={"/assets/about-section/about-left.png"}
            width={357}
            height={696}
            priority // Consider adding priority if LCP
          />
        </motion.div>

        <Image
          alt="about__logo"
          src={"/assets/about-section/logo-about.png"}
          width={130.07}
          height={122.84}
          className={styles.logo__about}
        />

        {/* Right Image */}
        <motion.div
          className={styles.right__image} // Keep for base styling if any
          style={{ y: rightImageY }} // Apply parallax scroll effect
          initial={{ opacity: 0, y: initialYRight + 50 }} // Start further down and transparent
          whileInView={{
            opacity: 1,
            y: initialYRight, // Animate to base position
          }}
          viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is visible, repeat animation
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            alt="right_image"
            src={"/assets/about-section/about-right.png"}
            width={357}
            height={696}
            priority
          />
        </motion.div>
      </div>
      <div className={styles.about__right}>
        <Image
          alt="draduation_hat"
          src={"/assets/about-section/grad-hat-about.png"}
          width={61}
          height={61}
        />
        <h2 className={`${styles.about__right__title} font-libre-bodoni-700`}>
          Cyan University
        </h2>
        <p
          className={`${styles.about__right__description} font-libre-bodoni-500`}
        >
          At Cyan University, we&apos;re on a mission to equip individuals with
          the tech skills they need to thrive in the digital age. Our courses,
          created by industry experts, are designed to meet the demands of
          today&apos;s fast-evolving tech landscape.
        </p>
        <p
          className={`${styles.about__right__description} font-libre-bodoni-500`}
        >
          We offer low monthly fees for our courses, making education accessible
          to all.
        </p>
        <button
          className={styles.about__right__button}
          onClick={handleWaitlistClick}
        >
          <p>Join Waitlist</p>
          <Image
            alt="arrow-right"
            src={"/assets/icons/arr-right.png"}
            width={24}
            height={24}
            className={styles.arrow__icon}
          />
        </button>
      </div>
    </div>
  );
}
