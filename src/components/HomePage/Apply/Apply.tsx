"use client";

import Image from "next/image";
import styles from "./Apply.module.scss";

export default function Apply() {
  return (
    <div className={styles.apply__container}>
      <Image
        className={styles.apply__image}
        alt="apply"
        src="/assets/apply.png"
        width={741}
        height={696}
      />
      <div className={styles.apply__content__container}>
        <div className={styles.apply__content}>
          <h2 className={`font-libre-bodoni-700`}>How to Apply</h2>

          <div className={styles.steps}>
            {/* Step 1 */}
            <div className={styles.step}>
              <span className="font-libre-bodoni-700">1</span>
              <hr />
              <p className="font-libre-bodoni-700">Choose Your Course</p>
            </div>
            {/* Step 2 */}
            <div className={styles.step}>
              <span className="font-libre-bodoni-700">2</span>
              <hr />
              <p className="font-libre-bodoni-700">Submit Your Application</p>
            </div>
            {/* Step 3 */}
            <div className={styles.step}>
              <span className="font-libre-bodoni-700">3</span>
              <hr />
              <p className="font-libre-bodoni-700">Complete Your Payment</p>
            </div>
            {/* Step 4 */}
            <div className={styles.step}>
              <span className="font-libre-bodoni-700">4</span>
              <hr />
              <p className="font-libre-bodoni-700">
                Begin Your Learning Journey
              </p>
            </div>
          </div>
          <p className={`font-libre-bodoni-700 ${styles.apply__content__text}`}>
            We believe in making tech education accessible. Learn more about our
            scholarship opportunities and financial aid options.
          </p>
        </div>
      </div>
    </div>
  );
}
