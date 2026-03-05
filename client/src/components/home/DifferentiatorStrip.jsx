import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const points = [
  'Scoped to your environment—no generic checklists',
  'Actionable reports and remediation roadmaps',
  'Handover and documentation so you can sustain results',
];

export default function DifferentiatorStrip() {
  return (
    <section className="py-16 bg-[#1E293B] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-[100%_0_0_0_/100%_0_0_0] bg-[#0EA5E9]/10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-[0_0_100%_0_/0_0_100%_0] bg-[#7C3AED]/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Why clients choose Intelera
            </h2>
            <p className="mt-3 text-stone-400 max-w-xl">
              We focus on outcomes you can measure and sustain—not one-off reports that sit on a shelf.
            </p>
          </div>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-stone-200"
              >
                <span className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold">{i + 1}</span>
                {p}
              </motion.li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-[#EA580C] transition"
          >
            Talk to us
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
