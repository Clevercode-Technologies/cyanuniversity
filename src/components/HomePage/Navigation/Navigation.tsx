"use client";

import Image from "next/image";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const handleWaitlistClick = () => {
    router.push("/waitlist");
  };

  return (
    <>
      <div className={styles.navigation__container}>
        <Image
          className={styles.navigation__logo}
          src="/assets/logo/logo.png"
          alt="logo"
          width={100}
          height={100}
        />

        <ul className={styles.navigation__list}>
          {links.map((link) => (
            <li className={styles.navigation__item} key={link.href}>
              <Link href={link.href} className={styles.navigation__link}>
                {link.label}
                <Image
                  className={styles.navigation__icon}
                  src="/assets/icons/top-right-dark.png"
                  alt="arrow-right"
                  width={12.47}
                  height={12.47}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.navigation__button} font-libre-bodoni-700`}
          onClick={handleWaitlistClick}
        >
          <span>Join Waitlist</span>
          <Image
            src="/assets/icons/top-right-white.png"
            alt="arrow-right"
            width={24}
            height={24}
          />
        </button>
      </div>

      <div className={styles.mobileMenu}>
        <Image
          className={styles.navigation__logo}
          src="/assets/logo/logo.png"
          alt="logo"
          width={150}
          height={150}
        />

        <MobileNavigation />
      </div>
    </>
  );
}

const links: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Admission",
    href: "/admission",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
