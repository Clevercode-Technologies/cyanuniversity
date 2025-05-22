"use client";

import Image from "next/image";
import styles from "./about.module.scss";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleWaitlistClick = () => {
    router.push("/waitlist");
  };

  return (
    <div className={styles.about}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            About us
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            At Cyan University, we&apos;re on a mission to equip individuals
            with the tech skills they need to thrive in the digital age. Our
            courses, created by industry experts, are designed to meet the
            demands of today&apos;s fast-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className={styles.main__content}>
        <div className={styles.title}>
          <Image
            src={"/assets/icons/grad-hat-thick.png"}
            alt={"grad-hat"}
            width={61}
            height={61}
          />
          <h2
            className="font-libre-bodoni-700"
            style={{ fontSize: 36, lineHeight: "40px" }}
          >
            Cyan University
          </h2>
        </div>
        <div>
          <p
            style={{ maxWidth: 892, fontSize: 24, lineHeight: "40px" }}
            className="font-libre-bodoni-500"
          >
            Welcome to Cyan University, a premier online institution dedicated
            to providing cutting-edge, flexible, and accessible education in
            technology.{" "}
          </p>
        </div>
      </div>

      <div className={styles.main__content__about}>
        <Image
          width={774}
          height={707}
          alt="about__image"
          src={"/assets/about-image.png"}
        />
        <p className={`${styles.main__content__text} font-libre-bodoni-500`}>
          At Cyan University, we offer a range of degree programs and
          certification courses designed to equip students with practical,
          real-world expertise in areas such as software development,
          cybersecurity, data science, artificial intelligence, and more. Our
          fully online platform enables students from across Nigeria and around
          the globe to learn at their own pace, making education accessible
          regardless of location or schedule. <br />
          <br /> Whether you&apos;re looking to kickstart your career, upskill,
          or transition into the tech industry, Cyan University provides the
          resources, support, and community to help you succeed. Join us on this
          exciting journey as we shape the future of technology and education in
          Nigeria and beyond. Together, we&apos;ll build the future – one
          innovative mind at a time.
        </p>
      </div>

      <div className={styles.outline__container}>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/learn.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Learn Online
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Online coding in coding, AI, data science
          </p>
        </div>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/schedule.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Flexible schedule
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Study on your schedule, from your couch or a local hub
          </p>
        </div>
        <div className={styles.outline__item}>
          <div>
            <Image
              alt="icon"
              src={"/assets/icons/time.png"}
              width={42}
              height={42}
            />
            <h3 className={`${styles.outline__title} font-libre-bodoni-700`}>
              Hands on pratice
            </h3>
          </div>
          <p className={`${styles.outline__excert} font-libre-bodoni-500`}>
            Real-world projects because theory alone doesn&apos;t cut it
          </p>
        </div>
      </div>

      <div className={styles.vision}>
        <div>
          <h2
            className={`font-libre-bodoni-700`}
            style={{
              fontSize: "40px",
            }}
          >
            Our Vision
          </h2>
          <p className="font-libre-bodoni-500" style={{}}>
            Cyan University was founded with a single goal: to bridge the skills
            gap in the tech industry by offering flexible, industry-aligned
            courses. Our curriculum is continuously updated to reflect the
            latest advancements in technology and meet employer needs.
          </p>
        </div>

        <Image
          alt="vision-photo"
          src={"/assets/about-page/vision.png"}
          width={774}
          height={569}
        />
      </div>

      <div className={styles.reverse__vision}>
        <div>
          <h2
            className={`font-libre-bodoni-700`}
            style={{
              fontSize: "40px",
            }}
          >
            Our Mission
          </h2>
          <p className="font-libre-bodoni-500" style={{}}>
            Cyan University was founded with a single goal: to bridge the skills
            gap in the tech industry by offering flexible, industry-aligned
            courses. Our curriculum is continuously updated to reflect the
            latest advancements in technology and meet employer needs.
          </p>

          <button
            className={`${styles.waitlist} font-libre-bodoni-700`}
            onClick={handleWaitlistClick}
          >
            Join waitlist
            <Image
              alt="arrow-right"
              src={"/assets/icons/arr-right.png"}
              width={31}
              height={31}
              className={styles.waitlistBtn}
            />
          </button>
        </div>

        <Image
          alt="vision-photo"
          src={"/assets/about-page/mission.png"}
          width={774}
          height={569}
        />
      </div>

      <Image
        alt="banner-section"
        src={"/banner-section.png"}
        width={1440}
        height={351}
        className={styles.banner__section}
      />

      <div className={styles.management}>
        <h2 className={"font-libre-bodoni-700"}>Meet our Management & Team</h2>

        <div className={styles.team__container}>
          {management.map((item, index) => (
            <div key={`${index}-team-card`} className={styles.team__card}>
              <Image
                alt="team-image"
                src={item.image}
                width={402}
                height={500}
              />

              <div className={styles.info}>
                <h3 className={"font-libre-bodoni-700 " + styles.name}>
                  {item.name}
                </h3>
                <p className={"font-libre-bodoni-400 " + styles.role}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.supporters}>
        <h2 className={`${styles.supporters__title} font-libre-bodoni-700`}>
          Our Supporters
        </h2>

        <div className={styles.logo__Carousel__container}>
          <div className={styles.logo__track}>
            {/* First set of logos */}
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-1.png"
                alt="Partner Logo 1"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-2.png"
                alt="Partner Logo 2"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-3.png"
                alt="Partner Logo 3"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-4.png"
                alt="Partner Logo 4"
                width={200}
                height={80}
              />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-1.png"
                alt="Partner Logo 1"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-2.png"
                alt="Partner Logo 2"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-3.png"
                alt="Partner Logo 3"
                width={200}
                height={80}
              />
            </div>
            <div className={styles.logo__slide}>
              <Image
                src="/assets/partners/logo-4.png"
                alt="Partner Logo 4"
                width={200}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const management: {
  name: string;
  role: string;
  image: string;
}[] = [
  {
    name: "Olaoluwa Olaiya",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
  {
    name: "David Adebayo",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
  {
    name: "Lucky Tunde",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
  {
    name: "Precious Osamuyi",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
  {
    name: "Asemota Asim",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
  {
    name: "Nathan Bassy",
    role: "Vice Chancellor",
    image: "/assets/team/team.png",
  },
];
