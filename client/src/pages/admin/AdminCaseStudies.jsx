import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../../lib/api';

export default function AdminCaseStudies() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', slug: '', category: 'Security Assessment', client: '', challenge: '', solution: '', results: '', published: true, order: 0 });

  const load = () => api.get('/case-studies').then((d) => setItems(d.filter((x) => true)));

  useEffect(() => { load(); }, []);

  const save = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.put(`/case-studies/${editing._id}`, form);
      else await api.post('/case-studies', form);
      setEditing(null);
      setForm({ title: '', slug: '', category: 'Security Assessment', client: '', challenge: '', solution: '', results: '', published: true, order: 0 });
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  const remove = async (id) => {
    if (!confirm('Delete?')) return;
    await api.delete(`/case-studies/${id}`);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Case Studies</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={save} className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white">{editing ? 'Edit' : 'New case study'}</h2>
          {['title', 'slug', 'category', 'client', 'challenge', 'solution', 'results'].map((f) => (
            <input
              key={f}
              type="text"
              placeholder={f}
              value={form[f] || ''}
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            />
          ))}
          <label className="flex items-center gap-2 text-neutral-300">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            Published
          </label>
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#0B1C2D] font-medium">Save</button>
            {editing && <button type="button" onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-white/20 text-white">Cancel</button>}
          </div>
        </form>
        <div className="space-y-2">
          {items.map((p) => (
            <div key={p._id} className="flex justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <span className="font-medium text-white">{p.title}</span>
              <div className="flex gap-2">
                <button type="button" onClick={() => { setEditing(p); setForm({ title: p.title, slug: p.slug, category: p.category || '', client: p.client || '', challenge: p.challenge || '', solution: p.solution || '', results: p.results || '', published: p.published !== false, order: p.order || 0 }); }} className="text-[#00D4FF] text-sm">Edit</button>
                <button type="button" onClick={() => remove(p._id)} className="text-red-400 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
