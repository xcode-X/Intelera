import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WORD = 'Intelera';
const CHAR_DELAY_MS = 120;
const CURSOR_BLINK_MS = 530;

export default function RouteLoadingScreen() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState('');
  const prevKeyRef = useRef(location.key);
  const isFirstMount = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevKeyRef.current = location.key;
      return;
    }
    if (location.key === prevKeyRef.current) return;
    prevKeyRef.current = location.key;

    setVisible(true);
    setTyped('');

    let charIndex = 0;
    const intervalId = setInterval(() => {
      charIndex += 1;
      if (charIndex <= WORD.length) setTyped(WORD.slice(0, charIndex));
      if (charIndex >= WORD.length) {
        clearInterval(intervalId);
        timeoutRef.current = setTimeout(() => setVisible(false), 400);
      }
    }, CHAR_DELAY_MS);

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [location.key]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="flex items-baseline justify-center gap-0.5">
            <span
              className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {typed}
            </span>
            <span
              className="inline-block w-0.5 h-8 sm:h-9 bg-[#7C3AED] animate-cursor"
              style={{ animationDuration: `${CURSOR_BLINK_MS}ms` }}
              aria-hidden
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
