"use client";

import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Contact Us
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Get in touch with our admissions team and start your journey at Cyan
            University
          </p>
        </div>
      </div>

      <section>
        <form>
          <h3>Contact Us</h3>
          <h2>Get In Touch</h2>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Title" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea rows={5} placeholder="Type here..." />
          </div>

          <button>
            Send Now
            <Image
              src="/assets/admission/submit-arr.png"
              alt="arrow right"
              width={24}
              height={24}
              className={styles.button__icon}
            />
          </button>
        </form>
        <div></div>
      </section>
    </div>
  );
}
