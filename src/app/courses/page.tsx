"use client";

import Image from "next/image";
import styles from "./courses.module.scss";
import { useState } from "react";

export default function Courses() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

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
            <div className={styles.header__controls}>
              {/* <button
                className={`${styles.filter__button} font-libre-bodoni-700`}
                onClick={toggleFilter}
              >
                Filter
                <Image
                  src="/assets/icons/filter.png"
                  alt="filter"
                  width={20}
                  height={20}
                />
              </button> */}
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

          <div className={styles.pagination}>
            <div className={styles.pagination__container}>
              <span className={styles.pagination__active}>1</span>
              <span>2</span>
              <Image
                alt="pagination-next"
                src="/assets/icons/next-paginate.png"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>

        {/* Filter Modal */}
        <div
          className={`${styles.filter__modal} ${
            isFilterOpen ? styles.open : ""
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleFilter();
            }
          }}
        >
          <div className={styles.filter__modal__content}>
            <div className={styles.filter__modal__header}>
              <h2 className={`${styles.title} font-libre-bodoni-700`}>
                Filter
              </h2>
              <button
                className={styles.filter__modal__close}
                onClick={toggleFilter}
              >
                <Image
                  src="/assets/icons/close.png"
                  alt="close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className={styles.filter__modal__body}>
              <div className={styles.search__bar}>
                <input
                  type="text"
                  name="search"
                  placeholder="Find your course"
                />
                <Image
                  alt="magnifying-glass"
                  src="/assets/magnifying-glass.png"
                  width={12.56}
                  height={12.56}
                />
              </div>

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
                    htmlFor={`on_campus`}
                    className={`${styles.checkbox__label} font-libre-bodoni-400`}
                  >
                    On Campus
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

        {/* Desktop Filter */}
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
                  id={`desktop-category-${index}`}
                  name={category}
                  className={styles.checkbox__input}
                />
                <label
                  htmlFor={`desktop-category-${index}`}
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
                id={`desktop-online`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`desktop-online`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                Online
              </label>
            </div>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`desktop-on_campus`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`desktop-on_campus`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                On Campus
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
                id={`desktop-graduate`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`desktop-graduate`}
                className={`${styles.checkbox__label} font-libre-bodoni-400`}
              >
                Graduate
              </label>
            </div>
            <div className={styles.checkbox__item}>
              <input
                type="checkbox"
                id={`desktop-undergraduate`}
                name={"range"}
                className={styles.checkbox__input}
              />
              <label
                htmlFor={`desktop-undergraduate`}
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
