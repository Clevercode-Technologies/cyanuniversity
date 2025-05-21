"use client";

import {
  CoursesOutline,
  About,
  FiguresBanner,
  ChooseUs,
  Featured,
  SuccessStories,
  Apply,
  Trending,
  Loader,
} from "@/components";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader is visible for a minimum amount of time for the animation to play out
    // and give a perception of loading, even if the content loads faster.
    const minimumLoaderTime = 1500; // milliseconds, e.g., 1.5 seconds. Adjust as needed.

    const pageLoadPromise = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    const minimumTimePromise = new Promise<void>((resolve) => {
      setTimeout(resolve, minimumLoaderTime);
    });

    Promise.all([pageLoadPromise, minimumTimePromise]).then(() => {
      window.scrollTo(0, 0);
      setLoading(false);
    });

    // No explicit cleanup needed for Promises or a single `once: true` event listener for 'load'.
    // The setTimeout will clear itself if the component unmounts before it fires,
    // but Promise.all won't be affected by unmount in the same way a direct setTimeout in useEffect return would.
  }, []); // Runs once on mount

  return (
    <div className={`${styles.page} font-libre-bodoni-400`}>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>

      {/* Content is rendered but overlaid by Loader if loading is true */}
      <CoursesOutline />
      <About />
      <FiguresBanner />
      <ChooseUs />
      <Featured />
      <SuccessStories />
      <Apply />
      <Trending />
    </div>
  );
}
