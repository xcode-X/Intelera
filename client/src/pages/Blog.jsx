import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../lib/api';
import { blogImages } from '../lib/siteImages';

const placeholderPosts = [
  { slug: 'why-security-matters', title: 'Why Security Matters in 2025', excerpt: 'The threat landscape is evolving. Here is how to stay ahead.', category: 'Security', image: blogImages.security, publishedAt: '2025-01-15T00:00:00.000Z' },
  { slug: 'compliance-basics', title: 'Compliance Basics: SOC 2 vs ISO 27001', excerpt: 'A quick comparison to help you choose the right framework.', category: 'Compliance', image: blogImages.compliance, publishedAt: '2025-02-01T00:00:00.000Z' },
  { slug: 'secure-api-design', title: 'Secure API Design Principles', excerpt: 'Best practices for building APIs that resist common attacks.', category: 'Development', image: blogImages.development, publishedAt: '2025-02-20T00:00:00.000Z' },
];

export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const url = category ? `/blog?category=${encodeURIComponent(category)}` : '/blog';
    api.get(url).then(setPosts).catch(() => setPosts(placeholderPosts));
  }, [category]);

  const list = posts.length ? posts : placeholderPosts;
  const categories = [...new Set(list.map((p) => p.category))];
  const featured = list[0];

  return (
    <div className="pt-28 bg-white">
      <section className="py-[var(--spacing-section)] bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-[0_60%_60%_0_/0_50%_50%_0] bg-[#EDE9FE] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#7C3AED] font-semibold text-sm uppercase tracking-[0.2em]">Blog</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 text-4xl sm:text-5xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
            Insights & Updates
          </motion.h1>
          <p className="mt-4 text-stone-600 max-w-xl">Security best practices, compliance tips, threat updates, and company news. Written for technical and non-technical decision-makers.</p>
          <p className="mt-2 text-sm text-stone-500">Use the filters below to narrow by topic.</p>
        </div>
      </section>

      <section className="py-[var(--spacing-block)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            <button type="button" onClick={() => setCategory('')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${!category ? 'bg-[#F97316] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}`}>All</button>
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${category === cat ? 'bg-[#F97316] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'}`}>{cat}</button>
            ))}
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="group block mb-12">
              <div className="grid lg:grid-cols-2 gap-8 bg-stone-50 rounded-2xl overflow-hidden border border-stone-200/80 group-hover:border-[#0EA5E9]/30 group-hover:shadow-[var(--shadow-hover)] transition-all">
                <div className="aspect-[16/10] lg:aspect-auto bg-stone-200 relative overflow-hidden">
                  {featured.image && (
                    <img src={featured.image} alt={`Featured: ${featured.title}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  )}
                  {!featured.image && <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] to-[#EDE9FE]" />}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-wider">Featured</span>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900 group-hover:text-[#7C3AED] transition">{featured.title}</h2>
                  <p className="mt-4 text-stone-600">{featured.excerpt}</p>
                  <span className="mt-4 text-[#F97316] font-semibold group-hover:underline">Read more →</span>
                </div>
              </div>
            </Link>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.slice(featured ? 1 : 0).map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="aspect-[16/10] rounded-2xl bg-stone-100 border border-stone-200/80 group-hover:border-[#0EA5E9]/30 overflow-hidden relative">
                    {post.image ? (
                      <img src={post.image} alt={`Blog: ${post.title}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-[#E0F2FE]/80 to-[#FFEDD5]/80" />
                    )}
                  </div>
                  <span className="mt-4 block text-xs text-[#7C3AED] font-semibold uppercase tracking-wider">{post.category}</span>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:text-[#0EA5E9] transition">{post.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 line-clamp-2">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>Stay updated</h2>
          <p className="mt-3 text-stone-600">Get new posts and security insights in your inbox. No spam—unsubscribe anytime.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition">
            Subscribe to newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}

export function BlogPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/blog/${slug}`).then(setPost).catch(() => {
      const p = placeholderPosts.find((x) => x.slug === slug) || placeholderPosts[0];
      setPost({ ...p, content: '<p>Content will be loaded from the CMS. This is placeholder text for the blog post.</p>' });
    });
  }, [slug]);

  if (!post) return <div className="pt-28 min-h-screen flex items-center justify-center bg-white text-stone-600">Loading...</div>;

  return (
    <div className="pt-28 bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-[var(--spacing-block)]">
        <Link to="/blog" className="text-[#0EA5E9] text-sm font-semibold hover:underline">← Blog</Link>
        <span className="block mt-4 text-[#7C3AED] text-sm font-semibold uppercase tracking-wider">{post.category}</span>
        <h1 className="mt-2 text-4xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-display)' }}>
          {post.title}
        </h1>
        <p className="mt-4 text-stone-600">{post.excerpt}</p>
        {post.image && (
          <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200/80 aspect-[16/10] bg-stone-100">
            <img src={post.image} alt={`Blog: ${post.title}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}
        <div className="mt-8 prose prose-stone max-w-none text-stone-600" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </article>
    </div>
  );
}
