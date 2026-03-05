import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  FileCheck,
  Globe,
  Activity,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const services = [
  { Icon: Shield, title: 'Security Assessment', desc: 'Comprehensive vulnerability and penetration testing.', slug: 'security-assessment' },
  { Icon: Lock, title: 'Secure Development', desc: 'SDLC security, code review, and secure architecture.', slug: 'secure-development' },
  { Icon: FileCheck, title: 'Compliance & Audit', desc: 'GDPR, SOC 2, ISO 27001 readiness and audits.', slug: 'compliance' },
  { Icon: Globe, title: 'Web Application Security', desc: 'WAF, DDoS protection, and secure APIs.', slug: 'web-security' },
  { Icon: Activity, title: 'Security Monitoring', desc: 'SIEM, threat detection, and incident response.', slug: 'monitoring' },
  { Icon: GraduationCap, title: 'Security Training', desc: 'Developer and staff security awareness programs.', slug: 'training' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function ServicesSection() {
  return (
    <section className="py-[var(--spacing-section)] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-[0.2em] whitespace-nowrap">What We Offer</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            Enterprise Security Services
          </h2>
          <p className="mt-4 text-stone-600">
            End-to-end cybersecurity and secure web engineering tailored to your risk profile. From quick health checks to full program build-outs.
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
                className="group block h-full bg-stone-50 rounded-2xl p-6 border border-stone-200/80 hover:border-transparent hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] group-hover:bg-[#0EA5E9]/20 transition" aria-hidden="true">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-stone-900 group-hover:text-[#7C3AED] transition">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9] group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
