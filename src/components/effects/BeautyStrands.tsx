import { motion, useReducedMotion } from "motion/react";

const strands = [
  "M12 126 C78 14 158 24 214 106 S342 196 430 78",
  "M20 164 C96 78 166 92 226 150 S350 220 438 132",
  "M72 212 C142 126 222 138 284 188 S380 254 452 190",
];

export default function BeautyStrands() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="beauty-strands" aria-hidden="true">
      <svg className="beauty-strands-svg" viewBox="0 0 464 260" fill="none" preserveAspectRatio="xMidYMid slice">
        {strands.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            pathLength={reduceMotion ? 1 : 0}
            animate={reduceMotion ? undefined : { pathLength: 1, opacity: [0.18, 0.72, 0.34] }}
            transition={{ duration: 1.2 + index * 0.25, delay: index * 0.18, ease: "easeOut" }}
            className={`beauty-strand beauty-strand-${index + 1}`}
          />
        ))}
      </svg>
      <div className="beauty-strands-glow" />
    </div>
  );
}