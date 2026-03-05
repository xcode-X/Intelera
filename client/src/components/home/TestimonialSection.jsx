import { motion } from 'framer-motion';
import { testimonialAvatars } from '../../lib/siteImages';

const testimonials = [
  {
    quote: "Intelera didn't just deliver a security assessment—they gave us a clear roadmap and stayed with us through implementation. Our compliance posture improved dramatically, and we now have confidence in our controls. The team is responsive, thorough, and speaks our language.",
    name: "David Okonkwo",
    role: "Chief Technology Officer",
    company: "Premier Trust Bank",
    sector: "Financial Services",
    location: "Lagos, Nigeria",
    initials: "DO",
    avatar: testimonialAvatars.david,
    accent: "sky",
    outcome: "Achieved SOC 2 readiness in 6 months",
  },
  {
    quote: "We needed a partner who could assess our web applications and train our developers. Intelera delivered both: actionable findings from the pentest and practical secure-coding workshops. Our vulnerability count dropped significantly within a year.",
    name: "Amara Johnson",
    role: "Head of Engineering",
    company: "HealthBridge Solutions",
    sector: "Healthcare",
    location: "Accra, Ghana",
    initials: "AJ",
    avatar: testimonialAvatars.amara,
    accent: "purple",
    outcome: "40% reduction in critical vulnerabilities",
  },
  {
    quote: "From scoping to final report, the process was transparent and well-documented. They helped us prioritize remediation and left us with runbooks we still use. I recommend them to any organization serious about security.",
    name: "Michael Tweh",
    role: "IT Director",
    company: "Liberia National Port Authority",
    sector: "Government",
    location: "Monrovia, Liberia",
    initials: "MT",
    avatar: testimonialAvatars.michael,
    accent: "orange",
    outcome: "Full audit trail for regulatory review",
  },
];

const accentStyles = {
  sky: { border: 'border-l-[#0EA5E9]', bar: 'bg-[#0EA5E9]', bg: 'bg-[#E0F2FE]/50', dot: 'bg-[#0EA5E9]', badge: 'bg-[#0EA5E9]/15 text-[#0EA5E9]' },
  purple: { border: 'border-l-[#7C3AED]', bar: 'bg-[#7C3AED]', bg: 'bg-[#EDE9FE]/50', dot: 'bg-[#7C3AED]', badge: 'bg-[#7C3AED]/15 text-[#7C3AED]' },
  orange: { border: 'border-l-[#F97316]', bar: 'bg-[#F97316]', bg: 'bg-[#FFEDD5]/50', dot: 'bg-[#F97316]', badge: 'bg-[#F97316]/15 text-[#F97316]' },
};

export default function TestimonialSection() {
  return (
    <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-[60%_40%_50%_50%_/50%_60%_40%_50%] bg-[#E0F2FE] opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-[30%_70%_70%_30%_/30%_30%_70%_70%] bg-[#EDE9FE] opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFEDD5]/30 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Testimonials</span>
          <h2 id="testimonials-heading" className="mt-4 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            What People Say
          </h2>
          <p className="mt-4 text-stone-600">
            Hear from leaders who partnered with Intelera to strengthen their security posture and build lasting resilience.
          </p>
        </motion.header>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const style = accentStyles[t.accent];
            return (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border border-stone-200/80 bg-white shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 ${i === 0 ? 'lg:col-span-1' : ''}`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${style.bar}`} />

                <div className="p-6 sm:p-8 pl-8">
                  {/* Quote mark */}
                  <span className="text-5xl font-serif text-stone-200 leading-none select-none" aria-hidden="true">"</span>

                  <blockquote className="mt-2 text-stone-700 leading-relaxed text-[15px] sm:text-base">
                    {t.quote}
                  </blockquote>

                  {/* Outcome badge */}
                  {t.outcome && (
                    <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${style.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {t.outcome}
                    </div>
                  )}

                  {/* Author */}
                  <footer className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-4">
                    <div className="avatar-wrapper w-14 h-14 rounded-xl overflow-hidden bg-stone-200 shrink-0 ring-2 ring-white shadow-md relative">
                      {t.avatar && (
                        <img
                          src={t.avatar}
                          alt={`${t.name}, ${t.role}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => e.currentTarget.closest('.avatar-wrapper')?.classList.add('avatar-failed')}
                        />
                      )}
                      <div
                        className={`absolute inset-0 flex items-center justify-center text-white font-bold text-sm ${t.avatar ? 'avatar-fallback' : ''}`}
                        style={{
                          background: t.accent === 'sky' ? 'linear-gradient(135deg, #0EA5E9, #38BDF8)' : t.accent === 'purple' ? 'linear-gradient(135deg, #7C3AED, #A78BFA)' : 'linear-gradient(135deg, #F97316, #FB923C)',
                        }}
                        aria-hidden={!!t.avatar}
                      >
                        {t.initials}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <cite className="not-italic font-semibold text-stone-900 block">{t.name}</cite>
                      <p className="text-sm text-stone-500">{t.role}</p>
                      <p className="text-sm text-stone-600 font-medium mt-0.5">{t.company}</p>
                      <p className="text-xs text-stone-400 mt-1">
                        {t.sector} · {t.location}
                      </p>
                    </div>
                  </footer>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-16 h-16 rounded-full opacity-10 ${style.dot}`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
