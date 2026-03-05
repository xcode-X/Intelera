import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-[var(--spacing-section)] relative overflow-hidden">
      <div className="absolute inset-0 bg-stone-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-[50%_50%_0_0_/100%_100%_0_0] bg-[#EDE9FE] opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-[60%_40%_50%_50%_/60%_60%_40%_40%] bg-[#E0F2FE] opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Protect Your Digital Infrastructure Today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-stone-600 text-lg max-w-xl mx-auto"
        >
          Schedule a confidential consultation. No obligation—just clarity on your security posture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-[var(--radius-button)] bg-[#F97316] text-white font-bold text-lg hover:bg-[#EA580C] transition glow-orange"
          >
            Schedule Confidential Consultation
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
