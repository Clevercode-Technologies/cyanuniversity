import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Menu.module.scss";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, toggleOpen, onWaitlistClick }) => {
  const [open, setOpen] = React.useState(false);

  const getItemSpecificClassName = () => {
    switch (i.type) {
      case "auth":
        return styles.menuItemAuthType;
      case "demo":
        return styles.menuItemDemoType;
      case "link":
      default:
        return styles.menuItemLinkType;
    }
  };

  const renderContent = () => {
    if (i.type === "link") {
      return (
        <Link href={i.path} className={styles.menuLink}>
          {i.title}
        </Link>
      );
    } else if (i.type === "auth") {
      return (
        <button onClick={onWaitlistClick} className={styles.authButtonSignIn}>
          Join Waitlist
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`${styles.menuItem} ${getItemSpecificClassName()}`}
        onClick={() => i.type !== "auth" && toggleOpen()}
      >
        {renderContent()}
      </motion.li>
    </>
  );
};
