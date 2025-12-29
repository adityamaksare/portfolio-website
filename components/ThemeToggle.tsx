'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-50 p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all group"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiSun className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiMoon className="w-6 h-6 text-white group-hover:-rotate-12 transition-transform duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
