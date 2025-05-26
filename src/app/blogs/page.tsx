"use client";

import Image from "next/image";
import styles from "./blog.module.scss";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Skills Every Aspiring Developer Should Learn in 2024",
      date: "Feb 23, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "Discover the essential programming languages, frameworks, and tools that will shape the future of software development.",
    },
    {
      id: 2,
      title: "The Rise of AI in Education: Transforming Learning Experiences",
      date: "Feb 20, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "How artificial intelligence is revolutionizing personalized learning and student engagement in modern education.",
    },
    {
      id: 3,
      title: "Cybersecurity Essentials: Protecting Your Digital Future",
      date: "Feb 18, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "Learn about the fundamental security practices every tech professional needs to know in today's digital landscape.",
    },
    {
      id: 4,
      title: "Data Science Career Path: From Beginner to Professional",
      date: "Feb 15, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "A comprehensive guide to building a successful career in data science, from foundational skills to advanced techniques.",
    },
    {
      id: 5,
      title: "Cloud Computing: The Future of Business Infrastructure",
      date: "Feb 12, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "Understanding how cloud technologies are reshaping business operations and creating new opportunities.",
    },
    {
      id: 6,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      date: "Feb 10, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "Exploring the diverse applications of blockchain technology across various industries.",
    },
    {
      id: 7,
      title: "Mobile App Development: Trends and Best Practices",
      date: "Feb 8, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "Stay ahead of the curve with the latest trends and best practices in mobile app development.",
    },
    {
      id: 8,
      title: "The Impact of Remote Work on Tech Education",
      date: "Feb 5, 2024",
      image: "/assets/trending/trend-1.png",
      excerpt:
        "How remote work is influencing the way we learn and teach technology skills in the digital age.",
    },
  ];

  return (
    <div className={styles.blog}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h2 className={`${styles.banner__title} font-libre-bodoni-700`}>
            Blogs
          </h2>
          <p className={`${styles.banner__description} font-libre-bodoni-500`}>
            Tech Trends and Tips for Students
          </p>
        </div>
      </div>

      <h3 className={`${styles.page__title} font-libre-bodoni-400`}>
        Latest updates on tech innovations, career advice, and learning tips.
      </h3>

      <div className={styles.blog__post__wrapper}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.trending__content__left}>
            <Image alt={post.title} src={post.image} width={575} height={458} />

            <div className={styles.date}>
              <Image
                alt="calendar"
                src="/assets/trending/icons/calendar.png"
                width={17}
                height={17}
              />
              <p className="font-libre-bodoni-500">{post.date}</p>
            </div>

            <h2 className="font-libre-bodoni-600">{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <button className="font-libre-bodoni-700">
              Read more
              <Image
                alt="arrow"
                src="/assets/trending/icons/arrow.png"
                width={12.47}
                height={12.47}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
  );
}
