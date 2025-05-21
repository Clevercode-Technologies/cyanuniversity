"use client";

import styles from "./blogs.module.scss";

export default function Blogs() {
  return (
    <div className={styles.blogs}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Blogs
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Stay updated with the latest insights, news, and trends in
            technology and education
          </p>
        </div>
      </div>
    </div>
  );
}
