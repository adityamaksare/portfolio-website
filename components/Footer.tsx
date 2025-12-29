'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { HiMail, HiCode, HiLightningBolt } from 'react-icons/hi';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // Show button when user is near the bottom (within 500px of bottom)
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 500;
      setShowScrollTop(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      href: personalInfo.github,
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: FaLinkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: HiMail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:bg-primary-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: HiCode },
    { name: 'Skills', href: '#skills', icon: HiLightningBolt },
    { name: 'Projects', href: '#projects', icon: HiCode },
    { name: 'Journey', href: '#journey', icon: HiLightningBolt },
    { name: 'Contact', href: '#contact', icon: HiMail }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {personalInfo.name.split(' ')[0]}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {personalInfo.role} specializing in real-time streaming pipelines, Apache Kafka, and PySpark.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-all group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary-500 transition-colors" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-800/80 backdrop-blur-sm ${link.color} transition-all shadow-lg hover:shadow-xl`}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-6 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <p className="text-xs text-gray-500 mb-1">Based in</p>
              <p className="text-sm font-semibold text-gray-300">{personalInfo.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="text-primary-400 font-semibold">{personalInfo.name}</span>
              <span>· All rights reserved</span>
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span>Built with</span>
              <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </p>
          </div>
        </motion.div>

      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-shadow"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
