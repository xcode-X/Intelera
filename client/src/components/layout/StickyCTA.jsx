import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        aria-label="Free Security Consultation"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#F97316] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition hover:scale-105 active:scale-100 glow-orange"
      >
        <span>Free Security Consultation</span>
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </Link>
    </motion.div>
  );
}
