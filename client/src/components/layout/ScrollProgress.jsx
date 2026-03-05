import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] rounded-r-full"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #0EA5E9 0%, #7C3AED 50%, #F97316 100%)',
      }}
    />
  );
}
