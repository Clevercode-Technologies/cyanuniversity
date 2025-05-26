"use client";

import Image from "next/image";
import styles from "./support.module.scss";

export default function Support() {
  return (
    <div className={styles.support}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Support Center
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            We&apos;re here to help you succeed in your learning journey
          </p>
        </div>
      </div>

      <div className={styles.support__content}>
        <section className={styles.contact__section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Contact Support
          </h2>
          <form className={styles.contact__form}>
            <div className={styles.form__group}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe your issue..."
              />
            </div>
            <button
              type="submit"
              className={`${styles.submit__button} font-libre-bodoni-700`}
            >
              Send Message
              <Image
                src="/assets/admission/submit-arr.png"
                alt="arrow right"
                width={24}
                height={24}
                className={styles.button__icon}
              />
            </button>
          </form>
        </section>

        <section className={styles.faq__section}>
          <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faq__list}>
            <div className={styles.faq__item}>
              <h3 className="font-libre-bodoni-600">
                How do I enroll in a course?
              </h3>
              <p className="font-libre-bodoni-400">
                You can enroll in any course by visiting the course page and
                clicking the &quot;Enroll Now&quot; button. Follow the
                registration process and complete the payment to start learning.
              </p>
            </div>
            <div className={styles.faq__item}>
              <h3 className="font-libre-bodoni-600">
                What payment methods do you accept?
              </h3>
              <p className="font-libre-bodoni-400">
                We accept various payment methods including credit/debit cards,
                PayPal, and bank transfers. All payments are secure and
                encrypted.
              </p>
            </div>
            <div className={styles.faq__item}>
              <h3 className="font-libre-bodoni-600">Can I get a refund?</h3>
              <p className="font-libre-bodoni-400">
                Yes, we offer a 30-day money-back guarantee if you&apos;re not
                satisfied with your course. Contact our support team to process
                your refund.
              </p>
            </div>
            <div className={styles.faq__item}>
              <h3 className="font-libre-bodoni-600">
                How do I access my course materials?
              </h3>
              <p className="font-libre-bodoni-400">
                Once enrolled, you can access all course materials through your
                student dashboard. Materials are available 24/7 and can be
                downloaded for offline access.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
