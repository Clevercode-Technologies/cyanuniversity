import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./Menu.module.scss";
import { useRouter } from "next/navigation";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Nav = ({ toggleOpen }) => {
  const router = useRouter();

  const handleWaitlistClick = () => {
    router.push("/waitlist");
    toggleOpen();
  };

  return (
    <motion.ul className={styles.navList} variants={variants}>
      {itemIds.map((i) => (
        <MenuItem
          toggleOpen={toggleOpen}
          i={i}
          key={`${i}-${Math.random() * 100}`}
          onWaitlistClick={handleWaitlistClick}
        />
      ))}
    </motion.ul>
  );
};

const itemIds = [
  { path: "/", title: "Home", type: "link" },
  { path: "/courses", title: "Courses", type: "link" },
  { path: "/about-us", title: "About Us", type: "link" },
  { path: "/admission", title: "Admission", type: "link" },
  { path: "/blogs", title: "Blog", type: "link" },
  { path: "/contact", title: "Contact", type: "link" },
  { type: "auth" },
];
