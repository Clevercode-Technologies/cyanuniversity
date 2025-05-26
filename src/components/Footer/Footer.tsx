"use client";

import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerAbout}>
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/logo/logo.png"
              width={300}
              height={120}
            />
          </Link>
          <p className={`${styles.footerAboutText} font-libre-bodoni-400`}>
            Unlock Digital Mastery Effortlessly! Explore and enhance your skills
            with our user-friendly platform.
          </p>
        </div>
        <div className={styles.footerLinksColumn}>
          <h2
            className={`${styles.footerLinksColumnTitle} font-libre-bodoni-600`}
          >
            Quick Links
          </h2>
          <ul>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/about-us">About Us</Link>
            </li>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/courses">Our Classes</Link>
            </li>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/blogs">Blog</Link>
            </li>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinksColumn}>
          <h2
            className={`${styles.footerLinksColumnTitle} font-libre-bodoni-600`}
          >
            Resources
          </h2>
          <ul>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/support">Support</Link>
            </li>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li
              className={`${styles.footerLinksColumnItem} font-libre-bodoni-400`}
            >
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerLinksColumn}>
          <h2
            className={`${styles.footerLinksColumnTitle} font-libre-bodoni-600`}
          >
            Social media
          </h2>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="facebook"
                  src="/assets/socials/facebook.png"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="instagram"
                  src="/assets/socials/instagram.png"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="twitter"
                  src="/assets/socials/twitter.png"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="linkedin"
                  src="/assets/socials/linkedin.png"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="youtube"
                  src="/assets/socials/youtube.png"
                  width={48}
                  height={48}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <h2 className={`${styles.footerBottomText} font-libre-bodoni-500`}>
          © 2024. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}
