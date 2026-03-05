import { motion } from 'framer-motion';
import { Award, Zap, Headphones } from 'lucide-react';

const points = [
  {
    text: 'Elite security talent',
    icon: Award,
    description: 'Our team brings years of hands-on experience in penetration testing, secure development, and compliance. We stay current with emerging threats and frameworks so you get actionable, up-to-date guidance.',
    details: ['Certified practitioners', 'Cross-industry experience', 'Clear, plain-language reports'],
    color: '#0EA5E9',
    gradient: 'from-[#0EA5E9] to-[#38BDF8]',
  },
  {
    text: 'Proven methodologies',
    icon: Zap,
    description: 'We use repeatable, risk-based approaches—from scoping and assessment through remediation and handover. Every engagement follows documented processes so outcomes are consistent and defensible.',
    details: ['Structured scoping', 'Phased remediation roadmaps', 'Runbooks and documentation'],
    color: '#7C3AED',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
  },
  {
    text: 'Continuous monitoring',
    icon: Headphones,
    description: 'Security is not a one-off project. We help you establish ongoing detection, response, and improvement so you can sustain controls and adapt as your environment and threats evolve.',
    details: ['SIEM and detection design', 'Incident response playbooks', 'Regular health checks'],
    color: '#F97316',
    gradient: 'from-[#F97316] to-[#FB923C]',
  },
];

const metrics = [
  { value: 98, label: 'Client satisfaction', suffix: '%', color: '#0EA5E9' },
  { value: 150, label: 'Projects delivered', suffix: '+', color: '#7C3AED' },
  { value: 24, label: 'Response time (hrs)', suffix: 'h', color: '#F97316' },
];

export default function WhyInteleraSection() {
  return (
    <section className="py-[var(--spacing-section)] relative overflow-hidden bg-stone-50">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full bg-[#E0F2FE] opacity-50 -translate-y-1/2 translate-x-1/4" aria-hidden />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#EDE9FE] opacity-50 translate-y-1/2 -translate-x-1/4" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-[#0EA5E9] font-semibold text-sm uppercase tracking-[0.2em] mb-4 whitespace-nowrap">
            Why Intelera
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.12] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Security Intelligence Meets{' '}
            <span className="text-[#7C3AED]">Engineering Excellence</span>
          </h2>
          <p className="mt-6 text-stone-600 text-lg leading-relaxed">
            We combine deep security expertise with modern engineering practices. Every solution is built for resilience, compliance, and long-term trust—and we document and hand over so your team can own and sustain it.
          </p>
        </motion.header>

        {/* Layout: large metrics row + value props below */}
        <div className="space-y-16">
          {/* Metrics — three large numbers in a row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="grid sm:grid-cols-3 gap-6 lg:gap-8"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 120, damping: 18 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="relative bg-white rounded-2xl p-8 border border-stone-200/80 shadow-[var(--shadow-card)] text-center overflow-hidden hover:shadow-[var(--shadow-hover)] hover:border-stone-300 transition-shadow duration-300 cursor-default"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold tabular-nums"
                  style={{ color: m.color, fontFamily: 'var(--font-display)' }}
                >
                  {m.value}{m.suffix}
                </div>
                <p className="mt-2 text-stone-600 font-medium">{m.label}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
                  style={{ backgroundColor: m.color }}
                  aria-hidden
                />
              </motion.div>
            ))}
          </motion.div>

          {/* What you get — individual premium cards with animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-semibold text-[#7C3AED] uppercase tracking-[0.2em]">
                What you get
              </p>
              <p className="mt-4 text-stone-600">
                When you work with Intelera, you get more than a report—you get a partner committed to measurable outcomes and long-term resilience.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {points.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, type: 'spring', stiffness: 100, damping: 20 }}
                    whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                    className="group relative h-full"
                  >
                    {/* Gradient border on hover */}
                    <div
                      className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`}
                    />
                    <div className="relative h-full rounded-2xl bg-white border border-stone-200/80 shadow-[var(--shadow-card)] p-6 sm:p-8 overflow-hidden transition-all duration-300 group-hover:shadow-[var(--shadow-hover)] group-hover:border-transparent">
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}99)` }}
                        aria-hidden
                      />
                      {/* Icon with animated ring */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mb-6"
                        style={{ backgroundColor: `${item.color}18` }}
                        whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                        transition={{ type: 'spring', stiffness: 300, rotate: { duration: 0.5 } }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} strokeWidth={1.8} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.text}
                      </h3>
                      <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {item.details.map((d, j) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 + j * 0.05 }}
                            className="flex items-center gap-3 text-sm text-stone-600"
                          >
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: item.color }}
                            />
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
