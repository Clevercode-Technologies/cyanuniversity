"use client";

import { Navigation } from "@/components";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/courses") ||
      pathname.startsWith("/about-us") ||
      pathname.startsWith("/admission") ||
      pathname.startsWith("/blog") ||
      pathname.startsWith("/contact") ||
      pathname.startsWith("/waitlist") ? (
        <></>
      ) : (
        <div className={styles.header__container}>
          <div className={styles.header__nav}>
            <Navigation />
          </div>

          <div className={styles.header__content}>
            <div className={styles.minor__titleContainer}>
              <Image
                alt="graduation hat"
                src={"/assets/icons/grad-hat.png"}
                width={33}
                height={33}
              />
              <span className={`${styles.minorTitle} font-libre-bodoni-600`}>
                Unlock the next level of your career{" "}
              </span>
            </div>
            <div
              className={`${styles.major__textContainer} font-libre-bodoni-700`}
            >
              <span className={styles.excluded__text}>Empowering</span> the Next{" "}
              <br />
              Generation of Tech <br /> Leaders
            </div>
            <Link href="/waitlist">
              <button
                className={`${styles.register__button} font-libre-bodoni-700`}
              >
                <span>Join Waitlist</span>
                <Image
                  alt="right arrow"
                  src={"/assets/icons/arr-right.png"}
                  width={24}
                  height={24}
                  className={styles.arrow__icon}
                />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
