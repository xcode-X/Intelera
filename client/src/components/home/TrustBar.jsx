import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '24hr', label: 'Avg. response time' },
  { value: '12+', label: 'Industries served' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#0EA5E9]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#7C3AED]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <span className="block text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {s.value}
              </span>
              <span className="block mt-1 text-sm text-stone-400 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
