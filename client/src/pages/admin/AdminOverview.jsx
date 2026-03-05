import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../lib/api';

export default function AdminOverview() {
  const [stats, setStats] = useState({ blog: 0, caseStudies: 0, services: 0, contacts: 0 });

  useEffect(() => {
    Promise.all([
      api.get('/blog').then((d) => d.length),
      api.get('/case-studies').then((d) => d.length),
      api.get('/services').then((d) => d.length),
      api.get('/contact').then((d) => d.length),
    ])
      .then(([blog, caseStudies, services, contacts]) => setStats({ blog, caseStudies, services, contacts }))
      .catch(() => {});
  }, []);

  const cards = [
    { label: 'Blog posts', key: 'blog', to: '/admin/blog', color: 'from-[#00D4FF] to-cyan-600' },
    { label: 'Case studies', key: 'caseStudies', to: '/admin/case-studies', color: 'from-violet-500 to-purple-600' },
    { label: 'Services', key: 'services', to: '/admin/services', color: 'from-emerald-500 to-green-600' },
    { label: 'Contact submissions', key: 'contacts', to: '/admin/contacts', color: 'from-amber-500 to-orange-600' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard Overview</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link to={c.to} className="block p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF]/30 transition">
              <p className="text-neutral-400 text-sm">{c.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{stats[c.key] ?? 0}</p>
              <span className="mt-2 inline-block text-sm text-[#00D4FF]">View →</span>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
        <h2 className="text-lg font-semibold text-white mb-4">Quick actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/admin/blog" className="px-4 py-2 rounded-lg bg-[#00D4FF]/20 text-[#00D4FF] hover:bg-[#00D4FF]/30">Add blog post</Link>
          <Link to="/admin/case-studies" className="px-4 py-2 rounded-lg bg-[#00D4FF]/20 text-[#00D4FF] hover:bg-[#00D4FF]/30">Add case study</Link>
          <Link to="/admin/services" className="px-4 py-2 rounded-lg bg-[#00D4FF]/20 text-[#00D4FF] hover:bg-[#00D4FF]/30">Add service</Link>
        </div>
      </div>
    </div>
  );
}
