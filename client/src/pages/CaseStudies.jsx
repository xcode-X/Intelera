import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../lib/api';
import { caseStudyImages } from '../lib/siteImages';

const placeholderCases = [
  {
    slug: 'financial-security',
    title: 'Financial Services Security Overhaul',
    category: 'Compliance',
    image: caseStudyImages.financial,
    client: 'Confidential',
    excerpt: 'A regional bank needed to close compliance gaps and harden legacy systems ahead of a SOC 2 audit.',
    challenge: 'Legacy systems, fragmented tooling, and compliance gaps ahead of a SOC 2 audit. Limited in-house security expertise.',
    solution: 'Full scoped assessment, prioritized remediation roadmap, and phased implementation with policy and control documentation. Training for internal teams.',
    results: '100% audit readiness within 6 months. 47 critical/high vulnerabilities remediated. Compliance score 98%.',
    metrics: [{ label: 'Vulnerabilities fixed', value: '47' }, { label: 'Compliance score', value: '98%' }, { label: 'Timeline', value: '6 months' }],
    resultSnippet: 'SOC 2 readiness in 6 months',
    duration: '6 months',
    clientSector: 'Financial services',
    accent: '#0EA5E9',
  },
  {
    slug: 'ecommerce-hardening',
    title: 'E-Commerce Platform Hardening',
    category: 'Web Security',
    image: caseStudyImages.ecommerce,
    client: 'Confidential',
    excerpt: 'PCI scope reduction and resilient architecture for a high-traffic online retailer.',
    challenge: 'PCI DSS scope creep, API and payment flow exposure, and availability requirements under peak load.',
    solution: 'WAF deployment, secure API design review, DDoS mitigation strategy, and 24/7 monitoring playbooks. PCI scope reduction through segmentation.',
    results: 'Zero critical findings in follow-up assessment. 99.9% uptime through load and resilience testing. PCI scope reduced by 40%.',
    metrics: [{ label: 'Uptime', value: '99.9%' }, { label: 'Critical findings', value: '0' }, { label: 'Timeline', value: '4 months' }],
    resultSnippet: 'Zero critical findings in follow-up',
    duration: '4 months',
    clientSector: 'E‑commerce',
    accent: '#7C3AED',
  },
  {
    slug: 'healthcare-data',
    title: 'Healthcare Data Protection',
    category: 'Compliance',
    image: caseStudyImages.healthcare,
    client: 'Confidential',
    excerpt: 'PHI protection and regulatory alignment for a healthcare provider handling sensitive patient data.',
    challenge: 'PHI in legacy and cloud systems, multiple regulatory requirements (HIPAA, local health authority), and inconsistent access controls.',
    solution: 'Data classification and mapping, encryption at rest and in transit, role-based access controls, and policy and procedure documentation. Staff training and audit support.',
    results: 'Full compliance achieved with regulatory review. Complete data classification and retention schedules. No incidents during audit period.',
    metrics: [{ label: 'Data classification', value: 'Complete' }, { label: 'Audit outcome', value: 'Passed' }, { label: 'Timeline', value: '8 months' }],
    resultSnippet: 'Full compliance achieved',
    duration: '8 months',
    clientSector: 'Healthcare',
    accent: '#F97316',
  },
];

