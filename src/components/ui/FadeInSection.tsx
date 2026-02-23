import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const FadeInSection = ({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
