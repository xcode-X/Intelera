import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../../lib/api';

export default function AdminServices() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', slug: '', shortDescription: '', description: '', icon: 'shield', published: true, order: 0 });

  const load = () => api.get('/services').then(setItems);

  useEffect(() => { load(); }, []);

  const save = async (e) => {
    e.preventDefault();
    try {
      if (editing) await api.put(`/services/${editing._id}`, form);
      else await api.post('/services', form);
      setEditing(null);
      setForm({ title: '', slug: '', shortDescription: '', description: '', icon: 'shield', published: true, order: 0 });
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  const remove = async (id) => {
    if (!confirm('Delete?')) return;
    await api.delete(`/services/${id}`);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Services</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={save} className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-semibold text-white">{editing ? 'Edit' : 'New service'}</h2>
          <input type="text" placeholder="Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: form.slug || e.target.value.toLowerCase().replace(/\s+/g, '-') })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
          <input type="text" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
          <input type="text" placeholder="Short description" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
          <textarea placeholder="Description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
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
                <button type="button" onClick={() => { setEditing(p); setForm({ title: p.title, slug: p.slug, shortDescription: p.shortDescription || '', description: p.description || '', icon: p.icon || 'shield', published: p.published !== false, order: p.order || 0 }); }} className="text-[#00D4FF] text-sm">Edit</button>
                <button type="button" onClick={() => remove(p._id)} className="text-red-400 text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