export function CaseStudiesList() {
  const [cases, setCases] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const url = category ? `/case-studies?category=${encodeURIComponent(category)}` : '/case-studies';
    api.get(url).then(setCases).catch(() => setCases(placeholderCases));
  }, [category]);

  const list = cases.length
    ? cases.map((c) => {
        const base = placeholderCases.find((p) => p.slug === c.slug) || {};
        return { ...base, ...c };
      })
    : placeholderCases;
  const categories = [...new Set(list.map((c) => c.category))];

  return (
    <div className="pt-28 bg-white">
      <section className="py-[var(--spacing-section)] bg-stone-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-[50%_50%_0_0_/100%_100%_0_0] bg-[#E0F2FE] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Case Studies</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 text-4xl sm:text-5xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            Proof of Our Work
          </motion.h1>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">Real outcomes from real engagements—challenges we solved and results we delivered for clients across sectors.</p>
          <p className="mt-2 text-sm text-stone-500 max-w-xl mx-auto">Filter by category to find examples closest to your sector.</p>
        </div>
      </section>

      <section className="py-[var(--spacing-block)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            <button type="button" onClick={() => setCategory('')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${!category ? 'bg-[#F97316] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}`}>
              All
            </button>
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${category === cat ? 'bg-[#F97316] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}`}>
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c, i) => (
              <motion.div key={c.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -8, scale: 1.02 }} className="case-study-card group relative h-full">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#7C3AED] to-[#F97316] opacity-0 case-study-card-border transition-opacity duration-300 -z-10" />
                <Link to={`/case-studies/${c.slug}`} className="block h-full">
                  <div className="rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:border-transparent transition-all duration-300 relative h-full flex flex-col">
                    <div className="aspect-[4/3] relative">
                      {c.image && (
                        <img src={c.image} alt={`Case study: ${c.title}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      )}
                      <div className="absolute top-0 left-0 w-1 h-24 rounded-b-full opacity-90" style={{ backgroundColor: c.accent || '#0EA5E9' }} aria-hidden />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/92 via-stone-900/50 to-transparent" />
                      <div className="absolute inset-0 industries-card-shine overflow-hidden rounded-t-2xl pointer-events-none">
                        <div className="case-study-card-shine-bar absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.accent || '#38BDF8' }}>{c.category}</span>
                        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-[#38BDF8] transition" style={{ fontFamily: 'var(--font-display)' }}>{c.title}</h3>
                        {(c.excerpt || c.resultSnippet) && (
                          <p className="mt-2 text-sm text-stone-300 line-clamp-2">{c.excerpt || c.resultSnippet}</p>
                        )}
                        {c.metrics && c.metrics.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {c.metrics.slice(0, 2).map((m, j) => (
                              <span key={j} className="text-xs font-medium text-white/95 bg-white/15 px-2.5 py-1 rounded-lg" style={{ borderColor: c.accent, borderWidth: 1 }}>
                                {m.value} {m.label}
                              </span>
                            ))}
                          </div>
                        )}
                        {c.duration && <p className="mt-2 text-xs text-stone-400">{c.duration} engagement</p>}
                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: c.accent || '#0EA5E9' }}>
                          View Case Study
                          <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>Have a similar challenge?</h2>
          <p className="mt-3 text-stone-600">We can help you achieve comparable outcomes. Share your context and we’ll outline a path.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold hover:bg-[#0284C7] transition">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export function CaseStudyDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    api.get(`/case-studies/${slug}`)
      .then((data) => setItem(data))
      .catch(() => {
        const found = placeholderCases.find((c) => c.slug === slug);
        if (found) setItem({ ...found });
        else { setItem(null); setNotFound(true); }
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="pt-28 min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>Case study not found</h1>
        <p className="mt-2 text-stone-600 text-center max-w-md">The case study you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/case-studies" className="mt-6 px-6 py-3 rounded-xl bg-[#0EA5E9] text-white font-semibold hover:bg-[#0284C7] transition">
          View all case studies
        </Link>
      </div>
    );
  }

  if (!item) return <div className="pt-28 min-h-screen flex items-center justify-center bg-white text-stone-600">Loading...</div>;

  return (
    <div className="pt-28 bg-white">
      <section className="py-[var(--spacing-section)] bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-[50%_0_50%_50%_/50%_50%_0_50%] bg-[#EDE9FE] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/case-studies" className="text-[#0EA5E9] text-sm font-semibold hover:underline">← Case Studies</Link>
          <span className="block mt-4 text-[#7C3AED] text-sm font-semibold uppercase tracking-wider">{item.category}</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            {item.title}
          </h1>
          {item.image && (
            <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200/80 aspect-[21/9] max-h-[280px] bg-stone-100">
              <img src={item.image} alt={`Case study: ${item.title}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
          {item.client && <p className="mt-4 text-stone-600">Client: {item.client}</p>}
          <p className="mt-2 text-stone-500 text-sm max-w-2xl">An overview of the challenge we addressed, the approach we took, and the outcomes achieved. Details are anonymized to protect client confidentiality.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-[var(--spacing-block)] space-y-12">
        {item.challenge && (
          <div>
            <h2 className="text-xl font-semibold text-stone-900">Challenge</h2>
            <p className="mt-2 text-stone-600">{item.challenge}</p>
          </div>
        )}
        {item.solution && (
          <div>
            <h2 className="text-xl font-semibold text-stone-900">Solution</h2>
            <p className="mt-2 text-stone-600">{item.solution}</p>
          </div>
        )}
        {item.results && (
          <div>
            <h2 className="text-xl font-semibold text-stone-900">Results</h2>
            <p className="mt-2 text-stone-600">{item.results}</p>
          </div>
        )}
        {item.metrics?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {item.metrics.map((m, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-4 text-center border border-stone-200/80">
                <div className="text-2xl font-bold text-[#0EA5E9]">{m.value}</div>
                <div className="text-sm text-stone-500">{m.label}</div>
              </div>
            ))}
          </div>
        )}
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-[#EA580C] shadow-lg shadow-orange-200/50 transition">
          Start your project
        </Link>
        <div className="pt-12 mt-12 border-t border-stone-200">
          <p className="text-stone-500 text-sm">Have a similar challenge? We can help you achieve comparable outcomes. <Link to="/contact" className="text-[#0EA5E9] font-medium hover:underline">Get in touch</Link> to discuss your context.</p>
        </div>
      </div>
    </div>
  );
}
