import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../../lib/api';

export default function AdminContacts() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/contact').then(setList).catch(() => setList([]));
  }, []);

  const markRead = async (id) => {
    await api.patch(`/contact/${id}/read`, { read: true });
    setList((prev) => prev.map((c) => (c._id === id ? { ...c, read: true } : c)));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Contact Submissions</h1>
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-neutral-400 font-medium">Name</th>
              <th className="p-4 text-neutral-400 font-medium">Email</th>
              <th className="p-4 text-neutral-400 font-medium">Subject</th>
              <th className="p-4 text-neutral-400 font-medium">Date</th>
              <th className="p-4 text-neutral-400 font-medium">Read</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr key={c._id} className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4 text-white">{c.name}</td>
                <td className="p-4 text-neutral-300">{c.email}</td>
                <td className="p-4 text-neutral-300">{c.subject || '—'}</td>
                <td className="p-4 text-neutral-500 text-sm">{new Date(c.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  {!c.read && <button type="button" onClick={() => markRead(c._id)} className="text-[#00D4FF] text-sm">Mark read</button>}
                  {c.read && <span className="text-neutral-500 text-sm">Read</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {list.length === 0 && <p className="p-8 text-neutral-500">No submissions yet.</p>}
      </div>
    </div>
  );
}
