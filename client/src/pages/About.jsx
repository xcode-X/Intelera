import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Shield, Handshake, BarChart3, Search, PencilRuler, Cog, Activity } from 'lucide-react';
import { aboutTeamImage } from '../lib/siteImages';

const timeline = [
  { year: '2020', title: 'Foundation', desc: 'Intelera was founded in Monrovia with a focus on secure web engineering and helping local businesses harden their digital infrastructure. Our first engagements centered on application security and secure deployment practices.', color: '#0EA5E9' },
  { year: '2022', title: 'Enterprise expansion', desc: 'We launched formal enterprise security assessment and compliance readiness services. We supported our first financial and healthcare clients through gap assessments and remediation roadmaps.', color: '#7C3AED' },
  { year: '2024', title: 'Regional leader', desc: 'Recognized as a leading cybersecurity partner across the region, we now serve clients in multiple sectors with end-to-end security programs, from discovery through ongoing monitoring and defense.', color: '#F97316' },
];

const values = [
  { title: 'Mission', text: 'To empower organizations with intelligent security solutions that protect data, build trust, and enable growth. We believe strong security is a business enabler, not a bottleneck.', color: '#7C3AED', icon: Target },
  { title: 'Vision', text: 'A world where every digital infrastructure is resilient, compliant, and engineered for security by default. We work toward that future one engagement at a time.', color: '#0EA5E9', icon: Eye },
];

const principles = [
  { title: 'Transparency', desc: 'Clear findings, plain-language reports, and no hidden surprises.', icon: Shield },
  { title: 'Partnership', desc: 'We work alongside your team so knowledge stays in-house.', icon: Handshake },
  { title: 'Outcomes', desc: 'We measure success by risk reduction and your ability to sustain controls.', icon: BarChart3 },
];

const methodologySteps = [
  { step: 'Assess', desc: 'Discovery, scoping, and risk-based assessment.', icon: Search, color: '#0EA5E9' },
  { step: 'Design', desc: 'Architecture and remediation roadmap.', icon: PencilRuler, color: '#7C3AED' },
  { step: 'Implement', desc: 'Phased execution and documentation.', icon: Cog, color: '#F97316' },
  { step: 'Monitor', desc: 'Ongoing detection and improvement.', icon: Activity, color: '#0EA5E9' },
];

const stats = [
  { value: '4+', label: 'Years in operation' },
  { value: '150+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '24h', label: 'Typical response time' },
];

export default function About() {
  return (
    <div className="pt-28 bg-white min-h-screen">
      {/* Hero — full impact */}
      <section className="relative overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#F97316]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="inline-block text-[#0EA5E9] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                About Intelera
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.08] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Security Intelligence.{' '}
                <span className="text-[#7C3AED]">Engineering Excellence.</span>
              </h1>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                We are a cybersecurity and secure web engineering company based in Monrovia, Liberia. Our team combines deep technical expertise with a commitment to protecting the digital assets of businesses worldwide—whether you are a startup, a regulated enterprise, or a government body.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                We don’t just point out risks; we help you fix them, document them, and maintain them. That’s why our clients stay with us for the long term.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-[#EA580C] shadow-lg shadow-orange-200/40 transition"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#7C3AED]/20" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200/60 aspect-[4/3] max-h-[420px]">
                <img src={aboutTeamImage} alt="Intelera team collaboration" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-[600px] h-[300px] rounded-full bg-[#0EA5E9] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                <div className="mt-1 text-sm text-stone-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision — premium cards */}
      <section className="py-[var(--spacing-section)] bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Purpose</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Mission & Vision
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: v.color }} />
                  <div className="p-8 pl-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${v.color}18` }}>
                      <Icon className="w-7 h-7" style={{ color: v.color }} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)', color: v.color }}>{v.title}</h3>
                    <p className="mt-4 text-stone-600 leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles — what we stand for */}
      <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#EDE9FE] opacity-40 -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-[0.2em]">Values</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              What we stand for
            </h2>
            <p className="mt-4 text-stone-600">The principles that guide every engagement and decision we make.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl bg-stone-50 border border-stone-200/80 p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:border-[#0EA5E9]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-[#0EA5E9]" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                  <p className="mt-3 text-stone-600 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey timeline — visual */}
      <section className="py-[var(--spacing-section)] bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-[0.2em]">Story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Our journey
            </h2>
            <p className="mt-4 text-stone-600 max-w-xl">From a small team in Monrovia to a trusted partner for enterprises across sectors.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0EA5E9] via-[#7C3AED] to-[#F97316] rounded-full" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20 sm:pl-24 py-10 first:pt-0"
                >
                  <div
                    className="absolute left-4 sm:left-6 w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="bg-white rounded-2xl border border-stone-200/80 shadow-[var(--shadow-card)] p-6 sm:p-8 hover:shadow-[var(--shadow-hover)] hover:border-stone-300 transition-all duration-300">
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: item.color }}>{item.year}</span>
                    <h3 className="mt-2 text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="mt-4 text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E0F2FE] opacity-50 translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Approach</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Our methodology
            </h2>
            <p className="mt-4 text-stone-600 max-w-2xl">A repeatable, security-first approach we apply across assessments, design, implementation, and ongoing defense.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl bg-stone-50 border border-stone-200/80 p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:border-stone-300 transition-all duration-300"
                >
                  <span className="absolute top-4 right-4 text-4xl font-bold text-stone-200/80" style={{ fontFamily: 'var(--font-display)' }}>0{i + 1}</span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${m.color}18` }}>
                    <Icon className="w-6 h-6" style={{ color: m.color }} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>{m.step}</h3>
                  <p className="mt-2 text-sm text-stone-500">{m.desc}</p>
                  {i < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2 bg-stone-200" aria-hidden />
                  )}
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] font-semibold hover:bg-[#0EA5E9]/20 transition">
              See our services in detail
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F97316]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to strengthen your security?
          </h2>
          <p className="mt-4 text-stone-400">
            Tell us about your environment and goals. We’ll recommend the right starting point.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 transition"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  );
}
