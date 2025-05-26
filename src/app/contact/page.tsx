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
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="johndoe@gmail.com" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Title" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Type here..." />
          </div>

          <button type="submit">
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
        <div className={styles.right__container}>
          <p className={styles.excert}>
            Whatever your query, we can connect you to the right people who can
            help. You can contact us by phone or email, or you can fill out our
            online form
          </p>
          <div className={styles.row}>
            <div className={styles.column}>
              <Image
                src={"/assets/contact/phone.png"}
                alt={"contact-icon"}
                width={60}
                height={60}
              />
              <h2 className={styles.contact__titles}>Phone Number</h2>
              <p className={styles.icon__content}>+234-123-456-7890</p>
            </div>
            <div className={styles.column}>
              <Image
                src={"/assets/contact/mail.png"}
                alt={"contact-icon"}
                width={60}
                height={60}
              />
              <h2 className={styles.contact__titles}>Email Address</h2>
              <p className={styles.icon__content}>cyanuniversity@gmail.com</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Image
                src={"/assets/contact/location.png"}
                alt={"contact-icon"}
                width={60}
                height={60}
              />
              <h2 className={styles.contact__titles}>Address</h2>
              <p className={styles.icon__content}>cyanuniversity@gmail.com</p>
            </div>
            <div className={styles.column}>
              <Image
                src={"/assets/contact/whatsapp.png"}
                alt={"contact-icon"}
                width={60}
                height={60}
              />
              <h2 className={styles.contact__titles}>WhatsApp</h2>
              <p className={styles.icon__content}>+234-123-456-7890</p>
            </div>{" "}
          </div>

          <div className={styles.socials}>
            <h2 className={styles.socials__title}>Follow Us On Social Media</h2>
            <div className={styles.socials__wrapper}>
              <Image
                src={"/assets/contact/socials/facebook.png"}
                alt={"facebook"}
                width={40}
                height={40}
              />
              <Image
                src={"/assets/contact/socials/ig.png"}
                alt={"facebook"}
                width={40}
                height={40}
              />
              <Image
                src={"/assets/contact/socials/x.png"}
                alt={"facebook"}
                width={40}
                height={40}
              />
              <Image
                src={"/assets/contact/socials/linkedin.png"}
                alt={"facebook"}
                width={40}
                height={40}
              />
              <Image
                src={"/assets/contact/socials/youtube.png"}
                alt={"facebook"}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>

      {/* map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8207004.221759!2d3.378881770885918!3d9.006791514876344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e1!3m2!1sen!2sus!4v1748219937005!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        className={styles.map__view}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
