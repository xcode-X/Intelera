import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  FileCheck,
  Cloud,
  Activity,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { defaultServices } from '../../lib/servicesData';

const iconMap = {
  'security-assessment': Shield,
  'secure-development': Lock,
  'compliance': FileCheck,
  'monitoring': Activity,
  'cloud-security': Cloud,
  'training': GraduationCap,
};

const services = defaultServices.map(s => ({
  ...s,
  Icon: iconMap[s.slug] || Shield,
  desc: s.shortDescription
}));

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function ServicesSection() {
  return (
    <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-br from-[#0EA5E9]/5 to-[#7C3AED]/5 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            Security Intelligence Meets <span className="gradient-text">Engineering Excellence</span>
          </h2>
          <p className="mt-6 text-stone-600 text-lg leading-relaxed">
            End-to-end cybersecurity and secure web engineering tailored to your risk profile. We combine deep technical expertise with modern engineering practices.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ Icon, ...s }) => (
            <motion.div
              key={s.slug}
              variants={item}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group block h-full bg-stone-50 rounded-2xl p-8 border border-stone-200/80 hover:border-transparent hover:shadow-[var(--shadow-hover)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-12 bg-[#0EA5E9] group-hover:h-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-[#0EA5E9]/10 text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-300" aria-hidden="true">
                  <Icon className="w-7 h-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-stone-900 group-hover:text-[#7C3AED] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-stone-600 leading-relaxed text-[15px] group-hover:text-stone-700 transition-colors">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F97316] group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
