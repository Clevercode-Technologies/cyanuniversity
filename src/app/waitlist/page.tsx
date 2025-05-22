"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import styles from "./waitlist.module.scss";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.waitlist}>
      <div className={styles.banner}>
        <div className={styles.banner__content}>
          <h1 className={`${styles.title} font-libre-bodoni-700`}>
            Join Our Waitlist
          </h1>
          <p className={`${styles.description} font-libre-bodoni-500`}>
            Be among the first to know when we launch. Sign up for our waitlist
            to get early access and exclusive benefits.
          </p>
        </div>
      </div>

      <div className={styles.form__container}>
        <div className={styles.form__wrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form__group}>
              <label htmlFor="fullName" className="font-libre-bodoni-500">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="font-libre-bodoni-400"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.form__group}>
              <label htmlFor="email" className="font-libre-bodoni-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-libre-bodoni-400"
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.form__group}>
              <label htmlFor="phone" className="font-libre-bodoni-500">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="font-libre-bodoni-400"
                placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.form__group}>
              <label htmlFor="course" className="font-libre-bodoni-500">
                Interested Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="font-libre-bodoni-400"
              >
                <option value="">Select a course</option>
                <option value="software-development">
                  Software Development
                </option>
                <option value="data-science">Data Science</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="artificial-intelligence">
                  Artificial Intelligence
                </option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <button
              type="submit"
              className={`${styles.submit__btn} font-libre-bodoni-700`}
            >
              Join Waitlist
              <Image
                src="/assets/icons/arr-right.png"
                alt="arrow-right"
                width={24}
                height={24}
                className={styles.arrow__icon}
              />
            </button>
          </form>

          <div className={styles.benefits}>
            <h2 className={`${styles.benefits__title} font-libre-bodoni-700`}>
              Benefits of Joining
            </h2>
            <ul className={styles.benefits__list}>
              <li className="font-libre-bodoni-500">
                <FaCheck className={styles.checkIcon} />
                Early access to course registration
              </li>
              <li className="font-libre-bodoni-500">
                <FaCheck className={styles.checkIcon} />
                Exclusive launch discounts
              </li>
              <li className="font-libre-bodoni-500">
                <FaCheck className={styles.checkIcon} />
                Priority support
              </li>
              <li className="font-libre-bodoni-500">
                <FaCheck className={styles.checkIcon} />
                Regular updates on launch progress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
