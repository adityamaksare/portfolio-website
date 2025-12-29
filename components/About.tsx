'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiShieldCheck, HiDatabase, HiChip, HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { personalInfo, currentlyLearning } from '@/data/portfolio';

export default function About() {
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

  const highlights = [
    {
      icon: HiLightningBolt,
      title: "Real-Time Stream Processing",
      description: "Expert in Apache Kafka and PySpark Structured Streaming for high-throughput data pipelines",
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      iconColor: "text-primary-600 dark:text-primary-400"
    },
    {
      icon: HiShieldCheck,
      title: "Fault-Tolerant Architecture",
      description: "Designing resilient systems with checkpointing, retry logic, and zero data loss",
      color: "from-accent-400 to-accent-600",
      bgColor: "bg-accent-50 dark:bg-accent-900/20",
      iconColor: "text-accent-600 dark:text-accent-400"
    },
    {
      icon: HiDatabase,
      title: "Data Quality Frameworks",
      description: "Implementing validation layers, DLQ patterns, and monitoring for production reliability",
      color: "from-primary-600 to-accent-500",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      iconColor: "text-primary-600 dark:text-primary-400"
    }
  ];

  const stats = [
    { value: "2", label: "Major Projects", icon: HiCode },
    { value: "95%+", label: "Accuracy", icon: HiCheckCircle },
    { value: "14K+", label: "Events/Day", icon: HiLightningBolt },
    { value: "Zero", label: "Data Loss", icon: HiShieldCheck }
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
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
            <HiSparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Get to Know Me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - About Text */}
          <motion.div variants={itemVariants}>
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-full"></div>

              <div className="relative space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-lg">
                    <HiCode className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      {personalInfo.role}
                    </p>
                  </div>
                </div>

                {personalInfo.about.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base"
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* Experience Badge */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 border border-primary-200 dark:border-primary-800">
                    <HiChip className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {personalInfo.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 border border-accent-200 dark:border-accent-800">
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div variants={itemVariants} className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`group relative p-6 rounded-2xl ${highlight.bgColor} border-2 border-transparent hover:border-primary-500/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>

                <div className="relative flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-xl bg-white dark:bg-gray-900 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className={`w-7 h-7 ${highlight.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative p-4 sm:p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500/50 text-center transition-all shadow-lg hover:shadow-xl">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div variants={itemVariants}>
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800 shadow-xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Currently Learning
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent rounded-full"></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentlyLearning.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group relative px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full group-hover:animate-ping"></div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
