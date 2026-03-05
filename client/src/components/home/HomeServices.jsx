import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Zap, Cloud, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Security Assessment', desc: 'Comprehensive vulnerability and penetration testing.', Icon: Shield, to: '/services/security-assessment' },
  { title: 'Secure Development', desc: 'Secure SDLC and code review for your applications.', Icon: Lock, to: '/services/secure-development' },
  { title: 'Compliance & Audit', desc: 'GDPR, ISO 27001, and industry compliance support.', Icon: FileCheck, to: '/services/compliance' },
  { title: 'Incident Response', desc: '24/7 detection, response, and recovery planning.', Icon: Zap, to: '/services/monitoring' },
  { title: 'Cloud Security', desc: 'Secure architecture for AWS, Azure, and hybrid cloud.', Icon: Cloud, to: '/services' },
  { title: 'Training & Awareness', desc: 'Security training for developers and staff.', Icon: GraduationCap, to: '/services/training' },
];

export default function HomeServices() {
  return (
    <section className="py-[var(--spacing-section)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Security Intelligence Meets <span className="gradient-text">Engineering Excellence</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            End-to-end cybersecurity and secure web engineering tailored for enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.Icon;
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-[var(--radius-card)] p-6 hover:shadow-[var(--shadow-glow)] border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-[#00D4FF]"><Icon className="w-10 h-10" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{item.desc}</p>
              <Link
                to={item.to}
                className="inline-flex items-center gap-2 text-[#00D4FF] font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
