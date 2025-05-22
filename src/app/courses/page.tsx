"use client";

import Image from "next/image";
import styles from "./courses.module.scss";

export default function Courses() {
  return (
    <div className={styles.courses}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Courses
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Our full Accredited programs are recognized by both industry and
            academia, ensuring students receive high-quality, credible education
          </p>
        </div>
      </div>

      <div className={styles.main__content__container}>
        <div className={styles.left__container}>
          <div className={styles.section__header}>
            <h2 className={`${styles.section__title} font-libre-bodoni-700`}>
              We found 20 courses for you
            </h2>
            <select
              className="font-libre-bodoni-700"
              name="Sort by"
              id="sort_by"
            >
              <option value="Latest">Latest</option>
              <option value="Latest">Latest</option>
              <option value="Latest">Latest</option>
              <option value="Latest">Latest</option>
            </select>
          </div>

          <div className={styles.left__content}>
            {featuredCourses.map((course, index) => (
              <div className={styles.featured__card} key={index}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={384}
                  height={282}
                  className={styles.featured__card__image}
                />
                <div className={styles.featured__card__info}>
                  <div className={styles.featured__card__info__badge}>
                    <Image
                      src="/assets/featured/books.png"
                      alt="books"
                      width={25}
                      height={25}
                    />
                    <span
                      className={`${styles.totalLessons} font-libre-bodoni-400`}
                    >{`${course.totalLessons} lessons`}</span>
                  </div>
                  <div className={styles.featured__card__info__title}>
                    <h3
                      className={`${styles.featured__card__info__title__text} font-libre-bodoni-700`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`${styles.featured__card__info__title__description} font-libre-bodoni-400`}
                    >
                      {course.description}
                    </p>
                    <button
                      className={`${styles.featured__card__info__title__button} font-libre-bodoni-700`}
                    >
                      <Image
                        src="/assets/naira.png"
                        alt="arrow-right"
                        width={25}
                        height={25}
                      />

                      {"200,000"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#003340",
                  width: 41,
                  height: 41,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: 16,
                  lineHeight: "130%",
                }}
                className="font-libre-bodoni-700"
              >
                1
              </span>
              <span
                style={{
                  border: "1px solid #003340",
                  width: 41,
                  height: 41,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#00080A",
                  fontSize: 16,
                  lineHeight: "130%",
                }}
              >
                2
              </span>
              <Image
                alt="pagination-next"
                src="/assets/icons/next-paginate.png"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
        <div className={styles.right__container}>
          <h2 className={`${styles.title} font-libre-bodoni-700`}>Search</h2>
          <div className={styles.search__bar}>
            <input type="text" name="search" placeholder="Find your course" />
            <Image
              alt="magnifying-glass"
              src="/assets/magnifying-glass.png"
              width={12.56}
              height={12.56}
            />
          </div>
          <h2 className={`${styles.title} font-libre-bodoni-700`}>Filter</h2>
          <h3 className={`${styles.sub__title} font-libre-bodoni-500`}>
            Categories
          </h3>

          <div className={styles.checkbox__container}>
            {categories.map((category, index) => (
              <div className={styles.checkbox__item} key={index}>
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  name={category}
                  className={styles.checkbox__input}
                />
                <label
                  htmlFor={`category-${index}`}
                  className={`${styles.checkbox__label} font-libre-bodoni-400`}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>

          <h3 className={`${styles.sub__title} font-libre-bodoni-500`}>
            Location
          </h3>
          <div className={styles.checkbox__container}>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`online`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`online`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                Online
              </label>
            </div>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`on_campus`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`on_compus`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                On Compus
              </label>
            </div>
          </div>
          <h3 className={`${styles.sub__title} font-libre-bodoni-500`}>
            Programme level
          </h3>
          <div className={styles.checkbox__container}>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`graduate`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`graduate`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                Graduate
              </label>
            </div>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`undergraduate`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`undergraduate`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                Undergraduate
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  "Building AI agents",
  "Cybersecurity",
  "Business Analytics",
  "Digital Marketing",
  "Data Engineering",
  "Project Manager",
  "Data analysis with Power BI",
];

const featuredCourses = [
  {
    title: "Building AI agents",
    description:
      "Learn how to build websites and web applications using HTML, CSS, and JavaScript.",
    image: "/assets/featured/web-dev.png",
    totalLessons: 15,
  },
  {
    title: "Cybersecurity",
    description: "User Research, Wireframing, Prototyping, Adobe XD, Figma.",
    image: "/assets/featured/ux.png",
    totalLessons: 12,
  },
  {
    title: "Business Analytics",
    description:
      "Data Analysis, Data Visualization, Data Science, Machine Learning, Deep Learning.",
    image: "/assets/featured/data-science.png",
    totalLessons: 18,
  },
  {
    title: "Data Engineering",
    description:
      "Build native iOS and Android apps using React Native and Flutter frameworks.",
    image: "/assets/featured/web-dev.png",
    totalLessons: 14,
  },
  {
    title: "Project Management",
    description:
      "SEO, Social Media Marketing, Content Strategy, PPC, Analytics.",
    image: "/assets/featured/ux.png",
    totalLessons: 16,
  },
  {
    title: "Data analysis with Power BI",
    description:
      "Master Adobe Creative Suite, Typography, Color Theory, Branding, and Print Design.",
    image: "/assets/featured/data-science.png",
    totalLessons: 20,
  },
  {
    title: "Building AI agents",
    description:
      "Excel, SQL, PowerBI, Tableau, and business intelligence fundamentals.",
    image: "/assets/featured/web-dev.png",
    totalLessons: 13,
  },
  {
    title: "Cybersecurity",
    description:
      "Neural Networks, Deep Learning, Computer Vision, NLP, and Ethics.",
    image: "/assets/featured/ux.png",
    totalLessons: 22,
  },
  {
    title: "Project management",
    description:
      "Unity, Unreal Engine, 3D Modeling, Game Design, and Asset Creation.",
    image: "/assets/featured/data-science.png",
    totalLessons: 19,
  },
];
