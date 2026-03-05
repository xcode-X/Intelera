import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import api from '../../lib/api';
import { caseStudyImages } from '../../lib/siteImages';

const placeholderCases = [
  {
    _id: '1',
    title: 'Financial Services Security Overhaul',
    category: 'Compliance',
    image: caseStudyImages.financial,
    slug: 'financial-security',
    excerpt: 'A regional bank needed to close compliance gaps and harden legacy systems ahead of a SOC 2 audit.',
    resultSnippet: 'SOC 2 readiness in 6 months',
    metrics: [{ label: 'Vulnerabilities fixed', value: '47' }, { label: 'Compliance score', value: '98%' }],
    duration: '6 months',
    clientSector: 'Financial services',
    accent: '#0EA5E9',
  },
  {
    _id: '2',
    title: 'E-Commerce Platform Hardening',
    category: 'Web Security',
    image: caseStudyImages.ecommerce,
    slug: 'ecommerce-hardening',
    excerpt: 'PCI scope reduction and resilient architecture for a high-traffic online retailer.',
    resultSnippet: 'Zero critical findings in follow-up',
    metrics: [{ label: 'Uptime', value: '99.9%' }],
    duration: '4 months',
    clientSector: 'E‑commerce',
    accent: '#7C3AED',
  },
  {
    _id: '3',
    title: 'Healthcare Data Protection',
    category: 'Compliance',
    image: caseStudyImages.healthcare,
    slug: 'healthcare-data',
    excerpt: 'PHI protection and regulatory alignment for a healthcare provider handling sensitive patient data.',
    resultSnippet: 'Full compliance achieved',
    metrics: [{ label: 'Data classification', value: 'Complete' }],
    duration: '8 months',
    clientSector: 'Healthcare',
    accent: '#F97316',
  },
];

export default function CaseStudyPreview() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get('/case-studies').then(setCases).catch(() => setCases(placeholderCases));
  }, []);

  const list = cases.length
    ? cases.slice(0, 3).map((c) => {
        const base = placeholderCases.find((p) => p.slug === c.slug) || {};
        return { ...base, ...c };
      })
    : placeholderCases;

  return (
    <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end flex-wrap gap-4 mb-12"
        >
          <div>
            <span className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.15em]">Case Studies</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
              Proof of Our Work
            </h2>
            <p className="mt-2 text-stone-600 max-w-xl">Real outcomes from real engagements—challenges we solved and results we delivered for clients across sectors.</p>
          </div>
          <Link to="/case-studies" className="text-[#0EA5E9] font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1">
            View all case studies
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
          {list.map((c, i) => (
            <motion.div
              key={c._id || c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="case-study-card group relative shrink-0 w-[min(360px,88vw)]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#7C3AED] to-[#F97316] opacity-0 case-study-card-border transition-opacity duration-300 -z-10" />
              <Link to={`/case-studies/${c.slug}`} className="block">
                <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:border-transparent transition-all duration-300 relative">
                  <div className="aspect-[4/3] relative">
                    {c.image && (
                      <img
                        src={c.image}
                        alt={`Case study: ${c.title}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-0 left-0 w-1 h-24 rounded-b-full opacity-90" style={{ backgroundColor: c.accent || '#0EA5E9' }} aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/92 via-stone-900/50 to-transparent" />
                    <div className="absolute inset-0 industries-card-shine overflow-hidden rounded-t-2xl pointer-events-none">
                      <div className="case-study-card-shine-bar absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.accent || '#38BDF8' }}>{c.category}</span>
                      <h3 className="mt-2 text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-[#38BDF8] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {c.title}
                      </h3>
                      {(c.excerpt || c.resultSnippet) && (
                        <p className="mt-2 text-sm text-stone-300 line-clamp-2">{c.excerpt || c.resultSnippet}</p>
                      )}
                      {c.metrics && c.metrics.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {c.metrics.slice(0, 2).map((m, j) => (
                            <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/15 text-white/95" style={{ borderColor: c.accent, borderWidth: 1 }}>
                              {m.value} {m.label}
                            </span>
                          ))}
                        </div>
                      )}
                      {c.duration && <p className="mt-2 text-xs text-stone-400">{c.duration} engagement</p>}
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: c.accent || '#0EA5E9' }}>
                        View Case Study
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
