import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../../lib/api';

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', category: 'Security', published: false });

  const load = () => api.get('/blog').then(setPosts);

  useEffect(() => { load(); }, []);

  const save = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/blog/${editing._id}`, form);
      } else {
        await api.post('/blog', form);
      }
      setEditing(null);
      setForm({ title: '', slug: '', excerpt: '', content: '', category: 'Security', published: false });
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  const remove = async (id) => {
    if (!confirm('Delete this post?')) return;
    await api.delete(`/blog/${id}`);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Blog Management</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={save} className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold text-white">{editing ? 'Edit post' : 'New post'}</h2>
            <input
              type="text"
              placeholder="Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            <input
              type="text"
              placeholder="Slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            <input
              type="text"
              placeholder="Excerpt"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            <label className="flex items-center gap-2 text-neutral-300">
              <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
              Published
            </label>
            <textarea
              placeholder="Content (HTML ok)"
              rows={4}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#0B1C2D] font-medium">Save</button>
              {editing && (
                <button type="button" onClick={() => { setEditing(null); setForm({ title: '', slug: '', excerpt: '', content: '', category: 'Security', published: false }); }} className="px-4 py-2 rounded-lg border border-white/20 text-white">Cancel</button>
              )}
            </div>
          </form>
        </div>
        <div className="space-y-2">
          {posts.map((p) => (
            <div key={p._id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div>
                <span className="font-medium text-white">{p.title}</span>
                <span className="ml-2 text-xs text-neutral-500">{p.published ? 'Published' : 'Draft'}</span>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => { setEditing(p); setForm({ title: p.title, slug: p.slug, excerpt: p.excerpt || '', content: p.content || '', category: p.category || 'Security', published: !!p.published }); }} className="text-[#00D4FF] text-sm">Edit</button>
                <button type="button" onClick={() => remove(p._id)} className="text-red-400 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
