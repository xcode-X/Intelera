import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroImage } from '../../lib/siteImages';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Background — soft gradient and one accent shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE]/40 via-white to-[#EDE9FE]/30" />
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#0EA5E9]/10"
        />
        <svg className="absolute bottom-0 left-0 w-full h-20 text-white" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" aria-hidden>
          <path d="M0 80V40 Q360 0 720 40 T1440 40 V80 Z" fill="currentColor" className="text-stone-50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-[0.2em] mb-5"
            >
              Cybersecurity & Secure Web Engineering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E293B] leading-[1.06] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Intelligent Security.{' '}
              <span className="gradient-text">Engineered</span>
              <br />
              Digital Power.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-6 text-lg text-stone-600 max-w-lg leading-relaxed"
            >
              We protect enterprises with elite cybersecurity solutions and secure web engineering—from vulnerability assessments and compliance readiness to secure development and ongoing monitoring. Based in Monrovia, Liberia, we serve clients across West Africa and beyond.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="mt-3 text-sm text-stone-500"
            >
              Trusted by financial institutions, healthcare providers, and technology companies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F97316] text-white font-semibold text-base hover:bg-[#EA580C] transition glow-orange"
              >
                Get Free Security Consultation
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0EA5E9] text-[#0EA5E9] font-semibold hover:bg-[#0EA5E9] hover:text-white transition"
              >
                Explore Our Expertise
              </Link>
            </motion.div>
          </div>

          {/* Right: hero UI image — larger, with fill overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22, delay: 0.2 }}
            className="relative hidden lg:block w-full"
          >
            <div className="relative max-w-[640px] xl:max-w-[720px] ml-auto w-full">
              {/* Decorative frame / shadow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#7C3AED]/20 opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200/50 bg-stone-100">
                <div className="aspect-[4/3] min-h-[380px] xl:min-h-[440px] relative">
                  <img
                    src={heroImage}
                    alt="Security and analytics dashboard UI"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Softer overlay that ensures visibility */}
                  <div
                    className="absolute inset-0 bg-stone-900/10 pointer-events-none"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/10 via-transparent to-[#7C3AED]/10 mix-blend-overlay pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-stone-400 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-11 rounded-full border-2 border-stone-300 flex justify-center pt-2"
          >
            <span className="w-1.5 h-2 rounded-full bg-[#0EA5E9]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
