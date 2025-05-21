"use client";

import styles from "./FiguresBanner.module.scss";
import { motion, animate } from "framer-motion";
import { useRef } from "react";

// Helper function to format number with commas
function formatNumberWithCommas(number: number): string {
  return Math.round(number).toLocaleString("en-US");
}

interface AnimatedFigureProps {
  targetValue: string;
  className?: string;
  animationDuration?: number;
}

const AnimatedFigure: React.FC<AnimatedFigureProps> = ({
  targetValue,
  className,
  animationDuration = 2,
}) => {
  const numericTarget = parseInt(targetValue.replace(/,/g, ""), 10);
  const nodeRef = useRef<HTMLParagraphElement>(null);

  return (
    <motion.p
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      onViewportEnter={() => {
        if (nodeRef.current && !isNaN(numericTarget)) {
          const node = nodeRef.current;
          animate(0, numericTarget, {
            duration: animationDuration,
            onUpdate(value) {
              node.textContent = formatNumberWithCommas(value);
            },
          });
        } else if (nodeRef.current && isNaN(numericTarget)) {
          nodeRef.current.textContent = targetValue;
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {isNaN(numericTarget) ? targetValue : "0"}
    </motion.p>
  );
};

export default function FiguresBanner() {
  const middleIndex = Math.floor(figures.length / 2);

  return (
    <div className={styles.figures__container}>
      {figures.map((figure, index) => (
        <div
          className={`${styles.figures__item} ${
            index === middleIndex ? styles.figures__item_middle : ""
          }`}
          key={figure.title}
        >
          <AnimatedFigure
            targetValue={figure.title}
            className={`${styles.figures__title} font-libre-bodoni-700`}
            animationDuration={2.5}
          />
          <p className={`${styles.figures__description} font-libre-bodoni-500`}>
            {figure.description}
          </p>
        </div>
      ))}
    </div>
  );
}

const figures: { title: string; description: string }[] = [
  {
    title: "15,000",
    description: "Undergraduate and Graduate students",
  },
  {
    title: "125,000",
    description: "In revenue",
  },
  {
    title: "20,000",
    description: "Start-ups to secure funding",
  },
];
