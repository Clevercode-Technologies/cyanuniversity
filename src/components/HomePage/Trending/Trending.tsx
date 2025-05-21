"use client";

import Image from "next/image";
import styles from "./Trending.module.scss";

export default function Trending() {
  return (
    <div className={styles.trending__container}>
      <h2 className={`font-libre-bodoni-700 ${styles.trending__title}`}>
        Tech Trends and Tips for Students
      </h2>
      <p className={`font-libre-bodoni-400 ${styles.trending__description}`}>
        Latest updates on tech innovations, career advice, and learning tips.
      </p>

      <div className={styles.trending__content}>
        <div className={styles.trending__content__left}>
          <Image
            alt=""
            src="/assets/trending/trend-1.png"
            width={575}
            height={458}
          />

          <div className={styles.date}>
            <Image
              alt="calendar"
              src="/assets/trending/icons/calendar.png"
              width={17}
              height={17}
            />
            <p className="font-libre-bodoni-500">Feb 23, 2024</p>
          </div>

          <h2 className="font-libre-bodoni-600">
            Top 10 Skills Every Aspiring Developer Should Learn in 2024
          </h2>

          <button className="font-libre-bodoni-700">
            Read more
            <Image
              alt="arrow"
              src="/assets/trending/icons/arrow.png"
              width={12.47}
              height={12.47}
            />
          </button>
        </div>
        {/* right side */}
        <div className={styles.trending__content__right}>
          <div className={styles.trending__content__right__item}>
            <Image
              alt=""
              src="/assets/trending/trend-2.png"
              width={340}
              height={274}
            />

            <div className={styles.trending__content__right__item__content}>
              <div className={styles.date}>
                <Image
                  alt="calendar"
                  src="/assets/trending/icons/calendar.png"
                  width={17}
                  height={17}
                />
                <p className="font-libre-bodoni-500">Feb 23, 2024</p>
              </div>

              <h2 className="font-libre-bodoni-600">
              How to Build a Portfolio That Stands Out
              </h2>

              <button className="font-libre-bodoni-700">
                Read more
                <Image
                  alt="arrow"
                  src="/assets/trending/icons/arrow.png"
                  width={12.47}
                  height={12.47}
                />
              </button>
            </div>
          </div>

          <div className={styles.trending__content__right__item}>
            <Image
              alt=""
              src="/assets/trending/trend-3.png"
              width={340}
              height={274}
            />

            <div className={styles.trending__content__right__item__content}>
              <div className={styles.date}>
                <Image
                  alt="calendar"
                  src="/assets/trending/icons/calendar.png"
                  width={17}
                  height={17}
                />
                <p className="font-libre-bodoni-500">Feb 23, 2024</p>
              </div>

              <h2 className="font-libre-bodoni-600">
              Why Cybersecurity Skills Are in High Demand Today
              </h2>

              <button className="font-libre-bodoni-700">
                Read more
                <Image
                  alt="arrow"
                  src="/assets/trending/icons/arrow.png"
                  width={12.47}
                  height={12.47}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className={`font-libre-bodoni-700 ${styles.trending__button}`}>
        View All
        <Image
          alt="arrow"
          src="/assets/icons/top-right-white.png"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
