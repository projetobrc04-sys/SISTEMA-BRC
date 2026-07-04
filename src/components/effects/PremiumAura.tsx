import { motion, useReducedMotion } from "motion/react";

const beams = [
  { top: "8%", left: "6%", width: "42%", delay: 0 },
  { top: "28%", left: "44%", width: "52%", delay: 0.7 },
  { top: "66%", left: "18%", width: "36%", delay: 1.2 },
];

export default function PremiumAura() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="premium-aura" aria-hidden="true">
      <div className="premium-aura-radial" />
      {beams.map((beam) => (
        <motion.span
          className="premium-aura-beam"
          key={`${beam.top}-${beam.left}`}
          style={{ top: beam.top, left: beam.left, width: beam.width }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.12, 0.42, 0.16],
                  x: [0, 26, -8],
                  scaleX: [0.96, 1.08, 1],
                }
          }
          transition={{ duration: 8, delay: beam.delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}
      <motion.span
        className="premium-aura-orbit"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
