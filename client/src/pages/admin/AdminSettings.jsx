import { motion } from 'framer-motion';

export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Settings</h1>
      <div className="max-w-xl space-y-6 p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-neutral-400">Dashboard and API settings can be extended here (e.g. site title, SMTP, analytics).</p>
      </div>
    </div>
  );
}
