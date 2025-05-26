"use client";

import styles from "./terms.module.scss";

export default function Terms() {
  return (
    <div className={styles.terms}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Terms & Conditions
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Last updated: March 2024
          </p>
        </div>
      </div>

      <div className={styles.terms__content}>
        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Agreement to Terms
          </h2>
          <p className="font-libre-bodoni-400">
            By accessing and using Cyan University&apos;s website and services,
            you agree to be bound by these Terms and Conditions. If you do not
            agree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Use of Services
          </h2>
          <div className={styles.list}>
            <ul className="font-libre-bodoni-400">
              <li>You must be at least 18 years old to use our services</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li>You agree to provide accurate and complete information</li>
              <li>You will not use our services for any illegal purposes</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Course Enrollment and Payment
          </h2>
          <div className={styles.list}>
            <ul className="font-libre-bodoni-400">
              <li>
                Course fees are non-refundable after 30 days of enrollment
              </li>
              <li>We reserve the right to modify course content and pricing</li>
              <li>
                Payment must be made in full before accessing course materials
              </li>
              <li>We offer installment payment options for selected courses</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Intellectual Property
          </h2>
          <p className="font-libre-bodoni-400">
            All content, including but not limited to course materials, videos,
            and assessments, is the exclusive property of Cyan University. You
            may not reproduce, distribute, or create derivative works without
            our permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Limitation of Liability
          </h2>
          <p className="font-libre-bodoni-400">
            Cyan University shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            or inability to use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Changes to Terms
          </h2>
          <p className="font-libre-bodoni-400">
            We reserve the right to modify these terms at any time. We will
            notify users of any material changes via email or through our
            website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Contact Information
          </h2>
          <p className="font-libre-bodoni-400">
            For any questions regarding these Terms & Conditions, please contact
            us at:
            <br />
            Email: legal@cyanuniversity.com
            <br />
            Phone: +234-123-456-7890
          </p>
        </section>
      </div>
    </div>
  );
}
