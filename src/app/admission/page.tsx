"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./admission.module.scss";

export default function Admission() {
  const [activeStep, setActiveStep] = useState(1);

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
            Plus our subscription plans keep learners engaged long after they&apos;ve
            completed their courses
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

      {/* <div>
        <Image
          alt="requirements-image"
          src={"/assets/requirements.png"}
          width={672}
          height={681}
        />

        <div className={styles.requirements__right}>
          <h2>Entry Requirements</h2>
          <span>Here is what you need to study at Cyan University</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            lorem viverra, gravida risus id, fringilla lacus. Nam luctus diam
            nec velit porttitor, nec efficitur velit tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Curabitur mollis urna ac ligula pharetra, nec posuere enim
            consequat. Praesent sodales fermentum sapien, at tincidunt sem
            faucibus eget. Donec sit amet erat vitae nulla volutpat viverra.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            lorem viverra, gravida risus id, fringilla lacus. Nam luctus diam
            nec velit porttitor, nec efficitur velit tincidunt.
          </p>
        </div>
      </div> */}
    </div>
  );
}
