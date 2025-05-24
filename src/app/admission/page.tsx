"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./admission.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Admission() {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Choose Your Course",
      description:
        "At Cyan University, we offer a range of degree programs and certification courses designed to equip students with practical, real-world expertise in areas such as software development, cybersecurity, data science, artificial intelligence, and more. Our fully online platform enables students from across Nigeria and around the globe to learn at their own pace, making education accessible regardless of location or schedule.",
    },
    {
      id: 2,
      title: "Submit Your Application",
      description:
        "Complete our streamlined application process. Provide your educational background, personal information, and any relevant experience. Our admissions team will review your application and guide you through the next steps of your educational journey.",
    },
    {
      id: 3,
      title: "Complete Your Payment",
      description:
        "Choose from our flexible payment options to fund your education. We offer various payment plans and financial aid options to make your education accessible. Our secure payment system ensures a smooth transaction process.",
    },
    {
      id: 4,
      title: "Begin Your Learning Journey",
      description:
        "Once enrolled, you'll gain access to our comprehensive learning platform. Connect with instructors, join study groups, and start your path to success. Our support team will be with you every step of the way.",
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "To join Cyan University, you'll need a high school diploma or equivalent, satisfactory standardized test scores, and proof of English proficiency for international students. We also consider academic achievements and extracurricular activities.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application process typically takes 2-4 weeks from submission to decision. We review applications on a rolling basis, and you'll be notified of your admission status via email.",
    },
    {
      question: "What payment options are available?",
      answer:
        "We offer flexible payment plans including monthly installments, semester payments, and annual payments. We also provide various financial aid options and scholarships for eligible students.",
    },
    {
      question: "Can I transfer credits from another institution?",
      answer:
        "Yes, we accept transfer credits from accredited institutions. Each transfer request is evaluated individually, and credits must be relevant to your chosen program of study.",
    },
    {
      question: "What support services are available for students?",
      answer:
        "We provide comprehensive support including academic advising, career counseling, technical support, and 24/7 access to our learning platform. Our dedicated support team is always ready to assist you.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.admission}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Admission
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            At Cyan University, we&apos;re on a mission to equip individuals
            with the tech skills they need to thrive in the digital age. Our
            courses, created by industry experts, are designed to meet the
            demands of today&apos;s fast-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className={styles.intro__container}>
        <div className={styles.intro}>
          <Image
            alt="intro-stripes"
            src={"/assets/stripes.png"}
            width={38}
            height={38}
          />
          <h3 className="font-libre-bodoni-500">
            We offer monthly fees for our courses, making education accessible
            to all
          </h3>
        </div>
        <div className={styles.intro}>
          <Image
            alt="intro-stripes"
            src={"/assets/stripes.png"}
            width={38}
            height={38}
          />
          <h3 className="font-libre-bodoni-500">
            Corporate training programs are a key revenue stream, ensuring that
            businesses get the skilled workforce they need
          </h3>
        </div>
        <div className={styles.intro}>
          <Image
            alt="intro-stripes"
            src={"/assets/stripes.png"}
            width={38}
            height={38}
          />
          <h3 className="font-libre-bodoni-500">
            Plus our subscription plans keep learners engaged long after
            they&apos;ve completed their courses
          </h3>
        </div>
      </div>

      <section>
        <div className={styles.steps__container}>
          <div className={styles.steps}>
            <h2 className="font-libre-bodoni-700">
              Earn the degree that will unlock the career you want.
            </h2>

            {steps.map((step) => (
              <div
                key={step.id}
                className={`${styles.step} ${
                  activeStep === step.id
                    ? styles.active__step
                    : styles.inactive__step
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <span className="font-libre-bodoni-700">{step.id}</span>
                <p className="font-libre-bodoni-500">{step.title}</p>
              </div>
            ))}
          </div>

          <div className={styles.step__value}>
            <span className="font-libre-bodoni-500">Step {activeStep}</span>
            <h2 className="font-libre-bodoni-700">
              {steps[activeStep - 1].title}
            </h2>
            <p className="font-libre-bodoni-500">
              {steps[activeStep - 1].description}
            </p>
          </div>
        </div>
      </section>

      <div className={styles.entry}>
        <Image
          alt="requirements-image"
          src={"/assets/requirements.png"}
          width={672}
          height={681}
          className={styles.entry__image}
        />

        <div className={styles.requirements__right}>
          <h2 className={`${styles.req__title} font-libre-bodoni-700`}>
            Entry Requirements
          </h2>
          <span className={`${styles.req__excert} font-libre-bodoni-400`}>
            Here is what you need to study at Cyan University
          </span>
          <p className={`${styles.req__desc} font-libre-bodoni-500`}>
            To join our vibrant academic community at Cyan University,
            you&apos;ll need to meet our standard entry requirements. This
            includes a high school diploma or equivalent qualification, along
            with satisfactory scores in relevant standardized tests. We also
            consider your academic achievements, extracurricular activities, and
            personal statement in our holistic review process.
            <br />
            <br />
            For international students, we require proof of English language
            proficiency through recognized tests like TOEFL or IELTS.
            Additionally, you&apo;ll need to provide official transcripts,
            letters of recommendation, and complete our application form. Our
            admissions team is here to guide you through this process and answer
            any questions you may have about meeting these requirements.
          </p>
        </div>
      </div>

      <div className={styles.enroll}>
        <h2 className={`${styles.title} font-libre-bodoni-700`}>Enroll Now</h2>

        <Image
          alt={"enroll_image"}
          src={"/assets/admission/enroll-section.png"}
          height={893}
          width={1364}
          className={styles.enroll__image}
        />

        <div className={styles.erollment__form}>
          <h2 className={`${styles.title__form} font-libre-bodoni-700`}>
            Application form
          </h2>

          <div className={styles.form__row}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.form__input}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={styles.form__input}
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.form__input}
            />
            <input
              type="text"
              placeholder="Address"
              className={styles.form__input}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className={styles.form__input}
            />
            <select className={styles.form__input}>
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="text"
              placeholder="Country"
              className={styles.form__input}
            />
            <input
              type="text"
              placeholder="City"
              className={styles.form__input}
            />
            <textarea
              placeholder="Tell us about yourself and why you want to join Cyan University"
              className={styles.form__textarea}
            ></textarea>
            <button className={styles.enroll__button}>
              Enroll Now
              <Image
                src="/assets/admission/submit-arr.png"
                alt="arrow right"
                width={24}
                height={24}
                className={styles.button__icon}
              />
            </button>
          </div>
        </div>
      </div>

      <section className={styles.faqs__container}>
        <h2 className={`${styles.faqs__title} font-libre-bodoni-700`}>
          Frequently Asked Questions
        </h2>
        <div className={styles.direct__wrapper}>
          <div className={styles.questions__answers}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={styles.faq__item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  className={`${styles.faq__question} ${
                    openFaq === index ? styles.active : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className={styles.faq__icon}
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      className={styles.faq__answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className={styles.direct__mail}>
            <Image
              alt={"chat"}
              src={"/assets/admission/chat.png"}
              width={100}
              height={100}
            />
            <h3 className={styles.direct__mail__title}>
              Do you have more enquiries?
            </h3>
            <p className={styles.message__direct}>
              Whatever your query, we can connect you to the right people who
              can help. You can contact us by phone or email, or you can fill
              out our online form
            </p>

            <button className={styles.shoot__btn}>
              Shoot a direct mail
              <Image
                src="/assets/admission/submit-arr.png"
                alt="arrow right"
                width={24}
                height={24}
                className={styles.button__icon}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
