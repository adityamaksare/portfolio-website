'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiMail, HiLocationMarker, HiDownload, HiChatAlt2, HiSparkles } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: personalInfo.github,
      username: '@adityamaksare',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      hoverColor: 'hover:bg-gray-900 dark:hover:bg-white',
      iconHoverColor: 'group-hover:text-white dark:group-hover:text-gray-900',
      iconColor: 'text-gray-700 dark:text-gray-300',
      textHoverColor: 'group-hover:text-white dark:group-hover:text-gray-900'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      username: 'Aditya Maksare',
      bgColor: 'bg-primary-50 dark:bg-primary-900/20',
      hoverColor: 'hover:bg-primary-600',
      iconHoverColor: 'group-hover:text-white',
      iconColor: 'text-primary-600 dark:text-primary-400',
      textHoverColor: 'group-hover:text-white'
    },
    {
      icon: HiMail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      username: personalInfo.email,
      bgColor: 'bg-accent-50 dark:bg-accent-900/20',
      hoverColor: 'hover:bg-accent-600',
      iconHoverColor: 'group-hover:text-white',
      iconColor: 'text-accent-600 dark:text-accent-400',
      textHoverColor: 'group-hover:text-white'
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-500/20 mb-6">
            <HiChatAlt2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for Opportunities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking data engineering opportunities at fintech companies and startups.
            Let's collaborate on building robust, scalable real-time data infrastructure.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-12">
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-50">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"
              />
            </div>

            <div className="relative">
              {/* Location & Availability */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <HiLocationMarker className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Based in</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <HiSparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 animate-pulse" />
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Role</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{personalInfo.targetRole}</div>
                  </div>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative p-4 sm:p-5 md:p-6 rounded-2xl ${link.bgColor} ${link.hoverColor} transition-all duration-300 shadow-lg hover:shadow-2xl`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-gray-900/50 transition-colors">
                          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${link.iconColor} ${link.iconHoverColor} transition-colors`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-medium text-gray-600 dark:text-gray-400 ${link.textHoverColor} mb-1 transition-colors`}>
                            {link.label}
                          </div>
                          <div className={`text-sm font-bold text-gray-900 dark:text-gray-100 ${link.textHoverColor} truncate transition-colors`}>
                            {link.username}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Download Resume Button */}
              <div className="flex justify-center">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download="Aditya-Maksare-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 hover:from-primary-700 hover:via-primary-600 hover:to-accent-600 text-white rounded-2xl font-bold shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all text-base sm:text-lg"
                >
                  <HiDownload className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
