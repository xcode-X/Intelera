import { useState } from 'react';
import { motion } from 'framer-motion';

const checklistItems = [
  'Inventory all internet-facing assets',
  'Enable MFA for all privileged accounts',
  'Patch critical systems within 30 days',
  'Segment network and restrict lateral movement',
  'Backup critical data and test restore',
  'Define incident response plan',
  'Conduct security awareness training',
  'Review and restrict admin access',
];

export default function ChecklistDownload() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const text = `Intelera Cybersecurity Checklist\n${checklistItems.map((x, i) => `${i + 1}. ${x}`).join('\n')}\n\n— Intelera | Monrovia, Liberia`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'intelera-cybersecurity-checklist.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
    >
      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Free resource</h4>
      <p className="mt-1.5 text-base font-semibold text-[#A78BFA]">Cybersecurity Checklist</p>
      <p className="mt-1 text-sm text-stone-400">A concise checklist to improve your security posture.</p>
      <button
        type="button"
        onClick={handleDownload}
        className="mt-4 w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#7C3AED]/20 text-[#A78BFA] font-semibold text-sm border border-[#7C3AED]/30 hover:bg-[#7C3AED]/30 transition"
      >
        {downloaded ? 'Downloaded ✓' : 'Download checklist'}
      </button>
    </motion.div>
  );
}
