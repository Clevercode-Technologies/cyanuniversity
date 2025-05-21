"use client";

import Image from "next/image";
import styles from "./SuccessStories.module.scss";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function SuccessStories() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleStoryHover = (index: number) => {
    setActiveStoryIndex(index);
  };

  return (
    <div className={styles.successStories}>
      <div className={styles.successStories__heading}>
        <div className={styles.successStories__title}>
          <h2 className={`font-libre-bodoni-700`}>Student Success Stories</h2>
        </div>
        <div className={styles.successStories__description}>
          <p className={`font-libre-bodoni-500`}>
            Meet the graduates of Cyan University who have gone on to make an
            impact in the tech industry. From startups to multinational
            companies, our alumni are shaping the future of tech.
          </p>
        </div>
      </div>
      <div className={styles.successStories__stories}>
        {stories.map((story, index) => (
          <div
            key={index}
            className={`${styles.successStories__story} ${
              index === activeStoryIndex ? styles.storyItemIsActive : ""
            }`}
            onMouseEnter={() => handleStoryHover(index)}
          >
            <Image
              className={`${styles.storyImagePreview} ${
                index === activeStoryIndex ? styles.storyImageIsActive : ""
              }`}
              src={story.preview}
              alt={story.story}
              width={160}
              height={142}
            />
            <Image
              className={styles.frame}
              alt=""
              src={"/assets/stories/frame.png"}
              width={111}
              height={99}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <div className={styles.story__message}>
        <Image
          alt="quote"
          src={"/assets/stories/quote.png"}
          width={60}
          height={75}
        />
        {stories[activeStoryIndex] && (
          <div className={`font-libre-bodoni-700 ${styles.typewriterWrapper}`}>
            <Typewriter
              key={activeStoryIndex}
              options={{
                delay: 30,
                cursorClassName: styles.typewriterCursor,
                wrapperClassName: styles.typewriterText,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(stories[activeStoryIndex].story).start();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const stories: { preview: string; story: string }[] = [
  {
    preview: "/assets/stories/image6.png",
    story:
      "After completing the Full Stack Development program at Cyan University, I landed my dream job at Google. The hands-on projects and mentorship were invaluable in preparing me for real-world challenges.",
  },
  {
    preview: "/assets/stories/image7.png",
    story:
      "The AI & Machine Learning course transformed my career. Within 6 months of graduation, I co-founded an AI startup that's now helping healthcare providers improve patient outcomes.",
  },
  {
    preview: "/assets/stories/image8.png",
    story:
      "As a career switcher, I was nervous about entering tech. Cyan University's supportive environment and comprehensive curriculum gave me the confidence to excel. Now I'm a Senior Developer at Microsoft!",
  },
  {
    preview: "/assets/stories/image9.png",
    story:
      "The practical approach to learning at Cyan University was exactly what I needed. I went from zero coding experience to leading a development team at Amazon in just two years.",
  },
  {
    preview: "/assets/stories/image6.png",
    story:
      "The cybersecurity program at Cyan University opened doors I never imagined. I'm now working as a Security Architect at a Fortune 500 company, protecting critical infrastructure.",
  },
  {
    preview: "/assets/stories/image7.png",
    story:
      "Thanks to Cyan University's industry connections, I secured an internship that led to a full-time position at Meta. The career services team was instrumental in my success.",
  },
];
