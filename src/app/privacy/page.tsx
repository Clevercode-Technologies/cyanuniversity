"use client";

import styles from "./privacy.module.scss";

export default function Privacy() {
  return (
    <div className={styles.privacy}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Privacy Policy
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Last updated: March 2024
          </p>
        </div>
      </div>

      <div className={styles.privacy__content}>
        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Introduction
          </h2>
          <p className="font-libre-bodoni-400">
            At Cyan University, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website and use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Information We Collect
          </h2>
          <div className={styles.list}>
            <h3 className="font-libre-bodoni-600">Personal Information</h3>
            <ul className="font-libre-bodoni-400">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Payment information</li>
              <li>Educational background</li>
            </ul>

            <h3 className="font-libre-bodoni-600">Usage Information</h3>
            <ul className="font-libre-bodoni-400">
              <li>Course progress and completion</li>
              <li>Learning preferences</li>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            How We Use Your Information
          </h2>
          <div className={styles.list}>
            <ul className="font-libre-bodoni-400">
              <li>To provide and maintain our services</li>
              <li>To process your payments and enrollments</li>
              <li>To send you important updates and notifications</li>
              <li>To improve our courses and user experience</li>
              <li>To communicate with you about your account</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Data Security
          </h2>
          <p className="font-libre-bodoni-400">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Your Rights
          </h2>
          <div className={styles.list}>
            <ul className="font-libre-bodoni-400">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Contact Us
          </h2>
          <p className="font-libre-bodoni-400">
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            Email: privacy@cyanuniversity.com
            <br />
            Phone: +234-123-456-7890
          </p>
        </section>
      </div>
    </div>
  );
}
